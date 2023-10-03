import React, { useState } from 'react';

function Form(){
    const [firstName, setFirstName] = useState('');
    const [lasstName, setlastName] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    }
}