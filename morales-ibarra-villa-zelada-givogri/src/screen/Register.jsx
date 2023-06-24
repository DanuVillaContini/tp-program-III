import { useEffect, useState } from 'react';
import ModalExito from '../Componentes/ModalExito';

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [datosUserArray, setDatosUserArray] =useState([]);

    useEffect(() => {
        if (registroExitoso) {
            setShowModal(true);
        }
    }, [registroExitoso]);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleRegister = (email, password, user) => {
        const datosUser = {email,password, user}

        //Pregunto si ya existe un localStorage para recien guardar el nuevo user
        const existeLocal = localStorage.getItem('datosUserArray');

        if (existeLocal) {
            //verifico si existe el array en el localStorage, lo recupero y lo actualizo
            const datosParseados = JSON.parse(existeLocal)

            //verifico si existe tambien el nuevo user que se quiere registrar
            const userExists = datosParseados.some(item => item.user === user);
            if (userExists) {
                // El usuario ya existe, mostrar mensaje de error
                setRegistroExitoso(false);
                setShowModal(true);
                return;
            }

            //Actualizar el nuevo usuario al array
            const actualizarNewRegister = [...datosParseados, datosUser]
            // Guardar los datos actualizados en el localStorage
            localStorage.setItem('datosUserArray', JSON.stringify(actualizarNewRegister));


        } else{
            // Si no existe el array en el localStorage, creamos uno nuevo
            const newData = [datosUser];
            // Guardar los nuevos datos en el localStorage
            localStorage.setItem('datosUserArray', JSON.stringify(newData));
        }

        // Simular un registro exitoso
        setRegistroExitoso(true);
    };

    let mensaje;
    if (registroExitoso) {
        mensaje = `¡Bienvenido, ${user}! Tu registro ha sido exitoso.`;
    } else {
        mensaje = 'Hubo un problema en el registro o el Nuevo User ya existe. Inténtalo nuevamente.';
    }

    return (
        <>
            <form
                onSubmit={ev => {
                    ev.preventDefault();
                    handleRegister(email, password, user);
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