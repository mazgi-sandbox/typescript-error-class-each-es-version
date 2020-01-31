export class CustomError extends Error {
  constructor(message?: string) {
    super(message)
    Object.defineProperty(this, 'name', {
      get: () => this.constructor.name
    })
    Object.defineProperty(this, 'message', {
      get: () => message
    })
    Error.captureStackTrace(this, this.constructor)
  }
}

if (require.main === module) {
  console.log(new CustomError())
}
