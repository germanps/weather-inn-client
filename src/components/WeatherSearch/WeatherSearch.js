import React, { useState, useEffect } from 'react';
import ResultCard from '../ResultCard'
import { useFetch } from '../../hooks/useFetch'
import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiComboBox } from '@elastic/eui'
import './WeatherSearch.scss'
let cities = []

export default function WeatherSearch() {

    const { loading, data } = useFetch('municipios')
    if (!loading) {
        cities = data
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
        //console.log('modifyStates', cities.length);
        if (cities) {
            let obj = []
            cities.forEach(el => {
                const idCity = el.CODIGOINE.substring(0, 5)
                const newObj = {
                    label: el.NOMBRE,
                    codprov: el.CODPROV,
                    idpob: idCity
                }
                obj = [...obj, newObj]
                cities = obj
            });
            setOptions(cities)
            setAllOptions(cities)
        }
    }

    const onSearchChange = (searchValue) => {
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
        }, 1500);
    }

    useEffect(() => {
        modifyStates()
    }, [cities])

    return (
        <>
            <EuiFlexGroup className="weather-search">
                <EuiFlexItem className="weather-search__column">
                    <EuiSpacer />
                    <h3 className="subtitle">Selecciona una ciudad</h3>

                    <EuiComboBox
                        placeholder="Seleccionar ciudad"
                        async={true}
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
                    <ResultCard search={selectedOptions[0]} />
                </EuiFlexItem>
            </EuiFlexGroup>
        </>
    )
}
