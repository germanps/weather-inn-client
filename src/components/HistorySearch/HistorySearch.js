import React from 'react'
import './HistorySearch.scss'
import Spinner from '../../components/Spinner'
import HistoryItem from '../HistoryItem'
import { useQuery } from '@apollo/client'
import { GETUSERSEARCH } from '../../gql/userSearch'
import { decodeToken, getToken } from '../../utils/token'
import {
    EuiFlexGroup,
    EuiFlexItem,
} from '@elastic/eui';

export default function HistorySearch() {

    const { data, loading } = useQuery(GETUSERSEARCH, {
        variables: {
            idUser: decodeToken(getToken('token')).id
        }
    })

    if (loading) return null
    const { getUserSearch } = data
    console.log(getUserSearch);

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
                            <EuiFlexItem>
                                {getUserSearch.length <= 0 ?
                                    <span className="sr-only">Historial de búsquedas, elige una opción</span>
                                    :
                                    <h2 className="subtitle">Últimas busquedas</h2>
                                }
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
