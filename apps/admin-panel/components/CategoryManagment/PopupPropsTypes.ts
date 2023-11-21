export type PopupProps = {
  handleInPopupSubmit: VoidFunction;
  closeSubmitedPopup: VoidFunction;
  state: {
    popupSubmited: boolean;
    blocked: boolean;
    modalShow: boolean;
    inputData: {
      categoryName: string;
      description: string;
      icon: string;
      imagePath: string;
    };
  };
  show: boolean;
  onHide: VoidFunction;
};
