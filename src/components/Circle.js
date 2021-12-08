const Circle = ({ x, y, car }) => {
  return (
    <>
      <circle
        cx={2 + 4 * (x - 1)}
        cy={2 + 4 * (y - 1)}
        r={2}
        fill={car ? '#7B7B7B' : `#df5444`}
      />
      <circle cx={2 + 4 * (x - 1)} cy={2 + 4 * (y - 1)} r={1} fill="white" />
    </>
  );
};
export default Circle;
