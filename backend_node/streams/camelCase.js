const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    let data = chunk.toString();

    data.split(' ').map((word, index) => {
      index === 0 
        ? this.push(word.toLowerCase())
        : this.push(word.charAt(0).toUpperCase() + word.slice(1));
    });

    // .join('') Se podia devolver el array de map ya con las palabras modificadas y juntar estas con .join.
    /* 
    data =  data.split(' ').map((word, index) => {
      return index === 0 
        ? word.toLowerCase();
        : word.charAt(0).toUpperCase() + word.slice(1);
    });
    let texto = data.join('');
    this.push(texto);
    */

    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);