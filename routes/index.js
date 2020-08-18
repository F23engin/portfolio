var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { formSend: '' });
});

router.post('/', async function(req, res, next) {
  var transporter = nodemailer.createTransport({
    servise: 'gmail',
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: 'f4410.engineer@gmail.com',
      pass: 'vbygojdnqoyjjjft',
    }
  });
  
  var info = await transporter.sendMail({
    from: 'f4410.engineer@gmail.com',
    to: 'f4410.engineer@gmail.com',
    subject: "ポートフォリオからCONTACT",
    text: `#お名前：` + req.body.contactName + '#ご連絡先：' + req.body.contactMail + `#メッセージ：` + req.body.contactMessage,
  });

  res.render('index', {
    formSend: "フォームでのご連絡、誠にありがとうございます。",
  })
});

module.exports = router;
