// https://collectionapi.metmuseum.org/public/collection/v1/search?q=vacuums
// https://collectionapi.metmuseum.org/public/collection/v1/objects/<objectID>

import { MetObject } from "@/types/MetObject"
import { MetSearchResponse } from "@/types/MetSearchResponse"

const BASE_URL= 'https://collectionapi.metmuseum.org/public/collection/v1/'

export async function fetchMetData(searchTerm: string = 'hairbrush'): Promise<MetObject[]> {
  const query_params = `search?q=${searchTerm}`
  const url = `${BASE_URL}${query_params}`

  const objectIds: MetSearchResponse = await (await fetch(url)).json()
  const objectDetailsList = objectIds.objectIDs.slice(0,20).map(async (objId: number) => {
    const objectUrl = `${BASE_URL}objects/${objId}`

    const objectDetails = await (await fetch(objectUrl)).json()
    return (
      objectDetails
    )
  })

  const tst = await Promise.all(objectDetailsList)

  const sortedObjects = tst.sort((a,b) => {
    return b.objectEndDate - a.objectEndDate
  })

  return sortedObjects
}