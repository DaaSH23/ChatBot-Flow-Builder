import React, { createContext, useState } from 'react';

export const NodeContext = createContext();

export const NodeProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeChange = (updatedNode) => {
    console.log("Updated node from Apps", updatedNode);
    setNodes((nds) =>
      nds.map((node) => (node.id === updatedNode.id ? updatedNode : node))
    );
    setSelectedNode(updatedNode);
  };

  const contextValue = {
    nodes,
    setNodes,
    edges,
    setEdges,
    selectedNode,
    setSelectedNode,
    handleNodeChange,
  };

  return (
    <NodeContext.Provider value={contextValue}>{children}</NodeContext.Provider>
  );
};