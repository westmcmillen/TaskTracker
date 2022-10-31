import express from 'express';
import {
  createTask,
  deleteTask,
  fetchTasks,
  updateTask,
  createArchive,
  deleteArchive,
  fetchArchives,
} from './controller';

const router = express.Router();

router.get('/api/tasks/fetch', fetchTasks);
router.post('/api/tasks/create', createTask);
router.put('/api/tasks/update/:id', updateTask);
router.delete('/api/tasks/delete/:id', deleteTask);

router.get('/api/archives/fetch', fetchArchives);
router.post('/api/archives/create', createArchive);
router.delete('/api/archives/delete/:id', deleteArchive);

export { router as routes };
