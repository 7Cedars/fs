import react from 'react'; 

const PersonLine  = ({ person }) => {

    return (
        <p> {person.name}: {person.number} </p>
    )

} 

export default PersonLine