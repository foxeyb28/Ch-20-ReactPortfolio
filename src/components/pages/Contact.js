import React, { useState } from 'react';
import './Apps.css';
//import { checkPassword, validateEmail } from '../../utils/helpers';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'Name') {
            setName(inputValue);
          } else {
            setMessage(inputValue);
          }
        };
        const handleFormSubmit = (e) => {
            e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    };
}