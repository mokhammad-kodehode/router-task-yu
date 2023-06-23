import  { useRef, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import style from './login.module.css';

export function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailRef.current.value === '' || passwordRef.current.value === '') {
      setError('Linn details');
      return;
    }

    setError('');

    navigate('/cars');
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <div>
          <input
            ref={emailRef}
            placeholder='Email'
            type="email"
            required
          />
        </div>
        <div>
          <input
            ref={passwordRef}
            placeholder='Password'
            type="password"
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}