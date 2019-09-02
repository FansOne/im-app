'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var editMsg = function (_wepy$page) {
    _inherits(editMsg, _wepy$page);

    function editMsg() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, editMsg);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = editMsg.__proto__ || Object.getPrototypeOf(editMsg)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '',
            navigationBarBackgroundColor: '#FAFAFA',
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index',
                'wxc-list': '../../packages/@minui/wxc-list/dist/index'
            }
        }, _this.components = {}, _this.data = {
            navigationBarTitle: '',
            isAdd: false,
            index: 0,
            industryPickerIndex: 0,
            industryArray: ['贸易', '制造业', '房地产', '保健品', 'IT互联网'],
            pickerChange: false,
            pickerDateChange1: false,
            pickerDateChange2: false,
            industryData: [], //已编辑的条目数据
            date1: '2017-08-01',
            date2: '2019-08-01'
        }, _this.methods = {
            editExperienceSwitch: function editExperienceSwitch() {
                var emptyData = false;
                this.industryData.forEach(function (element) {
                    if (!element.companyName) {
                        emptyData = true;
                    } else {
                        element.isAdd = false;
                    }
                });

                if (emptyData) {
                    (0, _utils.toast)('请完善修改信息');
                } else {
                    this.pickerDateChange1 = false;
                    this.pickerDateChange2 = false;
                    this.pickerChange = false;
                    this.isAdd = !this.isAdd;
                }
            },

            // 选择行业
            industryPickerChange: function industryPickerChange(e) {
                this.pickerChange = true;
                this.index = e.detail.value;
            },

            // 选择入职时间
            changeData1: function changeData1(e) {
                this.date1 = e.detail.value;
                this.pickerDateChange1 = true;
            },

            // 选择离职时间
            changeData2: function changeData2(e) {
                this.date2 = e.detail.value;
                this.pickerDateChange2 = true;
            },

            // 保存
            formSubmit: function formSubmit(e) {
                // console.log(e.detail.value)
                var formValue = e.detail.value;

                if (this.navigationBarTitle == '人脉客户') {
                    if (!formValue.companyName || !this.pickerChange || !formValue.industryPicker) {
                        (0, _utils.toast)('请完善信息后保存');
                    } else {
                        this.industryData.push({
                            companyName: formValue.companyName,
                            industry: this.industryArray[formValue.industryPicker],
                            industryPicker: formValue.industryPicker
                        });
                        this.isAdd = false;
                    }
                } else if (this.navigationBarTitle == '编辑职业经历') {
                    if (!this.pickerDateChange1 || !this.pickerDateChange2 || !formValue.companyName || !formValue.positionName || !formValue.workContant) {
                        (0, _utils.toast)('请完善信息后保存');
                    } else {
                        this.industryData.push({
                            companyName: formValue.companyName,
                            positionName: formValue.positionName,
                            intoTime: this.date1,
                            outTime: this.date2,
                            workContant: formValue.workContant
                        });
                        this.isAdd = false;
                    }
                } else if (this.navigationBarTitle == '编辑教育经历') {
                    if (!this.pickerDateChange1 || !this.pickerDateChange2 || !formValue.companyName || !formValue.major || !formValue.education) {
                        (0, _utils.toast)('请完善信息后保存');
                    } else {
                        this.industryData.push({
                            companyName: formValue.companyName,
                            education: formValue.education,
                            major: formValue.major,
                            intoTime: this.date1,
                            outTime: this.date2
                        });
                        this.isAdd = false;
                    }
                }
            },

            // 删除指定人脉
            deleteMsgItem: function deleteMsgItem(index) {
                this.industryData.splice(index, 1);
            },

            // 修过指定人脉
            modifyMsgItem: function modifyMsgItem(index) {
                this.isAdd = false;
                this.industryPickerIndex = index;
                this.industryData[index].isAdd = true;
            },


            // 清空编辑输入
            bindfocus: function bindfocus(index) {
                this.industryData[index].companyName = '';
                this.$apply();
            },
            bindfocus1: function bindfocus1(index) {
                this.industryData[index].positionName = '';
                if (this.industryData[index].major) this.industryData[index].major = '';
                this.$apply();
            },
            bindfocus2: function bindfocus2(index) {
                this.industryData[index].education = '';
            },


            // input修改输入
            bindinput: function bindinput(e) {
                this.industryData[this.industryPickerIndex].companyName = e.detail.value;
            },
            bindinput1: function bindinput1(e) {
                if (this.industryData[this.industryPickerIndex].positionName) this.industryData[this.industryPickerIndex].positionName = e.detail.value;
                if (this.industryData[this.industryPickerIndex].major) this.industryData[this.industryPickerIndex].major = e.detail.value;
            },
            bindinput2: function bindinput2(e) {
                this.industryData[this.industryPickerIndex].education = e.detail.value;
            },
            textareaInput: function textareaInput(e) {
                this.industryData[this.industryPickerIndex].workContant = e.detail.value;
            },


            // 修改指定picker
            modifyPickerChange: function modifyPickerChange(e) {
                this.industryData[this.industryPickerIndex].industryPicker = e.detail.value;
            },
            modifyData1: function modifyData1(e) {
                this.industryData[this.industryPickerIndex].intoTime = e.detail.value;
            },
            modifyData2: function modifyData2(e) {
                this.industryData[this.industryPickerIndex].outTime = e.detail.value;
            },

            // 修改保存 --人脉
            modifyMsgForm: function modifyMsgForm(index, prckerIdx, inputValue) {
                if (this.industryData[index].companyName) {
                    this.industryData[index].companyName = inputValue;
                    this.industryData[index].industry = this.industryArray[prckerIdx];
                    this.industryData[index].industryPicker = prckerIdx;
                    this.industryData[index].isAdd = false;
                } else {
                    (0, _utils.toast)('请完善信息');
                }
            },

            // 修改保存 --职业经历
            modifyExperienceForm: function modifyExperienceForm(index, companyName, positionName, intoTime, outTime, workContant) {
                if (!this.industryData[index].companyName || !this.industryData[index].positionName || !this.industryData[index].workContant) {
                    (0, _utils.toast)('请完善信息');
                } else {
                    this.industryData[index].companyName = companyName;
                    this.industryData[index].positionName = positionName;
                    this.industryData[index].intoTime = intoTime;
                    this.industryData[index].outTime = outTime;
                    this.industryData[index].workContant = workContant;
                    this.industryData[index].isAdd = false;
                }
            },

            // 修改保存 --教育经历
            modifyEducationForm: function modifyEducationForm(index, companyName, major, intoTime, outTime, education) {
                if (!this.industryData[index].companyName || !this.industryData[index].major || !this.industryData[index].education) {
                    (0, _utils.toast)('请完善信息');
                } else {
                    this.industryData[index].companyName = companyName;
                    this.industryData[index].major = major;
                    this.industryData[index].intoTime = intoTime;
                    this.industryData[index].outTime = outTime;
                    this.industryData[index].education = education;
                    this.industryData[index].isAdd = false;
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(editMsg, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.navigationBarTitle = options.title;
            wx.setNavigationBarTitle({
                title: options.title
            });
        }
    }]);

    return editMsg;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(editMsg , 'subpackage/square/editMsg'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRNc2cuanMiXSwibmFtZXMiOlsiZWRpdE1zZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJuYXZpZ2F0aW9uQmFyVGl0bGUiLCJpc0FkZCIsImluZGV4IiwiaW5kdXN0cnlQaWNrZXJJbmRleCIsImluZHVzdHJ5QXJyYXkiLCJwaWNrZXJDaGFuZ2UiLCJwaWNrZXJEYXRlQ2hhbmdlMSIsInBpY2tlckRhdGVDaGFuZ2UyIiwiaW5kdXN0cnlEYXRhIiwiZGF0ZTEiLCJkYXRlMiIsIm1ldGhvZHMiLCJlZGl0RXhwZXJpZW5jZVN3aXRjaCIsImVtcHR5RGF0YSIsImZvckVhY2giLCJlbGVtZW50IiwiY29tcGFueU5hbWUiLCJpbmR1c3RyeVBpY2tlckNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNoYW5nZURhdGExIiwiY2hhbmdlRGF0YTIiLCJmb3JtU3VibWl0IiwiZm9ybVZhbHVlIiwiaW5kdXN0cnlQaWNrZXIiLCJwdXNoIiwiaW5kdXN0cnkiLCJwb3NpdGlvbk5hbWUiLCJ3b3JrQ29udGFudCIsImludG9UaW1lIiwib3V0VGltZSIsIm1ham9yIiwiZWR1Y2F0aW9uIiwiZGVsZXRlTXNnSXRlbSIsInNwbGljZSIsIm1vZGlmeU1zZ0l0ZW0iLCJiaW5kZm9jdXMiLCIkYXBwbHkiLCJiaW5kZm9jdXMxIiwiYmluZGZvY3VzMiIsImJpbmRpbnB1dCIsImJpbmRpbnB1dDEiLCJiaW5kaW5wdXQyIiwidGV4dGFyZWFJbnB1dCIsIm1vZGlmeVBpY2tlckNoYW5nZSIsIm1vZGlmeURhdGExIiwibW9kaWZ5RGF0YTIiLCJtb2RpZnlNc2dGb3JtIiwicHJja2VySWR4IiwiaW5wdXRWYWx1ZSIsIm1vZGlmeUV4cGVyaWVuY2VGb3JtIiwibW9kaWZ5RWR1Y2F0aW9uRm9ybSIsImV2ZW50cyIsIm9wdGlvbnMiLCJ0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RCxRQUFRQztBQURNLGFBQXpCO0FBR0g7Ozs7RUF0TWdDRyxlQUFLQyxJOztrQkFBckJsRSxPIiwiZmlsZSI6ImVkaXRNc2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlZGl0TXNnIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnJyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOicjRkFGQUZBJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ3d4Yy1pY29uJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4JyxcclxuICAgICAgICAgICAgJ3d4Yy1saXN0JzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtbGlzdC9kaXN0L2luZGV4J1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlOicnLFxyXG4gICAgICAgIGlzQWRkOmZhbHNlLFxyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIGluZHVzdHJ5UGlja2VySW5kZXg6MCxcclxuICAgICAgICBpbmR1c3RyeUFycmF5OiBbJ+i0uOaYkycsICfliLbpgKDkuJonLCAn5oi/5Zyw5LqnJywgJ+S/neWBpeWTgScsJ0lU5LqS6IGU572RJ10sXHJcbiAgICAgICAgcGlja2VyQ2hhbmdlOmZhbHNlLFxyXG4gICAgICAgIHBpY2tlckRhdGVDaGFuZ2UxOmZhbHNlLFxyXG4gICAgICAgIHBpY2tlckRhdGVDaGFuZ2UyOmZhbHNlLFxyXG4gICAgICAgIGluZHVzdHJ5RGF0YTpbXSwgLy/lt7LnvJbovpHnmoTmnaHnm67mlbDmja5cclxuICAgICAgICBkYXRlMTogJzIwMTctMDgtMDEnLFxyXG4gICAgICAgIGRhdGUyOiAnMjAxOS0wOC0wMScsXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBlZGl0RXhwZXJpZW5jZVN3aXRjaCgpe1xyXG4gICAgICAgICAgICBsZXQgZW1wdHlEYXRhID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LmNvbXBhbnlOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlEYXRhID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc0FkZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoZW1wdHlEYXRhKXtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCfor7flrozlloTkv67mlLnkv6Hmga8nKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyRGF0ZUNoYW5nZTEgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJEYXRlQ2hhbmdlMiA9ZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyQ2hhbmdlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBZGQgPSAhdGhpcy5pc0FkZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDpgInmi6nooYzkuJpcclxuICAgICAgICBpbmR1c3RyeVBpY2tlckNoYW5nZShlKXtcclxuICAgICAgICAgICAgdGhpcy5waWNrZXJDaGFuZ2UgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g6YCJ5oup5YWl6IGM5pe26Ze0XHJcbiAgICAgICAgY2hhbmdlRGF0YTEoZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZTEgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLnBpY2tlckRhdGVDaGFuZ2UxID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g6YCJ5oup56a76IGM5pe26Ze0XHJcbiAgICAgICAgY2hhbmdlRGF0YTIoZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZTIgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICB0aGlzLnBpY2tlckRhdGVDaGFuZ2UyID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5L+d5a2YXHJcbiAgICAgICAgZm9ybVN1Ym1pdChlKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgICAgICAgIGxldCBmb3JtVmFsdWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5uYXZpZ2F0aW9uQmFyVGl0bGUgPT0gJ+S6uuiEieWuouaItycpe1xyXG4gICAgICAgICAgICAgICAgaWYoIWZvcm1WYWx1ZS5jb21wYW55TmFtZSB8fCAhdGhpcy5waWNrZXJDaGFuZ2UgfHwgIWZvcm1WYWx1ZS5pbmR1c3RyeVBpY2tlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ+ivt+WujOWWhOS/oeaBr+WQjuS/neWtmCcpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZHVzdHJ5RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueU5hbWU6Zm9ybVZhbHVlLmNvbXBhbnlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeTp0aGlzLmluZHVzdHJ5QXJyYXlbZm9ybVZhbHVlLmluZHVzdHJ5UGlja2VyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kdXN0cnlQaWNrZXI6Zm9ybVZhbHVlLmluZHVzdHJ5UGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5uYXZpZ2F0aW9uQmFyVGl0bGUgPT0gJ+e8lui+keiBjOS4mue7j+WOhicpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucGlja2VyRGF0ZUNoYW5nZTEgfHwgIXRoaXMucGlja2VyRGF0ZUNoYW5nZTIgfHwgIWZvcm1WYWx1ZS5jb21wYW55TmFtZSB8fCAhZm9ybVZhbHVlLnBvc2l0aW9uTmFtZSB8fCAhZm9ybVZhbHVlLndvcmtDb250YW50KXtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgn6K+35a6M5ZaE5L+h5oGv5ZCO5L+d5a2YJylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55TmFtZTpmb3JtVmFsdWUuY29tcGFueU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uTmFtZTpmb3JtVmFsdWUucG9zaXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRvVGltZTp0aGlzLmRhdGUxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRUaW1lOnRoaXMuZGF0ZTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtDb250YW50OmZvcm1WYWx1ZS53b3JrQ29udGFudFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubmF2aWdhdGlvbkJhclRpdGxlID09ICfnvJbovpHmlZnogrLnu4/ljoYnKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnBpY2tlckRhdGVDaGFuZ2UxIHx8ICF0aGlzLnBpY2tlckRhdGVDaGFuZ2UyIHx8ICFmb3JtVmFsdWUuY29tcGFueU5hbWUgfHwgIWZvcm1WYWx1ZS5tYWpvciB8fCAhZm9ybVZhbHVlLmVkdWNhdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ+ivt+WujOWWhOS/oeaBr+WQjuS/neWtmCcpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZHVzdHJ5RGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueU5hbWU6Zm9ybVZhbHVlLmNvbXBhbnlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZHVjYXRpb246Zm9ybVZhbHVlLmVkdWNhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFqb3I6Zm9ybVZhbHVlLm1ham9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRvVGltZTp0aGlzLmRhdGUxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRUaW1lOnRoaXMuZGF0ZTIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Yig6Zmk5oyH5a6a5Lq66ISJXHJcbiAgICAgICAgZGVsZXRlTXNnSXRlbShpbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhLnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5L+u6L+H5oyH5a6a5Lq66ISJXHJcbiAgICAgICAgbW9kaWZ5TXNnSXRlbShpbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBZGQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmluZHVzdHJ5UGlja2VySW5kZXggPSBpbmRleFxyXG4gICAgICAgICAgICB0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0uaXNBZGQgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5riF56m657yW6L6R6L6T5YWlXHJcbiAgICAgICAgYmluZGZvY3VzKGluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLmNvbXBhbnlOYW1lID0gJydcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmluZGZvY3VzMShpbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS5wb3NpdGlvbk5hbWUgPSAnJ1xyXG4gICAgICAgICAgICBpZih0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0ubWFqb3IpIHRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS5tYWpvciA9ICcnXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmRmb2N1czIoaW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0uZWR1Y2F0aW9uID0gJydcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBpbnB1dOS/ruaUuei+k+WFpVxyXG4gICAgICAgIGJpbmRpbnB1dChlKXtcclxuICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbdGhpcy5pbmR1c3RyeVBpY2tlckluZGV4XS5jb21wYW55TmFtZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kaW5wdXQxKGUpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmluZHVzdHJ5RGF0YVt0aGlzLmluZHVzdHJ5UGlja2VySW5kZXhdLnBvc2l0aW9uTmFtZSkgdGhpcy5pbmR1c3RyeURhdGFbdGhpcy5pbmR1c3RyeVBpY2tlckluZGV4XS5wb3NpdGlvbk5hbWUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgICAgICBpZih0aGlzLmluZHVzdHJ5RGF0YVt0aGlzLmluZHVzdHJ5UGlja2VySW5kZXhdLm1ham9yKSB0aGlzLmluZHVzdHJ5RGF0YVt0aGlzLmluZHVzdHJ5UGlja2VySW5kZXhdLm1ham9yID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmRpbnB1dDIoZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW3RoaXMuaW5kdXN0cnlQaWNrZXJJbmRleF0uZWR1Y2F0aW9uID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHRhcmVhSW5wdXQoZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW3RoaXMuaW5kdXN0cnlQaWNrZXJJbmRleF0ud29ya0NvbnRhbnQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOS/ruaUueaMh+WumnBpY2tlclxyXG4gICAgICAgIG1vZGlmeVBpY2tlckNoYW5nZShlKXtcclxuICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbdGhpcy5pbmR1c3RyeVBpY2tlckluZGV4XS5pbmR1c3RyeVBpY2tlciA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RpZnlEYXRhMShlKXtcclxuICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbdGhpcy5pbmR1c3RyeVBpY2tlckluZGV4XS5pbnRvVGltZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RpZnlEYXRhMihlKXtcclxuICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbdGhpcy5pbmR1c3RyeVBpY2tlckluZGV4XS5vdXRUaW1lID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS/ruaUueS/neWtmCAtLeS6uuiEiVxyXG4gICAgICAgIG1vZGlmeU1zZ0Zvcm0oaW5kZXgscHJja2VySWR4LGlucHV0VmFsdWUpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0uY29tcGFueU5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLmNvbXBhbnlOYW1lID0gaW5wdXRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLmluZHVzdHJ5ID0gdGhpcy5pbmR1c3RyeUFycmF5W3ByY2tlcklkeF1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS5pbmR1c3RyeVBpY2tlciA9IHByY2tlcklkeFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLmlzQWRkID0gZmFsc2VcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCgn6K+35a6M5ZaE5L+h5oGvJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5L+u5pS55L+d5a2YIC0t6IGM5Lia57uP5Y6GXHJcbiAgICAgICAgbW9kaWZ5RXhwZXJpZW5jZUZvcm0oaW5kZXgsY29tcGFueU5hbWUscG9zaXRpb25OYW1lLGludG9UaW1lLG91dFRpbWUsd29ya0NvbnRhbnQpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLmNvbXBhbnlOYW1lIHx8ICF0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0ucG9zaXRpb25OYW1lIHx8IXRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS53b3JrQ29udGFudCl7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCgn6K+35a6M5ZaE5L+h5oGvJylcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0uY29tcGFueU5hbWUgPSBjb21wYW55TmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLnBvc2l0aW9uTmFtZSA9IHBvc2l0aW9uTmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLmludG9UaW1lID0gaW50b1RpbWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS5vdXRUaW1lID0gb3V0VGltZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLndvcmtDb250YW50ID0gd29ya0NvbnRhbnRcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS5pc0FkZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOS/ruaUueS/neWtmCAtLeaVmeiCsue7j+WOhlxyXG4gICAgICAgIG1vZGlmeUVkdWNhdGlvbkZvcm0oaW5kZXgsY29tcGFueU5hbWUsbWFqb3IsaW50b1RpbWUsb3V0VGltZSxlZHVjYXRpb24pe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLmNvbXBhbnlOYW1lIHx8ICF0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0ubWFqb3IgfHwhdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLmVkdWNhdGlvbil7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCgn6K+35a6M5ZaE5L+h5oGvJylcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0uY29tcGFueU5hbWUgPSBjb21wYW55TmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmR1c3RyeURhdGFbaW5kZXhdLm1ham9yID0gbWFqb3JcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS5pbnRvVGltZSA9IGludG9UaW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZHVzdHJ5RGF0YVtpbmRleF0ub3V0VGltZSA9IG91dFRpbWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS5lZHVjYXRpb24gPSBlZHVjYXRpb25cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kdXN0cnlEYXRhW2luZGV4XS5pc0FkZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb25CYXJUaXRsZSA9IG9wdGlvbnMudGl0bGVcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogb3B0aW9ucy50aXRsZVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcbiJdfQ==