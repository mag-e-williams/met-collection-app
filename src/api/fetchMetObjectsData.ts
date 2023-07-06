import { MetObjectsData } from "@/types/MetObjectsData"
import { MetObjects } from "@/types/MetObjects";
import axios from "axios";

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/'

// returns a list of MetObjects with fill data, given the list of IDs and page number
export async function fetchMetObjectsData(objects: MetObjects, page: number, limit: number): Promise<MetObjectsData[]> {
  const start = (page-1) * limit
  const end = start + limit
  if (objects && objects.objectIDs) {
    const pageObjects = objects.objectIDs.slice(start, end)
    const pageObjectDetails = pageObjects.map(async (objId: number) => {
      const { data } = await axios.get(BASE_URL + 'objects/' + objId);
      return data
    })
    return await Promise.all(pageObjectDetails)
  }
  return []

}