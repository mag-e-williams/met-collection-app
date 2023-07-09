
import { fetchMetObjects } from "@/api/server/fetchMetObjects"
import { fetchMetObjectsData } from "@/api/server/fetchMetObjectsData"
import { MetObjects } from "@/types/MetObjects"
import { MetObjectsData } from "@/types/MetObjectsData"
import { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
  result?: MetObjectsData[],
  error?: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { objectID } = req.query

  try {
    const result = await fetchMetObjectsData([Number(objectID)])

    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}