const urlModel = require("./url_model");
const utils = require("../utils/utils");

let controls = {}

controls.delay = function () {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    })
}


var count = 0;
controls.main = async function (source) {
    try {
        let savedResult = await urlModel.create({
            source: source,
            url: utils.getShortenURL(5)
        });

        console.log(savedResult);
        count = 0;
        return savedResult;
    } catch (error) {
        // short url exists
        console.log(error);
        console.log(count);

        count++;
        //try 3 times in maximal
        if (count >= 3) {
            return "";
        } else {
            await controls.delay();
            return controls.main;
        }


    }



}



module.exports = controls;