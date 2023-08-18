const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');
const session = require('express-session');

router.get('/', auth.CheckAuth, function(req, res) {
    // res.send('라우트를 사용한 메인 페이지입니다.');
    // res.render('index', {name: '박주건', age: '20', job: '농부'});
    res.render('index');
});

module.exports = router;