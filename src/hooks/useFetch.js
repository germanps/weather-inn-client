import { useState, useEffect, useRef } from 'react'
import { BASE_URL } from '../utils/constanst'

export const useFetch = (params) => {
    // const checkParams = params.indexOf("undefined");
    // if (checkParams !== -1) return

    //cancel subscriptions
    //keep the reference to component when is mounted
    const isMounted = useRef(true)

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        //keep the reference to component when is mounted
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

                //call to component(setState) safety
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

