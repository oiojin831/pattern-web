const Circle = ({ x, y }) => {
  return (
    <>
      <circle cx={2 + 4 * (x - 1)} cy={2 + 4 * (y - 1)} r={2} fill="#df5444" />
      <circle cx={2 + 4 * (x - 1)} cy={2 + 4 * (y - 1)} r={1} fill="white" />
    </>
  );
};
export default Circle;
