export function randomIn<E>(array: E[]): E {
  return array[Math.floor(Math.random() * array.length)];
}