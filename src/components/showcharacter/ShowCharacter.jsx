function ShowCharacter({ characterDict }) {
    /*
    ShowCharacter renders a character dict
    */

    return (
        <div>
            <h2>{characterDict.name}</h2>
            <img src={characterDict.image} alt={characterDict.name} />
            <div><span>Status:{characterDict.status}</span></div>
            <div><span>Species:{characterDict.species}</span></div>
            <div><span>Location:{characterDict.location.name}</span></div>
        </div>
    )
}

export default ShowCharacter