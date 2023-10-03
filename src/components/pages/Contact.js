import React, { useState } from 'react';
import './Apps.css';
//import { checkPassword, validateEmail } from '../../utils/helpers';

function Form(){
    const [firstName, setFirstName] = useState('');
    const [lasstName, setlastName] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    }
}