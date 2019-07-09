import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/ColorSvg.scss';

const mapStateToProps = state => ({
  page: state.pois.formPage,
});

const BottomPageCloseSvg = ({ page, dispatch }) => (

  <svg
    x="0px"
    y="0px"
    viewBox="0 0 375 98"
    xmlSpace="preserve"
    style={{
      position: 'absolute',
      top: '73vh',
    }}
  >

    <g>
      <g>
        <defs>
          <rect id="SVGID_1_" x="155" y="15" width="76" height="76" />
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }} />
        </clipPath>
        <g style={{ clipPath: 'url(#D02F5A)' }}>

          <image
            style={{ overflow: 'visible' }}
            width="76"
            height="76"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAACXBIWXMAAAsSAAALEgHS3X78AAAA
GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACFtJREFUeNrsnGtsHNUVx++9M7Pr
x669jrHjmDQkgibIEBupVKSQPlPSUlAJUiNCEAWhqq1apH5o+RBaqa4iFZAqpfChDyFRVDWCJoUm
tE4VGgiIQEQSgw2xaxNSv8j6uX7tc2bu3NtztzPpzdYb4t3Z9e5ojzTZ7Cgzs/ub//nfc++cDUGV
WFaQCoIKsAqwCrAyDrVYF3p/831ftBBeiwlvQRytQRi3cMSbMcdReJ3AnI9jjCcYx2GV8+7NZ5+f
sg/lpQQMF+rEPR07r+ZM+QbC5E64yFfhSrVXfDCHQKgb/jhiWbSrq//gmc7/geOeAtbTsesejsge
OPFnXTsp55MM8WcjsZknb//3sShaQXiuAett37WNIfwEpNXNhfqwkLrTBrMe/0fk/O87w9067GLF
Bofz96bdn7EwAlCQdkUKADeSYOYvfv1B//6DqN8qJjglP1Xt/hHH/EVQ1bXFTQsc8mHl7lubm29Z
peO/ndCnaLGureQO6759HONOGO0wWqEgcKOur2/avpHUHXklNpYsyZTkqJP0dgw+A4c+XCpDvcXZ
8Ono5I7vDx0/B29NsctOT76iwMbW7qyeWaVBCqI7Sq2gtDiPDMRnd95//ugpeGsUCtqyKv1Io/bz
UoSV9haMGzfWhp7+SvXaELz120U5drt0umIPg7LhW+BXT5XytEXBpPm2UOunDyRGjxiGwSWF8aIC
O3vDvR2WQrpgdNJKfa7nI8qmOwOf0g7rF04CNOZ2kfuJwITJh1vnXgVYreUyQQ4o2pY2Uvf2G1Yk
bENjbgH7RA/r7Rj4LphAW7mtKrQHrnqMUlol+Rlxw88uq7CBTd8MmqrvEKirttyAaUS5usPXcPZV
fXLYNE1ZZbxgCktVBX4KsJpQmUZ7TdMeLcGqA4GAUJnmhsqyKuxs2851jJD9MDKq5QpMJaRxa/3q
uZfmh96H9HRUxgqiMKppPwBYflTmcY2//kHGmL+2ttZne5lSEGAc8a8jDwSUGRseaWjbaFmWv66u
zmcDyzk1SZZ0bMEctSOPxNb61u2ccw2gadKI6Z7CqKbsWMlVCLdjtVazTQCD1PTla/5Lk+ZkB/JQ
1BD1xrtr1q0GaCqMmI6P5TTPXBIYx3yLl4CJbLk1tKZNAAOVqZKP5a+wofUPVUHtVY88FiGl6ioA
pgho+Rj//wGbD6VakAcjoKiiABfAlGAw6B4wRNF6LwIDH2u0AREBTYKF8wJGCPGkwmoUX6sNK725
pjCGuCeB+TFpdL4zAMPujZIcDXsRWJLT8QxQLtVhFvYksJRFZ9J6AGiuKkxD5oQXgS1QY1yuzFyb
Gt3QPz3D//tsz1MRZebMJcZz6WvuwDB6nYJmZ70GbMpIROyin4sN5bjymmV6gHu8BAs8y3whMthv
g5KXqrkrwBiyDnsJ2CI1z3xIY0kHEoDLeeV1aWCmeQilmwC9ESPGwusyLBuYewq7+V8vTcCZTnsl
H/80PXj8YvLAJils2dCyLnFYnP3ZC7zijPYdT4xHJFg0Go1aKMeHu9mA8WhUfxbuTtnXZKejk89J
oyOFuTJNLzG46WEivjx8aNFg1q/KGVbMMnsfDZ90/MuSgOXcCnW5VUf+3uz534L1D5UrsNfmRn9j
Q0mnop2OFOXRa3HZZdrvhbv1hEUfL8upkGmc3Dv1brc9MgpFUUVRRKOd3KHoKrD0nbmt78BzlFtH
ywkW5Wxu3/h7e53vIHZBKhqxWMy0/SvnkulKHgSw45Nj34ZR81w5wGKI08NzQz/pio1O2epKwwJ1
ib5+p5WzMCnp3KFHJ9+e60/M7YIPs1jqwAbis089MfFur+1bwuhN2HRQl5HP6LgchaXLsgc+Otof
TsW/AwhZqcKK0OQrD4689ryUioaApaqqrC5e6JR0LkDvGny5a9EySrLUSDJz4OHBY51SCWFCKuqQ
iikYGXXb7PPuRLxShTl3zPxC31/2jqQWHoD0TJYKrAkjfuiugb8/FMYpXSohdACWisfjqQzvyiuW
0/pzcdHthci5j26qan5jjb9mG8G4biWXbXriM7/cPfTPZ3TErExYSQjY56irOE3B2T5r18LQtEGN
v94UaP6ciknRG4YtzucPRj784Z7wO2/KlbwNK6lpWlLX9ZRbqZg3MLH1JCPJN6eGXtxc3zQcVPwb
AdyqgpcNnCXGjNj+n4289djBxeFRpzB1YIFnCVipxcVF12Gl56R5HCf8T/Qp+AOBQJUao9VPX7f1
nk3VjY/4iXJtIUB9bMQPPPnx6T+e0iMLzm67ik8bvEjDRCLhpCF1y7fcAJYJTQsGg1WUUj/4in9f
y5bbr6tu2N6g+T8PqmvKHRJPLVr6mVE9duIP433HThhTc+jSVVPq1FlQOqSg1tIlWMxtWPkCc47H
dmproVDIZ5qmX7RHAjif6JT5cVP7jbcEW77UqFZtqcbqBpVkT1vwpZTO6PC8pX/QF5898btw75lR
nEpJpY0DyilITaeKl0oH6nYauglMhuaoTRW9pADNxxjTROefAGe3GZHrlWDt1xquWb/BX7+uyVe9
Nm6Z8xdS0bFTiYmxI9EL0xlflEvLyfIoKECZYjINoAwJVMF+9ucmsMwUJbbi0qkK/iZaJUUjm2iV
VOweLbndaKkn0FxalrFsRV1czxKwAJQDKdOrCvosAhfofDI4ZxPtkoqAlwlNenQvq4rZDyzSsAQo
e2nZAWRlKKooD21wgc8rqy4TIoGBgti9DhdnHM5DVjBwJikn85UXG1ShgWWDhzNSkSyRkjKIpeAU
HZIcxfhZjNzHgCWvyQS51L9f6nVFo9i/I+JZ/o6z7C+5KJUfXpXNU/bKf4dVAVYBVgFWAVYBVokK
sAqwCrCyiP8IMADqbBZReEk2uwAAAABJRU5ErkJggg=="
            transform="matrix(1 0 0 1 155 15)"
          />
        </g>
      </g>
      <path
        className="st18"
        d="M186.6,48.9c-1.7,1.7-3.2,3.2-4.8,4.8c-0.6,0.6-1.2,0.6-1.7,0.1c-0.5-0.5-0.4-1.1,0.1-1.6
