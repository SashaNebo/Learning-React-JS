class T_01 {
  name: string = ''
}

class T_02 extends T_01 {
  email: string = ''
}

const obj_02 = new T_02()
console.log(obj_02)

class T_03 extends T_02 {
  logData(): void {
    console.log(`Name: ${this.name}, Email: ${this.email}`)
  }
}

const obj_03 = new T_03()
obj_03.name = 'Alex'
obj_03.email = 'alex123@com'
obj_03.logData()

class T_04 extends T_01 {
  email: string = ''
  constructor(name: string, email: string) {
    super()
    this.name = name
    this.email = email
  }
  logData(): void {
    console.log(`Name: ${this.name}, Email: ${this.email}`)
  }
  retData(): string {
    return `Name: ${this.name}, Email: ${this.email}`
  }
}

const obj_04 = new T_04('Ilya', 'ilya123@com')
obj_04.logData()

class T_05 extends T_04 {
  age: number = 0
  constructor(name: string, email: string, age: number) {
    super(name, email)
    this.age = age
  }

  // logData(): void {
  //   console.log(`Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`)
  // }

  logData(): void {
    super.logData()
    console.log(`Age: ${this.age}`)
  }

  // retData(): string {
  //   return `Name: ${this.name}, Email: ${this.email} Age: ${this.age}`
  // }

  retData(): string {
    const s = super.retData()
    return `${s} Age: ${this.age}`
  }
}
const obj_05 = new T_05('A', 'B', 20)
obj_05.logData()
console.log(obj_05.retData())
