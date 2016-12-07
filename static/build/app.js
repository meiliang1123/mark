webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(172);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _reactAddonsCssTransitionGroup = __webpack_require__(227);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _fastclick = __webpack_require__(234);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	var _IndexCtrl = __webpack_require__(235);

	var _IndexCtrl2 = _interopRequireDefault(_IndexCtrl);

	var _InvolveCtrl = __webpack_require__(432);

	var _InvolveCtrl2 = _interopRequireDefault(_InvolveCtrl);

	var _LoginCtrl = __webpack_require__(434);

	var _LoginCtrl2 = _interopRequireDefault(_LoginCtrl);

	var _MeCtrl = __webpack_require__(436);

	var _MeCtrl2 = _interopRequireDefault(_MeCtrl);

	var _OrderCtrl = __webpack_require__(437);

	var _OrderCtrl2 = _interopRequireDefault(_OrderCtrl);

	var _PartnerCtrl = __webpack_require__(438);

	var _PartnerCtrl2 = _interopRequireDefault(_PartnerCtrl);

	var _ProductCtrl = __webpack_require__(439);

	var _ProductCtrl2 = _interopRequireDefault(_ProductCtrl);

	var _MyInfoCtrl = __webpack_require__(746);

	var _MyInfoCtrl2 = _interopRequireDefault(_MyInfoCtrl);

	__webpack_require__(442);

	var _Cart = __webpack_require__(446);

	var _lib = __webpack_require__(297);

	var _icon_nav_grid = __webpack_require__(447);

	var _icon_nav_grid2 = _interopRequireDefault(_icon_nav_grid);

	var _icon_nav_yes = __webpack_require__(448);

	var _icon_nav_yes2 = _interopRequireDefault(_icon_nav_yes);

	var _icon_nav_actionSheet = __webpack_require__(747);

	var _icon_nav_actionSheet2 = _interopRequireDefault(_icon_nav_actionSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by MarkMei 2016.4.7
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	//import 'babel-polyfill';

	//import {IndexCtrl,LoginCtrl,InvolveCtrl,MeCtrl,OrderCtrl,PartnerCtrl,ProductCtrl} from "./view/index"

	var Transitor = function (_React$Component) {
	    _inherits(Transitor, _React$Component);

	    function Transitor() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Transitor);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Transitor.__proto__ || Object.getPrototypeOf(Transitor)).call.apply(_ref, [this].concat(args))), _this), _this.state = { tab: "" }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Transitor, [{
	        key: "tab",
	        value: function tab(_ref2) {
	            var _tab = _ref2.tab;

	            this.setState({ tab: _tab });
	            this.props.router.push("/" + _tab);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _reactAddonsCssTransitionGroup2.default,
	                {
	                    component: "div",
	                    transitionName: "page",
	                    transitionEnterTimeout: 500,
	                    transitionLeaveTimeout: 500,
	                    style: { height: '100%' }
	                },
	                _react2.default.createElement(
	                    _lib.Tab,
	                    null,
	                    _react2.default.createElement(
	                        _lib.TabBody,
	                        null,
	                        _react2.default.createElement(
	                            _reactAddonsCssTransitionGroup2.default,
	                            {
	                                component: "div",
	                                className: "transitor",
	                                transitionName: "page",
	                                transitionEnterTimeout: 500,
	                                transitionLeaveTimeout: 500,
	                                style: { height: '100%', paddingBottom: "50px" }
	                            },
	                            _react2.default.cloneElement(this.props.children, {
	                                key: this.props.location.pathname
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(_Cart.CartIcon, null),
	                    _react2.default.createElement(
	                        _lib.TabBar,
	                        null,
	                        _react2.default.createElement(_lib.TabBarItem, {
	                            active: this.state.tab == "index",
	                            onClick: function onClick(e) {
	                                return _this2.tab({ tab: "index" });
	                            },
	                            icon: _react2.default.createElement("img", { src: _icon_nav_grid2.default }),
	                            label: "\u9996\u9875"
	                        }),
	                        _react2.default.createElement(_lib.TabBarItem, {
	                            active: this.state.tab == "involve",
	                            onClick: function onClick(e) {
	                                return _this2.tab({ tab: "involve" });
	                            },
	                            icon: _react2.default.createElement("img", { src: _icon_nav_yes2.default }),
	                            label: "\u52A0\u5165\u6211\u4EEC"
	                        }),
	                        _react2.default.createElement(_lib.TabBarItem, {
	                            active: this.state.tab == "me",
	                            onClick: function onClick(e) {
	                                return _this2.tab({ tab: "me" });
	                            },
	                            icon: _react2.default.createElement("img", { src: _icon_nav_actionSheet2.default }),
	                            label: "\u4E2A\u4EBA\u4E2D\u5FC3"
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return Transitor;
	}(_react2.default.Component);

	window.addEventListener('load', function () {
	    _fastclick2.default.attach(document.body);
	});

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: "/", component: Transitor },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexCtrl2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: "/index", component: _IndexCtrl2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: "/product(/:id)", component: _ProductCtrl2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: "/involve", component: _InvolveCtrl2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: "/me", component: _MeCtrl2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: "/order", component: _OrderCtrl2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: "/partner", component: _PartnerCtrl2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: "/myinfo", component: _MyInfoCtrl2.default })
	    )
	), document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProductStore = __webpack_require__(236);

	var _ProductStore2 = _interopRequireDefault(_ProductStore);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	var _reactRouter = __webpack_require__(172);

	var _IndexView = __webpack_require__(294);

	var _IndexView2 = _interopRequireDefault(_IndexView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, View);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            "products": Object.values(_ProductStore2.default.get()),
	            "saler": _UserStore2.default.saler()
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(View, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            document.title = "markme· 心生MALL";
	            _UserStore2.default.send({ action: 'product.get' });
	            _UserStore2.default.saler().on("change", function (arg) {
	                return _this2.setState({ saler: _UserStore2.default.saler() });
	            });
	            _ProductStore2.default.on("change", function () {
	                _this2.setState({ "products": Object.values(_ProductStore2.default.get()) });
	            });
	        }
	    }, {
	        key: "onProduct",
	        value: function onProduct(id) {
	            this.props.router.push("/product/" + id);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var events = {
	                onProduct: this.onProduct.bind(this)
	            };
	            return _react2.default.createElement(_IndexView2.default, _extends({}, this.state, events));
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	/*
	 * <section>

	 <h2>电商首页，类似微信购物入口京东首页</h2>
	 <h3>链接客户的代购服务人首页</h3>
	 <h3>哇喔，终于等到您了，多么开心您关注我们哦！</h3>
	 </section>*/


	exports.default = View;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dispatcher = __webpack_require__(237);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _Model = __webpack_require__(290);

	var _Model2 = _interopRequireDefault(_Model);

	var _Store = __webpack_require__(292);

	var _Store2 = _interopRequireDefault(_Store);

	var _CartStore = __webpack_require__(441);

	var _CartStore2 = _interopRequireDefault(_CartStore);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Model = function (_BaseModel) {
	    _inherits(Model, _BaseModel);

	    function Model() {
	        _classCallCheck(this, Model);

	        return _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).apply(this, arguments));
	    }

	    return Model;
	}(_Model2.default);

	var Store = function (_BaseStore) {
	    _inherits(Store, _BaseStore);

	    function Store() {
	        _classCallCheck(this, Store);

	        return _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).apply(this, arguments));
	    }

	    _createClass(Store, [{
	        key: "refresh",
	        value: function refresh(model) {
	            var id = model.id;
	            _UserStore2.default.send({ action: 'product.get', id: id });
	        }
	    }, {
	        key: "easyPay",
	        value: function easyPay(id) {
	            var products = {};
	            products[id] = 1;
	            _UserStore2.default.send({ action: 'pay.getPayParam', products: products });
	        }
	    }, {
	        key: "cartPay",
	        value: function cartPay() {

	            _UserStore2.default.send({ action: 'pay.getPayParam', products: _CartStore2.default.getCart() });
	            _CartStore2.default.clearCart();
	        }
	    }]);

	    return Store;
	}(_Store2.default);

	var ProductStore = new Store(Model);
	exports.default = ProductStore;


	_dispatcher2.default.Reg({
	    product: function product(_ref, user) {
	        var _product = _ref.product;

	        ProductStore.set(_product);
	    },
	    payParam: function payParam(_ref2, user) {
	        var _payParam = _ref2.payParam;

	        //Product.emit("payParam", payParam);
	        var data = _payParam;
	        data.timestamp = data.timeStamp;
	        console.log(data);
	        wx.ready(function () {
	            wx.chooseWXPay(_extends({}, data, {
	                success: function success() {
	                    console.log("aa");
	                }
	            }));
	        });
	    }
	}, "product");

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _flux = __webpack_require__(238);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var dispatcher = new _flux.Dispatcher();

	var tokens = {};

	dispatcher.Reg = function (actions) {
	    var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";

	    if (tokens[token]) dispatcher.unregister(tokens[token]);
	    tokens[token] = dispatcher.register(function (msg) {
	        var type = msg.type,
	            action = msg.action,
	            data = _objectWithoutProperties(msg, ["type", "action"]);

	        if (!action) action = type;

	        typeof actions[action] == "function" && actions[action](data);
	    });
	};

	exports.default = dispatcher;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(239);


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(8);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _socket = __webpack_require__(241);

	var _socket2 = _interopRequireDefault(_socket);

	var _dispatcher = __webpack_require__(237);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _Model = __webpack_require__(290);

	var _Model2 = _interopRequireDefault(_Model);

	var _Store = __webpack_require__(292);

	var _Store2 = _interopRequireDefault(_Store);

	var _WeixinStore = __webpack_require__(433);

	var _WeixinStore2 = _interopRequireDefault(_WeixinStore);

	var _util = __webpack_require__(293);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var socket = (0, _socket2.default)();
	socket.on('message', function (msg) {
	    console.log("socket recieve", msg);

	    _dispatcher2.default.dispatch(msg);
	});

	var Model = function (_BaseModel) {
	    _inherits(Model, _BaseModel);

	    function Model(data) {
	        _classCallCheck(this, Model);

	        var dft = {
	            openid: "",
	            nickname: ""
	        };
	        return _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this, _extends({}, dft, data)));
	    }

	    return Model;
	}(_Model2.default);

	var User = function (_BaseStore) {
	    _inherits(User, _BaseStore);

	    function User() {
	        _classCallCheck(this, User);

	        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, Model, 'openid'));
	    }

	    _createClass(User, [{
	        key: "getAddress",
	        value: function getAddress() {
	            var _UserStore$me$data = UserStore.me.data,
	                userName = _UserStore$me$data.userName,
	                postalCode = _UserStore$me$data.postalCode,
	                provinceName = _UserStore$me$data.provinceName,
	                cityName = _UserStore$me$data.cityName,
	                countryName = _UserStore$me$data.countryName,
	                detailInfo = _UserStore$me$data.detailInfo,
	                nationalCode = _UserStore$me$data.nationalCode,
	                telNumber = _UserStore$me$data.telNumber;

	            return { userName: userName, postalCode: postalCode, provinceName: provinceName, cityName: cityName, countryName: countryName, detailInfo: detailInfo, nationalCode: nationalCode, telNumber: telNumber };
	        }
	    }, {
	        key: "send",
	        value: function send(action) {
	            console.log("user send", action);
	            socket.send(action);
	        }
	    }, {
	        key: "login",
	        value: function login() {
	            var info = _util2.default.loginInfo();
	            UserStore.send(_extends({ action: "user.login" }, info));
	        }
	    }, {
	        key: "saler",
	        value: function saler() {
	            var openid = localStorage.saler;
	            if (!openid) openid = "ou0vGvuFAdFHiWiaS2TybHkGP8QA";
	            return this.instance(openid);
	        }
	    }, {
	        key: "triggerAddress",
	        value: function triggerAddress() {
	            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


	            if (!this.getAddress().detailInfo || force) {
	                _WeixinStore2.default.openAddress().then(function (data) {
	                    UserStore.me.set(data);
	                    UserStore.send({ action: "user.update", userinfo: data });
	                });
	            }
	        }
	    }, {
	        key: "me",
	        get: function get() {
	            var openid = localStorage.openid;
	            return UserStore.instance({ openid: openid });
	        }
	    }]);

	    return User;
	}(_Store2.default);

	var UserStore = new User(Model);
	UserStore.login();
	console.log(UserStore);

	exports.default = UserStore;


	var actions = {
	    needLogin: function needLogin() {
	        UserStore.login();
	    },
	    invalidCode: function invalidCode() {
	        delete localStorage.openid;
	        _util2.default.weixinRedirect();
	    },
	    loginSucc: function loginSucc(_ref) {
	        var userinfo = _ref.userinfo;

	        localStorage.setItem("openid", userinfo.openid);
	        UserStore.set(userinfo);
	        UserStore.emit("login");
	        var url = window.location.origin + window.location.pathname + window.location.search;
	        UserStore.send({ action: 'util.jsParam', client_url: url });

	        var _Util$getQuery = _util2.default.getQuery(),
	            code = _Util$getQuery.code,
	            saler = _Util$getQuery.saler;

	        if (saler) {
	            localStorage.saler = saler;
	            UserStore.send({ action: "user.update", saler: saler });
	        }

	        UserStore.send({ action: "user.info", openid: UserStore.saler().openid });
	    },
	    userinfo: function userinfo(_userinfo) {
	        if (_userinfo.userinfo) {
	            _userinfo = _userinfo.userinfo;
	        }
	        console.log(_userinfo);
	        UserStore.set(_userinfo);
	    }
	};
	_dispatcher2.default.Reg(actions, "user");

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var url = __webpack_require__(242);
	var parser = __webpack_require__(247);
	var Manager = __webpack_require__(255);
	var debug = __webpack_require__(244)('socket.io-client');

	/**
	 * Module exports.
	 */

	module.exports = exports = lookup;

	/**
	 * Managers cache.
	 */

	var cache = exports.managers = {};

	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */

	function lookup (uri, opts) {
	  if (typeof uri === 'object') {
	    opts = uri;
	    uri = undefined;
	  }

	  opts = opts || {};

	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;

	  var io;

	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	  if (parsed.query && !opts.query) {
	    opts.query = parsed.query;
	  } else if (opts && 'object' === typeof opts.query) {
	    opts.query = encodeQueryString(opts.query);
	  }
	  return io.socket(parsed.path, opts);
	}
	/**
	 *  Helper method to parse query objects to string.
	 * @param {object} query
	 * @returns {string}
	 */
	function encodeQueryString (obj) {
	  var str = [];
	  for (var p in obj) {
	    if (obj.hasOwnProperty(p)) {
	      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
	    }
	  }
	  return str.join('&');
	}
	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = parser.protocol;

	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */

	exports.connect = lookup;

	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */

	exports.Manager = __webpack_require__(255);
	exports.Socket = __webpack_require__(282);


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */

	var parseuri = __webpack_require__(243);
	var debug = __webpack_require__(244)('socket.io-client:url');

	/**
	 * Module exports.
	 */

	module.exports = url;

	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */

	function url (uri, loc) {
	  var obj = uri;

	  // default to window.location
	  loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;

	  // relative path support
	  if ('string' === typeof uri) {
	    if ('/' === uri.charAt(0)) {
	      if ('/' === uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }

	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' !== typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }

	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }

	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }

	  obj.path = obj.path || '/';

	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

	  return obj;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(245);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(246);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 246 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var debug = __webpack_require__(244)('socket.io-parser');
	var json = __webpack_require__(248);
	var Emitter = __webpack_require__(251);
	var binary = __webpack_require__(252);
	var isBuf = __webpack_require__(254);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	exports.protocol = 4;

	/**
	 * Packet types.
	 *
	 * @api public
	 */

	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];

	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */

	exports.CONNECT = 0;

	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */

	exports.DISCONNECT = 1;

	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */

	exports.EVENT = 2;

	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */

	exports.ACK = 3;

	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */

	exports.ERROR = 4;

	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */

	exports.BINARY_EVENT = 5;

	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */

	exports.BINARY_ACK = 6;

	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */

	exports.Encoder = Encoder;

	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */

	exports.Decoder = Decoder;

	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */

	function Encoder() {}

	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */

	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);

	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};

	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */

	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;

	  // first is type
	  str += obj.type;

	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }

	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }

	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }

	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }

	  debug('encoded %j as %s', obj, str);
	  return str;
	}

	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */

	function encodeAsBinary(obj, callback) {

	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;

	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }

	  binary.removeBlobs(obj, writeEncoding);
	}

	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */

	function Decoder() {
	  this.reconstructor = null;
	}

	/**
	 * Mix in `Emitter` with Decoder.
	 */

	Emitter(Decoder.prototype);

	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */

	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);

	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};

	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */

	function decodeString(str) {
	  var p = {};
	  var i = 0;

	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();

	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }

	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }

	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }

	  // look up json data
	  if (str.charAt(++i)) {
	    p = tryParse(p, str.substr(i));
	  }

	  debug('decoded %s as %j', str, p);
	  return p;
	}

	function tryParse(p, str) {
	  try {
	    p.data = json.parse(str);
	  } catch(e){
	    return error();
	  }
	  return p; 
	};

	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */

	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};

	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */

	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}

	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */

	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};

	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */

	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};

	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(250);

	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };

	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }

	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());

	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];

	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }

	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;

	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}

	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }

	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";

	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");

	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }

	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }

	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;

	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;

	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;

	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };

	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };

	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };

	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };

	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };

	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }

	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;

	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };

	        // Internal: Stores the parser state.
	        var Index, Source;

	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };

	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };

	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };

	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };

	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };

	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }

	    exports["runInContext"] = runInContext;
	    return exports;
	  }

	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;

	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));

	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }

	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(249)(module), (function() { return this; }())))

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 250 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 251 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/

	/**
	 * Module requirements
	 */

	var isArray = __webpack_require__(253);
	var isBuf = __webpack_require__(254);

	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */

	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;

	  function _deconstructPacket(data) {
	    if (!data) return data;

	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }

	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};

	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */

	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;

	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }

	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};

	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */

	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;

	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;

	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }

	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };

	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }

	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 254 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;

	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */

	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var eio = __webpack_require__(256);
	var Socket = __webpack_require__(282);
	var Emitter = __webpack_require__(283);
	var parser = __webpack_require__(247);
	var on = __webpack_require__(285);
	var bind = __webpack_require__(286);
	var debug = __webpack_require__(244)('socket.io-client:manager');
	var indexOf = __webpack_require__(280);
	var Backoff = __webpack_require__(289);

	/**
	 * IE6+ hasOwnProperty
	 */

	var has = Object.prototype.hasOwnProperty;

	/**
	 * Module exports
	 */

	module.exports = Manager;

	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */

	function Manager (uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' === typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};

	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}

	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */

	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};

	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */

	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Manager.prototype);

	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};

	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};

	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};

	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};

	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};

	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */

	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};

	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */

	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};

	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */

	Manager.prototype.open =
	Manager.prototype.connect = function (fn, opts) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;

	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;

	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });

	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });

	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);

	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);

	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }

	  this.subs.push(openSub);
	  this.subs.push(errorSub);

	  return this;
	};

	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */

	Manager.prototype.onopen = function () {
	  debug('open');

	  // clear old subs
	  this.cleanup();

	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');

	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};

	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */

	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};

	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */

	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};

	/**
	 * Called with data.
	 *
	 * @api private
	 */

	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};

	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */

	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */

	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};

	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */

	Manager.prototype.socket = function (nsp, opts) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp, opts);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.engine.id;
	    });

	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }

	  function onConnecting () {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }

	  return socket;
	};

	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */

	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;

	  this.close();
	};

	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;
	  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};

	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */

	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};

	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */

	Manager.prototype.cleanup = function () {
	  debug('cleanup');

	  var subsLength = this.subs.length;
	  for (var i = 0; i < subsLength; i++) {
	    var sub = this.subs.shift();
	    sub.destroy();
	  }

	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;

	  this.decoder.destroy();
	};

	/**
	 * Close the current socket.
	 *
	 * @api private
	 */

	Manager.prototype.close =
	Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' === this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};

	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */

	Manager.prototype.onclose = function (reason) {
	  debug('onclose');

	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);

	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};

	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */

	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;

	  var self = this;

	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);

	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;

	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);

	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;

	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);

	    this.subs.push({
	      destroy: function () {
	        clearTimeout(timer);
	      }
	    });
	  }
	};

	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */

	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(257);


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(258);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(265);


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(259);
	var Emitter = __webpack_require__(251);
	var debug = __webpack_require__(244)('engine.io-client:socket');
	var index = __webpack_require__(280);
	var parser = __webpack_require__(265);
	var parseuri = __webpack_require__(243);
	var parsejson = __webpack_require__(281);
	var parseqs = __webpack_require__(274);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket (uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' === typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }

	  this.secure = null != opts.secure ? opts.secure
	    : (global.location && 'https:' === location.protocol);

	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port
	      ? location.port
	      : (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.prevBufferLen = 0;
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;

	  // other options for Node.js client
	  var freeGlobal = typeof global === 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }

	  // set on handshake
	  this.id = null;
	  this.upgrades = null;
	  this.pingInterval = null;
	  this.pingTimeout = null;

	  // set on heartbeat
	  this.pingIntervalTimer = null;
	  this.pingTimeoutTimer = null;

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(264);
	Socket.transports = __webpack_require__(259);
	Socket.parser = __webpack_require__(265);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });

	  return transport;
	};

	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport
	  .on('drain', function () {
	    self.onDrain();
	  })
	  .on('packet', function (packet) {
	    self.onPacket(packet);
	  })
	  .on('error', function (e) {
	    self.onError(e);
	  })
	  .on('close', function () {
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 });
	  var failed = false;
	  var self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen () {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' === msg.type && 'probe' === msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' === self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport () {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  // Handle any error that happens while probing
	  function onerror (err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose () {
	    onerror('transport closed');
	  }

	  // When the socket is closed while we're probing
	  function onclose () {
	    onerror('socket closed');
	  }

	  // When the socket is upgraded while we're probing
	  function onupgrade (to) {
	    if (transport && to.name !== transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  // Remove all listeners on the transport and on self
	  function cleanup () {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();
	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' === this.readyState || 'open' === this.readyState ||
	      'closing' === this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' === this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' === self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api private
	*/

	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' !== this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' === typeof data) {
	    fn = data;
	    data = undefined;
	  }

	  if ('function' === typeof options) {
	    fn = options;
	    options = null;
	  }

	  if ('closing' === this.readyState || 'closed' === this.readyState) {
	    return;
	  }

	  options = options || {};
	  options.compress = false !== options.compress;

	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  function close () {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }

	  function cleanupAndClose () {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }

	  function waitForUpgrade () {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);

	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(260);
	var XHR = __webpack_require__(262);
	var JSONP = __webpack_require__(277);
	var websocket = __webpack_require__(278);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling (opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname !== location.hostname || port !== opts.port;
	    xs = opts.secure !== isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// browser shim for xmlhttprequest module

	var hasCORS = __webpack_require__(261);

	module.exports = function (opts) {
	  var xdomain = opts.xdomain;

	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;

	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;

	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }

	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }

	  if (!xdomain) {
	    try {
	      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
	    } catch (e) { }
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 261 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */

	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(260);
	var Polling = __webpack_require__(263);
	var Emitter = __webpack_require__(251);
	var inherit = __webpack_require__(275);
	var debug = __webpack_require__(244)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty () {}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR (opts) {
	  Polling.call(this, opts);

	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname !== global.location.hostname ||
	      port !== opts.port;
	    this.xs = opts.secure !== isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request (opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined !== opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }

	    if ('POST' === this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    try {
	      xhr.setRequestHeader('Accept', '*/*');
	    } catch (e) {}

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (4 !== xhr.readyState) return;
	        if (200 === xhr.status || 1223 === xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' === typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response || this.xhr.responseText;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }

	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function () {
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function () {
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	Request.requestsCount = 0;
	Request.requests = {};

	if (global.document) {
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler () {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(264);
	var parseqs = __webpack_require__(274);
	var parser = __webpack_require__(265);
	var inherit = __webpack_require__(275);
	var yeast = __webpack_require__(276);
	var debug = __webpack_require__(244)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function () {
	  var XMLHttpRequest = __webpack_require__(260);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function () {
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function (onPause) {
	  var self = this;

	  this.readyState = 'pausing';

	  function pause () {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function (packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' === self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' === packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' !== this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' === this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function () {
	  var self = this;

	  function close () {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' === this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function () {
	    self.writable = true;
	    self.emit('drain');
	  };

	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && (('https' === schema && this.port !== 443) ||
	     ('http' === schema && this.port !== 80))) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(265);
	var Emitter = __webpack_require__(251);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' === this.readyState || '' === this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function (packets) {
	  if ('open' === this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(266);
	var hasBinary = __webpack_require__(267);
	var sliceBuffer = __webpack_require__(269);
	var after = __webpack_require__(270);
	var utf8 = __webpack_require__(271);

	var base64encoder;
	if (global && global.ArrayBuffer) {
	  base64encoder = __webpack_require__(272);
	}

	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */

	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;

	/**
	 * Current protocol version.
	 */

	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */

	var Blob = __webpack_require__(273);

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }

	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;

	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }

	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }

	  return callback('' + encoded);

	};

	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}

	/**
	 * Encode packet helpers for binary types
	 */

	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }

	  return callback(resultBuffer.buffer);
	}

	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}

	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }

	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);

	  return callback(blob);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }

	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};

	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  if (data === undefined) {
	    return err;
	  }
	  // String data
	  if (typeof data == 'string') {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    if (utf8decode) {
	      data = tryDecode(data);
	      if (data === false) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};

	function tryDecode(data) {
	  try {
	    data = utf8.decode(data);
	  } catch (e) {
	    return false;
	  }
	  return data;
	}

	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!base64encoder) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }

	  var data = base64encoder.decode(msg.substr(1));

	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }

	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  var isBinary = hasBinary(packets);

	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }

	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = ''
	    , n, msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      msg = data.substr(i + 1, n);

	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);

	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }

	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }

	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }

	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	};

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }

	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);

	    var resultArray = new Uint8Array(totalLength);

	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }

	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }

	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;

	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });

	    return callback(resultArray.buffer);
	  });
	};

	/**
	 * Encode as Blob
	 */

	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }

	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;

	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;

	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';

	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;

	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }

	      msgLength += tailArray[i];
	    }

	    if(numberTooLong) return callback(err, 0, 1);

	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);

	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }

	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }

	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 266 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(268);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 269 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */

	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;

	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }

	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }

	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = after

	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count

	    return (count === 0) ? callback() : proxy

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}

	function noop() {}


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/wtf8 v1.0.0 by @mathias */
	;(function(root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}

		function wtf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte.
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read the first byte.
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid WTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function wtf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var wtf8 = {
			'version': '1.0.0',
			'encode': wtf8encode,
			'decode': wtf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return wtf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = wtf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in wtf8) {
					hasOwnProperty.call(wtf8, key) && (freeExports[key] = wtf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.wtf8 = wtf8;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(249)(module), (function() { return this; }())))

/***/ },
/* 272 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(){
	  "use strict";

	  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }

	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";

	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i+=4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i+1)];
	      encoded3 = lookup[base64.charCodeAt(i+2)];
	      encoded4 = lookup[base64.charCodeAt(i+3)];

	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }

	    return arraybuffer;
	  };
	})();


/***/ },
/* 273 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */

	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;

	/**
	 * Check if Blob constructor is supported
	 */

	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */

	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if BlobBuilder is supported
	 */

	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;

	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */

	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;

	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }

	      ary[i] = buf;
	    }
	  }
	}

	function BlobBuilderConstructor(ary, options) {
	  options = options || {};

	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);

	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }

	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};

	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};

	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 274 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 275 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 276 */
/***/ function(module, exports) {

	'use strict';

	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;

	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';

	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);

	  return encoded;
	}

	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;

	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }

	  return decoded;
	}

	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());

	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}

	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;

	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(263);
	var inherit = __webpack_require__(275);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Noop.
	 */

	function empty () { }

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling (opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;

	  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete () {
	    initIframe();
	    fn();
	  }

	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch (e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState === 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(264);
	var parser = __webpack_require__(265);
	var parseqs = __webpack_require__(274);
	var inherit = __webpack_require__(275);
	var yeast = __webpack_require__(276);
	var debug = __webpack_require__(244)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */

	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(279);
	  } catch (e) { }
	}

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS (opts) {
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var uri = this.uri();
	  var protocols = void (0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }

	  try {
	    this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
	  } catch (err) {
	    return this.emit('error', err);
	  }

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'nodebuffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }

	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function () {
	  var self = this;

	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;

	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }

	          if (self.perMessageDeflate) {
	            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }

	        // Sometimes the websocket has already been closed but the browser didn't
	        // have a chance of informing us about it yet, in that case send will
	        // throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }

	        --total || done();
	      });
	    })(packets[i]);
	  }

	  function done () {
	    self.emit('flush');

	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && (('wss' === schema && this.port !== 443) ||
	    ('ws' === schema && this.port !== 80))) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function () {
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 279 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 280 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 281 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */

	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;

	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }

	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }

	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(247);
	var Emitter = __webpack_require__(283);
	var toArray = __webpack_require__(284);
	var on = __webpack_require__(285);
	var bind = __webpack_require__(286);
	var debug = __webpack_require__(244)('socket.io-client:socket');
	var hasBin = __webpack_require__(287);

	/**
	 * Module exports.
	 */

	module.exports = exports = Socket;

	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */

	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};

	/**
	 * Shortcut to `Emitter#emit`.
	 */

	var emit = Emitter.prototype.emit;

	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */

	function Socket (io, nsp, opts) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (opts && opts.query) {
	    this.query = opts.query;
	  }
	  if (this.io.autoConnect) this.open();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */

	Socket.prototype.subEvents = function () {
	  if (this.subs) return;

	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};

	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */

	Socket.prototype.open =
	Socket.prototype.connect = function () {
	  if (this.connected) return this;

	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' === this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};

	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};

	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }

	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
	  var packet = { type: parserType, data: args };

	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;

	  // event ack callback
	  if ('function' === typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }

	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }

	  delete this.flags;

	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};

	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */

	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');

	  // write connect packet if necessary
	  if ('/' !== this.nsp) {
	    if (this.query) {
	      this.packet({type: parser.CONNECT, query: this.query});
	    } else {
	      this.packet({type: parser.CONNECT});
	    }
	  }
	};

	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */

	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};

	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onpacket = function (packet) {
	  if (packet.nsp !== this.nsp) return;

	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;

	    case parser.EVENT:
	      this.onevent(packet);
	      break;

	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;

	    case parser.ACK:
	      this.onack(packet);
	      break;

	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;

	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;

	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};

	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);

	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }

	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};

	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */

	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);

	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};

	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */

	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' === typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};

	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */

	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};

	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */

	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];

	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};

	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */

	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};

	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */

	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }

	  this.io.destroy(this);
	};

	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.close =
	Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }

	  // remove socket from pool
	  this.destroy();

	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};

	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */

	Socket.prototype.compress = function (compress) {
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};


/***/ },
/* 283 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 284 */
/***/ function(module, exports) {

	module.exports = toArray

	function toArray(list, index) {
	    var array = []

	    index = index || 0

	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }

	    return array
	}


/***/ },
/* 285 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */

	module.exports = on;

	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */

	function on (obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function () {
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 286 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */

	var slice = [].slice;

	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */

	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(288);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 288 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 289 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */

	module.exports = Backoff;

	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}

	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */

	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};

	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */

	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};

	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};

	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */

	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};

	/**
	 * Set the jitter
	 *
	 * @api public
	 */

	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};



/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(291);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Model = function (_EventEmitter) {
	    _inherits(Model, _EventEmitter);

	    function Model() {
	        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, Model);

	        var _this = _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).call(this));

	        _this._data = {};

	        _this._data = data;
	        Object.keys(data).map(function (key) {
	            Reflect.defineProperty(_this, key, { get: function get() {
	                    return this.data[key];
	                } });
	        });
	        return _this;
	    }

	    _createClass(Model, [{
	        key: "set",
	        value: function set(data) {
	            var _this2 = this;

	            var changed = false;
	            var count = 0;
	            Object.keys(data).map(function (key) {
	                Reflect.defineProperty(_this2, key, { get: function get() {
	                        return this.data[key];
	                    } });
	                if (_this2._data[key] != data[key]) changed = true;
	                count++;
	            });
	            this._data = _extends({}, this._data, data);
	            if (changed || count > 2) this.emit("change");
	            return true;
	        }
	    }, {
	        key: "data",
	        get: function get() {
	            return this._data;
	        }
	    }]);

	    return Model;
	}(_events2.default);

	exports.default = Model;

