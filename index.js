import dotenv from "dotenv/config";
import express from 'express';
import cookieParser from "cookie-parser";
import methodOverride from "method-override"
import { dirname } from "path";
import { fileURLToPath } from "url";
import MongoStore from "connect-mongo";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

import { connectDB } from "./server/config/db.mjs";

// Connect to DB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

app.use(express.static('public'));

// Templating Engine
// app.use(expressLayout);
// app.set('layout', './layouts/main');
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/views/index.html");
});

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname+"/views/index.html");
});

app.get('/hotel.html', (req, res) => {
  res.sendFile(__dirname+"/views/hotel.html");
});

app.get('/about.html', (req, res) => {
  res.sendFile(__dirname+"/views/about.html");
});

app.get('/contact.html', (req, res) => {
  res.sendFile(__dirname+"/views/contact.html");
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname+"/views/signup.html");
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname+"/views/login.html");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});