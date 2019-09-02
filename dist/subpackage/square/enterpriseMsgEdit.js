'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _rightPicker = require('./../../components/rightPicker.js');

var _rightPicker2 = _interopRequireDefault(_rightPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var enterpriseMsgEdit = function (_wepy$page) {
    _inherits(enterpriseMsgEdit, _wepy$page);

    function enterpriseMsgEdit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, enterpriseMsgEdit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = enterpriseMsgEdit.__proto__ || Object.getPrototypeOf(enterpriseMsgEdit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '编辑企业信息',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.$repeat = {}, _this.$props = { "rightPicker": { "xmlns:v-bind": "", "v-bind:chooseList.sync": "chooseList", "v-bind:multiple.sync": "multiple" } }, _this.$events = {}, _this.components = {
            rightPicker: _rightPicker2.default
        }, _this.data = {
            tempFilePaths: '', //用户图像
            enterpriseMsg: [{
                title: '企业简称',
                placeholder: '请输入企业简称',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '企业全称',
                placeholder: '请输入企业全称',
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
                index: 2,
                selectorPicker: false
            }, {
                title: '业务标签',
                placeholder: '业务标签最多输入三个',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '业务领域',
                placeholder: '业务领域最多输入三个',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '公司规模',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['0-10人', '11-50人', '51-200人', '201-500人', '501-1000人', '1001+人', '5000+人', '10000+'],
                selectorPicker: false,
                index: 5
            }, {
                title: '公司类型',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['上市公司', '民营企业', '政府机构', '非营利性组织', '外资企业', '合资企业', '个体经营'],
                selectorPicker: false,
                index: 6
            }, {
                title: '企业电话',
                placeholder: '请输入企业电话',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }, {
                title: '公司网址',
                placeholder: '请输入公司网址',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '公司地区',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'region',
                pickerValue: [],
                index: 9
            }],
            chooseList: [{ value: '云计算', name: '云计算' }, { value: 'PASS', name: 'PASS' }, { value: 'SASS', name: 'SASS' }, { value: '超融合', name: '超融合' }, { value: '服务器', name: '服务器' }, { value: '数据库', name: '数据库' }, { value: '工业互联网', name: '工业互联网' }, { value: '应用交付', name: '应用交付' }],
            multiple: true
        }, _this.methods = {
            // 上传图像
            chooseImage: function chooseImage() {
                var _this2 = this;

                wx.chooseImage({
                    count: this.count,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera'],
                    success: function success(res) {
                        _this2.tempFilePaths = res.tempFilePaths[0];
                        _this2.$apply();
                        // wx.uploadFile({
                        //     url:'https://api.zhizubaba.com/api/up_images',
                        //     filePath: element,
                        //     header:{
                        //         'Content-Type':'multipart/form-data'                                  
                        //     },
                        //     name: 'files',
                        //     success:  (res)=> {
                        //         pics.push(JSON.parse(res.data).message)
                        //     }
                        // })
                    }
                });
            },

            // 行业选择
            pickerChange2: function pickerChange2(e) {
                this.enterpriseMsg[2].pickerValue = e.detail.value;
                this.enterpriseMsg[2].selectorPicker = true;
            },

            // 公司规模
            pickerChange5: function pickerChange5(e) {
                this.enterpriseMsg[5].pickerValue = e.detail.value;
                this.enterpriseMsg[5].selectorPicker = true;
            },

            // 公司类型
            pickerChange6: function pickerChange6(e) {
                this.enterpriseMsg[6].pickerValue = e.detail.value;
                this.enterpriseMsg[6].selectorPicker = true;
            },

            // 公司地区
            pickerChange9: function pickerChange9(e) {
                this.enterpriseMsg[9].pickerValue = e.detail.value;
            }
        }, _this.events = {
            choose: function choose(e) {
                _this.chooseArray = e.detail.chooseArray;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(enterpriseMsgEdit, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return enterpriseMsgEdit;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(enterpriseMsgEdit , 'subpackage/square/enterpriseMsgEdit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGVycHJpc2VNc2dFZGl0LmpzIl0sIm5hbWVzIjpbImVudGVycHJpc2VNc2dFZGl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInJpZ2h0UGlja2VyIiwiZGF0YSIsInRlbXBGaWxlUGF0aHMiLCJlbnRlcnByaXNlTXNnIiwidGl0bGUiLCJwbGFjZWhvbGRlciIsImFycm93IiwiaW5wdXQiLCJpbnB1dFR5cGUiLCJwaWNrZXJWYWx1ZSIsInBpY2tlclJhbmdlIiwiaW5kZXgiLCJzZWxlY3RvclBpY2tlciIsImNob29zZUxpc3QiLCJ2YWx1ZSIsIm5hbWUiLCJtdWx0aXBsZSIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsInd4IiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiJGFwcGx5IiwicGlja2VyQ2hhbmdlMiIsImUiLCJkZXRhaWwiLCJwaWNrZXJDaGFuZ2U1IiwicGlja2VyQ2hhbmdlNiIsInBpY2tlckNoYW5nZTkiLCJldmVudHMiLCJjaG9vc2UiLCJjaG9vc2VBcnJheSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7OztnTkFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsUUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVk7QUFEQztBQUZaLFMsUUFNVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDBCQUF5QixZQUE1QyxFQUF5RCx3QkFBdUIsVUFBaEYsRUFBZixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQztBQURNLFMsUUFJVkMsSSxHQUFPO0FBQ0hDLDJCQUFjLEVBRFgsRUFDZTtBQUNsQkMsMkJB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QXZDO0FBQ0gsYUFqQ0s7O0FBa0NOO0FBQ0FrQix5QkFuQ00seUJBbUNRSCxDQW5DUixFQW1DVTtBQUNaLHFCQUFLeEIsYUFBTCxDQUFtQixDQUFuQixFQUFzQk0sV0FBdEIsR0FBb0NrQixFQUFFQyxNQUFGLENBQVNkLEtBQTdDO0FBQ0EscUJBQUtYLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0JTLGNBQXRCLEdBQXVDLElBQXZDO0FBQ0gsYUF0Q0s7O0FBdUNOO0FBQ0FtQix5QkF4Q00seUJBd0NRSixDQXhDUixFQXdDVTtBQUNaLHFCQUFLeEIsYUFBTCxDQUFtQixDQUFuQixFQUFzQk0sV0FBdEIsR0FBb0NrQixFQUFFQyxNQUFGLENBQVNkLEtBQTdDO0FBQ0g7QUExQ0ssUyxRQTZDVmtCLE0sR0FBUztBQUNMQyxvQkFBTyxnQkFBQ04sQ0FBRCxFQUFLO0FBQ1Isc0JBQUtPLFdBQUwsR0FBbUJQLEVBQUVDLE1BQUYsQ0FBU00sV0FBNUI7QUFDSDtBQUhJLFM7Ozs7O2lDQUtBLENBQUU7Ozs7RUFwS2dDQyxlQUFLQyxJOztrQkFBL0I1QyxpQiIsImZpbGUiOiJlbnRlcnByaXNlTXNnRWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHJpZ2h0UGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmlnaHRQaWNrZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZW50ZXJwcmlzZU1zZ0VkaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvJbovpHkvIHkuJrkv6Hmga8nLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wicmlnaHRQaWNrZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNob29zZUxpc3Quc3luY1wiOlwiY2hvb3NlTGlzdFwiLFwidi1iaW5kOm11bHRpcGxlLnN5bmNcIjpcIm11bHRpcGxlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICByaWdodFBpY2tlclxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHRlbXBGaWxlUGF0aHM6JycsIC8v55So5oi35Zu+5YOPXHJcbiAgICAgICAgZW50ZXJwcmlzZU1zZzpbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifkvIHkuJrnroDnp7AnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeS8geS4mueugOensCcsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3RleHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifkvIHkuJrlhajnp7AnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeS8geS4muWFqOensCcsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3RleHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifooYzkuJonLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+mAieaLqScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J3BpY2tlcicsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3NlbGVjdG9yJyxcclxuICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOjAsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJSYW5nZTpbJ+i0uOaYkycsJ+WItumAoOS4micsJ+aIv+WcsOS6pycsJ+S/neWBpeWTgScsJ0lUL+S6kuiBlOe9kScsJ+mAmuS/oS/nlLXlrZAnLCfmsb3ovaYv6YWN5Lu2Jywn55Sf54mpL+eOr+S/nScsJ+WMu+eWly/lmajmorAnLCfph5Hono0v5oqV6LWEJywn6IO95rqQL+eUteWKmycsJ+W7uuetkS/lu7rmnZAnLCfljJblt6Uv57q657uHJywn6Zu25ZSuL+W/q+a2iCcsJ+aVmeiCsi/np5HnoJQnLCflub/lkYov5Lyg5aqSJywn5LyB5Lia5ZKo6K+iJ10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDoyLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JQaWNrZXI6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S4muWKoeagh+etvicsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon5Lia5Yqh5qCH562+5pyA5aSa6L6T5YWl5LiJ5LiqJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J2lucHV0JyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTondGV4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S4muWKoemihuWfnycsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon5Lia5Yqh6aKG5Z+f5pyA5aSa6L6T5YWl5LiJ5LiqJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J2lucHV0JyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTondGV4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+WFrOWPuOinhOaooScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonc2VsZWN0b3InLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6MCxcclxuICAgICAgICAgICAgICAgIHBpY2tlclJhbmdlOlsnMC0xMOS6uicsJzExLTUw5Lq6JywnNTEtMjAw5Lq6JywnMjAxLTUwMOS6uicsJzUwMS0xMDAw5Lq6JywnMTAwMSvkuronLCc1MDAwK+S6uicsJzEwMDAwKyddLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JQaWNrZXI6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmRleDo1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5YWs5Y+457G75Z6LJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidzZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTowLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6WyfkuIrluILlhazlj7gnLCfmsJHokKXkvIHkuJonLCfmlL/lupzmnLrmnoQnLCfpnZ7okKXliKnmgKfnu4Tnu4cnLCflpJbotYTkvIHkuJonLCflkIjotYTkvIHkuJonLCfkuKrkvZPnu4/okKUnXSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yUGlja2VyOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6NixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S8geS4mueUteivnScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36L6T5YWl5LyB5Lia55S16K+dJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J2lucHV0JyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonbnVtYmVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5YWs5Y+4572R5Z2AJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXlhazlj7jnvZHlnYAnLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDonaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5YWs5Y+45Zyw5Yy6JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidyZWdpb24nLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6W10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDo5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjaG9vc2VMaXN0OiBbXHJcblx0XHRcdHsgdmFsdWU6ICfkupHorqHnrpcnLCBuYW1lOiAn5LqR6K6h566XJyB9LFxyXG5cdFx0XHR7IHZhbHVlOiAnUEFTUycsIG5hbWU6ICdQQVNTJ30sXHJcblx0XHRcdHsgdmFsdWU6ICdTQVNTJywgbmFtZTogJ1NBU1MnfSxcclxuXHRcdFx0eyB2YWx1ZTogJ+i2heiejeWQiCcsIG5hbWU6ICfotoXono3lkIgnfSxcclxuXHRcdFx0eyB2YWx1ZTogJ+acjeWKoeWZqCcsIG5hbWU6ICfmnI3liqHlmagnfSxcclxuXHRcdFx0eyB2YWx1ZTogJ+aVsOaNruW6kycsIG5hbWU6ICfmlbDmja7lupMnfSxcclxuXHRcdFx0eyB2YWx1ZTogJ+W3peS4muS6kuiBlOe9kScsIG5hbWU6ICflt6XkuJrkupLogZTnvZEnfSxcclxuXHRcdFx0eyB2YWx1ZTogJ+W6lOeUqOS6pOS7mCcsIG5hbWU6ICflupTnlKjkuqTku5gnfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbXVsdGlwbGU6IHRydWVcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8vIOS4iuS8oOWbvuWDj1xyXG4gICAgICAgIGNob29zZUltYWdlKCl7XHJcbiAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgICAgIGNvdW50OiB0aGlzLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6J2h0dHBzOi8vYXBpLnpoaXp1YmFiYS5jb20vYXBpL3VwX2ltYWdlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZpbGVQYXRoOiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBoZWFkZXI6e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J211bHRpcGFydC9mb3JtLWRhdGEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiAnZmlsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiAgKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwaWNzLnB1c2goSlNPTi5wYXJzZShyZXMuZGF0YSkubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDooYzkuJrpgInmi6lcclxuICAgICAgICBwaWNrZXJDaGFuZ2UyKGUpe1xyXG4gICAgICAgICAgICB0aGlzLmVudGVycHJpc2VNc2dbMl0ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLmVudGVycHJpc2VNc2dbMl0uc2VsZWN0b3JQaWNrZXIgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlhazlj7jop4TmqKFcclxuICAgICAgICBwaWNrZXJDaGFuZ2U1KGUpe1xyXG4gICAgICAgICAgICB0aGlzLmVudGVycHJpc2VNc2dbNV0ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLmVudGVycHJpc2VNc2dbNV0uc2VsZWN0b3JQaWNrZXIgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlhazlj7jnsbvlnotcclxuICAgICAgICBwaWNrZXJDaGFuZ2U2KGUpe1xyXG4gICAgICAgICAgICB0aGlzLmVudGVycHJpc2VNc2dbNl0ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLmVudGVycHJpc2VNc2dbNl0uc2VsZWN0b3JQaWNrZXIgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlhazlj7jlnLDljLpcclxuICAgICAgICBwaWNrZXJDaGFuZ2U5KGUpe1xyXG4gICAgICAgICAgICB0aGlzLmVudGVycHJpc2VNc2dbOV0ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgICBjaG9vc2U6KGUpPT57XHJcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlQXJyYXkgPSBlLmRldGFpbC5jaG9vc2VBcnJheVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgb25Mb2FkKCkge307XHJcbiAgICAvLyBPdGhlciBwcm9wZXJ0aWVzXHJcbn1cclxuIl19