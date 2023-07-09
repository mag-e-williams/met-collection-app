import useSWR from 'swr';
import type { EndpointKey, EndpointType, EndpointParams, AwaitedType } from './endpoints';

/**
 * For client use only! Exposes a useSWR hook for fetching data
 * from one endpoint key that maps to an /api endpoint. Only
 * revalidates and refetches if the key starts with `latest`.
 * So other keys like `version` will only be fetched once on build.
 */
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useData(key: string) {
  const isImmutable = false;

  return useSWR(key, fetcher,  {
    revalidateIfStale: !isImmutable,
    revalidateOnFocus: !isImmutable,
    revalidateOnReconnect: !isImmutable,
  })
  
}