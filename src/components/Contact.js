import React from 'react';

class Contact extends React.Component {
  handleSubmit = (e) => {
    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;

    if (email.length === 0 || text.length === 0) {
      e.preventDefault();
      document.getElementById('error').innerHTML = "Make sure to enter an email and a message.";
    }
  } 
  render() {
    return(
      <div className="contact-wrapper">
        <section className="contact">
          <h1>Contact</h1>
          <form onSubmit={this.handleSubmit} action="https://formspree.io/isak.m.h.s@gmail.com" method="POST">
            <label>Email</label>
            <input id="email" type="email" name="_replyto" placeholder="your@email.com" />

            <label>Message</label>
            <textarea id="text" type="text" name="message" placeholder="Hi..."></textarea>
            
            <input type="submit" value="Send" />
          </form> 
          <p id="error"></p>
          <br />
          <br />
        </section>
      </div>
    );
  }
}

export default Contact;