/***/ },
/* 291 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(291);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Store = function (_EventEmitter) {
	    _inherits(Store, _EventEmitter);

	    function Store(model) {
	        var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";

	        _classCallCheck(this, Store);

	        var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

	        _this.model = model;
	        _this.keyProp = key;
	        _this.instances = {};

	        return _this;
	    }

	    _createClass(Store, [{
	        key: "instance",
	        value: function instance(obj) {
	            var id = void 0;

	            if (Number.isInteger(obj) || typeof obj == "string") {
	                id = obj;obj = _defineProperty({}, this.keyProp, id);
	            } else if (obj instanceof Object) {
	                id = obj[this.keyProp];
	            } else {
	                console.log("model param err,not int or obj");return null;
	            }

	            if (!this.instances[id]) {
	                this.instances[id] = new this.model(obj);
	                if (typeof this.refresh == "function" && Object.keys(obj).length == 1) {
	                    this.refresh(this.instances[id]);
	                }
	            } else {
	                this.instances[id].set(obj);
	            }

	            return this.instances[id];
	        }
	    }, {
	        key: "set",
	        value: function set(items) {
	            if (!(items instanceof Array)) {
	                items = [items];
	            }

	            for (var key in items) {
	                var item = items[key];
	                this.instance(item).set(item);
	            }

	            this.emit("change");
	        }
	    }, {
	        key: "get",
	        value: function get(id) {
	            if (id) return this.instance(id);
	            return this.instances;
	        }
	    }]);

	    return Store;
	}(_events2.default);

	exports.default = Store;

/***/ },
/* 293 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function loginInfo() {
	    var ua = window.navigator.userAgent.toLowerCase();
	    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
	        var openid = localStorage.getItem("openid");
	        if (openid && openid != "undefined") {
	            return { openid: openid };
	        }
	    }

	    var _getQuery = getQuery(),
	        code = _getQuery.code,
	        saler = _getQuery.saler;

	    if (saler) {
	        localStorage.saler = saler;
	    }

	    if (code) {
	        return { code: code };
	    }
	    weixinRedirect();
	}

	function weixinRedirect() {
	    var redirect = encodeURIComponent(location.origin + location.pathname + location.hash);
	    var url = "https://sz.open.weixin.qq.com/connect/oauth2/authorize?appid=wx5f6db5bf7d4d7ad1&redirect_uri=" + redirect + "&response_type=code&scope=snsapi_userinfo&state=ABC#wechat_redirect";
	    window.location.href = url;
	}

	function editAddress() {
	    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


	    if (!User.detailInfo || force) {
	        wx.ready(function () {
	            wx.openAddress({
	                success: function success(data) {
	                    User.set(data);
	                    User.send({ type: "updateUserinfo", userinfo: User.get() });
	                }
	            });
	        });
	    }
	}

	function getQuery() {
	    var str = window.location.search;
	    return str.slice(1).split("&").map(function (kv) {
	        return kv.split("=");
	    }).reduce(function (ret, entry) {
	        var _entry = _slicedToArray(entry, 2),
	            key = _entry[0],
	            val = _entry[1];

	        ret[key] = val;return ret;
	    }, {});
	}

	exports.default = {
	    loginInfo: loginInfo,
	    weixinRedirect: weixinRedirect,
	    editAddress: editAddress,
	    getQuery: getQuery
	};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(295);

	var _Page2 = _interopRequireDefault(_Page);

	var _ProductList = __webpack_require__(296);

	var _ProductList2 = _interopRequireDefault(_ProductList);

	var _Banner = __webpack_require__(414);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _lib = __webpack_require__(297);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        _classCallCheck(this, View);

	        return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
	    }

	    _createClass(View, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                _Page2.default,
	                { title: this.props.saler.nickname + " 的心生店铺" },
	                _react2.default.createElement("img", { className: "logo", src: "/img/logo-square.png" }),
	                _react2.default.createElement("img", { className: "saler", src: this.props.saler.headimgurl }),
	                _react2.default.createElement(_Banner2.default, null),
	                _react2.default.createElement(_ProductList2.default, this.props)
	            );
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	exports.default = View;

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page = function (_React$Component) {
	    _inherits(Page, _React$Component);

	    function Page() {
	        _classCallCheck(this, Page);

	        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
	    }

	    _createClass(Page, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "page" },
	                _react2.default.createElement(
	                    "h2",
	                    { className: "title" },
	                    this.props.title
	                ),
	                this.props.children
	            );
	        }
	    }]);

	    return Page;
	}(_react2.default.Component);

	exports.default = Page;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(172);

	var _lib = __webpack_require__(297);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_Component) {
	    _inherits(View, _Component);

	    function View() {
	        _classCallCheck(this, View);

	        return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
	    }

	    _createClass(View, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var products = this.props.products;


	            return _react2.default.createElement(
	                _lib.Panel,
	                null,
	                _react2.default.createElement(
	                    _lib.PanelHeader,
	                    null,
	                    "Media with image"
	                ),
	                _react2.default.createElement(
	                    _lib.PanelBody,
	                    null,
	                    products.map(function (prod) {
	                        return _this2._renderProduct(prod);
	                    })
	                )
	            );
	        }
	    }, {
	        key: "_renderProduct",
	        value: function _renderProduct(prod) {
	            var _this3 = this;

	            return _react2.default.createElement(
	                _lib.MediaBox,
	                { onClick: function onClick() {
	                        return _this3.props.onProduct(prod.id);
	                    }, key: prod.id, type: "appmsg", href: "javascript:void(0);" },
	                _react2.default.createElement(
	                    _lib.MediaBoxHeader,
	                    null,
	                    _react2.default.createElement("img", { src: prod.piccover })
	                ),
	                _react2.default.createElement(
	                    _lib.MediaBoxBody,
	                    null,
	                    _react2.default.createElement(
	                        _lib.MediaBoxTitle,
	                        null,
	                        prod.title
	                    ),
	                    _react2.default.createElement(_lib.MediaBoxDescription, null)
	                )
	            );
	        }
	    }]);

	    return View;
	}(_react.Component);

	/*
	 * <section>
	 <div>
	 <input type="text"
	 value={this.state.username}
	 onChange={(e)=>{this.setState({username:e.target.value})}}
	 />
	 <w.Button
	 onClick={()=>{this.props.onLogin(this.state.username)}}
	 >登录</w.Button>
	 <br />

	 </div>
	 <h2>电商首页，类似微信购物入口京东首页</h2>
	 <h3>链接客户的代购服务人首页</h3>
	 <h3>哇喔，终于等到您了，多么开心您关注我们哦！</h3>
	 </section>*/


	exports.default = View;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _version = __webpack_require__(298);

	var _version2 = _interopRequireDefault(_version);

	var _index = __webpack_require__(299);

	var _index2 = __webpack_require__(304);

	var _index3 = __webpack_require__(314);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(316);

	var _index6 = __webpack_require__(339);

	var _index7 = _interopRequireDefault(_index6);

	var _index8 = __webpack_require__(341);

	var _index9 = _interopRequireDefault(_index8);

	var _index10 = __webpack_require__(343);

	var _index11 = _interopRequireDefault(_index10);

	var _index12 = __webpack_require__(345);

	var _index13 = _interopRequireDefault(_index12);

	var _index14 = __webpack_require__(352);

	var _index15 = _interopRequireDefault(_index14);

	var _index16 = __webpack_require__(354);

	var _index17 = _interopRequireDefault(_index16);

	var _index18 = __webpack_require__(361);

	var _index19 = _interopRequireDefault(_index18);

	var _index20 = __webpack_require__(330);

	var _index21 = _interopRequireDefault(_index20);

	var _index22 = __webpack_require__(363);

	var _index23 = __webpack_require__(368);

	var _index24 = __webpack_require__(373);

	var _index25 = __webpack_require__(381);

	var _index26 = __webpack_require__(391);

	var _index27 = _interopRequireDefault(_index26);

	var _index28 = __webpack_require__(393);

	var _toptips = __webpack_require__(396);

	var _toptips2 = _interopRequireDefault(_toptips);

	var _gallery = __webpack_require__(400);

	var _footer = __webpack_require__(356);

	var _loadmore = __webpack_require__(403);

	var _loadmore2 = _interopRequireDefault(_loadmore);

	var _picker = __webpack_require__(405);

	var _popup = __webpack_require__(409);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	//0.4.x components
	exports.default = {
	    version: _version2.default,

	    //0.4.x
	    Button: _index.Button,
	    ButtonArea: _index.ButtonArea,
	    Cells: _index2.Cells,
	    CellsTitle: _index2.CellsTitle,
	    CellsTips: _index2.CellsTips,
	    Cell: _index2.Cell,
	    CellHeader: _index2.CellHeader,
	    CellBody: _index2.CellBody,
	    CellFooter: _index2.CellFooter,
	    Mask: _index4.default,
	    Form: _index5.Form,
	    FormCell: _index5.FormCell,
	    Radio: _index5.Radio,
	    Checkbox: _index5.Checkbox,
	    Input: _index5.Input,
	    TextArea: _index5.TextArea,
	    Switch: _index5.Switch,
	    Select: _index5.Select,
	    Uploader: _index5.Uploader,
	    Label: _index7.default,
	    Toast: _index9.default,
	    Progress: _index11.default,
	    ActionSheet: _index13.default,
	    Dialog: _index15.default,
	    Msg: _index17.default,
	    Article: _index19.default,
	    Icon: _index21.default,
	    Grids: _index22.Grids,
	    Grid: _index22.Grid,
	    GridIcon: _index22.GridIcon,
	    GridLabel: _index22.GridLabel,
	    Panel: _index23.Panel,
	    PanelHeader: _index23.PanelHeader,
	    PanelBody: _index23.PanelBody,
	    PanelFooter: _index23.PanelFooter,
	    MediaBox: _index24.MediaBox,
	    MediaBoxHeader: _index24.MediaBoxHeader,
	    MediaBoxBody: _index24.MediaBoxBody,
	    MediaBoxTitle: _index24.MediaBoxTitle,
	    MediaBoxDescription: _index24.MediaBoxDescription,
	    MediaBoxInfo: _index24.MediaBoxInfo,
	    MediaBoxInfoMeta: _index24.MediaBoxInfoMeta,
	    NavBar: _index25.NavBar,
	    NavBarItem: _index25.NavBarItem,
	    Tab: _index25.Tab,
	    TabBody: _index25.TabBody,
	    TabBodyItem: _index25.TabBodyItem,
	    TabBar: _index25.TabBar,
	    TabBarIcon: _index25.TabBarIcon,
	    TabBarItem: _index25.TabBarItem,
	    TabBarLabel: _index25.TabBarLabel,
	    SearchBar: _index27.default,

	    //1.0.0
	    Flex: _index28.Flex,
	    FlexItem: _index28.FlexItem,
	    VCode: _index5.VCode,
	    Agreement: _index5.Agreement,
	    Toptips: _toptips2.default,
	    Gallery: _gallery.Gallery,
	    GalleryDelete: _gallery.GalleryDelete,
	    Footer: _footer.Footer,
	    FooterText: _footer.FooterText,
	    FooterLinks: _footer.FooterLinks,
	    FooterLink: _footer.FooterLink,
	    LoadMore: _loadmore2.default,
	    Preview: _index5.Preview,
	    PreviewHeader: _index5.PreviewHeader,
	    PreviewBody: _index5.PreviewBody,
	    PreviewFooter: _index5.PreviewFooter,
	    PreviewItem: _index5.PreviewItem,
	    PreviewButton: _index.PreviewButton,
	    Picker: _picker.Picker,
	    CityPicker: _picker.CityPicker,

	    //non-standard
	    Popup: _popup.Popup,
	    PopupHeader: _popup.PopupHeader
	};

	//non standard

	//1.0.0 components
	/**
	 * Created by jf on 15/10/27.
	 */

	module.exports = exports['default'];

