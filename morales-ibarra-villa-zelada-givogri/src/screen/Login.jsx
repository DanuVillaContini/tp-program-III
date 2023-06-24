import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <form
            onSubmit={ev => {
                ev.preventDefault();
                Login(email, password);
            }}
        >
            <input
                type='email'
                name='email'
                placeholder='Email'
                autoComplete='off'
                value={email}
                onChange={ev => setEmail(ev.target.value)}
            ></input>
            <input
                type='password'
                name='password'
                placeholder='Contraseña'
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            ></input>
            <button type='submit'>Iniciar Sesión</button>

        </form>
    )
}

export default Login