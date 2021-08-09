import './App.css';
import { Switch, Option } from './components/Switch';
import { useState } from 'react';

function App() {
  const [switchValue, setSwitchValue] = useState("test");
  return (
    <div className="App">
      <header className="App-header">
        <Switch value={switchValue} onChange={(value) => setSwitchValue(value)}>
          <Option value={"test"}>Test</Option>
          <Option value={"test2"}>Test</Option>
        </Switch>
      </header>
    </div>
  );
}

export default App;
