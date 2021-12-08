const fromTM128ToLatLng = ({ mapx, mapy }) => {
  const point = new window.naver.maps.Point(mapx, mapy);
  const latLng = window.naver.maps.TransCoord.fromTM128ToLatLng(point);
  return latLng;
};

export default fromTM128ToLatLng;

const directionSets = {
  a: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 87, 88, 121, 122, 123], // start
  b: [3, 5, 14, 15, 16, 66, 67, 68, 69, 71, 72, 73, 74], // right turn
  c: [2, 4, 8, 11, 12, 13, 57, 58, 59, 60, 62, 63, 64, 65], // left turn
  d: [42, 77, 80, 82], // right ?
  e: [41, 76, 79, 81], // left
  f: [1, 21], // straight
  g: [28, 34, 75, 78, 91, 98, 104], //straight
  h: [23, 24, 25, 26, 27, 93, 94, 95, 96, 97],
  i: [29, 30, 31, 32, 33, 99, 100, 101, 102, 103],
  j: [6, 22, 92],
};

const findInDir = (target) => {
  for (let [key, list] of Object.entries(directionSets)) {
    if (
      list.some((i) => {
        return i === target;
      })
    ) {
      return key;
    }
  }
};

//마지막놈의 위치를위해
const calculateOffset = (dir, distance) => {
  let x = 0;
  let y = 0;
  if (dir === 'east') {
    x = x + distance;
  } else if (dir === 'south') {
    y = y + distance;
  } else if (dir === 'west') {
    x = x - distance;
  } else {
    y = y - distance;
  }
  return {
    x,
    y,
  };
};

const calculateDirection = (currentDir, turn) => {
  if (currentDir === 'east') {
    if (turn === 'right') {
      return 'south';
    } else {
      return 'north';
    }
  } else if (currentDir === 'south') {
    if (turn === 'right') {
      return 'west';
    } else {
      return 'east';
    }
  } else if (currentDir === 'west') {
    if (turn === 'right') {
      return 'north';
    } else {
      return 'south';
    }
  } else {
    if (turn === 'right') {
      return 'east';
    } else {
      return 'west';
    }
  }
};

const calculateStartingP = (statingP, offset, dir) => {
  if (dir === 'north') {
    return { x: statingP.x + offset.x, y: statingP.y + offset.y - 1 };
  } else if (dir === 'south') {
    return { x: statingP.x + offset.x, y: statingP.y + offset.y + 1 };
  } else if (dir === 'east') {
    return { x: statingP.x + offset.x + 1, y: statingP.y + offset.y };
  } else {
    return { x: statingP.x + offset.x - 1, y: statingP.y + offset.y };
  }
};

const updateMinMax = (newPoints, minPoints, maxPoints) => {
  if (newPoints.x > maxPoints.x) {
    maxPoints.x = newPoints.x;
  } else if (newPoints.y > maxPoints.y) {
    maxPoints.y = newPoints.y;
  } else if (newPoints.x < minPoints.x) {
    minPoints.x = newPoints.x;
  } else if (newPoints.y < minPoints.y) {
    minPoints.y = newPoints.y;
  }
};

//0.34375
//0.8525
// 방향 정해주는거하기
// 반원그리기
// 원그리기

export {
  directionSets,
  findInDir,
  calculateStartingP,
  calculateDirection,
  calculateOffset,
  updateMinMax,
};
