export function ordenarArrayEmOrdemCrescente(array) {
    let axi_change
    array.forEach((element, index) => {
        array.forEach((element2, index2) => {
            if (index < index2)
                if (element > element2) {
                    axi_change = element2
                    array[index2] = element
                    array[index2-1] = axi_change
                }
        })

    });
    return array
}
