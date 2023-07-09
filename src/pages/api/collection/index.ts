
import { fetchMetObjects } from "@/api/server/fetchMetObjects"
import { MetObjects } from "@/types/MetObjects"
import { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
  result?: MetObjects,
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    const result = await fetchMetObjects()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}