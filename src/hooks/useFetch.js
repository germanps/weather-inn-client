import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from '../utils/constanst'

export const useFetch = (params) => {

    //cancelar subscripciones
    //mantiene la referencia al componente siempre que esté montado 
    const isMounted = useRef(true)

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        //cancelar subscripción (cuando el componente se desmonta)
        return () => {
            //cleanup
            isMounted.current = false
        }
    }, [])


    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(`${BASE_URL}${params}`)
            .then(resp => resp.json())
            .then(data => {

                //llamar al componente(setState) de forma segura únicamente cuando esté montado
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } else {
                    console.log('Avoid component rendering...')
                }

            })

        //se ejecutará cuando el url cambie
    }, [params])

    return state
}

