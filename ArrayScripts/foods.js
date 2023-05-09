let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
]
let total = 0;
function getTotal (stuff) {
    for(let i = 0;i < stuff.length;i++) {
        total += stuff[i].price
    }
return total
}
console.log(getTotal(lunch))
