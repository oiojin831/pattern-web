import Straight from './Straight';
const PathComp = ({ startP, direction, distance, car }) => {
  const { x, y } = startP;
  if (distance === 0) {
    return null;
  }
  return [...Array(distance)].map((d, dIdx) => {
    if (direction === 'east') {
      return <Straight car={car} x={x + dIdx} y={y} />;
    } else if (direction === 'south') {
      return <Straight car={car} x={x} y={y + dIdx} transform={true} />;
    } else if (direction === 'west') {
      return <Straight car={car} x={x - dIdx} y={y} />;
    } else {
      return <Straight car={car} x={x} y={y - dIdx} transform={true} />;
    }
  });
};

export default PathComp;
