const carCollection = ["toyota", "fiat", "honda", "bmw"];
console.log(carCollection.join());

function updateCarCollection(carBrand) {
  let carb = carCollection.filter((x) => x === carBrand).join();
  // Start coding here
  if (carb === "") {
    carCollection.push(carBrand);
    return `new car collection is : ${carCollection}`;
  } else {
    return carb + "has already existed in the 1 position of car collection";
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
