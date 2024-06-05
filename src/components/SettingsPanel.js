import React, { useContext } from 'react';
import { NodeContext } from '../context/FlowContext';

const SettingsPanel = () => {
  const { selectedNode, handleNodeChange, setPanelChange, showPanel } = useContext(NodeContext);

  console.log(showPanel);
  if (!selectedNode || !showPanel) return null;

  const handlePanelChange = (event) => {
    setPanelChange(false);
  };

  const handleInputChange = (e) => {
    const updatedNode = {
      ...selectedNode,
      data: {
        ...selectedNode.data,
        label: e.target.value,
      },
    };
    console.log("Updated Node from Setting", updatedNode);
    handleNodeChange(updatedNode);
  };

  return (
    <aside>
      <div className='settingHeader'>
        <p className='backButton' onClick={handlePanelChange}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </p>
        <p className='msgText1'>
          Message
        </p>
      </div>
      <div className="settings-panel">
        <label>Text</label>
        <textarea
        className='SettingtextArea'
        rows="4" cols="30"
          value={selectedNode.data.label}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </aside>
  );
};

export default SettingsPanel;