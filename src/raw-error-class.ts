export class RawError extends Error {}

if (require.main === module) {
  console.log(new RawError())
}
