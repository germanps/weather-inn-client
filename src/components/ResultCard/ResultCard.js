import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useMutation } from '@apollo/client'
import { USERSEARCH } from '../../gql/userSearch'
import { decodeToken, getToken } from '../../utils/token'
import { getItemIcon } from '../../utils/utils'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
    EuiCard,
    EuiFlexItem,
    EuiSpacer
} from '@elastic/eui';
import './ResultCard.scss'

export default function ResultCard({ search }) {
    const { label, codprov, idpob } = search ? search : {}
    const { loading, data } = useFetch(`provincias/${codprov}/municipios/${idpob}`)

    const [userSearch] = useMutation(USERSEARCH)

    //saves search in DB
    const saveSearch = async () => {
        const newRegister = await label
        if (!newRegister) return
        try {
            await userSearch({
                variables: {
                    input: {
                        idUser: decodeToken(getToken('token')).id,
                        label,
                        codprov,
                        idpob,
                    }
                }
            })
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        saveSearch()
    }, [search])



    return (
        <div className="result-card">
            {
                loading ?
                    (
                        <h3 className="sr-only">Elige una población en el buscador</h3>
                    ) : (
                        <EuiFlexItem>
                            <h3 className="subtitle">Resultado de búsqueda</h3>
                            <EuiCard
                                //icon={<EuiIcon size="l" type="devToolsApp" />}
                                textAlign="left"
                                className="weather-inn-card"
                                titleElement={'h4'}
                                title={
                                    <span className="weather-inn-card__header">
                                        <span className="weather-inn-card__header--title">{label}</span>
                                        <span className="weather-inn-card__header--degrees">{data.temperatura_actual}º</span>
                                    </span>
                                }
                                description={

                                    <span className="weather-inn-card__description">
                                        <span className="weather-inn-card__description--icon"><WeatherIcons name={getItemIcon(data.stateSky.description)} size="2x" /></span>
                                        <span className="weather-inn-card__description--description">{data.stateSky.description}</span>
                                    </span>

                                }
                                children={
                                    <span className="weather-inn-card__body">
                                        <span className="weather-inn-card__body--degrees">
                                            <span className="max">{`Máxima: ${data.temperaturas.max}º`}</span>
                                            <span className="min">{`Mínima: ${data.temperaturas.min}º`}</span>
                                        </span>
                                        <span className="weather-inn-card__body--forecast">Probabilidad de lluvia: {data.proximos_dias[0].prob_precipitacion[0]}%</span>
                                    </span>
                                }
                            />
                            <EuiSpacer />
                        </EuiFlexItem>
                    )
            }
        </div>
    )
}

ResultCard.propTypes = {
    search: PropTypes.object,
}
