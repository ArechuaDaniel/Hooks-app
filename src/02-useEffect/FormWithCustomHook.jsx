
import useForm from '../hooks/useForm';


const FormWithCustomHook = () => {
    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: '',
    })
    
   

    
  return (
    <>
        <h1>Formulario con custom Hook</h1>
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
        <input 
            type="password" 
            className='form-control mt-2'
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={onInputChange}
        />

        <button
            onClick={onResetForm}
            className='btn btn-primary mt-2'
        >Borrar</button>
        
    </>
  )
}

export default FormWithCustomHook