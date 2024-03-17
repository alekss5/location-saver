const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${'AIzaSyDjejhxvaciT-kcxWQ_96xayYfz_JsVvA8'}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${'AIzaSyDjejhxvaciT-kcxWQ_96xayYfz_JsVvA8'}`
    const respose = await fetch(url)
    if(!respose.ok){
        throw new Error('Failed to fetch address!')
    }

    const data = await respose.json()
    const address = data.results[0].formatted_address
    return address
}