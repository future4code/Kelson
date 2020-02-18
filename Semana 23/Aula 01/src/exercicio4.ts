/**
 *a) declarando um array multidimencinal
 */

export const printMatriz = (matriz: Array<Array<any>>): void => {
  console.table(matriz)
};

export const addMatriz = (m1: Array<Array<number>>, m2: Array<Array<number>>): Array<Array<number>> | void=> {
  let m: Array<Array<number>> = [[]]
  if (m1[0].length !== m2[0].length || m1.length !== m2.length)
    return console.log("Não é possivel somar as Matrizes.")
  for (let row = 0; row < m1[0].length; row++){
    for(let column = 0; column < m1[0].length; column++){
      m[row][column] = m1[row][column] + m2[row][column]
    }
  }
  return m
};

export const TransportMatriz = (m1: Array<Array<number>>,): Array<Array<number>> | void=> {
  let m: Array<Array<number>> = [[]]
  for (let row = 0; row < m1[0].length; row++){
    for(let column = 0; column < m1[0].length; column++){
      m[row][column] = m1[column][row]
    }
  }
  return m
};

