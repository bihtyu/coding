// https://bigfrontend.dev/problem/create-lazyman

// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */

 class Lazy {
  constructor(name, logFn) {
    this.name = name
    this.logFn = logFn
    this.heightStack = []
    this.stack = []
    this.sayHi()

    setTimeout(() => {
      this.goOn()
    }, 0)
  }

  sayHi() {
    this.stack.push({
      fn: 'sayHi'
    })
    return this
  }

  eat(food) {
    this.stack.push({
      fn: 'eat',
      param: food
    })
    return this
  }

  sleep(time) {
    this.stack.push({
      fn: 'sleep',
      param: time
    })
    return this
  }

  sleepFirst(time) {
    this.heightStack.unshift({
      fn: 'sleepFirst',
      param: time
    })
    return this
  }

  async goOn() {
    const top = this.heightStack.shift() || this.stack.shift()
    if (!top) return
  
    switch(top.fn) {
      case 'sayHi': {
        this.logFn(`Hi, I'm ${this.name}.`)
        this.goOn()
        break
      }
      case 'eat': {
        this.logFn(`Eat ${top.param}.`)
        this.goOn()
        break
      }
      case 'sleep':
      case 'sleepFirst':
      {
        setTimeout(() => {
          this.logFn(`Wake up after ${top.param} seconds.`)
          this.goOn()
        }, top.param * 1000)
        break
      }
    }
  }
}

function LazyMan(name, logFn) {
  return new Lazy(name, logFn)
}


// LazyMan('Jack', console.log).eat('banana').sleep(4).eat('apple')
LazyMan('Jack', console.log).eat('banana').sleepFirst(1).eat('apple').sleep(1).eat('rice')