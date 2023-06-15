// https://react-svgr.com/playground/
import * as React from 'react'

const NotionAvatar = (props) => (
  <svg
    style={{
      justifyContent: 'center',
      alignSelf: 'center',
      transform: 'scale(-1,1)'
    >
    <defs>
      <linearGradient
        id="prefix__a"
        x1={47.492}
        y1={-4.132}
        x2={93.899}
        y2={43.275}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#47FFE5" />
        <stop offset={1} stopColor="#00A6FF" />
      </linearGradient>
    </defs>
    <circle
      cx={70}
      cy={70}
      r={70}
      fill="url(#prefix__a)"
      stroke="#fff"
      strokeWidth={5}
    />
   <path
     d="M149.611 16.7545L98.8391 173.302H174.997L149.611 16.7545Z"
     fill="black"/>
   <path
     d="M219.422 52.7179L145.38 148.083L71.3373 52.7179L89.7999 245.229H136.918H184.036L219.422 52.7179Z"
     fill="black"/>
   <path 
     d="M50.1824 245.229H230" stroke="black" stroke-width="4.23101"/>
   <path
     d="M180.286 99.2589L147.496 142.627" stroke="white" stroke-width="4.23101"/>
  </svg>
);

export default NotionAvatar;
