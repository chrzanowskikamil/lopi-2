export type PopupProps = {
  handleInPopupSubmit: VoidFunction;
  closeSubmitedPopup: VoidFunction;
  state: {
    popupSubmited: boolean;
    blocked: boolean;
    modalShow: boolean;
    inputData: {
      categoryName: string;
      productCount: string | null | number;
      terms: boolean;
      file: null | string;
    };
  };

  show: boolean;
  onHide: VoidFunction;
};