/***/ },
/* 298 */
/***/ function(module, exports) {

	'use strict';

	module.exports = '1.0.0-alpha';

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _button = __webpack_require__(300);

	var _button2 = _interopRequireDefault(_button);

	var _button_area = __webpack_require__(302);

	var _button_area2 = _interopRequireDefault(_button_area);

	var _button_preview = __webpack_require__(303);

	var _button_preview2 = _interopRequireDefault(_button_preview);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    Button: _button2.default,
	    ButtonArea: _button_area2.default,
	    PreviewButton: _button_preview2.default
	}; /**
	    * Created by jf on 15/10/27.
	    */

	module.exports = exports['default'];

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
	 *
	 */
	var Button = function (_React$Component) {
	    _inherits(Button, _React$Component);

	    function Button() {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	    }

	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                component = _props.component,
	                type = _props.type,
	                size = _props.size,
	                plain = _props.plain,
	                className = _props.className,
	                children = _props.children,
	                others = _objectWithoutProperties(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

	            var Component = component ? component : this.props.href || type == 'vcode' ? 'a' : 'button';
	            var cls = type == 'vcode' ? (0, _classnames2.default)('weui-vcode-btn', _defineProperty({}, className, className)) : (0, _classnames2.default)(_defineProperty({
	                'weui-btn': true,
	                'weui-btn_mini': size === 'small',
	                'weui-btn_primary': type === 'primary' && !plain,
	                'weui-btn_default': type === 'default' && !plain,
	                'weui-btn_warn': type === 'warn',
	                'weui-btn_plain-primary': type === 'primary' && plain,
	                'weui-btn_plain-default': type === 'default' && plain,
	                'weui-btn_disabled': this.props.disabled && !plain,
	                'weui-btn_plain-disabled': this.props.disabled && plain
	            }, className, className));

	            return _react2.default.createElement(Component, _extends({}, others, { className: cls }), children);
	        }
	    }]);

	    return Button;
	}(_react2.default.Component);

	Button.propTypes = {
	    disabled: _react2.default.PropTypes.bool,
	    /**
	     * Options: primary, default, warn, vcode
	     *
	     */
	    type: _react2.default.PropTypes.string,
	    /**
	     * Options: normal, small
	     *
	     */
	    size: _react2.default.PropTypes.string
	};
	Button.defaultProps = {
	    disabled: false,
	    type: 'primary',
	    size: 'normal'
	};
	exports.default = Button;
	;
	module.exports = exports['default'];

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ButtonArea = function (_Component) {
	    _inherits(ButtonArea, _Component);

	    function ButtonArea() {
	        _classCallCheck(this, ButtonArea);

	        return _possibleConstructorReturn(this, (ButtonArea.__proto__ || Object.getPrototypeOf(ButtonArea)).apply(this, arguments));
	    }

	    _createClass(ButtonArea, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                direction = _props.direction,
	                children = _props.children,
	                className = _props.className;

	            var cls = (0, _classnames2.default)(_defineProperty({
	                'weui-btn-area': true,
	                'weui-btn-area_inline': direction === 'horizontal'
	            }, className, className));

	            return _react2.default.createElement('div', { className: cls }, children);
	        }
	    }]);

	    return ButtonArea;
	}(_react.Component);

	ButtonArea.propTypes = {
	    /**
	     * Direction of Button Layout inside, Options: veritical, horizontal
	     *
	     */
	    direction: _react2.default.PropTypes.string
	};
	ButtonArea.defaultProps = {
	    direction: 'vertical'
	};
	;

	exports.default = ButtonArea;
	module.exports = exports['default'];

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	var PreviewButton = function PreviewButton(props) {
	    var className = props.className,
	        primary = props.primary,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'primary', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-form-preview__btn': true,
	        'weui-form-preview__btn_default': !primary,
	        'weui-form-preview__btn_primary': primary
	    }, className, className));

	    return _react2.default.createElement('a', _extends({ className: cls }, others), children);
	};

	PreviewButton.propTypes = {
	    /**
	     * Primary style of button
	     *
	     */
	    primary: _react.PropTypes.bool
	};

	PreviewButton.defaultProps = {
	    primary: false
	};

	exports.default = PreviewButton;
	module.exports = exports['default'];

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cells = __webpack_require__(305);

	var _cells2 = _interopRequireDefault(_cells);

	var _cell = __webpack_require__(308);

	var _cell2 = _interopRequireDefault(_cell);

	var _cells_title = __webpack_require__(309);

	var _cells_title2 = _interopRequireDefault(_cells_title);

	var _cells_tips = __webpack_require__(310);

	var _cells_tips2 = _interopRequireDefault(_cells_tips);

	var _cell_header = __webpack_require__(311);

	var _cell_header2 = _interopRequireDefault(_cell_header);

	var _cell_body = __webpack_require__(312);

	var _cell_body2 = _interopRequireDefault(_cell_body);

	var _cell_footer = __webpack_require__(313);

	var _cell_footer2 = _interopRequireDefault(_cell_footer);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    Cells: _cells2.default,
	    Cell: _cell2.default,
	    CellsTitle: _cells_title2.default,
	    CellsTips: _cells_tips2.default,
	    CellHeader: _cell_header2.default,
	    CellBody: _cell_body2.default,
	    CellFooter: _cell_footer2.default
	}; /**
	    * Created by jf on 15/10/28.
	    */

	module.exports = exports['default'];

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _deprecationWarning = __webpack_require__(306);

	var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Wrapper for `Cell`
	 *
	 */
	var Cells = function Cells(props) {
	    var children = props.children,
	        className = props.className,
	        access = props.access,
	        others = _objectWithoutProperties(props, ['children', 'className', 'access']);

	    if (access) {
	        (0, _deprecationWarning2.default)('Cells Access', 'Cell Access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#%E5%B8%A6%E7%AE%AD%E5%A4%B4%E7%9A%84%E5%88%97%E8%A1%A8%E7%94%B1%E4%B9%8B%E5%89%8D%E7%9A%84weui_cells_access%E6%94%B9%E4%B8%BA%E5%8D%95%E7%8B%AC%E6%8E%A7%E5%88%B6%E7%9A%84weui-cell_access');
	    }

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-cells': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	Cells.propTypes = {};

	Cells.defaultProps = {};

	exports.default = Cells;
	module.exports = exports['default'];

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deprecationWarning;

	var _warning = __webpack_require__(307);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var warned = {};

	function deprecationWarning(oldname, newname, link) {
	  var warnKey = oldname + '\n' + newname;
	  if (warned[warnKey]) {
	    return;
	  }

	  var message = '[React-WeUI] ' + oldname + ' is deprecated. Use ' + newname + ' instead. ' + oldname + ' will be remove in the next major version.';

	  if (link) {
	    message += '\nYou can read more about it at \n' + link;
	  }

	  (0, _warning2.default)(false, message);
	  warned[warnKey] = true;
	}
	module.exports = exports['default'];

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
	 *
	 */
	var Cell = function Cell(props) {
	    var className = props.className,
	        children = props.children,
	        access = props.access,
	        href = props.href,
	        link = props.link,
	        component = props.component,
	        htmlFor = props.htmlFor,
	        others = _objectWithoutProperties(props, ['className', 'children', 'access', 'href', 'link', 'component', 'htmlFor']);

	    var DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
	    var CellComponent = component ? component : DefaultComponent;

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-cell': true,
	        'weui-cell_access': access,
	        'weui-cell_link': link
	    }, className, className));

	    return _react2.default.createElement(CellComponent, _extends({
	        className: cls,
	        href: href,
	        htmlFor: htmlFor
	    }, others), children);
	};

	Cell.propTypes = {
	    /**
	     * if cell should have arrow or link
	     *
	     */
	    access: _react.PropTypes.bool,
	    /**
	     * if this cell body is link
	     *
	     */
	    link: _react.PropTypes.bool,
	    /**
	     * pass in an component to replace Cell but apply same style
	     *
	     */
	    component: _react.PropTypes.func
	};

	Cell.defaultProps = {
	    access: false,
	    link: false
	};

	exports.default = Cell;
	module.exports = exports['default'];

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Heading for `Cells`
	 *
	 */
	var CellsTitle = function CellsTitle(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-cells__title': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	exports.default = CellsTitle;
	module.exports = exports['default'];

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Footer Information for `Cells`
	 *
	 */
	var CellsTips = function CellsTips(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-cells__tips': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	exports.default = CellsTips;
	module.exports = exports['default'];

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Header of `Cell`
	 *
	 */
	var CellHeader = function CellHeader(props) {
	    var className = props.className,
	        children = props.children,
	        primary = props.primary,
	        others = _objectWithoutProperties(props, ['className', 'children', 'primary']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-cell__hd': true,
	        'weui-cell_primary': primary
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	CellHeader.propTypes = {
	    /**
	     * if cell body is the primary block
	     *
	     */
	    primary: _react.PropTypes.bool
	};

	CellHeader.defaultProps = {
	    primary: false
	};

	exports.default = CellHeader;
	module.exports = exports['default'];

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Content of `Cell`
	 *
	 */
	var CellBody = function CellBody(props) {
	    var className = props.className,
	        children = props.children,
	        primary = props.primary,
	        others = _objectWithoutProperties(props, ['className', 'children', 'primary']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-cell__bd': true,
	        'weui-cell_primary': primary
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	CellBody.propTypes = {
	    /**
	     * if cell body is the primary block
	     *
	     */
	    primary: _react.PropTypes.bool
	};

	CellBody.defaultProps = {
	    primary: false
	};

	exports.default = CellBody;
	module.exports = exports['default'];

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Footer of `Cell`
	 *
	 */
	var CellFooter = function CellFooter(props) {
	    var className = props.className,
	        children = props.children,
	        primary = props.primary,
	        others = _objectWithoutProperties(props, ['className', 'children', 'primary']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-cell__ft': true,
	        'weui-cell_primary': primary
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	CellFooter.propTypes = {
	    /**
	     * if cell body is the primary block
	     *
	     */
	    primary: _react.PropTypes.bool
	};

	CellFooter.defaultProps = {
	    primary: false
	};

	exports.default = CellFooter;
	module.exports = exports['default'];

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                   value: true
	});

	var _mask = __webpack_require__(315);

	var _mask2 = _interopRequireDefault(_mask);

	function _interopRequireDefault(obj) {
	                                   return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _mask2.default; /**
	                                   * Created by jf on 15/10/27.
	                                   */

	module.exports = exports['default'];

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
	 *
	 */
	var Mask = function (_React$Component) {
	    _inherits(Mask, _React$Component);

	    function Mask() {
	        _classCallCheck(this, Mask);

	        return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
	    }

	    _createClass(Mask, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                transparent = _props.transparent,
	                others = _objectWithoutProperties(_props, ['transparent']);

	            var className = (0, _classnames2.default)({
	                'weui-mask': !transparent,
	                'weui-mask_transparent': transparent
	            });

	            return _react2.default.createElement('div', _extends({ className: className }, others));
	        }
	    }]);

	    return Mask;
	}(_react2.default.Component);

	Mask.propTypes = {
	    /**
	     * Whather mask should be transparent (no color)
	     *
	     */
	    transparent: _react2.default.PropTypes.bool
	};
	Mask.defaultProps = {
	    transparent: false
	};
	exports.default = Mask;
	module.exports = exports['default'];

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _form = __webpack_require__(317);

	var _form2 = _interopRequireDefault(_form);

	var _form_cell = __webpack_require__(318);

	var _form_cell2 = _interopRequireDefault(_form_cell);

	var _textarea = __webpack_require__(323);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _input = __webpack_require__(324);

	var _input2 = _interopRequireDefault(_input);

	var _switch = __webpack_require__(325);

	var _switch2 = _interopRequireDefault(_switch);

	var _radio = __webpack_require__(326);

	var _radio2 = _interopRequireDefault(_radio);

	var _checkbox = __webpack_require__(327);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _select = __webpack_require__(328);

	var _select2 = _interopRequireDefault(_select);

	var _uploader = __webpack_require__(329);

	var _uploader2 = _interopRequireDefault(_uploader);

	var _vcode = __webpack_require__(332);

	var _vcode2 = _interopRequireDefault(_vcode);

	var _agreement = __webpack_require__(333);

	var _agreement2 = _interopRequireDefault(_agreement);

	var _preview = __webpack_require__(334);

	var _preview2 = _interopRequireDefault(_preview);

	var _preview_header = __webpack_require__(335);

	var _preview_header2 = _interopRequireDefault(_preview_header);

	var _preview_body = __webpack_require__(336);

	var _preview_body2 = _interopRequireDefault(_preview_body);

	var _preview_footer = __webpack_require__(337);

	var _preview_footer2 = _interopRequireDefault(_preview_footer);

	var _preview_item = __webpack_require__(338);

	var _preview_item2 = _interopRequireDefault(_preview_item);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by yjcxy12 on 16/1/22.
	 */

	exports.default = {
	    Form: _form2.default,
	    FormCell: _form_cell2.default,
	    TextArea: _textarea2.default,
	    Input: _input2.default,
	    Switch: _switch2.default,
	    Radio: _radio2.default,
	    Checkbox: _checkbox2.default,
	    Select: _select2.default,
	    Uploader: _uploader2.default,
	    VCode: _vcode2.default,
	    Agreement: _agreement2.default,
	    Preview: _preview2.default,
	    PreviewHeader: _preview_header2.default,
	    PreviewBody: _preview_body2.default,
	    PreviewFooter: _preview_footer2.default,
	    PreviewItem: _preview_item2.default
	};
	module.exports = exports['default'];

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * weui wrapper for form
	 *
	 */
	var Form = function (_Component) {
	    _inherits(Form, _Component);

	    function Form() {
	        _classCallCheck(this, Form);

	        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	    }

	    _createClass(Form, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                radio = _props.radio,
	                checkbox = _props.checkbox,
	                others = _objectWithoutProperties(_props, ['children', 'className', 'radio', 'checkbox']);

	            var cls = (0, _classnames2.default)(_defineProperty({
	                'weui-cells': true,
	                'weui-cells_form': !radio && !checkbox,
	                'weui-cells_radio': radio,
	                'weui-cells_checkbox': checkbox
	            }, className, className));

	            return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return Form;
	}(_react.Component);

	Form.propTypes = {
	    /**
	     * if this form is use for radios
	     *
	     */
	    radio: _react.PropTypes.bool,
	    /**
	     * if this form is use for checkbox
	     *
	     */
	    checkbox: _react.PropTypes.bool
	};
	Form.defaultProps = {
	    radio: false,
	    checkbox: false
	};
	;

	exports.default = Form;
	module.exports = exports['default'];

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(319);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * form wrapper for `Cell`
	 *
	 */
	var FormCell = function (_Component) {
	    _inherits(FormCell, _Component);

	    function FormCell() {
	        _classCallCheck(this, FormCell);

	        return _possibleConstructorReturn(this, (FormCell.__proto__ || Object.getPrototypeOf(FormCell)).apply(this, arguments));
	    }

	    _createClass(FormCell, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                children = _props.children,
	                radio = _props.radio,
	                checkbox = _props.checkbox,
	                vcode = _props.vcode,
	                warn = _props.warn,
	                select = _props.select,
	                selectPos = _props.selectPos,
	                others = _objectWithoutProperties(_props, ['className', 'children', 'radio', 'checkbox', 'vcode', 'warn', 'select', 'selectPos']);

	            var cellDomProps = Object.assign({}, others);
	            delete cellDomProps.switch;
	            var cls = (0, _classnames2.default)(_defineProperty({
	                'weui-cell': true,
	                'weui-cell_vcode': vcode,
	                'weui-cell_warn': warn,
	                'weui-cell_switch': this.props.switch,
	                'weui-cell_select': select,
	                'weui-cell_select-before': selectPos == 'before',
	                'weui-cell_select-after': selectPos == 'after',
	                'weui-check__label': radio || checkbox
	            }, className, className));

	            if (radio || checkbox) {
	                return _react2.default.createElement('label', _extends({ className: cls }, cellDomProps), children);
	            } else {
	                return _react2.default.createElement('div', _extends({ className: cls }, cellDomProps), children);
	            }
	        }
	    }]);

	    return FormCell;
	}(_react.Component);

	FormCell.propTypes = {
	    /**
	     * if cell use for vcode
	     *
	     */
	    vcode: _react.PropTypes.bool,
	    /**
	     * display warn style of cell
	     *
	     */
	    warn: _react.PropTypes.bool,
	    /**
	     * if cell use for radio
	     *
	     */
	    radio: _react.PropTypes.bool,
	    /**
	     * if cell use for checkbox
	     *
	     */
	    checkbox: _react.PropTypes.bool,
	    /**
	     * if cell use for switch checkbox
	     *
	     */
	    switch: _react.PropTypes.bool,
	    /**
	     * if cell use for select
	     *
	     */
	    select: _react.PropTypes.bool,
	    /**
	     * select position, options: before, after
	     *
	     */
	    selectPos: _react.PropTypes.string
	};
	FormCell.defaultProps = {
	    vcode: false,
	    warn: false,
	    radio: false,
	    checkbox: false,
	    select: false,
	    switch: false,
	    selectPos: undefined
	};
	exports.default = FormCell;
	;
	module.exports = exports['default'];

/***/ },
/* 319 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * weui wrapper for textarea
	 *
	 */
	var TextArea = function (_Component) {
	    _inherits(TextArea, _Component);

	    function TextArea() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, TextArea);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            textCounter: _this.props.defaultValue ? _this.props.defaultValue.length : 0
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(TextArea, [{
	        key: 'handleChange',
	        value: function handleChange(e) {
	            this.setState({ textCounter: e.target.value.length });

	            //forward event to props if any
	            if (this.props.onChange) this.props.onChange(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                children = _props.children,
	                showCounter = _props.showCounter,
	                maxlength = _props.maxlength,
	                onChange = _props.onChange,
	                others = _objectWithoutProperties(_props, ['className', 'children', 'showCounter', 'maxlength', 'onChange']);

	            var cls = (0, _classnames2.default)(_defineProperty({
	                'weui-textarea': true
	            }, className, className));

	            return _react2.default.createElement('div', null, _react2.default.createElement('textarea', _extends({
	                className: cls,
	                maxLength: maxlength,
	                onChange: this.handleChange.bind(this)
	            }, others), children), showCounter ? _react2.default.createElement('div', { className: 'weui-textarea-counter' }, _react2.default.createElement('span', null, this.state.textCounter), maxlength ? '/' + maxlength : false) : false);
	        }
	    }]);

	    return TextArea;
	}(_react.Component);

	TextArea.propTypes = {
	    /**
	     * display word counter
	     *
	     */
	    showCounter: _react.PropTypes.bool,
	    /**
	     * max character allow for textarea
	     *
	     */
	    maxLength: _react.PropTypes.number,
	    defaultValue: _react.PropTypes.string
	};
	TextArea.defaultProps = {
	    showCounter: true,
	    defaultValue: undefined
	};
	exports.default = TextArea;
	;
	module.exports = exports['default'];

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * WeUI Input wrapper for `input`
	 *
	 */
	var Input = function Input(props) {
	    var className = props.className,
	        others = _objectWithoutProperties(props, ['className']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-input': true
	    }, className, className));

	    return _react2.default.createElement('div', null, _react2.default.createElement('input', _extends({ className: cls }, others)), _react2.default.createElement('span', { className: 'weui-icon-checked' }));
	};

	Input.propTypes = {
	    defaultValue: _react2.default.PropTypes.string
	};

	Input.defaultProps = {
	    defaultValue: undefined
	};

	exports.default = Input;
	module.exports = exports['default'];

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * weui switch style for checkbox
	 *
	 */
	var Switch = function Switch(props) {
	    var className = props.className,
	        others = _objectWithoutProperties(props, ['className']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-switch': true
	    }, className, className));

	    return _react2.default.createElement('div', null, _react2.default.createElement('input', _extends({ className: cls, type: 'checkbox' }, others)), _react2.default.createElement('span', { className: 'weui-icon-checked' }));
	};

	exports.default = Switch;
	module.exports = exports['default'];

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * weui wrapper for radio
	 *
	 */
	var Radio = function Radio(props) {
	    var className = props.className,
	        others = _objectWithoutProperties(props, ['className']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-check': true
	    }, className, className));

	    return _react2.default.createElement('div', null, _react2.default.createElement('input', _extends({ className: cls, type: 'radio' }, others)), _react2.default.createElement('span', { className: 'weui-icon-checked' }));
	};

	exports.default = Radio;
	module.exports = exports['default'];

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * weui wrapper for checkbox
	 *
	 */
	var Checkbox = function Checkbox(props) {
	    var className = props.className,
	        others = _objectWithoutProperties(props, ['className']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-check': true
	    }, className, className));

	    return _react2.default.createElement('div', null, _react2.default.createElement('input', _extends({ className: cls, type: 'checkbox' }, others)), _react2.default.createElement('span', { className: 'weui-icon-checked' }));
	};

	exports.default = Checkbox;
	module.exports = exports['default'];

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * weui wrapper for select
	 *
	 */
	var Select = function (_Component) {
	    _inherits(Select, _Component);

	    function Select() {
	        _classCallCheck(this, Select);

	        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
	    }

	    _createClass(Select, [{
	        key: 'renderData',
	        value: function renderData(data) {
	            return data.map(function (item, i) {
	                return _react2.default.createElement('option', _extends({
	                    key: i,
	                    value: item.value
	                }, item), item.label);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                data = _props.data,
	                children = _props.children,
	                others = _objectWithoutProperties(_props, ['className', 'data', 'children']);

	            var cls = (0, _classnames2.default)(_defineProperty({
	                'weui-select': true
	            }, className, className));

	            return _react2.default.createElement('select', _extends({ className: cls }, others), data.length > 0 ? this.renderData(data) : children);
	        }
	    }]);

	    return Select;
	}(_react.Component);

	Select.propTypes = {
	    /**
	     * object arrays of options, `value` and `label` properties is required
	     *
	     */
	    data: _react.PropTypes.array
	};
	Select.defaultProps = {
	    data: []
	};
	exports.default = Select;
	;
	module.exports = exports['default'];

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _icon = __webpack_require__(330);

	var _icon2 = _interopRequireDefault(_icon);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _deprecationWarning = __webpack_require__(306);

	var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * weui style uploader
	 *
	 */
	var Uploader = function (_Component) {
	    _inherits(Uploader, _Component);

	    function Uploader() {
	        _classCallCheck(this, Uploader);

	        return _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).apply(this, arguments));
	    }

	    _createClass(Uploader, [{
	        key: 'detectVerticalSquash',

	        /**
	         * Detecting vertical squash in loaded image.
	         * Fixes a bug which squash image vertically while drawing into canvas for some images.
	         * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
	         * With react fix by n7best
	         */
	        value: function detectVerticalSquash(img) {
	            var data = void 0;
	            var ih = img.naturalHeight;
	            var canvas = document.createElement('canvas');
	            canvas.width = 1;
	            canvas.height = ih;
	            var ctx = canvas.getContext('2d');
	            ctx.drawImage(img, 0, 0);
	            try {
	                // Prevent cross origin error
	                data = ctx.getImageData(0, 0, 1, ih).data;
	            } catch (err) {
	                // hopeless, assume the image is well and good.
	                console.log('Cannot check verticalSquash: CORS?');
	                return 1;
	            }
	            // search image edge pixel position in case it is squashed vertically.
	            var sy = 0;
	            var ey = ih;
	            var py = ih;
	            while (py > sy) {
	                var alpha = data[(py - 1) * 4 + 3];
	                if (alpha === 0) {
	                    ey = py;
	                } else {
	                    sy = py;
	                }
	                py = ey + sy >> 1;
	            }
	            var ratio = py / ih;
	            return ratio === 0 ? 1 : ratio;
	        }
	    }, {
	        key: 'handleFile',
	        value: function handleFile(file, cb) {
	            var _this2 = this,
	                _arguments = arguments;

	            var reader = void 0;
	            if (typeof FileReader !== 'undefined') {
	                reader = new FileReader();
	            } else {
	                if (window.FileReader) reader = new window.FileReader();
	            }

	            reader.onload = function (e) {
	                var img = void 0;
	                if (typeof Image !== 'undefined') {
	                    img = new Image();
	                } else {
	                    if (window.Image) img = new window.Image();
	                }
	                img.onload = function () {
	                    var w = Math.min(_this2.props.maxWidth, img.width);
	                    var h = img.height * (w / img.width);
	                    var canvas = document.createElement('canvas');
	                    var ctx = canvas.getContext('2d');

	                    //check canvas support, for test
	                    if (ctx) {
	                        (function () {
	                            //patch subsampling bug
	                            //http://jsfiddle.net/gWY2a/24/
	                            var drawImage = ctx.drawImage;
	                            ctx.drawImage = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
	                                var vertSquashRatio = 1;
	                                // Detect if img param is indeed image
	                                if (!!img && img.nodeName == 'IMG') {
	                                    vertSquashRatio = _this2.detectVerticalSquash(img);
	                                    sw || (sw = img.naturalWidth);
	                                    sh || (sh = img.naturalHeight);
	                                }

	                                // Execute several cases (Firefox does not handle undefined as no param)
	                                // by call (apply is bad performance)
	                                if (_arguments.length == 9) drawImage.call(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);else if (typeof sw != 'undefined') drawImage.call(ctx, img, sx, sy, sw, sh / vertSquashRatio);else drawImage.call(ctx, img, sx, sy);
	                            };

	                            canvas.width = w;
	                            canvas.height = h;
	                            ctx.drawImage(img, 0, 0, w, h);

	                            var base64 = canvas.toDataURL('image/png');

	                            cb({
	                                nativeFile: file,
	                                lastModified: file.lastModified,
	                                lastModifiedDate: file.lastModifiedDate,
	                                name: file.name,
	                                size: file.size,
	                                type: file.type,
	                                data: base64
	                            }, e);
	                        })();
	                    } else {
	                        cb(file, e);
	                    }
	                };
	                img.src = e.target.result;
	            };
	            reader.readAsDataURL(file);
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e) {
	            var _this3 = this;

	            var langs = this.props.lang;
	            var _files = e.target.files;

	            if (_files.length === 0) return;

	            if (this.props.files.length >= this.props.maxCount) {
	                this.props.onError(langs.maxError(this.props.maxCount));
	                return;
	            }

	            for (var key in _files) {
	                if (!_files.hasOwnProperty(key)) continue;
	                var file = _files[key];

	                this.handleFile(file, function (_file, e) {
	                    if (_this3.props.onChange) _this3.props.onChange(_file, e);
	                    _reactDom2.default.findDOMNode(_this3.refs.uploader).value = '';
	                }, e);
	            }
	        }
	    }, {
	        key: 'renderFiles',
	        value: function renderFiles() {
	            var _this4 = this;

	            return this.props.files.map(function (file, idx) {
	                var url = file.url,
	                    error = file.error,
	                    status = file.status,
	                    onClick = file.onClick,
	                    others = _objectWithoutProperties(file, ['url', 'error', 'status', 'onClick']);

	                var fileStyle = {
	                    backgroundImage: 'url(' + url + ')'
	                };
	                var cls = (0, _classnames2.default)({
	                    'weui-uploader__file': true,
	                    'weui-uploader__file_status': error || status
	                });

	                if (onClick) {
	                    (0, _deprecationWarning2.default)('File onClick', 'Uploader onFileClick');
	                }

	                var handleFileClick = onClick ? onClick : function (e) {
	                    if (_this4.props.onFileClick) _this4.props.onFileClick(e, file, idx);
	                };

	                return _react2.default.createElement('li', _extends({ className: cls, key: idx, style: fileStyle, onClick: handleFileClick }, others), error || status ? _react2.default.createElement('div', { className: 'weui-uploader__file-content' }, error ? _react2.default.createElement(_icon2.default, { value: 'warn' }) : status) : false);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                title = _props.title,
	                maxCount = _props.maxCount,
	                files = _props.files,
	                onChange = _props.onChange,
	                onFileClick = _props.onFileClick,
	                others = _objectWithoutProperties(_props, ['className', 'title', 'maxCount', 'files', 'onChange', 'onFileClick']);

	            var inputProps = Object.assign({}, others);
	            delete inputProps.lang;
	            delete inputProps.onError;
	            delete inputProps.maxWidth;

	            var cls = (0, _classnames2.default)(_defineProperty({
	                'weui-uploader': true
	            }, className, className));

	            return _react2.default.createElement('div', { className: cls }, _react2.default.createElement('div', { className: 'weui-uploader__hd' }, _react2.default.createElement('p', { className: 'weui-uploader__title' }, title), _react2.default.createElement('div', { className: 'weui-uploader__info' }, files.length, '/', maxCount)), _react2.default.createElement('div', { className: 'weui-uploader__bd' }, _react2.default.createElement('ul', { className: 'weui-uploader__files' }, this.renderFiles()), _react2.default.createElement('div', { className: 'weui-uploader__input-box' }, _react2.default.createElement('input', _extends({
	                ref: 'uploader' //let react to reset after onchange
	                , className: 'weui-uploader__input',
	                type: 'file',
	                accept: 'image/*',
	                onChange: this.handleChange.bind(this)
	            }, inputProps)))));
	        }
	    }]);

	    return Uploader;
	}(_react.Component);

	Uploader.propTypes = {
	    /**
	     * title of uploader
	     *
	     */
	    title: _react.PropTypes.string,
	    /**
	     * max amount of allow file
	     *
	     */
	    maxCount: _react.PropTypes.number,
	    /**
	     * maxWidth of image for uploader to compress
	     *
	     */
	    maxWidth: _react.PropTypes.number,
	    /**
	     * when file change, pass property `(event, file)`
	     *
	     */
	    onChange: _react.PropTypes.func,
	    /**
	     * when there is error, pass property `msg`
	     *
	     */
	    onError: _react.PropTypes.func,
	    /**
	     * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
	     *
	     */
	    files: _react.PropTypes.array,
	    /**
	     * languages object, with property `maxError`
	     *
	     */
	    lang: _react.PropTypes.object
	};
	Uploader.defaultProps = {
	    title: '图片上传',
	    maxCount: 4,
	    maxWidth: 500,
	    files: [],
	    onChange: undefined,
	    onError: undefined,
	    lang: { maxError: function maxError(maxCount) {
	            return "\u6700\u591A\u53EA\u80FD\u4E0A\u4F20" + maxCount + "\u5F20\u56FE\u7247";
	        } }
	};
	exports.default = Uploader;
	;
	module.exports = exports['default'];

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                   value: true
	});

	var _icon = __webpack_require__(331);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) {
	                                   return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _icon2.default; /**
	                                   * Created by jf on 15/11/3.
	                                   */

	module.exports = exports['default'];

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _deprecationWarning = __webpack_require__(306);

	var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var deprecateValue = {
	    'safe_success': 'safe-success',
	    'safe_warn': 'safe-warn',
	    'success_circle': 'success-circle',
	    'success_no_circle': 'success-no-circle',
	    'waiting_circle': 'waiting-circle',
	    'info_circle': 'info-circle'
	};

	/**
	 * WeUI Icons
	 *
	 */

	var Icon = function (_React$Component) {
	    _inherits(Icon, _React$Component);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            var _classNames;

	            var _props = this.props,
	                value = _props.value,
	                size = _props.size,
	                className = _props.className,
	                primary = _props.primary,
	                others = _objectWithoutProperties(_props, ['value', 'size', 'className', 'primary']);

	            if (Object.keys(deprecateValue).find(function (v) {
	                return v == value;
	            })) {
	                (0, _deprecationWarning2.default)('Icon ' + value, 'Icon ' + deprecateValue[value]);
	                value == deprecateValue[value];
	            }

	            var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'weui-icon-' + value, value != 'loading'), _defineProperty(_classNames, 'weui-icon_msg', size === 'large' && !primary), _defineProperty(_classNames, 'weui-icon_msg-primary', size === 'large' && primary), _defineProperty(_classNames, 'weui-loading', value == 'loading'), _defineProperty(_classNames, className, className), _classNames));

	            return _react2.default.createElement('i', _extends({}, others, { className: cls }));
	        }
	    }]);

	    return Icon;
	}(_react2.default.Component);

	Icon.propTypes = {
	    /**
	     * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
	     *
	     */
	    value: _react2.default.PropTypes.string,
	    /**
	     * size of icon, options: small/large
	     *
	     */
	    size: _react2.default.PropTypes.string
	};
	Icon.defaultProps = {
	    value: 'success',
	    size: 'small'
	};
	exports.default = Icon;
	module.exports = exports['default'];

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * image wrapper for vcode
	 *
	 */
	var VCode = function VCode(props) {
	    var className = props.className,
	        others = _objectWithoutProperties(props, ['className']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-vcode-img': true
	    }, className, className));

	    return _react2.default.createElement('div', null, _react2.default.createElement('img', _extends({ className: cls }, others)));
	};

	exports.default = VCode;
	module.exports = exports['default'];

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Agreement style checkbox
	 *
	 */
	var Agreement = function Agreement(props) {
	    var className = props.className,
	        children = props.children,
	        id = props.id,
	        others = _objectWithoutProperties(props, ['className', 'children', 'id']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-agree': true
	    }, className, className));

	    return _react2.default.createElement('label', { className: cls, htmlFor: id }, _react2.default.createElement('input', _extends({ id: id, type: 'checkbox', className: 'weui-agree__checkbox' }, others)), _react2.default.createElement('span', { className: 'weui-agree__text' }, children));
	};

	exports.default = Agreement;
	module.exports = exports['default'];

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	} //1.0.0 components

	/**
	 * Preview Wrapper consists of `PreviewHeader`, `PreviewBody`, `PreviewFooter`, `PreviewItem`
	 *
	 */
	var Preview = function Preview(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-form-preview': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	exports.default = Preview;
	module.exports = exports['default'];

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	} //1.0.0 components

	var PreviewHeader = function PreviewHeader(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-form-preview__hd': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	exports.default = PreviewHeader;
	module.exports = exports['default'];

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	} //1.0.0 components

	/**
	 * Content of Preview
	 *
	 */
	var PreviewBody = function PreviewBody(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-form-preview__bd': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	exports.default = PreviewBody;
	module.exports = exports['default'];

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	} //1.0.0 components

	/**
	 * Footer of Preview, consists of actions
	 *
	 */
	var PreviewFooter = function PreviewFooter(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-form-preview__ft': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	exports.default = PreviewFooter;
	module.exports = exports['default'];

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	} //1.0.0 components

	/**
	 * Preview Item for all purpose usage
	 *
	 */
	var PreviewItem = function PreviewItem(props) {
	    var className = props.className,
	        label = props.label,
	        value = props.value,
	        others = _objectWithoutProperties(props, ['className', 'label', 'value']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-form-preview__item': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), _react2.default.createElement('label', { className: 'weui-form-preview__label' }, label), _react2.default.createElement('em', { className: 'weui-form-preview__value' }, value));
	};

	PreviewItem.propTypes = {
	    /**
	     * The label of item
	     *
	     */
	    label: _react.PropTypes.string,
	    /**
	     * Value of the label
	     *
	     */
	    value: _react.PropTypes.string

	};

	PreviewItem.defaultProps = {
	    label: false,
	    value: false
	};

	exports.default = PreviewItem;
	module.exports = exports['default'];

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                    value: true
	});

	var _label = __webpack_require__(340);

	var _label2 = _interopRequireDefault(_label);

	function _interopRequireDefault(obj) {
	                                    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _label2.default; /**
	                                    * Created by yjcxy12 on 16/1/22.
	                                    */

	module.exports = exports['default'];

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * WeUI Label Wrapper
	 *
	 */
	var Label = function Label(props) {
	    var className = props.className,
	        others = _objectWithoutProperties(props, ['className']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-label': true
	    }, className, className));

	    return _react2.default.createElement('div', null, _react2.default.createElement('label', _extends({ className: cls }, others)));
	};

	exports.default = Label;
	module.exports = exports['default'];

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                    value: true
	});

	var _toast = __webpack_require__(342);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) {
	                                    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _toast2.default; /**
	                                    * Created by jf on 15/10/27.
	                                    */

	module.exports = exports['default'];

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _index = __webpack_require__(314);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(330);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  pop out indicator to inform users
	 *
	 */
	var Toast = function (_Component) {
	    _inherits(Toast, _Component);

	    function Toast() {
	        _classCallCheck(this, Toast);

	        return _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
	    }

	    _createClass(Toast, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                icon = _props.icon,
	                show = _props.show,
	                children = _props.children,
	                iconSize = _props.iconSize,
	                others = _objectWithoutProperties(_props, ['className', 'icon', 'show', 'children', 'iconSize']);

	            var cls = (0, _classnames2.default)('weui-toast', _defineProperty({}, className, className));
	            return _react2.default.createElement('div', { style: { display: show ? 'block' : 'none' } }, _react2.default.createElement(_index2.default, { transparent: true }), _react2.default.createElement('div', _extends({ className: cls }, others), _react2.default.createElement(_index4.default, { value: icon, size: iconSize, className: 'weui-icon_toast' }), _react2.default.createElement('p', { className: 'weui-toast_content' }, children)));
	        }
	    }]);

	    return Toast;
	}(_react.Component);

	Toast.propTypes = {
	    /**
	     * Icon Value
	     *
	     */
	    icon: _react.PropTypes.string,
	    /**
	     * Icon Size
	     *
	     */
	    iconSize: _react.PropTypes.string,
	    /**
	     * display toast
	     *
	     */
	    show: _react.PropTypes.bool
	};
	Toast.defaultProps = {
	    icon: 'toast',
	    show: false
	};
	exports.default = Toast;
	module.exports = exports['default'];

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                       value: true
	});

	var _progress = __webpack_require__(344);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) {
	                                       return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _progress2.default; /**
	                                       * Created by jf on 15/10/27.
	                                       */

	module.exports = exports['default'];

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _icon = __webpack_require__(330);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 *  progress bar
	 *
	 */
	var Progress = function Progress(props) {
	    var className = props.className,
	        showCancel = props.showCancel,
	        value = props.value,
	        _onClick = props.onClick,
	        others = _objectWithoutProperties(props, ['className', 'showCancel', 'value', 'onClick']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-progress': true
	    }, className, className));

	    var pgWdith = value > 100 ? 100 : value < 0 ? 0 : value;

	    return _react2.default.createElement('div', _extends({ className: cls }, others), _react2.default.createElement('div', { className: 'weui-progress__bar' }, _react2.default.createElement('div', { className: 'weui-progress__inner-bar', style: { width: pgWdith + '%' } })), showCancel ? _react2.default.createElement('a', { href: 'javascript:;', className: 'weui-progress__opr', onClick: function onClick(e) {
	            if (_onClick) _onClick(e);
	        } }, _react2.default.createElement(_icon2.default, { value: 'cancel' })) : false);
	};

	Progress.propTypes = {
	    /**
	     * value of the bar
	     *
	     */
	    value: _react.PropTypes.number,
	    /**
	     * enable cancel button
	     *
	     */
	    showCancel: _react.PropTypes.bool
	};

	Progress.defaultProps = {
	    value: 0,
	    showCancel: true
	};

	exports.default = Progress;
	module.exports = exports['default'];

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                          value: true
	});

	var _actionsheet = __webpack_require__(346);

	var _actionsheet2 = _interopRequireDefault(_actionsheet);

	function _interopRequireDefault(obj) {
	                                          return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _actionsheet2.default; /**
	                                          * Created by jf on 15/11/26.
	                                          */

	module.exports = exports['default'];

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _index = __webpack_require__(314);

	var _index2 = _interopRequireDefault(_index);

	var _mobile_detect = __webpack_require__(347);

	__webpack_require__(350);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
	 */
	var ActionSheet = function (_Component) {
	    _inherits(ActionSheet, _Component);

	    function ActionSheet() {
	        _classCallCheck(this, ActionSheet);

	        return _possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).apply(this, arguments));
	    }

	    _createClass(ActionSheet, [{
	        key: 'renderMenuItem',
	        value: function renderMenuItem() {
	            return this.props.menus.map(function (menu, idx) {
	                var label = menu.label,
	                    className = menu.className,
	                    others = _objectWithoutProperties(menu, ['label', 'className']);

	                var cls = (0, _classnames2.default)(_defineProperty({
	                    'weui-actionsheet__cell': true
	                }, className, className));

	                return _react2.default.createElement('div', _extends({ key: idx }, others, { className: cls }), label);
	            });
	        }
	    }, {
	        key: 'renderActions',
	        value: function renderActions() {
	            return this.props.actions.map(function (action, idx) {
	                var label = action.label,
	                    className = action.className,
	                    others = _objectWithoutProperties(action, ['label', 'className']);

	                var cls = (0, _classnames2.default)(_defineProperty({
	                    'weui-actionsheet__cell': true
	                }, className, className));

	                return _react2.default.createElement('div', _extends({ key: idx }, others, { className: cls }), label);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                show = _props.show,
	                autoDectect = _props.autoDectect,
	                type = _props.type,
	                onRequestClose = _props.onRequestClose,
	                menus = _props.menus,
	                actions = _props.actions,
	                others = _objectWithoutProperties(_props, ['show', 'autoDectect', 'type', 'onRequestClose', 'menus', 'actions']);

	            var cls = (0, _classnames2.default)({
	                'weui-actionsheet': true,
	                'weui-actionsheet_toggle': show
	            });

	            var styleType = type ? type : 'ios';

	            if (!type && autoDectect) {
	                if (_mobile_detect.isAndroid) styleType = 'android';
	            }

	            return _react2.default.createElement('div', {
	                className: styleType == 'android' ? 'weui-skin_android' : ''
	            }, _react2.default.createElement(_index2.default, { style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }), _react2.default.createElement('div', _extends({ className: cls }, others), _react2.default.createElement('div', { className: 'weui-actionsheet__menu' }, this.renderMenuItem()), _react2.default.createElement('div', { className: 'weui-actionsheet__action' }, this.renderActions())));
	        }
	    }]);

	    return ActionSheet;
	}(_react.Component);

	ActionSheet.propTypes = {
	    /**
	     * Array of Objects for menus, `label` property is Required
	     *
	     */
	    menus: _react.PropTypes.array,
	    /**
	     * Array of Objects for actions, `label` property is Required
	     *
	     */
	    actions: _react.PropTypes.array,
	    /**
	     * To display ActionSheet
	     *
	     */
	    show: _react.PropTypes.bool,
	    /**
	     * Function triggers when user click on the mask
	     *
	     */
	    onRequestClose: _react.PropTypes.func,
	    /**
	     * Allow component to autodetect device and display corresponding style
	     */
	    autoDectect: _react.PropTypes.bool,
	    /**
	     * style: ios/android
	     */
	    type: _react.PropTypes.string
	};
	ActionSheet.defaultProps = {
	    type: '',
	    menus: [],
	    actions: [],
	    show: false,
	    autoDectect: true,
	    onRequestClose: function onRequestClose() {}
	};
	;

	exports.default = ActionSheet;
	module.exports = exports['default'];

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mobileDetect = __webpack_require__(348);

	var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var md = new _mobileDetect2.default(window.navigator.userAgent);

	module.exports = {
	  iOSVer: md.version('iOS') ? md.version('iOS') : null,
	  androidVer: md.version('Android') ? md.version('Android') : null,
	  isIOS: md.os() === 'iOS',
	  isIOS8: md.os() === 'iOS' && parseFloat(md.version('iOS')) >= 8 && parseFloat(md.version('iOS')) < 9,
	  isIOS9: md.os() === 'iOS' && parseFloat(md.version('iOS')) >= 9 && parseFloat(md.version('iOS')) < 10,
	  isIOS10: md.os() === 'iOS' && parseFloat(md.version('iOS')) >= 10 && parseFloat(md.version('iOS')) < 11,
	  isAndroid: md.os() === 'AndroidOS',
	  isWindow: md.os() === 'WindowsMobileOS' || md.os() === 'WindowsPhoneOS',
	  isMobile: md.mobile() !== null ? true : false,
	  isWechat: md.match('MicroMessenger') ? true : false,
	  wechatVer: md.version('MicroMessenger') ? md.version('MicroMessenger') : null
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	// THIS FILE IS GENERATED - DO NOT EDIT!
	/*!mobile-detect v1.3.5 2016-11-14*/
	/*global module:false, define:false*/
	/*jshint latedef:false*/
	/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
	(function (define, undefined) {
	define(function () {
	    'use strict';

	    var impl = {};

	    impl.mobileDetectRules = {
	    "phones": {
	        "iPhone": "\\biPhone\\b|\\biPod\\b",
	        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
	        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
	        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
	        "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
	        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
	        "Samsung": "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F",
	        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
	        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
	        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
	        "NokiaLumia": "Lumia [0-9]{3,4}",
	        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
	        "Palm": "PalmSource|Palm",
	        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
	        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
	        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
	        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
	        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
	        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
	        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
	        "Alcatel": "Alcatel",
	        "Nintendo": "Nintendo 3DS",
	        "Amoi": "Amoi",
	        "INQ": "INQ",
	        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
	    },
	    "tablets": {
	        "iPad": "iPad|iPad.*Mobile",
	        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
	        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280",
	        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",
	        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
	        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
	        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z",
	        "BlackBerryTablet": "PlayBook|RIM Tablet",
	        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
	        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
	        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
	        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
	        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
	        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
	        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
	        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
	        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
	        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
	        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
	        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
	        "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
	        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
	        "IRUTablet": "M702pro",
	        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
	        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
	        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
	        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
	        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
	        "NokiaLumiaTablet": "Lumia 2520",
	        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
	        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
	        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
	        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
	        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
	        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
	        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
	        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
	        "FlyTablet": "IQ310|Fly Vision",
	        "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",
	        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
	        "NecTablet": "\\bN-06D|\\bN-08D",
	        "PantechTablet": "Pantech.*P4100",
	        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
	        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
	        "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
	        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
	        "NabiTablet": "Android.*\\bNabi",
	        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
	        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
	        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
	        "PlaystationTablet": "Playstation.*(Portable|Vita)",
	        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
	        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
	        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
	        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
	        "GalapadTablet": "Android.*\\bG1\\b",
	        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
	        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
	        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
	        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
	        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
	        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
	        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
	        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
	        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
	        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
	        "DPSTablet": "DPS Dream 9|DPS Dual 7",
	        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
	        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
	        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
	        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
	        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
	        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
	        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
	        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
	        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
	        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
	        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
	        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
	        "iMobileTablet": "i-mobile i-note",
	        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
	        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
	        "AMPETablet": "Android.* A78 ",
	        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
	        "TecnoTablet": "TECNO P9",
	        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
	        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
	        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
	        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
	        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
	        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
	        "CaptivaTablet": "CAPTIVA PAD",
	        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
	        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
	        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
	        "JaytechTablet": "TPC-PA762",
	        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
	        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
	        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
	        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
	        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
	        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
	        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
	        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
	        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
	        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
	        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
	        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
	        "UbislateTablet": "UbiSlate[\\s]?7C",
	        "PocketBookTablet": "Pocketbook",
	        "KocasoTablet": "\\b(TB-1207)\\b",
	        "HisenseTablet": "\\b(F5281|E2371)\\b",
	        "Hudl": "Hudl HT7S3|Hudl 2",
	        "TelstraTablet": "T-Hub2",
	        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b"
	    },
	    "oss": {
	        "AndroidOS": "Android",
	        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
	        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
	        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
	        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
	        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
	        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
	        "MeeGoOS": "MeeGo",
	        "MaemoOS": "Maemo",
	        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
	        "webOS": "webOS|hpwOS",
	        "badaOS": "\\bBada\\b",
	        "BREWOS": "BREW"
	    },
	    "uas": {
	        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
	        "Dolfin": "\\bDolfin\\b",
	        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
	        "Skyfire": "Skyfire",
	        "Edge": "Mobile Safari\/[.0-9]* Edge",
	        "IE": "IEMobile|MSIEMobile",
	        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
	        "Bolt": "bolt",
	        "TeaShark": "teashark",
	        "Blazer": "Blazer",
	        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
	        "UCBrowser": "UC.*Browser|UCWEB",
	        "baiduboxapp": "baiduboxapp",
	        "baidubrowser": "baidubrowser",
	        "DiigoBrowser": "DiigoBrowser",
	        "Puffin": "Puffin",
	        "Mercury": "\\bMercury\\b",
	        "ObigoBrowser": "Obigo",
	        "NetFront": "NF-Browser",
	        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
	        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
	    },
	    "props": {
	        "Mobile": "Mobile\/[VER]",
	        "Build": "Build\/[VER]",
	        "Version": "Version\/[VER]",
	        "VendorID": "VendorID\/[VER]",
	        "iPad": "iPad.*CPU[a-z ]+[VER]",
	        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
	        "iPod": "iPod.*CPU[a-z ]+[VER]",
	        "Kindle": "Kindle\/[VER]",
	        "Chrome": [
	            "Chrome\/[VER]",
	            "CriOS\/[VER]",
	            "CrMo\/[VER]"
	        ],
	        "Coast": [
	            "Coast\/[VER]"
	        ],
	        "Dolfin": "Dolfin\/[VER]",
	        "Firefox": [
	            "Firefox\/[VER]",
	            "FxiOS\/[VER]"
	        ],
	        "Fennec": "Fennec\/[VER]",
	        "Edge": "Edge\/[VER]",
	        "IE": [
	            "IEMobile\/[VER];",
	            "IEMobile [VER]",
	            "MSIE [VER];",
	            "Trident\/[0-9.]+;.*rv:[VER]"
	        ],
	        "NetFront": "NetFront\/[VER]",
	        "NokiaBrowser": "NokiaBrowser\/[VER]",
	        "Opera": [
	            " OPR\/[VER]",
	            "Opera Mini\/[VER]",
	            "Version\/[VER]"
	        ],
	        "Opera Mini": "Opera Mini\/[VER]",
	        "Opera Mobi": "Version\/[VER]",
	        "UC Browser": "UC Browser[VER]",
	        "MQQBrowser": "MQQBrowser\/[VER]",
	        "MicroMessenger": "MicroMessenger\/[VER]",
	        "baiduboxapp": "baiduboxapp\/[VER]",
	        "baidubrowser": "baidubrowser\/[VER]",
	        "SamsungBrowser": "SamsungBrowser\/[VER]",
	        "Iron": "Iron\/[VER]",
	        "Safari": [
	            "Version\/[VER]",
	            "Safari\/[VER]"
	        ],
	        "Skyfire": "Skyfire\/[VER]",
	        "Tizen": "Tizen\/[VER]",
	        "Webkit": "webkit[ \/][VER]",
	        "PaleMoon": "PaleMoon\/[VER]",
	        "Gecko": "Gecko\/[VER]",
	        "Trident": "Trident\/[VER]",
	        "Presto": "Presto\/[VER]",
	        "Goanna": "Goanna\/[VER]",
	        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
	        "Android": "Android [VER]",
	        "BlackBerry": [
	            "BlackBerry[\\w]+\/[VER]",
	            "BlackBerry.*Version\/[VER]",
	            "Version\/[VER]"
	        ],
	        "BREW": "BREW [VER]",
	        "Java": "Java\/[VER]",
	        "Windows Phone OS": [
	            "Windows Phone OS [VER]",
	            "Windows Phone [VER]"
	        ],
	        "Windows Phone": "Windows Phone [VER]",
	        "Windows CE": "Windows CE\/[VER]",
	        "Windows NT": "Windows NT [VER]",
	        "Symbian": [
	            "SymbianOS\/[VER]",
	            "Symbian\/[VER]"
	        ],
	        "webOS": [
	            "webOS\/[VER]",
	            "hpwOS\/[VER];"
	        ]
	    },
	    "utils": {
	        "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
	        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
	        "DesktopMode": "WPDesktop",
	        "TV": "SonyDTV|HbbTV",
	        "WebKit": "(webkit)[ \/]([\\w.]+)",
	        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
	        "Watch": "SM-V700"
	    }
	};

	    // following patterns come from http://detectmobilebrowsers.com/
	    impl.detectMobileBrowsers = {
	        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
	        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
	        tabletPattern: /android|ipad|playbook|silk/i
	    };

	    var hasOwnProp = Object.prototype.hasOwnProperty,
	        isArray;

	    impl.FALLBACK_PHONE = 'UnknownPhone';
	    impl.FALLBACK_TABLET = 'UnknownTablet';
	    impl.FALLBACK_MOBILE = 'UnknownMobile';

	    isArray = ('isArray' in Array) ?
	        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

	    function equalIC(a, b) {
	        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
	    }

	    function containsIC(array, value) {
	        var valueLC, i, len = array.length;
	        if (!len || !value) {
	            return false;
	        }
	        valueLC = value.toLowerCase();
	        for (i = 0; i < len; ++i) {
	            if (valueLC === array[i].toLowerCase()) {
	                return true;
	            }
	        }
	        return false;
	    }

	    function convertPropsToRegExp(object) {
	        for (var key in object) {
	            if (hasOwnProp.call(object, key)) {
	                object[key] = new RegExp(object[key], 'i');
	            }
	        }
	    }

	    (function init() {
	        var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
	        for (key in mobileDetectRules.props) {
	            if (hasOwnProp.call(mobileDetectRules.props, key)) {
	                values = mobileDetectRules.props[key];
	                if (!isArray(values)) {
	                    values = [values];
	                }
	                len = values.length;
	                for (i = 0; i < len; ++i) {
	                    value = values[i];
	                    verPos = value.indexOf('[VER]');
	                    if (verPos >= 0) {
	                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
	                    }
	                    values[i] = new RegExp(value, 'i');
	                }
	                mobileDetectRules.props[key] = values;
	            }
	        }
	        convertPropsToRegExp(mobileDetectRules.oss);
	        convertPropsToRegExp(mobileDetectRules.phones);
	        convertPropsToRegExp(mobileDetectRules.tablets);
	        convertPropsToRegExp(mobileDetectRules.uas);
	        convertPropsToRegExp(mobileDetectRules.utils);

	        // copy some patterns to oss0 which are tested first (see issue#15)
	        mobileDetectRules.oss0 = {
	            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
	            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
	        };
	    }());

	    /**
	     * Test userAgent string against a set of rules and find the first matched key.
	     * @param {Object} rules (key is String, value is RegExp)
	     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
	     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
	     * @private
	     */
	    impl.findMatch = function(rules, userAgent) {
	        for (var key in rules) {
	            if (hasOwnProp.call(rules, key)) {
	                if (rules[key].test(userAgent)) {
	                    return key;
	                }
	            }
	        }
	        return null;
	    };

	    /**
	     * Test userAgent string against a set of rules and return an array of matched keys.
	     * @param {Object} rules (key is String, value is RegExp)
	     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
	     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
	     * @private
	     */
	    impl.findMatches = function(rules, userAgent) {
	        var result = [];
	        for (var key in rules) {
	            if (hasOwnProp.call(rules, key)) {
	                if (rules[key].test(userAgent)) {
	                    result.push(key);
	                }
	            }
	        }
	        return result;
	    };

	    /**
	     * Check the version of the given property in the User-Agent.
	     *
	     * @param {String} propertyName
	     * @param {String} userAgent
	     * @return {String} version or <tt>null</tt> if version not found
	     * @private
	     */
	    impl.getVersionStr = function (propertyName, userAgent) {
	        var props = impl.mobileDetectRules.props, patterns, i, len, match;
	        if (hasOwnProp.call(props, propertyName)) {
	            patterns = props[propertyName];
	            len = patterns.length;
	            for (i = 0; i < len; ++i) {
	                match = patterns[i].exec(userAgent);
	                if (match !== null) {
	                    return match[1];
	                }
	            }
	        }
	        return null;
	    };

	    /**
	     * Check the version of the given property in the User-Agent.
	     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
	     *
	     * @param {String} propertyName
	     * @param {String} userAgent
	     * @return {Number} version or <tt>NaN</tt> if version not found
	     * @private
	     */
	    impl.getVersion = function (propertyName, userAgent) {
	        var version = impl.getVersionStr(propertyName, userAgent);
	        return version ? impl.prepareVersionNo(version) : NaN;
	    };

	    /**
	     * Prepare the version number.
	     *
	     * @param {String} version
	     * @return {Number} the version number as a floating number
	     * @private
	     */
	    impl.prepareVersionNo = function (version) {
	        var numbers;

	        numbers = version.split(/[a-z._ \/\-]/i);
	        if (numbers.length === 1) {
	            version = numbers[0];
	        }
	        if (numbers.length > 1) {
	            version = numbers[0] + '.';
	            numbers.shift();
	            version += numbers.join('');
	        }
	        return Number(version);
	    };

	    impl.isMobileFallback = function (userAgent) {
	        return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
	            impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
	    };

	    impl.isTabletFallback = function (userAgent) {
	        return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
	    };

	    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
	        if (cache.mobile !== undefined) {
	            return;
	        }
	        var phone, tablet, phoneSized;

	        // first check for stronger tablet rules, then phone (see issue#5)
	        tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
	        if (tablet) {
	            cache.mobile = cache.tablet = tablet;
	            cache.phone = null;
	            return; // unambiguously identified as tablet
	        }

	        phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
	        if (phone) {
	            cache.mobile = cache.phone = phone;
	            cache.tablet = null;
	            return; // unambiguously identified as phone
	        }

	        // our rules haven't found a match -> try more general fallback rules
	        if (impl.isMobileFallback(userAgent)) {
	            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
	            if (phoneSized === undefined) {
	                cache.mobile = impl.FALLBACK_MOBILE;
	                cache.tablet = cache.phone = null;
	            } else if (phoneSized) {
	                cache.mobile = cache.phone = impl.FALLBACK_PHONE;
	                cache.tablet = null;
	            } else {
	                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
	                cache.phone = null;
	            }
	        } else if (impl.isTabletFallback(userAgent)) {
	            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
	            cache.phone = null;
	        } else {
	            // not mobile at all!
	            cache.mobile = cache.tablet = cache.phone = null;
	        }
	    };

	    // t is a reference to a MobileDetect instance
	    impl.mobileGrade = function (t) {
	        // impl note:
	        // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
	        // When changes are made in Mobile_Detect.php, copy this method and replace:
	        //     $this-> / t.
	        //     self::MOBILE_GRADE_(.) / '$1'
	        //     , self::VERSION_TYPE_FLOAT / (nothing)
	        //     isIOS() / os('iOS')
	        //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
	        var $isMobile = t.mobile() !== null;

	        if (
	            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
	            t.os('iOS') && t.version('iPad')>=4.3 ||
	            t.os('iOS') && t.version('iPhone')>=3.1 ||
	            t.os('iOS') && t.version('iPod')>=3.1 ||

	            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
	            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
	            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
	            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
	            ( t.version('Android')>2.1 && t.is('Webkit') ) ||

	            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
	            t.version('Windows Phone OS')>=7.0 ||

	            // Blackberry 7 - Tested on BlackBerry Torch 9810
	            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
	            t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
	            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
	            t.match('Playbook.*Tablet') ||

	            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
	            ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
	            // Palm WebOS 3.0  - Tested on HP TouchPad
	            t.match('hp.*TouchPad') ||

	            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
	            ( t.is('Firefox') && t.version('Firefox')>=12 ) ||

	            // Chrome for Android - Tested on Android 4.0, 4.1 device
	            ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||

	            // Skyfire 4.1 - Tested on Android 2.3 device
	            ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||

	            // Opera Mobile 11.5-12: Tested on Android 2.3
	            ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||

	            // Meego 1.2 - Tested on Nokia 950 and N9
	            t.is('MeeGoOS') ||

	            // Tizen (pre-release) - Tested on early hardware
	            t.is('Tizen') ||

	            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
	            // @todo: more tests here!
	            t.is('Dolfin') && t.version('Bada')>=2.0 ||

	            // UC Browser - Tested on Android 2.3 device
	            ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||

	            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
	            ( t.match('Kindle Fire') ||
	                t.is('Kindle') && t.version('Kindle')>=3.0 ) ||

	            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
	            t.is('AndroidOS') && t.is('NookTablet') ||

	            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
	            t.version('Chrome')>=11 && !$isMobile ||

	            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
	            t.version('Safari')>=5.0 && !$isMobile ||

	            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
	            t.version('Firefox')>=4.0 && !$isMobile ||

	            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
	            t.version('MSIE')>=7.0 && !$isMobile ||

	            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
	            // @reference: http://my.opera.com/community/openweb/idopera/
	            t.version('Opera')>=10 && !$isMobile

	            ){
	            return 'A';
	        }

	        if (
	            t.os('iOS') && t.version('iPad')<4.3 ||
	            t.os('iOS') && t.version('iPhone')<3.1 ||
	            t.os('iOS') && t.version('iPod')<3.1 ||

	            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
	            t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||

	            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
	            ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
	                (t.version('Android')>=2.3 || t.is('iOS')) ) ||

	            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
	            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

	            // @todo: report this (tested on Nokia N71)
	            t.version('Opera Mobi')>=11 && t.is('SymbianOS')
	            ){
	            return 'B';
	        }

	        if (
	        // Blackberry 4.x - Tested on the Curve 8330
	            t.version('BlackBerry')<5.0 ||
	            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
	            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2

	            ){
	            return 'C';
	        }

	        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
	        //will receive the basic, C grade experience.
	        return 'C';
	    };

	    impl.detectOS = function (ua) {
	        return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
	            impl.findMatch(impl.mobileDetectRules.oss, ua);
	    };

	    impl.getDeviceSmallerSide = function () {
	        return window.screen.width < window.screen.height ?
	            window.screen.width :
	            window.screen.height;
	    };

	    /**
	     * Constructor for MobileDetect object.
	     * <br>
	     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
	     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
	     *     <strong>Find information how to download and install:</strong>
	     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
	     * </div>
	     *
	     * @example <pre>
	     *     var md = new MobileDetect(window.navigator.userAgent);
	     *     if (md.mobile()) {
	     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
	     *     }
	     * </pre>
	     *
	     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
	     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
	     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
	     *        as phone.
	     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
	     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
	     *        for Android</a>.<br>
	     *        If you provide a value < 0, then this "fuzzy" check is disabled.
	     * @constructor
	     * @global
	     */
	    function MobileDetect(userAgent, maxPhoneWidth) {
	        this.ua = userAgent || '';
	        this._cache = {};
	        //600dp is typical 7" tablet minimum width
	        this.maxPhoneWidth = maxPhoneWidth || 600;
	    }

	    MobileDetect.prototype = {
	        constructor: MobileDetect,

	        /**
	         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
	         * <br>
	         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
	         * <br>
	         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
	         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
	         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
	         * <code>UnknownMobile</code> is returned.<br>
	         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
	         * <br>
	         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
	         * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
	         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
	         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
	         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
	         * <br>
	         * In most cases you will use the return value just as a boolean.
	         *
	         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
	         * @function MobileDetect#mobile
	         */
	        mobile: function () {
	            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
	            return this._cache.mobile;
	        },

	        /**
	         * Returns the detected phone type/family string or <tt>null</tt>.
	         * <br>
	         * The returned tablet (family or producer) is one of following keys:<br>
	         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
	         * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
	         * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
	         * <br>
	         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
	         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
	         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
	         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
	         * <br>
	         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
	         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
	         * will return <code>UnknownMobile</code>.<br>
	         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
	         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
	         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
	         * <br>
	         * In most cases you will use the return value just as a boolean.
	         *
	         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
	         * @function MobileDetect#phone
	         */
	        phone: function () {
	            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
	            return this._cache.phone;
	        },

	        /**
	         * Returns the detected tablet type/family string or <tt>null</tt>.
	         * <br>
	         * The returned tablet (family or producer) is one of following keys:<br>
	         * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
	         * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
	         * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
	         * DellTablet, YarvikTablet, MedionTablet, ArnovaTablet, IntensoTablet, IRUTablet,
	         * MegafonTablet, EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet,
	         * NokiaLumiaTablet, SonyTablet, PhilipsTablet, CubeTablet, CobyTablet, MIDTablet,
	         * MSITablet, SMiTTablet, RockChipTablet, FlyTablet, bqTablet, HuaweiTablet,
	         * NecTablet, PantechTablet, BronchoTablet, VersusTablet, ZyncTablet,
	         * PositivoTablet, NabiTablet, KoboTablet, DanewTablet, TexetTablet,
	         * PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
	         * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
	         * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
	         * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
	         * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
	         * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
	         * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
	         * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
	         * OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet, OndaTablet,
	         * JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet, LavaTablet,
	         * AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MiTablet, NibiruTablet,
	         * NexoTablet, LeaderTablet, UbislateTablet, PocketBookTablet, KocasoTablet,
	         * HisenseTablet, Hudl, TelstraTablet, GenericTablet</tt><br>
	         * <br>
	         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
	         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
	         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
	         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
	         * <br>
	         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
	         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
	         * will return <code>UnknownMobile</code>.<br>
	         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
	         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
	         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
	         * <br>
	         * In most cases you will use the return value just as a boolean.
	         *
	         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
	         * @function MobileDetect#tablet
	         */
	        tablet: function () {
	            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
	            return this._cache.tablet;
	        },

	        /**
	         * Returns the (first) detected user-agent string or <tt>null</tt>.
	         * <br>
	         * The returned user-agent is one of following keys:<br>
	         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
	         * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
	         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
	         * <br>
	         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
	         * cases where a mobile device pretends to be more than one particular browser. You can get the
	         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
	         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
	         *
	         * @returns {String} the key for the detected user-agent or <tt>null</tt>
	         * @function MobileDetect#userAgent
	         */
	        userAgent: function () {
	            if (this._cache.userAgent === undefined) {
	                this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
	            }
	            return this._cache.userAgent;
	        },

	        /**
	         * Returns all detected user-agent strings.
	         * <br>
	         * The array is empty or contains one or more of following keys:<br>
	         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
	         * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
	         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
	         * <br>
	         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
	         * cases where a mobile device pretends to be more than one particular browser. You can get the
	         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
	         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
	         *
	         * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
	         * @function MobileDetect#userAgents
	         */
	        userAgents: function () {
	            if (this._cache.userAgents === undefined) {
	                this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
	            }
	            return this._cache.userAgents;
	        },

	        /**
	         * Returns the detected operating system string or <tt>null</tt>.
	         * <br>
	         * The operating system is one of following keys:<br>
	         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
	         * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
	         *
	         * @returns {String} the key for the detected operating system.
	         * @function MobileDetect#os
	         */
	        os: function () {
	            if (this._cache.os === undefined) {
	                this._cache.os = impl.detectOS(this.ua);
	            }
	            return this._cache.os;
	        },

	        /**
	         * Get the version (as Number) of the given property in the User-Agent.
	         * <br>
	         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
	         *
	         * @param {String} key a key defining a thing which has a version.<br>
	         *        You can use one of following keys:<br>
	         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
	         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
	         * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
	         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
	         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
	         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
	         *
	         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
	         *          Be careful when comparing this value with '==' operator!
	         * @function MobileDetect#version
	         */
	        version: function (key) {
	            return impl.getVersion(key, this.ua);
	        },

	        /**
	         * Get the version (as String) of the given property in the User-Agent.
	         * <br>
	         *
	         * @param {String} key a key defining a thing which has a version.<br>
	         *        You can use one of following keys:<br>
	         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
	         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
	         * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
	         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
	         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
	         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
	         *
	         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
	         *
	         * @function MobileDetect#versionStr
	         */
	        versionStr: function (key) {
	            return impl.getVersionStr(key, this.ua);
	        },

	        /**
	         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
	         *
	         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
	         *        tablet family.<br>
	         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
	         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
	         *        Additionally you have following keys:<br>
	         * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
	         *
	         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
	         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
	         * @function MobileDetect#is
	         */
	        is: function (key) {
	            return containsIC(this.userAgents(), key) ||
	                   equalIC(key, this.os()) ||
	                   equalIC(key, this.phone()) ||
	                   equalIC(key, this.tablet()) ||
	                   containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
	        },

	        /**
	         * Do a quick test against navigator::userAgent.
	         *
	         * @param {String|RegExp} pattern the pattern, either as String or RegExp
	         *                        (a string will be converted to a case-insensitive RegExp).
	         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
	         * @function MobileDetect#match
	         */
	        match: function (pattern) {
	            if (!(pattern instanceof RegExp)) {
	                pattern = new RegExp(pattern, 'i');
	            }
	            return pattern.test(this.ua);
	        },

	        /**
	         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
	         * <br>
	         * Obviously this method makes sense in browser environments only (not for Node.js)!
	         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
	         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
	         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
	         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
	         *          Will always return <code>undefined</code> server-side.
	         */
	        isPhoneSized: function (maxPhoneWidth) {
	            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
	        },

	        /**
	         * Returns the mobile grade ('A', 'B', 'C').
	         *
	         * @returns {String} one of the mobile grades ('A', 'B', 'C').
	         * @function MobileDetect#mobileGrade
	         */
	        mobileGrade: function () {
	            if (this._cache.grade === undefined) {
	                this._cache.grade = impl.mobileGrade(this);
	            }
	            return this._cache.grade;
	        }
	    };

	    // environment-dependent
	    if (typeof window !== 'undefined' && window.screen) {
	        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
	            return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
	        };
	    } else {
	        MobileDetect.isPhoneSized = function () {};
	    }

	    // should not be replaced by a completely new object - just overwrite existing methods
	    MobileDetect._impl = impl;
	    
	    MobileDetect.version = '1.3.5 2016-11-14';

	    return MobileDetect;
	}); // end of call of define()
	})((function (undefined) {
	    if (typeof module !== 'undefined' && module.exports) {
	        return function (factory) { module.exports = factory(); };
	    } else if (true) {
	        return __webpack_require__(349);
	    } else if (typeof window !== 'undefined') {
	        return function (factory) { window.MobileDetect = factory(); };
	    } else {
	        // please file a bug if you get this error!
	        throw new Error('unknown environment');
	    }
	})());

