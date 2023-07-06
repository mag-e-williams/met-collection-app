import { MetObjects } from "@/types/MetObjects"
import axios from "axios";

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/'

// returns MetSearchResponse, which includes the list of objectIDs, and the total num of results
export async function fetchMetObjects(searchTerm?: string): Promise<MetObjects> {
  let url = BASE_URL
  if (searchTerm) {
    url = url + `search?q=${searchTerm}`
  } else {
    url = url + '/objects'
  }
  
  const { data } = await axios.get(url);
  return {
    ...data, 
    searchTerm: searchTerm
  }
 
}