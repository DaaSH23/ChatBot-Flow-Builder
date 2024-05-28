import React, { useContext } from 'react';
import { NodeContext } from '../context/FlowContext';

const SettingsPanel = () => {
  const { selectedNode, handleNodeChange } = useContext(NodeContext);

  if (!selectedNode) return null;

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
      <div className="settings-panel">
        <label>Text:</label>
        <input
          type="text"
          value={selectedNode.data.label}
          onChange={handleInputChange}
        />
      </div>
    </aside>
  );
};

export default SettingsPanel;