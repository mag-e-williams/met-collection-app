
import { fetchMetObjects } from "./server/fetchMetObjects";
import { fetchMetObjectsData } from "./server/fetchMetObjectsData";

export type EndpointParams = {
  page?: number;
  perPage?: number;
  startAfter?: string;
};

/**
 * All possible types of endpoints we could request
 */
export type EndpointKey = keyof typeof endpoints;

/**
 * Returns the endpoint's return type given a generic `EndpointKey`
 */
export type EndpointType<Key extends EndpointKey> = ReturnType<typeof endpoints[Key]>;

/**
 * Convenience type for the awaited version of the endpoint's return type
 */
export type AwaitedType<Key extends EndpointKey> = Awaited<EndpointType<Key>>;

export const endpoints = {
  objects: fetchMetObjects,
  // objectsData: fetchMetObjectsData,
} as const;

/**
 * Typeguard for narrowing a possible key into a well typed endpoint key
 */
export const isValid = (possibleKey: string | undefined): possibleKey is EndpointKey =>
  typeof possibleKey === 'string' && Object.keys(endpoints).includes(possibleKey);
