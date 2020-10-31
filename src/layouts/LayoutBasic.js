import React from 'react'
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
            <header>
                <h1>HEADER</h1>
            </header>
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