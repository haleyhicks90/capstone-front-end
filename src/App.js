// ========================= Dependencies ========================= //
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';


// ========================= Components Import ========================= //
import Character from './components/Character'
import Create from './components/Create'
import Edit from './components/Edit'
import NavBar from './components/NavBar'


// ========================= App component ========================= //
const App = () => {

// ========================= State ========================= //
    let [characters, setCharacters] = useState([])

// ========================= Event Handlers ========================= //
// Create
    const handleCreate = (addCharacter) => {
        console.log(addCharacter);
        axios
            .post('https://downtondb-back.herokuapp.com/characters', addCharacter)
            .then((response) => {
                console.log(response)
                getCharacters()
            })
        console.log(addCharacter);
    }

// // Delete
//     const handleDelete = (event) => {
//         axios
//             .delete(`https://downtondb-back.herokuapp.com/characters/${event.target.value}`)
//             .then((response) => {
//                 getCharacters()
//             })
//     }

// // Edit/Update
//     const handleUpdate = (editCharacter) => {
//         console.log(editCharacter)
//         axios
//             .put(`https://downtondb-back.herokuapp.com/characters/${editCharacter.id}`, editCharacter)
//             .then((response) => {
//                 getCharacters()
//             })
//     }

// Read
    const getCharacters = () => {
        axios
            .get('https://downtondb-back.herokuapp.com/characters')
            .then(
                (response) => setCharacters(response.data),
                (error) => console.log(error)
            )
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        getCharacters()
    }, [])

    console.log(characters);
// ========================= rendering to page ========================= //
    return (
        <>
            <Create
                handleCreate={ handleCreate }
            />
            {characters.map(character => <Character character={ character } key={character._id}/>)}
            {characters.map((character) => {
                return (

                )
            })}
            <Edit />
        </>
    )
}
export default App;
