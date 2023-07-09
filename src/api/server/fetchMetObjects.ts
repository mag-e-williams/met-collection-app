import { MetObjects } from "@/types/MetObjects"
import { FilterCategory } from "@/utils/filters";
import axios, { AxiosRequestConfig } from "axios";
import { NextApiRequest } from "next";

const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/'

// returns MetSearchResponse, which includes the list of objectIDs, and the total num of results
export async function fetchMetObjects(): Promise<MetObjects> {
  let api_endpoint = 'objects'

  const config: AxiosRequestConfig = {};

  // if (req && Object.keys(req.query).length) {
  //   api_endpoint = 'search'
  //   config.params = { ...req.query };

  //   // search endpoint only works if there is a 'q' param
  //   // if no q, replace with blank character
  //   const { q } = req.query
  //   if (!q) { 
  //     config.params = {
  //       q: '*',
  //       ...req.query
  //     }
  //   } 
  // }
 
  const { data } = await axios.get(BASE_URL + api_endpoint, config);
  return {
    ...data, 
  }
 
}