/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { ReactComponent as Starcolor } from '../pictos/Starcolor.svg';
import { ReactComponent as StarUncolor } from '../pictos/StarUncolor.svg';

const scoreRating = [1, 2, 3, 4, 5];

const PoiRating = ({
  dispatch,
  label,
  type,
  rating,
}) => (
  <div>
    <label>{label}</label>
    <div className="accessibilityRating">
      {scoreRating.map(rate => (
        <div
          key={rate}
          className={`star${rate}`}
          onClick={() => dispatch({
            type,
            rating: rate,
          })}
        >
          {rate <= rating ? <Starcolor /> : <StarUncolor />}
        </div>
      ))}
    </div>
  </div>
);

export default PoiRating;
