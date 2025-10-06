const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let blogposts = [
  { id: 1, title: "Post 1", author: "John", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { id: 2, title: "Post 2", author: "Jane", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { id: 3, title: "Post 3", author: "Jill", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { id: 4, title: "Post 4", author: "Jack", body: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
];


app.get('/', (req, res) => {
  res.render('index', { title: "Home Page", blogposts });
});

app.get('/index', (req, res) => {
  res.redirect('/');
});


app.get('/about', (req, res) => {
  res.render('about', { title: "About Us" });
});


app.get('/contact-us', (req, res) => {
  res.render('contact-us', { title: "Contact Us" });
});


app.post('/contact-us', (req, res) => {
  const { name, email, message } = req.body;

  const data = { name, email, message };


  console.log(JSON.stringify(data, null, 2));

  
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data, null, 2));
});


app.use((req, res) => {
  res.status(404).render('404', { title: "Page Not Found" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
