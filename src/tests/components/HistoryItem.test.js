import React from 'react'
import { shallow } from 'enzyme'
import PropTypes from 'prop-types'
import HistoryItem from '../../components/HistoryItem'

describe('Test in <HistoryItem />', () => {
    const searchItem = { codprov: 'prov', idpob: 'pob' }
    test('should show the component correctly', () => {
        const wrapper = shallow(<HistoryItem searchItem={searchItem} />)
        expect(wrapper).toMatchSnapshot()
    })

})

HistoryItem.propTypes = {
    weatherToday: PropTypes.object,
}