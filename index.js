module.exports = Phrase;

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
    return this.letters().toLowerCase();
  };

  this.isPalindrome = function () {
    return this.processedContent() === this.processedContent().reverse();
  };

  this.letters = function () {
    const letterRegex = /[a-z]/gi;
    let t = this.content.match(letterRegex) || [];
    return t.join("");
  };
}
