const urlModel = require("./url_model");
const utils = require("../utils/utils");
let controls = {};

var count = 0;
controls.main = async function (source) {

    // generate 10 shorten url arrays, loop them one by one, in most cases the first one would be ok
    let URLArray = utils.getShortenURLArray(10);

    for (let url of URLArray) {

        try {
            let savedResult = await urlModel.create({
                source: source,
                shortenURL: url
            });

            console.log("Success: " + savedResult.shortenURL);

            // success! pass the url
            return savedResult.shortenURL;

        } catch (error) {

            // not unique -> next
            console.log("Not unique: " + url);
            continue;

        }

    }


}



module.exports = controls;