
 const convertPrice = (num) => {
    num = num.split('.').join('').replace('₫', "").trim()
    num = Number(num)
    return num;
}

export default convertPrice