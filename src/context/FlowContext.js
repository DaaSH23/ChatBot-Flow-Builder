import React, { createContext, useState } from 'react';
import { useNodesState, useEdgesState } from 'react-flow-renderer';


export const NodeContext = createContext();

export const NodeProvider = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showPanel, setPanelChange] = useState(false);

  const handleNodeChange = (updatedNode) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === updatedNode.id ? updatedNode : node))
    );
    setSelectedNode(updatedNode);
  };

  const contextValue = {
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange,
    selectedNode,
    setSelectedNode,
    handleNodeChange,
    showPanel,
    setPanelChange,
  };

  return (
    <NodeContext.Provider value={contextValue}>{children}</NodeContext.Provider>
  );
};