/***/ },
/* 349 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 350 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 351 */,
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dialog = __webpack_require__(353);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _dialog2.default;
	module.exports = exports['default'];

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _index = __webpack_require__(314);

	var _index2 = _interopRequireDefault(_index);

	var _mobile_detect = __webpack_require__(347);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Modals provide feedback to user
	 *
	 */
	var Dialog = function (_Component) {
	    _inherits(Dialog, _Component);

	    function Dialog() {
	        _classCallCheck(this, Dialog);

	        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
	    }

	    _createClass(Dialog, [{
	        key: 'renderButtons',
	        value: function renderButtons() {
	            return this.props.buttons.map(function (action, idx) {
	                var type = action.type,
	                    label = action.label,
	                    others = _objectWithoutProperties(action, ['type', 'label']);

	                var className = (0, _classnames2.default)({
	                    'weui-dialog__btn': true,
	                    'weui-dialog__btn_default': type === 'default',
	                    'weui-dialog__btn_primary': type === 'primary'
	                });

	                return _react2.default.createElement('a', _extends({ key: idx, href: 'javascript:;' }, others, { className: className }), label);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                title = _props.title,
	                show = _props.show,
	                className = _props.className,
	                children = _props.children,
	                buttons = _props.buttons,
	                type = _props.type,
	                autoDectect = _props.autoDectect,
	                others = _objectWithoutProperties(_props, ['title', 'show', 'className', 'children', 'buttons', 'type', 'autoDectect']);

	            var styleType = type ? type : 'ios';
	            var cls = (0, _classnames2.default)('weui-dialog', _defineProperty({
	                'weui-skin_android': styleType == 'android' || !type && autoDectect && _mobile_detect.isAndroid
	            }, className, className));

	            return _react2.default.createElement('div', { style: { display: show ? 'block' : 'none' } }, _react2.default.createElement(_index2.default, null), _react2.default.createElement('div', _extends({ className: cls }, others), title ? _react2.default.createElement('div', { className: 'weui-dialog__hd' }, _react2.default.createElement('strong', { className: 'weui-dialog__title' }, title)) : false, _react2.default.createElement('div', { className: 'weui-dialog__bd' }, children), _react2.default.createElement('div', { className: 'weui-dialog__ft' }, this.renderButtons())));
	        }
	    }]);

	    return Dialog;
	}(_react.Component);

	Dialog.propTypes = {
	    /**
	     * Object Arrays of buttons, `label` property is require
	     *
	     */
	    buttons: _react.PropTypes.array,
	    /**
	     * to display the dialog
	     *
	     */
	    show: _react.PropTypes.bool,
	    /**
	     * Title of dialog
	     *
	     */
	    title: _react.PropTypes.string,
	    /**
	     * Auto chose style base on device type
	     *
	     */
	    autoDectect: _react.PropTypes.bool,
	    /**
	     * Specify display style: ios/android, default is ios when autoDetect not on
	     *
	     */
	    type: _react.PropTypes.string
	};
	Dialog.defaultProps = {
	    buttons: [],
	    show: false,
	    title: '',
	    type: '',
	    autoDectect: true
	};
	exports.default = Dialog;
	module.exports = exports['default'];

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                  value: true
	});

	var _msg = __webpack_require__(355);

	var _msg2 = _interopRequireDefault(_msg);

	function _interopRequireDefault(obj) {
	                                  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _msg2.default; /**
	                                  * Created by jf on 15/11/4.
	                                  */

	module.exports = exports['default'];

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _index = __webpack_require__(299);

	var _footer = __webpack_require__(356);

	var _index2 = __webpack_require__(330);

	var _index3 = _interopRequireDefault(_index2);

	var _deprecationWarning = __webpack_require__(306);

	var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * A full notification page to indicate results
	 *
	 */
	var Msg = function (_Component) {
	    _inherits(Msg, _Component);

	    function Msg() {
	        _classCallCheck(this, Msg);

	        return _possibleConstructorReturn(this, (Msg.__proto__ || Object.getPrototypeOf(Msg)).apply(this, arguments));
	    }

	    _createClass(Msg, [{
	        key: '_renderButtons',
	        value: function _renderButtons() {

	            return this.props.buttons.map(function (button, idx) {
	                var type = button.type,
	                    label = button.label,
	                    others = _objectWithoutProperties(button, ['type', 'label']);

	                return _react2.default.createElement(_index.Button, _extends({ key: idx }, others, { type: type }), label);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                type = _props.type,
	                title = _props.title,
	                description = _props.description,
	                extraHref = _props.extraHref,
	                extraText = _props.extraText,
	                footer = _props.footer,
	                buttons = _props.buttons,
	                others = _objectWithoutProperties(_props, ['className', 'type', 'title', 'description', 'extraHref', 'extraText', 'footer', 'buttons']);

	            var cls = (0, _classnames2.default)('weui-msg', _defineProperty({}, className, className));

	            var elFooter = footer ? footer : function () {
	                return false;
	            };

	            if (!elFooter && (extraHref || extraText)) {
	                (0, _deprecationWarning2.default)('Msg extraHref/extraText', 'Msg footer');

	                elFooter = function elFooter() {
	                    return _react2.default.createElement(_footer.Footer, null, _react2.default.createElement(_footer.FooterLinks, null, _react2.default.createElement(_footer.FooterLink, { href: extraHref }, extraText)));
	                };
	            }

	            return _react2.default.createElement('div', _extends({ className: cls }, others), _react2.default.createElement('div', { className: 'weui-msg__icon-area' }, _react2.default.createElement(_index3.default, { value: type, size: 'large' })), _react2.default.createElement('div', { className: 'weui-msg__text-area' }, _react2.default.createElement('h2', { className: 'weui-msg__title' }, title), _react2.default.createElement('p', { className: 'weui-msg__desc' }, description)), _react2.default.createElement('div', { className: 'weui-msg__opr-area' }, _react2.default.createElement(_index.ButtonArea, null, this._renderButtons())), _react2.default.createElement('div', { className: 'weui-msg__extra-area' }, elFooter()));
	        }
	    }]);

	    return Msg;
	}(_react.Component);

	Msg.propTypes = {
	    /**
	     * Icon type
	     *
	     */
	    type: _react.PropTypes.string,
	    /**
	     * Object array of Buttons, require at least `label` property
	     *
	     */
	    buttons: _react.PropTypes.array,
	    /**
	     * Page Title
	     *
	     */
	    title: _react.PropTypes.string,
	    /**
	     * Page Description
	     *
	     */
	    description: _react.PropTypes.string,
	    /**
	     * deprecated property from 0.4.x
	     *
	     */
	    extraHref: _react.PropTypes.string,
	    /**
	     * deprecated property from 0.4.x
	     *
	     */
	    extraText: _react.PropTypes.string,
	    /**
	     * Footer Element of Page
	     *
	     */
	    footer: _react.PropTypes.any
	};
	Msg.defaultProps = {
	    type: 'success',
	    buttons: []
	};
	exports.default = Msg;
	module.exports = exports['default'];

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _footer = __webpack_require__(357);

	var _footer2 = _interopRequireDefault(_footer);

	var _footer_text = __webpack_require__(358);

	var _footer_text2 = _interopRequireDefault(_footer_text);

	var _footer_links = __webpack_require__(359);

	var _footer_links2 = _interopRequireDefault(_footer_links);

	var _footer_link = __webpack_require__(360);

	var _footer_link2 = _interopRequireDefault(_footer_link);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    Footer: _footer2.default,
	    FooterText: _footer_text2.default,
	    FooterLinks: _footer_links2.default,
	    FooterLink: _footer_link2.default
	};
	module.exports = exports['default'];

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * consists of `footer_links`, `footer_link` and `footer_text`
	 *
	 */
	var Footer = function Footer(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-footer': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	};

	exports.default = Footer;
	module.exports = exports['default'];

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * paragraph wrapper for footer
	 *
	 */
	var FooterText = function FooterText(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-footer__text': true
	    }, className, className));

	    return _react2.default.createElement('p', _extends({ className: cls }, others), children);
	};

	exports.default = FooterText;
	module.exports = exports['default'];

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * consists of `footer_link`
	 *
	 */
	var FooterLinks = function FooterLinks(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-footer__links': true
	    }, className, className));

	    return _react2.default.createElement('p', _extends({ className: cls }, others), children);
	};

	exports.default = FooterLinks;
	module.exports = exports['default'];

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * foot link wrapper for link
	 *
	 */
	var FooterLink = function FooterLink(props) {
	    var className = props.className,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['className', 'children']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-footer__link': true
	    }, className, className));

	    return _react2.default.createElement('a', _extends({ className: cls }, others), children);
	};

	exports.default = FooterLink;
	module.exports = exports['default'];

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                      value: true
	});

	var _article = __webpack_require__(362);

	var _article2 = _interopRequireDefault(_article);

	function _interopRequireDefault(obj) {
	                                      return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _article2.default; /**
	                                      * Created by jf on 15/12/11.
	                                      */

	module.exports = exports['default'];

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Use to format WeUI style contents
	 *
	 */
	var Article = function (_React$Component) {
	    _inherits(Article, _React$Component);

	    function Article() {
	        _classCallCheck(this, Article);

	        return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
	    }

	    _createClass(Article, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                children = _props.children,
	                others = _objectWithoutProperties(_props, ['className', 'children']);

	            var cls = (0, _classnames2.default)(_defineProperty({
	                'weui-article': true
	            }, className, className));
	            return _react2.default.createElement('article', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return Article;
	}(_react2.default.Component);

	Article.propTypes = {};
	Article.defaultProps = {};
	exports.default = Article;
	;
	module.exports = exports['default'];

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _grids = __webpack_require__(364);

	var _grids2 = _interopRequireDefault(_grids);

	var _grid = __webpack_require__(365);

	var _grid2 = _interopRequireDefault(_grid);

	var _grid_icon = __webpack_require__(366);

	var _grid_icon2 = _interopRequireDefault(_grid_icon);

	var _grid_label = __webpack_require__(367);

	var _grid_label2 = _interopRequireDefault(_grid_label);

	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by n7best
	 */

	exports.default = {
	   Grids: _grids2.default,
	   Grid: _grid2.default,
	   GridIcon: _grid_icon2.default,
	   GridLabel: _grid_label2.default
	};
	module.exports = exports['default'];

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _grid = __webpack_require__(365);

	var _grid2 = _interopRequireDefault(_grid);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
	 *
	 */
	var Grids = function (_Component) {
	    _inherits(Grids, _Component);

	    function Grids() {
	        _classCallCheck(this, Grids);

	        return _possibleConstructorReturn(this, (Grids.__proto__ || Object.getPrototypeOf(Grids)).apply(this, arguments));
	    }

	    _createClass(Grids, [{
	        key: 'renderData',
	        value: function renderData(data) {
	            return data.map(function (item, i) {
	                return _react2.default.createElement(_grid2.default, _extends({
	                    key: i,
	                    icon: item.icon,
	                    label: item.label
	                }, item));
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                data = _props.data,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'data', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-grids': true
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others), data.length > 0 ? this.renderData(data) : children);
	        }
	    }]);

	    return Grids;
	}(_react.Component);

	Grids.propTypes = {
	    /**
	     * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
	     *
	     */
	    data: _react2.default.PropTypes.array
	};
	Grids.defaultProps = {
	    data: []
	};
	exports.default = Grids;
	;
	module.exports = exports['default'];

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _grid_icon = __webpack_require__(366);

	var _grid_icon2 = _interopRequireDefault(_grid_icon);

	var _grid_label = __webpack_require__(367);

	var _grid_label2 = _interopRequireDefault(_grid_label);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
	 *
	 */
	var Grid = function (_React$Component) {
	    _inherits(Grid, _React$Component);

	    function Grid() {
	        _classCallCheck(this, Grid);

	        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
	    }

	    _createClass(Grid, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                icon = _props.icon,
	                label = _props.label,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'icon', 'label', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-grid': true
	            }, className);

	            return _react2.default.createElement('a', _extends({ className: cls }, others), icon ? _react2.default.createElement(_grid_icon2.default, null, icon) : false, children, label ? _react2.default.createElement(_grid_label2.default, null, label) : false);
	        }
	    }]);

	    return Grid;
	}(_react2.default.Component);

	Grid.propTypes = {
	    /**
	     * Label string for grid
	     *
	     */
	    label: _react2.default.PropTypes.string,
	    /**
	     * Icon placeholder
	     *
	     */
	    icon: _react2.default.PropTypes.any
	};
	Grid.defaultProps = {
	    label: '',
	    icon: false
	};
	exports.default = Grid;
	;
	module.exports = exports['default'];

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * WeUI Grid Icon Wrapper
	 *
	 */
	var GridIcon = function (_React$Component) {
	    _inherits(GridIcon, _React$Component);

	    function GridIcon() {
	        _classCallCheck(this, GridIcon);

	        return _possibleConstructorReturn(this, (GridIcon.__proto__ || Object.getPrototypeOf(GridIcon)).apply(this, arguments));
	    }

	    _createClass(GridIcon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-grid__icon': true
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return GridIcon;
	}(_react2.default.Component);

	exports.default = GridIcon;
	;
	module.exports = exports['default'];

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * WeUI Grid Label Wrapper
	 *
	 */
	var GridLabel = function (_React$Component) {
	    _inherits(GridLabel, _React$Component);

	    function GridLabel() {
	        _classCallCheck(this, GridLabel);

	        return _possibleConstructorReturn(this, (GridLabel.__proto__ || Object.getPrototypeOf(GridLabel)).apply(this, arguments));
	    }

	    _createClass(GridLabel, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-grid__label': true
	            }, className);

	            return _react2.default.createElement('p', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return GridLabel;
	}(_react2.default.Component);

	exports.default = GridLabel;
	;
	module.exports = exports['default'];

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _panel = __webpack_require__(369);

	var _panel2 = _interopRequireDefault(_panel);

	var _panel_header = __webpack_require__(370);

	var _panel_header2 = _interopRequireDefault(_panel_header);

	var _panel_body = __webpack_require__(371);

	var _panel_body2 = _interopRequireDefault(_panel_body);

	var _panel_footer = __webpack_require__(372);

	var _panel_footer2 = _interopRequireDefault(_panel_footer);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Created by n7best.
	 */

	exports.default = {
	    Panel: _panel2.default,
	    PanelHeader: _panel_header2.default,
	    PanelBody: _panel_body2.default,
	    PanelFooter: _panel_footer2.default
	};
	module.exports = exports['default'];

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _deprecationWarning = __webpack_require__(306);

	var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Panel Object, consists of `PanelHeader`, `PanelBody` and `PanelFooter`
	 *
	 */
	var Panel = function (_React$Component) {
	    _inherits(Panel, _React$Component);

	    function Panel() {
	        _classCallCheck(this, Panel);

	        return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
	    }

	    _createClass(Panel, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                access = _props.access,
	                others = _objectWithoutProperties(_props, ['children', 'className', 'access']);

	            if (access) {
	                (0, _deprecationWarning2.default)('panel access', 'cell access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#panel');
	            }

	            var cls = (0, _classnames2.default)(_defineProperty({
	                'weui-panel': true
	            }, className, className));

	            return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return Panel;
	}(_react2.default.Component);

	Panel.propTypes = {
	    /**
	     * deprecated property from 0.4.x
	     *
	     */
	    access: _react2.default.PropTypes.bool
	};
	Panel.defaultProps = {
	    access: false
	};
	exports.default = Panel;
	;
	module.exports = exports['default'];

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Header of Panel
	 *
	 */
	var PanelHeader = function (_React$Component) {
	    _inherits(PanelHeader, _React$Component);

	    function PanelHeader() {
	        _classCallCheck(this, PanelHeader);

	        return _possibleConstructorReturn(this, (PanelHeader.__proto__ || Object.getPrototypeOf(PanelHeader)).apply(this, arguments));
	    }

	    _createClass(PanelHeader, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                others = _objectWithoutProperties(_props, ['children']);

	            var className = (0, _classnames2.default)(_defineProperty({
	                'weui-panel__hd': true
	            }, className, className));

	            return _react2.default.createElement('div', _extends({ className: className }, others), children);
	        }
	    }]);

	    return PanelHeader;
	}(_react2.default.Component);

	exports.default = PanelHeader;
	;
	module.exports = exports['default'];

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Content of Panel
	 *
	 */
	var PanelBody = function (_React$Component) {
	    _inherits(PanelBody, _React$Component);

	    function PanelBody() {
	        _classCallCheck(this, PanelBody);

	        return _possibleConstructorReturn(this, (PanelBody.__proto__ || Object.getPrototypeOf(PanelBody)).apply(this, arguments));
	    }

	    _createClass(PanelBody, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                others = _objectWithoutProperties(_props, ['children']);

	            var className = (0, _classnames2.default)(_defineProperty({
	                'weui-panel__bd': true
	            }, className, className));

	            return _react2.default.createElement('div', _extends({ className: className }, others), children);
	        }
	    }]);

	    return PanelBody;
	}(_react2.default.Component);

	exports.default = PanelBody;
	;
	module.exports = exports['default'];

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Footer of Panel
	 *
	 */
	var PanelFooter = function (_React$Component) {
	    _inherits(PanelFooter, _React$Component);

	    function PanelFooter() {
	        _classCallCheck(this, PanelFooter);

	        return _possibleConstructorReturn(this, (PanelFooter.__proto__ || Object.getPrototypeOf(PanelFooter)).apply(this, arguments));
	    }

	    _createClass(PanelFooter, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                others = _objectWithoutProperties(_props, ['children']);

	            var Component = this.props.href ? 'a' : 'div';
	            var className = (0, _classnames2.default)(_defineProperty({
	                'weui-panel__ft': true
	            }, className, className));

	            return _react2.default.createElement(Component, _extends({ className: className }, others), children);
	        }
	    }]);

	    return PanelFooter;
	}(_react2.default.Component);

	exports.default = PanelFooter;
	;
	module.exports = exports['default'];

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mediabox = __webpack_require__(374);

	var _mediabox2 = _interopRequireDefault(_mediabox);

	var _mediabox_header = __webpack_require__(375);

	var _mediabox_header2 = _interopRequireDefault(_mediabox_header);

	var _mediabox_body = __webpack_require__(376);

	var _mediabox_body2 = _interopRequireDefault(_mediabox_body);

	var _mediabox_title = __webpack_require__(377);

	var _mediabox_title2 = _interopRequireDefault(_mediabox_title);

	var _mediabox_desc = __webpack_require__(378);

	var _mediabox_desc2 = _interopRequireDefault(_mediabox_desc);

	var _mediabox_info = __webpack_require__(379);

	var _mediabox_info2 = _interopRequireDefault(_mediabox_info);

	var _mediabox_info_meta = __webpack_require__(380);

	var _mediabox_info_meta2 = _interopRequireDefault(_mediabox_info_meta);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    MediaBox: _mediabox2.default,
	    MediaBoxHeader: _mediabox_header2.default,
	    MediaBoxBody: _mediabox_body2.default,
	    MediaBoxTitle: _mediabox_title2.default,
	    MediaBoxDescription: _mediabox_desc2.default,
	    MediaBoxInfo: _mediabox_info2.default,
	    MediaBoxInfoMeta: _mediabox_info_meta2.default
	}; /**
	    * Created by n7best
	    */

	module.exports = exports['default'];

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
	 *
	 */
	var MediaBox = function (_React$Component) {
	    _inherits(MediaBox, _React$Component);

	    function MediaBox() {
	        _classCallCheck(this, MediaBox);

	        return _possibleConstructorReturn(this, (MediaBox.__proto__ || Object.getPrototypeOf(MediaBox)).apply(this, arguments));
	    }

	    _createClass(MediaBox, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                type = _props.type,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'type', 'className']);

	            var Component = this.props.href ? 'a' : 'div';
	            var cls = (0, _classnames2.default)({
	                'weui-media-box': true,
	                'weui-media-box_appmsg': type === 'appmsg',
	                'weui-media-box_text': type === 'text',
	                'weui-media-box_small-appmsg': type === 'small_appmsg'
	            }, className);

	            return _react2.default.createElement(Component, _extends({ className: cls }, others), children);
	        }
	    }]);

	    return MediaBox;
	}(_react2.default.Component);

	MediaBox.propTypes = {
	    /**
	     * The layout of media box, Options: appmsg/text/small_appmsg
	     *
	     */
	    type: _react2.default.PropTypes.string
	};
	MediaBox.defaultProps = {
	    type: 'text'
	};
	exports.default = MediaBox;
	;
	module.exports = exports['default'];

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Header of MediaBox, if detects Img tag inside content will automatically adds corresponding class
	 *
	 */
	var MediaBoxHeader = function (_React$Component) {
	    _inherits(MediaBoxHeader, _React$Component);

	    function MediaBoxHeader() {
	        _classCallCheck(this, MediaBoxHeader);

	        return _possibleConstructorReturn(this, (MediaBoxHeader.__proto__ || Object.getPrototypeOf(MediaBoxHeader)).apply(this, arguments));
	    }

	    _createClass(MediaBoxHeader, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var clz = (0, _classnames2.default)({
	                'weui-media-box__hd': true
	            }, className);

	            var childrenWithProps = _react2.default.Children.map(children, function (child) {
	                if (child.type == 'img' && !child.props.className) {
	                    return _react2.default.cloneElement(child, { className: 'weui-media-box__thumb' });
	                } else {
	                    return child;
	                }
	            });

	            return _react2.default.createElement('div', _extends({ className: clz }, others), childrenWithProps);
	        }
	    }]);

	    return MediaBoxHeader;
	}(_react2.default.Component);

	exports.default = MediaBoxHeader;
	;
	module.exports = exports['default'];

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Content of Mediabox
	 *
	 */
	var PanelBody = function (_React$Component) {
	    _inherits(PanelBody, _React$Component);

	    function PanelBody() {
	        _classCallCheck(this, PanelBody);

	        return _possibleConstructorReturn(this, (PanelBody.__proto__ || Object.getPrototypeOf(PanelBody)).apply(this, arguments));
	    }

	    _createClass(PanelBody, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-media-box__bd': true
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return PanelBody;
	}(_react2.default.Component);

	exports.default = PanelBody;
	;
	module.exports = exports['default'];

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Title for MediaBox
	 *
	 */
	var MediaBoxTitle = function (_React$Component) {
	    _inherits(MediaBoxTitle, _React$Component);

	    function MediaBoxTitle() {
	        _classCallCheck(this, MediaBoxTitle);

	        return _possibleConstructorReturn(this, (MediaBoxTitle.__proto__ || Object.getPrototypeOf(MediaBoxTitle)).apply(this, arguments));
	    }

	    _createClass(MediaBoxTitle, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-media-box__title': true
	            }, className);

	            return _react2.default.createElement('h4', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return MediaBoxTitle;
	}(_react2.default.Component);

	exports.default = MediaBoxTitle;
	;
	module.exports = exports['default'];

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Description of MediaBox
	 *
	 */
	var MediaBoxDescription = function (_React$Component) {
	    _inherits(MediaBoxDescription, _React$Component);

	    function MediaBoxDescription() {
	        _classCallCheck(this, MediaBoxDescription);

	        return _possibleConstructorReturn(this, (MediaBoxDescription.__proto__ || Object.getPrototypeOf(MediaBoxDescription)).apply(this, arguments));
	    }

	    _createClass(MediaBoxDescription, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-media-box__desc': true
	            }, className);

	            return _react2.default.createElement('p', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return MediaBoxDescription;
	}(_react2.default.Component);

	exports.default = MediaBoxDescription;
	;
	module.exports = exports['default'];

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mediabox_info_meta = __webpack_require__(380);

	var _mediabox_info_meta2 = _interopRequireDefault(_mediabox_info_meta);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Info Items for MediaBox
	 *
	 */
	var MediaBoxInfo = function (_React$Component) {
	    _inherits(MediaBoxInfo, _React$Component);

	    function MediaBoxInfo() {
	        _classCallCheck(this, MediaBoxInfo);

	        return _possibleConstructorReturn(this, (MediaBoxInfo.__proto__ || Object.getPrototypeOf(MediaBoxInfo)).apply(this, arguments));
	    }

	    _createClass(MediaBoxInfo, [{
	        key: 'renderData',
	        value: function renderData(metas) {
	            return metas.map(function (meta, i) {
	                return _react2.default.createElement(_mediabox_info_meta2.default, { key: i, extra: meta.extra }, meta.label);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                data = _props.data,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'data', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-media-box__info': true
	            }, className);

	            return _react2.default.createElement('ul', _extends({ className: cls }, others), data.length > 0 ? this.renderData(data) : children);
	        }
	    }]);

	    return MediaBoxInfo;
	}(_react2.default.Component);

	MediaBoxInfo.propTypes = {
	    /**
	     * automatically include Metas, object array of metas, property required: `extra`, `label`
	     *
	     */
	    data: _react2.default.PropTypes.array
	};
	MediaBoxInfo.defaultProps = {
	    data: []
	};
	exports.default = MediaBoxInfo;
	;
	module.exports = exports['default'];

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Meta Item for `MeidaBoxInfo`
	 *
	 */
	var MediaBoxInfoMeta = function (_React$Component) {
	    _inherits(MediaBoxInfoMeta, _React$Component);

	    function MediaBoxInfoMeta() {
	        _classCallCheck(this, MediaBoxInfoMeta);

	        return _possibleConstructorReturn(this, (MediaBoxInfoMeta.__proto__ || Object.getPrototypeOf(MediaBoxInfoMeta)).apply(this, arguments));
	    }

	    _createClass(MediaBoxInfoMeta, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                extra = _props.extra,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'extra', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-media-box__info__meta': true,
	                'weui-media-box__info__meta_extra': extra
	            }, className);

	            return _react2.default.createElement('li', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return MediaBoxInfoMeta;
	}(_react2.default.Component);

	MediaBoxInfoMeta.propTypes = {
	    /**
	     * add left margin to indicate extra
	     *
	     */
	    extra: _react2.default.PropTypes.bool
	};
	MediaBoxInfoMeta.defaultProps = {
	    extra: false
	};
	exports.default = MediaBoxInfoMeta;
	;
	module.exports = exports['default'];

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _tab = __webpack_require__(382);

	var _tab2 = _interopRequireDefault(_tab);

	var _tab_body = __webpack_require__(383);

	var _tab_body2 = _interopRequireDefault(_tab_body);

	var _navbar = __webpack_require__(385);

	var _navbar2 = _interopRequireDefault(_navbar);

	var _navbar_item = __webpack_require__(386);

	var _navbar_item2 = _interopRequireDefault(_navbar_item);

	var _tabbar = __webpack_require__(387);

	var _tabbar2 = _interopRequireDefault(_tabbar);

	var _tabbar_item = __webpack_require__(388);

	var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

	var _tabbar_icon = __webpack_require__(389);

	var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

	var _tabbar_label = __webpack_require__(390);

	var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

	var _tab_body_item = __webpack_require__(384);

	var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	   NavBar: _navbar2.default,
	   NavBarItem: _navbar_item2.default,
	   Tab: _tab2.default,
	   TabBody: _tab_body2.default,
	   TabBodyItem: _tab_body_item2.default,
	   TabBar: _tabbar2.default,
	   TabBarItem: _tabbar_item2.default,
	   TabBarIcon: _tabbar_icon2.default,
	   TabBarLabel: _tabbar_label2.default
	}; /**
	    * Created by n7best
	    */

	module.exports = exports['default'];

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _tab_body = __webpack_require__(383);

	var _tab_body2 = _interopRequireDefault(_tab_body);

	var _tab_body_item = __webpack_require__(384);

	var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

	var _navbar = __webpack_require__(385);

	var _navbar2 = _interopRequireDefault(_navbar);

	var _navbar_item = __webpack_require__(386);

	var _navbar_item2 = _interopRequireDefault(_navbar_item);

	var _tabbar = __webpack_require__(387);

	var _tabbar2 = _interopRequireDefault(_tabbar);

	var _tabbar_item = __webpack_require__(388);

	var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

	var _tabbar_icon = __webpack_require__(389);

	var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

	var _tabbar_label = __webpack_require__(390);

	var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  Weui Tab component, can be auto mount items or mannually display items
	 *
	 */
	var Tab = function (_React$Component) {
	    _inherits(Tab, _React$Component);

	    function Tab() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Tab);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            index: _this.props.defaultIndex
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Tab, [{
	        key: 'handleHeaderClick',
	        value: function handleHeaderClick(idx) {
	            this.setState({ index: idx });
	            if (this.props.onChange) this.props.onChange(idx);
	        }
	    }, {
	        key: 'parseNavBar',
	        value: function parseNavBar(children) {
	            var navHeaders = [];
	            var navContents = [];

	            _react2.default.Children.map(children, function (child) {
	                if (!child) return;

	                var _child$props = child.props,
	                    children = _child$props.children,
	                    type = _child$props.type,
	                    others = _objectWithoutProperties(_child$props, ['children', 'type']);

	                if (child.type === _navbar_item2.default) {
	                    navHeaders.push(child);
	                    if (children) navContents.push(_react2.default.createElement(_tab_body_item2.default, { children: children }));
	                } else if (child.type === _tab_body_item2.default) {
	                    navContents.push(child);
	                }
	            });

	            return { navHeaders: navHeaders, navContents: navContents };
	        }
	    }, {
	        key: 'renderNavBar',
	        value: function renderNavBar(headers, contents, cls) {
	            var _this2 = this;

	            var _headers = headers.map(function (item, idx) {
	                return _react2.default.cloneElement(item, {
	                    key: idx,
	                    active: _this2.state.index === idx,
	                    onClick: _this2.handleHeaderClick.bind(_this2, idx, item)
	                });
	            });

	            var _contents = contents.map(function (item, idx) {
	                return _react2.default.cloneElement(item, {
	                    key: idx,
	                    active: _this2.state.index === idx,
	                    tabIndex: idx
	                });
	            });

	            return _react2.default.createElement('div', { className: cls }, _react2.default.createElement(_navbar2.default, null, _headers), _react2.default.createElement(_tab_body2.default, null, _contents));
	        }
	    }, {
	        key: 'parseTabBar',
	        value: function parseTabBar(children) {
	            var tabHeaders = [];
	            var tabContents = [];

	            _react2.default.Children.map(children, function (child) {
	                if (!child) return;

	                var _child$props2 = child.props,
	                    children = _child$props2.children,
	                    type = _child$props2.type,
	                    others = _objectWithoutProperties(_child$props2, ['children', 'type']);

	                if (child.type === _tabbar_item2.default) {
	                    tabHeaders.push(child);
	                    if (children) tabContents.push(_react2.default.createElement(_tab_body_item2.default, { children: children }));
	                } else if (child.type === _tab_body_item2.default) {
	                    tabContents.push(child);
	                }
	            });

	            return { tabHeaders: tabHeaders, tabContents: tabContents };
	        }
	    }, {
	        key: 'renderTabBar',
	        value: function renderTabBar(headers, contents, cls) {
	            var _this3 = this;

	            var _headers = headers.map(function (item, idx) {
	                return _react2.default.cloneElement(item, {
	                    key: idx,
	                    active: _this3.state.index === idx,
	                    onClick: _this3.handleHeaderClick.bind(_this3, idx, item)
	                });
	            });

	            var _contents = contents.map(function (item, idx) {
	                return _react2.default.cloneElement(item, {
	                    key: idx,
	                    active: _this3.state.index === idx,
	                    tabIndex: idx
	                });
	            });

	            return _react2.default.createElement('div', { className: cls }, _react2.default.createElement(_tab_body2.default, null, _contents), _react2.default.createElement(_tabbar2.default, null, _headers));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                type = _props.type,
	                others = _objectWithoutProperties(_props, ['children', 'className', 'type']);

	            var divProps = Object.assign({}, others);
	            delete divProps.defaultIndex;

	            var cls = (0, _classnames2.default)({
	                'weui-tab': true
	            }, className);

	            switch (type) {
	                case 'tabbar':
	                    var _parseTabBar = this.parseTabBar(children),
	                        tabHeaders = _parseTabBar.tabHeaders,
	                        tabContents = _parseTabBar.tabContents;

	                    return this.renderTabBar(tabHeaders, tabContents, cls);
	                    break;
	                case 'navbar':
	                    var _parseNavBar = this.parseNavBar(children),
	                        navHeaders = _parseNavBar.navHeaders,
	                        navContents = _parseNavBar.navContents;

	                    return this.renderNavBar(navHeaders, navContents, cls);
	                    break;
	                default:
	                    return _react2.default.createElement('div', _extends({ className: cls }, divProps), children);
	                    break;
	            }
	        }
	    }]);

	    return Tab;
	}(_react2.default.Component);

	Tab.propTypes = {
	    /**
	     * layout of the tab, auto mount components when set to `navbar` or `tabbar`
	     *
	     */
	    type: _react2.default.PropTypes.string,
	    /**
	     * default select index
	     *
	     */
	    defaultIndex: _react2.default.PropTypes.number,
	    onChange: _react2.default.PropTypes.func
	};
	Tab.defaultProps = {
	    type: 'normal',
	    defaultIndex: 0
	};
	exports.default = Tab;
	module.exports = exports['default'];

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Content Wrapper for Tab
	 */
	var TabBody = function (_React$Component) {
	    _inherits(TabBody, _React$Component);

	    function TabBody() {
	        _classCallCheck(this, TabBody);

	        return _possibleConstructorReturn(this, (TabBody.__proto__ || Object.getPrototypeOf(TabBody)).apply(this, arguments));
	    }

	    _createClass(TabBody, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-tab__panel': true
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return TabBody;
	}(_react2.default.Component);

	exports.default = TabBody;
	module.exports = exports['default'];

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Content wrapper for each Tab Item
	 */
	var TabBodyItem = function (_React$Component) {
	    _inherits(TabBodyItem, _React$Component);

	    function TabBodyItem() {
	        _classCallCheck(this, TabBodyItem);

	        return _possibleConstructorReturn(this, (TabBodyItem.__proto__ || Object.getPrototypeOf(TabBodyItem)).apply(this, arguments));
	    }

	    _createClass(TabBodyItem, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                active = _props.active,
	                others = _objectWithoutProperties(_props, ['children', 'className', 'active']);

	            var cls = (0, _classnames2.default)({
	                'weui-tab__bd-item': true
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls, style: { display: active ? 'block' : 'none' } }, others), children);
	        }
	    }]);

	    return TabBodyItem;
	}(_react2.default.Component);

	TabBodyItem.propTypes = {
	    /**
	     * display this component
	     *
	     */
	    active: _react2.default.PropTypes.bool
	};
	TabBodyItem.defaultProps = {
	    active: false
	};
	exports.default = TabBodyItem;
	module.exports = exports['default'];

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  wrapper for navbar
	 *
	 */
	var NavBar = function (_React$Component) {
	    _inherits(NavBar, _React$Component);

	    function NavBar() {
	        _classCallCheck(this, NavBar);

	        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
	    }

	    _createClass(NavBar, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-navbar': true
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return NavBar;
	}(_react2.default.Component);

	exports.default = NavBar;
	module.exports = exports['default'];

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  Navbar item to display info
	 *
	 */
	var NavBarItem = function (_React$Component) {
	    _inherits(NavBarItem, _React$Component);

	    function NavBarItem() {
	        _classCallCheck(this, NavBarItem);

	        return _possibleConstructorReturn(this, (NavBarItem.__proto__ || Object.getPrototypeOf(NavBarItem)).apply(this, arguments));
	    }

	    _createClass(NavBarItem, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                active = _props.active,
	                label = _props.label,
	                others = _objectWithoutProperties(_props, ['children', 'className', 'active', 'label']);

	            var cls = (0, _classnames2.default)({
	                'weui-navbar__item': true,
	                'weui-bar__item_on': active
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others), label ? label : children);
	        }
	    }]);

	    return NavBarItem;
	}(_react2.default.Component);

	NavBarItem.propTypes = {
	    /**
	     * indicate tab is active
	     *
	     */
	    active: _react2.default.PropTypes.bool,
	    /**
	     * label of the item
	     *
	     */
	    label: _react2.default.PropTypes.string
	};
	NavBarItem.defaultProps = {
	    active: false
	};
	exports.default = NavBarItem;
	module.exports = exports['default'];

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  Bottom bar for tabs
	 *
	 */
	var TabBar = function (_React$Component) {
	    _inherits(TabBar, _React$Component);

	    function TabBar() {
	        _classCallCheck(this, TabBar);

	        return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
	    }

	    _createClass(TabBar, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-tabbar': true
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return TabBar;
	}(_react2.default.Component);

	exports.default = TabBar;
	module.exports = exports['default'];

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _tabbar_icon = __webpack_require__(389);

	var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

	var _tabbar_label = __webpack_require__(390);

	var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  Tabbar item
	 *
	 */
	var TabBarItem = function (_React$Component) {
	    _inherits(TabBarItem, _React$Component);

	    function TabBarItem() {
	        _classCallCheck(this, TabBarItem);

	        return _possibleConstructorReturn(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).apply(this, arguments));
	    }

	    _createClass(TabBarItem, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                active = _props.active,
	                icon = _props.icon,
	                label = _props.label,
	                others = _objectWithoutProperties(_props, ['children', 'className', 'active', 'icon', 'label']);

	            var cls = (0, _classnames2.default)({
	                'weui-tabbar__item': true,
	                'weui-bar__item_on': active
	            }, className);

	            if (icon || label) {
	                return _react2.default.createElement('div', _extends({ className: cls }, others), icon ? _react2.default.createElement(_tabbar_icon2.default, null, icon) : false, label ? _react2.default.createElement(_tabbar_label2.default, null, label) : false);
	            } else {
	                return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	            }
	        }
	    }]);

	    return TabBarItem;
	}(_react2.default.Component);

	TabBarItem.propTypes = {
	    /**
	     * indicate currently active
	     *
	     */
	    active: _react2.default.PropTypes.bool,
	    /**
	     * icon of item
	     *
	     */
	    icon: _react2.default.PropTypes.any,
	    /**
	     * label of item
	     *
	     */
	    label: _react2.default.PropTypes.string
	};
	TabBarItem.defaultProps = {
	    active: false,
	    icon: false,
	    label: ''
	};
	exports.default = TabBarItem;
	module.exports = exports['default'];

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  Icon wrapper for icon use in TabBar
	 *
	 */
	var TabBarIcon = function (_React$Component) {
	    _inherits(TabBarIcon, _React$Component);

	    function TabBarIcon() {
	        _classCallCheck(this, TabBarIcon);

	        return _possibleConstructorReturn(this, (TabBarIcon.__proto__ || Object.getPrototypeOf(TabBarIcon)).apply(this, arguments));
	    }

	    _createClass(TabBarIcon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-tabbar__icon': true
	            }, className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return TabBarIcon;
	}(_react2.default.Component);

	exports.default = TabBarIcon;
	module.exports = exports['default'];

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  label wrapper for text inside TabBarItem
	 *
	 */
	var TabBarLabel = function (_React$Component) {
	    _inherits(TabBarLabel, _React$Component);

	    function TabBarLabel() {
	        _classCallCheck(this, TabBarLabel);

	        return _possibleConstructorReturn(this, (TabBarLabel.__proto__ || Object.getPrototypeOf(TabBarLabel)).apply(this, arguments));
	    }

	    _createClass(TabBarLabel, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['children', 'className']);

	            var cls = (0, _classnames2.default)({
	                'weui-tabbar__label': true
	            }, className);

	            return _react2.default.createElement('p', _extends({ className: cls }, others), children);
	        }
	    }]);

	    return TabBarLabel;
	}(_react2.default.Component);

	exports.default = TabBarLabel;
	module.exports = exports['default'];

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                        value: true
	});

	var _searchbar = __webpack_require__(392);

	var _searchbar2 = _interopRequireDefault(_searchbar);

	function _interopRequireDefault(obj) {
	                                        return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _searchbar2.default; /**
	                                        * Created by n7best.
	                                        */

	module.exports = exports['default'];

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _icon = __webpack_require__(330);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  weui search component
	 *
	 */
	var SearchBar = function (_React$Component) {
	    _inherits(SearchBar, _React$Component);

	    function SearchBar() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, SearchBar);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            focus: false,
	            clearing: false,
	            text: ''
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(SearchBar, [{
	        key: 'changeHandle',
	        value: function changeHandle(e) {
	            var text = e.target.value;
	            if (this.props.onChange) this.props.onChange(text, e);
	            this.setState({ text: text });
	        }
	    }, {
	        key: 'cancelHandle',
	        value: function cancelHandle(e) {
	            this.setState({
	                focus: false,
	                text: ''
	            });
	            if (this.props.onCancel) this.props.onCancel(e);
	            if (this.props.onChange) this.props.onChange('', e);
	        }
	    }, {
	        key: 'clearHandle',
	        value: function clearHandle(e) {
	            e.preventDefault();
	            e.stopPropagation();

	            this.setState({ text: '', clearing: true });
	            if (this.props.onClear) this.props.onClear(e);
	            _reactDom2.default.findDOMNode(this.refs.searchInput).focus();
	            if (this.props.onChange) this.props.onChange('', e);
	        }
	    }, {
	        key: 'blurHandle',
	        value: function blurHandle(e) {
	            if (this.state.text == '') {
	                this.setState({ focus: false });
	            }
	        }
	    }, {
	        key: 'submitHandle',
	        value: function submitHandle(e) {
	            if (this.props.onSubmit) {
	                e.preventDefault();
	                e.stopPropagation();
	                this.props.onSubmit(this.state.text, e);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                children = _props.children,
	                autocomplete = _props.autocomplete,
	                placeholder = _props.placeholder,
	                className = _props.className,
	                searchName = _props.searchName;

	            var clz = (0, _classnames2.default)({
	                'weui-search-bar': true,
	                'weui-search-bar_focusing': this.state.focus
	            }, className);

	            return _react2.default.createElement('div', { className: clz }, _react2.default.createElement('form', { className: 'weui-search-bar__form', onSubmit: this.submitHandle.bind(this) }, _react2.default.createElement('div', { className: 'weui-search-bar__box' }, _react2.default.createElement(_icon2.default, { value: 'search' }), _react2.default.createElement('input', {
	                ref: 'searchInput',
	                type: 'search',
	                name: searchName,
	                className: 'weui-search-bar__input',
	                placeholder: placeholder,
	                onFocus: function onFocus(e) {
	                    return _this2.setState({ focus: true });
	                },
	                onBlur: this.blurHandle.bind(this),
	                onChange: this.changeHandle.bind(this),
	                value: this.state.text,
	                autoComplete: autocomplete
	            }), _react2.default.createElement('a', {
	                className: 'weui-icon-clear',
	                onClick: this.clearHandle.bind(this)
	            })), _react2.default.createElement('label', {
	                className: 'weui-search-bar__label',
	                onClick: function onClick(e) {
	                    return _reactDom2.default.findDOMNode(_this2.refs.searchInput).focus();
	                },
	                style: { display: this.state.text ? 'none' : null }
	            }, _react2.default.createElement(_icon2.default, { value: 'search' }), _react2.default.createElement('span', null, placeholder))), _react2.default.createElement('a', { className: 'weui-search-bar__cancel-btn', onClick: this.cancelHandle.bind(this) }, this.props.lang.cancel));
	        }
	    }]);

	    return SearchBar;
	}(_react2.default.Component);

	SearchBar.propTypes = {
	    /**
	     * default place holder text
	     *
	     */
	    placeholder: _react2.default.PropTypes.string,
	    /**
	     * name of the input component
	     *
	     */
	    searchName: _react2.default.PropTypes.string,
	    /**
	     * trigger when text change on input pass `text` property
	     *
	     */
	    onChange: _react2.default.PropTypes.func,
	    /**
	     * trigger when user click clear icon
	     *
	     */
	    onClear: _react2.default.PropTypes.func,
	    /**
	     * trigger when user click cancel button
	     *
	     */
	    onCancel: _react2.default.PropTypes.func,
	    /**
	     * trigger when user submit (enter action)
	     *
	     */
	    onSubmit: _react2.default.PropTypes.func,
	    /**
	     * language object consists of `cancel` property
	     *
	     */
	    lang: _react2.default.PropTypes.object
	};
	SearchBar.defaultProps = {
	    placeholder: '搜索',
	    searchName: 'q',
	    onChange: undefined,
	    onClear: undefined,
	    onCancel: undefined,
	    onSubmit: undefined,
	    lang: { cancel: '取消' },
	    autocomplete: 'off'
	};
	exports.default = SearchBar;
	module.exports = exports['default'];

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _flex = __webpack_require__(394);

	var _flex2 = _interopRequireDefault(_flex);

	var _flex_item = __webpack_require__(395);

	var _flex_item2 = _interopRequireDefault(_flex_item);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	//1.0.0 components

	exports.default = {
	    Flex: _flex2.default,
	    FlexItem: _flex_item2.default
	};
	module.exports = exports['default'];

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	}; //1.0.0 components

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * FlexItem Container
	 *
	 */
	var Flex = function Flex(props) {
	    return _react2.default.createElement("div", _extends({ className: "weui-flex" }, props), props.children);
	};

	exports.default = Flex;
	module.exports = exports["default"];

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	} //1.0.0 components

	/**
	 * Evenly distribute flex items
	 *
	 */
	var FlexItem = function FlexItem(props) {
	    var component = props.component,
	        children = props.children,
	        others = _objectWithoutProperties(props, ['component', 'children']);

	    return _react2.default.createElement('component', _extends({ className: 'weui-flex__item' }, others), children);
	};

	FlexItem.propTypes = {
	    /**
	     * pass component to replace the component but maintaing style
	     *
	     */
	    component: _react2.default.PropTypes.node
	};

	FlexItem.defaultProps = {
	    component: 'div'
	};

	exports.default = FlexItem;
	module.exports = exports['default'];

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toptips = __webpack_require__(397);

	var _toptips2 = _interopRequireDefault(_toptips);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _toptips2.default;
	module.exports = exports['default'];

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(398);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 *  Drop down message from top
	 *
	 */
	var Toptips = function Toptips(props) {
	    var className = props.className,
	        warn = props.warn,
	        info = props.info,
	        primary = props.primary,
	        children = props.children,
	        show = props.show,
	        others = _objectWithoutProperties(props, ['className', 'warn', 'info', 'primary', 'children', 'show']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-toptips': true,
	        'weui-toptips_default': !warn && !info && !primary,
	        'weui-toptips_warn': warn,
	        'weui-toptips_info': info,
	        'weui-toptips_primary': primary
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others, { style: { display: show ? 'block' : 'none' } }), children);
	};

	Toptips.propTypes = {
	    /**
	     * display tips
	     *
	     */
	    show: _react2.default.PropTypes.bool,
	    /**
	     * warn style
	     *
	     */
	    warn: _react2.default.PropTypes.bool,
	    /**
	     * info style
	     *
	     */
	    info: _react2.default.PropTypes.bool,
	    /**
	     * green style
	     *
	     */
	    primary: _react2.default.PropTypes.bool
	};

	Toptips.defaultProps = {
	    show: false
	};

	exports.default = Toptips;
	module.exports = exports['default'];

