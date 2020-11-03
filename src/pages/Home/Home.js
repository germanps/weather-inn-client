import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import GeneralForecast from '../../components/GeneralForecast'
import HistorySearch from '../../components/HistorySearch'
import WeatherSearch from '../../components/WeatherSearch'
import Spinner from '../../components/Spinner'
import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui'
import "./Home.scss"

export default function Home() {
    //fetch for general weather
    const { loading, data } = useFetch('home')
    const { today, tomorrow } = !!data && data
    const { p: weatherToday } = !!today && today
    const { p: weatherTomorrow } = !!tomorrow && tomorrow

    return (
        <div className="home">
            <div className="row-inn">
                <h2 className="title">Consulta el tiempo en tu ciudad</h2>
                <WeatherSearch />
            </div>

            <div className="row-inn">
                <h2 className="title">Últimas busquedas</h2>
                <HistorySearch />
            </div>

            <div className="row-inn">

                <h2 className="title">Previsión del tiempo en España</h2>
                {
                    loading ?
                        (
                            <Spinner />
                        ) :
                        (
                            <GeneralForecast
                                weatherToday={weatherToday}
                                weatherTomorrow={weatherTomorrow}
                            />
                        )

                }
            </div>
        </div>
    )
}
