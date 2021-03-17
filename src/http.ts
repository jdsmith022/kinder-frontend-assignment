import axios from 'axios'
import { ApiDataType, SearchResponsePaginationDataType } from '@/src/types'

const http = axios.create({
  baseURL: `https://staging-api.kinder.world/`,
  headers: { 'Content-Type': 'application/json' }
})

/**  POST to Kinder API
 *
 * using axios, getOrganizations POST to Kinder api and return response
 */
export async function getOrganizations (data: ApiDataType): Promise<SearchResponsePaginationDataType> {
  const response = await
   http.post('search/public?include=cause.categories,cause.hasPassedPreliminary,appeal.organisations.cause', JSON.stringify(data))
  return response.data
}
