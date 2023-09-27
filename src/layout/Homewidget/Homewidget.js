import React from "react";
import { useState } from "react";
import HomeWidgetModal from "./HomeWidgetModal";
import { useSelector } from "react-redux";

function Homewidget() {
  const user = useSelector((state) => state.authentication.user);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="border border-light rounded p-4">
            <h3 className="font-weight-bold text-center mb-4">
              Sell Your Car on PakWheels and Get the Best Price
            </h3>
            <div className="row mt-4">
              <div className="col-md-5 mb-4">
                <h5 className="text-primary font-weight-bold">
                  Post your Ad on PakWheels
                </h5>
                <p style={{ fontSize: "15px" }}>
                  ✔ Post your Ad for Free in 3 Easy Steps
                </p>
                <p style={{ fontSize: "14px" }}>
                  ✔ Get Genuine offers from Verified Buyers
                </p>
                <p style={{ fontSize: "15px" }}>
                  ✔ Sell your car Fast at the Best Price
                </p>
                {user ? (
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: "4px" }}
                  >
                    Coming soon
                  </button>
                ) : (
                  <button
                    onClick={openModal}
                    className="btn btn-primary"
                    style={{ borderRadius: "4px" }}
                  >
                    Post Your Ad
                  </button>
                )}
              </div>
              <div className="col-md-2 text-center">
                <h5 className="my-4">OR</h5>
              </div>
              <div className="col-md-5 mb-4">
                <h5 className="text-primary font-weight-bold">
                  Try PakWheels Sell It For Me
                </h5>
                <p style={{ fontSize: "14px" }}>
                  ✔ Dedicated Sales Expert to Sell your Car
                </p>
                <p style={{ fontSize: "13px" }}>
                  ✔ We Bargain for you and share the Best Offer
                </p>
                <p style={{ fontSize: "15px" }}>
                  ✔ We ensure Safe & Secure Transaction
                </p>
                {user ? (
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: "4px" }}
                  >
                    Coming Soon
                  </button>
                ) : (
                  <button
                    onClick={openModal}
                    className="btn btn-danger"
                    style={{ borderRadius: "4px" }}
                  >
                    Register Your Car
                  </button>
                )}
                <HomeWidgetModal isOpen={modalIsOpen} closeModal={closeModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homewidget;
