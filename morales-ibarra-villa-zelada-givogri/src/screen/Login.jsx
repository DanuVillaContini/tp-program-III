import { useState } from 'react';
import ModalExito from '../Componentes/ModalExito';
import { useNavigate } from 'react-router-dom';

function Login() {

    // const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [loginExitoso, setLoginExitoso] = useState(false);

    const navigate = useNavigate();


    const handleLogin = (user, password) => {
        //obtengo datos del local
        const datosUserArray = JSON.parse(localStorage.getItem('datosUserArray'));

        // Buscar el usuario en el array
        const usuario = datosUserArray.find(
            datosUser => datosUser.user === user && datosUser.password === password
        );

        //comparo datos con los del local
        if (usuario) {
            // Datos de inicio de sesión válidos
            setLoginExitoso(true);
            setShowModal(true);
            navigate('/');
        } else {
            // Datos de inicio de sesión inválidos
            setLoginExitoso(false);
            setShowModal(true);
        }
    }

    const handleModalClose = () => {
        setShowModal(false);
    }


    let mensaje;
    if (loginExitoso) {
        mensaje = `Bienvenido,  ${user}!!`;
    } else {
        mensaje = 'Usuario y/o Contraseña incorrecto. Intente de nuevo'
    }
    return (
        <>
            <form
                onSubmit={ev => {
                    ev.preventDefault();
                    handleLogin(user, password);
                }}
            >
                <input
                    type='user'
                    name='user'
                    placeholder='User'
                    autoComplete='off'
                    value={user}
                    onChange={ev => setUser(ev.target.value)}
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

            {showModal && (
                <ModalExito
                    msg={mensaje}
                    onClose={handleModalClose}
                />
            )}
        </>
    )
}

export default Login