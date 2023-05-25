import React from "react";
import { useGetUSCountryContactsQuery } from "../feature/api/apiSlice";
import ContactCard from "./ContactCard";

export default function Modal() {
  const { data: contacts, isLoading, isError } = useGetUSCountryContactsQuery();
  let content = null;
  if (isLoading && !isError) {
    content = <tr>Loading...</tr>;
  } else if (!isLoading && isError) {
    content = <tr className="text-danger">There was an error</tr>;
  } else if (!isLoading && !isError && contacts?.count === 0) {
    content = <tr>Not fount</tr>;
  } else if (!isLoading && !isError && contacts?.count > 0) {
    content = contacts.results.map((contact) => {
      return <ContactCard key={contact.id} contact={contact}></ContactCard>;
    });
  }
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Us Contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>

            <div className="modal-footer">
              <button
              style={{background: '#ff7f50'}}
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                All Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
