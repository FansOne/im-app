'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var productEstablish = function (_wepy$page) {
    _inherits(productEstablish, _wepy$page);

    function productEstablish() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, productEstablish);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = productEstablish.__proto__ || Object.getPrototypeOf(productEstablish)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '创建产品',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.components = {}, _this.data = {
            personalInputData: [{
                title: '名称',
                placeholder: '请输入名称',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '行业',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['贸易', '制造业', '房地产', '保健品', 'IT/互联网', '通信/电子', '汽车/配件', '生物/环保', '医疗/器械', '金融/投资', '能源/电力', '建筑/建材', '化工/纺织', '零售/快消', '教育/科研', '广告/传媒', '企业咨询'],
                index: 1,
                selectorPicker: false
            }, {
                title: '详情',
                placeholder: '点击录入产品详情',
                arrow: true,
                input: 'picker',
                inputType: 'otherPage',
                selectorPicker: false
            }, {
                title: '联系人',
                placeholder: '请输入联系人姓名',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '联系方式',
                placeholder: '请输入电话号码',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }],
            customIndex: [0, 0, 0], //当前产品选中数组的下标值
            //当前选中数组
            onlyArray: [[], [], []]
        }, _this.methods = {
            // 行业
            pickerChange1: function pickerChange1(e) {
                var industry = {
                    title: '产品',
                    placeholder: '请选择',
                    arrow: true,
                    input: 'picker',
                    inputType: 'multiSelector',
                    pickerValue: this.customIndex,
                    pickerRange: this.onlyArray,
                    index: 2
                };
                var productHave = false;
                if (e.detail.value == 4) {
                    this.personalInputData.forEach(function (element) {
                        if (element.title == '产品') productHave = true;
                    });
                    if (!productHave) {
                        this.personalInputData.splice(2, 0, industry);
                    }
                } else {
                    var deleteProduct = false;
                    this.personalInputData.forEach(function (element) {
                        if (element.title == '产品') deleteProduct = true;
                    });
                    if (deleteProduct) this.personalInputData.splice(2, 1);
                }
                this.personalInputData[1].selectorPicker = true;
                this.personalInputData[1].pickerValue = e.detail.value;
            },

            // 产品滑动选择
            columnchange2: function columnchange2(e) {
                var customArray = require('./../../utils/listData.js').data,
                    customIndex = this.customIndex,
                    onlyArray = this.onlyArray;

                customIndex[e.detail.column] = e.detail.value;

                var searchColumn = function searchColumn() {
                    for (var i = 0; i < customArray.length; i++) {
                        var arr1 = [];
                        var arr2 = [];
                        if (i == customIndex[0]) {
                            for (var j = 0; j < customArray[i].goods_category_two.length; j++) {
                                arr1.push(customArray[i].goods_category_two[j].goods_category_two_name);
                                if (j == customIndex[1]) {
                                    for (var k = 0; k < customArray[i].goods_category_two[j].goods.length; k++) {
                                        arr2.push(customArray[i].goods_category_two[j].goods[k].goods_name);
                                    }
                                    onlyArray[2] = arr2;
                                }
                            }
                            onlyArray[1] = arr1;
                        }
                    };
                };

                switch (e.detail.column) {
                    case 0:
                        customIndex[1] = 0;
                        customIndex[2] = 0;
                        searchColumn();
                        break;
                    case 1:
                        customIndex[2] = 0;
                        searchColumn();
                        break;
                }
                this.onlyArray = onlyArray;
                this.customIndex = customIndex;
                this.$apply();
            },

            // 产品选择
            pickerChange2: function pickerChange2(e) {
                // console.log(e.detail.value)
            },

            // 编辑产品详情
            editorPage: function editorPage() {
                wx.navigateTo({
                    url: '../editorRichText/editor?title=\u7F16\u8F91\u4EA7\u54C1\u8BE6\u60C5'
                });
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(productEstablish, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            var productList = require('./../../utils/listData.js').data;
            // console.log(productList)
            productList.forEach(function (element) {
                _this2.onlyArray[0].push(element.goods_category_one_name);
            });
            productList[0].goods_category_two.forEach(function (element) {
                _this2.onlyArray[1].push(element.goods_category_two_name);
            });
            productList[0].goods_category_two[0].goods.forEach(function (element) {
                _this2.onlyArray[2].push(element.goods_name);
            });
            this.$apply();
        }
    }]);

    return productEstablish;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(productEstablish , 'subpackage/square/productEstablish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RFc3RhYmxpc2guanMiXSwibmFtZXMiOlsicHJvZHVjdEVzdGFibGlzaCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsInBlcnNvbmFsSW5wdXREYXRhIiwidGl0bGUiLCJwbGFjZWhvbGRlciIsImFycm93IiwiaW5wdXQiLCJpbnB1dFR5cGUiLCJwaWNrZXJWYWx1ZSIsInBpY2tlclJhbmdlIiwiaW5kZXgiLCJzZWxlY3RvclBpY2tlciIsImN1c3RvbUluZGV4Iiwib25seUFycmF5IiwibWV0aG9kcyIsInBpY2tlckNoYW5nZTEiLCJlIiwiaW5kdXN0cnkiLCJwcm9kdWN0SGF2ZSIsImRldGFpbCIsInZhbHVlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzcGxpY2UiLCJkZWxldGVQcm9kdWN0IiwiY29sdW1uY2hhbmdlMiIsImN1c3RvbUFycmF5IiwicmVxdWlyZSIsImNvbHVtbiIsInNlYXJjaENvbHVtbiIsImkiLCJsZW5ndGgiLCJhcnIxIiwiYXJyMiIsImoiLCJnb29kc19jYXRlZ29yeV90d28iLCJwdXNoIiwiZ29vZHNfY2F0ZWdvcnlfdHdvX25hbWUiLCJrIiwiZ29vZHMiLCJnb29kc19uYW1lIiwiJGFwcGx5IiwicGlja2VyQ2hhbmdlMiIsImVkaXRvclBhZ2UiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJwcm9kdWN0TGlzdCIsImdvb2RzX2NhdGVnb3J5X29uZV9uYW1lIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7Ozs4TUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVk7QUFEQztBQUZaLFMsUUFNVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0hDLCtCQUFrQixDQUNkO0FBQ0lDLHVCQUFN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Q1MsZUFBS0MsSTs7a0JBQTlCdkQsZ0IiLCJmaWxlIjoicHJvZHVjdEVzdGFibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2R1Y3RFc3RhYmxpc2ggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliJvlu7rkuqflk4EnLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBwZXJzb25hbElucHV0RGF0YTpbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiflkI3np7AnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeWQjeensCcsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3RleHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifooYzkuJonLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+mAieaLqScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J3BpY2tlcicsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3NlbGVjdG9yJyxcclxuICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOjAsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJSYW5nZTpbJ+i0uOaYkycsJ+WItumAoOS4micsJ+aIv+WcsOS6pycsJ+S/neWBpeWTgScsJ0lUL+S6kuiBlOe9kScsJ+mAmuS/oS/nlLXlrZAnLCfmsb3ovaYv6YWN5Lu2Jywn55Sf54mpL+eOr+S/nScsJ+WMu+eWly/lmajmorAnLCfph5Hono0v5oqV6LWEJywn6IO95rqQL+eUteWKmycsJ+W7uuetkS/lu7rmnZAnLCfljJblt6Uv57q657uHJywn6Zu25ZSuL+W/q+a2iCcsJ+aVmeiCsi/np5HnoJQnLCflub/lkYov5Lyg5aqSJywn5LyB5Lia5ZKo6K+iJ10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDoxLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JQaWNrZXI6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+ivpuaDhScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon54K55Ye75b2V5YWl5Lqn5ZOB6K+m5oOFJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonb3RoZXJQYWdlJyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yUGlja2VyOmZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifogZTns7vkuronLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeiBlOezu+S6uuWnk+WQjScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3RleHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifogZTns7vmlrnlvI8nLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeeUteivneWPt+eggScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J251bWJlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY3VzdG9tSW5kZXg6IFswLCAwLCAwXSwgLy/lvZPliY3kuqflk4HpgInkuK3mlbDnu4TnmoTkuIvmoIflgLxcclxuICAgICAgICAvL+W9k+WJjemAieS4reaVsOe7hFxyXG4gICAgICAgIG9ubHlBcnJheTogW1xyXG4gICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLy8g6KGM5LiaXHJcbiAgICAgICAgcGlja2VyQ2hhbmdlMShlKXtcclxuICAgICAgICAgICAgbGV0IGluZHVzdHJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S6p+WTgScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonbXVsdGlTZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTp0aGlzLmN1c3RvbUluZGV4LFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6dGhpcy5vbmx5QXJyYXksXHJcbiAgICAgICAgICAgICAgICBpbmRleDoyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0SGF2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihlLmRldGFpbC52YWx1ZSA9PSA0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxJbnB1dERhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09ICfkuqflk4EnKSBwcm9kdWN0SGF2ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYoIXByb2R1Y3RIYXZlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbmFsSW5wdXREYXRhLnNwbGljZSgyLCAwLCBpbmR1c3RyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2R1Y3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxJbnB1dERhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09ICfkuqflk4EnKSBkZWxldGVQcm9kdWN0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZihkZWxldGVQcm9kdWN0KSB0aGlzLnBlcnNvbmFsSW5wdXREYXRhLnNwbGljZSgyLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbmFsSW5wdXREYXRhWzFdLnNlbGVjdG9yUGlja2VyID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbmFsSW5wdXREYXRhWzFdLnBpY2tlclZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS6p+WTgea7keWKqOmAieaLqVxyXG4gICAgICAgIGNvbHVtbmNoYW5nZTIoZSl7XHJcbiAgICAgICAgICAgIGxldCBjdXN0b21BcnJheSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2xpc3REYXRhLmpzJykuZGF0YSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbUluZGV4ID0gdGhpcy5jdXN0b21JbmRleCxcclxuICAgICAgICAgICAgICAgIG9ubHlBcnJheSA9IHRoaXMub25seUFycmF5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3VzdG9tSW5kZXhbZS5kZXRhaWwuY29sdW1uXSA9IGUuZGV0YWlsLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlYXJjaENvbHVtbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VzdG9tQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyMSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gY3VzdG9tSW5kZXhbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGN1c3RvbUFycmF5W2ldLmdvb2RzX2NhdGVnb3J5X3R3by5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIxLnB1c2goY3VzdG9tQXJyYXlbaV0uZ29vZHNfY2F0ZWdvcnlfdHdvW2pdLmdvb2RzX2NhdGVnb3J5X3R3b19uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gY3VzdG9tSW5kZXhbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjdXN0b21BcnJheVtpXS5nb29kc19jYXRlZ29yeV90d29bal0uZ29vZHMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycjIucHVzaChjdXN0b21BcnJheVtpXS5nb29kc19jYXRlZ29yeV90d29bal0uZ29vZHNba10uZ29vZHNfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25seUFycmF5WzJdID0gYXJyMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbmx5QXJyYXlbMV0gPSBhcnIxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5kZXRhaWwuY29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tSW5kZXhbMV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUluZGV4WzJdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hDb2x1bW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21JbmRleFsyXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ29sdW1uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9ubHlBcnJheSA9IG9ubHlBcnJheVxyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUluZGV4ID0gY3VzdG9tSW5kZXhcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Lqn5ZOB6YCJ5oupXHJcbiAgICAgICAgcGlja2VyQ2hhbmdlMihlKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDnvJbovpHkuqflk4Hor6bmg4VcclxuICAgICAgICBlZGl0b3JQYWdlKCl7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgLi4vZWRpdG9yUmljaFRleHQvZWRpdG9yP3RpdGxlPee8lui+keS6p+WTgeivpuaDhWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBwcm9kdWN0TGlzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2xpc3REYXRhLmpzJykuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdClcclxuICAgICAgICBwcm9kdWN0TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ubHlBcnJheVswXS5wdXNoKGVsZW1lbnQuZ29vZHNfY2F0ZWdvcnlfb25lX25hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvZHVjdExpc3RbMF0uZ29vZHNfY2F0ZWdvcnlfdHdvLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25seUFycmF5WzFdLnB1c2goZWxlbWVudC5nb29kc19jYXRlZ29yeV90d29fbmFtZSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9kdWN0TGlzdFswXS5nb29kc19jYXRlZ29yeV90d29bMF0uZ29vZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmx5QXJyYXlbMl0ucHVzaChlbGVtZW50Lmdvb2RzX25hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfTtcclxufVxyXG4iXX0=