import { NaverMap, Marker } from 'react-naver-maps';
import fromTM128ToLatLng from './utils';
import { useEffect, useState } from 'react';
const Map = ({ setGuide }) => {
  const navermaps = window.naver.maps;
  const [latLong, setGeometricData] = useState(null);

  useEffect(() => {
    if (latLong) {
      const start = `${latLong.start.lng},${latLong.start.lat}`;
      const goal = `${latLong.goal.lng},${latLong.goal.lat}`;
      fetch(
        `${process.env.REACT_APP_API_BASE}/api/direction?start=${start}&goal=${goal}`
      )
        .then((res) => res.json())
        .then((json) => setGuide(json.route.traoptimal[0].guide));
    }
  }, [latLong, setGuide]);

  const searchAddressToCoordinate = (event) => {
    event.preventDefault();
    const [start, goal] = event.target.elements;
    fetch(
      `${process.env.REACT_APP_API_BASE}/api/getLoc?start=${start.value}&goal=${goal.value}`
    )
      .then((res) => res.json())
      .then((json) => {
        const startLatLong = fromTM128ToLatLng({
          mapx: json.startX,
          mapy: json.startY,
        });
        const goalLatLong = fromTM128ToLatLng({
          mapx: json.goalX,
          mapy: json.goalY,
        });
        setGeometricData({
          start: { lat: startLatLong._lat, lng: startLatLong._lng },
          goal: { lat: goalLatLong._lat, lng: goalLatLong._lng },
        });
      });
  };

  return (
    <div>
      <form onSubmit={searchAddressToCoordinate}>
        <input placeholder="start" />
        <input placeholder="goal" />
        <button type="submit"> search</button>
      </form>
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '40vh', // 네이버지도 세로 길이
        }}
        bounds={
          latLong &&
          new navermaps.LatLngBounds(
            new navermaps.LatLng(latLong.start.lat, latLong.start.lng),
            new navermaps.LatLng(latLong.goal.lat, latLong.goal.lng)
          )
        }
        defaultZoom={13} // 지도 초기 확대 배율
      >
        <Marker
          key={1}
          position={
            latLong
              ? new navermaps.LatLng(latLong.start.lat, latLong.start.lng)
              : { lat: 37.3595704, lng: 127.105399 }
          }
          animation={2}
        />
        <Marker
          key={2}
          position={
            latLong
              ? new navermaps.LatLng(latLong.goal.lat, latLong.goal.lng)
              : { lat: 37.3595704, lng: 127.105399 }
          }
          animation={2}
        />
      </NaverMap>
    </div>
  );
};

export default Map;