/***/ },
/* 398 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 399 */,
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _gallery = __webpack_require__(401);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _gallery_delete = __webpack_require__(402);

	var _gallery_delete2 = _interopRequireDefault(_gallery_delete);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    GalleryDelete: _gallery_delete2.default,
	    Gallery: _gallery2.default
	};
	module.exports = exports['default'];

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Full screen photo display
	 *
	 */
	var Gallery = function Gallery(props) {
	    var children = props.children,
	        className = props.className,
	        show = props.show,
	        src = props.src,
	        others = _objectWithoutProperties(props, ['children', 'className', 'show', 'src']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-gallery': true
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls, style: { display: show ? 'block' : 'none' } }, others), _react2.default.createElement('span', { className: 'weui-gallery__img', style: { backgroundImage: 'url(' + src + ')' } }), _react2.default.createElement('div', { className: 'weui-gallery__opr' }, children));
	};

	Gallery.propTypes = {
	    /**
	     * indicate whather the component is display
	     *
	     */
	    show: _react2.default.PropTypes.bool,
	    /**
	     * image source url or base64 encode
	     *
	     */
	    src: _react2.default.PropTypes.string
	};

	Gallery.defaultProps = {
	    show: undefined,
	    src: ''
	};

	exports.default = Gallery;
	module.exports = exports['default'];

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _icon = __webpack_require__(330);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Wrapper for Gallery Delete Button
	 *
	 */
	var GalleryDelete = function GalleryDelete(props) {
	    var className = props.className,
	        others = _objectWithoutProperties(props, ['className']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-gallery__del': true
	    }, className, className));

	    return _react2.default.createElement('a', _extends({ className: cls }, others), _react2.default.createElement(_icon2.default, { value: 'delete', className: 'weui-icon_gallery-delete' }));
	};

	exports.default = GalleryDelete;
	module.exports = exports['default'];

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _loadmore = __webpack_require__(404);

	var _loadmore2 = _interopRequireDefault(_loadmore);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _loadmore2.default;
	module.exports = exports['default'];

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _icon = __webpack_require__(330);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	/**
	 * Loadmore Indicators.
	 *
	 */
	var LoadMore = function LoadMore(props) {
	    var className = props.className,
	        children = props.children,
	        loading = props.loading,
	        showLine = props.showLine,
	        showDot = props.showDot,
	        others = _objectWithoutProperties(props, ['className', 'children', 'loading', 'showLine', 'showDot']);

	    var cls = (0, _classnames2.default)(_defineProperty({
	        'weui-loadmore': true,
	        'weui-loadmore_line': showLine,
	        'weui-loadmore_dot': showDot
	    }, className, className));

	    return _react2.default.createElement('div', _extends({ className: cls }, others), loading ? _react2.default.createElement(_icon2.default, { value: 'loading' }) : false, _react2.default.createElement('span', { className: 'weui-loadmore__tips' }, children));
	};

	LoadMore.propTypes = {
	    /**
	     * display laoding spinner
	     *
	     */
	    loading: _react.PropTypes.bool,
	    /**
	     * display side lines
	     *
	     */
	    showLine: _react.PropTypes.bool,
	    /**
	     * display dot in the center
	     *
	     */
	    showDot: _react.PropTypes.bool
	};

	LoadMore.defaultProps = {
	    loading: false,
	    showLine: false,
	    showDot: false
	};

	exports.default = LoadMore;
	module.exports = exports['default'];

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _picker = __webpack_require__(406);

	var _picker2 = _interopRequireDefault(_picker);

	var _picker_group = __webpack_require__(407);

	var _picker_group2 = _interopRequireDefault(_picker_group);

	var _city_picker = __webpack_require__(408);

	var _city_picker2 = _interopRequireDefault(_city_picker);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	    Picker: _picker2.default,
	    PickerGroup: _picker_group2.default,
	    CityPicker: _city_picker2.default
	};
	module.exports = exports['default'];

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _picker_group = __webpack_require__(407);

	var _picker_group2 = _interopRequireDefault(_picker_group);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  Mobile select ui, currently only support Touch Events
	 *
	 */
	var Picker = function (_Component) {
	    _inherits(Picker, _Component);

	    function Picker(props) {
	        _classCallCheck(this, Picker);

	        var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

	        _this.state = {
	            selected: _this.props.defaultSelect ? _this.props.defaultSelect : Array(_this.props.groups.length).fill(-1)
	        };

	        _this.handleChanges = _this.handleChanges.bind(_this);
	        _this.handleChange = _this.handleChange.bind(_this);
	        return _this;
	    }

	    _createClass(Picker, [{
	        key: 'handleChanges',
	        value: function handleChanges() {
	            if (this.props.onChange) this.props.onChange(this.state.selected, this);
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(item, i, groupIndex) {
	            var _this2 = this;

	            var selected = this.state.selected;

	            selected[groupIndex] = i;
	            this.setState({ selected: selected }, function () {
	                if (_this2.props.onGroupChange) _this2.props.onGroupChange(item, i, groupIndex);
	                _this2.handleChanges();
	            });
	        }
	    }, {
	        key: 'renderActions',
	        value: function renderActions() {
	            if (this.props.actions.length == 0) return false;

	            var elActions = this.props.actions.map(function (action, i) {
	                var label = action.label,
	                    others = _objectWithoutProperties(action, ['label']);

	                return _react2.default.createElement('a', _extends({}, others, { key: i, className: 'weui-picker__action' }), ' ', label);
	            });

	            return _react2.default.createElement('div', { className: 'weui-picker__hd' }, elActions);
	        }
	    }, {
	        key: 'renderGroups',
	        value: function renderGroups() {
	            var _this3 = this;

	            return this.props.groups.map(function (group, i) {
	                return _react2.default.createElement(_picker_group2.default, _extends({ key: i }, group, { onChange: _this3.handleChange, groupIndex: i, defaultIndex: _this3.state.selected[i] }));
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                actions = _props.actions,
	                groups = _props.groups,
	                defaultSelect = _props.defaultSelect,
	                onGroupChange = _props.onGroupChange,
	                onChange = _props.onChange,
	                others = _objectWithoutProperties(_props, ['className', 'actions', 'groups', 'defaultSelect', 'onGroupChange', 'onChange']);

	            var cls = (0, _classnames2.default)('weui-picker', className);

	            return _react2.default.createElement('div', _extends({ className: cls }, others, { style: { position: 'relative' } }), this.renderActions(), _react2.default.createElement('div', { className: 'weui-picker__bd' }, this.renderGroups()));
	        }
	    }]);

	    return Picker;
	}(_react.Component);

	Picker.propTypes = {
	    /**
	     * consists of array of object(max 2) with property `label` and others pass into element
	     *
	     */
	    actions: _react.PropTypes.array,
	    /**
	     * array objects consists of groups for each scroll group
	     *
	     */
	    groups: _react.PropTypes.array,
	    /**
	     * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
	     *
	     */
	    defaultSelect: _react.PropTypes.array,
	    /**
	     * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`)
	     *
	     */
	    onGroupChange: _react.PropTypes.func,
	    /**
	     * on selected change, pass property `selected` for array of slected index to `groups`
	     *
	     */
	    onChange: _react.PropTypes.func
	};
	Picker.defaultProps = {
	    actions: [],
	    groups: []
	};
	exports.default = Picker;
	module.exports = exports['default'];

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var PickerGroup = function (_Component) {
	    _inherits(PickerGroup, _Component);

	    function PickerGroup(props) {
	        _classCallCheck(this, PickerGroup);

	        var _this = _possibleConstructorReturn(this, (PickerGroup.__proto__ || Object.getPrototypeOf(PickerGroup)).call(this, props));

	        _this.state = {
	            touching: false,
	            ogY: 0,
	            ogTranslate: 0,
	            touchId: undefined,
	            translate: 0,
	            totalHeight: 0,
	            selected: 0,
	            animating: _this.props.animation
	        };

	        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
	        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
	        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
	        _this.updateSelected = _this.updateSelected.bind(_this);
	        return _this;
	    }

	    _createClass(PickerGroup, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.adjustPosition(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.adjustPosition(nextProps);
	        }
	    }, {
	        key: 'adjustPosition',
	        value: function adjustPosition(props) {
	            var _this2 = this;

	            var items = props.items,
	                itemHeight = props.itemHeight,
	                indicatorTop = props.indicatorTop,
	                defaultIndex = props.defaultIndex;

	            var totalHeight = items.length * itemHeight;
	            var translate = totalHeight <= indicatorTop ? indicatorTop : 0;

	            if (defaultIndex > -1) {
	                if (translate == 0) {
	                    var upperCount = Math.floor(indicatorTop / itemHeight);
	                    if (defaultIndex > upperCount) {
	                        //over
	                        var overCount = defaultIndex - upperCount;
	                        translate -= overCount * itemHeight;
	                    } else if (defaultIndex === upperCount) {
	                        translate = 0;
	                    } else {
	                        //less
	                        translate += Math.abs(upperCount - defaultIndex) * itemHeight;
	                    }
	                    //if(props.groupIndex == 2) console.log(defaultIndex,translate, upperCount)
	                } else {
	                    //total item less than indicator height
	                    translate -= itemHeight * defaultIndex;
	                }
	            }

	            this.setState({
	                selected: defaultIndex,
	                ogTranslate: translate,
	                totalHeight: totalHeight,
	                translate: translate
	            }, function () {
	                return defaultIndex > -1 ? _this2.updateSelected(false) : _this2.updateSelected();
	            });
	        }
	    }, {
	        key: 'updateSelected',
	        value: function updateSelected() {
	            var _this3 = this;

	            var propagate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	            var _props = this.props,
	                items = _props.items,
	                itemHeight = _props.itemHeight,
	                indicatorTop = _props.indicatorTop,
	                indicatorHeight = _props.indicatorHeight,
	                onChange = _props.onChange,
	                groupIndex = _props.groupIndex;

	            var selected = 0;
	            items.forEach(function (item, i) {
	                //console.log(i, this.state.translate, (this.state.translate + (itemHeight * i)), indicatorTop, this.state.translate + (itemHeight * i) + itemHeight , indicatorTop + indicatorHeight)
	                if (_this3.state.translate + itemHeight * i >= indicatorTop && _this3.state.translate + itemHeight * i + itemHeight <= indicatorTop + indicatorHeight) {
	                    selected = i;
	                }
	            });

	            if (onChange && propagate) onChange(items[selected], selected, groupIndex);
	        }
	    }, {
	        key: 'handleTouchStart',
	        value: function handleTouchStart(e) {
	            if (this.state.touching || this.props.items.length <= 1) return;

	            this.setState({
	                touching: true,
	                ogTranslate: this.state.translate,
	                touchId: e.targetTouches[0].identifier,
	                ogY: this.state.translate == 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.translate,
	                animating: false
	            });
	        }
	    }, {
	        key: 'handleTouchMove',
	        value: function handleTouchMove(e) {
	            if (!this.state.touching || this.props.items.length <= 1) return;
	            if (e.targetTouches[0].identifier !== this.state.touchId) return;

	            //prevent move background
	            e.preventDefault();

	            var pageY = e.targetTouches[0].pageY;
	            var diffY = pageY - this.state.ogY;

	            this.setState({
	                translate: diffY
	            });
	        }
	    }, {
	        key: 'handleTouchEnd',
	        value: function handleTouchEnd(e) {
	            var _this4 = this;

	            if (!this.state.touching || this.props.items.length <= 1) return;

	            var _props2 = this.props,
	                indicatorTop = _props2.indicatorTop,
	                indicatorHeight = _props2.indicatorHeight,
	                itemHeight = _props2.itemHeight;

	            var translate = this.state.translate;

	            if (Math.abs(translate - this.state.ogTranslate) < itemHeight * .51) {
	                translate = this.state.ogTranslate;
	            } else if (translate > indicatorTop) {
	                //top boundry
	                translate = indicatorTop;
	            } else if (translate + this.state.totalHeight < indicatorTop + indicatorHeight) {
	                //bottom
	                translate = indicatorTop + indicatorHeight - this.state.totalHeight;
	            } else {
	                //pass single item range but not exceed boundry
	                var step = 0,
	                    adjust = 0;
	                var diff = (translate - this.state.ogTranslate) / itemHeight;

	                if (Math.abs(diff) < 1) {
	                    step = diff > 0 ? 1 : -1;
	                } else {
	                    adjust = Math.abs(diff % 1 * 100) > 50 ? 1 : 0;
	                    step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
	                }

	                translate = this.state.ogTranslate + step * itemHeight;
	            }

	            this.setState({
	                touching: false,
	                ogY: 0,
	                touchId: undefined,
	                ogTranslate: 0,
	                animating: true,
	                translate: translate
	            }, function () {
	                return _this4.updateSelected();
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;

	            var _props3 = this.props,
	                items = _props3.items,
	                className = _props3.className,
	                height = _props3.height,
	                itemHeight = _props3.itemHeight,
	                indicatorTop = _props3.indicatorTop,
	                indicatorHeight = _props3.indicatorHeight,
	                onChange = _props3.onChange,
	                aniamtion = _props3.aniamtion,
	                groupIndex = _props3.groupIndex,
	                defaultIndex = _props3.defaultIndex,
	                mapKeys = _props3.mapKeys,
	                others = _objectWithoutProperties(_props3, ['items', 'className', 'height', 'itemHeight', 'indicatorTop', 'indicatorHeight', 'onChange', 'aniamtion', 'groupIndex', 'defaultIndex', 'mapKeys']);

	            var cls = (0, _classnames2.default)('weui-picker__group', className);
	            var styles = {
	                'transform': 'translate(0, ' + this.state.translate + 'px)',
	                'transition': this.state.animating ? 'transform .3s' : 'none'
	            };

	            return _react2.default.createElement('div', _extends({ className: cls }, others, {
	                onTouchStart: this.handleTouchStart,
	                onTouchMove: this.handleTouchMove,
	                onTouchEnd: this.handleTouchEnd
	            }), _react2.default.createElement('div', { className: 'weui-picker__mask' }), _react2.default.createElement('div', { className: 'weui-picker__indicator' }), _react2.default.createElement('div', { className: 'weui-picker__content',
	                style: styles,
	                ref: 'content' }, items.map(function (item, j) {
	                var label = item[_this5.props.mapKeys.label];

	                return _react2.default.createElement('div', { key: j, className: 'weui-picker__item' }, label);
	            })));
	        }
	    }]);

	    return PickerGroup;
	}(_react.Component);

	PickerGroup.propTypes = {
	    height: _react.PropTypes.number,
	    itemHeight: _react.PropTypes.number,
	    indicatorTop: _react.PropTypes.number,
	    indicatorHeight: _react.PropTypes.number,
	    onChange: _react.PropTypes.func,
	    aniamtion: _react.PropTypes.bool,
	    groupIndex: _react.PropTypes.number,
	    defaultIndex: _react.PropTypes.number
	};
	PickerGroup.defaultProps = {
	    height: 238,
	    itemHeight: 25 + 9, //content + padding
	    indicatorTop: 102,
	    indicatorHeight: 34,
	    aniamtion: true,
	    groupIndex: -1,
	    defaultIndex: -1,
	    mapKeys: {
	        label: 'label'
	    }
	};
	exports.default = PickerGroup;
	module.exports = exports['default'];

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _picker = __webpack_require__(406);

	var _picker2 = _interopRequireDefault(_picker);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  An city pick component build on top of picker
	 *
	 */
	var CityPicker = function (_React$Component) {
	    _inherits(CityPicker, _React$Component);

	    function CityPicker(props) {
	        _classCallCheck(this, CityPicker);

	        var _this = _possibleConstructorReturn(this, (CityPicker.__proto__ || Object.getPrototypeOf(CityPicker)).call(this, props));

	        var _this$props = _this.props,
	            data = _this$props.data,
	            selected = _this$props.selected,
	            dataMap = _this$props.dataMap;

	        var _this$parseData = _this.parseData(data, dataMap.items, selected),
	            groups = _this$parseData.groups,
	            newselected = _this$parseData.newselected;

	        _this.state = {
	            groups: groups,
	            selected: newselected,
	            picker_show: false,
	            text: ''
	        };
	        //console.log(this.state.groups)
	        _this.updateGroup = _this.updateGroup.bind(_this);
	        _this.parseData = _this.parseData.bind(_this);
	        _this.handleChange = _this.handleChange.bind(_this);
	        return _this;
	    }

	    //@return array of group with options


	    _createClass(CityPicker, [{
	        key: 'parseData',
	        value: function parseData(data, subKey) {
	            var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	            var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
	            var newselected = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

	            var _selected = 0;

	            if (Array.isArray(selected) && selected.length > 0) {
	                var _selectedClone = selected.slice(0);
	                _selected = _selectedClone.shift();
	                selected = _selectedClone;
	            }

	            if (typeof data[_selected] == 'undefined') {
	                _selected = 0;
	            }
	            //auto set middle
	            //   else if(selected.length == 0){
	            //       _selected = Math.floor(data.length / 2)
	            //   }

	            newselected.push(_selected);

	            var item = data[_selected];

	            var _group = JSON.parse(JSON.stringify(data));
	            _group.forEach(function (g) {
	                return delete g[subKey];
	            });
	            group.push({ items: _group, mapKeys: { 'label': this.props.dataMap.id } });

	            if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
	                return this.parseData(item[subKey], subKey, selected, group, newselected);
	            } else {
	                return { groups: group, newselected: newselected };
	            }
	        }
	    }, {
	        key: 'updateGroup',
	        value: function updateGroup(selected, picker) {
	            var _this2 = this;

	            var _props = this.props,
	                data = _props.data,
	                dataMap = _props.dataMap,
	                inline = _props.inline,
	                onChange = _props.onChange;
	            //validate if item exists

	            var _parseData = this.parseData(data, dataMap.items, selected),
	                groups = _parseData.groups,
	                newselected = _parseData.newselected;

	            var text = '';
	            try {
	                groups.forEach(function (group, i) {
	                    text += group['items'][selected[i]][_this2.props.dataMap.id] + ' ';
	                });
	            } catch (err) {
	                //wait
	                text = this.state.text;
	            }

	            //console.log(groups)
	            this.setState({
	                groups: groups,
	                text: text,
	                selected: newselected
	            });

	            //update picker
	            picker.setState({
	                selected: newselected
	            });

	            if (inline && onChange) onChange(this.state.text);
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange() {
	            if (this.props.onChange) this.props.onChange(this.state.text);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(_picker2.default, {
	                onChange: this.updateGroup,
	                defaultSelect: this.state.selected,
	                actions: !this.props.inline ? [{
	                    label: this.props.lang.leftBtn,
	                    onClick: function onClick(e) {
	                        if (_this3.props.onCancel) _this3.props.onCancel(_this3.state.text);
	                    }
	                }, {
	                    label: this.props.lang.rightBtn,
	                    onClick: this.handleChange
	                }] : [],
	                groups: this.state.groups
	            });
	        }
	    }]);

	    return CityPicker;
	}(_react2.default.Component);

	CityPicker.propTypes = {
	    /**
	     * display picker inline
	     *
	     */
	    inline: _react.PropTypes.bool,
	    /**
	     * Array of item trees, consists property for label and subitems
	     *
	     */
	    data: _react.PropTypes.array,
	    /**
	     * keys for data provide, `id` to indicate property name for label, `items` to indicate property name for subitems
	     *
	     */
	    dataMap: _react.PropTypes.object,
	    /**
	     * currently selected item
	     *
	     */
	    selected: _react.PropTypes.array,
	    /**
	     * language object consists of `leftBtn` and `rightBtn`
	     *
	     */
	    lang: _react.PropTypes.object
	};
	CityPicker.defaultProps = {
	    inline: false,
	    data: [],
	    dataMap: { id: 'name', items: 'sub' },
	    selected: [],
	    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
	};
	exports.default = CityPicker;
	module.exports = exports['default'];

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popup = __webpack_require__(410);

	var _popup2 = _interopRequireDefault(_popup);

	var _popup_header = __webpack_require__(413);

	var _popup_header2 = _interopRequireDefault(_popup_header);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = { Popup: _popup2.default, PopupHeader: _popup_header2.default };
	module.exports = exports['default'];

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _index = __webpack_require__(314);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(411);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 *  An Popup modal from bottom
	 *
	 */
	var Popup = function (_Component) {
	    _inherits(Popup, _Component);

	    function Popup() {
	        _classCallCheck(this, Popup);

	        return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
	    }

	    _createClass(Popup, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                children = _props.children,
	                show = _props.show,
	                onRequestClose = _props.onRequestClose,
	                enableMask = _props.enableMask,
	                others = _objectWithoutProperties(_props, ['className', 'children', 'show', 'onRequestClose', 'enableMask']);

	            var cls = (0, _classnames2.default)('weui-popup', {
	                'weui-popup_toggle': show
	            }, className);

	            return _react2.default.createElement('div', null, _react2.default.createElement(_index2.default, { transparent: enableMask, style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }), _react2.default.createElement('div', _extends({ className: cls }, others), children));
	        }
	    }]);

	    return Popup;
	}(_react.Component);

	Popup.propTypes = {
	    /**
	     * display the component
	     *
	     */
	    show: _react.PropTypes.bool,
	    /**
	     * show mask
	     *
	     */
	    enableMask: _react.PropTypes.bool
	};
	Popup.defaultProps = {
	    show: false,
	    enableMask: false
	};
	exports.default = Popup;
	module.exports = exports['default'];