c0.1-0.1,0.3-0.3,0.4-0.4c1.3-1.3,2.5-2.5,3.8-3.8l0.6-0.6c-0.5-0.5-0.9-0.9-1.3-1.3c-1.2-1.2-2.3-2.3-3.5-3.5
c-0.6-0.6-0.6-1.2-0.1-1.7c0.5-0.5,1.1-0.5,1.7,0.1c1.6,1.6,3.1,3.1,4.8,4.8c0.2-0.2,0.4-0.4,0.6-0.6c1.3-1.3,2.6-2.6,3.9-3.9
c0.8-0.8,1.4-0.9,1.9-0.3c0.6,0.5,0.5,1.2-0.3,1.9c-1.5,1.5-3,3-4.6,4.6c0.2,0.2,0.4,0.4,0.6,0.6c1.4,1.4,2.7,2.7,4.1,4.1
c0.6,0.6,0.7,1.2,0.2,1.8c-0.5,0.5-1.2,0.5-1.8-0.2c-1.3-1.3-2.7-2.7-4-4C187.1,49.4,186.9,49.2,186.6,48.9z"
      />
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
            className="st18"
            d="M9.1,8.8v40.6c0,6.2,5.1,11.3,11.3,11.3h124c9.7-1.3,8.5-8.3,8.5-12.2c0-18.8,15.3-34.1,34.1-34.1
c18.8,0,34.1,15.3,34.1,34.1c0,4-1.3,10.9,8.4,12.2h125.1c6.2,0,11.3-5.1,11.3-11.3V8.8H9.1z"
          />
        </g>
      </g>
    </g>
  </svg>

);
export default connect(mapStateToProps)(BottomPageCloseSvg);
