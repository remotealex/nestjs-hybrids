import { property } from 'hybrids';

export const parse = (keyToParse: string, keyToAssign: string) =>
  property('', host => {
    host[keyToAssign] = JSON.parse(host[keyToParse]);
  });
