//ฟังก์ชั่นนี้จะเพิ่มยี่ห้อรถใหม่เข้า คอลเลคชั่น
//carBrand เก็บยี่ห้อรถ
//ถ้าเพิ่มสำเร็จ (ยังไม่มียี่ห้อนั้น) จะแจ้ง New car collection is: Toyota, Fiat, Honda, BMW, <ยี่ห้อรถใหม่>.
//ถ้าไม่สำเร็จ จะแจ้ง <car-brand> already exists in position <position> of the car collection.

const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here

  if (carCollection.includes(carBrand)) {
    //fail มีแล้ว
    console.log(carCollection.indexOf);

    return `${carBrand} already exists in position ${
      carCollection.indexOf(carBrand) + 1
    } of the car collection.`;
  } else {
    //สำเร็จ พุช carBrand ใส่ collection แล้วแสดงข้อความ
    carCollection.push(carBrand);
    return `new car collection is ${carCollection.join(",")}`;
  }
  return;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
