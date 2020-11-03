import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useMutation } from '@apollo/client'
import { USERSEARCH } from '../../gql/userSearch'
import { decodeToken, getToken } from '../../utils/token'
import { getItemIcon } from '../../utils/utils'
import WeatherIcons from 'react-weathericons'
import {
    EuiCard,
    EuiIcon,
    EuiFlexItem,
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
                                            {`Hoy: ${data.stateSky.description}`}
                                            <span><WeatherIcons name={getItemIcon(data.stateSky.id)} size="2x" /></span>
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
                            />
                        </EuiFlexItem>
                    )
            }
        </div>
    )
}
