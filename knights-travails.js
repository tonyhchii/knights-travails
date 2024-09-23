const knight = () => {
  this.visited = new Array(8).fill(0).map(() => new Array(8).fill(0));
  const knightMovement = [
    [1, 2],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [2, 1],
    [-2, 1],
    [-2, -1],
    [2, -1],
  ];

  const knightMoves = (start, end) => {
    let totalMoves = 0;
    const queue = [[start, [start]]];
    while (queue.length > 0) {
      const currLvlSize = queue.length;
      for (let i = 0; i < currLvlSize; i++) {
        const [curr, path] = queue.shift();
        if (curr[0] == end[0] && curr[1] == end[1]) {
          return path;
        }

        knightMovement.forEach((arr) => {
          const newMove = curr.map((num, index) => {
            return num + arr[index];
          });
          if (
            newMove[0] > 0 &&
            newMove[0] < 8 &&
            newMove[1] > 0 &&
            newMove[1] < 8
          ) {
            if (visited[newMove[0]][newMove[1]] == 0) {
              visited[newMove[0]][newMove[1]] = curr;
              queue.push([newMove, path.concat([newMove])]);
            }
          }
        });
      }
      totalMoves += 1;
    }

    return totalMoves;
  };

  return {
    knightMoves,
  };
};

const test = knight();
const moves = test.knightMoves([1, 3], [3, 7]);
let moveString = "";
moves.forEach((move) => (moveString += `[${move}],`));
console.log(moveString);
