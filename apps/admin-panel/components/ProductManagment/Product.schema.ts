import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
  categoryPick: yup
    .string()
    .notOneOf(['Choose category you want add product to.', ''])
    .required(),
  productName: yup.string().required(),
  productCount: yup.number().required(),
  terms: yup.bool().required(),
  file: yup.mixed().required(),
});

export const EditProductSchema = yup.object().shape({
  categoryPick: yup
    .string()
    .notOneOf(['Choose category you want add product to.', ''])
    .required(),
  productPick: yup
    .string()
    .notOneOf(['Choose product you want to edit.', ''])
    .required(),
  productName: yup.string().required(),
  productCount: yup.number().required(),
  terms: yup.bool().required(),
  file: yup.mixed().required(),
});

export const RemoveProductSchema = yup.object().shape({
  categoryPick: yup
    .string()
    .notOneOf(['Choose category you want add product to.', ''])
    .required(),
  productPick: yup
    .string()
    .notOneOf(['Choose product you want to edit.', ''])
    .required(),
});
