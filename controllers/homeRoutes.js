const router = require('express').Router();
const { Post, User, Recipe } = require('../models');

// get all recipes for homepage
// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include: [User],
//         });
//         const posts = postData.map((post) => post.get({ plain: true }));
//         console.log(posts);
//         res.render('allPosts', {
//             posts,
//             loggedIn: req.session.loggedIn,
//             currentPage: 'Home',
//       });
//     } catch (err) {
//       console.log(err)
//         res.status(500).json(err);
//     }
// });
router.get('/', async (req, res) => {
  try {
      const recipes = await Recipe.findAll({
          // include: [User],
      });
      res.render('allRecipes', {
          recipes,
          loggedIn: req.session.loggedIn,
          currentPage: 'Home',
    });
  } catch (err) {
    console.log(err)
      res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  try {
    res.render("login")
  }catch (err) {
    console.log(err)
      res.status(500).json(err);
  }
});

router.get('/addRecipe', (req, res) => {
  try {
    res.render("addRecipe")
  }catch (err) {
    console.log(err)
      res.status(500).json(err);
  }
});
router.get('/homepage', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('home', { posts, loggedIn: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Router for handling signup endpoint. Check if logged in redirect to home if not logged in redirect then to signup 
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup', { currentPage: 'Home' });
  });
module.exports = router;

