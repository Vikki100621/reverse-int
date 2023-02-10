module.exports = function reverse(n) {
   n = Math.abs(n).toString();
   n = [...n].reverse().join("");
   return n;
}
