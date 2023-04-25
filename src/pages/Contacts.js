import React from 'react'
import { NavLink } from 'react-router-dom'

// import { ImWhatsapp } from "react-icons/im";
import { BsSend } from "react-icons/bs";
import "../styles/Contacts.css"

import ContactsData from '../components/ContactsData'

function Contacts() {

  const ContactsDataList = ContactsData.map( listItems =>
    <>
        <div key={listItems.id} className='contact-card'>
          <span>  {listItems.logo} </span>
          <p> {listItems.title} </p>
          <p> {listItems.address} </p>
          <NavLink to={listItems.url} className= "send-hi"> {listItems.sendTitle}  &nbsp; <span> <BsSend /> </span></NavLink>
        </div>
    </>
    )

  return (
    <>
      <h2 id='touch-contact'> Get in touch </h2>
      <p className='contacts-sub-heading'> You can contact me anytime </p>

      <div className='contacts-container'>
        {ContactsDataList}
      </div>
      {/* <h2> Get in touch </h2>
      <p className='contacts-sub-heading'> You can contact me anytime </p>

      <div className='contacts-container'>

        <div className='contact-card'>
          <span>  <ImWhatsapp /> </span>
          <p> Email </p>
          <p> mr.sam.shinde@gmail.com </p>
          <NavLink to="https://wa.me/919699828358" className= "send-hi"> Send post  &nbsp; <span> <BsSend /> </span></NavLink>
        </div>

      </div> */}
    </>
  )
}

export default Contacts;