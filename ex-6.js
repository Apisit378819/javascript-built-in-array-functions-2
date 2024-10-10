const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  const index = carCollection.indexOf(carBrand); // หา index ของ carBrand ใน carCollection
  
  if (index === -1) {
    // ถ้ายังไม่มียี่ห้อรถใน carCollection
    carCollection.push(carBrand); // เพิ่ม carBrand ลงใน carCollection
    return `new car collection is : ${carCollection.join(',')}.`; // ส่งคืนข้อความที่มีคอลเลกชันใหม่
  } else {
    // ถ้ามียี่ห้อรถใน carCollection
    return `${carBrand} has already existed in the ${index + 1} position of car collection.`; // ส่งคืนข้อความว่ามียี่ห้อรถอยู่แล้ว
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.