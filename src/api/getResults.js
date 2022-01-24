import queryApi from './queryAPI'

async function getResults(page,searchString){
   /*
   getResults gets the character informations for a searchString and a given page
   page: the page of the matching results
   searchString: the searchString
   */

    //create garaphql query
    const query = `{
        characters(page:${page},filter:{name:"${searchString}"}){
         info{pages} 
         results{
          name
          status
          species
          location{name}
          image
            }
          }
      }`
    const apiResult = await queryApi(query)
    //if there's no result give back empty array and pages:0
    if (apiResult.data.characters === null){
      return {
        "results":[],
        "info":{"pages":0}
      }
    }
    const characters = apiResult.data.characters
    return characters
}

export default getResults