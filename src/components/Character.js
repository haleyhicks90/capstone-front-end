import React from 'react'

const Character = (props) => {
    // console.log(props);
    return (
        <>
                <div class='block columns is-flex-direction-row is-justify-content-space-around is-flex-wrap-wrap'>
                    <div class='card is-one-third-desktop column is-3 has-text-centered m-3 is-justify-content-space-around'>
                        <div class='card-image'>
                            <figure class='image is-500x500'>
                                <img src={ props.character.img } />
                            </figure>
                        </div>
                        <div class='card-content'>
                            <div class='title has-text-weight-bold'>
                                { props.character.first_name } { props.character.last_name }<br />
                                <p class='is-size-6'>née: { props.character.née }</p>
                            </div>
                            <div class='content'>
                                <p>Official title/position: { props.character.title }</p>
                                <p>Date of birth: { props.character.dob }</p>
                                <p>Date of death: { props.character.dod }</p>
                                <p>Number of Episodes: { props.character.num_of_eps }</p>
                                <p>Quotes:
                                    <li>{ props.character.quotes[0] }</li>
                                    <li>{ props.character.quotes[1] }</li>
                                    <li>{ props.character.quotes[2] }</li>
                                </p>
                                <br />
                                <p>Spouse: { props.character.spouse_first_name } { props.character.spouse_last_name }</p>
                                <p>née: { props.character.spouse_née }</p>
                                <p>Marriage Date: { props.character.marriage_date }</p>
                                <p>Children:
                                    <li>{ props.character.children[0] }</li>
                                    <li>{ props.character.children[1] }</li>
                                    <li>{ props.character.children[2] }</li>
                                </p>
                            </div>
                            <footer class='card-footer'>
                                <a href="#" class="card-footer-item">Edit</a>
                                <a href="#" class="card-footer-item">Delete</a>
                            </footer>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default Character
