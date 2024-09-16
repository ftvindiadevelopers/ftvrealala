import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllImages from "../Images";

function PopUp() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div
          className="modal website-modal"
          id="enquiryModal"
          tabIndex="-1"
          aria-labelledby="enquiryModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="media-content"></div>
                  </div>
                  <div className="col-lg-6 py-4">
                    <div className="text-content">
                      <div className="text-center">
                        <img
                          src={AllImages.DarkLogo}
                          alt="ftv real Estate logo"
                          className="pop-logo mb-4"
                        />
                      </div>
                      <div className="title">
                        <h2>
                          Your Flawless Properties Backed by FTV’s Licensing.
                        </h2>
                      </div>
                      <div className="desc">
                        <p>
                          Realize the scope in real estate with a strategic
                          brand partner!
                        </p>
                        <Link to="/contact-us" className="btn">
                          Enquire now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
