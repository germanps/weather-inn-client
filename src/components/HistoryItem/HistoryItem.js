import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import Spinner from '../Spinner';
import { getItemIcon } from '../../utils/utils'
import WeatherIcons from 'react-weathericons'
import './HistoryItem.scss'

export default function HistoryItems({ searchItem }) {
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
                            <div className="history-item__wrapper">
                                <span className="history-item__wrapper--text city">{data.municipio.NOMBRE}</span>


                                <span className="history-item__wrapper--text degrees">
                                    <span className="history-item__wrapper--icon"><WeatherIcons name={getItemIcon(data.stateSky.id)} size="2x" /></span>
                                    <span>{`Máx: ${data.temperaturas.max}º`}</span>
                                    <span>{`Mín: ${data.temperaturas.min}º`}</span>
                                </span>
                            </div>
                        </li>
                    )
            }

        </>
    )
}
