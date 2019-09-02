'use strict';

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = function request(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var token = wx.getStorageSync('loginData').access_token;
  return _wepy2.default.request({
    url: url,
    method: method,
    data: data,
    header: {
      Accept: 'application/vnd.houzz.v1+json',
      Authorization: 'Bearer ' + token
    }
  }).catch(function (res) {
    wx.showToast({ title: "请求服务器数据异常", icon: 'none' });
  });
};
var toast = function toast(title, success) {
  wx.showToast({
    title: title,
    icon: success ? 'success' : 'none'
  });
};
//验证是否是手机号码
var vailPhone = function vailPhone(number) {
  var flag = false;
  var myreg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
  if (number.length != 11) {
    flag = flag;
  } else if (!myreg.test(number)) {
    flag = flag;
  } else {
    flag = true;
  }
  return flag;
};
// 支付API
var weChatPay = function weChatPay(res) {
  return new Promise(function (resolve, reject) {
    wx.requestPayment({
      timeStamp: res.data.message.timestamp,
      nonceStr: res.data.message.nonceStr,
      package: res.data.message.package,
      signType: 'MD5',
      paySign: res.data.message.paySign,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};
module.exports = {
  request: request,
  toast: toast,
  vailPhone: vailPhone,
  weChatPay: weChatPay
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwiYWNjZXNzX3Rva2VuIiwid2VweSIsImhlYWRlciIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJjYXRjaCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInRvYXN0Iiwic3VjY2VzcyIsInZhaWxQaG9uZSIsIm51bWJlciIsImZsYWciLCJteXJlZyIsImxlbmd0aCIsInRlc3QiLCJ3ZUNoYXRQYXkiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3RQYXltZW50IiwidGltZVN0YW1wIiwibWVzc2FnZSIsInRpbWVzdGFtcCIsIm5vbmNlU3RyIiwicGFja2FnZSIsInNpZ25UeXBlIiwicGF5U2lnbiIsImZhaWwiLCJlcnIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxVQUFXLFNBQVhBLE9BQVcsQ0FBQ0MsR0FBRCxFQUFpQztBQUFBLE1BQTVCQyxNQUE0Qix1RUFBbkIsTUFBbUI7QUFBQSxNQUFaQyxJQUFZLHVFQUFMLEVBQUs7O0FBQ2hELE1BQUlDLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0IsV0FBbEIsRUFBK0JDLFlBQTNDO0FBQ0EsU0FBT0MsZUFBS1IsT0FBTCxDQUFhO0FBQ2xCQyxTQUFLQSxHQURhO0FBRWxCQyxZQUFRQSxNQUZVO0FBR2xCQyxVQUFNQSxJQUhZO0FBSWxCTSxZQUFRO0FBQ05DLGNBQVMsK0JBREg7QUFFTkMsaUNBQTBCUDtBQUZwQjtBQUpVLEdBQWIsRUFRSlEsS0FSSSxDQVFFLGVBQUs7QUFDWlAsT0FBR1EsU0FBSCxDQUFhLEVBQUNDLE9BQU0sV0FBUCxFQUFtQkMsTUFBSyxNQUF4QixFQUFiO0FBQ0QsR0FWTSxDQUFQO0FBV0QsQ0FiRDtBQWNBLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxDQUFDRixLQUFELEVBQU9HLE9BQVAsRUFBaUI7QUFDN0JaLEtBQUdRLFNBQUgsQ0FBYTtBQUNYQyxXQUFPQSxLQURJO0FBRVhDLFVBQU1FLFVBQVEsU0FBUixHQUFrQjtBQUZiLEdBQWI7QUFJRCxDQUxEO0FBTUE7QUFDQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFXO0FBQzNCLE1BQUlDLE9BQU8sS0FBWDtBQUNBLE1BQUlDLFFBQVEsNkRBQVo7QUFDQSxNQUFJRixPQUFPRyxNQUFQLElBQWlCLEVBQXJCLEVBQXlCO0FBQ3ZCRixXQUFPQSxJQUFQO0FBQ0QsR0FGRCxNQUVNLElBQUksQ0FBQ0MsTUFBTUUsSUFBTixDQUFXSixNQUFYLENBQUwsRUFBeUI7QUFDN0JDLFdBQU9BLElBQVA7QUFDRCxHQUZLLE1BRUQ7QUFDSEEsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxTQUFPQSxJQUFQO0FBQ0QsQ0FYRDtBQVlBO0FBQ0EsSUFBTUksWUFBWSxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBTztBQUNyQixTQUFPLElBQUlDLE9BQUosQ0FBYSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBa0I7QUFDbEN2QixPQUFHd0IsY0FBSCxDQUFrQjtBQUNkQyxpQkFBV0wsSUFBSXRCLElBQUosQ0FBUzRCLE9BQVQsQ0FBaUJDLFNBRGQ7QUFFZEMsZ0JBQVVSLElBQUl0QixJQUFKLENBQVM0QixPQUFULENBQWlCRSxRQUZiO0FBR2RDLGVBQVNULElBQUl0QixJQUFKLENBQVM0QixPQUFULENBQWlCRyxPQUhaO0FBSWRDLGdCQUFVLEtBSkk7QUFLZEMsZUFBU1gsSUFBSXRCLElBQUosQ0FBUzRCLE9BQVQsQ0FBaUJLLE9BTFo7QUFNZG5CLGVBQVEsaUJBQUNRLEdBQUQsRUFBUTtBQUNaRSxnQkFBUUYsR0FBUjtBQUNILE9BUmE7QUFTZFksVUFUYyxnQkFTVEMsR0FUUyxFQVNKO0FBQ05WLGVBQU9VLEdBQVA7QUFDSDtBQVhhLEtBQWxCO0FBYUgsR0FkTSxDQUFQO0FBZUgsQ0FoQkQ7QUFpQkFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDYnhDLGtCQURhO0FBRWJnQixjQUZhO0FBR2JFLHNCQUhhO0FBSWJNO0FBSmEsQ0FBakIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5jb25zdCByZXF1ZXN0ICA9ICh1cmwsbWV0aG9kID0gJ1BPU1QnLGRhdGEgPSB7fSk9PntcbiAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ2luRGF0YScpLmFjY2Vzc190b2tlbjtcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XG4gICAgdXJsOiB1cmwsXG4gICAgbWV0aG9kOiBtZXRob2QsXG4gICAgZGF0YTogZGF0YSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIEFjY2VwdCA6ICdhcHBsaWNhdGlvbi92bmQuaG91enoudjEranNvbicsXG4gICAgICBBdXRob3JpemF0aW9uIDogYEJlYXJlciAke3Rva2VufWAsXG4gICAgfVxuICB9KS5jYXRjaChyZXM9PntcbiAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOlwi6K+35rGC5pyN5Yqh5Zmo5pWw5o2u5byC5bi4XCIsaWNvbjonbm9uZSd9KVxuICB9KTtcbn1cbmNvbnN0IHRvYXN0ID0gKHRpdGxlLHN1Y2Nlc3MpPT57XG4gIHd4LnNob3dUb2FzdCh7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGljb246IHN1Y2Nlc3M/J3N1Y2Nlc3MnOidub25lJ1xuICB9KVxufVxuLy/pqozor4HmmK/lkKbmmK/miYvmnLrlj7fnoIFcbmNvbnN0IHZhaWxQaG9uZSA9IChudW1iZXIpPT4ge1xuICBsZXQgZmxhZyA9IGZhbHNlO1xuICBsZXQgbXlyZWcgPSAvXjEoWzM4XVswLTldfDRbNTc5XXw1WzAtMyw1LTldfDZbNl18N1swMTM1Njc4XXw5Wzg5XSlcXGR7OH0kLztcbiAgaWYgKG51bWJlci5sZW5ndGggIT0gMTEpIHtcbiAgICBmbGFnID0gZmxhZztcbiAgfWVsc2UgaWYgKCFteXJlZy50ZXN0KG51bWJlcikpIHtcbiAgICBmbGFnID0gZmxhZztcbiAgfWVsc2V7XG4gICAgZmxhZyA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGZsYWc7XG59XG4vLyDmlK/ku5hBUElcbmNvbnN0IHdlQ2hhdFBheSA9IChyZXMpPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlICgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHtcbiAgICAgICAgICAgIHRpbWVTdGFtcDogcmVzLmRhdGEubWVzc2FnZS50aW1lc3RhbXAsXG4gICAgICAgICAgICBub25jZVN0cjogcmVzLmRhdGEubWVzc2FnZS5ub25jZVN0cixcbiAgICAgICAgICAgIHBhY2thZ2U6IHJlcy5kYXRhLm1lc3NhZ2UucGFja2FnZSxcbiAgICAgICAgICAgIHNpZ25UeXBlOiAnTUQ1JyxcbiAgICAgICAgICAgIHBheVNpZ246IHJlcy5kYXRhLm1lc3NhZ2UucGF5U2lnbixcbiAgICAgICAgICAgIHN1Y2Nlc3M6KHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICByZXF1ZXN0LFxuICAgIHRvYXN0LFxuICAgIHZhaWxQaG9uZSxcbiAgICB3ZUNoYXRQYXlcbn0iXX0=