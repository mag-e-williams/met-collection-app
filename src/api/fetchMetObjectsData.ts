import { MetObjectsData } from "@/types/MetObjectsData"
import { MetObjects } from "@/types/MetObjects";
import axios from "axios";

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/'

// returns a list of MetObjects with fill data, given the list of IDs and page number
export async function fetchMetObjectsData(objectIDs: number[], page: number = 1, limit: number = 10): Promise<MetObjectsData[]> {
  const start = (page-1) * limit
  const end = start + limit
  let pageObjectDetails: MetObjectsData[] = []
  if (objectIDs) {
    const pageObjects = objectIDs.slice(start, end)
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