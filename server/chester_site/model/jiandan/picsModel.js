/**
 * Created by Chester on 2017/9/8.
 */
let mongoose = require('./connectToJiandan');
const Schema = mongoose.Schema;

let picsSchema = new Schema({
  order : { type: Number },
  imgAddress : {type: String},
  like:{type:Boolean}
});
// 注意，这里生成model的时候要指定数据库中collection的名字(下面一行model方法的第三个参数)
module.exports = mongoose.model('PicAddresses',picsSchema,'PicAddresses');
