import React from 'react'
import Header from '../components/Header'
import './LayoutBasic.scss'
import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle,
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