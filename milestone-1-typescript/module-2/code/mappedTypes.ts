type User = {
  name : string,
  age: number,
}

type OptionalUser = {
  [k in keyof User]? : User[k]
}

type Area = {
  height : number,
  width: number,
}

type mappedArea<T> = {
  [k in keyof T] : T[k]
}


const area : mappedArea<{height: number, width: number}> = {
  height: 50,
  width: 40,
}