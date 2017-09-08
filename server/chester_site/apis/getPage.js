const express = require('express');
const router = express.Router();
let picModel = require('../model/jiandan/picsModel');
let likeModel = require('../model/jiandan/likesModel');


router.get('/getPage/:pageNum', (req, res) => {
  const pageNum = parseInt(req.params.pageNum);
  // console.log(pageNum);
  picModel.find({'order': {$gte: (pageNum - 1) * 50, $lt: pageNum * 50}})
    .exec((err, result) => {
      if (err) {
        res.status(500).send('Something broke!');
      }
      res.json(result);
    });
});
router.put('/likeit', (req, res) => {
  const picNum = parseInt(req.body.num);
  const picAddress = req.body.address;
  // console.log(req.body);
  // console.log(pageNum);
  // 创建一条数据实例
  // 这里，将put写为更新数据库中该条数据的like字段，删除也是
  picModel.find({'order': picNum}).exec((err, result) => {
    if (err) {
      res.sendStatus(500);
    }
    let res1 = res;
    // console.log(result.toString() == []);
    // 如果数据不重复，再改
    const theData = result[0];
    // console.log(result[0].like);
    if (theData.like === undefined || theData.like === false) {

      picModel.update({'order': picNum}, {$set: {like: true}}, {upsert: false}, (err, res) => {
        console.log('like success, pic:' + picNum);
        res1.sendStatus(200);
      });
    } else {
      console.log('pic already exits!');
      res1.sendStatus(200);
    }
  });
});
router.delete('/likeit/:picNum', (req, res) => {
  const picNum = parseInt(req.params.picNum);
  // console.log(req.body);
  // console.log(pageNum);
  // 创建一条数据实例
  let res1 = res;
  picModel.update({'order': picNum}, {$set: {like: false}}, {upsert: false}, (err, res) => {
    console.log('dislike success, pic:' + picNum);
    res1.sendStatus(200);
  });

});

module.exports = router;
