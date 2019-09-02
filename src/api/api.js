const apiUrl = 'http://192.168.2.126/api/',
      
      login = `${apiUrl}demo/wxid`,
      accountCheck = `${apiUrl}demo/accountCheck`,
      imLogin = `${apiUrl}demo/imLogin`,
      uploadImg = `${apiUrl}demo/uploadImg`,
      userRegister = `${apiUrl}demo/register`,
      checkPhone = `${apiUrl}sms/send`,
      apiLocation = `${apiUrl}demo/geographic`,
      indexData = `${apiUrl}demo/index`,
      companyDetails = `${apiUrl}demo/company`,
      productCategory = `${apiUrl}demo/category`,
      personalMsg = `${apiUrl}demo/person`,
      productLists = `${apiUrl}demo/productList`;

module.exports = {
    login,
    accountCheck,
    imLogin,
    uploadImg,
    userRegister,
    checkPhone,
    apiLocation,
    indexData,
    companyDetails,
    productCategory,
    personalMsg,
    productLists
}