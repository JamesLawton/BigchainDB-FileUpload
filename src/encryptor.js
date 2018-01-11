export default function fileEncrypt(file) {

var CryptoJS = require("crypto-js");
 
var data = file;
 
// Encrypt 
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
 console.log(ciphertext);
// Decrypt 
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
console.log(decryptedData);

	return ciphertext; //Need to also return the original encrypted key
}