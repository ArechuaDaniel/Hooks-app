import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'daniel',
        email: 'daniel@google.com'
    })
    const { username, email } = formState;
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name] : value
        })
    }

    
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            className='form-control mt-2'
            placeholder='username@email.com'
            name='email'
            value={email}
            onChange={onInputChange}
        />
        {
            (username === 'daniel') && <Message/>
        }
    </>
  )
}

export default SimpleForm