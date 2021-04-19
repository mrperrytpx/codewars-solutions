// EXAMPLE INPUT
const input1 = "dot"; // result -> ".... .... . ..... .... ... .... ...."

// SOLUTION
function tapCodeTranslation(text) {
    text = [...text.toUpperCase()];
    let grid = [["A","B","C","D","E"],
                ["F", "G", "H", "I", "J"],
                ["L", "M", "N", "O", "P"],
                ["Q", "R", "S", "T", "U"],
                ["V", "W", "X", "Y", "Z"]];
    text = text.map(letter => {
      if (letter === "K") return [1, 3];
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === letter) return [i+1, j+1]
        }
      }
    });
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].map(num => ".".repeat(num));
    }
    return text.flat().join(" ");
}

console.log(tapCodeTranslation(input1));

// REFACTORED
const tapCodeTranslation = (text) => {
    let grid = [["A","B","C","D","E"],
                ["F", "G", "H", "I", "J"],
                ["L", "M", "N", "O", "P"],
                ["Q", "R", "S", "T", "U"],
                ["V", "W", "X", "Y", "Z"]];
    text = [...text.toUpperCase()].map(letter => {
      if (letter === "K") return [". ..."];
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === letter) return `${".".repeat(i+1)} ${".".repeat(j+1)}`;
        }
      }
    });
    return text.join(" ");
}
