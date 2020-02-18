

export const checkFirstRecurringLetter = (input: string): string | null => {
  let letters: { [index: string]: number } = {}
  for (const letter of input){
    if(letters[letter])
      return letter
    else
      letters[letter] = 1
    console.log()
  }
  return null;
};
