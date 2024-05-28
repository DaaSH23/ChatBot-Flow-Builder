import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

const TextNode = ({ data }) => {
  return (
    <div className="text-node">
      <Handle type="target" position={Position.Left} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default TextNode;