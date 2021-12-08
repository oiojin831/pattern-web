import Straight from './Straight';
const PathComp = ({ startP, direction, distance }) => {
  const { x, y } = startP;
  if (distance === 0) {
    return null;
  }
  return [...Array(distance)].map((d, dIdx) => {
    if (direction === 'east') {
      return <Straight x={x + dIdx} y={y} />;
    } else if (direction === 'south') {
      return <Straight x={x} y={y + dIdx} transform={true} />;
    } else if (direction === 'west') {
      return <Straight x={x - dIdx} y={y} />;
    } else {
      return <Straight x={x} y={y - dIdx} transform={true} />;
    }
  });
};

export default PathComp;
