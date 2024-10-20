import { useState } from "react"
//import { useCounterState } from './SharedState';
import { useCounterState } from './SharedState';
export default function CalculatorViewModel() {
    const [options, setOptions] = useState([]);
    //const [selectedOption, setSelectedOption] = useState(sharedStates.selectedOption)
    //const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption, setSelectedOption] = useCounterState();
   async function handleFolderSelect(event) {
    const files = event.target.files;
    const newOptions = Array.from(files).map(file => ({
      value: file.name,
      label: file.name
    }));
    setOptions(newOptions);
  };

    async function handleOptionSelect(selected){
    setSelectedOption(selected);
    if (selected) {
      try {
          const response = await fetch("members");
              if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
          console.log("await response data");
          const data = await response.json();
          console.log( data);
      }catch(error) {
        console.log('Error fetching data:', error);
        //console.log('Response:', await response.text());
    }


      const text = "testdata"; // Get the raw text
      console.log('Raw response:', text); // Log the raw response
      //const data = JSON.parse(text); // Try to parse it as JSON
      setSelectedOption(selected);

  }
};
        return {options,
        selectedOption,
        handleFolderSelect,
        handleOptionSelect
    }
}