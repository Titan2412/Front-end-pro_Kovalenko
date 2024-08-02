import { get } from './httpClient.js';

export async function fetchHotelsAPI(signal) {
  return await get('hotels', signal);
}
