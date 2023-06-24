import { Button, Modal } from "react-bootstrap"

function ModalExito({ resp, msg, onClose }) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Registro Exitoso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{resp ? msg : msg}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default ModalExito