import { useReducer } from 'react';

export interface ProductReducerProps {
  productReducer: {
    state: StateProps;
    onSubmit: (values: ValuesOnDispatchProps) => Promise<void>;
    onHide: (values: ValuesOnDispatchProps) => void;
    onSubmitPopup: (values: ValuesOnDispatchProps) => void;
    closeSubmitedPopup: (values: ValuesOnDispatchProps) => void;
  };
}
export interface StateProps {
  blocked: boolean;
  modalShow: boolean;
  popupSubmited: boolean;

  inputData: {
    categoryPick: string;
    productPick: string;
    productName: string;
    productCount: string | number;
    terms: boolean;
    file: null | string;
  };
}
interface ActionProps {
  type:
    | 'on_submit'
    | 'on_hide'
    | 'on_submit_popup'
    | 'close_submited_popup'
    | 'category_pick';
  values: {
    categoryPick: string;
    productPick: string;
    productName: string;
    productCount: string | number;
    terms: boolean;
    file: null | string;
  };
}

const productReducer = (state: StateProps, action: ActionProps) => {
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
    default: {
      return state;
    }
  }
};

const initialState: StateProps = {
  blocked: false,
  modalShow: false,
  popupSubmited: false,
  inputData: {
    categoryPick: 'Choose category you want add product to.',
    productPick: 'Choose product you want to edit.',
    productName: '',
    productCount: '',
    terms: true,
    file: null,
  },
};

export interface ValuesOnDispatchProps {
  categoryPick: string;
  productPick: string;
  productName: string;
  productCount: string | number;
  terms: boolean;
  file: null | string;
}

const useProductReducer = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);

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

export default useProductReducer;
