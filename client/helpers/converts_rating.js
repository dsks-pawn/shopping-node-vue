const convertRating = (ratings) => {
    let a =
    Number(ratings.five) * 5 +
    Number(ratings.four) * 4 +
    Number(ratings.three) * 3 +
    Number(ratings.two) * 2 +
    Number(ratings.one)
let b =
    Number(ratings.five) +
    Number(ratings.four) +
    Number(ratings.three) +
    Number(ratings.two) +
    Number(ratings.one)
    let result = a/ b
    result = Math.round(result * 100) / 100
    return result
}
export default convertRating