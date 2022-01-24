import queryApi from './queryAPI'

async function getPossibleNames(searchString){
    /*
    getPossibleNames queries the Api with a filter and returns matching names
    searchString: the string to filter for
    */

    //create graphql query
    const query = `{
        characters(filter:{name:"${searchString}"}){ 
            results{name}
        }
      }`
    const apiResult = await queryApi(query)
    if (apiResult.data.characters === null){
        return []   
    }
    const names = apiResult.data.characters.results.map((result) => result.name)
    return names
}

export default getPossibleNames