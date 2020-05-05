var express = require('express');
var router = express.Router();
var Movieinfo = require('../models/movieinfo');

/* GET home page. */
router.get('/', function (req, res, next) {
    Movieinfo.find(function (err, docs) {
        var movieinfoChunks = [];
        var ChunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            movieinfoChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('movies/index', { title: 'MovieGen App', movieinfo: movieinfo });
    });
});
module.exports = router;
