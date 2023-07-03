// https://collectionapi.metmuseum.org/public/collection/v1/search?q=vacuums
// https://collectionapi.metmuseum.org/public/collection/v1/objects/<objectID>

import { MetObject } from "@/types/MetObject"
import { MetSearchResponse } from "@/types/MetSearchResponse"

const BASE_URL= 'https://collectionapi.metmuseum.org/public/collection/v1/'

export async function fetchMetData(search: string = 'hairbrush'): Promise<MetObject[]> {
    let url = `${BASE_URL}`
    if (search != '') {
        const query_params = `search?q=${search}`
        url = `${BASE_URL}${query_params}`
    } 

  const objectIds: MetSearchResponse = await (await fetch(url)).json()
  const objectDetailsList = objectIds.objectIDs.map(async (objId: number) => {
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

//   return sortedObjects.slice(0,5)
    return sortedObjects
}