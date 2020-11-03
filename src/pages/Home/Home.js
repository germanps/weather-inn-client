import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import GeneralForecast from '../../components/GeneralForecast'
import WeatherSearch from '../../components/WeatherSearch'
import Spinner from '../../components/Spinner'
import "./Home.scss"

export default function Home() {
    //fetch for general weather
    const { loading, data } = useFetch('home')
    const { today, tomorrow } = !!data && data
    const { p: weatherToday } = !!today && today
    const { p: weatherTomorrow } = !!tomorrow && tomorrow

    return (
        <div className="home">
            <WeatherSearch />
            {
                loading ?
                    (
                        <Spinner />
                    ) :
                    (
                        <>
                            <h2 className="subtitle">Previsión del tiempo en España</h2>
                            <GeneralForecast
                                weatherToday={weatherToday}
                                weatherTomorrow={weatherTomorrow}
                            />
                        </>
                    )

            }
        </div>
    )
}
