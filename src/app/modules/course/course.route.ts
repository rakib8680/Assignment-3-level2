import { Router } from "express";
import { courseControllers } from "./course.controller";



const router = Router();

router.post('/course', courseControllers.createCourse)


export const courseRoutes = router;