import React, { useState, useEffect } from "react";
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
    width: "50%",
  },
};

const ServiceModel = ({
  isOpen,
  onClose,
  title,
  description,

  setModalDetails,
  modalDetails,
  isClose,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setModalDetails((prevDetails) => ({
      ...prevDetails,
      isShow: false,
    }));
    if (typeof onClose === "function") {
      onClose();
    }
  };

  console.log("============> ", modalDetails);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="p-2">
        <div className="flex  justify-center  mb-4">
          <h2 className="font-bold text-center text-2xl text-#101828">
            {modalDetails.title}
          </h2>
        </div>
        <p className="text-md mt-2 text-[#475467]">{modalDetails.detail}</p>
        {modalDetails.highlight && (
          <div className="text-lg py-2 px-2 mt-8 text-center text-secondary rounded-lg border border-secondary">
            {modalDetails.highlight}
          </div>
        )}
        <div className="flex justify-center mt-6">
          <button
            className="py-2 px-8 bg-secondary text-white rounded-lg mr-2"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModel;
