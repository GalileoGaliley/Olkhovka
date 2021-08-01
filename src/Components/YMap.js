import React from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import { points, gradientColors } from "./data";

const mapState = {
  center: [51.494333, 45.720466],
  zoom: 15,
  behaviors: ["default", "scrollZoom"]
};

const getPointData = index => {
  return {
    balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
    clusterCaption: "placemark <strong>" + index + "</strong>"
  };
};

const getPointOptions = () => {
  return {
    preset: "islands#violetIcon",
    iconColor: getRandomColor()
  };
};

function getRandomColor() {
  return gradientColors[Math.floor(Math.random() * gradientColors.length)];
}

class ClustererCreate extends React.Component {
  constructor(props) {
    super(props);
    this.changeSomething = this.changeSomething.bind(this);
    this.state = {
      some: 0
    };
  }

  changeSomething = () => {
    this.setState({ some: 1 });
  };

  render() {
    return (
      <div>
        <YMaps>
          <Map
            state={mapState}
            width="100%"
            height="500px"
            modules={["package.full"]}
          >
            <Clusterer
              options={{
                clusterIconLayout: "default#pieChart",
                clusterIconPieChartRadius: 25,
                clusterIconPieChartCoreRadius: 10,
                clusterIconPieChartStrokeWidth: 1,
                clusterDisableClickZoom: true,
                clusterHideIconOnBalloonOpen: false,
                geoObjectHideIconOnBalloonOpen: false
              }}
            >
              {points.map((points, idx) => (
                <Placemark
                  key={idx}
                  geometry={points}
                  properties={getPointData(idx)}
                  options={getPointOptions()}
                />
              ))}
            </Clusterer>
          </Map>
        </YMaps>

      </div>
    );
  }
}

export default ClustererCreate;
