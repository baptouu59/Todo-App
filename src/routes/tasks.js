const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let tasks = [];

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { description, status } = req.body;
  const newTask = {
    id: uuidv4(),
    description,
    status: status || 'pending',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  task ? res.json(task) : res.status(404).json({ error: 'Task not found' });
});

router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (task) {
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.updatedAt = new Date();
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index !== -1) {
    tasks.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

module.exports = router;
