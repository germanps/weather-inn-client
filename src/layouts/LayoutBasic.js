import React from 'react'
import Header from '../components/Header'
import PropTypes from 'prop-types'
import './LayoutBasic.scss'
import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
} from '@elastic/eui';

export default function LayoutBasic(props) {
    const { children } = props
    return (
        <>
            <Header />
            <EuiPage>
                <EuiPageBody component="div">
                    <EuiPageContent>
                        <EuiPageContentBody>
                            {children}
                        </EuiPageContentBody>
                    </EuiPageContent>
                </EuiPageBody>
            </EuiPage>
        </>
    )
}

LayoutBasic.propTypes = {
    children: PropTypes.object,
}
