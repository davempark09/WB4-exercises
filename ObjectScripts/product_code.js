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
console.log(parsePartCode('supplierCode:productNumber-size'))
console.log(parsePartCode('XYZ:1234-L'))