function parsePartCode(product) {
    let cont1 = product.split(":");
    let cont2 = cont1[1].split('-');
    cont1.pop();
    const partsArr = cont1.concat(cont2);
    let newPart = {
        supplierCode: partsArr[0],
        productNumber: partsArr[1],
        size: partsArr[2]
    }
    return newPart;
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log(part1);
console.log("Supplier: " + part1.supplierCode +" Product Number: " 
+ part1.productNumber +" Size: " + part1.size);

let partCode2 = "ABC:9876-S";
let part2 = parsePartCode(partCode2);
console.log(part2);
console.log("Supplier: " + part2.supplierCode +" Product Number: " 
+ part2.productNumber +" Size: " + part2.size);
