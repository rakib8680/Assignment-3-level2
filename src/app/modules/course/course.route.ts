import { Router } from 'express';
import { requestValidation } from '../../middlewares/requestValidation';
import { courseControllers } from './course.controller';
import { courseValidations } from './course.validation';

const router = Router();

router.post(
  '/course',
  requestValidation(courseValidations.createCourseSchemaValidation),
  courseControllers.createCourse,
);

router.get('/courses', courseControllers.getAllCourse)

export const courseRoutes = router;
