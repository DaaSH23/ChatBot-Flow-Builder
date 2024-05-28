import React, { useContext, useCallback } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';
import TextNode from "./TextNode";
import { NodeContext } from '../context/FlowContext';

let id = 1;

const nodeTypes = {
  textNode: TextNode,
};

const FlowBuilder = () => {
  const { nodes, setNodes, edges, setEdges, setSelectedNode } = useContext(NodeContext);

  // Callback function for handling connection between two nodes
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

    // Handle drag over event to allow dropping
    const onDragOver = useCallback((event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    }, []);

  // Handle drop event to add new nodes
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = event.target.getBoundingClientRect();
      const nodeData = event.dataTransfer.getData('application/reactflow');
      // Get node data/type from dataTransfer
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };
      console.log("NodeData", nodeData);

      const newNode = {
        id: `$node_${id}`,
        type: 'node',
        position,
        data: { label: `test message ${id}` },
      };
      id++;
      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes]
  );

  // Handle double-click event on a node
  const handleNodeDoubleClick = useCallback(
    (event, node) => {
      const updatedNode = {
        ...node,
        data: {
          ...node.data,
          label: node.data.label || '',
        },
      };
      setSelectedNode(updatedNode);
      setNodes((prevNodes) =>
        prevNodes.map((n) => (n.id === node.id ? updatedNode : n))
      );
      console.log("Update node from FlowBuilder", updatedNode);
    },
    [setNodes, setSelectedNode]
  );

  return (
    <div className="flow-builder" style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodeDoubleClick={handleNodeDoubleClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowBuilder;