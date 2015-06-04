Array.prototype.elementIncluded = function(element) {
	return this.indexOf(element) > -1;
};

Array.prototype.getLastElement = function() {
	return this[this.length - 1];
};

Array.prototype.deleteAt = function(index) {
	return this.splice(index, 1);
};

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
}
