'use strict';

var apiUrl = 'http://192.168.2.126/api/',
    login = apiUrl + 'demo/wxid',
    accountCheck = apiUrl + 'demo/accountCheck',
    imLogin = apiUrl + 'demo/imLogin',
    uploadImg = apiUrl + 'demo/uploadImg',
    userRegister = apiUrl + 'demo/register',
    checkPhone = apiUrl + 'sms/send',
    apiLocation = apiUrl + 'demo/geographic',
    indexData = apiUrl + 'demo/index',
    companyDetails = apiUrl + 'demo/company',
    productCategory = apiUrl + 'demo/category',
    personalMsg = apiUrl + 'demo/person',
    productLists = apiUrl + 'demo/productList';

module.exports = {
      login: login,
      accountCheck: accountCheck,
      imLogin: imLogin,
      uploadImg: uploadImg,
      userRegister: userRegister,
      checkPhone: checkPhone,
      apiLocation: apiLocation,
      indexData: indexData,
      companyDetails: companyDetails,
      productCategory: productCategory,
      personalMsg: personalMsg,
      productLists: productLists
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJhcGlVcmwiLCJsb2dpbiIsImFjY291bnRDaGVjayIsImltTG9naW4iLCJ1cGxvYWRJbWciLCJ1c2VyUmVnaXN0ZXIiLCJjaGVja1Bob25lIiwiYXBpTG9jYXRpb24iLCJpbmRleERhdGEiLCJjb21wYW55RGV0YWlscyIsInByb2R1Y3RDYXRlZ29yeSIsInBlcnNvbmFsTXNnIiwicHJvZHVjdExpc3RzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxTQUFTLDJCQUFmO0FBQUEsSUFFTUMsUUFBV0QsTUFBWCxjQUZOO0FBQUEsSUFHTUUsZUFBa0JGLE1BQWxCLHNCQUhOO0FBQUEsSUFJTUcsVUFBYUgsTUFBYixpQkFKTjtBQUFBLElBS01JLFlBQWVKLE1BQWYsbUJBTE47QUFBQSxJQU1NSyxlQUFrQkwsTUFBbEIsa0JBTk47QUFBQSxJQU9NTSxhQUFnQk4sTUFBaEIsYUFQTjtBQUFBLElBUU1PLGNBQWlCUCxNQUFqQixvQkFSTjtBQUFBLElBU01RLFlBQWVSLE1BQWYsZUFUTjtBQUFBLElBVU1TLGlCQUFvQlQsTUFBcEIsaUJBVk47QUFBQSxJQVdNVSxrQkFBcUJWLE1BQXJCLGtCQVhOO0FBQUEsSUFZTVcsY0FBaUJYLE1BQWpCLGdCQVpOO0FBQUEsSUFhTVksZUFBa0JaLE1BQWxCLHFCQWJOOztBQWVBYSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2JiLGtCQURhO0FBRWJDLGdDQUZhO0FBR2JDLHNCQUhhO0FBSWJDLDBCQUphO0FBS2JDLGdDQUxhO0FBTWJDLDRCQU5hO0FBT2JDLDhCQVBhO0FBUWJDLDBCQVJhO0FBU2JDLG9DQVRhO0FBVWJDLHNDQVZhO0FBV2JDLDhCQVhhO0FBWWJDO0FBWmEsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly8xOTIuMTY4LjIuMTI2L2FwaS8nLFxuICAgICAgXG4gICAgICBsb2dpbiA9IGAke2FwaVVybH1kZW1vL3d4aWRgLFxuICAgICAgYWNjb3VudENoZWNrID0gYCR7YXBpVXJsfWRlbW8vYWNjb3VudENoZWNrYCxcbiAgICAgIGltTG9naW4gPSBgJHthcGlVcmx9ZGVtby9pbUxvZ2luYCxcbiAgICAgIHVwbG9hZEltZyA9IGAke2FwaVVybH1kZW1vL3VwbG9hZEltZ2AsXG4gICAgICB1c2VyUmVnaXN0ZXIgPSBgJHthcGlVcmx9ZGVtby9yZWdpc3RlcmAsXG4gICAgICBjaGVja1Bob25lID0gYCR7YXBpVXJsfXNtcy9zZW5kYCxcbiAgICAgIGFwaUxvY2F0aW9uID0gYCR7YXBpVXJsfWRlbW8vZ2VvZ3JhcGhpY2AsXG4gICAgICBpbmRleERhdGEgPSBgJHthcGlVcmx9ZGVtby9pbmRleGAsXG4gICAgICBjb21wYW55RGV0YWlscyA9IGAke2FwaVVybH1kZW1vL2NvbXBhbnlgLFxuICAgICAgcHJvZHVjdENhdGVnb3J5ID0gYCR7YXBpVXJsfWRlbW8vY2F0ZWdvcnlgLFxuICAgICAgcGVyc29uYWxNc2cgPSBgJHthcGlVcmx9ZGVtby9wZXJzb25gLFxuICAgICAgcHJvZHVjdExpc3RzID0gYCR7YXBpVXJsfWRlbW8vcHJvZHVjdExpc3RgO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsb2dpbixcbiAgICBhY2NvdW50Q2hlY2ssXG4gICAgaW1Mb2dpbixcbiAgICB1cGxvYWRJbWcsXG4gICAgdXNlclJlZ2lzdGVyLFxuICAgIGNoZWNrUGhvbmUsXG4gICAgYXBpTG9jYXRpb24sXG4gICAgaW5kZXhEYXRhLFxuICAgIGNvbXBhbnlEZXRhaWxzLFxuICAgIHByb2R1Y3RDYXRlZ29yeSxcbiAgICBwZXJzb25hbE1zZyxcbiAgICBwcm9kdWN0TGlzdHNcbn0iXX0=