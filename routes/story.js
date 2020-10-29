const express = require('express');
const router = express.Router();
const { query } = require('../config/db');

router.get('/', function (req,res,next){
  res.redirect('/story/1')
})

router.get('/:id', async function (req, res, next) {
  try {
    const story = await query(
      'SELECT * FROM story WHERE id = ?',
      req.params.id
    );
    console.log(story)

    const links = await query(
      'SELECT * FROM links WHERE story_id = ?', req.params.id)

      if (req.params.id == 1){
        const imgsrc = "/images/red_riding_hood.jpg"
        res.render('story', {
          id: req.params.id,
          story: story,
          links: links,
          imgsrc: imgsrc
        });
      }else{
    res.render('story', {
      id: req.params.id,
      story: story,
      links: links
    });
  }
  } catch (e) {
    console.error(e);
    next(e);
  }
});



module.exports = router;