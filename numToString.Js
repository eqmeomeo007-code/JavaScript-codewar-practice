// Convert a Number to a String!
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/solutions/javascript
// 21/12/2568

function numberToString(num) {
    return num = String(num);
  }

// ต้องการให้ตัวเลขกลายเป็นตัวอักษร ใช้ "" 
// test 10 นาที 
// return num === ("") แบบนี้ไม่ได้ 
// if (num + ""){return "" } แบบนี้ก็ไม่ได้ 
// return `'${num}"`แบบนีก็ไม่ได้ 
// 

// ทบทวนบท Type Conversion 
// https://platform.techupth.com/learn/courses/fsd10/javascript/javascript-type-conversion-type-conversion-introduction
// num = String(num);

// ตัวอย่างที่น่าสนใจ 

// function numberToString(num) {return ''+num;} 
// // แบบกำหนดคล่าว ๆ ให้จาวาสคลิป น่าจะเอาไปใช้เพื่อเร็วขึ้น 

// const numberToString = num => `${num}`;  
// // แบบที่เราลองแต่ทำแบบแอโร่ฟังชั่น 

// function numberToString(num) {return num.toString();}
// "String() เป็น function แปลงค่าโดยตรงส่วน toString() เป็น method ของ value ต่างกันตรงความปลอดภัยกับ null / undefined"