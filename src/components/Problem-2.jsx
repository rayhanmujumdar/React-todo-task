import React from "react";
import ContactModalAll from "./ContactModalAll";
import ContactModalUs from "./ContackModalUs";
import DetailsModal from "./DetailsModal";

const Problem2 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button
            type="button"
            data-bs-toggle="modal"
            href="#exampleModalToggle2"
            className="btn btn-lg btn-outline-primary"
          >
            All Contacts
          </button>
          <button
            type="button"
            className="btn btn-lg btn-outline-warning"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
          >
            US Contacts
          </button>
        </div>
        {/* <!-- Button trigger modal --> */}
        <ContactModalAll></ContactModalAll>
        <ContactModalUs></ContactModalUs>
        <DetailsModal></DetailsModal>
      </div>
    </div>
  );
};

export default Problem2;
