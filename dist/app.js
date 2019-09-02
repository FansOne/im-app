'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _api = require('./api/api.js');

var _utils = require('./utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/administration', 'pages/release', 'pages/about', 'pages/enterpriseClass', 'pages/personalReleaseDetails', 'pages/releaseImgText', 'pages/releaseViedoText', 'pages/search', 'pages/chatIndexLists'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '英淘',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: "#999999",
        selectedColor: "#000",
        list: [{
          pagePath: "pages/index",
          text: "广场",
          iconPath: "./image/square.png",
          selectedIconPath: "./image/square-select.png"
        }, {
          pagePath: "pages/chatIndexLists",
          text: "聊天",
          iconPath: "./image/chat.png",
          selectedIconPath: "./image/chat_select.png"
        }, {
          pagePath: "pages/release",
          text: "发布",
          iconPath: "./image/release.png",
          selectedIconPath: "./image/release_select.png"
        }, {
          pagePath: "pages/administration",
          text: "管理",
          iconPath: "./image/administration.png",
          selectedIconPath: "./image/administration_select.png"
        }, {
          pagePath: "pages/about",
          text: "我的",
          iconPath: "./image/about.png",
          selectedIconPath: "./image/about_select.png"
        }]
      },
      subPackages: [{
        root: 'subpackage',
        pages: ["editorRichText/editor", "chatIM/chatDetails", "square/enterpriseDetails", "square/enterpriseMsgEdit", "square/productEstablish", "square/productDetails", "square/positionDetails", "square/personalDetails", "square/editIntroduction", "square/editPersonalSkill", "square/editMsg", "square/productClass", "square/productList", "square/demandDetails", "square/personalRegistration"]
      }],
      permission: {
        "scope.userLocation": {
          "desc": "你的位置信息将用于小程序位置展示"
        }
      },
      networkTimeout: {
        "request": 8000
      }
    };
    _this.globalData = {
      im: {
        sdkAppID: 1400231695, // 用户标识接入 SDK 的应用 ID，必填
        accountType: 15656, // 帐号体系集成中的 accountType，必填
        accountMode: 0, //帐号模式，0 - 独立模式 1 - 托管模式
        imId: null, // 用户的 id
        imName: null, // 用户的 im 名称
        imAvatarUrl: 'www.baidu.com', // 用户的 im 头像 url
        userSig: null // 用户通过 imId 向后台申请的签名值 sig
      }
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
    // 登录
    // wx.login({
    //   success: (result) => {
    //     request(login,'POST',{ code:result.code}).then(res=>{
    //       wx.setStorageSync('loginData', res.data.data);
    //     })
    //   }
    // })

    /**
     * 初始化 im 参数，返回成功回调
    */

  }, {
    key: 'initImParams',
    value: function initImParams(cbOk) {
      // wx.login({
      //   success: (result) => {
      //     request(login,'POST',{ code:result.code}).then(res=>{
      //       wx.hideLoading();
      //       // 初始化 im 数据
      //       wepy.$instance.globalData.im.imId = res.data.data.imID
      //       wepy.$instance.globalData.im.userSig = res.data.data.sig
      //       wepy.$instance.globalData.im.imAvatarUrl = res.data.data.avatarurl
      //       wepy.$instance.globalData.im.imName = res.data.data.nickname
      //       wx.setStorageSync('loginData', res.data.data);
      //       cbOk()
      //     })
      //   }
      // })
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwic3ViUGFja2FnZXMiLCJyb290IiwicGVybWlzc2lvbiIsIm5ldHdvcmtUaW1lb3V0IiwiZ2xvYmFsRGF0YSIsImltIiwic2RrQXBwSUQiLCJhY2NvdW50VHlwZSIsImFjY291bnRNb2RlIiwiaW1JZCIsImltTmFtZSIsImltQXZhdGFyVXJsIiwidXNlclNpZyIsInVzZSIsImNiT2siLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7O0FBaUdFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUE3RmZBLE1BNkZlLEdBN0ZOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsc0JBRkssRUFHTCxlQUhLLEVBSUwsYUFKSyxFQUtMLHVCQUxLLEVBTUwsOEJBTkssRUFPTCxzQkFQSyxFQVFMLHdCQVJLLEVBU0wsY0FUSyxFQVVMLHNCQVZLLENBREE7QUFhUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLElBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQWJEO0FBbUJQQyxjQUFRO0FBQ05DLGVBQU0sU0FEQTtBQUVOQyx1QkFBZSxNQUZUO0FBR05DLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxhQURMO0FBRUxDLGdCQUFNLElBRkQ7QUFHTEMsb0JBQVUsb0JBSEw7QUFJTEMsNEJBQWtCO0FBSmIsU0FBRCxFQUtKO0FBQ0FILG9CQUFVLHNCQURWO0FBRUFDLGdCQUFNLElBRk47QUFHQUMsb0JBQVUsa0JBSFY7QUFJQUMsNEJBQWtCO0FBSmxCLFNBTEksRUFVSjtBQUNBSCxvQkFBVSxlQURWO0FBRUFDLGdCQUFNLElBRk47QUFHQUMsb0JBQVUscUJBSFY7QUFJQUMsNEJBQWtCO0FBSmxCLFNBVkksRUFlSjtBQUNBSCxvQkFBVSxzQkFEVjtBQUVBQyxnQkFBTSxJQUZOO0FBR0FDLG9CQUFVLDRCQUhWO0FBSUFDLDRCQUFrQjtBQUpsQixTQWZJLEVBb0JKO0FBQ0FILG9CQUFVLGFBRFY7QUFFQUMsZ0JBQU0sSUFGTjtBQUdBQyxvQkFBVSxtQkFIVjtBQUlBQyw0QkFBa0I7QUFKbEIsU0FwQkk7QUFIQSxPQW5CRDtBQWlEUEMsbUJBQWEsQ0FDWDtBQUNFQyxjQUFNLFlBRFI7QUFFRWYsZUFBTyxDQUNMLHVCQURLLEVBRUwsb0JBRkssRUFHTCwwQkFISyxFQUlMLDBCQUpLLEVBS0wseUJBTEssRUFNTCx1QkFOSyxFQU9MLHdCQVBLLEVBUUwsd0JBUkssRUFTTCx5QkFUSyxFQVVMLDBCQVZLLEVBV0wsZ0JBWEssRUFZTCxxQkFaSyxFQWFMLG9CQWJLLEVBY0wsc0JBZEssRUFlTCw2QkFmSztBQUZULE9BRFcsQ0FqRE47QUF1RVBnQixrQkFBWTtBQUNWLDhCQUFzQjtBQUNwQixrQkFBUTtBQURZO0FBRFosT0F2RUw7QUE0RVBDLHNCQUFnQjtBQUNkLG1CQUFXO0FBREc7QUE1RVQsS0E2Rk07QUFBQSxVQVpmQyxVQVllLEdBWkY7QUFDWEMsVUFBSTtBQUNGQyxrQkFBVSxVQURSLEVBQ29CO0FBQ3RCQyxxQkFBYSxLQUZYLEVBRWtCO0FBQ3BCQyxxQkFBYSxDQUhYLEVBR2M7QUFDaEJDLGNBQU0sSUFKSixFQUlVO0FBQ1pDLGdCQUFRLElBTE4sRUFLWTtBQUNkQyxxQkFBYSxlQU5YLEVBTTRCO0FBQzlCQyxpQkFBUyxJQVBQLENBT1k7QUFQWjtBQURPLEtBWUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7K0JBRVUsQ0FTVjtBQVJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUY7Ozs7OztpQ0FHYUMsSSxFQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OztFQWhJMEJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuL2FwaS9hcGknXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi91dGlscy91dGlscydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2FkbWluaXN0cmF0aW9uJyxcbiAgICAgICdwYWdlcy9yZWxlYXNlJyxcbiAgICAgICdwYWdlcy9hYm91dCcsXG4gICAgICAncGFnZXMvZW50ZXJwcmlzZUNsYXNzJyxcbiAgICAgICdwYWdlcy9wZXJzb25hbFJlbGVhc2VEZXRhaWxzJyxcbiAgICAgICdwYWdlcy9yZWxlYXNlSW1nVGV4dCcsXG4gICAgICAncGFnZXMvcmVsZWFzZVZpZWRvVGV4dCcsXG4gICAgICAncGFnZXMvc2VhcmNoJyxcbiAgICAgICdwYWdlcy9jaGF0SW5kZXhMaXN0cydcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfoi7Hmt5gnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjpcIiM5OTk5OTlcIixcbiAgICAgIHNlbGVjdGVkQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvaW5kZXhcIixcbiAgICAgICAgdGV4dDogXCLlub/lnLpcIixcbiAgICAgICAgaWNvblBhdGg6IFwiLi9pbWFnZS9zcXVhcmUucG5nXCIsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiLi9pbWFnZS9zcXVhcmUtc2VsZWN0LnBuZ1wiXG4gICAgICB9LHtcbiAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvY2hhdEluZGV4TGlzdHNcIixcbiAgICAgICAgdGV4dDogXCLogYrlpKlcIixcbiAgICAgICAgaWNvblBhdGg6IFwiLi9pbWFnZS9jaGF0LnBuZ1wiLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi4vaW1hZ2UvY2hhdF9zZWxlY3QucG5nXCJcbiAgICAgIH0se1xuICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9yZWxlYXNlXCIsXG4gICAgICAgIHRleHQ6IFwi5Y+R5biDXCIsXG4gICAgICAgIGljb25QYXRoOiBcIi4vaW1hZ2UvcmVsZWFzZS5wbmdcIixcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2ltYWdlL3JlbGVhc2Vfc2VsZWN0LnBuZ1wiXG4gICAgICB9LHtcbiAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvYWRtaW5pc3RyYXRpb25cIixcbiAgICAgICAgdGV4dDogXCLnrqHnkIZcIixcbiAgICAgICAgaWNvblBhdGg6IFwiLi9pbWFnZS9hZG1pbmlzdHJhdGlvbi5wbmdcIixcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2ltYWdlL2FkbWluaXN0cmF0aW9uX3NlbGVjdC5wbmdcIiAgICAgXG4gICAgICB9LHtcbiAgICAgICAgcGFnZVBhdGg6IFwicGFnZXMvYWJvdXRcIixcbiAgICAgICAgdGV4dDogXCLmiJHnmoRcIixcbiAgICAgICAgaWNvblBhdGg6IFwiLi9pbWFnZS9hYm91dC5wbmdcIixcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIuL2ltYWdlL2Fib3V0X3NlbGVjdC5wbmdcIlxuICAgICAgfV1cbiAgICB9LFxuICAgIHN1YlBhY2thZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdzdWJwYWNrYWdlJyxcbiAgICAgICAgcGFnZXM6IFtcbiAgICAgICAgICBcImVkaXRvclJpY2hUZXh0L2VkaXRvclwiLFxuICAgICAgICAgIFwiY2hhdElNL2NoYXREZXRhaWxzXCIsXG4gICAgICAgICAgXCJzcXVhcmUvZW50ZXJwcmlzZURldGFpbHNcIixcbiAgICAgICAgICBcInNxdWFyZS9lbnRlcnByaXNlTXNnRWRpdFwiLFxuICAgICAgICAgIFwic3F1YXJlL3Byb2R1Y3RFc3RhYmxpc2hcIixcbiAgICAgICAgICBcInNxdWFyZS9wcm9kdWN0RGV0YWlsc1wiLCBcbiAgICAgICAgICBcInNxdWFyZS9wb3NpdGlvbkRldGFpbHNcIixcbiAgICAgICAgICBcInNxdWFyZS9wZXJzb25hbERldGFpbHNcIixcbiAgICAgICAgICBcInNxdWFyZS9lZGl0SW50cm9kdWN0aW9uXCIsXG4gICAgICAgICAgXCJzcXVhcmUvZWRpdFBlcnNvbmFsU2tpbGxcIixcbiAgICAgICAgICBcInNxdWFyZS9lZGl0TXNnXCIsXG4gICAgICAgICAgXCJzcXVhcmUvcHJvZHVjdENsYXNzXCIsXG4gICAgICAgICAgXCJzcXVhcmUvcHJvZHVjdExpc3RcIixcbiAgICAgICAgICBcInNxdWFyZS9kZW1hbmREZXRhaWxzXCIsXG4gICAgICAgICAgXCJzcXVhcmUvcGVyc29uYWxSZWdpc3RyYXRpb25cIlxuICAgICAgICBdICAgIFxuICAgICAgfVxuICAgIF0sXG4gICAgcGVybWlzc2lvbjoge1xuICAgICAgXCJzY29wZS51c2VyTG9jYXRpb25cIjoge1xuICAgICAgICBcImRlc2NcIjogXCLkvaDnmoTkvY3nva7kv6Hmga/lsIbnlKjkuo7lsI/nqIvluo/kvY3nva7lsZXnpLpcIlxuICAgICAgfVxuICAgIH0sXG4gICAgbmV0d29ya1RpbWVvdXQ6IHtcbiAgICAgIFwicmVxdWVzdFwiOiA4MDAwXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICBpbToge1xuICAgICAgc2RrQXBwSUQ6IDE0MDAyMzE2OTUsIC8vIOeUqOaIt+agh+ivhuaOpeWFpSBTREsg55qE5bqU55SoIElE77yM5b+F5aGrXG4gICAgICBhY2NvdW50VHlwZTogMTU2NTYsIC8vIOW4kOWPt+S9k+ezu+mbhuaIkOS4reeahCBhY2NvdW50VHlwZe+8jOW/heWhq1xuICAgICAgYWNjb3VudE1vZGU6IDAsIC8v5biQ5Y+35qih5byP77yMMCAtIOeLrOeri+aooeW8jyAxIC0g5omY566h5qih5byPXG4gICAgICBpbUlkOiBudWxsLCAvLyDnlKjmiLfnmoQgaWRcbiAgICAgIGltTmFtZTogbnVsbCwgLy8g55So5oi355qEIGltIOWQjeensFxuICAgICAgaW1BdmF0YXJVcmw6ICd3d3cuYmFpZHUuY29tJywgLy8g55So5oi355qEIGltIOWktOWDjyB1cmxcbiAgICAgIHVzZXJTaWc6IG51bGwgLy8g55So5oi36YCa6L+HIGltSWQg5ZCR5ZCO5Y+w55Sz6K+355qE562+5ZCN5YC8IHNpZ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOeZu+W9lVxuICAgIC8vIHd4LmxvZ2luKHtcbiAgICAvLyAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAvLyAgICAgcmVxdWVzdChsb2dpbiwnUE9TVCcseyBjb2RlOnJlc3VsdC5jb2RlfSkudGhlbihyZXM9PntcbiAgICAvLyAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9naW5EYXRhJywgcmVzLmRhdGEuZGF0YSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgfVxuICAvKipcbiAgICog5Yid5aeL5YyWIGltIOWPguaVsO+8jOi/lOWbnuaIkOWKn+Wbnuiwg1xuICAqL1xuICBpbml0SW1QYXJhbXMoY2JPayl7XG4gICAgLy8gd3gubG9naW4oe1xuICAgIC8vICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgIC8vICAgICByZXF1ZXN0KGxvZ2luLCdQT1NUJyx7IGNvZGU6cmVzdWx0LmNvZGV9KS50aGVuKHJlcz0+e1xuICAgIC8vICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgLy8gICAgICAgLy8g5Yid5aeL5YyWIGltIOaVsOaNrlxuICAgIC8vICAgICAgIHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuaW0uaW1JZCA9IHJlcy5kYXRhLmRhdGEuaW1JRFxuICAgIC8vICAgICAgIHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuaW0udXNlclNpZyA9IHJlcy5kYXRhLmRhdGEuc2lnXG4gICAgLy8gICAgICAgd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5pbS5pbUF2YXRhclVybCA9IHJlcy5kYXRhLmRhdGEuYXZhdGFydXJsXG4gICAgLy8gICAgICAgd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5pbS5pbU5hbWUgPSByZXMuZGF0YS5kYXRhLm5pY2tuYW1lXG4gICAgLy8gICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ2luRGF0YScsIHJlcy5kYXRhLmRhdGEpO1xuICAgIC8vICAgICAgIGNiT2soKVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cbn1cbiJdfQ==