export function sum(a:number, b:number): number{
    return a + b
}

export function sample<T>(arr: T[]): T{
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}