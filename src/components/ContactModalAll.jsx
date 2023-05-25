import React from "react";
import { useGetAllCountryContactsQuery } from "../feature/api/apiSlice";
import ContactCard from "./ContactCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ContactModalAll() {
  const {
    data: contacts,
    isLoading,
    isError,
  } = useGetAllCountryContactsQuery();
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
    <div
      className="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel2">
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
            <InfiniteScroll
              dataLength={contacts?.results?.length || 0}
            >
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
            </InfiniteScroll>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              Us Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
