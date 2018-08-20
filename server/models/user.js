var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  "userId":String,
  "UserName":String,
  "UserPwd":String,
  "orderList":Array,
  "cartList":[
    {
      "productId":String,
      "productName":String,
      "salePrice":String,
      "productImage":String,
      "checked":String,
      "productNum":String
    }
  ],
  "addressList":[
    {
      "addressId" : String,
      "userName" : String,
      "streetName" : String,
      "postCode" : Number,
      "tel" : Number,
      "isDefault" : Boolean
    }
  ],
},
  /*防止$pullAll错误*/
  {
    usePushEach:true
  });

module.exports = mongoose.model('User',userSchema)
