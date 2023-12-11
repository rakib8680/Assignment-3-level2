import { model, Schema } from 'mongoose';
import { TCourse, TDetails, TTags } from './course.interface';



const tagSchema = new Schema<TTags>({
  name: { type: String },
  isDeleted: { type: Boolean },
});

const detailsSchema = new Schema<TDetails>({
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true,
  },
  description: { type: String },
});

const courseSchema = new Schema<TCourse>({
  title: { type: String, required: true, unique: true },
  instructor: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true },
  tags: [tagSchema],
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  language: { type: String, required: true },
  provider: { type: String },
  durationInWeeks: { type: Number },
  details: detailsSchema,
});


export const Course = model<TCourse>('Course', courseSchema);
