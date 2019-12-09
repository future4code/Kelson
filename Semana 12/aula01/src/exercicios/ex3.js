export function sorteiaNumero(min, max) {
    const NewValue = (Math.random() * (max-min)) + min
    return parseInt(NewValue)
}
