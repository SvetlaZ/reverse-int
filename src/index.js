module.exports = function reverse (n) {
    n = Math.abs(n);
    let m = '';
    let count = String(n).length;
    for (let i = 0; i < count; i++) {
        m += n % 10;
        n = Math.floor(n / 10); 
    }
      return m;
  }
