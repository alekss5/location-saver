// export class Place {
//     constructor(title, imageUri, location) {
//       this.title = title;
//       this.imageUri = imageUri;
//       this.address = location.address;
//       this.location = {address:location.address, lat: location.lat, lng: location.lng }; // { lat: 0.141241, lng: 127.121 }
//       this.id = new Date().toString() + Math.random().toString();
//     }
//   }
export function Place(title, imageUri, location,id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { address: location.address, lat: location.lat, lng: location.lng };
    this.id = id
  }

// Example usage
//const myPlace = new Place("My Place", "example.jpg", { address: "123 Main St", lat: 0.141241, lng: 127.121 });

//console.log(myPlace);
