//const express = require('express')
import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

app.get('/register', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});