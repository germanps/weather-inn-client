import React from 'react';
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import './App.scss';
import {
  EuiButton,
  EuiFlexItem
} from '@elastic/eui';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>App.js</h1>
        <p>Teting elastic UI...</p>
        <EuiFlexItem grow={false}>
          <EuiButton
            color="secondary"
            fill onClick={() => { console.log('click!!'); }}
          >
            Primary
            </EuiButton>
        </EuiFlexItem>
      </div>
    </ApolloProvider>
  );
}