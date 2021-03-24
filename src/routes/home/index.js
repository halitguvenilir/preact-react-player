import { h } from "preact";
import style from "./style.css";
import ReactPlayer from "react-player/youtube";

const url = "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl";

const Home = () => (
  <div class={style.home}>
    <h1>React Player</h1>
    <p>This is the React Player plugin.</p>
    <ReactPlayer url={url} />
  </div>
);

export default Home;
