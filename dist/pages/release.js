'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _registerPopup = require('./../components/registerPopup.js');

var _registerPopup2 = _interopRequireDefault(_registerPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var release = function (_wepy$page) {
    _inherits(release, _wepy$page);

    function release() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, release);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = release.__proto__ || Object.getPrototypeOf(release)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '',
            navigationBarBackgroundColor: '#00D4D7',
            backgroundColorTop: '#00D4D7'
        }, _this.components = {
            registerPopup: _registerPopup2.default
        }, _this.data = {
            selectItem: [//个人发布
            {
                title: '我要出货'
            }, {
                title: '技术支持'
            }, {
                title: '职场八卦'
            }, {
                title: '发布动态'
            }],
            enterpriseSelectItem: [//企业发布
            {
                title: '帮我卖 拿奖励'
            }, {
                title: '技术支持'
            }, {
                title: '我要采购'
            }, {
                title: '企业动态'
            }, {
                title: '职位发布'
            }],
            isWhere: 0, //   控制个人/企业
            index: 2,
            pickerviewValue: '',
            title: ''
        }, _this.methods = {
            // 跳转详情
            jumpReleaseDetails: function jumpReleaseDetails() {
                if (this.isWhere == 0) {
                    //个人
                    wx.navigateTo({
                        url: './personalReleaseDetails?title=' + this.title + '&pageIdx=' + this.index + '&isWhere=' + this.isWhere
                    });
                } else if (this.isWhere == 1) {
                    //企业
                    wx.navigateTo({
                        url: './personalReleaseDetails?title=' + this.title + '&pageIdx=' + this.index + '&isWhere=' + this.isWhere
                    });
                }
            },

            // 滚动选择时触发change事件
            bindchange: function bindchange(e) {
                var idx = e.detail.value[0];
                if (this.isWhere == 0) {
                    this.title = this.selectItem[idx].title;
                } else {
                    this.title = this.enterpriseSelectItem[idx].title;
                }
                this.index = idx;
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(release, [{
        key: 'onReady',
        value: function onReady() {
            this.pickerviewValue = [2];
            if (this.isWhere == 0) {
                this.title = this.selectItem[2].title;
            } else {
                this.title = this.enterpriseSelectItem[2].title;
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return release;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(release , 'pages/release'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2UuanMiXSwibmFtZXMiOlsicmVsZWFzZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yVG9wIiwiY29tcG9uZW50cyIsInJlZ2lzdGVyUG9wdXAiLCJkYXRhIiwic2VsZWN0SXRlbSIsInRpdGxlIiwiZW50ZXJwcmlzZVNlbGVjdEl0ZW0iLCJpc1doZXJlIiwiaW5kZXgiLCJwaWNrZXJ2aWV3VmFsdWUiLCJtZXRob2RzIiwianVtcFJlbGVhc2VEZXRhaWxzIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYmluZGNoYW5nZSIsImUiLCJpZHgiLCJkZXRhaWwiLCJ2YWx1ZSIsImV2ZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixFQURuQjtBQUVMQywwQ0FBNkIsU0FGeEI7QUFHTEMsZ0NBQW1CO0FBSGQsUyxRQUtUQyxVLEdBQWE7QUFDVEM7QUFEUyxTLFFBSWJDLEksR0FBTztBQUNIQyx3QkFBVyxDQUFFO0FBQ1Q7QUFDSUMsdUJBQU07QUFEVixhQURPLEVBSVA7QUFDSUEsdUJBQU07QUFEVixhQUpPLEVBT1A7QUFDSUEsdUJBQU07QUFEVixhQVBPLEVBVVA7QUFDSUEsdUJBQU07QUFEVixhQVZPLENBRFI7QUFlSEMsa0NBQXFCLENBQUU7QUFDbkI7QUFDSUQsdUJBQU07QUFEVixhQURpQixFQUlqQjtBQUNJQSx1QkFBTTtBQURWLGFBSmlCLEVBT2pCO0FBQ0lBLHVCQUFNO0FBRFYsYUFQaUIsRUFVakI7QUFDSUEsdUJBQU07QUFEVixhQVZpQixFQWFqQjtBQUNJQSx1QkFBTTtBQURWLGFBYmlCLENBZmxCO0FBZ0NIRSxxQkFBUSxDQWhDTCxFQWdDUztBQUNaQyxtQkFBTSxDQWpDSDtBQWtDSEMsNkJBQWdCLEVBbENiO0FBbUNISixtQkFBTTtBQW5DSCxTLFFBcUNQSyxPLEdBQVU7QUFDTjtBQUNBQyw4QkFGTSxnQ0FFYztBQUNoQixvQkFBRyxLQUFLSixPQUFMLElBQWdCLENBQW5CLEVBQXFCO0FBQUU7QUFDbkJLLHVCQUFHQyxVQUFILENBQWM7QUFDVkMsaUVBQXVDLEtBQUtULEtBQTVDLGlCQUE2RCxLQUFLRyxLQUFsRSxpQkFBbUYsS0FBS0Q7QUFEOUUscUJBQWQ7QUFHSCxpQkFKRCxNQUlNLElBQUcsS0FBS0EsT0FBTCxJQUFnQixDQUFuQixFQUFxQjtBQUFFO0FBQ3pCSyx1QkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLGlFQUF1QyxLQUFLVCxLQUE1QyxpQkFBNkQsS0FBS0csS0FBbEUsaUJBQW1GLEtBQUtEO0FBRDlFLHFCQUFkO0FBR0g7QUFDSixhQVpLOztBQWFOO0FBQ0FRLHNCQWRNLHNCQWNLQyxDQWRMLEVBY087QUFDVCxvQkFBSUMsTUFBTUQsRUFBRUUsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFWO0FBQ0Esb0JBQUcsS0FBS1osT0FBTCxJQUFnQixDQUFuQixFQUFxQjtBQUNqQix5QkFBS0YsS0FBTCxHQUFhLEtBQUtELFVBQUwsQ0FBZ0JhLEdBQWhCLEVBQXFCWixLQUFsQztBQUNILGlCQUZELE1BRUs7QUFDQSx5QkFBS0EsS0FBTCxHQUFhLEtBQUtDLG9CQUFMLENBQTBCVyxHQUExQixFQUErQlosS0FBNUM7QUFDSjtBQUNELHFCQUFLRyxLQUFMLEdBQWFTLEdBQWI7QUFDSDtBQXRCSyxTLFFBeUJWRyxNLEdBQVMsRTs7Ozs7a0NBQ0E7QUFDTCxpQkFBS1gsZUFBTCxHQUF1QixDQUFDLENBQUQsQ0FBdkI7QUFDQSxnQkFBRyxLQUFLRixPQUFMLElBQWdCLENBQW5CLEVBQXFCO0FBQ2pCLHFCQUFLRixLQUFMLEdBQWEsS0FBS0QsVUFBTCxDQUFnQixDQUFoQixFQUFtQkMsS0FBaEM7QUFDSCxhQUZELE1BRUs7QUFDRCxxQkFBS0EsS0FBTCxHQUFhLEtBQUtDLG9CQUFMLENBQTBCLENBQTFCLEVBQTZCRCxLQUExQztBQUNIO0FBQ0o7OztpQ0FDUSxDQUFFOzs7O0VBakZzQmdCLGVBQUtDLEk7O2tCQUFyQjFCLE8iLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgcmVnaXN0ZXJQb3B1cCBmcm9tICcuLi9jb21wb25lbnRzL3JlZ2lzdGVyUG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWxlYXNlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOicjMDBENEQ3JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yVG9wOicjMDBENEQ3J1xuICAgIH07XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgcmVnaXN0ZXJQb3B1cFxuICAgIH07XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBzZWxlY3RJdGVtOlsgLy/kuKrkurrlj5HluINcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTon5oiR6KaB5Ye66LSnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTon5oqA5pyv5pSv5oyBJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTon6IGM5Zy65YWr5Y2mJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTon5Y+R5biD5Yqo5oCBJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZW50ZXJwcmlzZVNlbGVjdEl0ZW06WyAvL+S8geS4muWPkeW4g1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOifluK7miJHljZYg5ou/5aWW5YqxJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTon5oqA5pyv5pSv5oyBJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTon5oiR6KaB6YeH6LStJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTon5LyB5Lia5Yqo5oCBJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTon6IGM5L2N5Y+R5biDJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaXNXaGVyZTowLCAgLy8gICDmjqfliLbkuKrkurov5LyB5LiaXG4gICAgICAgIGluZGV4OjIsXG4gICAgICAgIHBpY2tlcnZpZXdWYWx1ZTonJyxcbiAgICAgICAgdGl0bGU6JydcbiAgICB9O1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIC8vIOi3s+i9rOivpuaDhVxuICAgICAgICBqdW1wUmVsZWFzZURldGFpbHMoKXtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNXaGVyZSA9PSAwKXsgLy/kuKrkurpcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgLi9wZXJzb25hbFJlbGVhc2VEZXRhaWxzP3RpdGxlPSR7dGhpcy50aXRsZX0mcGFnZUlkeD0ke3RoaXMuaW5kZXh9JmlzV2hlcmU9JHt0aGlzLmlzV2hlcmV9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmlzV2hlcmUgPT0gMSl7IC8v5LyB5LiaXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC4vcGVyc29uYWxSZWxlYXNlRGV0YWlscz90aXRsZT0ke3RoaXMudGl0bGV9JnBhZ2VJZHg9JHt0aGlzLmluZGV4fSZpc1doZXJlPSR7dGhpcy5pc1doZXJlfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDmu5rliqjpgInmi6nml7bop6blj5FjaGFuZ2Xkuovku7ZcbiAgICAgICAgYmluZGNoYW5nZShlKXtcbiAgICAgICAgICAgIGxldCBpZHggPSBlLmRldGFpbC52YWx1ZVswXVxuICAgICAgICAgICAgaWYodGhpcy5pc1doZXJlID09IDApe1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnNlbGVjdEl0ZW1baWR4XS50aXRsZVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmVudGVycHJpc2VTZWxlY3RJdGVtW2lkeF0udGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpZHhcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBldmVudHMgPSB7fTtcbiAgICBvblJlYWR5KCl7XG4gICAgICAgIHRoaXMucGlja2Vydmlld1ZhbHVlID0gWzJdXG4gICAgICAgIGlmKHRoaXMuaXNXaGVyZSA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnNlbGVjdEl0ZW1bMl0udGl0bGVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5lbnRlcnByaXNlU2VsZWN0SXRlbVsyXS50aXRsZVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHt9O1xufVxuIl19