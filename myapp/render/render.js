const {sendApiRequest} = require('../router/fetch')

async function home (req, res) {
    console.log(sendApiRequest)
    res.render('../index.html') 
  }

module.exports = {home}