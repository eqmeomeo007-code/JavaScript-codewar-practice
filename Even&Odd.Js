// Even or Odd 
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript
// 21/12/2568

function evenOrOdd(number) {
    if(number % 2 === 0){
        return "Even";
    } else {
        return "Odd"
    } 
}; 

// ในโค้ดต้องการให้หาร 2 ลงตัวแสดงผลเป็น "Even" และ หารไม่ลงตัวเป็น "Odd"
// ใช้ If เพื่อทำการกำหนดเงื่อนไขเมื่อหาร 2 ลงตัวที่เลข 0 จะรีเทรินค่าของ "Even" 
// ส่วน else ถ้าได้คำตอบนอกจากนั้นจะแสดงผลทั้งหมดเป็น "Odd" 

// โค้ดคนอื่นที่ น่าสนใจ 

// function evenOrOdd(number) {return number % 2 === 0 ? 'Even' : 'Odd';}

// การทำเป็นแบบสั่นเพื่อความ คลีน ของโค้ด