import { MetObjectsData } from "@/types/MetObjectsData"
import axios from "axios";

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/'

// returns a list of MetObjects with fill data, given the list of IDs and page number
export async function fetchMetObjectsData(objectIDs: number[], page: number = 1, limit?: number): Promise<MetObjectsData[]> {
  console.log(objectIDs)
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
    return pageObjectDetails;
  }
  return []

}