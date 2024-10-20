import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import DI from '../../../../DI/ioc'
import Select from 'react-select';
import LongCalcView from '../LongCalc/LongCalcView';
export default function CalculatorView() {
    let navigate = useNavigate();
    const { options,
        selectedOption,
        handleFolderSelect,
        handleOptionSelect } = DI.resolve("CalculatorViewModel")

//    useEffect(() => {
//        getProducts()
//    }, [])

    return (<div>
      <input
        type="file"
        webkitdirectory="true"
        directory="true"
        multiple
        onChange={handleFolderSelect}
      />
      <Select
        value={selectedOption}
        onChange={handleOptionSelect}
        options={options}
      />
        <LongCalcView />
    </div>);
}