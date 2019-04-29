export function randomIn<E>(array: Array<E>): E {
  return array[Math.floor(Math.random() * array.length)];
}