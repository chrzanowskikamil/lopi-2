import * as yup from 'yup';

export const CategorySchema = yup.object().shape({
  categoryName: yup.string().required(),
  productCount: yup.number().required(),
  terms: yup.bool().required(),
  file: yup.mixed().required(),
});
