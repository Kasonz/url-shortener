let utils = {};

utils.getShortenURL = function (len) {
    if(!len){
        len=5;
    }
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

utils.getShortenURLArray = function (max) {

    if (!max) {
        max = 5;
    }
    let arr = [];
    for (let index = 0; index < max; index++) {
        arr.push(utils.getShortenURL(5));
    }
    return arr;


};

module.exports = utils;