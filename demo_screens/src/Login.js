import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [numTravelers, setNumTravelers] = useState('');
  const history = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const data={
      name: name,
      email: email,
      country: country,
      numTravelers: parseInt(numTravelers)
    };
    console.log('data is ', data);
    fetch('http://localhost:8080/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
  setTimeout(()=>{
    history('/data')
    // fetch('http://localhost:8080/api/data')
    //   .then(response => response.json())
    //   .then(data => {
    //     history('/data')
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    
  },500)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

      <label htmlFor="country">Country:</label>
      <select id="country" value={country} onChange={(event) => setCountry(event.target.value)}>
        <option value="">-- Select a country --</option>
        <option value="India">India</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="China">China</option>
        <option value="South Korea">South Korea</option>
      </select>

      <label htmlFor="numTravelers">Number of travelers:</label>
      <select id="numTravelers" value={numTravelers} onChange={(event) => setNumTravelers(event.target.value)}>
        <option value="">-- Select a no. of travellers --</option>
        <option value="1">1- $1500</option>
        <option value="2">2 - $3000</option>
        <option value="3">3 - $4500</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;