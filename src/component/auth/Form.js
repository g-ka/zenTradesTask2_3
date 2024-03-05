import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Form = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const navigate = useNavigate();

  const EMAIL_REGEX = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@]).{8,24}$/;

  useEffect(() => {
    setIsEmailValid(EMAIL_REGEX.test(email));
    setIsPasswordValid(PWD_REGEX.test(password));
  }, [email, password]);

  const submit = (e) => {
    e.preventDefault();
    const inValid = "Invalid Email or Invalid Password(must contain atleast 1 uppercase, lowercase, @, digit and between 8 - 24 characters)";
    if(!isEmailValid || !isPasswordValid) window.alert(inValid);    
    else if(password != "ZenTradesTest@123") window.alert("Fields are valid but no response due to incorrect password!");
    else navigate('/dash');
  };  

  return (
    <form>
      <div className='input_prime'>
        <input       
          className='input_prime_email'
          placeholder='E-mail address'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          className='input_prime_password'
          placeholder='Password'
          type='password'
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>      
      <div className='input_remember'>
        <input 
          className='input_remember_box'
          type='checkbox'
        />
        <p className='input_remember_phrase'>Remember me</p>
      </div>      
      <button
        type='submit'
        onClick={e => submit(e)}
      >
        Sign In
      </button>
      <Link to='/email'>
        Forgot your password?
      </Link>
    </form>
  )
}

export default Form