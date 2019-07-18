import React from 'react';
import '../ComponentsCSS/ColorSvg.scss';
import { connect } from 'react-redux';

const PageBottomCloseSvg = ({ dispatch }) => (

  <svg
    x="0px"
    y="0px"
    viewBox="0 0 370.8 73.5"
    xmlSpace="preserve"
  >

    <path
      className="st9"
      d="M7.2,1.3v40.6c0,6.2,5.1,11.3,11.3,11.3h124c9.7-1.3,8.5-8.3,8.5-12.2c0-18.8,15.3-34.1,34.1-34.1
        c18.8,0,34.1,15.3,34.1,34.1c0,4-1.3,10.9,8.4,12.2h125.1c6.2,0,11.3-5.1,11.3-11.3V1.3H7.2z"
    />
    <g>
      <defs>
        <rect id="SVGID_1_" x="153.3" y="9.5" width="76" height="72" />
      </defs>
      <clipPath id="SVGID_2_">
        <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }} />
      </clipPath>
      <g style={{ clipPath: 'url(#DD476D)' }}>

        <image
          style={{ overflow: 'visible' }}
          width="76"
          height="72"
          xlinkHref="data:image/png;base64,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
    bAnsfwIMAPe5M/smlTfPAAAAAElFTkSuQmCC"
          transform="matrix(1 0 0 1 153.3114 9.5142)"
        />
      </g>
    </g>
    <g>
      <path
        className="st9"
        d="M158.5,40.5v2c0,14.5,11.9,26.1,26.6,26.1l0,0c14.7,0,26.6-11.6,26.6-26.1v-2c0-14.5-11.9-26.1-26.6-26.1l0,0
C170.4,14.4,158.5,26,158.5,40.5z"
      />
      <path
        className="st9"
        d="M185.4,43.2c0.3,0.3,0.5,0.5,0.7,0.7c1.3,1.3,2.7,2.7,4,4c0.6,0.6,1.3,0.7,1.8,0.1c0.5-0.5,0.4-1.1-0.2-1.8
c-1.3-1.3-2.7-2.7-4.1-4.1c-0.2-0.2-0.4-0.4-0.6-0.6c1.6-1.6,3.1-3.1,4.6-4.6c0.8-0.8,0.8-1.4,0.3-2c-0.6-0.6-1.1-0.4-1.9,0.4
c-1.3,1.3-2.6,2.6-3.9,3.9c-0.2,0.2-0.4,0.4-0.6,0.6c-1.6-1.6-3.3-3.3-4.8-4.8c-0.6-0.6-1.2-0.6-1.7-0.1c-0.5,0.5-0.4,1.1,0.1,1.7
c1.2,1.2,2.3,2.3,3.5,3.5c0.4,0.4,0.8,0.8,1.3,1.3l-0.6,0.6c-1.3,1.3-2.5,2.5-3.8,3.8c-0.1,0.1-0.3,0.3-0.4,0.4
c-0.6,0.6-0.6,1.1-0.1,1.6c0.5,0.5,1.1,0.5,1.7,0C182.2,46.4,183.7,44.9,185.4,43.2z"
      />
      <path
        className="st9"
        d="M185.4,43.2c-1.7,1.7-3.3,3.3-4.8,4.8c-0.6,0.6-1.3,0.6-1.7,0c-0.5-0.5-0.4-1.1,0.1-1.6
c0.1-0.1,0.3-0.3,0.4-0.4c1.3-1.3,2.5-2.5,3.8-3.8l0.6-0.6c-0.4-0.4-0.8-0.8-1.3-1.3c-1.2-1.2-2.3-2.3-3.5-3.5
c-0.6-0.6-0.6-1.2-0.1-1.7c0.5-0.5,1.1-0.4,1.7,0.1c1.6,1.6,3.1,3.1,4.8,4.8c0.2-0.2,0.4-0.4,0.6-0.6c1.3-1.3,2.6-2.6,3.9-3.9
c0.8-0.8,1.3-0.9,1.9-0.4s0.5,1.2-0.3,2c-1.5,1.5-3,3-4.6,4.6c0.2,0.2,0.4,0.4,0.6,0.6c1.3,1.3,2.7,2.7,4.1,4.1
c0.6,0.6,0.7,1.3,0.2,1.8c-0.5,0.5-1.2,0.5-1.8-0.1c-1.3-1.3-2.7-2.7-4-4C185.9,43.7,185.7,43.5,185.4,43.2z"
      />
    </g>
    <rect x="155" y="15" style={{ fill: 'transparent' }} width="60" height="55" onClick={() => dispatch({ type: 'CLOSE_PAGE' })} />
  </svg>


);

export default connect()(PageBottomCloseSvg);
