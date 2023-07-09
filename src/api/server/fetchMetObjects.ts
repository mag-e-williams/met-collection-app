import { MetObjects } from "@/types/MetObjects"
import { FilterCategory } from "@/utils/filters";
import axios, { AxiosRequestConfig } from "axios";
import { NextApiRequest } from "next";

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/'

// returns MetSearchResponse, which includes the list of objectIDs, and the total num of results
export async function fetchMetObjects(req: NextApiRequest): Promise<MetObjects> {

  let { page, limit, q } = req.query

  const page_num = Number(page) || 1
  const limit_num = Number(limit) || 40

  let start = (Number(page_num)-1) * limit_num
  let end = start + limit_num

  const  api_endpoint = q ? 'seach' : 'objects'
  const config: AxiosRequestConfig = {};
  config.params = {
    q: q ? q : '*',
  }
  console.log(BASE_URL + api_endpoint)

  const { data } = await axios.get(BASE_URL + api_endpoint, config);
  return {
    ...data, 
    page: page_num, 
    limit: limit_num,
    objectIDs: data.objectIDs.slice(start,end)
  }
 
}