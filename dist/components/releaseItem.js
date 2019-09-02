'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var releaseItem = function (_wepy$component) {
    _inherits(releaseItem, _wepy$component);

    function releaseItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, releaseItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = releaseItem.__proto__ || Object.getPrototypeOf(releaseItem)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
            forData: []
        }, _this.methods = {}, _this.events = {
            currentStatus: function currentStatus(status) {
                if (status == 0) {
                    _this.forData = _this.recommendData;
                } else if (status == 1) {
                    _this.forData = _this.recommendDatas;
                }
            },
            adminPopup: function adminPopup(currentTab) {
                if (currentTab == 0) {
                    _this.forData = _this.recommendDatas;
                }
            }
        }, _this.props = {
            recommendData: {
                type: Array,
                default: null
            },
            recommendDatas: {
                type: Array,
                default: null
            },
            stylePaddingTop: Boolean
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return releaseItem;
}(_wepy2.default.component);

exports.default = releaseItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2VJdGVtLmpzIl0sIm5hbWVzIjpbInJlbGVhc2VJdGVtIiwiY29tcG9uZW50cyIsImRhdGEiLCJmb3JEYXRhIiwibWV0aG9kcyIsImV2ZW50cyIsImN1cnJlbnRTdGF0dXMiLCJzdGF0dXMiLCJyZWNvbW1lbmREYXRhIiwicmVjb21tZW5kRGF0YXMiLCJhZG1pblBvcHVwIiwiY3VycmVudFRhYiIsInByb3BzIiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsInN0eWxlUGFkZGluZ1RvcCIsIkJvb2xlYW4iLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDSEMscUJBQVE7QUFETCxTLFFBR1BDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUztBQUNMQywyQkFBYyx1QkFBQ0MsTUFBRCxFQUFVO0FBQ3BCLG9CQUFHQSxVQUFRLENBQVgsRUFBYTtBQUNULDBCQUFLSixPQUFMLEdBQWUsTUFBS0ssYUFBcEI7QUFDSCxpQkFGRCxNQUVNLElBQUdELFVBQVEsQ0FBWCxFQUFhO0FBQ2YsMEJBQUtKLE9BQUwsR0FBZSxNQUFLTSxjQUFwQjtBQUNIO0FBQ0osYUFQSTtBQVFMQyx3QkFBVyxvQkFBQ0MsVUFBRCxFQUFjO0FBQ3JCLG9CQUFHQSxjQUFZLENBQWYsRUFBaUI7QUFDYiwwQkFBS1IsT0FBTCxHQUFlLE1BQUtNLGNBQXBCO0FBQ0g7QUFDSjtBQVpJLFMsUUFjVEcsSyxHQUFRO0FBQ0pKLDJCQUFlO0FBQ1hLLHNCQUFNQyxLQURLO0FBRVhDLHlCQUFTO0FBRkUsYUFEWDtBQUtKTiw0QkFBZTtBQUNYSSxzQkFBTUMsS0FESztBQUVYQyx5QkFBUztBQUZFLGFBTFg7QUFTSkMsNkJBQWdCQztBQVRaLFM7Ozs7RUF2QjZCQyxlQUFLQyxTOztrQkFBekJuQixXIiwiZmlsZSI6InJlbGVhc2VJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWxlYXNlSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGZvckRhdGE6W11cclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgICAgY3VycmVudFN0YXR1czooc3RhdHVzKT0+e1xyXG4gICAgICAgICAgICBpZihzdGF0dXM9PTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JEYXRhID0gdGhpcy5yZWNvbW1lbmREYXRhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHN0YXR1cz09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvckRhdGEgPSB0aGlzLnJlY29tbWVuZERhdGFzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkbWluUG9wdXA6KGN1cnJlbnRUYWIpPT57XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUYWI9PTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JEYXRhID0gdGhpcy5yZWNvbW1lbmREYXRhc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIHJlY29tbWVuZERhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlY29tbWVuZERhdGFzOntcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlUGFkZGluZ1RvcDpCb29sZWFuXHJcbiAgICB9XHJcbn1cclxuIl19