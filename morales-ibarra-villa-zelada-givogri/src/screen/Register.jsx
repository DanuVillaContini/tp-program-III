import { useEffect, useState } from 'react';
import ModalExito from '../Componentes/ModalExito';

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);

    useEffect(() => {
        if (registroExitoso) {
            setShowModal(true);
        }
    }, [registroExitoso]);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const Register = (email, password) => {
        // Guardar los datos en el localStorage
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('user', user);

        // Simular un registro exitoso
        setRegistroExitoso(true);
    };

    let mensaje;
    if (registroExitoso) {
        mensaje = `¡Bienvenido, ${user}! Tu registro ha sido exitoso.`;
    } else {
        mensaje = 'Hubo un problema en el registro. Inténtalo nuevamente.';
    }

    return (
        <>
            <form
                onSubmit={ev => {
                    ev.preventDefault();
                    Register(email, password);
                }}>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                    autoComplete='off'
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                ></input>
                <input
                    type='password'
                    name='password'
                    placeholder='Contraseña'
                    required
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                ></input>
                <input
                    type='text'
                    name='user'
                    placeholder='Usuario'
                    required
                    autoComplete='off'
                    value={user}
                    onChange={ev => setUser(ev.target.value)}
                ></input>
                <button type='submit'>Registrarse</button>
            </form>

            {showModal && (
                <ModalExito
                    resp={registroExitoso}
                    onClose={handleModalClose}
                    msg={mensaje}
                />
            )}
        </>
    )
}

export default Register