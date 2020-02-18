/**
 *a) declarando um array multidimencinal
 */

export const changeMatriz = (matriz: Array<Array<any>>, linha: number, coluna: number, valor: any ): Array<Array<any>> | string => {
  if (linha < 0 || linha > matriz.length || coluna < 0 || coluna > matriz[1].length)
    return "Fora do intervalo da matriz"
  matriz[linha][coluna] = valor
  return matriz;
};
