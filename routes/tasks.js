const express = require('express');
const router = express.Router();

let tasks = [{ id: 1, title: 'Sample task', done: false }];
let nextId = 2;

router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = { id: nextId++, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
