import client from '../client/google-api-client'
import customers from '../domain/customers'

export default ({ customerName, latitude, longitude }) => {
  const customer = customers.find((c) => c.name === customerName);
  if (!customer) {
    return Promise.reject(new Error('Customer not found'))
  }
  return client.getLocations({
    latitude,
    longitude,
    apiKey: customer.apiKey,
    language: customer.language,
    numberOfLocations: customer.numberOfLocations,
    responseOutput: customer.responseOutput,
    type: customer.type
  });
}
