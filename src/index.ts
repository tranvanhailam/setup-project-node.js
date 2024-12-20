type Handle = () => Promise<string>
const fullName = 'Tran Van Hai Lam'
const handle: Handle = () => Promise.resolve(fullName)
handle().then((resolve) => {
  console.log(resolve)
})

const myName: string = 'Tran Van Hai Lam'
console.log(myName)

const person: { fullName: string } = { fullName: 'Tran Lam' }
console.log(person)
