//ฟังก์ชั้น

//แบบปกติ ฟังก์ชั่นที่มีการับค่า
function calculateTotal(price, quatity) {
    return price* quatity;
}
console.log(`ราคารวม ${calculateTotal(25, 4)}`);

// แบบ arrow function
const calculateTotalArrow = (print, quatity) => print * quatity;
console.log(`ราคารวม ${calculateTotalArrow(20, 3)}`);

// แบบ arrow
const calculateWithVat = (print, quatity, vat = 0.07) => {
    const subtotal = print * quatity;
    return(subtotal + subtotal * vat).toFixed(2);
}
console.log(`รวมค่า vat ${calculateWithVat(100, 2)}`);