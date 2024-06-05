import React, { useContext, useCallback, useMemo } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap, ReactFlowProvider } from 'react-flow-renderer';
import TextNode from "./TextNode";
import { NodeContext } from '../context/FlowContext';
import "../App.css";

let id = 1;

const FlowBuilder = () => {
  const nodeTypes = useMemo(
    () => ({
      textNode: (node) => <TextNode id={node.id} data={node.data} />,
    }),
    []
  );

  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange, setSelectedNode, setPanelChange } = useContext(NodeContext);

  // Callback function for handling connection between two nodes
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds))
      console.log(params)
    },
    [setEdges]
  );

  // Handle drag over event to allow dropping
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    console.log(event)
  }, []);

  // Handle drop event to add new nodes
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = event.target.getBoundingClientRect();
      const nodeType = event.dataTransfer.getData('application/reactflow');

      console.log(event);
      // Get node data/type from dataTransfer
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };
      console.log("NodeType", nodeType);

      const newNode = {
        id: `${nodeType}_${id}`,
        type: nodeType,
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
      setPanelChange(true);
      setNodes((prevNodes) =>
        prevNodes.map((n) => (n.id === node.id ? updatedNode : n))
      );
      console.log("Update node from FlowBuilder", updatedNode);
    },
    [setNodes, setSelectedNode, setPanelChange]
  );

  return (
    <div className="flow-builder">
    <ReactFlowProvider>
    <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDoubleClick={handleNodeDoubleClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        // nodesDraggable
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
    </div>
  );
};

export default FlowBuilder;
