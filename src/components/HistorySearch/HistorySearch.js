import React, { useCallback, useEffect, useState } from 'react'
import Spinner from '../../components/Spinner'
import HistoryItem from '../HistoryItem'
import { useQuery } from '@apollo/client'
import { GETUSERSEARCH } from '../../gql/userSearch'
import { useFetch } from '../../hooks/useFetch'
import { decodeToken, getToken } from '../../utils/token'
import {
    EuiListGroup,
    EuiListGroupItem,
    EuiSpacer,
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';

export default function HistorySearch() {

    const [dataUserSearch, setDataUserSearch] = useState([])
    const { data, loading } = useQuery(GETUSERSEARCH, {
        variables: {
            idUser: decodeToken(getToken('token')).id
        }
    })

    if (loading) return null
    const { getUserSearch } = data

    //console.log(data);


    // const multipleFecth = async (codProv, idPob) => {
    //     const response = await fetch(`${BASE_URL}provincias/${codProv}/municipios/${idPob}`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             return data
    //         })
    //     setDataUserSearch(response)
    //     //return response
    // }

    // const callToApi = () => {
    //     getUserSearch.map((search, index) => {
    //         //multipleFecth(search.codprov, search.idpob)
    //     })
    // }



    return (


        <div className="history-search">
            {
                loading ?
                    (
                        <Spinner />
                    )
                    :
                    (
                        <EuiFlexGroup alignItems="center">
                            {/* <ul>
                                {
                                    getUserSearch.map((search, index) => (
                                        <li key={index}>{search.label}</li>
                                    ))
                                }
                            </ul> */}
                            <EuiFlexItem>
                                <EuiSpacer />
                                <ul className="history-search-list">
                                    {
                                        getUserSearch.map((search, index) => (
                                            <HistoryItem key={index} searchItem={search} />
                                        ))
                                    }
                                </ul>
                            </EuiFlexItem>


                        </EuiFlexGroup>

                    )
            }

        </div>
    )
}
