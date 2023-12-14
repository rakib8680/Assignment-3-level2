import { queryFunction } from '../../helpers/queryFunction';
import { TCourse } from './course.interface';
import { Course } from './course.model';



// create a course
const createCourse = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};



// get all course
const getAllCourse = async (
  query: Record<string, unknown>,
): Promise<TCourse[]> => {
  const result = await queryFunction(Course.find(), query);
  return result;
};



// update course
const updateCourse = async (payload: Partial<TCourse>, id: string) => {
  const { tags, details, ...remainingData } = payload;



  const updatePrimitiveData = await Course.findByIdAndUpdate(
    id,
    remainingData,
    { new: true, runValidators: true },
  );
  if (!updatePrimitiveData) {
    throw new Error('Failed to update course');
  };



  if(tags && tags.length>0){

    // delete tags 
    const deletedTags = tags
    .filter(tag =>tag.name && tag.isDeleted)
    .map(tag=>tag.name);



   const deletedTagsResult=  await Course.findByIdAndUpdate(
        id,
        {
            $pull:{
                tags:{
                    name:{
                        $in:deletedTags
                    }
                }
            }
        },
        {new: true, runValidators: true}
    );

    if (!deletedTagsResult) {
        throw new Error('Failed to update course');
      };



    // add new tag 
    const newTags = tags?.filter(tag =>tag.name && !tag.isDeleted)
      const newTagsResult = await Course.findByIdAndUpdate(
        id,
        {
            $addToSet:{
                tags:{
                    $each: newTags
                }
            }
        },
        {new: true, runValidators: true}
      );
      if (!newTagsResult) {
        throw new Error('Failed to update course');
      };


  }

// final result 
  const result = await Course.findById(id)
  return result

};





export const courseServices = {
  createCourse,
  getAllCourse,
  updateCourse
};
