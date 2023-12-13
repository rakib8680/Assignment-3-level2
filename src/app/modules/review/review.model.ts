import { model, Schema } from "mongoose";
import { TReview } from "./review.interface";


const reviewSchema = new Schema<TReview>({
    courseId : {type: Schema.Types.ObjectId, required: true},
    rating : {type :Number, required: true},
    review : {type: String}

});


export const Review = model<TReview>('Review', reviewSchema)