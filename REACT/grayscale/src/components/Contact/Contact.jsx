import React from 'react';
import "./Contact.css";
function Contact() {
  return (
    <div className='Contact'>
      <h1>Contact</h1>
      <div className="Contact__wrapper">
        <form action="#">
          <div className="form__info">
            <div className="name">
              <label htmlFor="formname">First Name</label>
              <input id='formname' type="text" />
            </div>
            <div className="surname">
              <label htmlFor="formsurname">Last Name</label>
              <input id="formsurname" type="text" />
            </div>
          </div>
          <div className="form__email">
            <label htmlFor="formemail">Email</label>
            <input id='formemail' type="email" />
          </div>
          <div className="form__subject">
            <label htmlFor="">Subject</label>
            <input type="text" />
          </div>
          <div className="form__textarea">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
        <div className="Contact__info">
          <div className="address">
            <h3>Address</h3>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="address__info">
            <h3>Phone</h3>
            <span>+1 232 3235 324</span>
          </div>
          <div className="address__info">
            <h3>Email</h3>
            <span>youremail@domain.com</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact