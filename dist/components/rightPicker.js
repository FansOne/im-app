'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var list = [];

var rightPicker = function (_wepy$component) {
	_inherits(rightPicker, _wepy$component);

	function rightPicker() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, rightPicker);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = rightPicker.__proto__ || Object.getPrototypeOf(rightPicker)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
			showPicker: false,
			firstShow: false,
			list: []
		}, _this.methods = {
			chooseItem: function chooseItem(e) {
				if (this.multiple) {
					// 多选事件
					var val = e.target.dataset.value;
					var arr = this.chooseList;
					var flag = '';
					var index = null;
					for (var i = 0, len = arr.length; i < len; i++) {
						if (arr[i].value == val) {
							index = i;
							flag = 'chooseList[' + i + '].flag';
						}
					}
					if (!this.chooseList[index].flag) {
						this.setData(_defineProperty({}, flag, true));
					} else {
						this.setData(_defineProperty({}, flag, false));
					}
				} else {
					// 单选事件
					var _val = e.target.dataset.value;
					var _arr = this.chooseList;
					var _flag = '';
					var _index = null;
					for (var _i = 0, _len2 = _arr.length; _i < _len2; _i++) {
						_index = _i;
						_flag = 'chooseList[' + _i + '].flag';
						if (_arr[_i].value == _val) {
							this.setData(_defineProperty({}, _flag, true));
						} else {
							this.setData(_defineProperty({}, _flag, false));
						}
					}
				}
			},

			// 展示picker
			showPicker: function showPicker() {
				if (!this.firstShow) {
					this.firstShow = true;
				}
				this.showPicker = true;
				// 加载时重新渲染已选择元素
				var arr = this.chooseList;
				var array = this.list;
				var flag = '';
				var index = null;
				for (var i = 0, len = arr.length; i < len; i++) {
					index = i;
					flag = 'chooseList[' + i + '].flag';
					if (!array.includes(arr[i].value)) {
						this.setData(_defineProperty({}, flag, false));
					} else {
						this.setData(_defineProperty({}, flag, true));
					}
				}
			},

			// 隐藏picker
			hidePicker: function hidePicker() {
				this.showPicker = false;
			},

			// 取消按钮事件
			cancal: function cancal() {
				this.showPicker = false;
			},

			// 确定按钮事件
			sure: function sure() {
				list = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.chooseList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var item = _step.value;

						if (item.flag) {
							list.push(item.value);
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				this.list = list;
				this.showPicker = false;
				this.$emit('chooseEvent', {
					chooseArray: this.list
				});
			}
		}, _this.events = {}, _this.props = {
			chooseList: {
				type: Array,
				default: null,
				twoWay: true
			},
			multiple: {
				type: Boolean,
				default: false
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return rightPicker;
}(_wepy2.default.component);

exports.default = rightPicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpZ2h0UGlja2VyLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJyaWdodFBpY2tlciIsImNvbXBvbmVudHMiLCJkYXRhIiwic2hvd1BpY2tlciIsImZpcnN0U2hvdyIsIm1ldGhvZHMiLCJjaG9vc2VJdGVtIiwiZSIsIm11bHRpcGxlIiwidmFsIiwidGFyZ2V0IiwiZGF0YXNldCIsInZhbHVlIiwiYXJyIiwiY2hvb3NlTGlzdCIsImZsYWciLCJpbmRleCIsImkiLCJsZW4iLCJsZW5ndGgiLCJzZXREYXRhIiwiYXJyYXkiLCJpbmNsdWRlcyIsImhpZGVQaWNrZXIiLCJjYW5jYWwiLCJzdXJlIiwiaXRlbSIsInB1c2giLCIkZW1pdCIsImNob29zZUFycmF5IiwiZXZlbnRzIiwicHJvcHMiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwidHdvV2F5IiwiQm9vbGVhbiIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFEQSxJQUFJQSxPQUFPLEVBQVg7O0lBRXFCQyxXOzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNIQyxlQUFZLEtBRFQ7QUFFVEMsY0FBVyxLQUZGO0FBR1RMLFNBQU07QUFIRyxHLFFBS1BNLE8sR0FBVTtBQUNOQyxhQURNLHNCQUNLQyxDQURMLEVBQ087QUFDVCxRQUFJLEtBQUtDLFFBQVQsRUFBbUI7QUFDM0I7QUFDQSxTQUFJQyxNQUFNRixFQUFFRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLEtBQTNCO0FBQ0EsU0FBSUMsTUFBTSxLQUFLQyxVQUFmO0FBQ1ksU0FBSUMsT0FBTyxFQUFYO0FBQ1osU0FBSUMsUUFBUSxJQUFaO0FBQ0EsVUFBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsTUFBTUwsSUFBSU0sTUFBMUIsRUFBa0NGLElBQUlDLEdBQXRDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUMvQyxVQUFJSixJQUFJSSxDQUFKLEVBQU9MLEtBQVAsSUFBZ0JI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SEQsSUFEUDtBQU1KM0IsYUFBUztBQUNMd0IsVUFBTUksT0FERDtBQUVMRixhQUFTO0FBRko7QUFOTCxHOzs7O0VBdEc2QkcsZUFBS0MsUzs7a0JBQXpCdEMsVyIsImZpbGUiOiJyaWdodFBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgbGlzdCA9IFtdO1xyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmlnaHRQaWNrZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBzaG93UGlja2VyOiBmYWxzZSxcclxuXHRcdGZpcnN0U2hvdzogZmFsc2UsXHJcblx0XHRsaXN0OiBbXVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgY2hvb3NlSXRlbShlKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuXHRcdFx0XHQvLyDlpJrpgInkuovku7ZcclxuXHRcdFx0XHRsZXQgdmFsID0gZS50YXJnZXQuZGF0YXNldC52YWx1ZTtcclxuXHRcdFx0XHRsZXQgYXJyID0gdGhpcy5jaG9vc2VMaXN0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGZsYWcgPSAnJztcclxuXHRcdFx0XHRsZXQgaW5kZXggPSBudWxsO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChhcnJbaV0udmFsdWUgPT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGBjaG9vc2VMaXN0WyR7aX1dLmZsYWdgXHJcblx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0aWYgKCF0aGlzLmNob29zZUxpc3RbaW5kZXhdLmZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHRbZmxhZ106IHRydWVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdFtmbGFnXTogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8g5Y2V6YCJ5LqL5Lu2XHJcblx0XHRcdFx0bGV0IHZhbCA9IGUudGFyZ2V0LmRhdGFzZXQudmFsdWU7XHJcblx0XHRcdFx0bGV0IGFyciA9IHRoaXMuY2hvb3NlTGlzdDtcclxuXHRcdFx0XHRsZXQgZmxhZyA9ICcnO1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IG51bGw7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0aW5kZXggPSBpO1xyXG5cdFx0XHRcdFx0ZmxhZyA9IGBjaG9vc2VMaXN0WyR7aX1dLmZsYWdgO1xyXG5cdFx0XHRcdFx0aWYgKGFycltpXS52YWx1ZSA9PSB2YWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0XHRbZmxhZ106IHRydWVcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdFx0W2ZsYWddOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5bGV56S6cGlja2VyXHJcbiAgICAgICAgc2hvd1BpY2tlcigpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmZpcnN0U2hvdykge1xyXG5cdFx0XHRcdHRoaXMuZmlyc3RTaG93ID0gdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2hvd1BpY2tlciA9IHRydWVcclxuXHRcdFx0Ly8g5Yqg6L295pe26YeN5paw5riy5p+T5bey6YCJ5oup5YWD57SgXHJcblx0XHRcdGxldCBhcnIgPSB0aGlzLmNob29zZUxpc3Q7XHJcblx0XHRcdGxldCBhcnJheSA9IHRoaXMubGlzdDtcclxuXHRcdFx0bGV0IGZsYWcgPSAnJztcclxuXHRcdFx0bGV0IGluZGV4ID0gbnVsbDtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdGluZGV4ID0gaTtcclxuXHRcdFx0XHRmbGFnID0gYGNob29zZUxpc3RbJHtpfV0uZmxhZ2A7XHJcblx0XHRcdFx0aWYgKCFhcnJheS5pbmNsdWRlcyhhcnJbaV0udmFsdWUpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHRbZmxhZ106IGZhbHNlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHRbZmxhZ106IHRydWVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG4gICAgICAgICAgICB9XHJcblx0XHR9LFxyXG5cdFx0Ly8g6ZqQ6JePcGlja2VyXHJcblx0XHRoaWRlUGlja2VyKCkge1xyXG5cdFx0XHR0aGlzLnNob3dQaWNrZXIgPSBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdC8vIOWPlua2iOaMiemSruS6i+S7tlxyXG5cdFx0Y2FuY2FsKCkge1xyXG5cdFx0XHR0aGlzLnNob3dQaWNrZXIgPSBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdC8vIOehruWumuaMiemSruS6i+S7tlxyXG5cdFx0c3VyZSgpIHtcclxuXHRcdFx0bGlzdCA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBpdGVtIG9mIHRoaXMuY2hvb3NlTGlzdCkge1xyXG5cdFx0XHRcdGlmIChpdGVtLmZsYWcpIHtcclxuXHRcdFx0XHRcdGxpc3QucHVzaChpdGVtLnZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5saXN0ID0gbGlzdFxyXG5cdFx0XHR0aGlzLnNob3dQaWNrZXIgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLiRlbWl0KCdjaG9vc2VFdmVudCcsIHtcclxuXHRcdFx0XHRjaG9vc2VBcnJheTogdGhpcy5saXN0XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIGNob29zZUxpc3Q6e1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHdvV2F5OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtdWx0aXBsZTp7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==