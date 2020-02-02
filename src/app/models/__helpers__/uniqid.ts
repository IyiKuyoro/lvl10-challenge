import shortid from 'shortid';

export function uniqid(): string {
  return shortid.generate();
}
