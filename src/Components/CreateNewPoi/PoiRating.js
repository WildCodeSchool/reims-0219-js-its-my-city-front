import React from 'react';
import { ReactComponent as Starcolor } from '../pictos/Starcolor.svg';
import { ReactComponent as StarUncolor } from '../pictos/StarUncolor.svg';

const scoreRating = [1, 2, 3, 4, 5];

const PoiRating = ({
  dispatch,
  title,
  type,
  rating,
}) => (
  <div>
    <span>{title}</span>
    <div className="accessibilityRating">
      {scoreRating.map(rate => (
        <div
          key={rate}
          className={`star${rate}`}
          onClick={() => dispatch({
            type,
            rating: rate,
          })}
          onKeyPress
          role="button"
          tabIndex="0"
        >
          {rate <= rating ? <Starcolor /> : <StarUncolor />}
        </div>
      ))}
    </div>
  </div>
);

export default PoiRating;
