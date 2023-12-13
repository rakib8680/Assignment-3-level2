

import { Router } from "express";
import { categoryControllers } from "./category.controller";



const router = Router();

router.post('/categories',categoryControllers.createCategory)


export const categoryRoutes = router;