import { a } from "./a";
import Cat from "../svgs/cat.svg";

export default function Home() {
  return (
    <div className="container">
      <marquee>SVG Cat!</marquee>
      <div>{a}</div>
      <Cat />
      <style jsx>{`
        .container {
          width: 600px;
          margin: 100px auto;
        }
      `}</style>
    </div>
  );
}
