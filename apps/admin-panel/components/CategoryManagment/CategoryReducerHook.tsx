interface StateProps {
  blocked: boolean;
  modalShow: boolean;
  popupSubmited: boolean;
  inputData: {
    categoryName: string;
    productCount: string | null | number;
    terms: boolean;
    file: null | string;
  };
}
interface ActionProps {
  type: 'on_submit' | 'on_hide' | 'on_submit_popup' | 'close_submited_popup';
  values: {
    categoryName: string;
    productCount: string | null | number;
    terms: boolean;
    file: null | string;
  };
}

export const initialState: StateProps = {
  blocked: false,
  modalShow: false,
  popupSubmited: false,
  inputData: {
    categoryName: '',
    productCount: null,
    terms: true,
    file: null,
  },
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
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};
