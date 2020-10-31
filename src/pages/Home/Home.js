import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import GeneralForecast from '../../components/GeneralForecast'
import Spinner from '../../components/Spinner'
import "./Home.scss"

export default function Home() {

    //const { loading, data } = useFetch('provincias/08')
    //fetch for general weather
    const { loading, data } = useFetch('home')
    const { today, tomorrow } = !!data && data
    const { p: weatherToday } = !!today && today
    const { p: weatherTomorrow } = !!tomorrow && tomorrow

    console.log(data);

    return (
        <div className="home">
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
    )
}
