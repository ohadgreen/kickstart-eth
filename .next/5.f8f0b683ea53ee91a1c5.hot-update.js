webpackHotUpdate(5,{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(493);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\js\\ethereum_dev\\udemy_course\\kickstart\\pages\\index.js?entry';


var CampaignIndex = function (_React$Component) {
    (0, _inherits3.default)(CampaignIndex, _React$Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'Campaigns Index', _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, this.props.campaigns[0]));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;

                                console.log('campaigns: ' + campaigns);
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react2.default.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImZhY3RvcnkiLCJDYW1wYWlnbkluZGV4IiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRWQ7Ozs7Ozs7Ozs7O2lDQU9PLEFBQ0w7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGFBQUEsRUFDQSxtQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNTO0FBRFQ7QUFBQSxvQkFDUyxBQUFLLE1BQUwsQUFBVyxVQUh4QixBQUNJLEFBQ0EsQUFDUyxBQUFxQixBQUlyQzs7Ozs7Ozs7Ozs7O3VDQWIyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEEsQUFBdUM7O2lDQUF6RDtBLHFEQUNOOzt3Q0FBQSxBQUFRLElBQUksZ0JBQVosQUFBNEI7aUVBQ3JCLEVBQUUsVyxBQUFGLEFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFKQSxnQkFBTSxBLEFBbUJsQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9qcy9ldGhlcmV1bV9kZXYvdWRlbXlfY291cnNlL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\js\\ethereum_dev\\udemy_course\\kickstart\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\js\\ethereum_dev\\udemy_course\\kickstart\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mOGYwYjY4M2VhNTNlZTkxYTFjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/N2I5NjhmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuXHJcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHsgLy8gbGlmZWN5Y2xlIGZ1bmN0aW9uIHRoYXQgZW5iYWxlcyBuZXh0IHRvIHJ1biBzdHVmZiBiZWZvcmUgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcclxuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbXBhaWduczogJyArIGNhbXBhaWducyk7XHJcbiAgICAgICAgcmV0dXJuIHsgY2FtcGFpZ25zOiBjYW1wYWlnbnMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5DYW1wYWlnbnMgSW5kZXhcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYW1wYWlnbnNbMF19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7QUFSQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMQTtBQUNBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=