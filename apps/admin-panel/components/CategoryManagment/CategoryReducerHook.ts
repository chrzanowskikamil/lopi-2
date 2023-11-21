import { useReducer } from 'react';

export interface CategoryReducerProps {
  categoryReducer: {
    state: StateProps;
    onSubmit: (values: ValuesOnDispatchProps) => Promise<void>;
    onHide: (values: ValuesOnDispatchProps) => void;
    onSubmitPopup: (values: ValuesOnDispatchProps) => void;
    closeSubmitedPopup: (values: ValuesOnDispatchProps) => void;
  };
}

interface StateProps {
  blocked: boolean;
  modalShow: boolean;
  popupSubmited: boolean;
  inputData: {
    categoryName: string;
    description: string;
    icon: string;
    imagePath: string;
  };
  selectedCategoryUid: string;
  selectedValue: string;
}

interface ActionProps {
  type:
    | 'on_submit'
    | 'on_hide'
    | 'on_submit_popup'
    | 'close_submited_popup'
    | 'on_edit';
  values: {
    categoryName: string;
    description: string;
    icon: string;
    imagePath: string;
    selectedCategoryUid: string;
    selectedValue: string;
  };
}

export const initialState: StateProps = {
  blocked: false,
  modalShow: false,
  popupSubmited: false,
  inputData: {
    categoryName: '',
    description: '',
    icon: '',
    imagePath: '',
  },
  selectedCategoryUid: '',
  selectedValue: '',
};

export const categoryReducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'on_submit': {
      return {
        ...state,
        inputData: action.values,
        modalShow: true,
        blocked: true,
      };
    }
    case 'on_submit_popup': {
      return {
        ...state,
        popupSubmited: true,
      };
    }
    case 'close_submited_popup': {
      return {
        ...state,
        popupSubmited: false,
        blocked: false,
        modalShow: false,
      };
    }
    case 'on_hide': {
      return {
        ...state,
        blocked: false,
        modalShow: false,
      };
    }
    case 'on_edit': {
      return {
        ...state,
        inputData: action.values,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export interface ValuesOnDispatchProps {
  categoryName: string;
  description: string;
  icon: string;
  imagePath: string;
  selectedCategoryUid: string;
  selectedValue: string;
}
const useCategoryReducer = () => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const onSubmit = async (values: ValuesOnDispatchProps) => {
    dispatch({
      type: 'on_submit',
      values,
    });
  };

  const onSubmitPopup = (values: ValuesOnDispatchProps) => {
    dispatch({
      type: 'on_submit_popup',
      values,
    });
  };

  const closeSubmitedPopup = (values: ValuesOnDispatchProps) => {
    dispatch({ type: 'close_submited_popup', values });
  };

  const onHide = (values: ValuesOnDispatchProps) => {
    dispatch({ type: 'on_hide', values });
  };

  return { state, onSubmit, onHide, onSubmitPopup, closeSubmitedPopup };
};

export default useCategoryReducer;
