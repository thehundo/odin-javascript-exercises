const reverseString = function(text) {
    const chars = text.length;
    let reverseText = "";
    console.log(chars);
    for (let i = chars; i >= 0; i--) {
        reverseText += text.charAt(i);
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
