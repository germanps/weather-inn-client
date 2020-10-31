import React from 'react'
import { EuiText, EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui'
import { getDay } from '../../utils/utils'
import PropTypes from 'prop-types'
import './GeneralForecast.scss'

export default function GeneralForecast({ weatherToday, weatherTomorrow }) {
    return (
        <>
            <EuiFlexGroup className="general-forecast">
                <EuiFlexItem className="general-forecast__column">
                    <EuiSpacer />
                    <h3 className="subtitle">Previsto para hoy</h3>
                    <p className="text">{weatherToday}</p>
                </EuiFlexItem>
                <EuiFlexItem className="general-forecast__column">
                    <EuiSpacer />
                    <h3 className="subtitle">Previsión para mañana</h3>
                    <p className="text">{weatherTomorrow}</p>
                </EuiFlexItem>

            </EuiFlexGroup>
        </>
    )
}

GeneralForecast.propTypes = {
    weatherToday: PropTypes.array,
    weatherTomorrow: PropTypes.array
}
