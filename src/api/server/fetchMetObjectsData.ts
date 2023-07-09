import { MetObjectsData } from "@/types/MetObjectsData"
import axios from "axios";

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/'

type fetchDataResponse = {
  response: MetObjectsData[] 
}

// returns a list of MetObjects with fill data, given the list of IDs and page number
export async function fetchMetObjectsData(objectIDs: number[], page: number = 1, limit: number = 40): Promise<fetchDataResponse> {
  let pageObjects = objectIDs;
  if (limit) {
    const start = (page-1) * limit
    const end = start + limit
    pageObjects = pageObjects.slice(start, end)
  } 

  let pageObjectDetails: MetObjectsData[] = []
  if (objectIDs) {
    await Promise.all(pageObjects.map(async (objId: number) => {
      try {
        const { data } = await axios.get(BASE_URL + 'objects/' + objId);
        pageObjectDetails.push(data);
      } catch {
        console.error('Error fetching object: ' + objId);
      }
    }));
    return {
      response: pageObjectDetails
    };
  }
  return {
    response: []
  }

}