import React, { useState } from 'react';
import Button from '../../components/Button/Button.components';
import Input from '../../components/Input/Input.component';
import './Contact.scss';
import { FaHeart } from 'react-icons/fa';
import Textarea from '../../components/Textarea/Textarea.component';

const Contact = () => {
  const defaultformFields = {
    email: '',
    message: '',
  };

  const [formFields, setFormFields] = useState(defaultformFields);
  const [isAppear, setIsAppear] = useState(false);
  const { email, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://modelin.webmcdm.dk/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    });

    resetFormFields();
    setIsAppear(true);
    setTimeout(() => {
      setIsAppear(false);
    }, 5000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <main>
      <section className='row section'>
        <div className='container contact-container'>
          <h2>Contact</h2>
          <p>Email me to order a design or decoration project, supervision, or ask general questions: Contact form for details on the stages and general design project progress, timing, and budget.</p>
          <form onSubmit={handleSubmit}>
            <span className={`response ${isAppear ? 'show' : ''}`}>
              <FaHeart />
              <p>Thank you, I will respond asap.</p>
            </span>
            <Input labelName='email' type='email' required name='email' value={email} onChange={handleChange} />
            <Textarea labelName='message' type='text' required name='message' value={message} onChange={handleChange} />
            <Button type='submit'>Send Message</Button>
          </form>
        </div>
      </section>
      <section className='row section'>
        <div className='container section-container'>
          <h2>Need more Details</h2>
          <a href='mailto:info@idp.com'>info@idp.com</a>
          <p>Contact me for details on creating and managing design projects, project features, services and prices</p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
