import { post } from './httpClient.js';

export async function sendBookingAPI(data,signal) {
  return await post('destination', data , signal);
}
