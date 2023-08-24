export type PopupProps = {
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
  closeSubmitedPopup: VoidFunction;
  handleInPopupSubmit: VoidFunction;
  onHide: VoidFunction;
  show: boolean;
};
