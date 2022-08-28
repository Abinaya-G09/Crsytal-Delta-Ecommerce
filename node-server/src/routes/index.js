import express from 'express';
import '../database/models';

let router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.send('Node Server App');
});

module.exports = router;
