/**
 *a) declarando um array multidimencinal
 */

export const findImparNumbersInMatrix = (m: number[][]): number => {
  let count = 0;
  for (let row = 0; row < m[0].length; row++){
    for(let column = 0; column < m[0].length; column++){
      if (m[row][column]%2 === 1)
        count++
    }
  }
  return count;
};
