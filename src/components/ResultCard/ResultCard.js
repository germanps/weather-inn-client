import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {
    EuiCard,
    EuiIcon,
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';
import './ResultCard.scss'

export default function ResultCard({ search }) {
    const { label, codprov, idpob } = search ? search : {}
    const { loading, data } = useFetch(`provincias/${codprov}/municipios/${idpob}`)

    // const icons = [
    //     [  'cloudDrizzle' ],
    //     [ 'cloudSunny' ],
    //     [ 'cloudStormy' ],
    //     [  'snowflake' ],
    //     [  'currency' ],
    // ]

    // const getWeatherIcon = () => {
    //     const weather = data.stateSky;
    //     switch (true) {
    //         case weather <= 10:
    //             return icons[0]
    //         case weather <= 20:
    //             return icons[1]
    //         case weather <= 30:
    //             return icons[2]
    //         case weather <= 40:
    //             return icons[3]
    //         default:
    //             return icons[4]
    //     }
    // }



    return (
        <div className="result-card">
            {
                loading ?
                    (
                        <p>Selecciona una población</p>
                    ) : (
                        <EuiFlexItem>
                            <EuiCard
                                //icon={<EuiIcon size="l" type="devToolsApp" />}
                                textAlign="left"
                                className="weather-inn-card"
                                titleElement={'h4'}
                                title={`El tiempo en: ${label}`}
                                description={''}
                                children={
                                    <div className="weather-inn-card__body">
                                        <div>
                                            {`Hoy: ${data.stateSky.description}`}<span><EuiIcon size="m" type="devToolsApp" /></span>
                                        </div>
                                        <div>
                                            {`Temperatura: ${data.temperatura_actual}º`}
                                        </div>
                                    </div>
                                }
                                footer={

                                    <footer>Temperaturas
                                        <p>{`Máxima: ${data.temperaturas.max}º`}</p>
                                        <p>{`Mínima: ${data.temperaturas.min}º`}</p>
                                    </footer>

                                }
                            //description={<EuiIcon size="l" type="devToolsApp" />}

                            />

                        </EuiFlexItem>

                    )
            }
            {/* <button
                onClick={getWeatherIcon}
            >get</button> */}
        </div>
    )
}
