export type PopupProps = {
  handleInPopupSubmit: VoidFunction;
  closeSubmitedPopup: VoidFunction;
  state: {
    popupSubmited: boolean;
    blocked: boolean;
    modalShow: boolean;
    inputData: {
      categoryPick: string;
      productPick: string;
      productName: string;
      productCount: string | number;
      terms: boolean;
      file: null | string;
    };
  };

  show: boolean;
  onHide: VoidFunction;
};
