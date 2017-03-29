
var request = require('request');
module.exports = Interbot;

var endpoint = "https://www.fibo.io";
var endpoint = "https://localhost:4000";


function Interbot(developer_token, bot_token){
    return {
        validateUser: function(facebook_user_id){
            request(endpoint+"/42/interbot?user="+facebook_user_id, function(data){
                console.log("Validate user reply::", data)

            })
        }
    }
}

