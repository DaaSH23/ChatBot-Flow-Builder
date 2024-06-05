import React, { useContext } from 'react';
import { NodeContext } from '../context/FlowContext';
import { toast } from 'react-toastify';

const SaveButton = () => {
  const { nodes, edges } = useContext(NodeContext);

  const validateFlow = () => {
    const targetHandles = edges.map((edge) => edge.target);
    const nodesWithNoTargets = nodes.filter((node) => !targetHandles.includes(node.id));
    if (nodesWithNoTargets.length > 1) {
      toast.error('Error, Cannot Save Flow !');
    } else {
      toast.success('Success, Flow Saved !');
    }
  };

  return(
    <div className='Navbar'>
      <button className='saveButton' onClick={validateFlow}>Save Changes</button>
    </div>
  ) 
};

export default SaveButton;