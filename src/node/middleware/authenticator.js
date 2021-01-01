function authenticator (req, res, next) {
    console.log('authentcating')
    next()
}

module.exports = authenticator