import React from "react";
import * as Icon from "react-feather";

export default function WeatherIcon(props) {
  let size = props.size;

  const codeMapping = {
    "01d": <Icon.Sun color="#F2DF3A" size={size} />,
    "01n": <Icon.Moon color="#F2DF3A" size={size} />,
    "02d": <Icon.Cloud color="#3AB4F2" size={size} />,
    "02n": <Icon.Cloud color="#3AB4F2" size={size} />,
    "03d": <Icon.Cloud color="#3AB4F2" size={size} />,
    "03n": <Icon.Cloud color="#3AB4F2" size={size} />,
    "04d": <Icon.Cloud color="#3AB4F2" size={size} />,
    "04n": <Icon.Cloud color="#3AB4F2" size={size} />,
    "09d": <Icon.CloudDrizzle color="#0078AA" size={size} />,
    "09n": <Icon.CloudDrizzle color="#0078AA" size={size} />,
    "10d": <Icon.CloudRain color="#0078AA" size={size} />,
    "10n": <Icon.CloudRain color="#0078AA" size={size} />,
    "11d": <Icon.CloudLightning color="#E0FCFF" size={size} />,
    "11n": <Icon.CloudLightning color="#E0FCFF" size={size} />,
    "13d": <Icon.CloudSnow color="#E0FCFF" size={size} />,
    "13n": <Icon.CloudSnow color="#E0FCFF" size={size} />,
    "50d": <Icon.Cloud color="#3AB4F2" size={size} />,
    "50n": <Icon.Cloud color="#3AB4F2" size={size} />,
  };
  return (
    <span className="WeatherIcon">
      <span className="icon">{codeMapping[props.code]}</span>
    </span>
  );
}
