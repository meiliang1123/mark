import Config from "../config/mysql";
var mysql = require('mysql');

//
//var connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'dbuser',
//    password: 's3kreee7'
//})
//
//connection.connect()
//
//connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//    if (err) throw err
//
//    console.log('The solution is: ', rows[0].solution)
//})
//
//connection.end()

function _genSaveSql(data, info, table){
    let upd =[];
    Object.keys(data).map((k)=>{
        if(!info[k]) {
            delete data[k] ;
            return;
        }
        if(typeof data[k] == "object"){
            data[k] = escape(JSON.stringify(data[k]));
        }

        upd.push(`${k}='${data[k]}'`);
    })



    return `insert into ${table} (${Object.keys(data).join(",")}) values ('${Object.values(data).join("','")}') on duplicate key update ${upd.join(", ")}`;

}

function _genSelectSql(data, info, table){
    let upd =["1=1"];
    Object.keys(data).map((k)=>{

        if(!info[k]) {
            delete data[k] ;
            return;
        }
        if(typeof data[k] == "object"){
            data[k] = escape(JSON.stringify(data[k]));
        }

        upd.push(`${k}='${data[k]}'`);
    })
    return `select * from  ${table} where ${upd.join(" and ")}`;
}

function _newConnection(conf, obj){
    console.log("new connection");
    var conn = mysql.createConnection(conf);
    conn.connect();
    conn.on("error", ()=>{_newConnection(conf, obj)})
    obj.conn = conn;
}

class Mysql {
    constructor(conf){
        _newConnection(conf,this);
    }
    get(table, where){
        if ("string" != typeof table) return "err table name";
        return this.getFields(table).then(
            (info)=>this.query(_genSelectSql(where, info, table))
        );

    }
    getOne(table,where){
        return this.get(table, where).then((data)=>{return data[0]});
    }
    save(table,data){
            if ("string" != typeof table) return "err table name";
            return this.getFields(table).then((info)=> {
                var sql = _genSaveSql(data, info, table);
                return this.query(sql);
            })

    }
    getFields(table){
            let sql = `show columns from ${this.conn.config.database}.${table};`;
            return this.query(sql).then( (fields)=> fields.reduce((v, f )=>{if(f.Key == "PRI") v.pk = f.Field; v[f.Field] = f.Type; return v;},{}) )
    }

    query(sql){
        return new Promise((resolve,reject)=>{
            this.conn.query(sql, (err, ret)=>{
                if(err) console.log(sql, err);
                resolve(ret);
            })
        })
    }
}


var _instance = {};
export default function factory(key = "user"){
    let conf = Config[key];
    if(!_instance[key]){

        _instance[key] = new Mysql(conf);
    }

    return _instance[key];
}

