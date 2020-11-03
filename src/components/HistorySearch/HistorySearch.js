import React, { useCallback, useEffect, useState } from 'react'
import Spinner from '../../components/Spinner'
import HistoryItem from '../HistoryItem'
import { useQuery } from '@apollo/client'
import { GETUSERSEARCH } from '../../gql/userSearch'
import { decodeToken, getToken } from '../../utils/token'
import {
    EuiSpacer,
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
