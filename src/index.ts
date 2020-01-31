import { CustomError } from './custom-error-class'
import { RawError } from './raw-error-class'
import { SimpleError } from './simple-error-class'

console.log(new RawError())
console.log(new SimpleError())
console.log(new CustomError())
