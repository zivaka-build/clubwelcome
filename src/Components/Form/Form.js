import React, { useState } from 'react'
import './Form.scss';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useStyles } from '../../utils/ModalStyles';

const Form = () => {

    const [modal, setModal] = useState(false);
    const classes = useStyles()

    return (
        <div className='container-fluid form'>
            <button onClick={() => setModal(true)}>
                Book an Appointment
            </button>
            <div></div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modal}
                onClose={() => setModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal}>
                    <div className={classes.paper}>
                        <form
                            //  onSubmit={(e) => handleAddOtherCharges(e)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                // alignItems: 'center',
                                // border: '2px solid red'
                            }}>

                            <label>Name<em style={{ color: 'red' }}>*</em></label>
                            <input
                                className='form-control'
                                type='text' />

                            <label>Email<em style={{ color: 'red' }}>*</em></label>
                            <input
                                className='form-control'
                                type='email' />

                            <label>Message<em style={{ color: 'red' }}>*</em></label>
                            <textarea
                                className='form-control'
                                type='text'/>

                            <div className='btns'>
                                <button>Submit</button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setModal(false)
                                    }}>Back</button>
                            </div>

                        </form>
                    </div>
                </Fade >
            </Modal >
        </div >
    )
}

export default Form