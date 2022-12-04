import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './modalDialog.css'

function ModalSignIn() {
  //  const [show, setShow] = useState(false);

//    const handleClose = () => setShow(false);
  //  this.handleShow = () => setShow(true);
    return (
        <div className="modalContainer">
            <div id='signin' className="modal">
                <div id='content'>
                    <h1> SIGN IN </h1>
                    <form>
                        <input placeholder="mail.."/>
                        <input placeholder="password.."/>
                    </form>
                </div>

            </div>
        </div>
    );
}
//  <Modal show={show} onHide={handleClose}>
export default ModalSignIn

//render(<ModalD />);