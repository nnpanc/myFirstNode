module.exports = {
    // mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:password@localhost:27017/myFirstNode',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '649580014773-lov0s057rv49d1jpoajds2cqft1dptm7.apps.googleusercontent.com',
        clientSecret: '1Im94qvZST0IPkfwSDXkaC33',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
}
