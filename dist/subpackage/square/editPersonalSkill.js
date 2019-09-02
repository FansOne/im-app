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

var editPersonalSkill = function (_wepy$page) {
    _inherits(editPersonalSkill, _wepy$page);

    function editPersonalSkill() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, editPersonalSkill);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = editPersonalSkill.__proto__ || Object.getPrototypeOf(editPersonalSkill)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '编辑个人技能',
            navigationBarBackgroundColor: '#FAFAFA',
            disableScroll: true,
            usingComponents: {
                'wxc-icon': '../../packages/@minui/wxc-icon/dist/index'
            }
        }, _this.components = {}, _this.data = {
            remmondSkill: ['售后服务', '英语', '技术支持', '服务器运维', '大数据'],
            placeholder: '请填写技能（最多不超过三个）',
            textareaValue: null,
            textareaValueView: [],
            textareDisabled: false,
            focus: false
        }, _this.methods = {
            sliderchange: function sliderchange(e) {
                console.log(e.detail.value);
            },

            //输入确认
            bindconfirm: function bindconfirm(e) {
                var title = e.detail.value;
                this.placeholder = '';
                this.textareaValue = '';
                this.focus = true;
                this.$apply();
                if (this.textareaValueView.length < 3) {
                    this.textareaValueView.push({
                        title: title,
                        value: 35
                    });
                } else {
                    this.textareaValue = '';
                    this.textareDisabled = true;
                    (0, _utils.toast)('最多不超过3个');
                }
                this.$apply();
            },

            // 点击推荐技能
            remmondSkill: function remmondSkill(item) {
                this.placeholder = '';
                if (this.textareaValueView.length < 3) {
                    this.textareaValueView.push({
                        title: item,
                        value: 35
                    });
                    this.$apply();
                } else {
                    this.textareaValue = '';
                    this.textareDisabled = true;
                    (0, _utils.toast)('最多不超过3个');
                }
            },

            // 删除指定项技能
            delectBlock: function delectBlock(index) {
                this.textareaValueView.splice(index, 1);
                this.textareDisabled = false;
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(editPersonalSkill, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return editPersonalSkill;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(editPersonalSkill , 'subpackage/square/editPersonalSkill'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRQZXJzb25hbFNraWxsLmpzIl0sIm5hbWVzIjpbImVkaXRQZXJzb25hbFNraWxsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJkaXNhYmxlU2Nyb2xsIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJyZW1tb25kU2tpbGwiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhVmFsdWUiLCJ0ZXh0YXJlYVZhbHVlVmlldyIsInRleHRhcmVEaXNhYmxlZCIsImZvY3VzIiwibWV0aG9kcyIsInNsaWRlcmNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kY29uZmlybSIsInRpdGxlIiwiJGFwcGx5IiwibGVuZ3RoIiwicHVzaCIsIml0ZW0iLCJkZWxlY3RCbG9jayIsImluZGV4Iiwic3BsaWNlIiwiZXZlbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7Ozs7Ozs7Ozs7OztnTkFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsUUFEbkI7QUFFTEMsMENBQTZCLFNBRnhCO0FBR0xDLDJCQUFjLElBSFQ7QUFJTEMsNkJBQWlCO0FBQ2IsNEJBQVk7QUFEQztBQUpaLFMsUUFRVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0hDLDBCQUFhLENBQ1QsTUFEUyxFQUVULElBRlMsRUFHVCxNQUhTLEVBSVQsT0FKUyxFQUtULEtBTFMsQ0FEVjtBQVFIQyx5QkFBWSxnQkFSVDtBQVNIQywyQkFBYyxJQVRYO0FBVUhDLCtCQUFrQixFQVZmO0FBV0hDLDZCQUFnQixLQVhiO0FBWUhDLG1CQUFNO0FBWkgsUyxRQWNQQyxPLEdBQVU7QUFDTkMsd0JBRE0sd0JBQ09DLENBRFAsRUFDUztBQUNYQyx3QkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFGLENBQVNDLEtBQXJCO0FBQ0gsYUFISzs7QUFJTjtBQUNBQyx1QkFMTSx1QkFLTUwsQ0FMTixFQUtRO0FBQ1Ysb0JBQUlNLFFBQVFOLEVBQUVHLE1BQUYsQ0FBU0MsS0FBckI7QUFDQSxxQkFBS1gsV0FBTCxHQUFrQixFQUFsQjtBQUNBLHFCQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EscUJBQUtHLEtBQUwsR0FBYSxJQUFiO0FBQ0EscUJBQUtVLE1BQUw7QUFDQSxvQkFBRyxLQUFLWixpQkFBTCxDQUF1QmEsTUFBdkIsR0FBZ0MsQ0FBbkMsRUFBcUM7QUFDakMseUJBQUtiLGlCQUFMLENBQXVCYyxJQUF2QixDQUE0QjtBQUN4QkgsK0JBQU1BLEtBRGtCO0FBRXhCRiwrQkFBTTtBQUZrQixxQkFBNUI7QUFJSCxpQkFMRCxNQUtLO0FBQ0QseUJBQUtWLGFBQUwsR0FBcUIsRUFBckI7QUFDQSx5QkFBS0UsZUFBTCxHQUFxQixJQUFyQjtBQUNBLHNDQUFNLFNBQU47QUFDSDtBQUNELHFCQUFLVyxNQUFMO0FBQ0gsYUF0Qks7O0FBdUJOO0FBQ0FmLHdCQXhCTSx3QkF3Qk9rQixJQXhCUCxFQXdCWTtBQUNkLHFCQUFLakIsV0FBTCxHQUFrQixFQUFsQjtBQUNBLG9CQUFHLEtBQUtFLGlCQUFMLENBQXVCYSxNQUF2QixHQUFnQyxDQUFuQyxFQUFxQztBQUNqQyx5QkFBS2IsaUJBQUwsQ0FBdUJjLElBQXZCLENBQTRCO0FBQ3hCSCwrQkFBTUksSUFEa0I7QUFFeEJOLCtCQUFNO0FBRmtCLHFCQUE1QjtBQUlBLHlCQUFLRyxNQUFMO0FBQ0gsaUJBTkQsTUFNSztBQUNELHlCQUFLYixhQUFMLEdBQXFCLEVBQXJCO0FBQ0EseUJBQUtFLGVBQUwsR0FBcUIsSUFBckI7QUFDQSxzQ0FBTSxTQUFOO0FBQ0g7QUFDSixhQXJDSzs7QUFzQ047QUFDQWUsdUJBdkNNLHVCQXVDTUMsS0F2Q04sRUF1Q1k7QUFDZCxxQkFBS2pCLGlCQUFMLENBQXVCa0IsTUFBdkIsQ0FBOEJELEtBQTlCLEVBQW9DLENBQXBDO0FBQ0EscUJBQUtoQixlQUFMLEdBQXFCLEtBQXJCO0FBQ0g7QUExQ0ssUyxRQTRDVmtCLE0sR0FBUyxFOzs7OztpQ0FDQSxDQUFFOzs7O0VBdEVnQ0MsZUFBS0MsSTs7a0JBQS9CaEMsaUIiLCJmaWxlIjoiZWRpdFBlcnNvbmFsU2tpbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlZGl0UGVyc29uYWxTa2lsbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e8lui+keS4quS6uuaKgOiDvScsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjonI0ZBRkFGQScsXHJcbiAgICAgICAgZGlzYWJsZVNjcm9sbDp0cnVlLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnd3hjLWljb24nOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1pY29uL2Rpc3QvaW5kZXgnXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICByZW1tb25kU2tpbGw6W1xyXG4gICAgICAgICAgICAn5ZSu5ZCO5pyN5YqhJyxcclxuICAgICAgICAgICAgJ+iLseivrScsXHJcbiAgICAgICAgICAgICfmioDmnK/mlK/mjIEnLFxyXG4gICAgICAgICAgICAn5pyN5Yqh5Zmo6L+Q57u0JyxcclxuICAgICAgICAgICAgJ+Wkp+aVsOaNridcclxuICAgICAgICBdLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOifor7floavlhpnmioDog73vvIjmnIDlpJrkuI3otoXov4fkuInkuKrvvIknLFxyXG4gICAgICAgIHRleHRhcmVhVmFsdWU6bnVsbCxcclxuICAgICAgICB0ZXh0YXJlYVZhbHVlVmlldzpbXSxcclxuICAgICAgICB0ZXh0YXJlRGlzYWJsZWQ6ZmFsc2UsXHJcbiAgICAgICAgZm9jdXM6ZmFsc2VcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHNsaWRlcmNoYW5nZShlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+i+k+WFpeehruiupFxyXG4gICAgICAgIGJpbmRjb25maXJtKGUpe1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9JydcclxuICAgICAgICAgICAgdGhpcy50ZXh0YXJlYVZhbHVlID0gJydcclxuICAgICAgICAgICAgdGhpcy5mb2N1cyA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgICBpZih0aGlzLnRleHRhcmVhVmFsdWVWaWV3Lmxlbmd0aCA8IDMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlYVZhbHVlVmlldy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTp0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTozNVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRhcmVhVmFsdWUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlRGlzYWJsZWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdG9hc3QoJ+acgOWkmuS4jei2hei/hzPkuKonKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOeCueWHu+aOqOiNkOaKgOiDvVxyXG4gICAgICAgIHJlbW1vbmRTa2lsbChpdGVtKXtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9JydcclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0YXJlYVZhbHVlVmlldy5sZW5ndGggPCAzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dGFyZWFWYWx1ZVZpZXcucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6aXRlbSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTozNVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRhcmVhVmFsdWUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlRGlzYWJsZWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgdG9hc3QoJ+acgOWkmuS4jei2hei/hzPkuKonKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDliKDpmaTmjIflrprpobnmioDog71cclxuICAgICAgICBkZWxlY3RCbG9jayhpbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dGFyZWFWYWx1ZVZpZXcuc3BsaWNlKGluZGV4LDEpXHJcbiAgICAgICAgICAgIHRoaXMudGV4dGFyZURpc2FibGVkPWZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGV2ZW50cyA9IHt9O1xyXG4gICAgb25Mb2FkKCkge307XHJcbn1cclxuIl19