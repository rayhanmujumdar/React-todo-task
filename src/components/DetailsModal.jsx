import React from "react";
import { useGetContactQuery } from "../feature/api/apiSlice";

export default function DetailsModal() {
  const { data: contact, isLoading, isError } = useGetContactQuery();
  let content = null;
  if (isLoading && !isError) {
    content = <tr>Loading...</tr>;
  } else if (!isLoading && isError) {
    content = <tr className="text-danger">There was an error</tr>;
  } else if (!isLoading && !isError && contact?.count === 0) {
    content = <tr>Not fount</tr>;
  } else if (!isLoading && !isError && contact?.count > 0) {
    content = contact.results.map((contact) => {
      return <ContactCard key={contact.id} contact={contact}></ContactCard>;
    });
  }
  return (
    <div
      className="modal fade"
      id="exampleModalToggle3"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel3"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel3">
              All Contact
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div class="card" style={{ width: "18 rem" }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button
              className="btn btn-primary"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Us Contact
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
