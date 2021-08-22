import './App.css';
import { Toggle, Option } from './components/Toggle';
import { useState } from 'react';

function App() {
  const [switchValue, setSwitchValue] = useState("test");
  return (
    <div className="App">
        <Toggle value={switchValue} onChange={(value) => setSwitchValue(value)}>
          <Option value={"test"}>Impermeable  membrane </Option>
          <Option value={"test2"}>Test</Option>
          <Option value={"test3"}>Test2</Option>
        </Toggle>
        <Toggle value={switchValue} onChange={(value) => setSwitchValue(value)}>
          <Option value={"test"}>Impermeable  membrane </Option>
          <Option value={"test2"}>Test</Option>
          {/* <Option value={"test3"}>Test2</Option> */}
        </Toggle>
        <p>TESTING</p>
        <p>TESTING</p>
    </div>
  );
}

export default App;
