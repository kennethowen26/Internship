  const Task = require('../models/task.model');

  
  const validateStatus = (status) => ['pending', 'in_progress', 'done'].includes(status);
  const validatePriority = (p) => p == null || (Number.isInteger(p) && p >= 1 && p <= 5);

  exports.createTask = async (req, res) => {
    try {
      const { title, description, status, priority, due_date } = req.body;

      if (!title) return res.status(400).json({ error: 'Title is required' });
      if (status && !validateStatus(status))
        return res.status(400).json({ error: 'Invalid status' });
      if (!validatePriority(priority))
        return res.status(400).json({ error: 'Priority must be 1-5' });

      const task = await Task.create({ title, description, status, priority, due_date });
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.getTasks = async (req, res) => {
    try {
      const { status, q } = req.query;
      const filter = {};
      if (status) filter.status = status;
      if (q) {
        filter.$or = [
          { title: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } },
        ];
      }
      const tasks = await Task.find(filter);
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  
  exports.getTaskById = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  
  exports.updateTask = async (req, res) => {
    try {
      const { title, description, status, priority, due_date } = req.body;

      if (status && !validateStatus(status))
        return res.status(400).json({ error: 'Invalid status' });
      if (!validatePriority(priority))
        return res.status(400).json({ error: 'Priority must be 1-5' });

      const task = await Task.findByIdAndUpdate(
        req.params.id,
        { title, description, status, priority, due_date },
        { new: true, runValidators: true }
      );
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  
  exports.deleteTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json({ error: 'Task not found' });
      res.json({ message: 'Task deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };