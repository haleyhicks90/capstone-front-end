// ========================= Dependencies ========================= //
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

// ========================= Create componenet ========================= //
const Create = (props) => {

    let emptyCharacter =
        {
            first_name: '',
            last_name: '',
            née: '',
            dob: '',
            dod: '',
            title: '',
            num_of_eps: 1,
            quotes: [''],
            spouse_first_name: '',
            spouse_last_name: '',
            spouse_née: '',
            marriage_date: '',
            children: [''],
        }

// ========================= State ========================= //
    let [newCharacter, setNewCharacter] = useState(emptyCharacter)
// Create character modal state
    const [open, setOpen] = useState(false)

// ========================= Event Handlers ========================= //
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    const handleChange = (event) => {
        setNewCharacter({ ...newCharacter, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(newCharacter)
        event.target.reset()
        setNewCharacter(emptyCharacter) //resets create form field
        handleClose()
    }

// ========================= Rendering ========================= //
    return (
        <>
            <Button className='btn' variant='success' onClick={ handleOpen }>
                Add Character
            </Button>
            <Modal open={ open } onHide={ handleClose } centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add a Character
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={ handleSubmit }>

                        <FloatingLabel label="Character's Name" className='mb-3'>
                            <Form.Control type='text' name='first_name' onChange={ handleChange } />
                            <Form.Control type='text' name='last_name' onChange={ handleChange } />
                            <Form.Control type='text' name='née' onChange={ handleChange } />
                        </FloatingLabel>

                        <FloatingLabel label='Birth and Death' className='mb-3'>
                            <Form.Control type='text' name='dob' onChange={ handleChange } />
                            <Form.Control type='text' name='dod' onChange={ handleChange } />
                        </FloatingLabel>

                        <FloatingLabel label='Official Title/Position' className='mb-3'>
                            <Form.Control type='text' name='title' onChange={ handleChange } />
                        </FloatingLabel>

                        <FloatingLabel label='Number of Episode Appearances' className='mb-3'>
                            <Form.Control type='number' name='num_of_eps' onChange={ handleChange } />
                        </FloatingLabel>

                        <FloatingLabel label='Quotes' className='mb-3'>
                            <Form.Control type='text' name='quotes[]' onChange={ handleChange } />
                        </FloatingLabel>

                        <FloatingLabel label="Spouse's Name" className='mb-3'>
                            <Form.Control type='text' name='spouse_first_name' onChange={ handleChange } />
                            <Form.Control type='text' name='spouse_last_name' onChange={ handleChange } />
                            <Form.Control type='text' name='spouse_née' onChange={ handleChange } />
                        </FloatingLabel>

                        <FloatingLabel label='Marriage Date' className='mb-3'>
                            <Form.Control type='text' name='marriage_date' onChange={ handleChange } />
                        </FloatingLabel>

                        <FloatingLabel label='Children' className='mb-3'>
                            <Form.Control type='text' name='children[]' onChange={ handleChange } />
                        </FloatingLabel>

                        <input class='create-submit-btn btn' variant='success' type='submit' />

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )

}

export default Create
