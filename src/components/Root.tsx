import React, { useState } from "react";

import aImg from "../assets/a.jpg";
import svgImage from "../assets/undraw_Taken_re_yn20.svg";
import zImg from "../assets/z.jpg";
import "./Root.css";

/**
 * Expected:
 *
 * import React, { useState } from "react";
 *
 * import aImg from "../assets/a.jpg";
 * import zImg from "../assets/z.jpg";
 *
 * import svgImage from "../assets/undraw_Taken_re_yn20.svg";
 *
 * import "./Root.css";
 *
 */

interface IProps {
  a?: number;
}

export function Root(props: IProps) {
  const { a = 123 } = props;
  const [count, setCount] = useState(0);
  return (
    <div className="Root">
      <div>Hello! asdasdss {a}</div>
      <button onClick={() => setCount((c) => c + 2)}>+</button>
      <div className="Root__Counter">{count}</div>
      <img src={aImg} height={100} width={100} alt="" />
      <img src={zImg} height={100} width={100} alt="" />
      <img src={svgImage} height={100} width={100} alt="" />
    </div>
  );
}
