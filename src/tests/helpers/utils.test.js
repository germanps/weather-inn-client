import { getItemIcon } from '../../utils/utils'

//getItemIcon
describe('Test in getItemIcon', () => {
    test('should return a string', () => {
        const item = getItemIcon('rain')
        expect(typeof item === String)
    })

})
