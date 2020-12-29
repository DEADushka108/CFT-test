import React, {Fragment} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const ContactScreen = () => {

  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Contact us</h1>
      <section className="contact-us feedback">
        <form className="feedback__form" action="#" method="GET">
          <fieldset className="feedback__item user-info">
            <legend className="visually-hidden">Introduce yourself an write us some word</legend>
            <p className="user-info__item">
              <label className="user-info__label" htmlFor="user-name">Full name</label>
              <input className="user-info__input" id="user-name" type="text" name="full-name" placeholder="Your Name" required/>
            </p>
            <p className="user-info__item">
              <label className="user-info__label" htmlFor="user-email">Email</label>
              <input className="user-info__input" id="user-email" type="email" name="email" placeholder="Your Email" required />
            </p>
            <p className="user-info__item">
              <label className="user-info__label" htmlFor="comment-field">Message</label>
              <textarea className="user-info__input" name="comment" id="comment-field" rows="5" placeholder="Your Message"></textarea>
            </p>
          </fieldset>
          <button className="feedback__button" type="submit">Submit</button>
        </form>
      </section>
    </main>
    <Footer/>

  </Fragment>;
};

export default ContactScreen;
