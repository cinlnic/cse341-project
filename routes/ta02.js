//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = ['Rob', 'Ethan', 'Joshua'];

router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
  users.push(newUser);
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  const removeUser = req.body.removeUser;
  const index = users.indexOf(removeUser);
  console.log(removeUser);
  console.log(index);
  if (index != -1) {
    users.splice(index, 1);
  }
  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: users,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
