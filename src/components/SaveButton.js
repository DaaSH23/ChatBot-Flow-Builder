import React, { useContext } from 'react';
import { NodeContext } from '../context/FlowContext';

const SaveButton = () => {
  const { nodes, edges } = useContext(NodeContext);

  const validateFlow = () => {
    const targetHandles = edges.map((edge) => edge.target);
    const nodesWithNoTargets = nodes.filter((node) => !targetHandles.includes(node.id));
    if (nodesWithNoTargets.length > 1) {
      alert('Error: More than one node has empty target handles.');
    } else {
      alert('Flow is valid!');
    }
  };

  return <button onClick={validateFlow}>Save Flow</button>;
};

export default SaveButton;