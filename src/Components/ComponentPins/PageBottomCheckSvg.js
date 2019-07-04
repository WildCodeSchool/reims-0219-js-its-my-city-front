import React from 'react';
import '../ComponentsCSS/PageBottomCheckSvg.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

const PageBottomCheckSvg = ({ page, dispatch }) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 375 98"
    xmlSpace="preserve"
    style={{
      position: 'absolute',
      top: '77vh',
    }}
  >
    <g>
      <g>
        <defs>
          <rect id="SVGID_1_" x="155" y="15" width="76" height="76" />
        </defs>
        <clipPath
          id="SVGID_2_"
          onClick={() => dispatch({
            type: 'NEXT_PAGE',
            page: page + 1,
          })}
          type="submit"
          className="next"
        >
          <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }} />
        </clipPath>
        <g style={{ clipPath: 'url(#SVGID_2_)' }}>

          <image
            style={{ overflow: 'visible' }}
            width="76"
            height="76"
            xlinkHref="data:image/png;base64,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"
            transform="matrix(1 0 0 1 155 15)"
          />
        </g>
      </g>
    </g>
    <g>

      <image
        style={{ overflow: 'visible', opacity: '0.3' }}
        width="376"
        height="71"
        xlinkHref="data:image/png;base64,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
    RK5CYII="
        transform="matrix(1 0 0 1 2.4961 2.4961)"
      />
      <g>
        <g>
          <path
            className="st0"
            d="M9.1,8.8v40.6c0,6.2,5.1,11.3,11.3,11.3h124c9.7-1.3,8.5-8.3,8.5-12.2c0-18.8,15.3-34.1,34.1-34.1
                    c18.8,0,34.1,15.3,34.1,34.1c0,4-1.3,10.9,8.4,12.2h125.1c6.2,0,11.3-5.1,11.3-11.3V8.8H9.1z"
          />
        </g>
      </g>
    </g>
    <polyline className="st1" points="180.2,47.4 185.6,52.6 194.4,39.3 " />
    <polyline className="st1" points="180.2,47 185.6,52.2 194.4,38.9 " />
  </svg>

);

export default connect(mapStateToProps)(PageBottomCheckSvg);
