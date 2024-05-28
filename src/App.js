import React from 'react';
import './App.css';
import NodePanel from './components/NodePanel';
import FlowBuilder from './components/FlowBuilder';
import SettingsPanel from './components/SettingsPanel';
import SaveButton from './components/SaveButton';
import { NodeProvider } from './context/FlowContext';


function App() {

  return (
    <NodeProvider>
      <div className="app">
        <NodePanel />
        <FlowBuilder />
        <SettingsPanel />
        <SaveButton />
      </div>
    </NodeProvider>
  );
}

export default App;
