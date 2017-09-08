/**
 * Created by Chester on 2017/9/8.
 */
let mongoose = require('./connectToJiandan');
const Schema = mongoose.Schema;

let likesSchema = new Schema({
  order : { type: Number },
  imgAddress : {type: String}
});

module.exports = mongoose.model('Likes',likesSchema,'Likes');
