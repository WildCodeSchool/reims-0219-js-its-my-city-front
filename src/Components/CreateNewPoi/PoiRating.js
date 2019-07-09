import React from 'react';
import { ReactComponent as Starcolor } from '../pictos/Starcolor.svg';
import { ReactComponent as StarUncolor } from '../pictos/StarUncolor.svg';

const scoreRating = [1, 2, 3, 4, 5];

const PoiRating = ({
  dispatch,
  title,
  type,
  canClick,
  rating,
}) => {
  const dispatchRating = rate => dispatch({
    type,
    rating: rate,
  });

  return (
    <div>
      <span>{title}</span>
      <div className="accessibilityRating">
        {scoreRating.map(rate => (
          <div
            key={rate}
            className={canClick ? `star${rate}` : 'star5'}
            onClick={canClick ? () => dispatchRating(rate) : null}
            onKeyPress={() => dispatchRating(rate)}
            role="button"
            tabIndex="0"
          >
            {rate <= rating ? <Starcolor /> : <StarUncolor />}
          </div>
        ))}
      </div>
    </div>

  );
};

export default PoiRating;
