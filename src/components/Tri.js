const Tri = ({ x, y, prevDir, direction, shape }) => {
  if (
    (prevDir === 'east' && direction === 'south') ||
    (prevDir === 'north' && direction === 'west') // c
  ) {
    return (
      <path
        d={`M${4 * (x - 1)} ${4 * y} L${4 * (x - 1)} ${4 * (y - 1)} L${4 * x} ${
          4 * y
        } Z`}
        fill="#1a191e"
      ></path>
    );
  } else if (
    (prevDir === 'west' && direction === 'south') ||
    (prevDir === 'north' && direction === 'east')
  ) {
    return (
      <path
        d={`M${4 * x} ${4 * (y - 1)} L${4 * (x - 1)} ${4 * y} L${4 * x} ${
          4 * y
        } Z`}
        fill="#1a191e"
      ></path>
    );
  } else if (
    (prevDir === 'east' && direction === 'north') || // e
    (prevDir === 'south' && direction === 'west')
  ) {
    return (
      <path
        d={`M${4 * (x - 1)} ${4 * y} L${4 * (x - 1)} ${4 * (y - 1)} L${4 * x} ${
          4 * (y - 1)
        } Z`}
        fill="#1a191e"
      ></path>
    );
  } else {
    return (
      <path
        d={`M${4 * x} ${4 * (y - 1)} L${4 * (x - 1)} ${4 * (y - 1)} L${4 * x} ${
          4 * y
        } Z`}
        fill="#1a191e"
      ></path>
    );
  }
};

export default Tri;
