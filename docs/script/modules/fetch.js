async function sendApiRequest(API_URL){
  let response = await fetch(API_URL)
  let data = await response.json()
  return data
}

export { sendApiRequest }