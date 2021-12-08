import React, { useState } from 'react';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import {
  findInDir,
  calculateDirection,
  calculateOffset,
  calculateStartingP,
} from './utils';
import Straight from './components/Straight';
import Circle from './components/Circle';
import HalfReverseCircle from './components/HalfReverseCircle';
import PathComp from './components/PathComp';
import Tri from './components/Tri';
import UTurn from './components/UTurn';
import Map from './Map';

export default function App() {
  const [guide, setGuide] = useState();
  const [car, setCar] = useState(false);
  let startingPoints = { x: 10, y: 10 };
  let direction = 'east';
  return (
    <div className="App">
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_CLIENT}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
        submodules={['geocoder']}
      >
        <Map car={car} setCar={setCar} setGuide={setGuide} />
      </RenderAfterNavermapsLoaded>
      {guide ? (
        <div style={{ width: '100%', height: '40vh' }}>
          <svg viewBox={`0 0 100 100`}>
            <Circle car={car} x={startingPoints.x - 1} y={startingPoints.y} />
            {guide
              .map((g) => ({
                type: g.type,
                distance: parseInt(g.distance / 1000),
              }))
              .map((g, idx) => {
                const shape = findInDir(g.type);
                const tempStartP = startingPoints;
                const tempDir = direction;
                const off = calculateOffset(tempDir, g.distance);

                if (shape === 'a') {
                  startingPoints = calculateStartingP(
                    tempStartP,
                    off,
                    direction
                  );
                  return (
                    <React.Fragment key={`${g.distance}-${idx}`}>
                      <PathComp
                        car={car}
                        startP={tempStartP}
                        distance={g.distance}
                        direction={tempDir}
                      />
                      <Circle
                        car={car}
                        x={tempStartP.x + off.x}
                        y={tempStartP.y + off.y}
                      />
                    </React.Fragment>
                  );
                } else if (shape === 'b' || shape === 'd') {
                  direction = calculateDirection(tempDir, 'right');
                  startingPoints = calculateStartingP(
                    tempStartP,
                    off,
                    direction
                  );
                  return (
                    <React.Fragment key={`${g.distance}-${idx}`}>
                      <PathComp
                        car={car}
                        startP={tempStartP}
                        distance={g.distance}
                        direction={tempDir}
                      />
                      <Tri
                        x={tempStartP.x + off.x}
                        y={tempStartP.y + off.y}
                        shape={shape}
                        prevDir={tempDir}
                        direction={direction}
                      />
                    </React.Fragment>
                  );
                } else if (shape === 'c' || shape === 'e') {
                  direction = calculateDirection(tempDir, 'left');
                  startingPoints = calculateStartingP(
                    tempStartP,
                    off,
                    direction
                  );
                  return (
                    <React.Fragment key={`${g.distance}-${idx}`}>
                      <PathComp
                        car={car}
                        startP={tempStartP}
                        distance={g.distance}
                        direction={tempDir}
                      />
                      <Tri
                        x={tempStartP.x + off.x}
                        y={tempStartP.y + off.y}
                        shape={shape}
                        prevDir={tempDir}
                        direction={direction}
                      />
                    </React.Fragment>
                  );
                } else if (shape === 'f' || shape === 'g') {
                  startingPoints = calculateStartingP(
                    tempStartP,
                    off,
                    direction
                  );
                  return (
                    <React.Fragment key={`${g.distance}-${idx}`}>
                      <PathComp
                        car={car}
                        startP={tempStartP}
                        distance={g.distance}
                        direction={tempDir}
                      />
                      <Straight
                        x={tempStartP.x + off.x}
                        y={tempStartP.y + off.y}
                      />
                    </React.Fragment>
                  );
                } else if (shape === 'h' || shape === 'i') {
                  startingPoints = calculateStartingP(
                    tempStartP,
                    off,
                    direction
                  );
                  return (
                    <React.Fragment key={`${g.distance}-${idx}`}>
                      <PathComp
                        car={car}
                        startP={tempStartP}
                        distance={g.distance}
                        direction={tempDir}
                      />
                      <HalfReverseCircle
                        car={car}
                        x={tempStartP.x + off.x}
                        y={tempStartP.y + off.y}
                      />
                    </React.Fragment>
                  );
                } else if (shape === 'j') {
                  startingPoints = calculateStartingP(
                    tempStartP,
                    off,
                    direction
                  );
                  return (
                    <React.Fragment key={`${g.distance}-${idx}`}>
                      <PathComp
                        car={car}
                        startP={tempStartP}
                        distance={g.distance}
                        direction={tempDir}
                      />
                      <UTurn
                        car={car}
                        x={tempStartP.x + off.x}
                        y={tempStartP.y + off.y}
                      />
                    </React.Fragment>
                  );
                } else {
                  startingPoints = calculateStartingP(
                    tempStartP,
                    off,
                    direction
                  );
                  return (
                    <Straight key={`${g.distance}-${idx}`} x={idx + 2} y={1} />
                  );
                }
              })}
            <Circle car={car} x={startingPoints.x} y={startingPoints.y} />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
