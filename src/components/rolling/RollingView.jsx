import { useState } from "react";
import "./Rollingstyle.scss";

const images = [
  require("../../assets/image/Rolling/1.png"),
  require("../../assets/image/Rolling/2.png"),
  require("../../assets/image/Rolling/3.png"),
  require("../../assets/image/Rolling/4.png"),
  require("../../assets/image/Rolling/1.png"),
  require("../../assets/image/Rolling/2.png"),
  require("../../assets/image/Rolling/3.png"),
  require("../../assets/image/Rolling/4.png"),
];

function RollingView() {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return <div></div>;
}

export default RollingView;
