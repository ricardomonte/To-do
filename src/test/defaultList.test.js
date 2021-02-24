import { expect, test } from '@jest/globals';
import defaultList from '../assets/defaultList';

test('return an ul element', () => {
  const ulElement = defaultList();
  
  expect(ulElement.tagName).not.toBe('DIV')
  expect(ulElement.tagName).toBe('UL')
})