import React, { useEffect } from "react";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",

    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    width: "40%",
  },
};

const CustomModal = ({
  onClose,
  isOpen,
  title,
  closeButtonLabel,
  setConformationPopupDetails,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
    if (typeof onClose === "function") {
      onClose();
    }
    setConformationPopupDetails((prev) => ({ ...prev, isShow: false }));
  }

  function openModal(d) {
    setIsOpen(d);
  }

  useEffect(() => {
    openModal(isOpen);
  }, []);

  return (
    <React.Fragment>
      <div className="rounded-xl">
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form>
            <h1
              className={
                title?.isSuccess
                  ? "text-secondary text-center font-bold text-2xl px-3"
                  : "text-red-500 font-bold text-center text-xl "
              }
            >
              {title?.msg}
            </h1>
            <div className="flex justify-center">
              <button
                className={
                  title?.isSuccess
                    ? "text-white my-3  bg-secondary px-16 py-2 rounded-lg mx-10"
                    : "my-3 text-white bg-err px-16 py-2 rounded-lg mx-10"
                }
                onClick={closeModal}
              >
                {/* "text-white bg-secondary px-16 py-2 rounded-md mx-10" */}
                {closeButtonLabel}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default CustomModal;
