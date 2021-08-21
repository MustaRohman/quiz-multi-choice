import './App.css';
import { Switch, Option } from './components/Switch';
import { useState } from 'react';

function App() {
  const [switchValue, setSwitchValue] = useState("test");
  return (
    <div className="App">
        <Switch value={switchValue} onChange={(value) => setSwitchValue(value)}>
          <Option value={"test"}>Impermeable  membrane </Option>
          <Option value={"test2"}>Test</Option>
          {/* <Option value={"test3"}>Test2</Option> */}
        </Switch>
      <main>

      </main>
    </div>
  );
}

export default App;
