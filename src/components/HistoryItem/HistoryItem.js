import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import Spinner from '../Spinner';
import './HistoryItem.scss'

export default function ({ searchItem }) {
    const { loading, data } = useFetch(`provincias/${searchItem.codprov}/municipios/${searchItem.idpob}`)
    if (!loading) {
        console.log(data.stateSky);
    }

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
