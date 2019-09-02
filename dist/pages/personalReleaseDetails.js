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

var arr = [];
var pics = [];

var personalReleaseDetails = function (_wepy$page) {
    _inherits(personalReleaseDetails, _wepy$page);

    function personalReleaseDetails() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, personalReleaseDetails);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = personalReleaseDetails.__proto__ || Object.getPrototypeOf(personalReleaseDetails)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.components = {}, _this.data = {
            isWhere: '', //  个人/企业开关
            pageIdx: '',
            forData: [], //根据个人/企业控制渲染数据

            // -----------------------------------------个人
            shipment: [//我要出货
            {
                title: '产品名称',
                placeholder: '请输入名称',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '产品介绍',
                placeholder: '请输入产品详情',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }, {
                title: '联系方式',
                placeholder: '请输入联系方式',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }, {
                title: '价格',
                placeholder: '请输入价格',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }, {
                title: '行业/产品',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'multiSelector',
                pickerValue: [],
                pickerRange: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']]
            }, {
                title: '地区',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'region',
                pickerValue: []
            }],
            technology: [//技术支持
            {
                title: '名称',
                placeholder: '请输入名称',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '介绍',
                placeholder: '请输入产品详情',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }, {
                title: '佣金',
                placeholder: '请输入价格',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }, {
                title: '行业/产品',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'multiSelector',
                pickerValue: [],
                index: 4,
                pickerRange: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']]
            }, {
                title: '地区',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'region',
                index: 5,
                pickerValue: []
            }, {
                title: '截至日期',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'date',
                index: 6,
                pickerValue: '2019-09-09'
            }],
            eightDiagrams: [//职场八卦
            {
                title: '分享八卦',
                placeholder: '请输入要分享的内容',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }],
            dynamic: [// 发布动态
            {
                title: '我的动态',
                placeholder: '请输入要分享的内容',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }],

            // -----------------------------------------企业
            helpSell: [//帮我卖
            {
                title: '产品名称',
                placeholder: '请输入名称',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '产品详情',
                placeholder: '请输入产品详情',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }, {
                title: '联系方式',
                placeholder: '请输入联系方式',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }, {
                title: '产品价格',
                placeholder: '人民币/元',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }, {
                title: '佣金',
                placeholder: '人民币/元',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }, {
                title: '有效时间',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['5-10天', '10-15天', '15-20天', '20-25天', '一月', '一月以上'],
                index: 7
            }],
            enterpriseTechnology: [//技术支持企业
            {
                title: '名称',
                placeholder: '请输入名称',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '介绍',
                placeholder: '请输入产品详情',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }, {
                title: '佣金',
                placeholder: '请输入价格',
                arrow: false,
                input: 'input',
                inputType: 'number'
            }, {
                title: '行业',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'multiSelector',
                pickerValue: [],
                index: 4,
                pickerRange: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']]
            }, {
                title: '时间限制',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['5-10天', '10-15天', '15-20天', '20-25天', '一月', '一月以上'],
                index: 7
            }, {
                title: '地区',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'region',
                index: 5,
                pickerValue: []
            }],
            wantBuy: [//我要采购
            {
                title: '标题',
                placeholder: '请输入标题',
                arrow: false,
                input: 'textarea',
                inputType: 'text',
                height: 99
            }, {
                title: '采购详情',
                placeholder: '请输入采购详情',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }, {
                title: '时间限制',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['5-10天', '10-15天', '15-20天', '20-25天', '一月', '一月以上'],
                index: 7
            }, {
                title: '价格区间',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['50-100', '1000-3000', '5000-10000', '10000-18000', '20000-35000', '40000+'],
                index: 8
            }, {
                title: '交货地区',
                placeholder: '选择地区',
                arrow: true,
                input: 'picker',
                inputType: 'region',
                index: 5,
                pickerValue: []
            }],
            enterpriseDynamic: [// 企业动态
            {
                title: '企业动态',
                placeholder: '请输入要分享的内容',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }],
            positionRelease: [//职位发布
            {
                title: '职位名称',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['销售', '工程师', '售后', '研发', '行政', '运营', '商务', 'HR', '财务', '市场', '高管', 'CEO', '其他'],
                index: 7
            }, {
                title: '职位详情',
                placeholder: '1、工作内容 2、任务要求 3、特别说明',
                arrow: false,
                input: 'textarea',
                inputType: 'text'
            }, {
                title: '产品',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'multiSelector',
                pickerValue: [],
                index: 4,
                pickerRange: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']]
            }, {
                title: '地区',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'region',
                index: 5,
                pickerValue: []
            }],

            selectData: false,
            selectorPicker: false,
            positionTemptation: false, //职位亮点
            positionTemptationData: [{ name: 'USA', value: '技术大牛', checked: 'true' }, { name: 'CHN', value: '领导Nice' }, { name: 'BRA', value: '五险一金' }, { name: 'JPN', value: '奖金丰厚' }, { name: 'ENG', value: '扁平化管理' }, { name: 'TUR', value: '各项补助' }],
            // 用户上传图片
            tempFilePaths: [],
            SurplusUploadNum: '',
            count: 9
        }, _this.methods = {
            // 多列选择器
            columnchange4: function columnchange4(e) {
                //滑动列
                // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
                // 我要出货
                var data = {
                    pickerRange: this.shipment[4].pickerRange,
                    pickerValue: this.shipment[4].pickerValue
                };
                // 技术支持--个人
                var data = {
                    pickerRange: this.technology[3].pickerRange,
                    pickerValue: this.technology[3].pickerValue
                };
                // 职位发布
                var data = {
                    pickerRange: this.positionRelease[2].pickerRange,
                    pickerValue: this.technology[2].pickerValue
                };
                // 技术支持--企业
                var data = {
                    pickerRange: this.enterpriseTechnology[3].pickerRange,
                    pickerValue: this.enterpriseTechnology[3].pickerValue
                };
                data.pickerValue[e.detail.column] = e.detail.value;
                switch (e.detail.column) {
                    case 0:
                        switch (data.pickerValue[0]) {
                            case 0:
                                data.pickerRange[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
                                data.pickerRange[2] = ['猪肉绦虫', '吸血虫'];
                                break;
                            case 1:
                                data.pickerRange[1] = ['鱼', '两栖动物', '爬行动物'];
                                data.pickerRange[2] = ['鲫鱼', '带鱼'];
                                break;
                        }
                        data.pickerValue[1] = 0;
                        data.pickerValue[2] = 0;
                        break;
                    case 1:
                        switch (data.pickerValue[0]) {
                            case 0:
                                switch (data.pickerValue[1]) {
                                    case 0:
                                        data.pickerRange[2] = ['猪肉绦虫', '吸血虫'];
                                        break;
                                    case 1:
                                        data.pickerRange[2] = ['蛔虫'];
                                        break;
                                    case 2:
                                        data.pickerRange[2] = ['蚂蚁', '蚂蟥'];
                                        break;
                                    case 3:
                                        data.pickerRange[2] = ['河蚌', '蜗牛', '蛞蝓'];
                                        break;
                                    case 4:
                                        data.pickerRange[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                                        break;
                                }
                                break;
                            case 1:
                                switch (data.pickerValue[1]) {
                                    case 0:
                                        data.pickerRange[2] = ['鲫鱼', '带鱼'];
                                        break;
                                    case 1:
                                        data.pickerRange[2] = ['青蛙', '娃娃鱼'];
                                        break;
                                    case 2:
                                        data.pickerRange[2] = ['蜥蜴', '龟', '壁虎'];
                                        break;
                                }
                                break;
                        }
                        data.pickerValue[2] = 0;
                        break;
                }
            },
            pickerChange4: function pickerChange4(e) {
                // 我要出货
                this.shipment[4].pickerValue = e.detail.value;
                // 技术支持
                this.technology[3].pickerValue = e.detail.value;
                // 职位发布
                this.positionRelease[2].pickerValue = e.detail.value;
                // 技术支持--企业
                this.enterpriseTechnology[3].pickerValue = e.detail.value;
            },

            // 地区选择器
            pickerChange5: function pickerChange5(e) {
                this.shipment[5].pickerValue = e.detail.value;
                this.technology[4].pickerValue = e.detail.value;
                this.positionRelease[3].pickerValue = e.detail.value;
                this.enterpriseTechnology[5].pickerValue = e.detail.value;
                this.wantBuy[4].pickerValue = e.detail.value;
            },

            // 日期选择
            pickerChange6: function pickerChange6(e) {
                // console.log(e.detail.value)
                this.selectData = true;
                this.technology[5].pickerValue = e.detail.value;
                this.$apply();
            },

            // 普通选择器
            pickerChange7: function pickerChange7(e) {
                this.selectorPicker = true;
                if (this.isWhere == 1 && this.pageIdx == 0) this.helpSell[5].pickerValue = e.detail.value;
                if (this.isWhere == 1 && this.pageIdx == 4) this.positionRelease[0].pickerValue = e.detail.value;
                if (this.isWhere == 1 && this.pageIdx == 1) this.enterpriseTechnology[4].pickerValue = e.detail.value;
                if (this.isWhere == 1 && this.pageIdx == 2) this.wantBuy[2].pickerValue = e.detail.value;
            },

            // 普通选择器
            pickerChange8: function pickerChange8(e) {
                this.selectorPicker = true;
                if (this.isWhere == 1 && this.pageIdx == 4) this.positionRelease[4].pickerValue = e.detail.value;
                if (this.isWhere == 1 && this.pageIdx == 2) this.wantBuy[3].pickerValue = e.detail.value;
            },

            // 上传图片
            chooseImage: function chooseImage() {
                var _this2 = this;

                this.count = 9 - this.tempFilePaths.length;
                this.$apply();
                if (this.tempFilePaths.length < 9) {
                    wx.chooseImage({
                        count: this.count,
                        sizeType: ['original', 'compressed'],
                        sourceType: ['album', 'camera'],
                        success: function success(res) {
                            pics = [];
                            arr = arr.concat(res.tempFilePaths);
                            _this2.tempFilePaths = arr;
                            _this2.SurplusUploadNum = _this2.count - 1;
                            _this2.$apply();
                            _this2.tempFilePaths.forEach(function (element) {
                                // wx.uploadFile({
                                //     url:'https://api.zhizubaba.com/api/up_images',
                                //     filePath: element,
                                //     header:{
                                //         'Content-Type':'multipart/form-data'                                  
                                //     },
                                //     name: 'files',
                                //     success:  (res)=> {
                                //   pics.push(JSON.parse(res.data).message)
                                //     }
                                // })
                            });
                        }
                    });
                } else {
                    wx.showToast({
                        title: '已达到上传上限！',
                        icon: 'none'
                    });
                }
            },

            // 职位亮点复选
            checkboxChange: function checkboxChange(e) {
                console.log(e.detail.value);
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(personalReleaseDetails, [{
        key: 'onLoad',
        value: function onLoad(options) {
            if (options.isWhere == 0) {
                //个人发布
                if (options.pageIdx == 0) {
                    //我要出货
                    this.forData = this.shipment;
                } else if (options.pageIdx == 1) {
                    //技术支持
                    this.forData = this.technology;
                } else if (options.pageIdx == 2) {
                    //职场八卦
                    this.forData = this.eightDiagrams;
                } else {
                    //动态发布
                    this.forData = this.dynamic;
                }
            } else if (options.isWhere == 1) {
                //企业发布
                if (options.pageIdx == 0) {
                    //帮我卖
                    this.forData = this.helpSell;
                } else if (options.pageIdx == 1) {
                    //技术支持
                    this.forData = this.enterpriseTechnology;
                } else if (options.pageIdx == 2) {
                    this.forData = this.wantBuy;
                } else if (options.pageIdx == 3) {
                    this.forData = this.enterpriseDynamic;
                } else if (options.pageIdx == 4) {
                    //职位发布
                    this.forData = this.positionRelease;
                    this.positionTemptation = true;
                }
                // else if(options.pageIdx==2){ //职场八卦
                //     this.forData = this.eightDiagrams 
                // }else{ //动态发布
                //     this.forData = this.dynamic 
                // }
            }
            this.isWhere = options.isWhere;
            this.pageIdx = options.pageIdx;
            wx.setNavigationBarTitle({
                title: options.title
            });
        }
    }]);

    return personalReleaseDetails;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personalReleaseDetails , 'pages/personalReleaseDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsUmVsZWFzZURldGFpbHMuanMiXSwibmFtZXMiOlsiYXJyIiwicGljcyIsInBlcnNvbmFsUmVsZWFzZURldGFpbHMiLCJjb25maWciLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImlzV2hlcmUiLCJwYWdlSWR4IiwiZm9yRGF0YSIsInNoaXBtZW50IiwidGl0bGUiLCJwbGFjZWhvbGRlciIsImFycm93IiwiaW5wdXQiLCJpbnB1dFR5cGUiLCJwaWNrZXJWYWx1ZSIsInBpY2tlclJhbmdlIiwidGVjaG5vbG9neSIsImluZGV4IiwiZWlnaHREaWFncmFtcyIsImR5bmFtaWMiLCJoZWxwU2VsbCIsImVudGVycHJpc2VUZWNobm9sb2d5Iiwid2FudEJ1eSIsImhlaWdodCIsImVudGVycHJpc2VEeW5hbWljIiwicG9zaXRpb25SZWxlYXNlIiwic2VsZWN0RGF0YSIsInNlbGVjdG9yUGlja2VyIiwicG9zaXRpb25UZW1wdGF0aW9uIiwicG9zaXRpb25UZW1wdGF0aW9uRGF0YSIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJ0ZW1wRmlsZVBhdGhzIiwiU3VycGx1c1VwbG9hZE51bSIsImNvdW50IiwibWV0aG9kcyIsImNvbHVtbmNoYW5nZTQiLCJlIiwiZGV0YWlsIiwiY29sdW1uIiwicGlja2VyQ2hhbmdlNCIsInBpY2tlckNoYW5nZTUiLCJwaWNrZXJDaGFuZ2U2IiwiJGFwcGx5IiwicGlja2VyQ2hhbmdlNyIsInBpY2tlckNoYW5nZTgiLCJjaG9vc2VJbWFnZSIsImxlbmd0aCIsInd4Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsImNvbmNhdCIsImZvckVhY2giLCJzaG93VG9hc3QiLCJpY29uIiwiY2hlY2tib3hDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwib3B0aW9ucyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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QVF4RCxPQUFSLElBQWlCLENBQXBCLEVBQXNCO0FBQUU7QUFDMUIseUJBQUtDLE9BQUwsR0FBZSxLQUFLa0IsZUFBcEI7QUFDQSx5QkFBS0csa0JBQUwsR0FBMEIsSUFBMUI7QUFDSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNELGlCQUFLdkIsT0FBTCxHQUFleUQsUUFBUXpELE9BQXZCO0FBQ0EsaUJBQUtDLE9BQUwsR0FBZXdELFFBQVF4RCxPQUF2QjtBQUNBMkMsZUFBR2MscUJBQUgsQ0FBeUI7QUFDckJ0RCx1QkFBT3FELFFBQVFyRDtBQURNLGFBQXpCO0FBR0g7Ozs7RUExaEIrQ3VELGVBQUtDLEk7O2tCQUFwQ2pFLHNCIiwiZmlsZSI6InBlcnNvbmFsUmVsZWFzZURldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IGFyciA9IFtdO1xyXG5sZXQgcGljcyA9IFtdO1xyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcnNvbmFsUmVsZWFzZURldGFpbHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBpc1doZXJlOicnLCAgICAgLy8gIOS4quS6ui/kvIHkuJrlvIDlhbNcclxuICAgICAgICBwYWdlSWR4OicnLFxyXG4gICAgICAgIGZvckRhdGE6W10sICAgICAvL+agueaNruS4quS6ui/kvIHkuJrmjqfliLbmuLLmn5PmlbDmja5cclxuICAgICAgICBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeS4quS6ulxyXG4gICAgICAgIHNoaXBtZW50OlsgICAgIC8v5oiR6KaB5Ye66LSnXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifkuqflk4HlkI3np7AnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeWQjeensCcsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3RleHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifkuqflk4Hku4vnu40nLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeS6p+WTgeivpuaDhScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0Oid0ZXh0YXJlYScsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3RleHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifogZTns7vmlrnlvI8nLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeiBlOezu+aWueW8jycsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J251bWJlcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S7t+agvCcsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36L6T5YWl5Lu35qC8JyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J2lucHV0JyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonbnVtYmVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon6KGM5LiaL+S6p+WTgScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonbXVsdGlTZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTpbXSxcclxuICAgICAgICAgICAgICAgIHBpY2tlclJhbmdlOltbJ+aXoOiEiuafseWKqOeJqScsICfohIrmn7HliqjniaknXSwgWyfmiYHmgKfliqjniaknLCAn57q/5b2i5Yqo54mpJywgJ+eOr+iKguWKqOeJqScsICfova/kvZPliqjniaknLCAn6IqC6IKi5Yqo54mpJ10sIFsn54yq6IKJ57um6JmrJywgJ+WQuOihgOiZqyddXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+WcsOWMuicsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZToncmVnaW9uJyxcclxuICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOltdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVjaG5vbG9neTpbICAvL+aKgOacr+aUr+aMgVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5ZCN56ewJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXlkI3np7AnLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDonaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5LuL57uNJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXkuqflk4Hor6bmg4UnLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDondGV4dGFyZWEnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5L2j6YeRJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXku7fmoLwnLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDonaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidudW1iZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifooYzkuJov5Lqn5ZOBJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidtdWx0aVNlbGVjdG9yJyxcclxuICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOltdLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6NCxcclxuICAgICAgICAgICAgICAgIHBpY2tlclJhbmdlOltbJ+aXoOiEiuafseWKqOeJqScsICfohIrmn7HliqjniaknXSwgWyfmiYHmgKfliqjniaknLCAn57q/5b2i5Yqo54mpJywgJ+eOr+iKguWKqOeJqScsICfova/kvZPliqjniaknLCAn6IqC6IKi5Yqo54mpJ10sIFsn54yq6IKJ57um6JmrJywgJ+WQuOihgOiZqyddXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+WcsOWMuicsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZToncmVnaW9uJyxcclxuICAgICAgICAgICAgICAgIGluZGV4OjUsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTpbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+aIquiHs+aXpeacnycsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonZGF0ZScsXHJcbiAgICAgICAgICAgICAgICBpbmRleDo2LFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6JzIwMTktMDktMDknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZWlnaHREaWFncmFtczpbICAvL+iBjOWcuuWFq+WNplxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5YiG5Lqr5YWr5Y2mJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXopoHliIbkuqvnmoTlhoXlrrknLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDondGV4dGFyZWEnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBkeW5hbWljOlsgLy8g5Y+R5biD5Yqo5oCBXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifmiJHnmoTliqjmgIEnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+i+k+WFpeimgeWIhuS6q+eahOWGheWuuScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0Oid0ZXh0YXJlYScsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3RleHQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5LyB5LiaXHJcbiAgICAgICAgaGVscFNlbGw6WyAgICAgLy/luK7miJHljZZcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S6p+WTgeWQjeensCcsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36L6T5YWl5ZCN56ewJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J2lucHV0JyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTondGV4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+S6p+WTgeivpuaDhScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36L6T5YWl5Lqn5ZOB6K+m5oOFJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J3RleHRhcmVhJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTondGV4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+iBlOezu+aWueW8jycsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36L6T5YWl6IGU57O75pa55byPJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J2lucHV0JyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonbnVtYmVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5Lqn5ZOB5Lu35qC8JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifkurrmsJHluIEv5YWDJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J2lucHV0JyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonbnVtYmVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5L2j6YeRJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifkurrmsJHluIEv5YWDJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J2lucHV0JyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonbnVtYmVyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5pyJ5pWI5pe26Ze0JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidzZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTowLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6Wyc1LTEw5aSpJywnMTAtMTXlpKknLCcxNS0yMOWkqScsJzIwLTI15aSpJywn5LiA5pyIJywn5LiA5pyI5Lul5LiKJ10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDo3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbnRlcnByaXNlVGVjaG5vbG9neTpbICAvL+aKgOacr+aUr+aMgeS8geS4mlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5ZCN56ewJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXlkI3np7AnLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDonaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5LuL57uNJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXkuqflk4Hor6bmg4UnLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDondGV4dGFyZWEnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5L2j6YeRJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXku7fmoLwnLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDonaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidudW1iZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifooYzkuJonLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+mAieaLqScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J3BpY2tlcicsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J211bHRpU2VsZWN0b3InLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6W10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDo0LFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6W1sn5peg6ISK5p+x5Yqo54mpJywgJ+iEiuafseWKqOeJqSddLCBbJ+aJgeaAp+WKqOeJqScsICfnur/lvaLliqjniaknLCAn546v6IqC5Yqo54mpJywgJ+i9r+S9k+WKqOeJqScsICfoioLogqLliqjniaknXSwgWyfnjKrogonnu6bomasnLCAn5ZC46KGA6JmrJ11dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5pe26Ze06ZmQ5Yi2JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidzZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTowLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6Wyc1LTEw5aSpJywnMTAtMTXlpKknLCcxNS0yMOWkqScsJzIwLTI15aSpJywn5LiA5pyIJywn5LiA5pyI5Lul5LiKJ10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDo3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiflnLDljLonLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+mAieaLqScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J3BpY2tlcicsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3JlZ2lvbicsXHJcbiAgICAgICAgICAgICAgICBpbmRleDo1LFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6W10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3YW50QnV5OlsgLy/miJHopoHph4fotK1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+agh+mimCcsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36L6T5YWl5qCH6aKYJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J3RleHRhcmVhJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTondGV4dCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6OTlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+mHh+i0reivpuaDhScsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36L6T5YWl6YeH6LSt6K+m5oOFJyxcclxuICAgICAgICAgICAgICAgIGFycm93OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J3RleHRhcmVhJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTondGV4dCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+aXtumXtOmZkOWIticsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonc2VsZWN0b3InLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6MCxcclxuICAgICAgICAgICAgICAgIHBpY2tlclJhbmdlOlsnNS0xMOWkqScsJzEwLTE15aSpJywnMTUtMjDlpKknLCcyMC0yNeWkqScsJ+S4gOaciCcsJ+S4gOaciOS7peS4iiddLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6N1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5Lu35qC85Yy66Ze0JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidzZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTowLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6Wyc1MC0xMDAnLCcxMDAwLTMwMDAnLCc1MDAwLTEwMDAwJywnMTAwMDAtMTgwMDAnLCcyMDAwMC0zNTAwMCcsJzQwMDAwKyddLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6OFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5Lqk6LSn5Zyw5Yy6JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifpgInmi6nlnLDljLonLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidyZWdpb24nLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6NSxcclxuICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOltdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBlbnRlcnByaXNlRHluYW1pYzpbIC8vIOS8geS4muWKqOaAgVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5LyB5Lia5Yqo5oCBJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXopoHliIbkuqvnmoTlhoXlrrknLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDondGV4dGFyZWEnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwb3NpdGlvblJlbGVhc2U6WyAvL+iBjOS9jeWPkeW4g1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon6IGM5L2N5ZCN56ewJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidzZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTowLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6WyfplIDllK4nLCflt6XnqIvluIgnLCfllK7lkI4nLCfnoJTlj5EnLCfooYzmlL8nLCfov5DokKUnLCfllYbliqEnLCdIUicsJ+i0ouWKoScsJ+W4guWcuicsJ+mrmOeuoScsJ0NFTycsJ+WFtuS7liddLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6N1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon6IGM5L2N6K+m5oOFJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOicx44CB5bel5L2c5YaF5a65IDLjgIHku7vliqHopoHmsYIgM+OAgeeJueWIq+ivtOaYjicsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlucHV0Oid0ZXh0YXJlYScsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J3RleHQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOifkuqflk4EnLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+mAieaLqScsXHJcbiAgICAgICAgICAgICAgICBhcnJvdzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6J3BpY2tlcicsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J211bHRpU2VsZWN0b3InLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6W10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDo0LFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6W1sn5peg6ISK5p+x5Yqo54mpJywgJ+iEiuafseWKqOeJqSddLCBbJ+aJgeaAp+WKqOeJqScsICfnur/lvaLliqjniaknLCAn546v6IqC5Yqo54mpJywgJ+i9r+S9k+WKqOeJqScsICfoioLogqLliqjniaknXSwgWyfnjKrogonnu6bomasnLCAn5ZC46KGA6JmrJ11dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5Zyw5Yy6JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidyZWdpb24nLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6NSxcclxuICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOltdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgc2VsZWN0RGF0YTpmYWxzZSxcclxuICAgICAgICBzZWxlY3RvclBpY2tlcjpmYWxzZSxcclxuICAgICAgICBwb3NpdGlvblRlbXB0YXRpb246ZmFsc2UsIC8v6IGM5L2N5Lqu54K5XHJcbiAgICAgICAgcG9zaXRpb25UZW1wdGF0aW9uRGF0YTpbXHJcbiAgICAgICAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfmioDmnK/lpKfniZsnLGNoZWNrZWQ6ICd0cnVlJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnQ0hOJywgdmFsdWU6ICfpooblr7xOaWNlJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnQlJBJywgdmFsdWU6ICfkupTpmankuIDph5EnfSxcclxuICAgICAgICAgICAge25hbWU6ICdKUE4nLCB2YWx1ZTogJ+WllumHkeS4sOWOmid9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ0VORycsIHZhbHVlOiAn5omB5bmz5YyW566h55CGJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnVFVSJywgdmFsdWU6ICflkITpobnooaXliqknfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIOeUqOaIt+S4iuS8oOWbvueJh1xyXG4gICAgICAgIHRlbXBGaWxlUGF0aHM6W10sXHJcbiAgICAgICAgU3VycGx1c1VwbG9hZE51bTonJyxcclxuICAgICAgICBjb3VudDo5LFxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLy8g5aSa5YiX6YCJ5oup5ZmoXHJcbiAgICAgICAgY29sdW1uY2hhbmdlNChlKXsgLy/mu5HliqjliJdcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+S/ruaUueeahOWIl+S4uicsIGUuZGV0YWlsLmNvbHVtbiwgJ++8jOWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKTtcclxuICAgICAgICAgICAgLy8g5oiR6KaB5Ye66LSnXHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6IHRoaXMuc2hpcG1lbnRbNF0ucGlja2VyUmFuZ2UsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTogdGhpcy5zaGlwbWVudFs0XS5waWNrZXJWYWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyDmioDmnK/mlK/mjIEtLeS4quS6ulxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHBpY2tlclJhbmdlOiB0aGlzLnRlY2hub2xvZ3lbM10ucGlja2VyUmFuZ2UsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTogdGhpcy50ZWNobm9sb2d5WzNdLnBpY2tlclZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIOiBjOS9jeWPkeW4g1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHBpY2tlclJhbmdlOiB0aGlzLnBvc2l0aW9uUmVsZWFzZVsyXS5waWNrZXJSYW5nZSxcclxuICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOiB0aGlzLnRlY2hub2xvZ3lbMl0ucGlja2VyVmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8g5oqA5pyv5pSv5oyBLS3kvIHkuJpcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBwaWNrZXJSYW5nZTogdGhpcy5lbnRlcnByaXNlVGVjaG5vbG9neVszXS5waWNrZXJSYW5nZSxcclxuICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOiB0aGlzLmVudGVycHJpc2VUZWNobm9sb2d5WzNdLnBpY2tlclZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRhdGEucGlja2VyVmFsdWVbZS5kZXRhaWwuY29sdW1uXSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGUuZGV0YWlsLmNvbHVtbikge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGEucGlja2VyVmFsdWVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucGlja2VyUmFuZ2VbMV0gPSBbJ+aJgeaAp+WKqOeJqScsICfnur/lvaLliqjniaknLCAn546v6IqC5Yqo54mpJywgJ+i9r+S9k+WKqOeJqScsICfoioLogqLliqjniaknXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5waWNrZXJSYW5nZVsyXSA9IFsn54yq6IKJ57um6JmrJywgJ+WQuOihgOiZqyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucGlja2VyUmFuZ2VbMV0gPSBbJ+mxvCcsICfkuKTmoJbliqjniaknLCAn54is6KGM5Yqo54mpJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucGlja2VyUmFuZ2VbMl0gPSBbJ+myq+mxvCcsICfluKbpsbwnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhLnBpY2tlclZhbHVlWzFdID0gMDtcclxuICAgICAgICAgICAgICAgIGRhdGEucGlja2VyVmFsdWVbMl0gPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5waWNrZXJWYWx1ZVswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5waWNrZXJWYWx1ZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBpY2tlclJhbmdlWzJdID0gWyfnjKrogonnu6bomasnLCAn5ZC46KGA6JmrJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5waWNrZXJSYW5nZVsyXSA9IFsn6JuU6JmrJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5waWNrZXJSYW5nZVsyXSA9IFsn6JqC6JqBJywgJ+iaguifpSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucGlja2VyUmFuZ2VbMl0gPSBbJ+ays+iajCcsICfonJfniZsnLCAn6Jue6J2TJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5waWNrZXJSYW5nZVsyXSA9IFsn5piG6JmrJywgJ+eUsuWjs+WKqOeJqScsICfom5vlvaLliqjniaknLCAn5aSa6Laz5Yqo54mpJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLnBpY2tlclZhbHVlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucGlja2VyUmFuZ2VbMl0gPSBbJ+myq+mxvCcsICfluKbpsbwnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBpY2tlclJhbmdlWzJdID0gWyfpnZLom5knLCAn5aiD5aiD6bG8J107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5waWNrZXJSYW5nZVsyXSA9IFsn6Jyl6Jy0JywgJ+m+nycsICflo4HomY4nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEucGlja2VyVmFsdWVbMl0gPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBpY2tlckNoYW5nZTQoZSl7XHJcbiAgICAgICAgICAgIC8vIOaIkeimgeWHuui0p1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBtZW50WzRdLnBpY2tlclZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgLy8g5oqA5pyv5pSv5oyBXHJcbiAgICAgICAgICAgIHRoaXMudGVjaG5vbG9neVszXS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICAgIC8vIOiBjOS9jeWPkeW4g1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uUmVsZWFzZVsyXS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICAgIC8vIOaKgOacr+aUr+aMgS0t5LyB5LiaXHJcbiAgICAgICAgICAgIHRoaXMuZW50ZXJwcmlzZVRlY2hub2xvZ3lbM10ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Zyw5Yy66YCJ5oup5ZmoXHJcbiAgICAgICAgcGlja2VyQ2hhbmdlNShlKXtcclxuICAgICAgICAgICAgdGhpcy5zaGlwbWVudFs1XS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMudGVjaG5vbG9neVs0XS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25SZWxlYXNlWzNdLnBpY2tlclZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgdGhpcy5lbnRlcnByaXNlVGVjaG5vbG9neVs1XS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMud2FudEJ1eVs0XS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDml6XmnJ/pgInmi6lcclxuICAgICAgICBwaWNrZXJDaGFuZ2U2KGUpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRhID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnRlY2hub2xvZ3lbNV0ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmma7pgJrpgInmi6nlmahcclxuICAgICAgICBwaWNrZXJDaGFuZ2U3KGUpe1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9yUGlja2VyID0gdHJ1ZVxyXG4gICAgICAgICAgICBpZih0aGlzLmlzV2hlcmUgPT0gMSAmJiB0aGlzLnBhZ2VJZHg9PTApIHRoaXMuaGVscFNlbGxbNV0ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICBpZih0aGlzLmlzV2hlcmUgPT0gMSAmJiB0aGlzLnBhZ2VJZHg9PTQpIHRoaXMucG9zaXRpb25SZWxlYXNlWzBdLnBpY2tlclZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgaWYodGhpcy5pc1doZXJlID09IDEgJiYgdGhpcy5wYWdlSWR4PT0xKSB0aGlzLmVudGVycHJpc2VUZWNobm9sb2d5WzRdLnBpY2tlclZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgaWYodGhpcy5pc1doZXJlID09IDEgJiYgdGhpcy5wYWdlSWR4PT0yKSB0aGlzLndhbnRCdXlbMl0ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5pmu6YCa6YCJ5oup5ZmoXHJcbiAgICAgICAgcGlja2VyQ2hhbmdlOChlKXtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvclBpY2tlciA9IHRydWVcclxuICAgICAgICAgICAgaWYodGhpcy5pc1doZXJlID09IDEgJiYgdGhpcy5wYWdlSWR4PT00KSB0aGlzLnBvc2l0aW9uUmVsZWFzZVs0XS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNXaGVyZSA9PSAxICYmIHRoaXMucGFnZUlkeD09MikgdGhpcy53YW50QnV5WzNdLnBpY2tlclZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgICAgIGNob29zZUltYWdlKCl7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSAgOSAtIHRoaXMudGVtcEZpbGVQYXRocy5sZW5ndGhcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICBpZih0aGlzLnRlbXBGaWxlUGF0aHMubGVuZ3RoIDwgOSl7XHJcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRoaXMuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3MgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIgPSBhcnIuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWxlUGF0aHMgPSBhcnJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdXJwbHVzVXBsb2FkTnVtID0gdGhpcy5jb3VudC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsZVBhdGhzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmw6J2h0dHBzOi8vYXBpLnpoaXp1YmFiYS5jb20vYXBpL3VwX2ltYWdlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmlsZVBhdGg6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaGVhZGVyOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J211bHRpcGFydC9mb3JtLWRhdGEnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ2ZpbGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiAgKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBwaWNzLnB1c2goSlNPTi5wYXJzZShyZXMuZGF0YSkubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflt7Lovr7liLDkuIrkvKDkuIrpmZDvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOiBjOS9jeS6rueCueWkjemAiVxyXG4gICAgICAgIGNoZWNrYm94Q2hhbmdlKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmlzV2hlcmUgPT0gMCl7IC8v5Liq5Lq65Y+R5biDXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucGFnZUlkeD09MCl7IC8v5oiR6KaB5Ye66LSnXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvckRhdGEgPSB0aGlzLnNoaXBtZW50XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG9wdGlvbnMucGFnZUlkeD09MSl7IC8v5oqA5pyv5pSv5oyBXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvckRhdGEgPSB0aGlzLnRlY2hub2xvZ3kgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG9wdGlvbnMucGFnZUlkeD09Mil7IC8v6IGM5Zy65YWr5Y2mXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvckRhdGEgPSB0aGlzLmVpZ2h0RGlhZ3JhbXMgXHJcbiAgICAgICAgICAgIH1lbHNleyAvL+WKqOaAgeWPkeW4g1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JEYXRhID0gdGhpcy5keW5hbWljIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYob3B0aW9ucy5pc1doZXJlID09IDEpeyAvL+S8geS4muWPkeW4g1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLnBhZ2VJZHggPT0gMCl7IC8v5biu5oiR5Y2WXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvckRhdGEgPSB0aGlzLmhlbHBTZWxsXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG9wdGlvbnMucGFnZUlkeCA9PSAxKXsgLy/mioDmnK/mlK/mjIFcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yRGF0YSA9IHRoaXMuZW50ZXJwcmlzZVRlY2hub2xvZ3lcclxuICAgICAgICAgICAgfWVsc2UgaWYob3B0aW9ucy5wYWdlSWR4ID09IDIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JEYXRhID0gdGhpcy53YW50QnV5XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG9wdGlvbnMucGFnZUlkeCA9PSAzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yRGF0YSA9IHRoaXMuZW50ZXJwcmlzZUR5bmFtaWNcclxuICAgICAgICAgICAgfWVsc2UgaWYob3B0aW9ucy5wYWdlSWR4PT00KXsgLy/ogYzkvY3lj5HluINcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yRGF0YSA9IHRoaXMucG9zaXRpb25SZWxlYXNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uVGVtcHRhdGlvbiA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmKG9wdGlvbnMucGFnZUlkeD09Mil7IC8v6IGM5Zy65YWr5Y2mXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmZvckRhdGEgPSB0aGlzLmVpZ2h0RGlhZ3JhbXMgXHJcbiAgICAgICAgICAgIC8vIH1lbHNleyAvL+WKqOaAgeWPkeW4g1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5mb3JEYXRhID0gdGhpcy5keW5hbWljIFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNXaGVyZSA9IG9wdGlvbnMuaXNXaGVyZVxyXG4gICAgICAgIHRoaXMucGFnZUlkeCA9IG9wdGlvbnMucGFnZUlkeDtcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogb3B0aW9ucy50aXRsZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyBPdGhlciBwcm9wZXJ0aWVzXHJcbn1cclxuIl19