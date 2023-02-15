const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = letters.length;
      const numCols = letters[0].length;
      for (let i = 0; i < numCols; i++) {
        let col = '';
        for (let j = 0; j < verticalJoin; j++) {
          col += letters[j][i];
        }
        if (col.includes(word)) {
            return true;
        }
    
}
return false;};


module.exports = wordSearch;


