const UTurn = ({ x, y }) => {
  return (
    <>
      <circle cx={2 + 4 * (x - 1)} cy={2 + 4 * (y - 1)} r={2} fill="#df5444" />
      <path
        d={`M${4 * (x - 1)} ${2 + 4 * (y - 1)} L${4 * x} ${2 + 4 * (y - 1)} L${
          4 * x
        } ${4 * y} L${4 * (x - 1)} ${4 * y} Z`}
        fill="#df5444"
      ></path>
    </>
  );
};
export default UTurn;
