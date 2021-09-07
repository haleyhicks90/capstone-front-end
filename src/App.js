// ========================= Dependencies ========================= //
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';


// ========================= Components Import ========================= //
// import Character from './components/Character'
// import Create from './components/Create'
// import Edit from './components/Edit'

// ========================= App component ========================= //
const App = () => {

// ========================= State ========================= //
    const [newImage, setNewImage] = useState('')
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newNée, setNewNée] = useState('')
    const [newDob, setNewDob] = useState('')
    const [newDod, setNewDod] = useState('')
    const [newTitle, setNewTitle] = useState('')
    const [newNumOfEps, setNewNumOfEps] = useState(0)
    const [newQuotes, setNewQuotes] = useState([])
    const [newSpouseFirstName, setNewSpouseFirstName] = useState('')
    const [newSpouseLastName, setNewSpouseLastName] = useState('')
    const [newSpouseNée, setNewSpouseNée] = useState('')
    const [newMarriageDate, setNewMarriageDate] = useState('')
    const [newChildren, setNewChildren] = useState([])
    const [newCharacters, setNewCharacters] = useState([])

// ========================= UseEffect ========================= //
    useEffect(() => {
        axios
            .get('https://downtondb-back.herokuapp.com/characters')
            .then((response) => {
                setNewCharacters(response.data)
            })
    })


// ========================= Event Handlers ========================= //
// New Image
    const handleNewImage = (event) => {
    setNewImage(event.target.value)
    }
// New First Name
    const handleNewFirstName = (event) => {
    setNewFirstName(event.target.value)
    }
// New Last Name
    const handleNewLastName = (event) => {
    setNewLastName(event.target.value)
    }
// New Née
    const handleNewNée = (event) => {
    setNewNée(event.target.value)
    }
// New Dob
    const handleNewDob = (event) => {
    setNewDob(event.target.value)
    }
// New Dod
    const handleNewDod = (event) => {
    setNewDod(event.target.value)
    }
// New Title
    const handleNewTitle = (event) => {
    setNewTitle(event.target.value)
    }
// New Num of Eps
    const handleNewNumOfEps = (event) => {
    setNewNumOfEps(event.target.value)
    }
// New Quotes
    const handleNewQuotes = (event) => {
    setNewQuotes(event.target.value)
    }
// New Spouse First Name
    const handleNewSpouseFirstName = (event) => {
    setNewSpouseFirstName(event.target.value)
    }
// New Spouse Last Name
    const handleNewSpouseLastName = (event) => {
    setNewSpouseLastName(event.target.value)
    }
//New Spouse Née
    const handleNewSpouseNée = (event) => {
    setNewSpouseNée(event.target.value)
    }
// New Marriage Date
    const handleNewMarriageDate = (event) => {
    setNewMarriageDate(event.target.value)
    }
// New Children
    const handleNewChildren = (event) => {
    setNewChildren(event.target.value)
    }
// Submit New Character Form
    const handleNewCharactersSubmit = (event) => {
        event.preventDefault()
        axios.post(
            'https://downtondb-back.herokuapp.com/characters',
            {
                image: newImage,
                first_name: newFirstName,
                last_name: newLastName,
                née: newNée,
                dob: newDob,
                dod: newDod,
                title: newTitle,
                num_of_eps: newNumOfEps,
                quotes: [newQuotes],
                spouse_first_name: newSpouseFirstName,
                spouse_last_name: newSpouseLastName,
                spouse_née: newSpouseNée,
                marriage_date: newMarriageDate,
                children: [newChildren]
            }
        )
        .then(() => {
            axios
                .get('https://downtondb-back.herokuapp.com/characters')
                .then((response) => {
                    setNewCharacters(response.data)
                })
        })
        event.currentTarget.reset()
    }

// Delete
    const handleDelete = (characterData) => {
        axios
            .delete(`https://downtondb-back.herokuapp.com/characters/${characterData._id}`)
            .then(() => {
                axios
                    .get('https://downtondb-back.herokuapp.com/characters')
                    .then((response) => {
                        setNewCharacters(response.data)
                    })
            })
    }

// Edit/Update
    const handleEdit = (event, characterData) => {
        event.preventDefault()
        axios
            .put(`https://downtondb-back.herokuapp.com/characters/${characterData._id}`,
                {
                    image: newImage || characterData.image,
                    first_name: newFirstName || characterData.first_name,
                    last_name: newLastName || characterData.last_name,
                    née: newNée || characterData.née,
                    dob: newDob || characterData.dob,
                    dod: newDod || characterData.dod,
                    title: newTitle || characterData.title,
                    num_of_eps: newNumOfEps || characterData.num_of_eps,
                    quotes: [newQuotes] || characterData.quotes,
                    spouse_first_name: newSpouseFirstName || characterData.spouse_first_name,
                    spouse_last_name: newSpouseLastName || characterData.spouse_last_name,
                    spouse_née: newSpouseNée || characterData.spouse_née,
                    marriage_date: newMarriageDate || characterData.marriage_date,
                    children: [newChildren] || characterData.children
                }
            )
            .then(() => {
                axios
                    .get('https://downtondb-back.herokuapp.com/characters')
                    .then((response) => {
                        setNewCharacters(response.data)
                    })
            })
        event.currentTarget.reset()
    }

// ========================= rendering to page ========================= //
    return (
        <main>
            <section>
                <>
                    {newCharacters.map((character) => {
                        return <>
                            <div class='block columns is-flex-direction-row is-justify-content-space-around is-flex-wrap-wrap'>
                                <div class='card is-one-third-desktop column is-3 has-text-centered m-3 is-justify-content-space-around'>
                                    <div class='card-image'>
                                        <figure class='image is-500x500'>
                                            <image src={ character.image } />
                                        </figure>
                                    </div>
                                    <div class='card-content'>
                                        <div class='title has-text-weight-bold'>
                                            { character.first_name } { character.last_name }<br />
                                            <p class='is-size-6'>née: { character.née }</p>
                                        </div>
                                        <div class='content'>
                                            <p>Official title/position: { character.title }</p>
                                            <p>Date of birth: { character.dob }</p>
                                            <p>Date of death: { character.dod }</p>
                                            <p>Number of Episodes: { character.num_of_eps }</p>
                                            <p>Quotes:
                                                <li>{ character.quotes[0] }</li>
                                                <li>{ character.quotes[1] }</li>
                                                <li>{ character.quotes[2] }</li>
                                            </p>
                                            <br />
                                            <p>Spouse: { character.spouse_first_name } { character.spouse_last_name }</p>
                                            <p>née: { character.spouse_née }</p>
                                            <p>Marriage Date: { character.marriage_date }</p>
                                            <p>Children:
                                                <li>{ character.children[0] }</li>
                                                <li>{ character.children[1] }</li>
                                                <li>{ character.children[2] }</li>
                                            </p>
                                        </div>
                                        <footer class='card-footer'>
                                            <details>
                                                <summary>
                                                    <strong>Edit This Character</strong>
                                                </summary>

                                            </details>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </>
            </section>
        </main>
    )
}
export default App;
