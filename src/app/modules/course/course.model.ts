import { model, Schema } from 'mongoose';
import { CourseLevel } from './course.constant';
import { TCourse, TTags } from './course.interface';



const tagSchema = new Schema<TTags>({
  name: { type: String },
  isDeleted: { type: Boolean },
});



const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: [true, 'course title is required'],
    unique: true,
  },
  instructor: { type: String, required: [true, 'instructor name is required'] },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Please Provide category id'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for the course'],
  },
  tags: [tagSchema],
  startDate: { type: String, required: [true, 'course start date is required'] },
  endDate: { type: String, required: [true, 'course end date is required'] },
  language: { type: String, required: [true, 'Course Language required'] },
  provider: { type: String },
  durationInWeeks: { type: Number },
  details: {
    level: {
      type: String,
      enum: {
        values: CourseLevel,
        message: '{VALUE} is not a valid level',
      },
    },
    description: String,
  },
});

export const Course = model<TCourse>('Course', courseSchema);
