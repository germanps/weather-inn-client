import React from 'react'
import { shallow } from 'enzyme'
import PropTypes from 'prop-types'
import GeneralForecast from '../../components/GeneralForecast'

describe('Test in <GeneralForecast />', () => {
    const weatherToday = ['today']
    const weatherTomorrow = ['tomorrow']
    test('should show the component correctly', () => {
        const wrapper = shallow(<GeneralForecast weatherToday={weatherToday} weatherTomorrow={weatherTomorrow} />)
        expect(wrapper).toMatchSnapshot()
    })

})

GeneralForecast.propTypes = {
    weatherToday: PropTypes.array.isRequired,
    weatherTomorrow: PropTypes.array.isRequired
}