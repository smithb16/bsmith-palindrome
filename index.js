// Reverses a string
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

String.prototype.isBlank = function () {
  return !this.match(/\S+/);
};

Array.prototype.last = function () {
  return this.slice(-1)[0];
};

// Create Phrase object
function Phrase(content) {
  this.content = content;

  this.processedContent = function () {
    return this.content.toLowerCase();
  };

  this.isPalindrome = function () {
    return this.processedContent() === this.processedContent().reverse();
  };
}

let blank = "";
let notBlank = "words";
console.log("blank.isBlank(): ", blank.isBlank());
console.log("notBlank.isBlank(): ", notBlank.isBlank());

let a = [1, 2, 3, 4];
console.log("a.last(): ", a.last());
