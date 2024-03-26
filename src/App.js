import { useState, useMemo } from 'react'
import React, { useRef } from "react"
import Select from 'react-select'
import emailjs from "@emailjs/browser";
import countryList from 'react-select-country-list';
import { PhoneInput } from 'react-international-phone';
import './App.css';
import reactSelect from 'react-select';
import Swal from 'sweetalert2';

function App() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), []);
  const [phone, setPhone] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a49axup', 'template_sjsqio6', form.current, {
        publicKey: 'xHaXu-6-AI0j_QUfE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  // const [clear, setClear] = useState({
  //   name: ""
  // });

  // function handleForm() {
  //   setClear(clear)
  // }

  const changeHandler = value => {
    setValue(value)
  }
    function handleClick() {Swal.fire({
      position: "center",
      icon: "success",
      title: "Booked",
      showConfirmButton: false,
      timer: 1500
    });
    
    }
  
  return (
    <div className='flex item-center justify-center min-h-screen bg-gray-100'>
      <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
        <div className='flex flex-col justify-center p-8 md:p-14'>
          <span className='mb-3 text-4xl font-bold'>Celeb Encounter</span>
          <span className='font-light text-gray-400 mb-8 text-center'>Please fill the form</span>
          <div className='py-4'>
            <form ref={form} onSubmit={sendEmail}>
            <input placeholder='Name'  type='text' name='name'/>
            <input placeholder='Email' type='email' name='email'/>
            <input placeholder='State your meeting point' type='text' name='meeting'/>
            <input placeholder='Favorite celebrity' type='text' name='celebrity'/>
            {/* <PhoneInput
              // defaultCountry="ua"
              value={phone}
              name='number'
              onChange={(phone) => setPhone(phone)}
            /> */}
            <input placeholder='Phone number' name='number'/>
            <Select name='country' options={options} value={value} onChange={changeHandler} />
            <textarea name='message'  />
            <button onSubmit={handleClick} className='cursor-pointer text-white bg-violet-500 flex gap-4 justify-center hover:bg-violet-600'>Book</button>
            </form>
          </div>
      </div>
      </div>
     
      
    </div>
  );
}

export default App;
