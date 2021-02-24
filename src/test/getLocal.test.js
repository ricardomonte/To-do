import { expect, test } from '@jest/globals'
import getLocalProject from '../assets/getLocal'

test('return an array', () => {
  expect(getLocalProject('project')).toBeInstanceOf(Array)
})