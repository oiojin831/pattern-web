const HalfReverseCircle = ({ x, y, car }) => {
  return (
    <>
      <path
        d={`M${4 * (x - 1)},${4 * (y - 1)} a1,1 0 0,0 4,0`}
        fill={car ? '#7B7B7B' : `#df5444`}
      />
      <ellipse
        cx={2 + 4 * (x - 1)}
        cy={4 + 4 * (y - 1)}
        rx={2}
        ry={2}
        fill={car ? '#7B7B7B' : `#df5444`}
      />
      <path
        d={`M${4 * (x - 1)} ${4 + 4 * (y - 1)} L${4 * x} ${4 + 4 * (y - 1)} L${
          4 * x
        } ${2 + 4 * y} L${4 * (x - 1)} ${2 + 4 * y} Z`}
        fill="#fff"
      ></path>
    </>
  );
};
export default HalfReverseCircle;
