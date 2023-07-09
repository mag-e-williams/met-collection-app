
import { fetchMetObjects } from "@/api/server/fetchMetObjects"
import { fetchMetObjectsData } from "@/api/server/fetchMetObjectsData"
import { MetObjectsData } from "@/types/MetObjectsData";
import { NextApiRequest, NextApiResponse } from "next"

type ResponseType = {
  total: number,
  page: number, 
  limit: number,
  response: MetObjectsData[]
};

type ErrorType = {
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType | ErrorType>) {
  try {
    const { total, page, limit, objectIDs } = await fetchMetObjects(req)
    const { response } = await fetchMetObjectsData(objectIDs)
    
    res.status(200).json({ total, page, limit, response })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}