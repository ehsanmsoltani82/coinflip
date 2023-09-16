function flipCoin() {

    var randomNum = math.floor(math.random() * flipPix.length);
    document.getElementById("pix").src = flipPix[randomNum];
}

var flipPix = new Array();