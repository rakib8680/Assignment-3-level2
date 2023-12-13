


import { Router } from "express";
import { reviewControllers } from "./review.controller";



const router = Router();

router.post('/reviews', reviewControllers.createReview)


export const reviewRoutes = router;