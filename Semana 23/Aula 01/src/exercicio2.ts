

export const checkOneEdit = (s1: string, s2: string): boolean | void => {
  if (!(s1.length === s2.length || s1.length === s2.length + 1 || s1.length === s2.length - 1))
    return false
  if (s1.length === s2.length)
    return check(s1, s2)
  else if (s1.length === s2.length - 1)
    return check(s1, s2)
  else if (s1.length === s2.length + 1)
      return check(s2, s1)
};

const check = (s1: string , s2: string): boolean => {
  for (let i = 0; i <= s1.length; i++){
    const s:string = newString(s2, i)
    if (s1.includes(s))
      return true
  }
  return false
}

const newString = (s1:string, i:number):string => {
  let s: Array<string> =s1.split('')
  s.splice(i , 1)
  return s.join('')
}

