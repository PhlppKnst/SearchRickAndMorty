import './SearchComponent.css'
import SearchBar from '../searchbar/SearchBar';
import Recommendation from '../recommendation/Recommendation'
import getPossibleNames from '../../api/getPossibleNames'

import { useState, useEffect } from 'react';

function SearchComponent({ searchWordCb }) {
    /*
    SearchComponent consists of the searchBar and the Recommendation components
    searchCb: is a callback that is executed with the choosen search word after the user 
    pressed enter or selected a recommendation
    */

    //currentString in SearchBar, used to update recommendations
    const [currentString, setCurrentString] = useState('');
    //holds the recommendations
    const [recommendations, setRecommendations] = useState([]);
    //to set the new defaultValue after selection from recommendation list
    const [searchFor, setSearchFor] = useState('')

    const [renderRecommendations, setRenderRecommendations] = useState(true)

    //get new recommendations if string in search box changes
    useEffect(() => {
        const getData = async () => {
            if (currentString.length === 0) {
                return;
            }
            const possibleNames = await getPossibleNames(currentString);
            setRecommendations([...new Set(possibleNames)]);//remove duplicates
        }
        getData()
    }, [currentString]);

    //callback function when user clicked on recommendation or pressed enter
    const selectStringOnClickOnEnter = (selectedString) => {
        //word selected
        //don't show recommendations
        setRenderRecommendations(false)
        //set search word
        setSearchFor(selectedString)
        searchWordCb(selectedString)
    }

    //callback function given to SearchBar
    const currentStringInBarCb = (currentStringFromBar) => {
        if (currentStringFromBar.length > 0){
            setRenderRecommendations(true)
        }else{
            setRenderRecommendations(false)
        }
        setCurrentString(currentStringFromBar);
    }

    const recommendationList =
        recommendations.map(
            (recommendation, index) => (
                <Recommendation key={index} text={recommendation} clickCb={selectStringOnClickOnEnter} />
            )
        )

    return (
        <div className="SearchComponent">
            <div className="Children">
                <SearchBar defaultValue={searchFor} currentStringInBarCb={currentStringInBarCb} selectedOnEnter={selectStringOnClickOnEnter} />
            </div>
            <div className="Children">
                { renderRecommendations ? recommendationList : null }
            </div>
        </div>
    )
}

export default SearchComponent
