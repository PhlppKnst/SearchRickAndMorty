async function queryApi(query) {
    /*
    queryApi uses simple fetch to do qraphql calls, so no caching
    query: graphql query
    */
    let results = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
  
      headers: {
        "Content-Type": "application/json"
      },
  
      body: JSON.stringify({
        query: query
      })
    })
    return await results.json();
  }

export default queryApi