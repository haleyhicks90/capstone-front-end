// =========================
// Dependencies
// =========================
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// =========================
// Components Import
// =========================
import Character from './components/Character'
import Create from './components/Create'


// =========================
// App component
// =========================
const App = () => {

// =========================
// State
// =========================
    let [characters, setCharacters] = useState([])

// =========================
// Event Handlers
// =========================

// Create
    const handleCreate = (addCharacter) => {
        console.log(addCharacter);
        axios
            .post('https://downtondb-back.herokuapp.com', addCharacter)
            .then((response) => {
                console.log(response)
                getCharacters()
            })
        console.log(addCharacter);
    }

// // Delete
//     const handleDelete = (event) => {
//         axios
//             .delete(`https://downtondb-back.herokuapp.com/${event.target.value}`)
//             .then((response) => {
//                 getCharacters()
//             })
//     }

// // Edit/Update
//     const handleUpdate = (editCharacter) => {
//         console.log(editCharacter)
//         axios
//             .put(`https://downtondb-back.herokuapp.com/${editCharacter.id}`, editCharacter)
//             .then((response) => {
//                 getCharacters()
//             })
//     }

// Read
    const getCharacters = () => {
        axios
            .get('https://downtondb-back.herokuapp.com')
            .then(
                (response) => setCharacters(response.data),
                (error) => console.log(error)
            )
            .catch((error) => console.log(error))
    }

// =========================
// Use Effect
// =========================
    useEffect(() => {
        getCharacters()
    }, [])

// =========================
// rendering to page
// =========================
    return (
        <>
            <Character />
        </>
    )
}
export default App;
