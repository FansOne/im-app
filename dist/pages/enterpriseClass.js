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

var listData = require('./../utils/listEnterpriseData.js');

var enterpriseClass = function (_wepy$page) {
    _inherits(enterpriseClass, _wepy$page);

    function enterpriseClass() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, enterpriseClass);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = enterpriseClass.__proto__ || Object.getPrototypeOf(enterpriseClass)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '更多企业',
            usingComponents: {
                'wxc-search': '../../packages/@minui/wxc-search/dist/index',
                'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index'
            }
        }, _this.components = {}, _this.data = {
            typeData: [], // 列表数据
            contentActive: '', // 内容栏id
            navActive: 0, // 导航栏选中id
            heightArr: [],
            containerH: 0,
            defaultImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561715730636&di=84490d3635632313973d0ec3f63c74db&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F2a%2Fj6%2FQJ6998324315.jpg'
        }, _this.methods = {
            // 左侧导航栏点击事件
            chooseType: function chooseType(e) {
                var id = e.currentTarget.dataset.id;
                var index = e.currentTarget.dataset.index;
                this.contentActive = id;
                this.navActive = index;
            },
            onScroll: function onScroll(e) {
                var scrollTop = e.detail.scrollTop;
                var scrollArr = this.heightArr;
                if (scrollTop >= scrollArr[scrollArr.length - 1] - this.containerH) {
                    return;
                } else {
                    for (var i = 0; i < scrollArr.length; i++) {
                        if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
                            this.navActive = 0;
                            this.$apply();
                        } else if (scrollTop >= scrollArr[i - 1] && scrollTop < scrollArr[i]) {
                            this.navActive = i;
                            this.$apply();
                        }
                    }
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(enterpriseClass, [{
        key: 'onReady',
        value: function onReady() {
            var _this2 = this;

            var query = wx.createSelectorQuery();
            var heightArr = [];
            var s = 0;
            query.selectAll('.pesticide').boundingClientRect(function (react) {
                react.forEach(function (res) {
                    s += res.height;
                    heightArr.push(s);
                });
                _this2.heightArr = heightArr;
                _this2.$apply();
            });
            query.select('.content').boundingClientRect(function (res) {
                // 计算容器高度
                _this2.containerH = res.height;
                _this2.$apply();
            }).exec();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.typeData = listData.data;
        }
    }]);

    return enterpriseClass;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(enterpriseClass , 'pages/enterpriseClass'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGVycHJpc2VDbGFzcy5qcyJdLCJuYW1lcyI6WyJsaXN0RGF0YSIsInJlcXVpcmUiLCJlbnRlcnByaXNlQ2xhc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0eXBlRGF0YSIsImNvbnRlbnRBY3RpdmUiLCJuYXZBY3RpdmUiLCJoZWlnaHRBcnIiLCJjb250YWluZXJIIiwiZGVmYXVsdEltZyIsIm1ldGhvZHMiLCJjaG9vc2VUeXBlIiwiZSIsImlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsIm9uU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZGV0YWlsIiwic2Nyb2xsQXJyIiwibGVuZ3RoIiwiaSIsIiRhcHBseSIsImV2ZW50cyIsInF1ZXJ5Iiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5IiwicyIsInNlbGVjdEFsbCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlYWN0IiwiZm9yRWFjaCIsInJlcyIsImhlaWdodCIsInB1c2giLCJzZWxlY3QiLCJleGVjIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGdDQUFSLENBQWpCOztJQUNxQkMsZTs7Ozs7Ozs7Ozs7Ozs7NE1BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFnQjtBQUNaLDhCQUFjLDZDQURGO0FBRVosZ0NBQWdCO0FBRko7QUFGWCxTLFFBT1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNIQyxzQkFBVSxFQURQLEVBQ1c7QUFDZEMsMkJBQWUsRUFGWixFQUVnQjtBQUNuQkMsdUJBQVcsQ0FIUixFQUdXO0FBQ2RDLHVCQUFXLEVBSlI7QUFLSEMsd0JBQVksQ0FMVDtBQU1IQyx3QkFBWTtBQU5ULFMsUUFRUEMsTyxHQUFVO0FBQ047QUFDQUMsc0JBRk0sc0JBRUtDLENBRkwsRUFFUTtBQUNWLG9CQUFJQyxLQUFLRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsRUFBakM7QUFDQSxvQkFBSUcsUUFBUUosRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXBDO0FBQ0EscUJBQUtYLGFBQUwsR0FBcUJRLEVBQXJCO0FBQ0EscUJBQUtQLFNBQUwsR0FBaUJVLEtBQWpCO0FBQ0gsYUFQSztBQVFOQyxvQkFSTSxvQkFRR0wsQ0FSSCxFQVFNO0FBQ1Isb0JBQUlNLFlBQVlOLEVBQUVPLE1BQUYsQ0FBU0QsU0FBekI7QUFDQSxvQkFBSUUsWUFBWSxLQUFLYixTQUFyQjtBQUNBLG9CQUFJVyxhQUFhRSxVQUFVQSxVQUFVQyxNQUFWLEdBQW1CLENBQTdCLElBQWtDLEtBQUtiLFVBQXhELEVBQW9FO0FBQ2hFO0FBQ0gsaUJBRkQsTUFFTztBQUNILHlCQUFLLElBQUljLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsVUFBVUMsTUFBOUIsRUFBc0NDLEdBQXRDLEVBQTJDO0FBQ3ZDLDRCQUFJSixhQUFhLENBQWIsSUFBa0JBLFlBQVlFLFVBQVUsQ0FBVixDQUFsQyxFQUFnRDtBQUM1QyxpQ0FBS2QsU0FBTCxHQUFpQixDQUFqQjtBQUNBLGlDQUFLaUIsTUFBTDtBQUNILHlCQUhELE1BR08sSUFBSUwsYUFBYUUsVUFBVUUsSUFBSSxDQUFkLENBQWIsSUFBaUNKLFlBQVlFLFVBQVVFLENBQVYsQ0FBakQsRUFBK0Q7QUFDbEUsaUNBQUtoQixTQUFMLEdBQWlCZ0IsQ0FBakI7QUFDQSxpQ0FBS0MsTUFBTDtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBeEJLLFMsUUEyQlZDLE0sR0FBUyxFOzs7OztrQ0FDQTtBQUFBOztBQUNMLGdCQUFJQyxRQUFRQyxHQUFHQyxtQkFBSCxFQUFaO0FBQ0EsZ0JBQUlwQixZQUFZLEVBQWhCO0FBQ0EsZ0JBQUlxQixJQUFJLENBQVI7QUFDQUgsa0JBQU1JLFNBQU4sQ0FBZ0IsWUFBaEIsRUFBOEJDLGtCQUE5QixDQUFpRCxVQUFDQyxLQUFELEVBQVc7QUFDeERBLHNCQUFNQyxPQUFOLENBQWMsVUFBQ0MsR0FBRCxFQUFTO0FBQ25CTCx5QkFBS0ssSUFBSUMsTUFBVDtBQUNBM0IsOEJBQVU0QixJQUFWLENBQWVQLENBQWY7QUFDSCxpQkFIRDtBQUlBLHVCQUFLckIsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSx1QkFBS2dCLE1BQUw7QUFDSCxhQVBEO0FBUUFFLGtCQUFNVyxNQUFOLENBQWEsVUFBYixFQUF5Qk4sa0JBQXpCLENBQTRDLFVBQUNHLEdBQUQsRUFBUztBQUNqRDtBQUNBLHVCQUFLekIsVUFBTCxHQUFrQnlCLElBQUlDLE1BQXRCO0FBQ0EsdUJBQUtYLE1BQUw7QUFDSCxhQUpELEVBSUdjLElBSkg7QUFLSDs7O2lDQUNRO0FBQ0wsaUJBQUtqQyxRQUFMLEdBQWdCUixTQUFTTyxJQUF6QjtBQUNIOzs7O0VBbEV3Q21DLGVBQUtDLEk7O2tCQUE3QnpDLGUiLCJmaWxlIjoiZW50ZXJwcmlzZUNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuY29uc3QgbGlzdERhdGEgPSByZXF1aXJlKCcuLi91dGlscy9saXN0RW50ZXJwcmlzZURhdGEuanMnKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZW50ZXJwcmlzZUNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pu05aSa5LyB5LiaJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6e1xyXG4gICAgICAgICAgICAnd3hjLXNlYXJjaCc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXNlYXJjaC9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1sb2FkbW9yZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRtb3JlL2Rpc3QvaW5kZXgnXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHR5cGVEYXRhOiBbXSwgLy8g5YiX6KGo5pWw5o2uXHJcbiAgICAgICAgY29udGVudEFjdGl2ZTogJycsIC8vIOWGheWuueagj2lkXHJcbiAgICAgICAgbmF2QWN0aXZlOiAwLCAvLyDlr7zoiKrmoI/pgInkuK1pZFxyXG4gICAgICAgIGhlaWdodEFycjogW10sXHJcbiAgICAgICAgY29udGFpbmVySDogMCxcclxuICAgICAgICBkZWZhdWx0SW1nOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTYxNzE1NzMwNjM2JmRpPTg0NDkwZDM2MzU2MzIzMTM5NzNkMGVjM2Y2M2M3NGRiJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmRwaWMudGlhbmtvbmcuY29tJTJGMmElMkZqNiUyRlFKNjk5ODMyNDMxNS5qcGcnXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvLyDlt6bkvqflr7zoiKrmoI/ngrnlh7vkuovku7ZcclxuICAgICAgICBjaG9vc2VUeXBlKGUpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRBY3RpdmUgPSBpZFxyXG4gICAgICAgICAgICB0aGlzLm5hdkFjdGl2ZSA9IGluZGV4XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNjcm9sbChlKSB7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSBlLmRldGFpbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxBcnIgPSB0aGlzLmhlaWdodEFycjtcclxuICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBzY3JvbGxBcnJbc2Nyb2xsQXJyLmxlbmd0aCAtIDFdIC0gdGhpcy5jb250YWluZXJIKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSAwICYmIHNjcm9sbFRvcCA8IHNjcm9sbEFyclswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkFjdGl2ZSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsVG9wID49IHNjcm9sbEFycltpIC0gMV0gJiYgc2Nyb2xsVG9wIDwgc2Nyb2xsQXJyW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2QWN0aXZlID0gaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvblJlYWR5KCl7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xyXG4gICAgICAgIGxldCBoZWlnaHRBcnIgPSBbXTtcclxuICAgICAgICBsZXQgcyA9IDA7XHJcbiAgICAgICAgcXVlcnkuc2VsZWN0QWxsKCcucGVzdGljaWRlJykuYm91bmRpbmdDbGllbnRSZWN0KChyZWFjdCkgPT4ge1xyXG4gICAgICAgICAgICByZWFjdC5mb3JFYWNoKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHMgKz0gcmVzLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGhlaWdodEFyci5wdXNoKHMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodEFyciA9IGhlaWdodEFyclxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcXVlcnkuc2VsZWN0KCcuY29udGVudCcpLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOiuoeeul+WuueWZqOmrmOW6plxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckggPSByZXMuaGVpZ2h0XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9KS5leGVjKClcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnR5cGVEYXRhID0gbGlzdERhdGEuZGF0YVxyXG4gICAgfTtcclxuICAgIC8vIE90aGVyIHByb3BlcnRpZXNcclxufVxyXG4iXX0=