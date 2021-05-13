function test(target: any, proertyKey: string, desriptor: PropertyDescriptor) {
  // console.log(target)
  // console.log(proertyKey)
  // console.log(desriptor)
  desriptor.get = () => {
    return desriptor.value + 'aaaaaaaaaaaaaaa'
  }
}
class Person {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  @test
  public get _name(): string {
    return this.name
  }
  public set _name(v: string) {
    this.name = v
  }
}
let person = new Person('zs')
console.log(person)