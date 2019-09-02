'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var search = function (_wepy$page) {
    _inherits(search, _wepy$page);

    function search() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = search.__proto__ || Object.getPrototypeOf(search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '搜索',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index',
                'wxc-search': '../../packages/@minui/wxc-search/dist/index'
            }
        }, _this.components = {}, _this.data = {
            currentTab: 1,
            navbar: ['请选择分类：', '企业', '人物', '发布', '产品']
        }, _this.methods = {
            // tab切换
            navbarTap: function navbarTap(status) {
                if (status == 0) {
                    return;
                } else {
                    this.currentTab = status;
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(search, [{
        key: 'onLoad',
        value: function onLoad(options) {
            if (options.currentTab) this.currentTab = options.currentTab;
        }
    }]);

    return search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(search , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjdXJyZW50VGFiIiwibmF2YmFyIiwibWV0aG9kcyIsIm5hdmJhclRhcCIsInN0YXR1cyIsImV2ZW50cyIsIm9wdGlvbnMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFZLDJDQURDO0FBRWIsOEJBQWM7QUFGRDtBQUZaLFMsUUFPVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0hDLHdCQUFZLENBRFQ7QUFFSEMsb0JBQU8sQ0FDSCxRQURHLEVBRUgsSUFGRyxFQUdILElBSEcsRUFJSCxJQUpHLEVBS0gsSUFMRztBQUZKLFMsUUFVUEMsTyxHQUFVO0FBQ047QUFDQUMscUJBRk0scUJBRUlDLE1BRkosRUFFVztBQUNmLG9CQUFHQSxVQUFVLENBQWIsRUFBZTtBQUNYO0FBQ0gsaUJBRkQsTUFFSztBQUNELHlCQUFLSixVQUFMLEdBQWtCSSxNQUFsQjtBQUNIO0FBQ0Y7QUFSSyxTLFFBV1ZDLE0sR0FBUyxFOzs7OzsrQkFDRkMsTyxFQUFTO0FBQ1osZ0JBQUdBLFFBQVFOLFVBQVgsRUFBdUIsS0FBS0EsVUFBTCxHQUFrQk0sUUFBUU4sVUFBMUI7QUFDMUI7Ozs7RUFsQytCTyxlQUFLQyxJOztrQkFBcEJkLE0iLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VhcmNoIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57SiJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1zZWFyY2gnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1zZWFyY2gvZGlzdC9pbmRleCdcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGN1cnJlbnRUYWI6IDEsXHJcbiAgICAgICAgbmF2YmFyOltcclxuICAgICAgICAgICAgJ+ivt+mAieaLqeWIhuexu++8micsXHJcbiAgICAgICAgICAgICfkvIHkuJonLFxyXG4gICAgICAgICAgICAn5Lq654mpJyxcclxuICAgICAgICAgICAgJ+WPkeW4gycsXHJcbiAgICAgICAgICAgICfkuqflk4EnXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLy8gdGFi5YiH5o2iXHJcbiAgICAgICAgbmF2YmFyVGFwKHN0YXR1cyl7XHJcbiAgICAgICAgICBpZihzdGF0dXMgPT0gMCl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBzdGF0dXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuY3VycmVudFRhYikgdGhpcy5jdXJyZW50VGFiID0gb3B0aW9ucy5jdXJyZW50VGFiXHJcbiAgICB9O1xyXG4gICAgLy8gT3RoZXIgcHJvcGVydGllc1xyXG59XHJcbiJdfQ==