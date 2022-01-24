import './ShowResults.css'
import { useEffect, useState } from 'react';
import getResults from '../../api/getResults'
import ShowCharacter from '../showcharacter/ShowCharacter'

function ShowResults({ searchString }) {
    /*
    ShowResults shows the results of a given searchString
    searchString: the searchString to search for
    */

    const [currentPage, setCurrentPage] = useState(1)
    //pages in the result
    const [pages, setPages] = useState(null)
    //array with characters from the api result
    const [characterRes, setCharacterRes] = useState([])

    //search the api if new searchString is given
    useEffect(() => {
        if (searchString.length === 0) {
            return;
        }
        const getData = async () => {
            //get first page
            const results = await getResults(1, searchString);
            setCharacterRes(results.results)
            setPages(results.info.pages)
            setCurrentPage(1)
        }
        getData()
    }, [searchString]);

    //searches the api if new page is requested
    useEffect(() => {
        if (currentPage === 1) {
            return;
        }
        const getData = async () => {
            const results_new_page = await getResults(currentPage, searchString)
            characterRes.push(...results_new_page.results)
            setCharacterRes([...characterRes])
        }
        getData()
    }, [currentPage])

    //no pages to show return
    if(pages === 0){
        return <h1> No result for {searchString} </h1> 
    }

    const characterRender = characterRes.map(
        (characterDict, i) => {
            return <div key={i} className="Item">
                <ShowCharacter characterDict={characterDict} />
            </div>
        }
    )

    // button is disabled when there's not another page
    const buttonRender = <button className="Button" disabled={!(pages && currentPage < pages)}
                        onClick={() => { setCurrentPage(currentPage + 1) }}>Load More</button>

    return (
        <div>
            <div className="Show-results">
                {characterRender}
            </div>
            { characterRes.length > 0 ? buttonRender : null }
        </div>
    )

}

export default ShowResults
