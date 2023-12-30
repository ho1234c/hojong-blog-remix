import { type FC, useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import styles from "./index.module.css";

type Props = {
  siteTitle: string;
};

export const Header: FC<Props> = (props) => {
  const [scrollPos, setScrollPos] = useState(() => 0);
  const [headerYPos, setHeaderYPos] = useState(() => 0);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 0) return;

      let nextYpos = headerYPos + (scrollPos - window.scrollY);

      if (nextYpos <= -80) {
        nextYpos = -80;
      } else if (nextYpos >= 0) {
        nextYpos = 0;
      }
      setScrollPos(window.scrollY);
      setHeaderYPos(nextYpos);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [headerYPos, scrollPos]);

  return (
    <header
      className={styles.header}
      style={{ transform: `translateY(${headerYPos}px)` }}
    >
      <div className={styles.menu}>
        <div className={styles["go-to-main"]}>
          <Link to="/">{props.siteTitle}</Link>
        </div>
        {/* <div className="go-to-me">
          <Link to="/me">About me</Link>
        </div> */}
      </div>
    </header>
  );
};
