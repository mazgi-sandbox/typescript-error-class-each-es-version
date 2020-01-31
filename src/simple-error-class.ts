export class SimpleError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = new.target.name
  }
}

if (require.main === module) {
  console.log(new SimpleError())
}
