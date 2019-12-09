export function checaPalindromo(frase) {
    const splitString = frase.split("")
    const reverseArr = splitString.reverse() 
    const reverse = reverseArr.join("")

    if (frase === reverse)
        return true
    return false
}
