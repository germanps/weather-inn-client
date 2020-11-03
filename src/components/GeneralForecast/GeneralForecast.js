import React from 'react'
import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui'
import PropTypes from 'prop-types'
import './GeneralForecast.scss'

export default function GeneralForecast({ weatherToday, weatherTomorrow }) {
    return (
        <>
            <EuiFlexGroup className="general-forecast">
                <EuiFlexItem className="general-forecast__column">

                    <h3 className="subtitle-low">Previsto para hoy</h3>
                    <p className="text">{weatherToday}</p>
                </EuiFlexItem>
                <EuiFlexItem className="general-forecast__column">

                    <h3 className="subtitle-low">Previsión para mañana</h3>
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