/***/ },
/* 411 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 412 */,
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(301);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 *  Sample Popup header for Popup
	 *
	 */
	var PopupHeader = function PopupHeader(props) {
	  var left = props.left,
	      right = props.right,
	      leftOnClick = props.leftOnClick,
	      rightOnClick = props.rightOnClick,
	      className = props.className;

	  var cls = (0, _classnames2.default)('weui-popup__hd', className);
	  return _react2.default.createElement('div', { className: cls }, _react2.default.createElement('a', { className: 'weui-popup__action', onClick: leftOnClick }, ' ', left, ' '), _react2.default.createElement('a', { className: 'weui-popup__action', onClick: rightOnClick }, ' ', right, ' '));
	};

	PopupHeader.propTypes = {
	  /**
	   * left button label
	   *
	   */
	  left: _react.PropTypes.string,
	  /**
	   * right button label
	   *
	   */
	  right: _react.PropTypes.string,
	  /**
	   * left button onclick
	   *
	   */
	  leftOnClick: _react.PropTypes.func,
	  /**
	   * right button onclick
	   *
	   */
	  rightOnClick: _react.PropTypes.func
	};

	PopupHeader.defaultProps = {
	  left: '',
	  right: ''
	};

	exports.default = PopupHeader;
	module.exports = exports['default'];

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactSlick = __webpack_require__(415);

	var _reactSlick2 = _interopRequireDefault(_reactSlick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Banner = function (_React$Component) {
	    _inherits(Banner, _React$Component);

	    function Banner() {
	        _classCallCheck(this, Banner);

	        return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
	    }

	    _createClass(Banner, [{
	        key: "render",
	        value: function render() {
	            var settings = {
	                dots: true,
	                infinite: true,
	                speed: 500,
	                arrows: false,
	                slidesToShow: 1,
	                slidesToScroll: 1,
	                centerMode: true,
	                autoplay: true,
	                autoplaySpeed: 2500,
	                centerPadding: "50px",
	                className: "banner"
	            };

	            return _react2.default.createElement(
	                _reactSlick2.default,
	                settings,
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box" },
	                        _react2.default.createElement("img", { src: "/product/1/cover.jpg" })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box" },
	                        _react2.default.createElement("img", { src: "/product/1/cover.jpg" })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box" },
	                        _react2.default.createElement("img", { src: "/product/1/cover.jpg" })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "div",
	                        { className: "box" },
	                        _react2.default.createElement("img", { src: "/product/1/cover.jpg" })
	                    )
	                )
	            );
	        }
	    }]);

	    return Banner;
	}(_react2.default.Component);

	exports.default = Banner;

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(416);

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _innerSlider = __webpack_require__(417);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _json2mq = __webpack_require__(427);

	var _json2mq2 = _interopRequireDefault(_json2mq);

	var _reactResponsiveMixin = __webpack_require__(429);

	var _reactResponsiveMixin2 = _interopRequireDefault(_reactResponsiveMixin);

	var _defaultProps = __webpack_require__(422);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Slider = _react2.default.createClass({
	  displayName: 'Slider',

	  mixins: [_reactResponsiveMixin2.default],
	  innerSlider: null,
	  innerSliderRefHandler: function innerSliderRefHandler(ref) {
	    this.innerSlider = ref;
	  },
	  getInitialState: function getInitialState() {
	    return {
	      breakpoint: null
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    if (this.props.responsive) {
	      var breakpoints = this.props.responsive.map(function (breakpt) {
	        return breakpt.breakpoint;
	      });
	      breakpoints.sort(function (x, y) {
	        return x - y;
	      });

	      breakpoints.forEach(function (breakpoint, index) {
	        var bQuery;
	        if (index === 0) {
	          bQuery = (0, _json2mq2.default)({ minWidth: 0, maxWidth: breakpoint });
	        } else {
	          bQuery = (0, _json2mq2.default)({ minWidth: breakpoints[index - 1], maxWidth: breakpoint });
	        }
	        _this.media(bQuery, function () {
	          _this.setState({ breakpoint: breakpoint });
	        });
	      });

	      // Register media query for full screen. Need to support resize from small to large
	      var query = (0, _json2mq2.default)({ minWidth: breakpoints.slice(-1)[0] });

	      this.media(query, function () {
	        _this.setState({ breakpoint: null });
	      });
	    }
	  },

	  slickPrev: function slickPrev() {
	    this.innerSlider.slickPrev();
	  },

	  slickNext: function slickNext() {
	    this.innerSlider.slickNext();
	  },

	  slickGoTo: function slickGoTo(slide) {
	    this.innerSlider.slickGoTo(slide);
	  },

	  render: function render() {
	    var _this2 = this;

	    var settings;
	    var newProps;
	    if (this.state.breakpoint) {
	      newProps = this.props.responsive.filter(function (resp) {
	        return resp.breakpoint === _this2.state.breakpoint;
	      });
	      settings = newProps[0].settings === 'unslick' ? 'unslick' : (0, _objectAssign2.default)({}, this.props, newProps[0].settings);
	    } else {
	      settings = (0, _objectAssign2.default)({}, _defaultProps2.default, this.props);
	    }

	    var children = this.props.children;
	    if (!Array.isArray(children)) {
	      children = [children];
	    }

	    // Children may contain false or null, so we should filter them
	    children = children.filter(function (child) {
	      return !!child;
	    });

	    if (settings === 'unslick') {
	      // if 'unslick' responsive breakpoint setting used, just return the <Slider> tag nested HTML
	      return _react2.default.createElement(
	        'div',
	        null,
	        children
	      );
	    } else {
	      return _react2.default.createElement(
	        _innerSlider.InnerSlider,
	        _extends({ ref: this.innerSliderRefHandler }, settings),
	        children
	      );
	    }
	  }
	});

	module.exports = Slider;

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.InnerSlider = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _eventHandlers = __webpack_require__(418);

	var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

	var _helpers = __webpack_require__(420);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _initialState = __webpack_require__(421);

	var _initialState2 = _interopRequireDefault(_initialState);

	var _defaultProps = __webpack_require__(422);

	var _defaultProps2 = _interopRequireDefault(_defaultProps);

	var _classnames = __webpack_require__(423);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _track = __webpack_require__(424);

	var _dots = __webpack_require__(425);

	var _arrows = __webpack_require__(426);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InnerSlider = exports.InnerSlider = _react2.default.createClass({
	  displayName: 'InnerSlider',

	  mixins: [_helpers2.default, _eventHandlers2.default],
	  list: null,
	  track: null,
	  listRefHandler: function listRefHandler(ref) {
	    this.list = ref;
	  },
	  trackRefHandler: function trackRefHandler(ref) {
	    this.track = ref;
	  },
	  getInitialState: function getInitialState() {
	    return _extends({}, _initialState2.default, {
	      currentSlide: this.props.initialSlide
	    });
	  },
	  getDefaultProps: function getDefaultProps() {
	    return _defaultProps2.default;
	  },
	  componentWillMount: function componentWillMount() {
	    if (this.props.init) {
	      this.props.init();
	    }
	    this.setState({
	      mounted: true
	    });
	    var lazyLoadedList = [];
	    for (var i = 0; i < _react2.default.Children.count(this.props.children); i++) {
	      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
	        lazyLoadedList.push(i);
	      }
	    }

	    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
	      this.setState({
	        lazyLoadedList: lazyLoadedList
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    // Hack for autoplay -- Inspect Later
	    this.initialize(this.props);
	    this.adaptHeight();

	    // To support server-side rendering
	    if (!window) {
	      return;
	    }
	    if (window.addEventListener) {
	      window.addEventListener('resize', this.onWindowResized);
	    } else {
	      window.attachEvent('onresize', this.onWindowResized);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationEndCallback) {
	      clearTimeout(this.animationEndCallback);
	    }
	    if (window.addEventListener) {
	      window.removeEventListener('resize', this.onWindowResized);
	    } else {
	      window.detachEvent('onresize', this.onWindowResized);
	    }
	    if (this.state.autoPlayTimer) {
	      clearInterval(this.state.autoPlayTimer);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.slickGoTo != nextProps.slickGoTo) {
	      if (process.env.NODE_ENV !== 'production') {
	        console.warn('react-slick deprecation warning: slickGoTo prop is deprecated and it will be removed in next release. Use slickGoTo method instead');
	      }
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.slickGoTo,
	        currentSlide: this.state.currentSlide
	      });
	    } else if (this.state.currentSlide >= nextProps.children.length) {
	      this.update(nextProps);
	      this.changeSlide({
	        message: 'index',
	        index: nextProps.children.length - nextProps.slidesToShow,
	        currentSlide: this.state.currentSlide
	      });
	    } else {
	      this.update(nextProps);
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.adaptHeight();
	  },
	  onWindowResized: function onWindowResized() {
	    this.update(this.props);
	    // animating state should be cleared while resizing, otherwise autoplay stops working
	    this.setState({
	      animating: false
	    });
	    clearTimeout(this.animationEndCallback);
	    delete this.animationEndCallback;
	  },
	  slickPrev: function slickPrev() {
	    this.changeSlide({ message: 'previous' });
	  },
	  slickNext: function slickNext() {
	    this.changeSlide({ message: 'next' });
	  },
	  slickGoTo: function slickGoTo(slide) {
	    typeof slide === 'number' && this.changeSlide({
	      message: 'index',
	      index: slide,
	      currentSlide: this.state.currentSlide
	    });
	  },
	  render: function render() {
	    var className = (0, _classnames2.default)('slick-initialized', 'slick-slider', this.props.className, {
	      'slick-vertical': this.props.vertical
	    });

	    var trackProps = {
	      fade: this.props.fade,
	      cssEase: this.props.cssEase,
	      speed: this.props.speed,
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      focusOnSelect: this.props.focusOnSelect ? this.selectHandler : null,
	      currentSlide: this.state.currentSlide,
	      lazyLoad: this.props.lazyLoad,
	      lazyLoadedList: this.state.lazyLoadedList,
	      rtl: this.props.rtl,
	      slideWidth: this.state.slideWidth,
	      slidesToShow: this.props.slidesToShow,
	      slidesToScroll: this.props.slidesToScroll,
	      slideCount: this.state.slideCount,
	      trackStyle: this.state.trackStyle,
	      variableWidth: this.props.variableWidth
	    };

	    var dots;

	    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
	      var dotProps = {
	        dotsClass: this.props.dotsClass,
	        slideCount: this.state.slideCount,
	        slidesToShow: this.props.slidesToShow,
	        currentSlide: this.state.currentSlide,
	        slidesToScroll: this.props.slidesToScroll,
	        clickHandler: this.changeSlide,
	        children: this.props.children,
	        customPaging: this.props.customPaging
	      };

	      dots = _react2.default.createElement(_dots.Dots, dotProps);
	    }

	    var prevArrow, nextArrow;

	    var arrowProps = {
	      infinite: this.props.infinite,
	      centerMode: this.props.centerMode,
	      currentSlide: this.state.currentSlide,
	      slideCount: this.state.slideCount,
	      slidesToShow: this.props.slidesToShow,
	      prevArrow: this.props.prevArrow,
	      nextArrow: this.props.nextArrow,
	      clickHandler: this.changeSlide
	    };

	    if (this.props.arrows) {
	      prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
	      nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
	    }

	    var verticalHeightStyle = null;

	    if (this.props.vertical) {
	      verticalHeightStyle = {
	        height: this.state.listHeight
	      };
	    }

	    var centerPaddingStyle = null;

	    if (this.props.vertical === false) {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: '0px ' + this.props.centerPadding
	        };
	      }
	    } else {
	      if (this.props.centerMode === true) {
	        centerPaddingStyle = {
	          padding: this.props.centerPadding + ' 0px'
	        };
	      }
	    }

	    var listStyle = (0, _objectAssign2.default)({}, verticalHeightStyle, centerPaddingStyle);

	    return _react2.default.createElement(
	      'div',
	      { className: className, onMouseEnter: this.onInnerSliderEnter, onMouseLeave: this.onInnerSliderLeave },
	      prevArrow,
	      _react2.default.createElement(
	        'div',
	        {
	          ref: this.listRefHandler,
	          className: 'slick-list',
	          style: listStyle,
	          onMouseDown: this.swipeStart,
	          onMouseMove: this.state.dragging ? this.swipeMove : null,
	          onMouseUp: this.swipeEnd,
	          onMouseLeave: this.state.dragging ? this.swipeEnd : null,
	          onTouchStart: this.swipeStart,
	          onTouchMove: this.state.dragging ? this.swipeMove : null,
	          onTouchEnd: this.swipeEnd,
	          onTouchCancel: this.state.dragging ? this.swipeEnd : null,
	          onKeyDown: this.props.accessibility ? this.keyHandler : null },
	        _react2.default.createElement(
	          _track.Track,
	          _extends({ ref: this.trackRefHandler }, trackProps),
	          this.props.children
	        )
	      ),
	      nextArrow,
	      dots
	    );
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _trackHelper = __webpack_require__(419);

	var _helpers = __webpack_require__(420);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EventHandlers = {
	  // Event handler for previous and next
	  changeSlide: function changeSlide(options) {
	    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
	    var _props = this.props;
	    var slidesToScroll = _props.slidesToScroll;
	    var slidesToShow = _props.slidesToShow;
	    var _state = this.state;
	    var slideCount = _state.slideCount;
	    var currentSlide = _state.currentSlide;

	    unevenOffset = slideCount % slidesToScroll !== 0;
	    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

	    if (options.message === 'previous') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
	      targetSlide = currentSlide - slideOffset;
	      if (this.props.lazyLoad) {
	        previousInt = currentSlide - slideOffset;
	        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
	      }
	    } else if (options.message === 'next') {
	      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
	      targetSlide = currentSlide + slideOffset;
	      if (this.props.lazyLoad) {
	        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
	      }
	    } else if (options.message === 'dots' || options.message === 'children') {
	      // Click on dots
	      targetSlide = options.index * options.slidesToScroll;
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    } else if (options.message === 'index') {
	      targetSlide = parseInt(options.index);
	      if (targetSlide === options.currentSlide) {
	        return;
	      }
	    }

	    this.slideHandler(targetSlide);
	  },

	  // Accessiblity handler for previous and next
	  keyHandler: function keyHandler(e) {
	    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
	    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
	      if (e.keyCode === 37 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'next' : 'previous'
	        });
	      } else if (e.keyCode === 39 && this.props.accessibility === true) {
	        this.changeSlide({
	          message: this.props.rtl === true ? 'previous' : 'next'
	        });
	      }
	    }
	  },
	  // Focus on selecting a slide (click handler on track)
	  selectHandler: function selectHandler(options) {
	    this.changeSlide(options);
	  },
	  swipeStart: function swipeStart(e) {
	    var touches, posX, posY;

	    if (this.props.swipe === false || 'ontouchend' in document && this.props.swipe === false) {
	      return;
	    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
	      return;
	    }
	    posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
	    posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
	    this.setState({
	      dragging: true,
	      touchObject: {
	        startX: posX,
	        startY: posY,
	        curX: posX,
	        curY: posY
	      }
	    });
	  },
	  swipeMove: function swipeMove(e) {
	    if (!this.state.dragging) {
	      e.preventDefault();
	      return;
	    }
	    if (this.state.animating) {
	      return;
	    }
	    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
	      e.preventDefault();
	    }
	    var swipeLeft;
	    var curLeft, positionOffset;
	    var touchObject = this.state.touchObject;

	    curLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: this.state.currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));
	    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
	    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
	    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

	    if (this.props.verticalSwiping) {
	      touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
	    }

	    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);

	    if (this.props.verticalSwiping) {
	      positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
	    }

	    var currentSlide = this.state.currentSlide;
	    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
	    var swipeDirection = this.swipeDirection(this.state.touchObject);
	    var touchSwipeLength = touchObject.swipeLength;

	    if (this.props.infinite === false) {
	      if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
	        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;

	        if (this.state.edgeDragged === false && this.props.edgeEvent) {
	          this.props.edgeEvent(swipeDirection);
	          this.setState({ edgeDragged: true });
	        }
	      }
	    }

	    if (this.state.swiped === false && this.props.swipeEvent) {
	      this.props.swipeEvent(swipeDirection);
	      this.setState({ swiped: true });
	    }

	    if (!this.props.vertical) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    } else {
	      swipeLeft = curLeft + touchSwipeLength * (this.state.listHeight / this.state.listWidth) * positionOffset;
	    }

	    if (this.props.verticalSwiping) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    }

	    this.setState({
	      touchObject: touchObject,
	      swipeLeft: swipeLeft,
	      trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: swipeLeft }, this.props, this.state))
	    });

	    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
	      return;
	    }
	    if (touchObject.swipeLength > 4) {
	      e.preventDefault();
	    }
	  },
	  getNavigableIndexes: function getNavigableIndexes() {
	    var max = void 0;
	    var breakPoint = 0;
	    var counter = 0;
	    var indexes = [];

	    if (!this.props.infinite) {
	      max = this.state.slideCount;
	    } else {
	      breakPoint = this.props.slidesToShow * -1;
	      counter = this.props.slidesToShow * -1;
	      max = this.state.slideCount * 2;
	    }

	    while (breakPoint < max) {
	      indexes.push(breakPoint);
	      breakPoint = counter + this.props.slidesToScroll;

	      counter += this.props.slidesToScroll <= this.props.slidesToShow ? this.props.slidesToScroll : this.props.slidesToShow;
	    }

	    return indexes;
	  },
	  checkNavigable: function checkNavigable(index) {
	    var navigables = this.getNavigableIndexes();
	    var prevNavigable = 0;

	    if (index > navigables[navigables.length - 1]) {
	      index = navigables[navigables.length - 1];
	    } else {
	      for (var n in navigables) {
	        if (index < navigables[n]) {
	          index = prevNavigable;
	          break;
	        }

	        prevNavigable = navigables[n];
	      }
	    }

	    return index;
	  },
	  getSlideCount: function getSlideCount() {
	    var _this = this;

	    var centerOffset = this.props.centerMode ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2) : 0;

	    if (this.props.swipeToSlide) {
	      var swipedSlide = void 0;

	      var slickList = _reactDom2.default.findDOMNode(this.list);

	      var slides = slickList.querySelectorAll('.slick-slide');

	      Array.from(slides).every(function (slide) {
	        if (!_this.props.vertical) {
	          if (slide.offsetLeft - centerOffset + _this.getWidth(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        } else {
	          if (slide.offsetTop + _this.getHeight(slide) / 2 > _this.state.swipeLeft * -1) {
	            swipedSlide = slide;
	            return false;
	          }
	        }

	        return true;
	      });

	      var slidesTraversed = Math.abs(swipedSlide.dataset.index - this.state.currentSlide) || 1;

	      return slidesTraversed;
	    } else {
	      return this.props.slidesToScroll;
	    }
	  },

	  swipeEnd: function swipeEnd(e) {
	    if (!this.state.dragging) {
	      e.preventDefault();
	      return;
	    }
	    var touchObject = this.state.touchObject;
	    var minSwipe = this.state.listWidth / this.props.touchThreshold;
	    var swipeDirection = this.swipeDirection(touchObject);

	    if (this.props.verticalSwiping) {
	      minSwipe = this.state.listHeight / this.props.touchThreshold;
	    }

	    // reset the state of touch related state variables.
	    this.setState({
	      dragging: false,
	      edgeDragged: false,
	      swiped: false,
	      swipeLeft: null,
	      touchObject: {}
	    });
	    // Fix for #13
	    if (!touchObject.swipeLength) {
	      return;
	    }
	    if (touchObject.swipeLength > minSwipe) {
	      e.preventDefault();

	      var slideCount = void 0,
	          newSlide = void 0;

	      switch (swipeDirection) {

	        case 'left':
	        case 'down':
	          newSlide = this.state.currentSlide + this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 0;
	          break;

	        case 'right':
	        case 'up':
	          newSlide = this.state.currentSlide - this.getSlideCount();
	          slideCount = this.props.swipeToSlide ? this.checkNavigable(newSlide) : newSlide;
	          this.state.currentDirection = 1;
	          break;

	        default:
	          slideCount = this.state.currentSlide;

	      }

	      this.slideHandler(slideCount);
	    } else {
	      // Adjust the track back to it's original position.
	      var currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, this.props, this.state));

	      this.setState({
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      });
	    }
	  },
	  onInnerSliderEnter: function onInnerSliderEnter(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  onInnerSliderLeave: function onInnerSliderLeave(e) {
	    if (this.props.autoplay && this.props.pauseOnHover) {
	      this.autoPlay();
	    }
	  }
	};

	exports.default = EventHandlers;

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
	  return keysArray.reduce(function (value, key) {
	    return value && spec.hasOwnProperty(key);
	  }, true) ? null : console.error('Keys Missing', spec);
	};

	var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

	  var trackWidth, trackHeight;

	  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

	  if (!spec.vertical) {
	    if (spec.variableWidth) {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    } else if (spec.centerMode) {
	      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
	    } else {
	      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
	    }
	  } else {
	    trackHeight = trackChildren * spec.slideHeight;
	  }

	  var style = {
	    opacity: 1,
	    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
	    transition: '',
	    WebkitTransition: '',
	    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
	  };

	  if (trackWidth) {
	    (0, _objectAssign2.default)(style, { width: trackWidth });
	  }

	  if (trackHeight) {
	    (0, _objectAssign2.default)(style, { height: trackHeight });
	  }

	  // Fallback for IE8
	  if (window && !window.addEventListener && window.attachEvent) {
	    if (!spec.vertical) {
	      style.marginLeft = spec.left + 'px';
	    } else {
	      style.marginTop = spec.left + 'px';
	    }
	  }

	  return style;
	};

	var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
	  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

	  var style = getTrackCSS(spec);
	  // useCSS is true by default so it can be undefined
	  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
	  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
	  return style;
	};

	var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {

	  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);

	  var slideOffset = 0;
	  var targetLeft;
	  var targetSlide;
	  var verticalOffset = 0;

	  if (spec.fade) {
	    return 0;
	  }

	  if (spec.infinite) {
	    if (spec.slideCount >= spec.slidesToShow) {
	      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
	      verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
	    }
	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        if (spec.slideIndex > spec.slideCount) {
	          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
	          verticalOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight * -1;
	        } else {
	          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
	          verticalOffset = spec.slideCount % spec.slidesToScroll * spec.slideHeight * -1;
	        }
	      }
	    }
	  } else {

	    if (spec.slideCount % spec.slidesToScroll !== 0) {
	      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	        var slidesToOffset = spec.slidesToShow - spec.slideCount % spec.slidesToScroll;
	        slideOffset = slidesToOffset * spec.slideWidth;
	      }
	    }
	  }

	  if (spec.centerMode) {
	    if (spec.infinite) {
	      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    } else {
	      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	    }
	  }

	  if (!spec.vertical) {
	    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
	  } else {
	    targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
	  }

	  if (spec.variableWidth === true) {
	    var targetSlideIndex;
	    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
	    } else {
	      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
	      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
	    }
	    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	    if (spec.centerMode === true) {
	      if (spec.infinite === false) {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex];
	      } else {
	        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
	      }

	      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	      targetLeft += (spec.listWidth - targetSlide.offsetWidth) / 2;
	    }
	  }

	  return targetLeft;
	};

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _trackHelper = __webpack_require__(419);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var helpers = {
	  initialize: function initialize(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);

	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }

	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    var currentSlide = props.rtl ? slideCount - 1 - props.initialSlide : props.initialSlide;

	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      currentSlide: currentSlide,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {

	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });

	      this.autoPlay(); // once we're set up, trigger the initial autoplay.
	    });
	  },
	  update: function update(props) {
	    var slickList = _reactDom2.default.findDOMNode(this.list);
	    // This method has mostly same code as initialize method.
	    // Refactor it
	    var slideCount = _react2.default.Children.count(props.children);
	    var listWidth = this.getWidth(slickList);
	    var trackWidth = this.getWidth(_reactDom2.default.findDOMNode(this.track));
	    var slideWidth;

	    if (!props.vertical) {
	      var centerPaddingAdj = props.centerMode && parseInt(props.centerPadding) * 2;
	      slideWidth = (this.getWidth(_reactDom2.default.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
	    } else {
	      slideWidth = this.getWidth(_reactDom2.default.findDOMNode(this));
	    }

	    var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
	    var listHeight = slideHeight * props.slidesToShow;

	    // pause slider if autoplay is set to false
	    if (!props.autoplay) this.pause();

	    this.setState({
	      slideCount: slideCount,
	      slideWidth: slideWidth,
	      listWidth: listWidth,
	      trackWidth: trackWidth,
	      slideHeight: slideHeight,
	      listHeight: listHeight
	    }, function () {

	      var targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	        slideIndex: this.state.currentSlide,
	        trackRef: this.track
	      }, props, this.state));
	      // getCSS function needs previously set state
	      var trackStyle = (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: targetLeft }, props, this.state));

	      this.setState({ trackStyle: trackStyle });
	    });
	  },
	  getWidth: function getWidth(elem) {
	    return elem.getBoundingClientRect().width || elem.offsetWidth;
	  },
	  getHeight: function getHeight(elem) {
	    return elem.getBoundingClientRect().height || elem.offsetHeight;
	  },

	  adaptHeight: function adaptHeight() {
	    if (this.props.adaptiveHeight) {
	      var selector = '[data-index="' + this.state.currentSlide + '"]';
	      if (this.list) {
	        var slickList = _reactDom2.default.findDOMNode(this.list);
	        slickList.style.height = slickList.querySelector(selector).offsetHeight + 'px';
	      }
	    }
	  },
	  canGoNext: function canGoNext(opts) {
	    var canGo = true;
	    if (!opts.infinite) {
	      if (opts.centerMode) {
	        // check if current slide is last slide
	        if (opts.currentSlide >= opts.slideCount - 1) {
	          canGo = false;
	        }
	      } else {
	        // check if all slides are shown in slider
	        if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
	          canGo = false;
	        }
	      }
	    }
	    return canGo;
	  },
	  slideHandler: function slideHandler(index) {
	    var _this = this;

	    // Functionality of animateSlide and postSlide is merged into this function
	    // console.log('slideHandler', index);
	    var targetSlide, currentSlide;
	    var targetLeft, currentLeft;
	    var callback;

	    if (this.props.waitForAnimate && this.state.animating) {
	      return;
	    }

	    if (this.props.fade) {
	      currentSlide = this.state.currentSlide;

	      // Don't change slide if it's not infite and current slide is the first or last slide.
	      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
	        return;
	      }

	      //  Shifting targetSlide back into the range
	      if (index < 0) {
	        targetSlide = index + this.state.slideCount;
	      } else if (index >= this.state.slideCount) {
	        targetSlide = index - this.state.slideCount;
	      } else {
	        targetSlide = index;
	      }

	      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
	        this.setState({
	          lazyLoadedList: this.state.lazyLoadedList.concat(targetSlide)
	        });
	      }

	      callback = function callback() {
	        _this.setState({
	          animating: false
	        });
	        if (_this.props.afterChange) {
	          _this.props.afterChange(targetSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: targetSlide
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });

	      if (this.props.beforeChange) {
	        this.props.beforeChange(this.state.currentSlide, targetSlide);
	      }

	      this.autoPlay();
	      return;
	    }

	    targetSlide = index;
	    if (targetSlide < 0) {
	      if (this.props.infinite === false) {
	        currentSlide = 0;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        currentSlide = this.state.slideCount - this.state.slideCount % this.props.slidesToScroll;
	      } else {
	        currentSlide = this.state.slideCount + targetSlide;
	      }
	    } else if (targetSlide >= this.state.slideCount) {
	      if (this.props.infinite === false) {
	        currentSlide = this.state.slideCount - this.props.slidesToShow;
	      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
	        currentSlide = 0;
	      } else {
	        currentSlide = targetSlide - this.state.slideCount;
	      }
	    } else {
	      currentSlide = targetSlide;
	    }

	    targetLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: targetSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    currentLeft = (0, _trackHelper.getTrackLeft)((0, _objectAssign2.default)({
	      slideIndex: currentSlide,
	      trackRef: this.track
	    }, this.props, this.state));

	    if (this.props.infinite === false) {
	      targetLeft = currentLeft;
	    }

	    if (this.props.beforeChange) {
	      this.props.beforeChange(this.state.currentSlide, currentSlide);
	    }

	    if (this.props.lazyLoad) {
	      var loaded = true;
	      var slidesToLoad = [];
	      for (var i = targetSlide; i < targetSlide + this.props.slidesToShow; i++) {
	        loaded = loaded && this.state.lazyLoadedList.indexOf(i) >= 0;
	        if (!loaded) {
	          slidesToLoad.push(i);
	        }
	      }
	      if (!loaded) {
	        this.setState({
	          lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad)
	        });
	      }
	    }

	    // Slide Transition happens here.
	    // animated transition happens to target Slide and
	    // non - animated transition happens to current Slide
	    // If CSS transitions are false, directly go the current slide.

	    if (this.props.useCSS === false) {

	      this.setState({
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state))
	      }, function () {
	        if (this.props.afterChange) {
	          this.props.afterChange(currentSlide);
	        }
	      });
	    } else {

	      var nextStateChanges = {
	        animating: false,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackCSS)((0, _objectAssign2.default)({ left: currentLeft }, this.props, this.state)),
	        swipeLeft: null
	      };

	      callback = function callback() {
	        _this.setState(nextStateChanges);
	        if (_this.props.afterChange) {
	          _this.props.afterChange(currentSlide);
	        }
	        delete _this.animationEndCallback;
	      };

	      this.setState({
	        animating: true,
	        currentSlide: currentSlide,
	        trackStyle: (0, _trackHelper.getTrackAnimateCSS)((0, _objectAssign2.default)({ left: targetLeft }, this.props, this.state))
	      }, function () {
	        this.animationEndCallback = setTimeout(callback, this.props.speed);
	      });
	    }

	    this.autoPlay();
	  },
	  swipeDirection: function swipeDirection(touchObject) {
	    var xDist, yDist, r, swipeAngle;

	    xDist = touchObject.startX - touchObject.curX;
	    yDist = touchObject.startY - touchObject.curY;
	    r = Math.atan2(yDist, xDist);

	    swipeAngle = Math.round(r * 180 / Math.PI);
	    if (swipeAngle < 0) {
	      swipeAngle = 360 - Math.abs(swipeAngle);
	    }
	    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
	      return this.props.rtl === false ? 'left' : 'right';
	    }
	    if (swipeAngle >= 135 && swipeAngle <= 225) {
	      return this.props.rtl === false ? 'right' : 'left';
	    }
	    if (this.props.verticalSwiping === true) {
	      if (swipeAngle >= 35 && swipeAngle <= 135) {
	        return 'down';
	      } else {
	        return 'up';
	      }
	    }

	    return 'vertical';
	  },
	  play: function play() {
	    var nextIndex;

	    if (!this.state.mounted) {
	      return false;
	    }

	    if (this.props.rtl) {
	      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
	    } else {
	      if (this.canGoNext(_extends({}, this.props, this.state))) {
	        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
	      } else {
	        return false;
	      }
	    }

	    this.slideHandler(nextIndex);
	  },
	  autoPlay: function autoPlay() {
	    if (this.state.autoPlayTimer) {
	      return;
	    }
	    if (this.props.autoplay) {
	      this.setState({
	        autoPlayTimer: setInterval(this.play, this.props.autoplaySpeed)
	      });
	    }
	  },
	  pause: function pause() {
	    if (this.state.autoPlayTimer) {
	      clearInterval(this.state.autoPlayTimer);
	      this.setState({
	        autoPlayTimer: null
	      });
	    }
	  }
	};

	exports.default = helpers;

