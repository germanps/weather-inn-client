import React, { useState, useEffect, useCallback } from 'react';
import { useFetch } from '../../hooks/useFetch'
import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiComboBox } from '@elastic/eui'
import './WeatherSearch.scss'

let cities = []
// const allOptionsStatic = [
//     {
//         label: 'Barcelona',
//     },
//     {
//         label: 'Girona',
//     },
//     {
//         label: 'Lleida',
//     },
//     {
//         label: 'Tarragona',
//     }
// ];

export default function WeatherSearch() {

    const { loading, data } = useFetch('municipios')
    if (!loading) {
        cities = data
        console.log(cities)
    }

    const [allOptions, setAllOptions] = useState([]);
    const [selectedOptions, setSelected] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [options, setOptions] = useState([]);
    let searchTimeout;
    const onChange = (selectedOptions) => {
        setSelected(selectedOptions);
    };

    //Modify objects to keep shape required in Elastic ComboBox
    const modifyStates = () => {
        console.log('modifyStates');
        //debugger
        if (cities) {
            let obj = []
            cities.forEach(el => {
                const newObj = {
                    label: el.NOMBRE,
                    //CODPROV: el.CODPROV,

                }
                obj = [...obj, newObj]
            });
            setAllOptions(obj)
        }
    }

    useEffect(() => {
        modifyStates()
    }, [data])


    const onSearchChange = useCallback((searchValue) => {
        setLoading(true);
        setOptions([]);

        clearTimeout(searchTimeout);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        searchTimeout = setTimeout(() => {
            // Simulate a remotely-executed search.
            setLoading(false);
            setOptions(
                allOptions.filter((option) =>
                    option.label.toLowerCase().includes(searchValue.toLowerCase())
                )
            );
        }, 1200);
    }, [data]);

    useEffect(() => {
        // Simulate initial load.
        onSearchChange('');
    }, [onSearchChange, data]);



    return (
        <>
            <EuiFlexGroup className="weather-search">
                <EuiFlexItem className="weather-search__column">
                    <EuiSpacer />
                    <h3 className="subtitle">Selecciona una ciudad</h3>
                    <EuiComboBox
                        placeholder="Seleccionar ciudad"
                        async
                        options={options}
                        selectedOptions={selectedOptions}
                        isLoading={isLoading}
                        onChange={onChange}
                        onSearchChange={onSearchChange}
                        //onCreateOption={onCreateOption}
                        singleSelection={{ asPlainText: true }}
                    />
                </EuiFlexItem>
                <EuiFlexItem className="weather-search__column">
                    <EuiSpacer />
                    <h3 className="subtitle">Resultado</h3>
                    <p className="text">Card con el resultado...</p>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
        </>
    )
}
