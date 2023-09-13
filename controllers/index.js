const firstPerson = (req, res, next) => {
    res.json('Jerry Marollano')};

const secondPerson = (req, res, next) => {
    res.json('Catherine Marollano')};

module.exports = { firstPerson, secondPerson };