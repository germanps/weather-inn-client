import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import Spinner from '../Spinner';
import { getItemIcon } from '../../utils/utils'
import WeatherIcons from 'react-weathericons'
import './HistoryItem.scss'

export default function ({ searchItem }) {
    const { loading, data } = useFetch(`provincias/${searchItem.codprov}/municipios/${searchItem.idpob}`)

    return (
        <>
            {
                loading ?
                    (
                        <Spinner />
                    ) :
                    (
                        <li className="history-item">
                            <p>
                                {data.municipio.NOMBRE}
                                {data.stateSky.description}
                                <WeatherIcons name={getItemIcon(data.stateSky.id)} size="2x" />
                            </p>
                            <p>
                                {`Máxima: ${data.temperaturas.max}º`}
                                {`Mínima: ${data.temperaturas.min}º`}
                            </p>
                        </li>
                    )
            }

        </>
    )
}
