import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
  productName: yup.string().required(),
  productCount: yup.number().required(),
  terms: yup.bool().required(),
  file: yup.mixed().required(),
});
