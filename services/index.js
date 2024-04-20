const axios = require("axios");

const calculateStocksYields = async (req, res, next) => {
    try {
        console.log('AAAAAAAAAAAAAA')
        const response = await axios.get('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=eKh0Dun5eex1DTaCMdG2InguuF6wVBsM');
        console.log(JSON.stringify(response.data, null, 2))

        return res.send(response.data)
    } catch (err) {
        console.log('ERR ::: ', err)
        return next(err)
    }
}

module.exports = {
    calculateStocksYields
}