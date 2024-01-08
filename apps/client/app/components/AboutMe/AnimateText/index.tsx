import type { FC, PropsWithChildren, CSSProperties } from "react";

export interface Props extends PropsWithChildren {
  id: string;
  width?: string;
  dur?: string;
  begin?: string;
  fontSize?: string;
  style?: CSSProperties;
}

export const AnimateText: FC<Props> = ({
  id,
  children,
  dur = "3s",
  begin = "0s",
  fontSize = "13",
  width = "100%",
  style,
}) => (
  <div style={style}>
    <svg
      width={width}
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <path id={id}>
        <animate
          attributeName="d"
          from="m0,15 h0"
          to="m0,15 h1000"
          dur={dur}
          begin={begin}
          repeatCount="1"
          fill="freeze"
        />
      </path>
      <text fontSize={fontSize} fill="currentColor" fontWeight="bold">
        <textPath xlinkHref={`#${id}`}>{children}</textPath>
      </text>
    </svg>
  </div>
);
