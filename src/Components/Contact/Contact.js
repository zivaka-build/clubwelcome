import React from 'react'
import Leaf from '../../assets/images/leaf.png';
import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './Contact.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Form from 'react-bootstrap/Form'
import Swal from 'sweetalert2';
import axios from 'axios';

const Contact = () => {

    const [form, setForm] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [category, setCategory] = useState('')
    const [phoneError , setPhoneError] = useState('')

    const handleForm = (e) => {
        e.preventDefault();
        
        axios.post('https://nxourizw97.execute-api.us-west-2.amazonaws.com/staging/emailSender',
            {
                name: name,
                email: email,
                phone: phone,
                message: message,
                category: category
            })
            .then((res) => {
                //console.log(res)
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.data.message,
                    showClass: {
                        popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                    }
                }).then(function () {
                    setForm(false)
                    setName('')
                    setPhone('')
                    setEmail('')
                    setMessage('')
                    setCategory('')
                })
            })
            .catch((err) => {
                //console.log(err)
                setForm(false)
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    showClass: {
                        popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                    },
                    text: 'Could not send enquiry.'
                })
            })
    }

    const reset = () => {
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
        setCategory('')
    }

    return (
        <section className='contact' id='contact'>

            <div className='heading'>
                <h1>Contact</h1>
                <img src={Leaf} alt=" a design" />
            </div>

            <div className='content'>

                <a href="https://goo.gl/maps/UvB47UBAunCGqgkZ8" target="_blank">
                    <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/gmap.png" alt="" />
                </a>

                <div className='info'>
                    <p>Rupali Arcade, NS Road,Chinsurah,</p>
                    <p>Hoogly-712101</p>

                    <div className='info-child'>

                        <div className='icons'>

                            <div>
                                <a href="mailto:clubwelcomechinsurah@gmail.com"><FiMail className='icon' /></a>
                                <a href="mailto:clubwelcomechinsurah@gmail.com">
                                    clubwelcomechinsurah@gmail.com
                                </a>
                            </div>

                            <div>
                                <a href="tel:+9163308035"><BsFillTelephoneFill className='icon' /></a>
                                <a href="tel:+9163308035">
                                    9163308035
                                </a>
                                <a href="tel:+8697263835">
                                    / 8697263835
                                </a>
                            </div>

                        </div>

                        <div className='button'>
                            <Link to='form' offset={20}>
                                <button onClick={() => {
                                    setForm(true)
                                }}>
                                    Enquire Now
                                </button>
                            </Link>

                        </div>

                        {/* <button>Enquire now</button> */}
                    </div>

                </div>

            </div>

            {
                form
                &&

                <form
                    id='form'
                    onSubmit={(e) => handleForm(e)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        // border: '2px solid red'
                    }}>

                    <h1>Enquiry Form</h1>
                    <br />

                    <div className="row justify-content-center">
                        <div className="col-6">
                            <Form.Group controlId="payment mode">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select"
                                    value={category}
                                    required
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value='null'>Select a Category</option>
                                    <option value='Crystal Hall'>Crystal Hall</option>
                                    <option value='Olympia'>Olympia</option>
                                    <option value='King Crown'>King Crown</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                    </div>

                    <label>Name<em style={{ color: 'red' }}>*</em></label>
                    <input
                        className='form-control'
                        type='text'
                        required
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Email</label>
                    <input
                        className='form-control'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Phone No.<em style={{ color: 'red' }}>*</em></label>
                    <input
                        className='form-control'
                        type='text'
                        required
                        onChange={(e) => {
                           
                            if(!/[0-9]/.test(e.target.value) && e.target.value != ''){
                                setPhoneError('Please enter a valid 10 digit message')
                            }else{
                                setPhoneError('')
                            }
                            setPhone(e.target.value)
                        }}
                    />
                    {phoneError && <em style={{color : '#8E0084' , marginLeft : '10px', marginBottom : '10px'}}>{phoneError}</em>}

                    <label>Message<em style={{ color: 'red' }}>*</em></label>
                    <textarea
                        className='form-control'
                        type='text'
                        required
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <div className='btns'>
                        <button>Submit</button>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setForm(false)
                                reset()
                            }}>Close</button>
                    </div>

                </form>

            }

        </section>
    )
}

export default Contact