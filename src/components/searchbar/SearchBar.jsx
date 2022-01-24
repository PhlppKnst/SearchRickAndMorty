import './SearchBar.css'

function SearchBar({ defaultValue, currentStringInBarCb, selectedOnEnter }) {
    /*
    SearchBar is a text field
    defaultValue: defaultValue of the SearchBar
    currentStringInBarCb: callback which is called with the current string of the input, each time the string in input field change
    selectedOnEnter: callback which is called with the current string of the input, when enter is pressed 
    */

    //handle enter pressed
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            selectedOnEnter(e.target.value)
        }
    }

    //give current string in Search Bar back to parent
    const handleOnChange = (e) => {
        //simple delay propagation
        setTimeout(() => currentStringInBarCb(e.target.value), 600)
    }

    let inputRender = <input defaultValue={defaultValue} className="SearchBar" type="text"
        onKeyDown={handleKeyDown} onChange={handleOnChange} onFocus={(e)=>{currentStringInBarCb(e.target.value)}}/>

    return (
        <div key={defaultValue}>
            {inputRender}
        </div>
    )
}

export default SearchBar
