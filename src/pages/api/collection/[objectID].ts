
import { fetchMetObjectsData } from "@/api/server/fetchMetObjectsData"
import { MetObjectsData } from "@/types/MetObjectsData"
import { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
  response?: MetObjectsData,
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { objectID } = req.query

  try {
    const { response } = await fetchMetObjectsData([Number(objectID)])
    console.log(response)
    res.status(200).json({ response: response[0] })
  } catch (err) {
    res.status(500).json({ error: 'failed to load object with ID: ' +  objectID})
  }
}