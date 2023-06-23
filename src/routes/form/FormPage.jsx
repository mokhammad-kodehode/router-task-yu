import  { useRef, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import style from './style.module.css';

export function FormPage() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const LnameRef = useRef(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailRef.current.value === '' || nameRef.current.value === '') {
      setError('Linn details');
      return;
    }

    setError('');

    navigate('/done');
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <h1>TESTDRIVE NOW</h1>
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
            ref={nameRef}
            placeholder='Name'
            type="name"
            required
          />
        </div>
        <div>
          <input
            ref={LnameRef}
            placeholder='Last name'
            type="name"
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}