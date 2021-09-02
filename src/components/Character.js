import React from 'react'

const Character = (props) => {
    return (
        <>
            <h4>Character Info</h4>
            <h5>Name: { props.character.first_name } { props.character.last_name }</h5>
            <h6>née: { props.character.née }</h6>
            <h5>Date of birth: { props.character.dob }</h5>
            <h5>Date of death: { props.character.dod }</h5>
            <h5>Official title: { props.character.title }</h5>
            <h5>Number of Episodes: { props.character.num_of_eps }</h5>
            <h5>Quotes: { props.character.quotes }</h5>
            <h5>Spouse: { props.character.spouse_first_name } { props.character.spouse_last_name }</h5>
            <h6>née: { props.character.spouse_née }</h6>
            <h5>Marriage Date: { props.character.marriage_date }</h5>
            <h5>Children: { props.character.children }</h5>
        </>
    )
}

export default Character
