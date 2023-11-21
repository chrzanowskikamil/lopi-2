import * as yup from 'yup';

export const CategorySchema = yup.object().shape({
  categoryName: yup.string().required(),
  description: yup.string().required(),
  icon: yup.string().required(),
  imagePath: yup.string().required(),
});
