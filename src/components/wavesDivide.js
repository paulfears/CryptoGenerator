import React from 'react' 
import './wavesDivide.js'
import './waves.css'
const WavesDivide = function() {
      return (
        <div>
          <svg id="top_wave" className="waves_divide" viewBox="0 24 150 28 " preserveAspectRatio="none"> <defs> <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /> </defs> <g className="parallax1"> <use xlinkHref="#gentle-wave" x={50} y={3} fill="#fcdf38" /> </g> <g className="parallax2"> <use xlinkHref="#gentle-wave" x={50} y={0} fill="#4579e2" /> </g> <g className="parallax2"> <use xlinkHref="#gentle-wave" x={50} y={0} fill="#E4FF1A" /> </g> <g className="parallax3"> <use xlinkHref="#gentle-wave" x={50} y={9} fill="#3461c1" /> </g> <g className="parallax4"> <use xlinkHref="#gentle-wave" x={50} y={6} fill="#000" /> </g> </svg>
          <svg id="top_wave" className="waves_divide bottom_wave" viewBox="0 24 150 28 " preserveAspectRatio="none"> <defs> <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /> </defs> <g className="parallax1"> <use xlinkHref="#gentle-wave" x={50} y={3} fill="#fcdf38" /> </g> <g className="parallax2"> <use xlinkHref="#gentle-wave" x={50} y={0} fill="#4579e2" /> </g> <g className="parallax2"> <use xlinkHref="#gentle-wave" x={50} y={0} fill="#E4FF1A" /> </g> <g className="parallax3"> <use xlinkHref="#gentle-wave" x={50} y={9} fill="#3461c1" /> </g> <g className="parallax4"> <use xlinkHref="#gentle-wave" x={50} y={6} fill="#000" /> </g> </svg>
        </div>
      );
}


export default WavesDivide;