import React from 'react';
import '../ComponentsCSS/ColorSvg.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

const TopPageSvg = ({ dispatch }) => (

  <svg
    x="0px"
    y="0px"
    viewBox="0 0 375 62"
    xmlSpace="preserve"
    style={{
      position: 'absolute',
      top: '-7vh',
      marginLeft: '1.4px',
      marginRight: '-1px',
    }}
  >
    <g>
      <g onClick={() => dispatch({ type: 'TOGGLE_POI_CREATION_FORM' })}>
        <defs>
          <rect id="SVGID_1_" x="298" width="58" height="58" />
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }} />
        </clipPath>
        <g style={{ clipPath: 'url(#FFFFFF)' }}>

          <image
            style={{ overflow: 'visible' }}
            width="58"
            height="58"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAAAsSAAALEgHS3X78AAAA
    GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABH9JREFUeNrsmk1MFEkUx6drZnoa
    5gOQJX5ggrAa40dY1LsaDXvy4MnAgURjiCZkEzM3uEg2682DZ2OiXva6A17khEO4qdmNB4Y1kIgh
    SsLBwZ4J43x0+X9YnVTIINBUTzdJv+SlSWe6q3/9f/Xq1WtCocACCywwH5im4iac81YcLsGvw49J
    TpaH/0dHy7KyjLGMpmlL9qX74i0B8DL8H757+7dcLt/CLcJwpuqFuwF4DD7N92hQ+EOxWLyNW0YF
    tOYbaDzfTa7YKpXK5MTExMFNwJ5CPuUuGWDfzczMnMYwBjziWUg7nIu7DeU8lO3FcM1CXWWw4R1C
    PsLhputLgKYZ3d3dF/HnJNT9JrIy37dzcjszTfNlMpn8BcMn4LpQ1lXIVvgX7oHlcrm0gI1LYezY
    trv4HrzVi8TX09OTrlarTYA1VM/XemulpzY/P/9XU1NTp3jZxl5g2TZqempITJQfYvF4PCatscpD
    95LXoLqud6bT6e5arWaDOl5f2VZhi0OfHyqxgYGBfjyPDlV1CVSZotf9Uld3dXVdBWgExYR6Rb3K
    tFtEF0GFCTaRSESc1sK+B21pablgg0JVWVFNBWhfyEcmVGU4MtWK+q4TIiCZ6jn6yi+EWFoKdqgK
    WE1l6PrGCoXC/3X6W8oU/eAXUGzIzXrTVhVoxi+gc3Nzr6R9qeO9KdtiA7yG+TDpB9Dx8XE7X3A8
    F4FaTqDZT5JA1mvItbW1t7Ozs6aAtASkpTJ0+crKyjMay0vQTCbzWEQYwdUYY1WnoD/LXmx9ff2W
    YRhPvFKzo6PjDgECtALIYjQaLZimWcS5Mp1XtbxwbHqfY65+9FBNLsK2Sg7IigBUFrp2CudLS0s3
    APu1wZn28fDw8FsBuaFoOBwmFR2H7k5CO7q6unq3Ue2T5eXlFwjRC/Dz2Hj3xmKxk4iso2KjEVO9
    H5XNwlx5huQ04raSxWLx/dDQ0EOhGClHIVuGmtTjdRy2u1IVHkcY/4Fl56vbSsL7oOYZqPlrc3Pz
    YYydCjWivysGoIFSU1NTV1CWLauEzGaz9zdBngXkCdEBbAv96AA25OOTJgaiOdISj8cPLSws/LlX
    dUnFkZGRawLyHPw3oeRxgkylUgdCP77DREIN/OBkwxoC9uDg4GBvLpd7gDXv9U7hSqXSp8XFxb8F
    4HlJxV74KazbPQjXIxhDhmQqHn63v2dizuqJRCIGVQ3LsmL9/f0HRkdHf29vb++EIqm2traTIsF8
    yufzn1F8mNPT02/Gxsbey8uXqHqqYq2kxFPCNSWcsxOQXfY1FFSGDQtgajDrANapLUm9nZD0yV60
    QeQNg7wTqQnACnkkEvmGosAGrKrMstoerrOBCSyK+RQlWGpLAo6aWWGp9bHR95EgLVtJlHZUDFRE
    1SMDKi0MNAXXMwmY4CLJZJI6dgRrN7Ts325stQiSKp5CoWBDVaWqx9E2zG1Q+R5MSlibG1maPC+l
    gqBWB467lUlV30+r08DSNrVAeB0w7vaS4dW998c/UwUWWGCBBRZYYIEFtl/tuwADAOMHNx6wHt04
    AAAAAElFTkSuQmCC"
            transform="matrix(1 0 0 1 298 0)"
          />
        </g>
      </g>
      <g>
        <path
          className="st9"
          d="M364.8,54.4V26.3c0-6.2-5.1-11.3-11.3-11.3c0,0-4,0-3.6,0c-7.5,0.5-6.6,5.4-6.6,8.1c0,12.3-10,22.2-22.2,22.2
                c-12.3,0-22.2-10-22.2-22.2c0-2.7,1-7.7-6.8-8.1c0.4,0-272.8,0-272.8,0C13,15,7.9,20.1,7.9,26.3v28.1H364.8z"
        />
      </g>
      <path
        className="st1"
        d="M7.9,573.1v46.3c0,6.2,5.1,11.3,11.3,11.3h124c9.7-1.3,8.5-8.3,8.5-12.2c0-18.8,15.3-34.1,34.1-34.1
            c18.8,0,34.1,15.3,34.1,34.1c0,4-1.3,10.9,8.4,12.2h125.1c6.2,0,11.3-5.1,11.3-11.3v-46.3H7.9z"
      />
      <path
        className="st11"
        d="M319.2,23.2l-0.7,0.7c-1.3,1.3-2.7,2.7-4,4c-0.6,0.7-0.7,1.3-0.2,1.8c0.5,0.5,1.1,0.4,1.7-0.2
            c1.4-1.4,2.7-2.7,4.1-4.1l0.6-0.6c1.6,1.6,3.1,3.1,4.6,4.6c0.8,0.8,1.4,0.8,1.9,0.3c0.5-0.6,0.4-1.1-0.3-1.9
            c-1.3-1.3-2.6-2.6-3.9-3.9l-0.6-0.6c1.6-1.6,3.2-3.2,4.8-4.8c0.6-0.6,0.6-1.2,0.1-1.7c-0.5-0.5-1.1-0.5-1.7,0.1
            c-1.2,1.2-2.3,2.3-3.5,3.5c-0.4,0.4-0.8,0.8-1.3,1.3l-0.6-0.6c-1.3-1.3-2.5-2.5-3.8-3.8c-0.1-0.1-0.3-0.3-0.4-0.4
            c-0.6-0.5-1.2-0.5-1.6-0.1c-0.5,0.5-0.5,1.1,0.1,1.7C316,20,317.6,21.5,319.2,23.2z"
      />
      <path
        className="st11"
        d="M319.2,23.2c-1.7-1.7-3.2-3.2-4.8-4.8c-0.6-0.6-0.6-1.2-0.1-1.7c0.5-0.5,1.1-0.4,1.6,0.1
            c0.1,0.1,0.3,0.3,0.4,0.4c1.3,1.3,2.5,2.5,3.8,3.8l0.6,0.6c0.5-0.5,0.9-0.9,1.3-1.3c1.2-1.2,2.3-2.3,3.5-3.5
            c0.6-0.6,1.2-0.6,1.7-0.1c0.5,0.5,0.5,1.1-0.1,1.7c-1.6,1.6-3.1,3.1-4.8,4.8l0.6,0.6c1.3,1.3,2.6,2.6,3.9,3.9
            c0.8,0.8,0.9,1.4,0.3,1.9c-0.5,0.6-1.2,0.5-1.9-0.3c-1.5-1.5-3-3-4.6-4.6l-0.6,0.6c-1.4,1.4-2.7,2.7-4.1,4.1
            c-0.6,0.6-1.2,0.7-1.7,0.2c-0.5-0.5-0.5-1.2,0.2-1.8c1.3-1.3,2.7-2.7,4-4L319.2,23.2z"
      />
      <g>
        <defs>
          <rect id="SVGID_3_" x="154" y="587" width="76" height="72" />
        </defs>
        <clipPath id="SVGID_4_">
          <use xlinkHref="#SVGID_3_" style={{ overflow: 'visible' }} />
        </clipPath>
        <g style={{ clipPath: 'url(#SVGID_4_)' }}>

          <image
            style={{ overflow: 'visible' }}
            width="76"
            height="72"
            xlinkHref="data:image/png;base64,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"
            transform="matrix(1 0 0 1 154 587)"
          />
        </g>
      </g>
      <polyline className="st10" points="178.7,620.4 184.1,625.6 192.8,612.3" />
      <g>
        <defs>
          <rect id="SVGID_5_" x="154" y="587" width="76" height="72" />
        </defs>
        <clipPath id="SVGID_6_">
          <use xlinkHref="#SVGID_5_" style={{ overflow: 'visible' }} />
        </clipPath>
        <g style={{ clipPath: 'url(#SVGID_6_)' }}>

          <image
            style={{ overflow: 'visible' }}
            width="76"
            height="72"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABICAYAAABcBhM9AAAACXBIWXMAAAsSAAALEgHS3X78AAAA
    GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB+pJREFUeNrsnAtsFEUYx2dmd+99
    PWwLOSwoCKIiUhUlJkLEFzEGEU2KqUajQWNMVNRojBqNGE2M0WjiI4FEjWKiBrGooJFQRFHQRKSU
    QhUqVgSkTa+Pe/RuXzN+c+7icrlC6e691vuSTbstN3v36///zTez34JQNapRjWpUbuBiXqxjZlNU
    RVKUiCzKGJqIMYpShNIYs78JxUcZFo6GkvLRaQfWxOGfs/8dsLbGpgaEhBvgMovg01+FEfaP6oUM
    /UEZ3cAIXd+TSmy5vusr5dhv3AZs54VLxhEaWE4RuxljPNv2gAylYKxWHbG3L23/aIMBjZUKnmPA
    /prU5I/VicthyMfhdFwh3ixDbFtckZ+4ovPTbXBKSwEO2/8QC8RdjROXwbt+Bix3ejHetM7oV/3a
    8FPX7v18d7HB2QLWee4ddbJHXYcwnldsa4Da9JSmPDZvz9q3OMNigRszsF2zm6YyJG2CEc4qZRLO
    UH3VZbs/fgS+VXPAFSSEsSX22y5nCLdCUm8o9awlYjLnrvEzZ8vDmY3tyoBW6Nn0lIG1Nd56O2Zs
    LcAKl0ttJBIyY+640xdOEcObWhOHEoUERk6p8Dz/lkbIHSshZ3nKraAEaI1X1U1+M4KQD049hhhw
    yRT224zmesWDvwVl1ZXrsgXsOXVJ/YxQi3x4qyzL1gmAFRXYH1Pu9CVD9EtQ1qxyX+v5iTj3Gn80
    tl75u0NRFOr0JDAqSw5GlPfhy+WVskCe5Kt54eUJc+fX1NRwe0pO2vOkwHbNbr4OrtRUYTsK0sXB
    8a+F42oATr3crcZnxQUHRjF6sRK3YSRMznz17Cubg8Ggo5PACYHtvKB5CSx3GlGFxhRf+P5gSg+E
    QiHHrElO8ttnUQWHhwhnvDZ9wVJd172Qz7wGMFvWJG5VlxnT/ZH7gmnqB2geQ2WkIArDBF2HXBBc
    ZXdEz5vOgYHKJLsqIyPvBmBXAOMxP9JwLWPMY6hMtKOyvC9sv6D5XMB/pluAjZf88wCYSCmVIpGI
    5LjCKEFLkIsiSKTGOUJtDYcGKhPtzJZ5gTGGL3MTMFj/Sovrp84yVCbayWP5vYzZFOSyiHpCDQBM
    4NAcVxiv+dwGLCJ6+GYnByaEw2HnFMZ3JqD+irgNWFAQ6wxABKARCzBsC9jguEwUuTA8WKw3YXGV
    OZfDNPfZkYePCOYtQA4Mj0VdeYEJGB91IzBFpzETlGFJZ5K+LqRdCUxGWt+/JdNx6rKvsIva1g3C
    qLLbgGWoHsstnpwrXF1oy6SmxJwYh+SvW5nrgCWo2mdU/dbuH+aMwhD60W3Afkn27vvPQHjMPRgj
    rCXp165K+FTvfmfgt+486nJGYV06bWWIDbkFWI86vMUCiAI4836lMwpbuncN74Rxjcp+SvRsMb7N
    wiKEjLk9asSdR52yz9wAS2W076XenR2muvhHSyQSY26LGgkYOzDwZwsUed2VDuxgJvGpkei5unRQ
    F2+JchwYWnpou6xQ9nwlw9Io7V9xcNsHltylWYA5N0uaKnu7Y//7lLE9lQpsX3rg3U49mTLgcEha
    MpksjML4YKvQDprS1BWVmbv0I4/9+d0nhh11Q118MlMLpbDsrDJ/7yfrdEq3VxqwHcneN3qRphhg
    NACmCILAz7WxlhSjAZaF1pNO380YSlQKrH413frAgW82WtSlgroUmB2t6iqIwrLJ8vquz/bHlPSt
    7F85l/ciW1fa79q36WkkSWYZoVrUZcuOo1VYtiy75teWTUNa+vGyzluU9jzZvf3hIzgjW2ZFDksG
    dVntWFBgpny1BXtaVsJfcGU5woLZPPleb+fy7XLvkGHFbN4CYBlJkmSLumwFPkW4/J6e9+uZN947
    QQq8iBEWygEWX1yv7Gl/ZPVA10FTWXDIACsNsFLxeDwDP1fs2vFUgWErtA+nL1x4TqBuFcH4tFLC
    GtTkrQ/+vvkps94ykrwMB4c1DFZMW2BRu9cbi0Kyf6G1/b8fnEgCG6b5I1cLmNSWaNmzelHnuhV9
    WFcMZXFYChwZURTTUKRm0PGP1KBSADuWNrYkDw/tj8fWzKqpTwWINAvU5i8GKMijP7f0dz350KEf
    vkCCwCw2zIVlJnrH2s6xjdcJhj09wWDQPwfX1D466ZJ7JnlDywjCNYUAldLV3ZsH/3r9uZ4dv5iT
    EVeVWZjyBM9hgQ3lHFglB5ab0zy88VbXdd88b23d8uicZfWSb6GPiDPsvkGdsUxcV35sT/Z98eiR
    bd+i4zcCs0WpZTbMDA0NyTn1lqPPHWEHXo8NaLxZzaNpmpc34fKOv5vCkxsW1067ssETWhAmnrlg
    Wd9oBlWofrhPy3zfMRzb+sqRHT/3I021KIoasFQTFq+zwIKKoSoVFfDZSezQGKZF+SGFw+FseySl
    1MPBGb0MwqLA5AnTApEJE6Xg+NMkb32YeOsUqsn8jk6fMtzXrSRjbfGeWJs+mETHPydkgtItqsou
    d1KplGKxn+3CtBjAci1q2pSDkzg43pNlOayNIPnuQLOcgpkaeeoYLFCUCooydx5yHywtzydyTzIe
    sSiOwxMhx2Vh8Q5Ao7ch29SWpzHEVJQ1T+nmbikkdM2ipqKBKhSwXJtaVSdYQYL6sl00eRpDjt03
    5DYEQNQAo1sAUVSp/6vAKMfPBYjz2DJ37Wo96Ag/L3rgEl0vF2Te1cQJvpYsMCp94BMtwapRjWpU
    oxrVqEY1XBr/CDAAV1HClZwAOYUAAAAASUVORK5CYII="
            transform="matrix(1 0 0 1 154 587)"
          />
        </g>
      </g>
      <polyline className="st10" points="178.7,620 184.1,625.2 192.8,611.9 " />
    </g>
  </svg>

);


export default connect(mapStateToProps)(TopPageSvg);
