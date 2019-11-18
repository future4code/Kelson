export function primeirasLetrasParaMaiusculas(frase) {
    let array = frase.split(" ")
    let new_word , letter, axi_word
    const alphbet = "abcdefghijklmnopqrstuvwxyz"
    const new_array = array.map( (word) =>{
        letter = word.charAt(0).toLowerCase()
        console.log(alphbet.includes(letter))
        if (alphbet.includes(letter))
            new_word = word.charAt(0).toUpperCase() + word.slice(1)
        else{
            axi_word = word
            axi_word.slice(1, 1)
            new_word = word.charAt(0) + word.charAt(1).toUpperCase() + word.slice(2)
        }

        return new_word
    } )
    return new_array.join(" ")
}
