export function removeItensDuplicados(array) {
    array.forEach((element, index) => { 
        array.forEach((element2, index2) => {
            if (index < index2)
                if (element === element2){ 
                    array.splice(index2, 1)
                }
        }) 
        
    }); 
    return array
}
