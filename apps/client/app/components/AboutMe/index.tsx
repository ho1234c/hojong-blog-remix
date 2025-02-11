import { AnimateText } from "./AnimateText";
import Profile from "./Profile";
import styles from "./index.module.css";
import { useState, type FC, useEffect, useLayoutEffect } from "react";
import githubIconUrl from "./icons/github.svg";
import instagramIconUrl from "./icons/instagram.svg";
import mailIconUrl from "./icons/mail.svg";
import workIconUrl from "./icons/work.svg";
import CodeIconUrl from "./icons/code.svg";
import PlantIconUrl from "./icons/plant.svg";
import clsx from "clsx";

const isDesktop =
  typeof window === `undefined`
    ? false
    : window.matchMedia(`(min-width: 768px)`).matches;

export const AboutMe: FC = () => {
  const [isShowProfile, setIsShowProfile] = useState(false);

  useLayoutEffect(function adjustImageVisibilityForDesktop() {
    setIsShowProfile(isDesktop);
  }, []);

  useEffect(
    function triggerProfileAnimation() {
      const timeout = setTimeout(() => setIsShowProfile(true), 1500);

      return () => clearTimeout(timeout);
    },
    [isShowProfile]
  );

  return (
    <div className={styles.container}>
      <section
        className={clsx({
          [styles.profile_wrapper]: true,
          [styles.show]: isShowProfile,
        })}
      >
        <Profile />
        <div className={styles.address}>
          <a
            href="https://github.com/ho1234c"
            target="__blank"
            rel="noopener noreferrer"
          >
            <img src={githubIconUrl} alt="" className={styles.icon} />
          </a>
          <a
            href="https://instagram.com/ho1234c?igshid=v6qmm1u6z692"
            target="__blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIconUrl} alt="" className={styles.icon} />
          </a>
          <a href="mailto:ho1234c@gmail.com">
            <img src={mailIconUrl} alt="" className={styles.icon} />
          </a>
        </div>
      </section>

      <section className={styles.description}>
        <section>
          <AnimateText id="first">
            소프트웨어 엔지니어 정종호 입니다
          </AnimateText>
          <AnimateText id="second" begin="0.5s" dur="2s">
            개발과 여행을 좋아하고, 운동과 보드게임을 즐깁니다
          </AnimateText>
        </section>

        <section>
          <h4>
            <img src={workIconUrl} alt="" className={styles.icon} />
            Work
          </h4>
          <ul>
            <li>
              <AnimateText id="work-1" begin="0.3s">
                why와 how를 모두 중요히 생각합니다
              </AnimateText>
            </li>
            <li>
              <AnimateText id="work-2" begin="0.5s">
                작고 빠르게 시도합니다
              </AnimateText>
            </li>
            <li>
              <AnimateText id="work-3" begin="0.8s">
                언제든 내가 틀릴 수 있음을 인정하며
              </AnimateText>
              <AnimateText id="work-4" begin="1s">
                이미 결정된것에 최선을 다합니다
              </AnimateText>
            </li>
          </ul>
        </section>
        <section>
          <h4>
            <img src={PlantIconUrl} alt="" className={styles.icon} />
            Life
          </h4>
          <ul>
            <li>
              <AnimateText id="life-1" begin="0.2s">
                작은 목표를 세우고 꾸준히 해나갑니다
              </AnimateText>
            </li>
            <li>
              <AnimateText id="life-2" begin="0.5s" dur="2s">
                불규칙 속의 규칙을 중요하게 생각합니다
              </AnimateText>
            </li>
            <li>
              <AnimateText id="life-3" begin="1s" dur="2s">
                일상과 사유로부터 영감과 통찰을 얻습니다
              </AnimateText>
            </li>
          </ul>
        </section>
        <section>
          <h4>
            <img src={CodeIconUrl} alt="" className={styles.icon} />
            Code
          </h4>
          <ul>
            <li>
              <AnimateText id="code-1" dur="2s">
                선언형을 선호합니다
              </AnimateText>
            </li>
            <li>
              <AnimateText id="code-2" dur="1s">
                테스트 코드의 가치에 공감합니다
              </AnimateText>
            </li>
            <li>
              <AnimateText id="code-3" begin="0.5s">
                짧은 주기로 리팩토링 합니다
              </AnimateText>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
