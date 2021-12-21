import React from 'react'

const PersonList = ({people = []}) => {
    return(
        <div>
            <ul>
                {people.map((person, i) => <li key={i}>{person.firstName} {person.lastName}</li>)}
                {/* {props.people && props.people.length == 1 ? <li></li>: undefined} */}
            </ul>
        </div>
    )
}

export default PersonList