/***/ },
/* 421 */
/***/ function(module, exports) {

	"use strict";

	var initialState = {
	    animating: false,
	    dragging: false,
	    autoPlayTimer: null,
	    currentDirection: 0,
	    currentLeft: null,
	    currentSlide: 0,
	    direction: 1,
	    listWidth: null,
	    listHeight: null,
	    // loadIndex: 0,
	    slideCount: null,
	    slideWidth: null,
	    slideHeight: null,
	    // sliding: false,
	    // slideOffset: 0,
	    swipeLeft: null,
	    touchObject: {
	        startX: 0,
	        startY: 0,
	        curX: 0,
	        curY: 0
	    },

	    lazyLoadedList: [],

	    // added for react
	    initialized: false,
	    edgeDragged: false,
	    swiped: false, // used by swipeEvent. differentites between touch and swipe.
	    trackStyle: {},
	    trackWidth: 0

	    // Removed
	    // transformsEnabled: false,
	    // $nextArrow: null,
	    // $prevArrow: null,
	    // $dots: null,
	    // $list: null,
	    // $slideTrack: null,
	    // $slides: null,
	};

	module.exports = initialState;

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultProps = {
	    className: '',
	    accessibility: true,
	    adaptiveHeight: false,
	    arrows: true,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    centerMode: false,
	    centerPadding: '50px',
	    cssEase: 'ease',
	    customPaging: function customPaging(i) {
	        return _react2.default.createElement(
	            'button',
	            null,
	            i + 1
	        );
	    },
	    dots: false,
	    dotsClass: 'slick-dots',
	    draggable: true,
	    easing: 'linear',
	    edgeFriction: 0.35,
	    fade: false,
	    focusOnSelect: false,
	    infinite: true,
	    initialSlide: 0,
	    lazyLoad: false,
	    pauseOnHover: true,
	    responsive: null,
	    rtl: false,
	    slide: 'div',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 500,
	    swipe: true,
	    swipeToSlide: false,
	    touchMove: true,
	    touchThreshold: 5,
	    useCSS: true,
	    variableWidth: false,
	    vertical: false,
	    waitForAnimate: true,
	    afterChange: null,
	    beforeChange: null,
	    edgeEvent: null,
	    init: null,
	    swipeEvent: null,
	    // nextArrow, prevArrow are react componets
	    nextArrow: null,
	    prevArrow: null
	};

	module.exports = defaultProps;

/***/ },
/* 423 */,
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Track = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(4);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _classnames = __webpack_require__(423);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getSlideClasses = function getSlideClasses(spec) {
	  var slickActive, slickCenter, slickCloned;
	  var centerOffset, index;

	  if (spec.rtl) {
	    index = spec.slideCount - 1 - spec.index;
	  } else {
	    index = spec.index;
	  }

	  slickCloned = index < 0 || index >= spec.slideCount;
	  if (spec.centerMode) {
	    centerOffset = Math.floor(spec.slidesToShow / 2);
	    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
	    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
	      slickActive = true;
	    }
	  } else {
	    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
	  }
	  return (0, _classnames2.default)({
	    'slick-slide': true,
	    'slick-active': slickActive,
	    'slick-center': slickCenter,
	    'slick-cloned': slickCloned
	  });
	};

	var getSlideStyle = function getSlideStyle(spec) {
	  var style = {};

	  if (spec.variableWidth === undefined || spec.variableWidth === false) {
	    style.width = spec.slideWidth;
	  }

	  if (spec.fade) {
	    style.position = 'relative';
	    style.left = -spec.index * spec.slideWidth;
	    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
	    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	  }

	  return style;
	};

	var getKey = function getKey(child, fallbackKey) {
	  // key could be a zero
	  return child.key === null || child.key === undefined ? fallbackKey : child.key;
	};

	var renderSlides = function renderSlides(spec) {
	  var key;
	  var slides = [];
	  var preCloneSlides = [];
	  var postCloneSlides = [];
	  var count = _react2.default.Children.count(spec.children);

	  _react2.default.Children.forEach(spec.children, function (elem, index) {
	    var child = void 0;
	    var childOnClickOptions = {
	      message: 'children',
	      index: index,
	      slidesToScroll: spec.slidesToScroll,
	      currentSlide: spec.currentSlide
	    };

	    if (!spec.lazyLoad | (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
	      child = elem;
	    } else {
	      child = _react2.default.createElement('div', null);
	    }
	    var childStyle = getSlideStyle((0, _objectAssign2.default)({}, spec, { index: index }));
	    var slickClasses = getSlideClasses((0, _objectAssign2.default)({ index: index }, spec));
	    var cssClasses;

	    if (child.props.className) {
	      cssClasses = (0, _classnames2.default)(slickClasses, child.props.className);
	    } else {
	      cssClasses = slickClasses;
	    }

	    var onClick = function onClick(e) {
	      child.props && child.props.onClick && child.props.onClick(e);
	      if (spec.focusOnSelect) {
	        spec.focusOnSelect(childOnClickOptions);
	      }
	    };

	    slides.push(_react2.default.cloneElement(child, {
	      key: 'original' + getKey(child, index),
	      'data-index': index,
	      className: cssClasses,
	      tabIndex: '-1',
	      style: (0, _objectAssign2.default)({ outline: 'none' }, child.props.style || {}, childStyle),
	      onClick: onClick
	    }));

	    // variableWidth doesn't wrap properly.
	    if (spec.infinite && spec.fade === false) {
	      var infiniteCount = spec.variableWidth ? spec.slidesToShow + 1 : spec.slidesToShow;

	      if (index >= count - infiniteCount) {
	        key = -(count - index);
	        preCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'precloned' + getKey(child, key),
	          'data-index': key,
	          className: cssClasses,
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }

	      if (index < infiniteCount) {
	        key = count + index;
	        postCloneSlides.push(_react2.default.cloneElement(child, {
	          key: 'postcloned' + getKey(child, key),
	          'data-index': key,
	          className: cssClasses,
	          style: (0, _objectAssign2.default)({}, child.props.style || {}, childStyle),
	          onClick: onClick
	        }));
	      }
	    }
	  });

	  if (spec.rtl) {
	    return preCloneSlides.concat(slides, postCloneSlides).reverse();
	  } else {
	    return preCloneSlides.concat(slides, postCloneSlides);
	  }
	};

	var Track = exports.Track = _react2.default.createClass({
	  displayName: 'Track',

	  render: function render() {
	    var slides = renderSlides.call(this, this.props);
	    return _react2.default.createElement(
	      'div',
	      { className: 'slick-track', style: this.props.trackStyle },
	      slides
	    );
	  }
	});

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Dots = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(423);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getDotCount = function getDotCount(spec) {
	  var dots;
	  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
	  return dots;
	};

	var Dots = exports.Dots = _react2.default.createClass({
	  displayName: 'Dots',


	  clickHandler: function clickHandler(options, e) {
	    // In Autoplay the focus stays on clicked button even after transition
	    // to next slide. That only goes away by click somewhere outside
	    e.preventDefault();
	    this.props.clickHandler(options);
	  },
	  render: function render() {
	    var _this = this;

	    var dotCount = getDotCount({
	      slideCount: this.props.slideCount,
	      slidesToScroll: this.props.slidesToScroll
	    });

	    // Apply join & split to Array to pre-fill it for IE8
	    //
	    // Credit: http://stackoverflow.com/a/13735425/1849458
	    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map(function (x, i) {

	      var leftBound = i * _this.props.slidesToScroll;
	      var rightBound = i * _this.props.slidesToScroll + (_this.props.slidesToScroll - 1);
	      var className = (0, _classnames2.default)({
	        'slick-active': _this.props.currentSlide >= leftBound && _this.props.currentSlide <= rightBound
	      });

	      var dotOptions = {
	        message: 'dots',
	        index: i,
	        slidesToScroll: _this.props.slidesToScroll,
	        currentSlide: _this.props.currentSlide
	      };

	      var onClick = _this.clickHandler.bind(_this, dotOptions);

	      return _react2.default.createElement(
	        'li',
	        { key: i, className: className },
	        _react2.default.cloneElement(_this.props.customPaging(i), { onClick: onClick })
	      );
	    });

	    return _react2.default.createElement(
	      'ul',
	      { className: this.props.dotsClass, style: { display: 'block' } },
	      dots
	    );
	  }
	});

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.NextArrow = exports.PrevArrow = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(423);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _helpers = __webpack_require__(420);

	var _helpers2 = _interopRequireDefault(_helpers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PrevArrow = exports.PrevArrow = _react2.default.createClass({
	  displayName: 'PrevArrow',


	  clickHandler: function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  },
	  render: function render() {
	    var prevClasses = { 'slick-arrow': true, 'slick-prev': true };
	    var prevHandler = this.clickHandler.bind(this, { message: 'previous' });

	    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
	      prevClasses['slick-disabled'] = true;
	      prevHandler = null;
	    }

	    var prevArrowProps = {
	      key: '0',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(prevClasses),
	      style: { display: 'block' },
	      onClick: prevHandler
	    };
	    var prevArrow;

	    if (this.props.prevArrow) {
	      prevArrow = _react2.default.cloneElement(this.props.prevArrow, prevArrowProps);
	    } else {
	      prevArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '0', type: 'button' }, prevArrowProps),
	        ' Previous'
	      );
	    }

	    return prevArrow;
	  }
	});

	var NextArrow = exports.NextArrow = _react2.default.createClass({
	  displayName: 'NextArrow',

	  clickHandler: function clickHandler(options, e) {
	    if (e) {
	      e.preventDefault();
	    }
	    this.props.clickHandler(options, e);
	  },
	  render: function render() {
	    var nextClasses = { 'slick-arrow': true, 'slick-next': true };
	    var nextHandler = this.clickHandler.bind(this, { message: 'next' });

	    if (!_helpers2.default.canGoNext(this.props)) {
	      nextClasses['slick-disabled'] = true;
	      nextHandler = null;
	    }

	    var nextArrowProps = {
	      key: '1',
	      'data-role': 'none',
	      className: (0, _classnames2.default)(nextClasses),
	      style: { display: 'block' },
	      onClick: nextHandler
	    };

	    var nextArrow;

	    if (this.props.nextArrow) {
	      nextArrow = _react2.default.cloneElement(this.props.nextArrow, nextArrowProps);
	    } else {
	      nextArrow = _react2.default.createElement(
	        'button',
	        _extends({ key: '1', type: 'button' }, nextArrowProps),
	        ' Next'
	      );
	    }

	    return nextArrow;
	  }
	});

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	var camel2hyphen = __webpack_require__(428);

	var isDimension = function (feature) {
	  var re = /[height|width]$/;
	  return re.test(feature);
	};

	var obj2mq = function (obj) {
	  var mq = '';
	  var features = Object.keys(obj);
	  features.forEach(function (feature, index) {
	    var value = obj[feature];
	    feature = camel2hyphen(feature);
	    // Add px to dimension features
	    if (isDimension(feature) && typeof value === 'number') {
	      value = value + 'px';
	    }
	    if (value === true) {
	      mq += feature;
	    } else if (value === false) {
	      mq += 'not ' + feature;
	    } else {
	      mq += '(' + feature + ': ' + value + ')';
	    }
	    if (index < features.length-1) {
	      mq += ' and '
	    }
	  });
	  return mq;
	};

	var json2mq = function (query) {
	  var mq = '';
	  if (typeof query === 'string') {
	    return query;
	  }
	  // Handling array of media queries
	  if (query instanceof Array) {
	    query.forEach(function (q, index) {
	      mq += obj2mq(q);
	      if (index < query.length-1) {
	        mq += ', '
	      }
	    });
	    return mq;
	  }
	  // Handling single media query
	  return obj2mq(query);
	};

	module.exports = json2mq;

