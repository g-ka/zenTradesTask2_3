import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Email = () => {

  const form = useRef();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const EMAIL_REGEX = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;

  useEffect(() => {
    setIsEmailValid(EMAIL_REGEX.test(email));
  }, [email]);

  const sendEmail = (e) => {
    e.preventDefault();

    if(!isEmailValid){
      window.alert("Invalid email");
      return;
    }

    emailjs
      .sendForm('service_b7gqp43', 'template_95ktaub', form.current, {
        publicKey: 'm2qlABllOuw2NPYa0',
      })
      .then(
      () => {
        window.alert("Submitted Successfully");
        navigate('/');
      },
      (error) => {
        window.alert('FAILED...', error.text);
      },
    );
  };

  return (
    <main className='email_main'>
      <form 
        onSubmit={sendEmail}
        ref={form}
      >
        <h1>QUERY FORM</h1>
        <input       
          name='from_email' 
          className='input_email'
          placeholder='E-mail address'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea 
          name="message" 
          className="input_message" 
          placeholder="Mention your problem here" 
          rows="8" 
          required 
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          type='submit'
        >
          Submit
        </button>
        <button
          className='back_button'
          onClick={() => navigate('/')}
        >
          Back
        </button>
      </form>
    </main>
  )
}

export default Email