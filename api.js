const axios = require('axios');
//to call for user info
const getApi = {
    async getUser(yourInput){
        try {let response = await axios

            .get(`https://api.github.com/users/${yourInput.username}`);
            return response.data;

        } catch (err){
            console.log(err);
        }
    }
}

module.exports = getApi;