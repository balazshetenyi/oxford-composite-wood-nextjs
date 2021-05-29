export function GetQuantity(squareM, oneSquareMeter) {
    const result = squareM * oneSquareMeter

    return Math.ceil(result * 1.05)
}

