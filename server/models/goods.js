var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  "productId":String,
  "productName":String,
  "productPrice":Number,
  "productImg":String,
  /*加上下面这两个属性，mongoose不能直接添加属性，必须是doc里面有的属性，才能赋值*/
  "checked": String,
  "productNum": String
});

module.exports = mongoose.model('Good',productSchema);
