'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../utils/utils.js');

var _api = require('./../../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var personalRegistration = function (_wepy$page) {
    _inherits(personalRegistration, _wepy$page);

    function personalRegistration() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, personalRegistration);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = personalRegistration.__proto__ || Object.getPrototypeOf(personalRegistration)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '个人注册',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.components = {}, _this.data = {
            userId: '',
            tempFilePaths: '', //用户图像
            avatarUrl: '', //用户微信头像
            personalInputData: [{
                title: '姓名',
                placeholder: '请输入姓名',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '就职公司',
                placeholder: '请输入公司名称',
                arrow: false,
                input: 'input',
                inputType: 'text'
            }, {
                title: '职位',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['销售', '工程师', '售后', '研发', '行政', '运营', '商务', 'HR', '财务', '市场', '高管', 'CEO', '其他'],
                selectorPicker: false
            }, {
                title: '行业',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'selector',
                pickerValue: 0,
                pickerRange: ['贸易', '制造业', '房地产', '保健品', 'IT/互联网', '通信/电子', '汽车/配件', '生物/环保', '医疗/器械', '金融/投资', '能源/电力', '建筑/建材', '化工/纺织', '零售/快消', '教育/科研', '广告/传媒', '企业咨询'],
                index: 8,
                selectorPicker: false
            }, {
                title: '地区',
                placeholder: '请选择',
                arrow: true,
                input: 'picker',
                inputType: 'region',
                pickerValue: [],
                index: 3
            }],
            iconColor: '#9999',
            phoneValue: '',
            phoneNumberValue: '',
            customIndex: [0, 0, 0], //当前产品选中数组的下标值
            //当前选中数组
            onlyArray: [[], [], []],
            checkInputStatus: false,
            checkPhoneValue: null
        }, _this.methods = {
            // 控制手机号显示隐藏
            controlPhoneNum: function controlPhoneNum() {
                if ((0, _utils.vailPhone)(this.phoneNumberValue)) {
                    if (this.iconColor == '#9999') {
                        this.iconColor = '#00D4D7';
                        this.phoneValue = this.phoneNumberValue.substring(0, 3) + '****' + this.phoneNumberValue.substring(7);
                    } else {
                        this.iconColor = '#9999';
                        this.phoneValue = this.phoneNumberValue;
                    }
                } else {
                    (0, _utils.toast)('请输入正确的手机号');
                }
            },

            // 职位选择
            pickerChange2: function pickerChange2(e) {
                if (e.detail.value < 4) {
                    //插入领域
                    var field = {
                        title: '领域',
                        placeholder: '请选择',
                        arrow: true,
                        input: 'picker',
                        inputType: 'selector',
                        pickerValue: 0,
                        pickerRange: ['渠道', '区域', '财税', '教育', '政府', '制造', '金融', '公检法', '企业', '交通', '医疗', '烟草', '能源', '外企', '游戏', '广电', '军工', '气象', '互联网', '运营商', '智慧城市', '其他'],
                        index: 7,
                        selectorPicker: false
                    };
                    var industry = {
                        title: '产品',
                        placeholder: '请选择',
                        arrow: true,
                        input: 'picker',
                        inputType: 'multiSelector',
                        pickerValue: this.customIndex,
                        pickerRange: this.onlyArray,
                        index: 9
                    };
                    var joinSwitch = false;
                    var positionSelect = false;
                    var selectIT = false;
                    var itProduct = false;
                    this.personalInputData.forEach(function (element) {
                        if (element.title == '领域') {
                            joinSwitch = true;
                        }

                        if (element.title == '职位') {
                            if (element.pickerValue == 0 || element.pickerValue == 1 || element.pickerValue == 2 || element.pickerValue == 3) {
                                positionSelect = true;
                            }
                        }
                        if (element.title == '产品') {
                            itProduct = true;
                        }
                        if (element.title == '行业') {
                            if (element.pickerValue == 4) selectIT = true;
                        }
                    });
                    if (joinSwitch) {
                        // return
                    } else {
                        this.personalInputData.splice(3, 0, field); //插入领域
                        if (selectIT && positionSelect & !itProduct) {
                            //插入互联网产品
                            this.personalInputData.splice(5, 0, industry);
                        }
                    }
                } else {
                    var hiddenSwitch = false;
                    var productHave = false;
                    var productIndex = 4;
                    this.personalInputData.forEach(function (element, index) {
                        if (element.title == '领域') {
                            hiddenSwitch = true;
                        }
                        // 产品显示控制
                        if (element.title == '产品') {
                            productHave = true;
                            productIndex = index - 1;
                        }
                    });
                    if (hiddenSwitch) {
                        this.personalInputData.splice(3, 1);
                    }
                    if (productHave) {
                        this.personalInputData.splice(productIndex, 1);
                    }
                }
                this.personalInputData[2].selectorPicker = true;
                this.personalInputData[2].pickerValue = e.detail.value;
            },

            // 领域选择
            pickerChange7: function pickerChange7(e) {
                this.personalInputData[3].pickerValue = e.detail.value;
                this.personalInputData[3].selectorPicker = true;
            },

            // 行业选择
            pickerChange8: function pickerChange8(e) {
                var _this2 = this;

                var dataIndex = 3;
                var positionSelect = false;
                this.personalInputData.forEach(function (element) {
                    if (element.title == '领域') {
                        dataIndex = 4;
                    }
                    if (element.title == '职位') {
                        if (element.selectorPicker) {
                            if (element.pickerValue == 0 || element.pickerValue == 1 || element.pickerValue == 2 || element.pickerValue == 3) {
                                positionSelect = true;
                            }
                        }
                    }
                });
                if (e.detail.value == 4 && positionSelect) {
                    //行业选择IT互联网
                    var industry = {
                        title: '产品',
                        placeholder: '请选择',
                        arrow: true,
                        input: 'picker',
                        inputType: 'multiSelector',
                        pickerValue: this.customIndex,
                        pickerRange: this.onlyArray,
                        index: 9
                    };
                    var industryHave = false;
                    this.personalInputData.forEach(function (element) {
                        if (element.title == '产品') {
                            industryHave = true;
                        }
                    });
                    if (!industryHave) {
                        this.personalInputData.splice(this.personalInputData.length - 1, 0, industry);
                    }
                } else {
                    var spliceItem = false;
                    var spliceIndex = 5;
                    this.personalInputData.forEach(function (element) {
                        if (element.title == '产品') {
                            spliceIndex = 4;
                            _this2.personalInputData.forEach(function (ele) {
                                if (ele.title == '领域') {
                                    spliceIndex = 5;
                                }
                            });
                            spliceItem = true;
                        }
                    });
                    if (spliceItem) {
                        this.personalInputData.splice(spliceIndex, 1);
                    }
                }
                this.personalInputData[dataIndex].pickerValue = e.detail.value;
                this.personalInputData[dataIndex].selectorPicker = true;
            },

            // 产品滑动选择
            columnchange9: function columnchange9(e) {
                // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
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
            pickerChange9: function pickerChange9(e) {
                // console.log(e.detail.value)
            },

            // 地区选择器
            pickerChange3: function pickerChange3(e) {
                this.personalInputData[this.personalInputData.length - 1].pickerValue = e.detail.value;
            },

            // 上传图像
            chooseImage: function chooseImage() {
                var _this3 = this;

                wx.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera'],
                    success: function success(res) {
                        _this3.tempFilePaths = res.tempFilePaths[0];
                        _this3.$apply();
                        wx.uploadFile({
                            url: _api.uploadImg,
                            filePath: res.tempFilePaths[0],
                            header: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            name: 'file',
                            success: function success(res) {
                                _this3.tempFilePaths = res.data;
                                _this3.$apply();
                            }
                        });
                    }
                });
            },

            // 手机号输入监听
            phoneInput: function phoneInput(e) {
                var _this4 = this;

                this.phoneNumberValue = e.detail.value;
                if (e.detail.value.length == 11) {
                    wx.showModal({
                        title: '验证提示',
                        content: '我们将发送短信验证码至当前所填写的手机中,注意查收',
                        showCancel: true,
                        cancelText: '取消',
                        cancelColor: '#000000',
                        confirmText: '确定',
                        confirmColor: '#3CC51F',
                        success: function success(result) {
                            if (result.confirm) {
                                (0, _utils.request)(_api.checkPhone, "POST", { mobile: _this4.phoneNumberValue, event: 'register' }).then(function (res) {
                                    (0, _utils.toast)(res.data.msg);
                                    if (res.data.code == 1) {
                                        _this4.checkInputStatus = true;
                                        _this4.$apply();
                                    }
                                });
                            }
                        }
                    });
                }
            },

            // 提交表单
            formSubmit: function formSubmit(e) {
                var _this5 = this;

                var formValue = e.detail.value;
                var dataComplete = true;
                Object.keys(formValue).forEach(function (key) {
                    if (formValue[key] == '') {
                        dataComplete = false;
                    };
                });
                if (dataComplete) {
                    var data = {
                        userId: this.userId, // 用户ID
                        name: formValue.input0, // 姓名
                        company: formValue.input1, //公司
                        phoneNum: formValue.phoneNum, // 电话
                        sms: formValue.sms, //短信验证码
                        phoneNumHidden: this.iconColor == '#9999' ? 0 : 1, //电话显示隐藏
                        position: this.personalInputData[2].pickerRange[formValue.picker2] //职位
                        /**
                         * 领域、行业、产品、地区 为变值
                        */
                    };
                    if (this.tempFilePaths) data.avatarurl = this.tempFilePaths; //用户上传的图像
                    // field industry product address
                    var fieldHave = false;
                    this.personalInputData.forEach(function (element, index) {
                        if (element.title == '产品') {
                            data.industry = _this5.personalInputData[4].pickerRange[formValue.picker4];
                            data.product = _this5.personalInputData[5].pickerRange[0][_this5.personalInputData[5].pickerValue[0]] + ',' + _this5.personalInputData[5].pickerRange[1][_this5.personalInputData[5].pickerValue[1]] + ',' + _this5.personalInputData[5].pickerRange[2][_this5.personalInputData[5].pickerValue[2]];
                            data.field = _this5.personalInputData[3].pickerRange[formValue.picker3];
                            data.address = _this5.personalInputData[6].pickerValue[0] + ',' + _this5.personalInputData[6].pickerValue[1] + ',' + _this5.personalInputData[6].pickerValue[2];
                        } else if (element.title == '领域') {
                            fieldHave = true;
                            data.industry = _this5.personalInputData[4].pickerRange[formValue.picker4];
                            data.field = _this5.personalInputData[3].pickerRange[formValue.picker3];
                            data.address = _this5.personalInputData[5].pickerValue[0] + ',' + _this5.personalInputData[5].pickerValue[1] + ',' + _this5.personalInputData[5].pickerValue[2];
                        }
                    });
                    if (!fieldHave) {
                        data.industry = this.personalInputData[3].pickerRange[formValue.picker3];
                        data.address = this.personalInputData[4].pickerValue[0] + ',' + this.personalInputData[4].pickerValue[1] + ',' + this.personalInputData[4].pickerValue[2];
                    }
                    (0, _utils.request)(_api.userRegister, 'POST', data).then(function (res) {
                        if (res.data.data == 1) {
                            var loginData = wx.getStorageSync('loginData');
                            loginData.find = 1;
                            wx.setStorage({
                                key: 'loginData',
                                data: loginData,
                                success: function success(result) {
                                    wx.showToast({
                                        title: '注册成功',
                                        icon: 'success',
                                        duration: 1000,
                                        success: function success(result) {
                                            setTimeout(function () {
                                                wx.reLaunch({
                                                    url: '../../pages/index'
                                                });
                                            }, 1000);
                                        }
                                    });
                                }
                            });
                        } else {
                            if (res.data.msg = '验证码不正确') _this5.checkPhoneValue = '';
                            console.log(res.data);
                            (0, _utils.toast)(res.data.msg || '服务器数据异常');
                            _this5.$apply();
                        }
                    }).catch(function () {
                        (0, _utils.toast)('服务器数据异常');
                    });
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(personalRegistration, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var _this6 = this;

            console.log(options.userId);
            this.userId = options.userId;
            this.avatarUrl = options.avatarUrl;
            var productList = require('./../../utils/listData.js').data;
            // console.log(productList)
            productList.forEach(function (element) {
                _this6.onlyArray[0].push(element.goods_category_one_name);
            });
            productList[0].goods_category_two.forEach(function (element) {
                _this6.onlyArray[1].push(element.goods_category_two_name);
            });
            productList[0].goods_category_two[0].goods.forEach(function (element) {
                _this6.onlyArray[2].push(element.goods_name);
            });
            this.$apply();
        }
    }]);

    return personalRegistration;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(personalRegistration , 'subpackage/square/personalRegistration'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsUmVnaXN0cmF0aW9uLmpzIl0sIm5hbWVzIjpbInBlcnNvbmFsUmVnaXN0cmF0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJkYXRhIiwidXNlcklkIiwidGVtcEZpbGVQYXRocyIsImF2YXRhclVybCIsInBlcnNvbmFsSW5wdXREYXRhIiwidGl0bGUiLCJwbGFjZWhvbGRlciIsImFycm93IiwiaW5wdXQiLCJpbnB1dFR5cGUiLCJwaWNrZXJWYWx1ZSIsInBpY2tlclJhbmdlIiwic2VsZWN0b3JQaWNrZXIiLCJpbmRleCIsImljb25Db2xvciIsInBob25lVmFsdWUiLCJwaG9uZU51bWJlclZhbHVlIiwiY3VzdG9tSW5kZXgiLCJvbmx5QXJyYXkiLCJjaGVja0lucHV0U3RhdHVzIiwiY2hlY2tQaG9uZVZhbHVlIiwibWV0aG9kcyIsImNvbnRyb2xQaG9uZU51bSIsInN1YnN0cmluZyIsInBpY2tlckNoYW5nZTIiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJmaWVsZCIsImluZHVzdHJ5Iiwiam9pblN3aXRjaCIsInBvc2l0aW9uU2VsZWN0Iiwic2VsZWN0SVQiLCJpdFByb2R1Y3QiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNwbGljZSIsImhpZGRlblN3aXRjaCIsInByb2R1Y3RIYXZlIiwicHJvZHVjdEluZGV4IiwicGlja2VyQ2hhbmdlNyIsInBpY2tlckNoYW5nZTgiLCJkYXRhSW5kZXgiLCJpbmR1c3RyeUhhdmUiLCJsZW5ndGgiLCJzcGxpY2VJdGVtIiwic3BsaWNlSW5kZXgiLCJlbGUiLCJjb2x1bW5jaGFuZ2U5IiwiY3VzdG9tQXJyYXkiLCJyZXF1aXJlIiwiY29sdW1uIiwic2VhcmNoQ29sdW1uIiwiaSIsImFycjEiLCJhcnIyIiwiaiIsImdvb2RzX2NhdGVnb3J5X3R3byIsInB1c2giLCJnb29kc19jYXRlZ29yeV90d29fbmFtZSIsImsiLCJnb29kcyIsImdvb2RzX25hbWUiLCIkYXBwbHkiLCJwaWNrZXJDaGFuZ2U5IiwicGlja2VyQ2hhbmdlMyIsImNob29zZUltYWdlIiwid3giLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJ1cGxvYWRGaWxlIiwidXJsIiwidXBsb2FkSW1nIiwiZmlsZVBhdGgiLCJoZWFkZXIiLCJuYW1lIiwicGhvbmVJbnB1dCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsVGV4dCIsImNhbmNlbENvbG9yIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiLCJyZXN1bHQiLCJjb25maXJtIiwiY2hlY2tQaG9uZSIsIm1vYmlsZSIsImV2ZW50IiwidGhlbiIsIm1zZyIsImNvZGUiLCJmb3JtU3VibWl0IiwiZm9ybVZhbHVlIiwiZGF0YUNvbXBsZXRlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImlucHV0MCIsImNvbXBhbnkiLCJpbnB1dDEiLCJwaG9uZU51bSIsInNtcyIsInBob25lTnVtSGlkZGVuIiwicG9zaXRpb24iLCJwaWNrZXIyIiwiYXZhdGFydXJsIiwiZmllbGRIYXZlIiwicGlja2VyNCIsInByb2R1Y3QiLCJwaWNrZXIzIiwiYWRkcmVzcyIsInVzZXJSZWdpc3RlciIsImxvZ2luRGF0YSIsImdldFN0b3JhZ2VTeW5jIiwiZmluZCIsInNldFN0b3JhZ2UiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwicmVMYXVuY2giLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJldmVudHMiLCJvcHRpb25zIiwicHJvZHVjdExpc3QiLCJnb29kc19jYXRlZ29yeV9vbmVfbmFtZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxvQjs7Ozs7Ozs7Ozs7Ozs7c05BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDRC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QUtBLE1BQUwsR0FBY2dJLFFBQVFoSSxNQUF0QjtBQUNBLGlCQUFLRSxTQUFMLEdBQWlCOEgsUUFBUTlILFNBQXpCO0FBQ0EsZ0JBQUkrSCxjQUFjaEYsUUFBUSx5QkFBUixFQUFtQ2xELElBQXJEO0FBQ0E7QUFDQWtJLHdCQUFZaEcsT0FBWixDQUFvQixtQkFBVztBQUMzQix1QkFBS2hCLFNBQUwsQ0FBZSxDQUFmLEVBQWtCd0MsSUFBbEIsQ0FBdUJ2QixRQUFRZ0csdUJBQS9CO0FBQ0gsYUFGRDtBQUdBRCx3QkFBWSxDQUFaLEVBQWV6RSxrQkFBZixDQUFrQ3ZCLE9BQWxDLENBQTBDLG1CQUFXO0FBQ2pELHVCQUFLaEIsU0FBTCxDQUFlLENBQWYsRUFBa0J3QyxJQUFsQixDQUF1QnZCLFFBQVF3Qix1QkFBL0I7QUFDSCxhQUZEO0FBR0F1RSx3QkFBWSxDQUFaLEVBQWV6RSxrQkFBZixDQUFrQyxDQUFsQyxFQUFxQ0ksS0FBckMsQ0FBMkMzQixPQUEzQyxDQUFtRCxtQkFBVztBQUMxRCx1QkFBS2hCLFNBQUwsQ0FBZSxDQUFmLEVBQWtCd0MsSUFBbEIsQ0FBdUJ2QixRQUFRMkIsVUFBL0I7QUFDSCxhQUZEO0FBR0EsaUJBQUtDLE1BQUw7QUFDSDs7OztFQXBhNkNxRSxlQUFLQyxJOztrQkFBbEMxSSxvQiIsImZpbGUiOiJwZXJzb25hbFJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHsgcmVxdWVzdCx2YWlsUGhvbmUsdG9hc3QgfSBmcm9tICcuLi8uLi91dGlscy91dGlscy5qcydcclxuaW1wb3J0IHsgdXBsb2FkSW1nLHVzZXJSZWdpc3RlcixjaGVja1Bob25lIH0gZnJvbSAnLi4vLi4vYXBpL2FwaS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcnNvbmFsUmVnaXN0cmF0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65rOo5YaMJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4J1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXNlcklkOicnLFxyXG4gICAgICAgIHRlbXBGaWxlUGF0aHM6JycsIC8v55So5oi35Zu+5YOPXHJcbiAgICAgICAgYXZhdGFyVXJsOicnLC8v55So5oi35b6u5L+h5aS05YOPXHJcbiAgICAgICAgcGVyc29uYWxJbnB1dERhdGE6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5aeT5ZCNJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXlp5PlkI0nLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDonaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5bCx6IGM5YWs5Y+4JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fovpPlhaXlhazlj7jlkI3np7AnLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDonaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOid0ZXh0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon6IGM5L2NJyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidzZWxlY3RvcicsXHJcbiAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTowLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6WyfplIDllK4nLCflt6XnqIvluIgnLCfllK7lkI4nLCfnoJTlj5EnLCfooYzmlL8nLCfov5DokKUnLCfllYbliqEnLCdIUicsJ+i0ouWKoScsJ+W4guWcuicsJ+mrmOeuoScsJ0NFTycsJ+WFtuS7liddLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JQaWNrZXI6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J+ihjOS4micsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTonc2VsZWN0b3InLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6MCxcclxuICAgICAgICAgICAgICAgIHBpY2tlclJhbmdlOlsn6LS45piTJywn5Yi26YCg5LiaJywn5oi/5Zyw5LqnJywn5L+d5YGl5ZOBJywnSVQv5LqS6IGU572RJywn6YCa5L+hL+eUteWtkCcsJ+axvei9pi/phY3ku7YnLCfnlJ/niakv546v5L+dJywn5Yy755aXL+WZqOaisCcsJ+mHkeiejS/mipXotYQnLCfog73mupAv55S15YqbJywn5bu6562RL+W7uuadkCcsJ+WMluW3pS/nurrnu4cnLCfpm7bllK4v5b+r5raIJywn5pWZ6IKyL+enkeeglCcsJ+W5v+WRii/kvKDlqpInLCfkvIHkuJrlkqjor6InXSxcclxuICAgICAgICAgICAgICAgIGluZGV4OjgsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvclBpY2tlcjpmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTon5Zyw5Yy6JyxcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOidyZWdpb24nLFxyXG4gICAgICAgICAgICAgICAgcGlja2VyVmFsdWU6W10sXHJcbiAgICAgICAgICAgICAgICBpbmRleDozXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpY29uQ29sb3I6JyM5OTk5JyxcclxuICAgICAgICBwaG9uZVZhbHVlOicnLFxyXG4gICAgICAgIHBob25lTnVtYmVyVmFsdWU6JycsXHJcbiAgICAgICAgY3VzdG9tSW5kZXg6IFswLCAwLCAwXSwgLy/lvZPliY3kuqflk4HpgInkuK3mlbDnu4TnmoTkuIvmoIflgLxcclxuICAgICAgICAvL+W9k+WJjemAieS4reaVsOe7hFxyXG4gICAgICAgIG9ubHlBcnJheTogW1xyXG4gICAgICAgICAgICBbXSxcclxuICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIFtdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjaGVja0lucHV0U3RhdHVzOmZhbHNlLFxyXG4gICAgICAgIGNoZWNrUGhvbmVWYWx1ZTpudWxsXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvLyDmjqfliLbmiYvmnLrlj7fmmL7npLrpmpDol49cclxuICAgICAgICBjb250cm9sUGhvbmVOdW0oKXtcclxuICAgICAgICAgICAgaWYodmFpbFBob25lKHRoaXMucGhvbmVOdW1iZXJWYWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pY29uQ29sb3IgPT0gJyM5OTk5Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uQ29sb3IgPSAnIzAwRDRENydcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob25lVmFsdWUgPSB0aGlzLnBob25lTnVtYmVyVmFsdWUuc3Vic3RyaW5nKDAsIDMpICsgJyoqKionICsgdGhpcy5waG9uZU51bWJlclZhbHVlLnN1YnN0cmluZyg3KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbkNvbG9yID0gJyM5OTk5J1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhvbmVWYWx1ZSA9IHRoaXMucGhvbmVOdW1iZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDogYzkvY3pgInmi6lcclxuICAgICAgICBwaWNrZXJDaGFuZ2UyKGUpe1xyXG4gICAgICAgICAgICBpZihlLmRldGFpbC52YWx1ZTw0KXsgLy/mj5LlhaXpoobln59cclxuICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTon6aKG5Z+fJyxcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjon6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OidwaWNrZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTonc2VsZWN0b3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6WyfmuKDpgZMnLCfljLrln58nLCfotKLnqI4nLCfmlZnogrInLCfmlL/lupwnLCfliLbpgKAnLCfph5Hono0nLCflhazmo4Dms5UnLCfkvIHkuJonLCfkuqTpgJonLCfljLvnlpcnLCfng5/ojYknLCfog73mupAnLCflpJbkvIEnLCfmuLjmiI8nLCflub/nlLUnLCflhpvlt6UnLCfmsJTosaEnLCfkupLogZTnvZEnLCfov5DokKXllYYnLCfmmbrmhafln47luIInLCflhbbku5YnXSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDo3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yUGlja2VyOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZHVzdHJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOifkuqflk4EnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOifor7fpgInmi6knLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6J3BpY2tlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOidtdWx0aVNlbGVjdG9yJyxcclxuICAgICAgICAgICAgICAgICAgICBwaWNrZXJWYWx1ZTp0aGlzLmN1c3RvbUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlclJhbmdlOnRoaXMub25seUFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OjlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgam9pblN3aXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0SVQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBpdFByb2R1Y3QgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudGl0bGUgPT0gJ+mihuWfnycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luU3dpdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC50aXRsZSA9PSAn6IGM5L2NJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQucGlja2VyVmFsdWUgPT0gMCB8fGVsZW1lbnQucGlja2VyVmFsdWUgPT0gMSB8fGVsZW1lbnQucGlja2VyVmFsdWUgPT0gMiB8fGVsZW1lbnQucGlja2VyVmFsdWUgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblNlbGVjdCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09ICfkuqflk4EnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRQcm9kdWN0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09ICfooYzkuJonKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5waWNrZXJWYWx1ZSA9PSA0KSBzZWxlY3RJVCA9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYoam9pblN3aXRjaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbmFsSW5wdXREYXRhLnNwbGljZSgzLCAwLCBmaWVsZCk7IC8v5o+S5YWl6aKG5Z+fXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZWN0SVQgJiYgcG9zaXRpb25TZWxlY3QgJiAhaXRQcm9kdWN0KXsgLy/mj5LlhaXkupLogZTnvZHkuqflk4FcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YS5zcGxpY2UoNSwgMCwgaW5kdXN0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGlkZGVuU3dpdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdEhhdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0SW5kZXggPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YS5mb3JFYWNoKChlbGVtZW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC50aXRsZSA9PSAn6aKG5Z+fJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlblN3aXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB5pi+56S65o6n5Yi2XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC50aXRsZSA9PSAn5Lqn5ZOBJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RIYXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SW5kZXggPSBpbmRleC0xXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZihoaWRkZW5Td2l0Y2gpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxJbnB1dERhdGEuc3BsaWNlKDMsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocHJvZHVjdEhhdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxJbnB1dERhdGEuc3BsaWNlKHByb2R1Y3RJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YVsyXS5zZWxlY3RvclBpY2tlciA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YVsyXS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDpoobln5/pgInmi6lcclxuICAgICAgICBwaWNrZXJDaGFuZ2U3KGUpe1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbmFsSW5wdXREYXRhWzNdLnBpY2tlclZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YVszXS5zZWxlY3RvclBpY2tlciA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOihjOS4mumAieaLqVxyXG4gICAgICAgIHBpY2tlckNoYW5nZTgoZSl7XHJcbiAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSAzO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25TZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC50aXRsZSA9PSAn6aKG5Z+fJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4ID0gNFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC50aXRsZSA9PSAn6IGM5L2NJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5zZWxlY3RvclBpY2tlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQucGlja2VyVmFsdWUgPT0gMCB8fGVsZW1lbnQucGlja2VyVmFsdWUgPT0gMSB8fGVsZW1lbnQucGlja2VyVmFsdWUgPT0gMiB8fGVsZW1lbnQucGlja2VyVmFsdWUgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblNlbGVjdCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKGUuZGV0YWlsLnZhbHVlID09IDQgJiYgcG9zaXRpb25TZWxlY3QpeyAvL+ihjOS4mumAieaLqUlU5LqS6IGU572RXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kdXN0cnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6J+S6p+WTgScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6J+ivt+mAieaLqScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3c6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDoncGlja2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6J211bHRpU2VsZWN0b3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlclZhbHVlOnRoaXMuY3VzdG9tSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyUmFuZ2U6dGhpcy5vbmx5QXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6OVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmR1c3RyeUhhdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxJbnB1dERhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09ICfkuqflk4EnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kdXN0cnlIYXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYoIWluZHVzdHJ5SGF2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YS5zcGxpY2UodGhpcy5wZXJzb25hbElucHV0RGF0YS5sZW5ndGgtMSwgMCwgaW5kdXN0cnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCBzcGxpY2VJdGVtID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3BsaWNlSW5kZXggPSA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudGl0bGUgPT0gJ+S6p+WTgScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpY2VJbmRleCA9IDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YS5mb3JFYWNoKGVsZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlLnRpdGxlID09ICfpoobln58nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpY2VJbmRleCA9IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaWNlSXRlbSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmKHNwbGljZUl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uYWxJbnB1dERhdGEuc3BsaWNlKHNwbGljZUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbmFsSW5wdXREYXRhW2RhdGFJbmRleF0ucGlja2VyVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbmFsSW5wdXREYXRhW2RhdGFJbmRleF0uc2VsZWN0b3JQaWNrZXIgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDkuqflk4Hmu5HliqjpgInmi6lcclxuICAgICAgICBjb2x1bW5jaGFuZ2U5KGUpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5L+u5pS555qE5YiX5Li6JywgZS5kZXRhaWwuY29sdW1uLCAn77yM5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgICAgICAgICBsZXQgY3VzdG9tQXJyYXkgPSByZXF1aXJlKCcuLi8uLi91dGlscy9saXN0RGF0YS5qcycpLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21JbmRleCA9IHRoaXMuY3VzdG9tSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvbmx5QXJyYXkgPSB0aGlzLm9ubHlBcnJheTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1c3RvbUluZGV4W2UuZGV0YWlsLmNvbHVtbl0gPSBlLmRldGFpbC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hDb2x1bW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1c3RvbUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFycjEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyMiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IGN1c3RvbUluZGV4WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjdXN0b21BcnJheVtpXS5nb29kc19jYXRlZ29yeV90d28ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyMS5wdXNoKGN1c3RvbUFycmF5W2ldLmdvb2RzX2NhdGVnb3J5X3R3b1tqXS5nb29kc19jYXRlZ29yeV90d29fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IGN1c3RvbUluZGV4WzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY3VzdG9tQXJyYXlbaV0uZ29vZHNfY2F0ZWdvcnlfdHdvW2pdLmdvb2RzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIyLnB1c2goY3VzdG9tQXJyYXlbaV0uZ29vZHNfY2F0ZWdvcnlfdHdvW2pdLmdvb2RzW2tdLmdvb2RzX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubHlBcnJheVsyXSA9IGFycjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25seUFycmF5WzFdID0gYXJyMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGUuZGV0YWlsLmNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUluZGV4WzFdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21JbmRleFsyXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ29sdW1uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tSW5kZXhbMl0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaENvbHVtbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbmx5QXJyYXkgPSBvbmx5QXJyYXlcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21JbmRleCA9IGN1c3RvbUluZGV4XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS6p+WTgemAieaLqVxyXG4gICAgICAgIHBpY2tlckNoYW5nZTkoZSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Zyw5Yy66YCJ5oup5ZmoXHJcbiAgICAgICAgcGlja2VyQ2hhbmdlMyhlKXtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25hbElucHV0RGF0YVt0aGlzLnBlcnNvbmFsSW5wdXREYXRhLmxlbmd0aC0xXS5waWNrZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDkuIrkvKDlm77lg49cclxuICAgICAgICBjaG9vc2VJbWFnZSgpe1xyXG4gICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1swXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOnVwbG9hZEltZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAgKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWxlUGF0aHMgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOaJi+acuuWPt+i+k+WFpeebkeWQrFxyXG4gICAgICAgIHBob25lSW5wdXQoZSl7XHJcbiAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXJWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICAgIGlmKGUuZGV0YWlsLnZhbHVlLmxlbmd0aCA9PSAxMSl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6aqM6K+B5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5oiR5Lus5bCG5Y+R6YCB55+t5L+h6aqM6K+B56CB6Iez5b2T5YmN5omA5aGr5YaZ55qE5omL5py65LitLOazqOaEj+afpeaUticsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAn5Y+W5raIJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJyxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQ29sb3I6ICcjM0NDNTFGJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdChjaGVja1Bob25lLFwiUE9TVFwiLHttb2JpbGU6dGhpcy5waG9uZU51bWJlclZhbHVlLGV2ZW50OidyZWdpc3Rlcid9KS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlcy5kYXRhLm1zZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSW5wdXRTdGF0dXMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmj5DkuqTooajljZVcclxuICAgICAgICBmb3JtU3VibWl0KGUpe1xyXG4gICAgICAgICAgICBsZXQgZm9ybVZhbHVlID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkYXRhQ29tcGxldGUgPSB0cnVlXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZvcm1WYWx1ZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgICAgICAgICAgaWYoZm9ybVZhbHVlW2tleV0gPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFDb21wbGV0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYoZGF0YUNvbXBsZXRlKXtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDp0aGlzLnVzZXJJZCwgLy8g55So5oi3SURcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOmZvcm1WYWx1ZS5pbnB1dDAsIC8vIOWnk+WQjVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6Zm9ybVZhbHVlLmlucHV0MSwgLy/lhazlj7hcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bTpmb3JtVmFsdWUucGhvbmVOdW0sIC8vIOeUteivnVxyXG4gICAgICAgICAgICAgICAgICAgIHNtczpmb3JtVmFsdWUuc21zLC8v55+t5L+h6aqM6K+B56CBXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1IaWRkZW46dGhpcy5pY29uQ29sb3I9PScjOTk5OSc/MDoxLCAvL+eUteivneaYvuekuumakOiXj1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnRoaXMucGVyc29uYWxJbnB1dERhdGFbMl0ucGlja2VyUmFuZ2VbZm9ybVZhbHVlLnBpY2tlcjJdLCAvL+iBjOS9jVxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIOmihuWfn+OAgeihjOS4muOAgeS6p+WTgeOAgeWcsOWMuiDkuLrlj5jlgLxcclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGVtcEZpbGVQYXRocykgZGF0YS5hdmF0YXJ1cmwgPSB0aGlzLnRlbXBGaWxlUGF0aHMgLy/nlKjmiLfkuIrkvKDnmoTlm77lg49cclxuICAgICAgICAgICAgICAgIC8vIGZpZWxkIGluZHVzdHJ5IHByb2R1Y3QgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkSGF2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbmFsSW5wdXREYXRhLmZvckVhY2goKGVsZW1lbnQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnRpdGxlID09ICfkuqflk4EnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pbmR1c3RyeSA9IHRoaXMucGVyc29uYWxJbnB1dERhdGFbNF0ucGlja2VyUmFuZ2VbZm9ybVZhbHVlLnBpY2tlcjRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHJvZHVjdCA9IHRoaXMucGVyc29uYWxJbnB1dERhdGFbNV0ucGlja2VyUmFuZ2VbMF1bdGhpcy5wZXJzb25hbElucHV0RGF0YVs1XS5waWNrZXJWYWx1ZVswXV0rJywnK3RoaXMucGVyc29uYWxJbnB1dERhdGFbNV0ucGlja2VyUmFuZ2VbMV1bdGhpcy5wZXJzb25hbElucHV0RGF0YVs1XS5waWNrZXJWYWx1ZVsxXV0rJywnK3RoaXMucGVyc29uYWxJbnB1dERhdGFbNV0ucGlja2VyUmFuZ2VbMl1bdGhpcy5wZXJzb25hbElucHV0RGF0YVs1XS5waWNrZXJWYWx1ZVsyXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5maWVsZCA9IHRoaXMucGVyc29uYWxJbnB1dERhdGFbM10ucGlja2VyUmFuZ2VbZm9ybVZhbHVlLnBpY2tlcjNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYWRkcmVzcyA9IHRoaXMucGVyc29uYWxJbnB1dERhdGFbNl0ucGlja2VyVmFsdWVbMF0rJywnK3RoaXMucGVyc29uYWxJbnB1dERhdGFbNl0ucGlja2VyVmFsdWVbMV0rJywnK3RoaXMucGVyc29uYWxJbnB1dERhdGFbNl0ucGlja2VyVmFsdWVbMl1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihlbGVtZW50LnRpdGxlID09ICfpoobln58nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRIYXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmluZHVzdHJ5ID0gdGhpcy5wZXJzb25hbElucHV0RGF0YVs0XS5waWNrZXJSYW5nZVtmb3JtVmFsdWUucGlja2VyNF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5maWVsZCA9IHRoaXMucGVyc29uYWxJbnB1dERhdGFbM10ucGlja2VyUmFuZ2VbZm9ybVZhbHVlLnBpY2tlcjNdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYWRkcmVzcyA9IHRoaXMucGVyc29uYWxJbnB1dERhdGFbNV0ucGlja2VyVmFsdWVbMF0rJywnK3RoaXMucGVyc29uYWxJbnB1dERhdGFbNV0ucGlja2VyVmFsdWVbMV0rJywnK3RoaXMucGVyc29uYWxJbnB1dERhdGFbNV0ucGlja2VyVmFsdWVbMl1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmKCFmaWVsZEhhdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaW5kdXN0cnkgPSB0aGlzLnBlcnNvbmFsSW5wdXREYXRhWzNdLnBpY2tlclJhbmdlW2Zvcm1WYWx1ZS5waWNrZXIzXVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYWRkcmVzcyA9IHRoaXMucGVyc29uYWxJbnB1dERhdGFbNF0ucGlja2VyVmFsdWVbMF0rJywnK3RoaXMucGVyc29uYWxJbnB1dERhdGFbNF0ucGlja2VyVmFsdWVbMV0rJywnK3RoaXMucGVyc29uYWxJbnB1dERhdGFbNF0ucGlja2VyVmFsdWVbMl1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlcXVlc3QodXNlclJlZ2lzdGVyLCdQT1NUJyxkYXRhKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmRhdGEgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2dpbkRhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9naW5EYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luRGF0YS5maW5kID0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2xvZ2luRGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBsb2dpbkRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfms6jlhozmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy4uLy4uL3BhZ2VzL2luZGV4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tc2cgPSAn6aqM6K+B56CB5LiN5q2j56GuJykgdGhpcy5jaGVja1Bob25lVmFsdWUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzLmRhdGEubXNnIHx8ICfmnI3liqHlmajmlbDmja7lvILluLgnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCk9PnsgdG9hc3QoJ+acjeWKoeWZqOaVsOaNruW8guW4uCcpIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zLnVzZXJJZClcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IG9wdGlvbnMudXNlcklkXHJcbiAgICAgICAgdGhpcy5hdmF0YXJVcmwgPSBvcHRpb25zLmF2YXRhclVybFxyXG4gICAgICAgIGxldCBwcm9kdWN0TGlzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2xpc3REYXRhLmpzJykuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0TGlzdClcclxuICAgICAgICBwcm9kdWN0TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ubHlBcnJheVswXS5wdXNoKGVsZW1lbnQuZ29vZHNfY2F0ZWdvcnlfb25lX25hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvZHVjdExpc3RbMF0uZ29vZHNfY2F0ZWdvcnlfdHdvLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25seUFycmF5WzFdLnB1c2goZWxlbWVudC5nb29kc19jYXRlZ29yeV90d29fbmFtZSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9kdWN0TGlzdFswXS5nb29kc19jYXRlZ29yeV90d29bMF0uZ29vZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmx5QXJyYXlbMl0ucHVzaChlbGVtZW50Lmdvb2RzX25hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfTtcclxufVxyXG4iXX0=