/***/ },
/* 428 */
/***/ function(module, exports) {

	var camel2hyphen = function (str) {
	  return str
	          .replace(/[A-Z]/g, function (match) {
	            return '-' + match.toLowerCase();
	          })
	          .toLowerCase();
	};

	module.exports = camel2hyphen;

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var canUseDOM = __webpack_require__(430);
	var enquire = canUseDOM && __webpack_require__(431);
	var json2mq = __webpack_require__(427);

	var ResponsiveMixin = {
	  media: function (query, handler) {
	    query = json2mq(query);
	    if (typeof handler === 'function') {
	      handler = {
	        match: handler
	      };
	    }
	    canUseDOM && enquire.register(query, handler);

	    // Queue the handlers to unregister them at unmount  
	    if (! this._responsiveMediaHandlers) {
	      this._responsiveMediaHandlers = [];
	    }
	    this._responsiveMediaHandlers.push({query: query, handler: handler});
	  },
	  componentWillUnmount: function () {
	    if (this._responsiveMediaHandlers) {
	      this._responsiveMediaHandlers.forEach(function(obj) {
	        canUseDOM && enquire.unregister(obj.query, obj.handler);
	      });
	    }
	  }
	};

	module.exports = ResponsiveMixin;


/***/ },
/* 430 */
/***/ function(module, exports) {

	var canUseDOM = !!(
	  typeof window !== 'undefined' &&
	  window.document &&
	  window.document.createElement
	);

	module.exports = canUseDOM;

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * enquire.js v2.1.1 - Awesome Media Queries in JavaScript
	 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
	 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
	 */

	;(function (name, context, factory) {
		var matchMedia = window.matchMedia;

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = factory(matchMedia);
		}
		else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return (context[name] = factory(matchMedia));
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		else {
			context[name] = factory(matchMedia);
		}
	}('enquire', this, function (matchMedia) {

		'use strict';

	    /*jshint unused:false */
	    /**
	     * Helper function for iterating over a collection
	     *
	     * @param collection
	     * @param fn
	     */
	    function each(collection, fn) {
	        var i      = 0,
	            length = collection.length,
	            cont;

	        for(i; i < length; i++) {
	            cont = fn(collection[i], i);
	            if(cont === false) {
	                break; //allow early exit
	            }
	        }
	    }

	    /**
	     * Helper function for determining whether target object is an array
	     *
	     * @param target the object under test
	     * @return {Boolean} true if array, false otherwise
	     */
	    function isArray(target) {
	        return Object.prototype.toString.apply(target) === '[object Array]';
	    }

	    /**
	     * Helper function for determining whether target object is a function
	     *
	     * @param target the object under test
	     * @return {Boolean} true if function, false otherwise
	     */
	    function isFunction(target) {
	        return typeof target === 'function';
	    }

	    /**
	     * Delegate to handle a media query being matched and unmatched.
	     *
	     * @param {object} options
	     * @param {function} options.match callback for when the media query is matched
	     * @param {function} [options.unmatch] callback for when the media query is unmatched
	     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
	     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
	     * @constructor
	     */
	    function QueryHandler(options) {
	        this.options = options;
	        !options.deferSetup && this.setup();
	    }
	    QueryHandler.prototype = {

	        /**
	         * coordinates setup of the handler
	         *
	         * @function
	         */
	        setup : function() {
	            if(this.options.setup) {
	                this.options.setup();
	            }
	            this.initialised = true;
	        },

	        /**
	         * coordinates setup and triggering of the handler
	         *
	         * @function
	         */
	        on : function() {
	            !this.initialised && this.setup();
	            this.options.match && this.options.match();
	        },

	        /**
	         * coordinates the unmatch event for the handler
	         *
	         * @function
	         */
	        off : function() {
	            this.options.unmatch && this.options.unmatch();
	        },

	        /**
	         * called when a handler is to be destroyed.
	         * delegates to the destroy or unmatch callbacks, depending on availability.
	         *
	         * @function
	         */
	        destroy : function() {
	            this.options.destroy ? this.options.destroy() : this.off();
	        },

	        /**
	         * determines equality by reference.
	         * if object is supplied compare options, if function, compare match callback
	         *
	         * @function
	         * @param {object || function} [target] the target for comparison
	         */
	        equals : function(target) {
	            return this.options === target || this.options.match === target;
	        }

	    };
	    /**
	     * Represents a single media query, manages it's state and registered handlers for this query
	     *
	     * @constructor
	     * @param {string} query the media query string
	     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
	     */
	    function MediaQuery(query, isUnconditional) {
	        this.query = query;
	        this.isUnconditional = isUnconditional;
	        this.handlers = [];
	        this.mql = matchMedia(query);

	        var self = this;
	        this.listener = function(mql) {
	            self.mql = mql;
	            self.assess();
	        };
	        this.mql.addListener(this.listener);
	    }
	    MediaQuery.prototype = {

	        /**
	         * add a handler for this query, triggering if already active
	         *
	         * @param {object} handler
	         * @param {function} handler.match callback for when query is activated
	         * @param {function} [handler.unmatch] callback for when query is deactivated
	         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
	         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
	         */
	        addHandler : function(handler) {
	            var qh = new QueryHandler(handler);
	            this.handlers.push(qh);

	            this.matches() && qh.on();
	        },

	        /**
	         * removes the given handler from the collection, and calls it's destroy methods
	         * 
	         * @param {object || function} handler the handler to remove
	         */
	        removeHandler : function(handler) {
	            var handlers = this.handlers;
	            each(handlers, function(h, i) {
	                if(h.equals(handler)) {
	                    h.destroy();
	                    return !handlers.splice(i,1); //remove from array and exit each early
	                }
	            });
	        },

	        /**
	         * Determine whether the media query should be considered a match
	         * 
	         * @return {Boolean} true if media query can be considered a match, false otherwise
	         */
	        matches : function() {
	            return this.mql.matches || this.isUnconditional;
	        },

	        /**
	         * Clears all handlers and unbinds events
	         */
	        clear : function() {
	            each(this.handlers, function(handler) {
	                handler.destroy();
	            });
	            this.mql.removeListener(this.listener);
	            this.handlers.length = 0; //clear array
	        },

	        /*
	         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
	         */
	        assess : function() {
	            var action = this.matches() ? 'on' : 'off';

	            each(this.handlers, function(handler) {
	                handler[action]();
	            });
	        }
	    };
	    /**
	     * Allows for registration of query handlers.
	     * Manages the query handler's state and is responsible for wiring up browser events
	     *
	     * @constructor
	     */
	    function MediaQueryDispatch () {
	        if(!matchMedia) {
	            throw new Error('matchMedia not present, legacy browsers require a polyfill');
	        }

	        this.queries = {};
	        this.browserIsIncapable = !matchMedia('only all').matches;
	    }

	    MediaQueryDispatch.prototype = {

	        /**
	         * Registers a handler for the given media query
	         *
	         * @param {string} q the media query
	         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
	         * @param {function} options.match fired when query matched
	         * @param {function} [options.unmatch] fired when a query is no longer matched
	         * @param {function} [options.setup] fired when handler first triggered
	         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
	         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
	         */
	        register : function(q, options, shouldDegrade) {
	            var queries         = this.queries,
	                isUnconditional = shouldDegrade && this.browserIsIncapable;

	            if(!queries[q]) {
	                queries[q] = new MediaQuery(q, isUnconditional);
	            }

	            //normalise to object in an array
	            if(isFunction(options)) {
	                options = { match : options };
	            }
	            if(!isArray(options)) {
	                options = [options];
	            }
	            each(options, function(handler) {
	                queries[q].addHandler(handler);
	            });

	            return this;
	        },

	        /**
	         * unregisters a query and all it's handlers, or a specific handler for a query
	         *
	         * @param {string} q the media query to target
	         * @param {object || function} [handler] specific handler to unregister
	         */
	        unregister : function(q, handler) {
	            var query = this.queries[q];

	            if(query) {
	                if(handler) {
	                    query.removeHandler(handler);
	                }
	                else {
	                    query.clear();
	                    delete this.queries[q];
	                }
	            }

	            return this;
	        }
	    };

		return new MediaQueryDispatch();

	}));

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProductStore = __webpack_require__(236);

	var _ProductStore2 = _interopRequireDefault(_ProductStore);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	var _WeixinStore = __webpack_require__(433);

	var _WeixinStore2 = _interopRequireDefault(_WeixinStore);

	var _lib = __webpack_require__(297);

	var _Page = __webpack_require__(295);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View(props) {
	        _classCallCheck(this, View);

	        var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

	        _this.state = _extends({}, _UserStore2.default.me.data, {
	            idimg: "/img/idcardSample.jpg",
	            waiting: false,
	            showConfirm: false
	        });
	        _this.confirm = {
	            title: "提交确认",
	            buttons: [{
	                type: 'default',
	                label: '取消',
	                onClick: function onClick() {
	                    _this.setState({ showConfirm: false });
	                }
	            }, {
	                type: 'primary',
	                label: '加入我们',
	                onClick: function onClick() {
	                    _this.setState({ showConfirm: false });_this.onSubmit();
	                }
	            }]
	        };

	        if (_UserStore2.default.me.data.isSaler) {
	            props.router.push("/partner");
	        }
	        return _this;
	    }

	    _createClass(View, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            _UserStore2.default.me.on("change", function () {

	                if (_UserStore2.default.me.data.isSaler) {
	                    _this2.props.router.push("/partner");
	                }
	                _this2.setState(_extends({}, _UserStore2.default.me.data, { waiting: false }));
	            });
	        }
	    }, {
	        key: "showImage",
	        value: function showImage() {
	            var _this3 = this;

	            _WeixinStore2.default.chooseImage().then(function (idimg) {
	                _this3.setState({ idimg: idimg });
	                return _WeixinStore2.default.uploadImage(idimg);
	            }).then(function (serverid) {
	                var action = "util.saveID",
	                    name = "idcard.jpg";
	                _this3.setState({ waiting: true });
	                _UserStore2.default.send({ action: action, serverid: serverid, name: name });
	            });
	        }
	    }, {
	        key: "onSubmit",
	        value: function onSubmit() {
	            var isSaler = 1;
	            _UserStore2.default.send({ action: "user.update", isSaler: isSaler });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this4 = this;

	            return _react2.default.createElement(
	                _Page2.default,
	                { title: "\u6210\u4E3A markme\xB7\u5408\u4F19\u4EBA" },
	                _react2.default.createElement(
	                    _lib.Toast,
	                    { icon: "loading", show: this.state.waiting },
	                    "\u7167\u7247\u5206\u6790\u4E2D..."
	                ),
	                _react2.default.createElement(
	                    _lib.Cells,
	                    null,
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            "\u5F88\u9AD8\u5174\u80FD\u5728\u8FD9\u91CC\u8DDF\u4F60\u76F8\u9047\uFF0C\u8BA9markme\u643A\u624B\u4E0E\u4F60\u4E00\u8D77\u521B\u9020\u4E00\u4E2A\u5C5E\u4E8E\u6211\u4EEC\u7684\u672A\u6765\uFF0C\u4F60\u53EA\u9700\u4E0A\u4F20\u4F60\u7684\u8EAB\u4EFD\u6B63\u7167\u7247\u5373\u53EF\u6210\u4E3A ",
	                            _react2.default.createElement(
	                                "strong",
	                                null,
	                                "markme\xB7 \u5408\u4F19\u4EBA"
	                            ),
	                            " \uFF01"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: { position: 'relative' } },
	                    _react2.default.createElement("img", { style: { width: "100%", height: "200px" }, src: this.state.idimg }),
	                    _react2.default.createElement(
	                        _lib.ButtonArea,
	                        null,
	                        _react2.default.createElement(
	                            _lib.Button,
	                            { onClick: function onClick() {
	                                    _this4.showImage();
	                                } },
	                            "\u70B9\u51FB\u4E0A\u4F20\u8EAB\u4EFD\u8BC1"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _lib.Form,
	                    null,
	                    _react2.default.createElement(
	                        _lib.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u59D3\u540D\uFF1A"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(_lib.Input, { value: this.state.name, type: "text", placeholder: "" })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u51FA\u751F\u65E5\u671F\uFF1A"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(_lib.Input, { value: this.state.birth, type: "text", placeholder: "" })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u8EAB\u4EFD\u8BC1\u53F7\u7801\uFF1A"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(_lib.Input, { value: this.state.id, type: "text", placeholder: "" })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u6027\u522B\uFF1A"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(_lib.Input, { value: this.state.sex, type: "text", placeholder: "" })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.FormCell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u5730\u5740\uFF1A"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(_lib.Input, { value: this.state.address, type: "text", placeholder: "" })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _lib.Agreement,
	                    { checked: this.state.checked, onChange: function onChange(_ref) {
	                            var checked = _ref.target.checked;
	                            _this4.setState({ checked: checked });
	                        } },
	                    "\u786E\u8BA4\u4EE5\u4E0A\u8EAB\u4EFD\u4FE1\u606F\u5C5E\u4E8E\u672C\u4EBA\uFF0C\u4E14\u771F\u5B9E\u6709\u6548\uFF01",
	                    _react2.default.createElement("br", null),
	                    "markme \u7531\u5FC3\u800C\u751F\uFF0C\u65E8\u5728\u8D21\u732E\u6211\u4EEC\u81EA\u5DF1\u7684\u529B\u91CF\uFF0C\u4E3A\u6BCF\u4E00\u4F4D\u7528\u6237\u521B\u9020\u4ED6\u4EEC\u7684\u4EF7\u503C\uFF0C\u4ECE\u800C\u6709\u6211\u4EEC\u7684\u6536\u83B7\uFF0C\u6211\u4EEC\u6C38\u8FDC\u628A\u7528\u6237\u7684\u4EF7\u503C\u653E\u5728\u9996\u4F4D\uFF0C \u6210\u4E3A ",
	                    _react2.default.createElement(
	                        "strong",
	                        null,
	                        "markme\xB7 \u5408\u4F19\u4EBA"
	                    ),
	                    " \u610F\u5473\u7740\u60A8\u4E5F\u8BA4\u53EF\u6211\u4EEC\u7684\u4EF7\u503C\u89C2\uFF0C\u5E76\u4E00\u8D77\u884C\u52A8\uFF01"
	                ),
	                _react2.default.createElement(
	                    _lib.ButtonArea,
	                    null,
	                    _react2.default.createElement(
	                        _lib.Button,
	                        { disabled: !this.state.checked, onClick: function onClick() {
	                                _this4.setState({ showConfirm: true });
	                            } },
	                        "\u6210\u4E3A ",
	                        _react2.default.createElement(
	                            "strong",
	                            null,
	                            "markme\xB7 \u5408\u4F19\u4EBA"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _lib.Dialog,
	                    { title: this.confirm.title, buttons: this.confirm.buttons, show: this.state.showConfirm },
	                    "\u786E\u8BA4\u60A8\u8BA4\u540C\u6211\u4EEC\u7684\u4EF7\u503C\u89C2",
	                    _react2.default.createElement("br", null),
	                    "\u6210\u4E3A ",
	                    _react2.default.createElement(
	                        "strong",
	                        null,
	                        "markme\xB7 \u5408\u4F19\u4EBA"
	                    ),
	                    "\u3002"
	                )
	            );
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	exports.default = View;

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dispatcher = __webpack_require__(237);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _Model = __webpack_require__(290);

	var _Model2 = _interopRequireDefault(_Model);

	var _Store = __webpack_require__(292);

	var _Store2 = _interopRequireDefault(_Store);

	var _util = __webpack_require__(293);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Store = function (_BaseStore) {
	    _inherits(Store, _BaseStore);

	    function Store() {
	        _classCallCheck(this, Store);

	        return _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).apply(this, arguments));
	    }

	    _createClass(Store, [{
	        key: "previewImage",
	        value: function previewImage(current, urls) {
	            wx.previewImage({
	                current: current,
	                urls: urls
	            });
	        }
	    }, {
	        key: "chooseImage",
	        value: function chooseImage() {
	            return new Promise(function (resolve) {
	                wx.chooseImage({
	                    count: 1, // 默认9
	                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
	                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
	                    success: function success(res) {
	                        resolve(res.localIds[0]); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
	                    }
	                });
	            });
	        }
	    }, {
	        key: "uploadImage",
	        value: function uploadImage(localId) {
	            return new Promise(function (resolve) {
	                wx.uploadImage({
	                    localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
	                    isShowProgressTips: 1, // 默认为1，显示进度提示
	                    success: function success(res) {
	                        resolve(res.serverId); // 返回图片的服务器端ID
	                    }
	                });
	            });
	        }
	    }, {
	        key: "openAddress",
	        value: function openAddress() {
	            return new Promise(function (resolve) {
	                wx.openAddress({
	                    success: function success(data) {
	                        resolve(data);
	                    }
	                });
	            });
	        }
	    }]);

	    return Store;
	}(_Store2.default);

	var WeixinStore = new Store(_Model2.default);

	exports.default = WeixinStore;


	var actions = {
	    jsParam: function jsParam(param) {
	        //alert(JSON.stringify(param));
	        var def = {
	            //debug:true,
	            jsApiList: ['openAddress', "chooseWXPay", "chooseImage", "previewImage", "uploadImage"]
	        };
	        wx.config(_extends({}, def, param));
	    }
	};
	_dispatcher2.default.Reg(actions, "weixin");

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LoginView = __webpack_require__(435);

	var _LoginView2 = _interopRequireDefault(_LoginView);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginCtrl = function (_Component) {
	    _inherits(LoginCtrl, _Component);

	    function LoginCtrl() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, LoginCtrl);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginCtrl.__proto__ || Object.getPrototypeOf(LoginCtrl)).call.apply(_ref, [this].concat(args))), _this), _this._onLogin = function (username) {
	            _UserStore2.default.send({ "type": 'login', username: username });
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(LoginCtrl, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            _UserStore2.default.onLogin(function () {
	                console.log(_UserStore2.default);
	                _UserStore2.default.get("openid").length > 0 ? _this2.props.router.replace("/product/1") : _this2.render();
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            console.log(_UserStore2.default.get("uid"));

	            return _react2.default.createElement(_LoginView2.default, { onLogin: this._onLogin });
	        }
	    }]);

	    return LoginCtrl;
	}(_react.Component);

	exports.default = LoginCtrl;

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lib = __webpack_require__(297);

	var _lib2 = _interopRequireDefault(_lib);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginView = function (_Component) {
	    _inherits(LoginView, _Component);

	    function LoginView(props) {
	        _classCallCheck(this, LoginView);

	        var _this = _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this, props));

	        _this.state = { username: "default" };
	        return _this;
	    }

	    _createClass(LoginView, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("input", { type: "text",
	                    value: this.state.username,
	                    onChange: function onChange(e) {
	                        _this2.setState({ username: e.target.value });
	                    }
	                }),
	                _react2.default.createElement(
	                    _lib2.default.Button,
	                    {
	                        onClick: function onClick() {
	                            _this2.props.onLogin(_this2.state.username);
	                        }
	                    },
	                    "\u767B\u5F55"
	                ),
	                _react2.default.createElement("br", null)
	            );
	        }
	    }]);

	    return LoginView;
	}(_react.Component);

	exports.default = LoginView;

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProductStore = __webpack_require__(236);

	var _ProductStore2 = _interopRequireDefault(_ProductStore);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	var _WeixinStore = __webpack_require__(433);

	var _WeixinStore2 = _interopRequireDefault(_WeixinStore);

	var _lib = __webpack_require__(297);

	var _Page = __webpack_require__(295);

	var _Page2 = _interopRequireDefault(_Page);

	var _icon_nav_grid = __webpack_require__(447);

	var _icon_nav_grid2 = _interopRequireDefault(_icon_nav_grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, View);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this.grids = [{
	            icon: _react2.default.createElement("img", { src: _icon_nav_grid2.default }),
	            label: '我的订单',
	            href: '#/order'
	        }], _this.state = _extends({}, _UserStore2.default.me.data), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(View, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            _UserStore2.default.me.on("change", function () {
	                _this2.setState(_UserStore2.default.me.data);
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(
	                _Page2.default,
	                null,
	                _react2.default.createElement(
	                    _lib.Panel,
	                    null,
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        { access: true, link: true, onClick: function onClick() {
	                                return _this3.props.router.push("/myinfo");
	                            } },
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(
	                                _lib.MediaBox,
	                                { type: "appmsg", href: "javascript:void(0);" },
	                                _react2.default.createElement(
	                                    _lib.MediaBoxHeader,
	                                    null,
	                                    _react2.default.createElement("img", { src: this.state.headimgurl })
	                                ),
	                                _react2.default.createElement(
	                                    _lib.MediaBoxBody,
	                                    null,
	                                    _react2.default.createElement(
	                                        _lib.MediaBoxTitle,
	                                        null,
	                                        this.state.nickname
	                                    ),
	                                    _react2.default.createElement(
	                                        _lib.MediaBoxDescription,
	                                        null,
	                                        this.state.telNumber
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(_lib.CellFooter, null)
	                    )
	                ),
	                _react2.default.createElement(
	                    _lib.Panel,
	                    null,
	                    _react2.default.createElement(_lib.Grids, { data: this.grids })
	                )
	            );
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	exports.default = View;

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProductStore = __webpack_require__(236);

	var _ProductStore2 = _interopRequireDefault(_ProductStore);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	var _OrderStore = __webpack_require__(748);

	var _OrderStore2 = _interopRequireDefault(_OrderStore);

	var _WeixinStore = __webpack_require__(433);

	var _WeixinStore2 = _interopRequireDefault(_WeixinStore);

	var _lib = __webpack_require__(297);

	var _Page = __webpack_require__(295);

	var _Page2 = _interopRequireDefault(_Page);

	var _icon_nav_grid = __webpack_require__(447);

	var _icon_nav_grid2 = _interopRequireDefault(_icon_nav_grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _renderOrder(order, id) {
	    var product = _ProductStore2.default.get(order.product);
	    return _react2.default.createElement(
	        _lib.Cell,
	        { access: true, key: id },
	        _react2.default.createElement(
	            _lib.CellBody,
	            null,
	            _react2.default.createElement(
	                _lib.MediaBox,
	                { type: "appmsg", href: "javascript:void(0);" },
	                _react2.default.createElement(
	                    _lib.MediaBoxHeader,
	                    null,
	                    _react2.default.createElement("img", { src: product.piccover })
	                ),
	                _react2.default.createElement(
	                    _lib.MediaBoxBody,
	                    null,
	                    _react2.default.createElement(
	                        _lib.MediaBoxTitle,
	                        null,
	                        product.title
	                    ),
	                    _react2.default.createElement(_lib.MediaBoxDescription, null)
	                )
	            )
	        ),
	        _react2.default.createElement(_lib.CellFooter, null)
	    );
	}

	function _renderGroup(group) {
	    var orders = [];
	    for (var key in group) {
	        var order = group[key];
	        orders.push(_renderOrder(order, key));
	    }
	    return orders;
	}

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, View);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            orders: _OrderStore2.default.get()
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(View, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            _OrderStore2.default.on("change", function () {
	                _this2.setState({ orders: _OrderStore2.default.get() });
	            });
	            _ProductStore2.default.on("change", function () {
	                _this2.forceUpdate();
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var groups = {};
	            for (var oid in this.state.orders) {
	                var order = this.state.orders[oid];
	                var gid = order.nonce + "-" + order.provider;
	                if (!groups[gid]) groups[gid] = [];
	                groups[gid].push(order);
	            }
	            var comps = [];
	            for (var gid in groups) {
	                comps.push(_react2.default.createElement(
	                    _lib.Panel,
	                    { key: gid },
	                    _react2.default.createElement(
	                        _lib.PanelHeader,
	                        null,
	                        gid
	                    ),
	                    _renderGroup(groups[gid])
	                ));
	            }

	            return _react2.default.createElement(
	                _Page2.default,
	                { title: "\u6211\u7684\u8BA2\u5355" },
	                comps
	            );
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	exports.default = View;

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProductStore = __webpack_require__(236);

	var _ProductStore2 = _interopRequireDefault(_ProductStore);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View(props) {
	        _classCallCheck(this, View);

	        var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

	        _this.state = { "data": {} };
	        return _this;
	    }

	    _createClass(View, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "section",
	                null,
	                _react2.default.createElement(
	                    "h2",
	                    null,
	                    "\u5408\u4F19\u4EBA\u9996\u9875"
	                ),
	                _react2.default.createElement(
	                    "h3",
	                    null,
	                    "if\u672A\u6210\u4E3A\u5408\u4F19\u4EBA\u7684\u663E\u793A\u6210\u4E3A\u5408\u4F19\u4EBA\u6D41\u7A0B"
	                ),
	                _react2.default.createElement(
	                    "h3",
	                    null,
	                    "\u4E24\u4E2A\u6A21\u5757\uFF0C\u4EE3\u8D2D\u5408\u4F5C + \u5E73\u53F0\u5408\u4F5C"
	                ),
	                _react2.default.createElement(
	                    "h3",
	                    null,
	                    "\u4EE3\u8D2D\u5408\u4F5C\uFF1A\u663E\u793A\u81EA\u5DF1\u7684\u4EA7\u54C1\u5217\u8868\uFF0C\u9884\u89C8\u81EA\u5DF1\u7684\u9996\u9875"
	                ),
	                _react2.default.createElement(
	                    "h3",
	                    null,
	                    "\u5E73\u53F0\u5408\u4F5C\uFF1A\u663E\u793A\u81EA\u5DF1\u7684\u4EE3\u552E\u7684\u5E73\u53F0\u4EA7\u54C1"
	                ),
	                _react2.default.createElement(
	                    "h3",
	                    null,
	                    "\u5408\u4F5C\u4F19\u4F34\u4FE1\u606F \u8BA2\u5355\uFF0C\u7528\u6237\u7B49"
	                )
	            );
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	exports.default = View;

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProductView = __webpack_require__(440);

	var _ProductView2 = _interopRequireDefault(_ProductView);

	var _ProductStore = __webpack_require__(236);

	var _ProductStore2 = _interopRequireDefault(_ProductStore);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	var _CartStore = __webpack_require__(441);

	var _CartStore2 = _interopRequireDefault(_CartStore);

	var _WeixinStore = __webpack_require__(433);

	var _WeixinStore2 = _interopRequireDefault(_WeixinStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	_ProductStore2.default.on("payParam", function (data) {});

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, View);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            "data": {}
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(View, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            document.title = "example";
	            var id = Number.parseInt(this.props.params.id);
	            this.model = _ProductStore2.default.instance(id);
	            console.log(this.model);
	            this.setState({ "data": this.model.data });
	            this.model.on("change", function () {
	                return _this2.setState({ "data": _this2.model.data });
	            });
	            _UserStore2.default.on("change", function () {
	                return _ProductStore2.default.refresh(_this2.model);
	            });
	            _ProductStore2.default.refresh(this.model);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(_ProductView2.default, {
	                onCart: function onCart() {
	                    return _CartStore2.default.addCart(_this3.model.id);
	                },
	                onBuy: function onBuy() {
	                    return _ProductStore2.default.easyPay(_this3.model.id);
	                },
	                onPreview: _WeixinStore2.default.previewImage,
	                data: this.state.data
	            });
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	exports.default = View;

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lib = __webpack_require__(297);

	var _lib2 = _interopRequireDefault(_lib);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function filter(obj) {
	    var ret = [];
	    for (var key in obj) {
	        if (key.substring(0, 3) == "pic" && obj[key]) {
	            ret.push(obj[key]);
	        }
	    }
	    return ret;
	}

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        _classCallCheck(this, View);

	        return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
	    }

	    _createClass(View, [{
	        key: "render",
	        value: function render() {
	            var _this3 = this;

	            var _props$data = this.props.data,
	                piccover = _props$data.piccover,
	                price = _props$data.price,
	                title = _props$data.title,
	                props = _objectWithoutProperties(_props$data, ["piccover", "price", "title"]);

	            function onClick(current) {}
	            function _renderContent(data) {
	                var _this2 = this;

	                var doms = [];
	                for (var key in data) {
	                    if (key.substring(0, 3) == "pic" && data[key]) {
	                        doms.push(_react2.default.createElement("img", { key: key, onClick: function onClick() {
	                                return _this2.props.onPreview(data[key], Object.values(data));
	                            }, src: data[key] }));
	                    }
	                }
	                return doms;
	            }
	            var pics = filter(props);
	            return _react2.default.createElement(
	                _lib2.default.Article,
	                { className: "product" },
	                _react2.default.createElement(Cover, { src: piccover }),
	                _react2.default.createElement(Desc, { price: price, title: title }),
	                _react2.default.createElement(
	                    _lib2.default.ButtonArea,
	                    { direction: "horizontal" },
	                    _react2.default.createElement(
	                        _lib2.default.Button,
	                        { onClick: this.props.onCart, type: "primary", plain: true },
	                        "\u52A0\u5165\u8D2D\u7269\u8F66"
	                    ),
	                    _react2.default.createElement(
	                        _lib2.default.Button,
	                        { onClick: this.props.onBuy },
	                        "\u8D2D\u4E70"
	                    )
	                ),
	                _react2.default.createElement(
	                    _lib2.default.Cells,
	                    null,
	                    _react2.default.createElement(
	                        _lib2.default.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib2.default.CellBody,
	                            null,
	                            "\u5546\u54C1\u8BE6\u60C5\uFF1A"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "section",
	                    { className: "pics" },
	                    pics.map(function (url, id) {
	                        return _react2.default.createElement("img", { key: id, onClick: function onClick() {
	                                return _this3.props.onPreview(url, pics);
	                            }, src: url });
	                    })
	                )
	            );
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	exports.default = View;

	var Cover = function (_React$Component2) {
	    _inherits(Cover, _React$Component2);

	    function Cover() {
	        _classCallCheck(this, Cover);

	        return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
	    }

	    _createClass(Cover, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "section",
	                { className: "cover" },
	                _react2.default.createElement("img", { src: this.props.src })
	            );
	        }
	    }]);

	    return Cover;
	}(_react2.default.Component);

	var Desc = function (_React$Component3) {
	    _inherits(Desc, _React$Component3);

	    function Desc() {
	        _classCallCheck(this, Desc);

	        return _possibleConstructorReturn(this, (Desc.__proto__ || Object.getPrototypeOf(Desc)).apply(this, arguments));
	    }

	    _createClass(Desc, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "section",
	                { className: "desc" },
	                _react2.default.createElement(
	                    "h3",
	                    { className: "goods_name" },
	                    this.props.title
	                ),
	                _react2.default.createElement(
	                    "h1",
	                    { className: "price" },
	                    _react2.default.createElement(
	                        "span",
	                        { className: "now_price" },
	                        "\uFFE5",
	                        (this.props.price / 100).toFixed(2)
	                    ),
	                    _react2.default.createElement(
	                        "span",
	                        { className: "o_price" },
	                        "\uFFE5",
	                        (this.props.price / 90).toFixed(2)
	                    )
	                )
	            );
	        }
	    }]);

	    return Desc;
	}(_react2.default.Component);

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Model = __webpack_require__(290);

	var _Model2 = _interopRequireDefault(_Model);

	var _Store = __webpack_require__(292);

	var _Store2 = _interopRequireDefault(_Store);

	var _ProductStore = __webpack_require__(236);

	var _ProductStore2 = _interopRequireDefault(_ProductStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function fromStorage() {
	    var key = "cart";
	    var val = {};
	    if (localStorage[key]) {
	        try {
	            val = JSON.parse(localStorage[key]);
	        } catch (e) {}
	    }
	    return val;
	}

	function toStorage(val) {
	    var key = "cart";
	    localStorage[key] = JSON.stringify(val);
	}

	var __carts = fromStorage();

	var Store = function (_BaseStore) {
	    _inherits(Store, _BaseStore);

	    function Store() {
	        _classCallCheck(this, Store);

	        return _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).apply(this, arguments));
	    }

	    _createClass(Store, [{
	        key: "clearCart",
	        value: function clearCart() {
	            __carts = {};
	            toStorage(__carts);
	            this.emit("change");
	        }
	    }, {
	        key: "addCart",
	        value: function addCart(product) {
	            if (__carts[product]) {
	                __carts[product]++;
	            } else {
	                __carts[product] = 1;
	            }
	            toStorage(__carts);
	            this.emit("change");
	        }
	    }, {
	        key: "getCartCount",
	        value: function getCartCount() {
	            return Object.values(__carts).reduce(function (ret, val) {
	                return ret + val;
	            }, 0);
	        }
	    }, {
	        key: "getCartProduct",
	        value: function getCartProduct() {

	            return Object.keys(__carts).map(function (product) {
	                return _ProductStore2.default.get(product);
	            });
	        }
	    }, {
	        key: "getCart",
	        value: function getCart() {
	            return __carts;
	        }
	    }]);

	    return Store;
	}(_Store2.default);

	var CartStore = new Store();

	exports.default = CartStore;

/***/ },
/* 442 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CartPopup = exports.CartIcon = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProductStore = __webpack_require__(236);

	var _ProductStore2 = _interopRequireDefault(_ProductStore);

	var _CartStore = __webpack_require__(441);

	var _CartStore2 = _interopRequireDefault(_CartStore);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	var _lib = __webpack_require__(297);

	var _lib2 = _interopRequireDefault(_lib);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import Address from "./Address";


	var Cart = function (_React$Component) {
	    _inherits(Cart, _React$Component);

	    function Cart() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Cart);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            products: _CartStore2.default.getCartProduct(),
	            cart: _CartStore2.default.getCart(),
	            address: _UserStore2.default.getAddress()
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Cart, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            _UserStore2.default.me.on("change", function () {
	                _this2.setState({ address: _UserStore2.default.getAddress() });
	            });
	            _CartStore2.default.on("change", function () {
	                _this2.setState({ "products": _CartStore2.default.getCartProduct() });
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this3 = this;

	            var _state$address = this.state.address,
	                userName = _state$address.userName,
	                postalCode = _state$address.postalCode,
	                provinceName = _state$address.provinceName,
	                cityName = _state$address.cityName,
	                countryName = _state$address.countryName,
	                detailInfo = _state$address.detailInfo,
	                nationalCode = _state$address.nationalCode,
	                telNumber = _state$address.telNumber;

	            return _react2.default.createElement(
	                _lib.Panel,
	                null,
	                _react2.default.createElement(
	                    _lib.PanelHeader,
	                    null,
	                    _react2.default.createElement(
	                        _lib.Flex,
	                        null,
	                        _react2.default.createElement(
	                            _lib.FlexItem,
	                            null,
	                            "\u6536\u8D27\u5730\u5740\uFF1A",
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                provinceName
	                            ),
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                " ",
	                                cityName
	                            ),
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                " ",
	                                countryName
	                            ),
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                " ",
	                                detailInfo
	                            ),
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                " ",
	                                postalCode
	                            ),
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                "  ",
	                                userName,
	                                "  "
	                            ),
	                            _react2.default.createElement(
	                                "span",
	                                null,
	                                " ",
	                                telNumber
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib2.default.Button,
	                            { size: "small", plain: true, onClick: function onClick() {
	                                    _UserStore2.default.triggerAddress(true);
	                                } },
	                            "\u4FEE\u6539"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _lib.PanelBody,
	                    null,
	                    this.state.products.map(function (prod) {
	                        return _this3._renderProduct(prod);
	                    })
	                )
	            );
	        }
	    }, {
	        key: "_renderProduct",
	        value: function _renderProduct(prod) {
	            var _this4 = this;

	            var count = this.state.cart[prod.id];

	            return _react2.default.createElement(
	                _lib.MediaBox,
	                { onClick: function onClick() {
	                        return _this4.props.onProduct(prod.id);
	                    }, key: prod.id, type: "appmsg", href: "javascript:void(0);" },
	                _react2.default.createElement(
	                    _lib.MediaBoxHeader,
	                    null,
	                    _react2.default.createElement("img", { src: prod.piccover })
	                ),
	                _react2.default.createElement(
	                    _lib.MediaBoxBody,
	                    null,
	                    _react2.default.createElement(
	                        _lib.MediaBoxTitle,
	                        null,
	                        prod.title
	                    ),
	                    _react2.default.createElement(
	                        _lib.MediaBoxDescription,
	                        null,
	                        " \uFFE5" + prod.price + " * " + count + " = " + prod.price * count
	                    )
	                )
	            );
	        }
	    }]);

	    return Cart;
	}(_react2.default.Component);

	exports.default = Cart;

	var CartIcon = exports.CartIcon = function (_React$Component2) {
	    _inherits(CartIcon, _React$Component2);

	    function CartIcon() {
	        var _ref2;

	        var _temp2, _this5, _ret2;

	        _classCallCheck(this, CartIcon);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        return _ret2 = (_temp2 = (_this5 = _possibleConstructorReturn(this, (_ref2 = CartIcon.__proto__ || Object.getPrototypeOf(CartIcon)).call.apply(_ref2, [this].concat(args))), _this5), _this5.state = {
	            num: _CartStore2.default.getCartCount(),
	            showCart: false
	        }, _temp2), _possibleConstructorReturn(_this5, _ret2);
	    }

	    _createClass(CartIcon, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this6 = this;

	            _CartStore2.default.on("change", function () {
	                return _this6.setState({ "num": _CartStore2.default.getCartCount() });
	            });
	        }
	    }, {
	        key: "toggleCart",
	        value: function toggleCart() {
	            this.state.showCart || _UserStore2.default.triggerAddress();
	            this.setState({ showCart: !this.state.showCart });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var count = this.state.num ? _react2.default.createElement(
	                "span",
	                { className: "num" },
	                this.state.num
	            ) : "";
	            var Cart = _react2.default.createElement(CartPopup, { show: this.state.showCart, onClose: function onClose() {} });

	            return _react2.default.createElement(
	                "div",
	                { onClick: this.toggleCart.bind(this), className: "cart" },
	                _react2.default.createElement(
	                    _lib2.default.Icon,
	                    { value: "waiting" },
	                    count
	                ),
	                Cart
	            );
	        }
	    }]);

	    return CartIcon;
	}(_react2.default.Component);

	var CartPopup = exports.CartPopup = function (_React$Component3) {
	    _inherits(CartPopup, _React$Component3);

	    function CartPopup() {
	        _classCallCheck(this, CartPopup);

	        return _possibleConstructorReturn(this, (CartPopup.__proto__ || Object.getPrototypeOf(CartPopup)).apply(this, arguments));
	    }

	    _createClass(CartPopup, [{
	        key: "render",
	        value: function render() {
	            var _this8 = this;

	            return _react2.default.createElement(
	                _lib2.default.Popup,
	                { show: this.props.show },
	                _react2.default.createElement(_lib.PopupHeader, {
	                    left: "\u5173\u95ED",
	                    right: _react2.default.createElement(
	                        _lib2.default.Button,
	                        { size: "small" },
	                        "\u8D2D\u4E70"
	                    ),
	                    leftOnClick: this.props.onClose,
	                    rightOnClick: function rightOnClick() {
	                        _this8.props.onClose();_ProductStore2.default.cartPay();
	                    }
	                }),
	                _react2.default.createElement(Cart, null)
	            );
	        }
	    }]);

	    return CartPopup;
	}(_react2.default.Component);

/***/ },
/* 447 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABIpJREFUaAXtWk9IVEEYn2/LSomIiAJDMLU6GWkQ/TtoGQSdDDL04iYdulqXDhF76FBQdO0Q/iFIMqhLQaCmh0oI0sgumlYQGkVERGilven7vX2zvre7rr6debgub2D3zXvzfd/8fvPNm/m+4QkRlnAEcnoEKB26A60vCr/9mD4qhagUUq5NJ5Mzz4j+MImRzRuL+gZvHpxJxpVCcNfZ3t2zs+K+EHJnsnBu39NYQYE4NXq77o0bp4cgPPfl+/RrkCNBw+zBJxGSf90KuVa3JK1hEselkFVC0NjWTUV73J5c7QaMaanIlWxftW8gVjvnbs/Vek2s//KnD/9egmScg3iksEZUBVf7nYtfn6wUcsANrJhtqCsOqKN4CKoFJdenZRy69z+BOWlR9BL06uTFXUhwpbsx9GDowRwfgbyfop5IJghnSClpR8vTKkuIXWTJYvQhIzTFIzv6ru3IMBHx3hxcCYxg+bnnW+TM74sV0b4GDqG2gUKCiSUFExbcNlnW3NdNheuuTtw69DUImoFM0fLm3gtiZmZCCKvVJkf0kQPiLorQDfvHdcHP4sStVsjaOgEwNOrBmmj/uk9yro2BNwIrZyQPmdCV8fajQ+mwV5zpq5aWvMTy9dx+vby5Z28JrW4Z6Kj9nU4+m2dGCcbJiUb21k+ejk0TnXWPM4FyiJ8sa+45wTp3WaeRbUClKZOenzZjUxRTDABtciQOv+88lpGcGyRkJes4A9NocroaIYgFhQHHABqee99xbAR1PwU60HV0Yo5NPybSyhohiNWS36P1eOf8eC4ZEXRhA7ZgM7k9m3ttgtjniKzT6BwLSjYg3DrKBgnZANvutmzq2gQrov3VUopiLPsLrZZ+gNk2nC0Etv3oppPVJigj8dM3knIwXQfZPFO2lO1sbCgdbYIq/BIcfimj2lfHVsK2hkFtghp9L6pK/CIuKrSIgDZBBM52H04gvUh/S2uWwo5dLaLPS1NYWEqbIFk0BvO8lh5YuBt/Ley2/dBgcKP+NFOltQmOd9QO8VSa4iPHUsSWqV34e2LbYFu8H04infKnnSqtTRD5nJSRezCNwDm1C39PlA0pqNtErqhNEPCLCuQ1HvFfyAoQOPujNC8NXdiALeSI8y3Z14wQfHu77gtDiAEGsoKyaE8l6n4KdKDr6MRMJcBGCAIUp0Y3GGAXLxAb+BDimR9P2ukS69i6bAO2/AxOJlljBNEJklVFkm8fcdrzINPCgzbIQFaRgw3YMlWMJrxOJt7EoF8xwBjeJ1406suivR/t8Mu1Z2JbsSyrFETwzkEenuNzDqPFKEGFDEA5n7sjOOVBpsHLbCl7qFTwYVOicISO7cVegQM8dAqEIEg4i8R5JnfBzjg4KFexJaIfBAjj7dhDV+ixofKUQwBTFj9PoU7PbSA3RheZQBBqGg0Jag7gsquHHlx2F2gCCD2oOYDLru71IH/YBkT4PGrZkfkEkMDscFDqHoIcKNtH7nw9zp9HBRblqM5NXYEVmGFPcVC2+X6+5OPHeB6CoJrXn1MqX+bTB7GKU3gNRyBHR+A/KFjbvWAqMXEAAAAASUVORK5CYII="

/***/ },
/* 448 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA5CAYAAABj2ui7AAAAAXNSR0IArs4c6QAACSNJREFUaAXtmn1sm8Udx+8e20lwlzQppXsR2pTYTSmd6F5QC9WGmsYZZYpKK6BM25SXtmxjiEmbaDcYIw2gSmNsk1YYg7Y0zaTRUEAtqnhR7YShia2MsUEHbVI7QIfGtrY4L2ua2H7u9v3d43MfJ/FrYsebdn/4OT/3u999P8+9PHf3HGP/44EXku8m+aTj9ZderDVMs9Y0WCUXvJLKk4YcdQpjxHTwdz+3+tp3DvCNZqF0zCrg1a9896LT4x82ScHXSCZWc8mWSsbK0omHgIjk7DhnxkvckL2XVCw48vtVPz+fLk8uabMCWB9oWRGT7JsAuhFAVQkBnOEvO4VCQogNMc5GVZpklYhXI9GD/59EWkIHIiMAfsrJ2aMDjd2vJnzlGUk4zif/Zf5b6iMssoNJeYPOzzl7H8KfdTDj4EJ3ze8y1QbV+pmx8BdMJtZDzDop2aXaF+P86TJWdtcJ366BxL0cI3kBftq/5aNjMtrBubwFgpwo8xzn/GHpcBwYbHj8tRw1JJnX9W26kpuxjfD7bSTMwwOLScl3ubmr86++3f9MMs7iT86AnkDLBib5PillJRWO+O4KJ+98q6HrH1mUl7XJsr62j43HZAfjcgs9RDxANG/eEvJ1HczaCQxzAvQcab1bcnkv9RnAHXKx8m0zaT7ZCKVuEGUTDwDyeqhF8fyeUNO++7PJSzZZAVI/+dfY2b0o5GbkMQ1ubAv6un6WbSGzYef1t31PSPEAfDnwcHsWuS9uz9S/qdyMgJ9/7RvucHi8F7YrYT6MqvsKmskLlLnYweNvW4uusR9v0vko+2hNTcWaP1352Fg6HUa6RDjj4aGJbtisBFjI6eRXzRUc6aSySQO0DJIm0kYaKS1VSAu42N/eoV4BnIWli1830NB1IpWjYt0nDdCyFm0vTNqUxjSFp6T3BtpuQpvvwYAinNy5dsD3uD+Nn6In1fs3+WIy9gJADdTSxqCv+6npREwLuDSw+VMTIvY22rob+b8TauraOV3mub7nOdJ2O57/LzA2jJUbzsuPN+55b7KmaZtoRETvU3Cc7y9VOAIhbeiPNOi4Lc2T8RibAljfu2k5XnNf44xPSFn+/alZSusOaVRaoZm0T1Y3BdA0Yz/GE6H7OwebHjs1OUOp/Y9rRBeSWJWR9uSQBOgJtGOZw66lEcpd4d6RbFq6/5RWGumhnRjsSpMAmTBvo0S0658e++IjYbthKcdJK2lWGuMMWm8CcNkrmxfgZjMlOKTjCW0wV1dv35ZLV/dtp5VKVsGmuTnOovIlAMfPm+tQxVh982N459FMYc5CXaDtW8KMnPqb+e5D2YqwNPNjxEAsOl8CEFOeRrrJDXZIJ87FleCYFL+0yuZ9uWjQ2jUL5U0A4o3fQDek4ZgzQDsc9Nwa8u3tIU3ZBq1ds1A+xBm7zH/bxRE5egZ/RkJN3TRTL3qYCtf9aK4iaOLt9bcOoZlWlfHKhSd8D59VNRjlY0vizvLe+8hVjN1+NuDIH0ZSsDHFoJkUIJdmnVUgP2ldi/c7W3AXFFsMmineB7lqllhZfXjBsPCx2YfDGJJgsJgUoJDWjjPWV9jYKU4oBJxSHmfQTOpFanBhCLRezg2RK57a0hga78E+yYuhxu6s3lsFg4N4YpBSMGIiFvUjpWHVHBfq20EukMOjYgFG37XwudMTaP1hpryFhFNlxxk0k9UHDb2lbrXbTCLt6cGG3e/jqX2V9kilkPengyw4HAmTcYY4kwXI+CmVJmWdXXy28WBj14FMkEWBIz7NIMV7pF8BOpjZT3+wcNTvQ/qbU0gHWSw4EqwZnBXOOFMco87fSrtU1dzpWhxq2BPMic5mTJtV6OS/UdvtBr8buwNn9dwSfRXTr9xnKDb3aaOevs1eGYuepPXsoK+bVkf2uaj8rcptxq5P6yVD4uSaZEI8QlkKDadkxbWjrJe1TNVErT+cdq+pDa/Xifle7ZAgo53Zgtac1nlBu8VC9xOAZdx5iMTgWa/yvtx+ic6U75Ug8Y1wFT4krC5ks9T6LM18FTEolnhCApD2FDFVRdXiC3p05rVI/gd8XX882bgPPgsfZERsIO3EYN8fTQCSBMzGd9FVCnHnsre2p/22TnalEkgrmucPSI9m0NqSAL/eWPsELN5EYu35DwZv1Ualfo1rrSXtisEmGP0/OeAL7nWYdj2HmckZ/pH5nuBVO0eSLUrrn/cPt1fJfw+H8FpaiC2LL2M+/LxdYVINUgIZoJr7KIMYHb7TblyKcdKo4KB5MhzpnQJIN3GYYJs1orKt3kDrl+heKYa4tq2kVWmeRuS0gNZJCb4d9g4so3roO/k0eef0FmkibaQRX8A6Up3umNIHtWqMStjAadsvmdyIJzRQ5TBW/qWha0inz+X1M31t1SOmOIq3dj3mnk/iUMLNqfRMW4NkTBs41TXl7bi+To5GTfkMdehUjop1nzSQFgUHbaQxXdkpa1Bnoi10EYvQkaqPw/g4c7rWzWQyrv3mc6XJNItFn8V0aynyf2A4y1bQejSdr5Q1qDORg3LDdTWa6RvkWMZiR+t6W9UuuLYpxpXKpLIVHLSQpkxwpCtjDWrxV7xxx7xzp0//Gn1zA63eMQDfu8hd82A2Z1W0j3yu1hmd8B2MiXvUEoyxZ+YtWtTy5vIHz2XjL2tAcqYGnkBrJwr6Ef1HB/87jkB2fHZN897ZPvNJZ03/3Hu4HUczOzHQfUKVx9l9wcZ9OCOnNnjpVsaQE6D2tjjQeo0p2U9AvILuocC3MYvonF9VfjjTwRztI9WVdumGRyaaMZvqwAO9XNlx/ireBVvzmbjnBajFef0tN+JtsgNPeLElhJ3HWbIj+AB+0HAZh4PX7D2tbdNdaakjoqKZC7Yeh9GaMEJeRPZoISdRWXelOiKSzqdOmxEgOcETd4WHI5uxBMFnL7ZcO4Y8gb56HLXcjyoOoqAhiFfbk3gIlRgsqpHmRdoSNHmMiupcgJUdgwi+4/2qZn7ZHrSI6AWfucdmDGgvcom/5QqT8Ruw87oGzXYlmpjLnp4qDtsobI8anPc6mHy639dNK5pZCbMKaFekTvJOhJcIk2pIYikjqzA0WIfS6Wiz5CMAe8dwyP6F5TX9hR6N7dr+H/9vegL/Adaw8oJ/tgxLAAAAAElFTkSuQmCC"

/***/ },
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	var _lib = __webpack_require__(297);

	var _Page = __webpack_require__(295);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, View);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this.state = _UserStore2.default.me.data, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(View, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            _UserStore2.default.me.on("change", function () {
	                return _this2.setState(_UserStore2.default.me.data);
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                _Page2.default,
	                null,
	                _react2.default.createElement(
	                    _lib.Cells,
	                    null,
	                    _react2.default.createElement(
	                        _lib.CellsTitle,
	                        null,
	                        "\u6536\u8D27\u4FE1\u606F"
	                    ),
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u6536\u8D27\u5730\u5740"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellFooter,
	                            null,
	                            this.state.provinceName,
	                            this.state.cityName,
	                            this.state.countryName,
	                            this.state.detailInfo
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u6536\u8D27\u4EBA\u59D3\u540D"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellFooter,
	                            null,
	                            this.state.userName
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u90AE\u7F16"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellFooter,
	                            null,
	                            this.state.postalCode
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _lib.Cells,
	                    null,
	                    _react2.default.createElement(
	                        _lib.CellsTitle,
	                        null,
	                        "\u5B9E\u540D\u8BA4\u8BC1\u4FE1\u606F"
	                    ),
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u59D3\u540D"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellFooter,
	                            null,
	                            this.state.name
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u51FA\u751F\u65E5\u671F"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellFooter,
	                            null,
	                            this.state.birth
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u8EAB\u4EFD\u8BC1\u53F7\u7801"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellFooter,
	                            null,
	                            this.state.id
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellBody,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u6027\u522B"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellFooter,
	                            null,
	                            this.state.sex
	                        )
	                    ),
	                    _react2.default.createElement(
	                        _lib.Cell,
	                        null,
	                        _react2.default.createElement(
	                            _lib.CellHeader,
	                            null,
	                            _react2.default.createElement(
	                                _lib.Label,
	                                null,
	                                "\u5730\u5740"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _lib.CellFooter,
	                            null,
	                            this.state.address
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return View;
	}(_react2.default.Component);

	exports.default = View;

/***/ },
/* 747 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAA58mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNS0xMC0yOVQxNzoyNjo1OSswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE1LTEwLTI5VDE3OjQ0OjI3KzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNS0xMC0yOVQxNzo0NDoyNyswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo2YThmODIxYy0zMDExLTQ5MmMtOGEwOS1lYWIwZDYxZjA4ZjI8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDplNDBjYjFkZS1iZWFmLTExNzgtOGRjOS05NWNhNmFkNjk3NjQ8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDoyODkwZjA2OC0zYWM5LTRhNjEtYjczMS03MjkzYzNhODBhYWM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6Mjg5MGYwNjgtM2FjOS00YTYxLWI3MzEtNzI5M2MzYTgwYWFjPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTEwLTI5VDE3OjI2OjU5KzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NmE4ZjgyMWMtMzAxMS00OTJjLThhMDktZWFiMGQ2MWYwOGYyPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTEwLTI5VDE3OjQ0OjI3KzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pjy6LxwAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAYBJREFUeNrsmb9Lw1AUhb8Uf2xCZ8dMgmB1cHDOICiOBcUhk9ZJ/UdEcdAxg9DBSVFwyC4uoiI4ZXR2Voe4XCE+0hhLa0I5F8KFm3Du+x7h3JDnpWnKKEeDEQ8BClCAAhSgAAUoQAEKUIACFKAABShAAf5/jOUV/TCeADrAOjBr5WegC5wmUfBRtkHVWp7729AP42ngCmj16PMArCZR8FpiQZVrNXJ26FvkFmgDU3a1rdYCrv0wniyx25Vrua/odkZkJYmCt8y9cz+MY2u0BGwBxwXrqoWWazIblg8dEQCsduQ82ytqoeUCLli+KGh2aXn+l0XVQqufMTFu+XMALj50LRfw3vJagdByxp6LohZaLmDX8p4fxs0cN2sCu86zvaIWWj/moFnsHTBnjnUA3GR2aN+c6glYTKLgvcDaa6HVz6B/NKsexHAeupaXdwBqg3UH2ARmrPwCnAEnfXxeVabl6YRXgAIUoAAFKEABClCAAhSgAAUoQAEKUIAC/GN8DQBrOd0Ng6XHEwAAAABJRU5ErkJggg=="

/***/ },
/* 748 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dispatcher = __webpack_require__(237);

	var _dispatcher2 = _interopRequireDefault(_dispatcher);

	var _Model = __webpack_require__(290);

	var _Model2 = _interopRequireDefault(_Model);

	var _Store = __webpack_require__(292);

	var _Store2 = _interopRequireDefault(_Store);

	var _UserStore = __webpack_require__(240);

	var _UserStore2 = _interopRequireDefault(_UserStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _combines = [];

	var Model = function (_BaseModel) {
	    _inherits(Model, _BaseModel);

	    function Model() {
	        _classCallCheck(this, Model);

	        return _possibleConstructorReturn(this, (Model.__proto__ || Object.getPrototypeOf(Model)).apply(this, arguments));
	    }

	    return Model;
	}(_Model2.default);

	var Store = function (_BaseStore) {
	    _inherits(Store, _BaseStore);

	    function Store() {
	        _classCallCheck(this, Store);

	        return _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).apply(this, arguments));
	    }

	    _createClass(Store, [{
	        key: "arrange",
	        value: function arrange() {}
	    }]);

	    return Store;
	}(_Store2.default);

	var OrderStore = new Store(Model);
	exports.default = OrderStore;


	_UserStore2.default.on("login", function () {
	    _UserStore2.default.send({ action: "order.getMyOrder" });
	});

	_dispatcher2.default.Reg({
	    combines: function combines(_ref) {
	        var _combines2 = _ref.combines;

	        _combines = _combines2;
	    },
	    orders: function orders(_ref2) {
	        var _orders = _ref2.orders;


	        OrderStore.set(_orders);
	    }
	}, "order");

/***/ }
]);