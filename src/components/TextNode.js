// import React from 'react';
// import { Handle, Position } from 'react-flow-renderer';
// import "../App.css";

// const TextNode = ({ data }) => {
//   return (
//     <div className="text-node">
//       <Handle type="target" position={Position.Left} />
//       <div>
//         <span className="msgText">{data.label}</span>
//       </div>
//       <Handle type="source" position={Position.Right} />
//     </div>
//   );
// };

// export default TextNode;


import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import "../App.css";
import whatsApp from "../assests/whatsapp_5968841.png"

const TextNode = ({ data, id }) => {
  return (
    <div className="text-node">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-left`}
      />
      <div>
        <div className='nodeHeader'>
          <p className='nodeicon1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg></p>
          <p className='nodeText'>Send Message</p>
          <img className='nodeicon3' src={whatsApp} alt='whatappImg' />
        </div>
        <div className="msgText">{data.label}</div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-right`}
      />
    </div>
  );
};

export default TextNode;
