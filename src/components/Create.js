// =========================
// Dependencies
// =========================
import React, { useState } from 'react'

// =========================
// Create componenet
// =========================
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

// =============================
// State
// =============================
    let [individualCharacter, setIndividualCharacter] = useState(emptyCharacter)
// Create character modal state
    const [character, setCharacter] = useState(false)

// =============================
// Event Handlers
// =============================
    const handleClose = () => setCharacter(false)
    const handleOpen = () => setCharacter(true)

    const handleChange = (event) => {
        setCharacter({ ...character, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(character)
        event.target.reset()
        setIndividualCharacter(emptyCharacter)
        handleClose()
    }

// =============================
// Rendering
// =============================
    // return (
    //     <>
    //         <button type='button' onClick={ handleOpen }>
    //             Add a Character
    //         </button>
    //         <Modal
    //             open={ open }
    //             handleClose={ handleClose }
    //             aria-labelledby='simple-modal-title'
    //             aria-describedby='simple-modal-description'
    //         >
    //     </>
    // )

}

export default Create