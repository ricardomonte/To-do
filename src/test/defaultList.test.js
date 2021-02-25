import defaultList from '../js/defaultList';

test('return an ul element', () => {
  const ulElement = defaultList();

  expect(ulElement.tagName).not.toBe('DIV');
  expect(ulElement.tagName).toBe('UL');
});