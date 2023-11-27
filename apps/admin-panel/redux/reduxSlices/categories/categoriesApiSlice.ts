import { ReduxReducerPaths, getToken } from '@lopi-2/common';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Categories {
  name: string;
  description: string;
  subcategories: string[];
  uid: string;
}

type AddCategoryProps = {
  name: string;
  description: string;
  icon: string;
  imagePath: string;
};

interface EditCategoryProps extends AddCategoryProps {
  previousUid: string;
}

const unversalHeaders = () => {
  return {
    accept: '*/*',
    Authorization: `Bearer ${getToken()}`,
  };
};

const unversalHeadersAppJson = () => {
  return {
    accept: '*/*',
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  };
};

export const categoriesApiSlice = createApi({
  reducerPath: ReduxReducerPaths.categoriesApiSlice,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),

  endpoints: (builder) => ({
    fetchCategories: builder.query<Categories[], void>({
      query() {
        return `/categories`;
      },
    }),

    addCategory: builder.mutation<void, AddCategoryProps>({
      query(add) {
        const headers = unversalHeadersAppJson();

        return {
          url: `/categories`,
          method: 'POST',
          headers,
          body: {
            name: add.name,
            description: add.description,
            icon: add.icon,
            imagePath: add.imagePath,
          },
          responseHandler: (response) => response.text(),
        };
      },
    }),

    editCategory: builder.mutation<void, EditCategoryProps>({
      query(edit) {
        const headers = unversalHeadersAppJson();

        return {
          url: `/categories/${edit.previousUid}`,
          method: 'PUT',
          headers,
          body: {
            name: edit.name,
            description: edit.description,
            icon: edit.icon,
            imagePath: edit.imagePath,
          },
          responseHandler: (response) => response.text(),
        };
      },
    }),

    removeCategory: builder.mutation<void, string>({
      query(uid) {
        const headers = unversalHeaders();

        return {
          url: `/categories/${uid}`,
          method: 'DELETE',
          headers,

          responseHandler: (response) => response.text(),
        };
      },
    }),
  }),
});

export const {
  useFetchCategoriesQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
  useRemoveCategoryMutation,
} = categoriesApiSlice;
