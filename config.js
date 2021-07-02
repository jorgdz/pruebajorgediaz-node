module.exports = {
    config: {
        db: {
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            connectString: process.env.DB_URL,
            externalAuth: false
        }
    }
}
