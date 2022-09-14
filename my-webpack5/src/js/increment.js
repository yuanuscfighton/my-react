export default function sum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}
