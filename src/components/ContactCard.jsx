import React from "react";

export default function ContactCard({ contact }) {
  const { id, phone, country } = contact;
  return (
    <tr style={{cursor: "pointer"}} data-bs-toggle="modal"
    href="#exampleModalToggle3" data-bs-dismiss="modal"
    aria-label="Close">
      <th scope="row">{id}</th>
      <td>{phone}</td>
      <td>{country?.name}</td>
    </tr>
  );
}
