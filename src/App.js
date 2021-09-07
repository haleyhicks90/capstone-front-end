// ========================= Dependencies ========================= //
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';


// ========================= Components Import ========================= //
// import Character from './components/Character'
// import Create from './components/Create'
// import Edit from './components/Edit'
import Footer from './components/Footer'

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
    const [newQuote, setNewQuote] = useState('')
    const [newSpouseFirstName, setNewSpouseFirstName] = useState('')
    const [newSpouseLastName, setNewSpouseLastName] = useState('')
    const [newSpouseNée, setNewSpouseNée] = useState('')
    const [newMarriageDate, setNewMarriageDate] = useState('')
    const [newChildren, setNewChildren] = useState('')
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
// New img
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
// New Quote
    const handleNewQuote = (event) => {
    setNewQuote(event.target.value)
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
                img: newImage,
                first_name: newFirstName,
                last_name: newLastName,
                née: newNée,
                dob: newDob,
                dod: newDod,
                title: newTitle,
                num_of_eps: newNumOfEps,
                quote: newQuote,
                spouse_first_name: newSpouseFirstName,
                spouse_last_name: newSpouseLastName,
                spouse_née: newSpouseNée,
                marriage_date: newMarriageDate,
                children: newChildren,
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
                    img: newImage || characterData.img,
                    first_name: newFirstName || characterData.first_name,
                    last_name: newLastName || characterData.last_name,
                    née: newNée || characterData.née,
                    dob: newDob || characterData.dob,
                    dod: newDod || characterData.dod,
                    title: newTitle || characterData.title,
                    num_of_eps: newNumOfEps || characterData.num_of_eps,
                    quote: newQuote || characterData.quote,
                    spouse_first_name: newSpouseFirstName || characterData.spouse_first_name,
                    spouse_last_name: newSpouseLastName || characterData.spouse_last_name,
                    spouse_née: newSpouseNée || characterData.spouse_née,
                    marriage_date: newMarriageDate || characterData.marriage_date,
                    children: newChildren || characterData.children
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
            <img id='logo' src='/images/DowntonDB-Logo.png' alt=''/>
            <section>
                    <details id='create-details'>
                        <summary>
                            <h4>Add a Character</h4>
                        </summary>
                        <form id='create form' onSubmit={ handleNewCharactersSubmit }>
                            <div className='field'>
                                <label className='label'>img</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewImage } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>First Name</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewFirstName } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Last Name</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewLastName } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Née</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewNée } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Date of Birth</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewDob } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Date of Death</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewDod } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Official Title/Position</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewTitle } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Number of Episode Appearances</label>
                                <div className='control'>
                                    <input className='input' type='number' onChange={ handleNewNumOfEps } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Quotes</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewQuote } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Spouse's First Name</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewSpouseFirstName } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Spouse's Last Name</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewSpouseLastName } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Spouse's Née</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewSpouseNée } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Marriage Date</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewMarriageDate } />
                                </div>
                            </div>

                            <div className='field'>
                                <label className='label'>Children</label>
                                <div className='control'>
                                    <input className='input' type='text' onChange={ handleNewChildren } />
                                </div>
                            </div>

                            <div className='control'>
                                <button className='button is-link' type='submit'>Add Character</button>
                            </div>
                        </form>
                    </details>
            </section>

            <section>
                <>
                    {newCharacters.map((character) => {
                        return <>
                            <div id='card-container' className='block columns is-flex-direction-row is-justify-content-space-around is-flex-wrap-wrap'>
                                <div id='individual-cards' className='card is-one-third-desktop column is-3 has-text-centered m-3 is-justify-content-space-around'>
                                    <div className='card-img'>
                                        <figure className='img is-500x500'>
                                            <img src={ character.img } alt=''/>
                                        </figure>
                                    </div>
                                    <div className='card-content'>
                                        <div className='title has-text-weight-bold'>
                                            { character.first_name } { character.last_name }<br />
                                            <p className='is-size-6'>née: { character.née }</p>
                                        </div>
                                        <div className='content'>
                                            <p>The { character.title }</p>
                                            <p>{ character.dob } - { character.dod }</p>
                                            <p>Number of Episode Appearances:
                                                <br />
                                                { character.num_of_eps }
                                            </p>
                                            <p>Quotes:
                                                <br />
                                                { character.quote }
                                            </p>
                                            <br />
                                            <h3>Family Information</h3>
                                            <p>Spouse: { character.spouse_first_name } { character.spouse_last_name }
                                                <br />
                                                née: { character.spouse_née }
                                            </p>
                                            <p>Marriage Date: { character.marriage_date }</p>
                                            <p>Children: { character.children }</p>
                                        </div>
                                        <footer className='card-footer'>

                                        {/*EDIT CHARACTER*/}

                                        <details>
                                            <summary>
                                                <strong>Edit This Character</strong>
                                            </summary><br />
                                            <form id='edit_form' onSubmit={ (event) => {handleEdit (event, character)} }>

                                                <div className='field'>
                                                    <label className='label'>img</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.img } onChange={ handleNewImage } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>First Name</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.first_name } onChange={ handleNewFirstName } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Last Name</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.last_name } onChange={ handleNewLastName } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Née</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.née } onChange={ handleNewNée } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Date of Birth</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.dob } onChange={ handleNewDob } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Date of Death</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.dod } onChange={ handleNewDod } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Official Title/Position</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.title } onChange={ handleNewTitle } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Number of Episode Appearances</label>
                                                    <div className='control'>
                                                        <input className='input' type='number' placeholder={ character.num_of_eps } onChange={ handleNewNumOfEps } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Quotes</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.quote } onChange={ handleNewQuote } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Spouse's First Name</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.spouse_first_name } onChange={ handleNewSpouseFirstName } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Spouse's Last Name</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.spouse_last_name } onChange={ handleNewSpouseLastName } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Spouse's Née</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.spouse_née } onChange={ handleNewSpouseNée } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Marriage Date</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.marriage_date } onChange={ handleNewMarriageDate } />
                                                    </div>
                                                </div>

                                                <div className='field'>
                                                    <label className='label'>Children</label>
                                                    <div className='control'>
                                                        <input className='input' type='text' placeholder={ character.children } onChange={ handleNewChildren } />
                                                    </div>
                                                </div>

                                                <div className='field is-grouped-centered'>
                                                    <div className='control'>
                                                        <button className='button is-link' type='submit'>Submit Edit</button>
                                                    </div>
                                                    <div className='control'>
                                                        <button className='button is-link is-light'>Cancel</button>
                                                    </div>
                                                    <div className='control'>
                                                        <button className='button is-link has-background-danger'
                                                                onClick={ (event) => { handleDelete(character)} }>
                                                                    Delete Character
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </details>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </>
            </section>

            <section>
                <Footer />
            </section>
        </main>
    )
}
export default App;
