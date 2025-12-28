// Reversed Strings
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// 28/12/2025

function solution(str) {
    let result = '';              // กล่องเก็บผลลัพธ์
  
    for (let i = str.length - 1;  // เริ่มจากตัวท้าย
         i >= 0;                  // ยังไม่หลุดซ้าย
         i--) {                   // ถอยหลังทีละ 1
  
      result += str[i];           // เอาตัวอักษรมาต่อ
    }
  
    return result;                // คืนผลลัพธ์
  }
  
//----------------------------------------------------------------

let Ai = "IA evoL";

let result = Ai.split('').reverse().join('');
console.log(result); // "Love AI"

// แบบใช้ของเสริม มันคือการ แยกส่วน จากนั้น กลับด้าน จากนั้น ร่วมใหม่ 
// แบบของหนึ่งคนที่อ่านได้ง่ายสุด 

function solution(str) { 

    let splitString = str.split(''); 
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(''); 

    return joinArray; 
}

