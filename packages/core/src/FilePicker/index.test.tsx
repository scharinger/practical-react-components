import 'jest-styled-components'
import { expect, test, describe } from '@jest/globals'

import { FilePicker } from '.'
import { TestRender } from '../TestUtils'

const onClick = () => {
  /** */
}
describe('FilePicker', () => {
  test('FilePicker', () => {
    const tree1 = TestRender(
      <FilePicker
        onFileChange={onClick}
        variant="primary"
        label="Choose file"
      />
    )
    expect(tree1).toMatchSnapshot()
    const tree2 = TestRender(
      <FilePicker
        onFileChange={onClick}
        variant="primary"
        label="Choose file"
      />
    )
    expect(tree2).toMatchSnapshot()
  })
})
