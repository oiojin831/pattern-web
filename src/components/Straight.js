import React from 'react';
const Straight = ({ x, y, transform, car }) => {
  if (transform) {
    return (
      <React.Fragment>
        {[0, 1, 2, 3].map((loc) => {
          return (
            <path
              key={`${x}-${loc}-${transform}-${y}`}
              d={`M${4 * (x - 1) + loc * 1.19625} ${4 * (y - 1)} L${
                4 * (x - 1) + loc * 1.19625
              } ${4 * y} L${0.34375 + 4 * (x - 1) + loc * 1.19625} ${4 * y} L${
                0.34375 + 4 * (x - 1) + loc * 1.19625
              } ${4 * (y - 1)}`}
              fill={car ? '#B2B1B0' : `#835b35`}
            />
          );
        })}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {[0, 1, 2, 3].map((loc) => {
        return (
          <path
            key={`${loc}-${transform}-${x}`}
            d={`M${4 * (x - 1)} ${4 * (y - 1) + loc * 1.19625} L${4 * x} ${
              4 * (y - 1) + loc * 1.19625
            } L${4 * x} ${0.34375 + 4 * (y - 1) + loc * 1.19625} L${
              4 * (x - 1)
            } ${0.34375 + 4 * (y - 1) + loc * 1.19625}`}
            fill={car ? '#B2B1B0' : `#835b35`}
          />
        );
      })}
    </React.Fragment>
  );
};
export default Straight;
