import React from 'react'

const Character = (props) => {
    // console.log(props);
    return (
        <>
            <img src={ props.character.img } />
            { props.character.first_name } { props.character.last_name }
            <p>{ props.character.née }</p>
            <p>Official title/position: { props.character.title }</p>
            <p>Date of birth: { props.character.dob }</p>
            <p>Date of death: { props.character.dod }</p>
            <p>Number of Episodes: { props.character.num_of_eps }</p>
            <p>Spouse: { props.character.spouse_first_name } { props.character.spouse_last_name }</p>
            <p>née: { props.character.spouse_née }</p>
            <p>Marriage Date: { props.character.marriage_date }</p>
            <p>Children:
                <li>{ props.character.children[0] }</li>
                <li>{ props.character.children[1] }</li>
                <li>{ props.character.children[2] }</li>
            </p>
        </>
    )
}

export default Character
