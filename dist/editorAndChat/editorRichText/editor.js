'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _editorComponent = require('./../../components/editorComponent.js');

var _editorComponent2 = _interopRequireDefault(_editorComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '',
      navigationBarBackgroundColor: '#F4F3F8',
      backgroundColor: '#F4F3F8'
    }, _this.$repeat = {}, _this.$props = { "editor": { "bindfinish": "finish", "xmlns:v-bind": "", "v-bind:outputType.once": "outputType", "v-bind:imageUploadUrl.once": "imageUploadUrl", "v-bind:imageUploadName.once": "imageUploadName", "v-bind:imageUploadKeyChain.once": "imageUploadKeyChain", "v-bind:uploadImageWhenChoose.once": "uploadImageWhenChoose", "v-bind:html.once": "html", "v-bind:windowHeight.sync": "windowHeight" } }, _this.$events = {}, _this.components = {
      editor: _editorComponent2.default
    }, _this.data = {
      windowHeight: 0,
      html: '<p class="xing-p">你可以在此处输入文本内容，也可以点击上方图标进行增加段落或图片</p><img class="xing-img" style="width: 100%" src="http://c12.eoemarket.net/app0/532/532969/screen/2751542.png" _height="0.61983" _uploaded="true"></img>',

      //图片上传相关属性，参考wx.uploadFile

      imageUploadUrl: 'http://localhost:8080/upload',
      imageUploadName: 'image',
      imageUploadKeyChain: 'image.url',
      outputType: 'html',
      uploadImageWhenChoose: false //是否在选择图片后立即上传
    }, _this.computed = {}, _this.events = {
      finish: function finish(e) {
        console.log(e.content);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReady',
    value: function onReady() {
      this.windowHeight = wx.getSystemInfoSync().windowHeight;
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      wx.setNavigationBarTitle({
        title: options.title
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'editorAndChat/editorRichText/editor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZWRpdG9yIiwiZGF0YSIsIndpbmRvd0hlaWdodCIsImh0bWwiLCJpbWFnZVVwbG9hZFVybCIsImltYWdlVXBsb2FkTmFtZSIsImltYWdlVXBsb2FkS2V5Q2hhaW4iLCJvdXRwdXRUeXBlIiwidXBsb2FkSW1hZ2VXaGVuQ2hvb3NlIiwiY29tcHV0ZWQiLCJldmVudHMiLCJmaW5pc2giLCJlIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwib3B0aW9ucyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXVCLEVBRGhCO0FBRVBDLG9DQUE2QixTQUZ0QjtBQUdQQyx1QkFBZ0I7QUFIVCxLLFFBS1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxjQUFhLFFBQWQsRUFBdUIsZ0JBQWUsRUFBdEMsRUFBeUMsMEJBQXlCLFlBQWxFLEVBQStFLDhCQUE2QixnQkFBNUcsRUFBNkgsK0JBQThCLGlCQUEzSixFQUE2SyxtQ0FBa0MscUJBQS9NLEVBQXFPLHFDQUFvQyx1QkFBelEsRUFBaVMsb0JBQW1CLE1BQXBULEVBQTJULDRCQUEyQixjQUF0VixFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxJLEdBQU87QUFDTEMsb0JBQWEsQ0FEUjtBQUVMQyxZQUFNLDRNQUZEOztBQUlMOztBQUVBQyxzQkFBZSw4QkFOVjtBQU9MQyx1QkFBZ0IsT0FQWDtBQVFMQywyQkFBb0IsV0FSZjtBQVNMQyxrQkFBVyxNQVROO0FBVUxDLDZCQUFzQixLQVZqQixDQVV1QjtBQVZ2QixLLFFBYVBDLFEsR0FBVyxFLFFBRVhDLE0sR0FBUztBQUNQQyxjQUFPLGdCQUFDQyxDQUFELEVBQUs7QUFDVkMsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsT0FBZDtBQUNEO0FBSE0sSzs7Ozs7OEJBTUM7QUFDUixXQUFLYixZQUFMLEdBQW9CYyxHQUFHQyxpQkFBSCxHQUF1QmYsWUFBM0M7QUFDRDs7OzJCQUNNZ0IsTyxFQUFRO0FBQ2JGLFNBQUdHLHFCQUFILENBQXlCO0FBQ3ZCQyxlQUFPRixRQUFRRTtBQURRLE9BQXpCO0FBR0Q7Ozs7RUF4Q2dDQyxlQUFLQyxJOztrQkFBbkIvQixLIiwiZmlsZSI6ImVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IGVkaXRvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2VkaXRvckNvbXBvbmVudCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OicnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOicjRjRGM0Y4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOicjRjRGM0Y4J1xyXG4gICAgfVxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImVkaXRvclwiOntcImJpbmRmaW5pc2hcIjpcImZpbmlzaFwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpvdXRwdXRUeXBlLm9uY2VcIjpcIm91dHB1dFR5cGVcIixcInYtYmluZDppbWFnZVVwbG9hZFVybC5vbmNlXCI6XCJpbWFnZVVwbG9hZFVybFwiLFwidi1iaW5kOmltYWdlVXBsb2FkTmFtZS5vbmNlXCI6XCJpbWFnZVVwbG9hZE5hbWVcIixcInYtYmluZDppbWFnZVVwbG9hZEtleUNoYWluLm9uY2VcIjpcImltYWdlVXBsb2FkS2V5Q2hhaW5cIixcInYtYmluZDp1cGxvYWRJbWFnZVdoZW5DaG9vc2Uub25jZVwiOlwidXBsb2FkSW1hZ2VXaGVuQ2hvb3NlXCIsXCJ2LWJpbmQ6aHRtbC5vbmNlXCI6XCJodG1sXCIsXCJ2LWJpbmQ6d2luZG93SGVpZ2h0LnN5bmNcIjpcIndpbmRvd0hlaWdodFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGVkaXRvclxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgd2luZG93SGVpZ2h0OjAsXHJcbiAgICAgIGh0bWw6ICc8cCBjbGFzcz1cInhpbmctcFwiPuS9oOWPr+S7peWcqOatpOWkhOi+k+WFpeaWh+acrOWGheWuue+8jOS5n+WPr+S7peeCueWHu+S4iuaWueWbvuagh+i/m+ihjOWinuWKoOauteiQveaIluWbvueJhzwvcD48aW1nIGNsYXNzPVwieGluZy1pbWdcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCIgc3JjPVwiaHR0cDovL2MxMi5lb2VtYXJrZXQubmV0L2FwcDAvNTMyLzUzMjk2OS9zY3JlZW4vMjc1MTU0Mi5wbmdcIiBfaGVpZ2h0PVwiMC42MTk4M1wiIF91cGxvYWRlZD1cInRydWVcIj48L2ltZz4nLFxyXG4gICAgICBcclxuICAgICAgLy/lm77niYfkuIrkvKDnm7jlhbPlsZ7mgKfvvIzlj4LogIN3eC51cGxvYWRGaWxlXHJcbiAgICAgIFxyXG4gICAgICBpbWFnZVVwbG9hZFVybDonaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZCcsXHJcbiAgICAgIGltYWdlVXBsb2FkTmFtZTonaW1hZ2UnLFxyXG4gICAgICBpbWFnZVVwbG9hZEtleUNoYWluOidpbWFnZS51cmwnLFxyXG4gICAgICBvdXRwdXRUeXBlOidodG1sJyxcclxuICAgICAgdXBsb2FkSW1hZ2VXaGVuQ2hvb3NlOmZhbHNlIC8v5piv5ZCm5Zyo6YCJ5oup5Zu+54mH5ZCO56uL5Y2z5LiK5LygXHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICB9XHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIGZpbmlzaDooZSk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmNvbnRlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcclxuICAgIH1cclxuICAgIG9uTG9hZChvcHRpb25zKXtcclxuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICB0aXRsZTogb3B0aW9ucy50aXRsZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuIl19