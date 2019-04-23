export function randomIn<E>(array: Array<E>) {
  return array[Math.floor(Math.random() * array.length)];
}