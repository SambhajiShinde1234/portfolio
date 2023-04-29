import React from "react";
import { NavLink } from "react-router-dom";

// import { ImWhatsapp } from "react-icons/im";
import { BsSend } from "react-icons/bs";
import "../styles/Contacts.css";

import ContactsData from "../components/ContactsData";

function Contacts() {
  const ContactsDataList = ContactsData.map((listItems) => (
    <>
      <div key={listItems.id} className="contact-card">
        <span> {listItems.logo} </span>
        <p className="para"> {listItems.title} </p>
        <p className="para"> {listItems.address} </p>
        <NavLink to={listItems.url} className="send-hi para">
          {listItems.sendTitle} &nbsp;
          <span>
            <BsSend />
          </span>
        </NavLink>
      </div>
    </>
  ));

  return (
    <>
      <h2 id="touch-contact"> Get in touch </h2>
      <p className="contacts-sub-heading"> You can contact me on</p>

      <div className="contacts-container">{ContactsDataList}</div>
    </>
  );
}

export default Contacts;
