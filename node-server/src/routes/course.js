import express from 'express';
import courseList from '../sampleResponse/courseList';
import courseDetails from '../sampleResponse/courseDetail';

let Course = express.Router();

Course.get('/', async (req, res) => {
  res.status(200).json(courseList);
});

Course.get('/details', async (req, res) => {
  res.status(200).json(courseDetails);
});
export default Course;
