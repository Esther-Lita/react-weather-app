import React from "react";
import * as Icon from "react-feather";

export default function WeatherIcon(props) {
  let color = props.color;
  let size = props.size;

  const codeMapping = {
    "01d": <Icon.Sun color={color} size={size} />,
    "01n": <Icon.Moon color={color} size={size} />,
    "02d": <Icon.Cloud color={color} size={size} />,
    "02n": <Icon.Cloud color={color} size={size} />,
    "03d": <Icon.Cloud color={color} size={size} />,
    "03n": <Icon.Cloud color={color} size={size} />,
    "04d": <Icon.Cloud color={color} size={size} />,
    "04n": <Icon.Cloud color={color} size={size} />,
    "09d": <Icon.CloudDrizzle color={color} size={size} />,
    "09n": <Icon.CloudDrizzle color={color} size={size} />,
    "10d": <Icon.CloudRain color={color} size={size} />,
    "10n": <Icon.CloudRain color={color} size={size} />,
    "11d": <Icon.CloudLightning color={color} size={size} />,
    "11n": <Icon.CloudLightning color={color} size={size} />,
    "13d": <Icon.CloudSnow color={color} size={size} />,
    "13n": <Icon.CloudSnow color={color} size={size} />,
    "50d": <Icon.Cloud color={color} size={size} />,
    "50n": <Icon.Cloud color={color} size={size} />,
  };
  return (
    <span className="WeatherIcon">
      <span className="icon">{codeMapping[props.code]}</span>
    </span>
  );
}
