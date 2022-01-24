import './App.css';
import { useState } from 'react';
import SearchComponent from './components/searchcomponent/SearchComponent'
import ShowResults from './components/showresults/ShowResults'

function App() {
  //keeps the current search string
  const [searchString, setSearchString] = useState('');

  //callback that handles selection of search string in SearchComponent
  const searchWordCb = (searchStringFromSearch) =>{
    setSearchString(searchStringFromSearch)
  }

  return (
    <div className="App">
      <h1>Search Rick and Morty Characters</h1>
      <SearchComponent searchWordCb={searchWordCb}/>
      <ShowResults searchString={searchString}/>
    </div>
  );
}

export default App;
