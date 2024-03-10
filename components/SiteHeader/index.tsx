import Link from "next/link";
import { Container } from "@/components";
import settings from "../../data/settings.json";

export default function SiteHeader({}: {}) {
  const { headerNavigation } = settings;

  const renderNavigation = () => {
    return (
      headerNavigation &&
      headerNavigation.map((navigation) => {
        const { _key, title, content } = navigation;
        return (
          <Link key={_key} href={content.slug} className="text-lg px-5">
            {title}
          </Link>
        );
      })
    );
  };

  const siteLogo = (
    <Link href={"/"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="120"
        height="40"
        viewBox="0 0 2000 297"
      >
        <g transform="matrix(1,0,0,1,-1.2121212121212466,-0.043667289891487826)">
          <svg
            viewBox="0 0 396 59"
            data-background-color="#000000"
            preserveAspectRatio="xMidYMid meet"
            height="297"
            width="2000"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="tight-bounds"
              transform="matrix(1,0,0,1,0.2400000000000091,0.00867464681346064)"
            >
              <svg
                viewBox="0 0 395.52 58.98265070637307"
                height="58.98265070637307"
                width="395.52"
              >
                <g>
                  <svg
                    viewBox="0 0 682.7858380704889 101.8216995200492"
                    height="58.98265070637307"
                    width="395.52"
                  >
                    <g></g>
                    <g transform="matrix(1,0,0,1,0,12.824452880453656)">
                      <svg
                        viewBox="0 0 395.52 76.17279375914188"
                        height="76.17279375914188"
                        width="395.52"
                      >
                        <g id="textblocktransform">
                          <svg
                            viewBox="0 0 395.52 76.17279375914188"
                            height="76.17279375914188"
                            width="395.52"
                            id="textblock"
                          >
                            <g>
                              <svg
                                viewBox="0 0 395.52 76.17279375914188"
                                height="76.17279375914188"
                                width="395.52"
                              >
                                <g transform="matrix(1,0,0,1,0,0)">
                                  <svg
                                    width="395.52"
                                    viewBox="2.4 -39 206.38 39.5"
                                    height="76.17279375914188"
                                    data-palette-color="url(#14cd96f4-21b6-47d9-b1c4-49998339faba)"
                                  >
                                    <g
                                      className="wordmark-text-0"
                                      data-fill-palette-color="primary"
                                      id="text-0"
                                    ></g>
                                  </svg>
                                </g>
                              </svg>
                            </g>
                          </svg>
                        </g>
                      </svg>
                    </g>
                    <g transform="matrix(1,0,0,1,438.3544780704889,0)">
                      <svg
                        viewBox="0 0 244.43135999999998 101.8216995200492"
                        height="101.8216995200492"
                        width="244.43135999999998"
                      >
                        <g>
                          <svg
                            viewBox="0.010982379206281617 0 63.01528289396303 26.25"
                            version="1.1"
                            x="0"
                            y="0"
                            width="244.43135999999998"
                            height="101.8216995200492"
                            className="icon-icon-0"
                            data-fill-palette-color="accent"
                            id="icon-0"
                          ></svg>
                        </g>
                      </svg>
                    </g>
                  </svg>
                </g>
                <defs></defs>
                <mask id="45d904a1-2229-4e1c-b69c-516ca6efbe0a">
                  <g id="SvgjsG1607">
                    <svg
                      viewBox="0 0 395.52 58.98265070637307"
                      height="58.98265070637307"
                      width="395.52"
                    >
                      <g>
                        <svg
                          viewBox="0 0 682.7858380704889 101.8216995200492"
                          height="58.98265070637307"
                          width="395.52"
                        >
                          <g>
                            <rect
                              width="6.869341151522574"
                              height="76.55365772793759"
                              x="413.50256845948314"
                              y="12.634020896055802"
                              fill="white"
                              opacity="1"
                              stroke-width="0"
                              stroke="transparent"
                              fill-opacity="1"
                              className="rect-qz-0"
                              rx="1%"
                              id="SvgjsRect1606"
                              data-palette-color="url(#14cd96f4-21b6-47d9-b1c4-49998339faba)"
                            ></rect>
                          </g>
                          <g transform="matrix(1,0,0,1,0,12.824452880453656)">
                            <svg
                              viewBox="0 0 395.52 76.17279375914188"
                              height="76.17279375914188"
                              width="395.52"
                            >
                              <g id="SvgjsG1605">
                                <svg
                                  viewBox="0 0 395.52 76.17279375914188"
                                  height="76.17279375914188"
                                  width="395.52"
                                  id="SvgjsSvg1604"
                                >
                                  <g>
                                    <svg
                                      viewBox="0 0 395.52 76.17279375914188"
                                      height="76.17279375914188"
                                      width="395.52"
                                    >
                                      <g transform="matrix(1,0,0,1,0,0)">
                                        <svg
                                          width="395.52"
                                          viewBox="2.4 -39 206.38 39.5"
                                          height="76.17279375914188"
                                          data-palette-color="url(#14cd96f4-21b6-47d9-b1c4-49998339faba)"
                                        >
                                          <g
                                            className="wordmark-text-0"
                                            data-fill-palette-color="primary"
                                            id="SvgjsG1603"
                                          >
                                            <path
                                              d="M11.6-33.1L11.6-17.05 17.8-17.05Q19.2-17.05 20.43-17.48 21.65-17.9 22.35-18.6L22.35-18.6Q23.35-19.65 24.05-21.35 24.75-23.05 24.75-25L24.75-25Q24.75-26.9 24.08-28.48 23.4-30.05 22.35-31.3L22.35-31.3Q21.55-32.15 20.3-32.63 19.05-33.1 17.6-33.1L17.6-33.1 11.6-33.1ZM18.9-14.15L18.9-14.15 11.6-14.15 11.6-3.2 16.35-2.15 16.35 0 2.4 0 2.4-2.15 6.6-3.2 6.6-32.8 2.4-33.85 2.4-36 18.95-36Q21.3-36 23.25-35.38 25.2-34.75 26.45-33.6L26.45-33.6Q28.2-32.05 29.23-29.88 30.25-27.7 30.25-25.3L30.25-25.3Q30.25-22.85 29.18-20.5 28.1-18.15 26.35-16.6L26.35-16.6Q25.05-15.45 23.1-14.8 21.15-14.15 18.9-14.15ZM37.2-3L37.2-24 33.35-24.95 33.35-27 42.05-27 42.05-3 45.9-2.05 45.9 0 33.35 0 33.35-2.05 37.2-3ZM36.5-35.05L36.5-35.05Q36.5-36.5 37.35-37.35 38.2-38.2 39.6-38.2L39.6-38.2Q41.05-38.2 41.9-37.35 42.75-36.5 42.75-35.05L42.75-35.05Q42.75-33.65 41.9-32.8 41.05-31.95 39.6-31.95L39.6-31.95Q38.15-31.95 37.32-32.77 36.5-33.6 36.5-35.05ZM58.4-24.95L56.2-24 62.3-16.05 68.15-24 65.15-24.95 65.15-27 74.55-27 74.55-24.95 71.7-24 63.59-14.35 72.45-2.95 75.2-2.05 75.2 0 64.25 0 64.25-2.05 67.09-3 60.65-11.3 54.45-3 57.45-2.05 57.45 0 48.05 0 48.05-2.05 50.85-3 59.35-13 50.85-24 48.05-24.95 48.05-27 58.4-27 58.4-24.95ZM100.64-13.2L100.64-13.2 83.19-13.2Q83.19-9.55 84.19-7.15L84.19-7.15Q85.19-4.85 87.04-3.85 88.89-2.85 91.04-2.85L91.04-2.85Q93.39-2.85 95.34-3.83 97.29-4.8 98.84-6.5L98.84-6.5 100.44-5.3Q98.69-2.9 96.19-1.2 93.69 0.5 89.74 0.5L89.74 0.5Q86.29 0.5 83.64-0.98 80.99-2.45 79.59-5.3L79.59-5.3Q78.84-6.85 78.49-8.75 78.14-10.65 78.14-12.8L78.14-12.8Q78.14-19.8 81.37-23.65 84.59-27.5 90.14-27.5L90.14-27.5Q95.24-27.5 98.02-24.33 100.79-21.15 100.79-15.55L100.79-15.55Q100.79-15.05 100.77-14.63 100.74-14.2 100.64-13.2ZM89.84-24.8L89.84-24.8Q83.84-24.8 83.24-15.65L83.24-15.65 95.74-15.65 95.74-17.3Q95.74-20.9 94.22-22.85 92.69-24.8 89.84-24.8ZM104.39-2.05L108.24-3 108.24-36 104.39-36.95 104.39-39 113.09-39 113.09-3 116.94-2.05 116.94 0 104.39 0 104.39-2.05ZM129.99-33.1L129.99-17.05 136.19-17.05Q137.59-17.05 138.81-17.48 140.04-17.9 140.74-18.6L140.74-18.6Q141.74-19.65 142.44-21.35 143.14-23.05 143.14-25L143.14-25Q143.14-26.9 142.46-28.48 141.79-30.05 140.74-31.3L140.74-31.3Q139.94-32.15 138.69-32.63 137.44-33.1 135.99-33.1L135.99-33.1 129.99-33.1ZM137.29-14.15L137.29-14.15 129.99-14.15 129.99-3.2 134.74-2.15 134.74 0 120.79 0 120.79-2.15 124.99-3.2 124.99-32.8 120.79-33.85 120.79-36 137.34-36Q139.69-36 141.64-35.38 143.59-34.75 144.84-33.6L144.84-33.6Q146.59-32.05 147.61-29.88 148.64-27.7 148.64-25.3L148.64-25.3Q148.64-22.85 147.56-20.5 146.49-18.15 144.74-16.6L144.74-16.6Q143.44-15.45 141.49-14.8 139.54-14.15 137.29-14.15ZM176.74-13.75L176.74-13.75Q176.74-10.5 175.76-7.58 174.79-4.65 173.04-2.75L173.04-2.75Q171.54-1.1 169.34-0.3 167.14 0.5 164.34 0.5L164.34 0.5Q161.59 0.5 159.44-0.28 157.29-1.05 155.79-2.65L155.79-2.65Q154.09-4.5 153.16-7.23 152.24-9.95 152.24-13.15L152.24-13.15Q152.24-16.4 153.19-19.38 154.14-22.35 155.94-24.25L155.94-24.25Q157.54-25.95 159.66-26.73 161.79-27.5 164.54-27.5L164.54-27.5Q167.29-27.5 169.49-26.73 171.69-25.95 173.19-24.35L173.19-24.35Q174.94-22.5 175.84-19.73 176.74-16.95 176.74-13.75ZM157.59-13.7L157.59-13.7Q157.59-10.65 158.06-8.43 158.54-6.2 159.39-4.75L159.39-4.75Q160.24-3.5 161.41-2.8 162.59-2.1 164.49-2.1L164.49-2.1Q167.94-2.1 169.64-4.45L169.64-4.45Q170.54-5.75 170.96-8.05 171.39-10.35 171.39-13.35L171.39-13.35Q171.39-16.35 170.91-18.6 170.44-20.85 169.59-22.25L169.59-22.25Q168.79-23.55 167.56-24.23 166.34-24.9 164.44-24.9L164.44-24.9Q160.94-24.9 159.39-22.6L159.39-22.6Q157.59-19.8 157.59-13.7ZM181.33-13.25L181.33-13.25Q181.33-16.5 182.18-19.45 183.03-22.4 184.73-24.25L184.73-24.25Q186.18-25.85 188.18-26.68 190.18-27.5 192.78-27.5L192.78-27.5Q194.98-27.5 196.81-26.65 198.63-25.8 200.08-23.6L200.08-23.6 200.08-36 196.23-36.95 196.23-39 204.93-39 204.93-3 208.78-2.05 208.78 0 201.03 0.5 200.63-3.6Q199.08-1.3 197.13-0.4 195.18 0.5 192.78 0.5L192.78 0.5Q190.23 0.5 188.18-0.25 186.13-1 184.78-2.65L184.78-2.65Q183.18-4.6 182.26-7.33 181.33-10.05 181.33-13.25ZM200.08-13.3L200.08-13.3Q200.08-16.35 199.63-18.6 199.18-20.85 198.33-22.25L198.33-22.25Q197.53-23.55 196.38-24.23 195.23-24.9 193.33-24.9L193.33-24.9Q191.63-24.9 190.36-24.3 189.08-23.7 188.28-22.55L188.28-22.55Q187.38-21.3 186.98-18.98 186.58-16.65 186.58-13.65L186.58-13.65Q186.58-10.65 187.03-8.43 187.48-6.2 188.33-4.75L188.33-4.75Q189.18-3.5 190.36-2.8 191.53-2.1 193.38-2.1L193.38-2.1Q195.13-2.1 196.41-2.68 197.68-3.25 198.33-4.4L198.33-4.4Q199.18-5.8 199.63-8.03 200.08-10.25 200.08-13.3Z"
                                              fill="white"
                                            ></path>
                                          </g>
                                        </svg>
                                      </g>
                                    </svg>
                                  </g>
                                </svg>
                              </g>
                            </svg>
                          </g>
                          <g transform="matrix(1,0,0,1,438.3544780704889,0)">
                            <svg
                              viewBox="0 0 244.43135999999998 101.8216995200492"
                              height="101.8216995200492"
                              width="244.43135999999998"
                            >
                              <g>
                                <svg
                                  preserveAspectRatio="xMidYMid"
                                  viewBox="0.010982379206281617 0 63.01528289396303 26.25"
                                  version="1.1"
                                  x="0"
                                  y="0"
                                  width="244.43135999999998"
                                  height="101.8216995200492"
                                  className="icon-icon-0"
                                  data-fill-palette-color="accent"
                                  id="SvgjsSvg1602"
                                >
                                  <path
                                    d="M16.656 0C12.325 0 8.721 3.133 7.969 7.25 6.039 6.798 4.069 6.28 2.031 5.719 1.621 5.605 1.199 5.679 0.844 5.906 0.486 6.133 0.228 6.489 0.156 6.906 0.094 7.265-1.269 15.788 5.781 21.781 9.674 25.089 21.637 26.25 31.531 26.25 41.425 26.25 53.389 25.089 57.281 21.781 64.331 15.788 62.936 7.265 62.875 6.906 62.803 6.489 62.576 6.133 62.219 5.906 61.864 5.68 61.408 5.605 61 5.719 59.36 6.17 57.756 6.588 56.188 6.969 55.324 2.992 51.794 0 47.563 0 43.994 0 40.926 2.137 39.531 5.188 38.149 2.769 35.665 1.029 32.688 0.75 30.34 0.533 28.037 1.242 26.219 2.75 25.525 3.325 24.948 3.986 24.469 4.719 22.98 1.929 20.033 0 16.656 0zM16.656 3C19.877 3 22.5 5.624 22.5 8.844 22.5 9.135 22.48 9.434 22.438 9.719 18.748 9.342 14.928 8.756 10.906 7.906 11.363 5.138 13.76 3 16.656 3zM47.563 3C50.37 3 52.724 5.013 53.281 7.656 49.265 8.542 45.456 9.172 41.781 9.594 41.75 9.349 41.719 9.093 41.719 8.844 41.719 5.624 44.343 3 47.563 3zM31.844 3.688C32.036 3.687 32.212 3.7 32.406 3.719 35.571 4.015 37.914 6.813 37.688 9.969 35.608 10.115 33.559 10.219 31.531 10.219 29.728 10.219 27.905 10.115 26.063 10 26.038 9.671 26.031 9.334 26.063 9 26.207 7.447 26.954 6.059 28.156 5.063 29.207 4.191 30.497 3.693 31.844 3.688zM3 9.094C13.603 11.892 22.727 13.219 31.531 13.219 38.935 13.219 46.553 12.271 55.094 10.313 55.24 10.279 55.384 10.253 55.531 10.219 57.005 9.876 58.498 9.498 60.031 9.094 60.027 11.497 59.394 16 55.313 19.469 52.7 21.691 42.932 23.25 31.531 23.25 20.13 23.25 10.332 21.691 7.719 19.469 3.637 15.999 3.005 11.494 3 9.094zM56.375 12.094C55.554 12.04 54.844 12.613 54.781 13.438 54.494 14.876 50.405 18.378 35.094 17.344 34.261 17.28 33.556 17.924 33.5 18.75 33.445 19.577 34.049 20.288 34.875 20.344 36.91 20.481 38.78 20.563 40.469 20.563 56.374 20.563 57.657 14.972 57.75 13.75 57.812 12.924 57.201 12.156 56.375 12.094z"
                                    fill="black"
                                    fill-rule="evenodd"
                                  ></path>
                                </svg>
                              </g>
                            </svg>
                          </g>
                        </svg>
                      </g>
                      <defs>
                        <mask></mask>
                      </defs>
                    </svg>
                    <rect
                      width="395.52"
                      height="58.98265070637307"
                      fill="black"
                      stroke="none"
                      visibility="hidden"
                    ></rect>
                  </g>
                </mask>
                <linearGradient
                  x1="0"
                  x2="1"
                  y1="0.548"
                  y2="0.55"
                  id="14cd96f4-21b6-47d9-b1c4-49998339faba"
                >
                  <stop stop-color="#ff6cab" offset="0"></stop>
                  <stop stop-color="#7366ff" offset="1"></stop>
                </linearGradient>
                <rect
                  width="395.52"
                  height="58.98265070637307"
                  fill="url(#14cd96f4-21b6-47d9-b1c4-49998339faba)"
                  mask="url(#45d904a1-2229-4e1c-b69c-516ca6efbe0a)"
                  data-fill-palette-color="primary"
                ></rect>
                <mask id="cbb5dcd7-6046-4b4d-9250-cc60de9b85bd">
                  <g id="SvgjsG1630">
                    <svg
                      viewBox="0 0 395.52 58.98265070637307"
                      height="58.98265070637307"
                      width="395.52"
                    >
                      <g>
                        <svg
                          viewBox="0 0 682.7858380704889 101.8216995200492"
                          height="58.98265070637307"
                          width="395.52"
                        >
                          <g></g>
                          <g transform="matrix(1,0,0,1,0,12.824452880453656)">
                            <svg
                              viewBox="0 0 395.52 76.17279375914188"
                              height="76.17279375914188"
                              width="395.52"
                            >
                              <g id="SvgjsG1629">
                                <svg
                                  viewBox="0 0 395.52 76.17279375914188"
                                  height="76.17279375914188"
                                  width="395.52"
                                  id="SvgjsSvg1628"
                                >
                                  <g>
                                    <svg
                                      viewBox="0 0 395.52 76.17279375914188"
                                      height="76.17279375914188"
                                      width="395.52"
                                    >
                                      <g transform="matrix(1,0,0,1,0,0)">
                                        <svg
                                          width="395.52"
                                          viewBox="2.4 -39 206.38 39.5"
                                          height="76.17279375914188"
                                          data-palette-color="url(#14cd96f4-21b6-47d9-b1c4-49998339faba)"
                                        >
                                          <g
                                            className="wordmark-text-0"
                                            data-fill-palette-color="primary"
                                            id="SvgjsG1627"
                                          ></g>
                                        </svg>
                                      </g>
                                    </svg>
                                  </g>
                                </svg>
                              </g>
                            </svg>
                          </g>
                          <g transform="matrix(1,0,0,1,438.3544780704889,0)">
                            <svg
                              viewBox="0 0 244.43135999999998 101.8216995200492"
                              height="101.8216995200492"
                              width="244.43135999999998"
                            >
                              <g>
                                <svg
                                  preserveAspectRatio="xMidYMid"
                                  viewBox="0.010982379206281617 0 63.01528289396303 26.25"
                                  version="1.1"
                                  x="0"
                                  y="0"
                                  width="244.43135999999998"
                                  height="101.8216995200492"
                                  className="icon-icon-0"
                                  data-fill-palette-color="accent"
                                  id="SvgjsSvg1626"
                                >
                                  <path
                                    d="M16.656 0C12.325 0 8.721 3.133 7.969 7.25 6.039 6.798 4.069 6.28 2.031 5.719 1.621 5.605 1.199 5.679 0.844 5.906 0.486 6.133 0.228 6.489 0.156 6.906 0.094 7.265-1.269 15.788 5.781 21.781 9.674 25.089 21.637 26.25 31.531 26.25 41.425 26.25 53.389 25.089 57.281 21.781 64.331 15.788 62.936 7.265 62.875 6.906 62.803 6.489 62.576 6.133 62.219 5.906 61.864 5.68 61.408 5.605 61 5.719 59.36 6.17 57.756 6.588 56.188 6.969 55.324 2.992 51.794 0 47.563 0 43.994 0 40.926 2.137 39.531 5.188 38.149 2.769 35.665 1.029 32.688 0.75 30.34 0.533 28.037 1.242 26.219 2.75 25.525 3.325 24.948 3.986 24.469 4.719 22.98 1.929 20.033 0 16.656 0zM16.656 3C19.877 3 22.5 5.624 22.5 8.844 22.5 9.135 22.48 9.434 22.438 9.719 18.748 9.342 14.928 8.756 10.906 7.906 11.363 5.138 13.76 3 16.656 3zM47.563 3C50.37 3 52.724 5.013 53.281 7.656 49.265 8.542 45.456 9.172 41.781 9.594 41.75 9.349 41.719 9.093 41.719 8.844 41.719 5.624 44.343 3 47.563 3zM31.844 3.688C32.036 3.687 32.212 3.7 32.406 3.719 35.571 4.015 37.914 6.813 37.688 9.969 35.608 10.115 33.559 10.219 31.531 10.219 29.728 10.219 27.905 10.115 26.063 10 26.038 9.671 26.031 9.334 26.063 9 26.207 7.447 26.954 6.059 28.156 5.063 29.207 4.191 30.497 3.693 31.844 3.688zM3 9.094C13.603 11.892 22.727 13.219 31.531 13.219 38.935 13.219 46.553 12.271 55.094 10.313 55.24 10.279 55.384 10.253 55.531 10.219 57.005 9.876 58.498 9.498 60.031 9.094 60.027 11.497 59.394 16 55.313 19.469 52.7 21.691 42.932 23.25 31.531 23.25 20.13 23.25 10.332 21.691 7.719 19.469 3.637 15.999 3.005 11.494 3 9.094zM56.375 12.094C55.554 12.04 54.844 12.613 54.781 13.438 54.494 14.876 50.405 18.378 35.094 17.344 34.261 17.28 33.556 17.924 33.5 18.75 33.445 19.577 34.049 20.288 34.875 20.344 36.91 20.481 38.78 20.563 40.469 20.563 56.374 20.563 57.657 14.972 57.75 13.75 57.812 12.924 57.201 12.156 56.375 12.094z"
                                    fill="white"
                                    fill-rule="evenodd"
                                  ></path>
                                </svg>
                              </g>
                            </svg>
                          </g>
                        </svg>
                      </g>
                      <defs>
                        <mask></mask>
                      </defs>
                      <mask>
                        <g id="SvgjsG1625">
                          <svg
                            viewBox="0 0 395.52 58.98265070637307"
                            height="58.98265070637307"
                            width="395.52"
                          >
                            <g>
                              <svg
                                viewBox="0 0 682.7858380704889 101.8216995200492"
                                height="58.98265070637307"
                                width="395.52"
                              >
                                <g>
                                  <rect
                                    width="6.869341151522574"
                                    height="76.55365772793759"
                                    x="413.50256845948314"
                                    y="12.634020896055802"
                                    fill="black"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="transparent"
                                    fill-opacity="1"
                                    className="rect-qz-0"
                                    rx="1%"
                                    id="SvgjsRect1624"
                                    data-palette-color="url(#14cd96f4-21b6-47d9-b1c4-49998339faba)"
                                  ></rect>
                                </g>
                                <g transform="matrix(1,0,0,1,0,12.824452880453656)">
                                  <svg
                                    viewBox="0 0 395.52 76.17279375914188"
                                    height="76.17279375914188"
                                    width="395.52"
                                  >
                                    <g id="SvgjsG1623">
                                      <svg
                                        viewBox="0 0 395.52 76.17279375914188"
                                        height="76.17279375914188"
                                        width="395.52"
                                        id="SvgjsSvg1622"
                                      >
                                        <g>
                                          <svg
                                            viewBox="0 0 395.52 76.17279375914188"
                                            height="76.17279375914188"
                                            width="395.52"
                                          >
                                            <g transform="matrix(1,0,0,1,0,0)">
                                              <svg
                                                width="395.52"
                                                viewBox="2.4 -39 206.38 39.5"
                                                height="76.17279375914188"
                                                data-palette-color="url(#14cd96f4-21b6-47d9-b1c4-49998339faba)"
                                              >
                                                <g
                                                  className="wordmark-text-0"
                                                  data-fill-palette-color="primary"
                                                  id="SvgjsG1621"
                                                >
                                                  <path
                                                    d="M11.6-33.1L11.6-17.05 17.8-17.05Q19.2-17.05 20.43-17.48 21.65-17.9 22.35-18.6L22.35-18.6Q23.35-19.65 24.05-21.35 24.75-23.05 24.75-25L24.75-25Q24.75-26.9 24.08-28.48 23.4-30.05 22.35-31.3L22.35-31.3Q21.55-32.15 20.3-32.63 19.05-33.1 17.6-33.1L17.6-33.1 11.6-33.1ZM18.9-14.15L18.9-14.15 11.6-14.15 11.6-3.2 16.35-2.15 16.35 0 2.4 0 2.4-2.15 6.6-3.2 6.6-32.8 2.4-33.85 2.4-36 18.95-36Q21.3-36 23.25-35.38 25.2-34.75 26.45-33.6L26.45-33.6Q28.2-32.05 29.23-29.88 30.25-27.7 30.25-25.3L30.25-25.3Q30.25-22.85 29.18-20.5 28.1-18.15 26.35-16.6L26.35-16.6Q25.05-15.45 23.1-14.8 21.15-14.15 18.9-14.15ZM37.2-3L37.2-24 33.35-24.95 33.35-27 42.05-27 42.05-3 45.9-2.05 45.9 0 33.35 0 33.35-2.05 37.2-3ZM36.5-35.05L36.5-35.05Q36.5-36.5 37.35-37.35 38.2-38.2 39.6-38.2L39.6-38.2Q41.05-38.2 41.9-37.35 42.75-36.5 42.75-35.05L42.75-35.05Q42.75-33.65 41.9-32.8 41.05-31.95 39.6-31.95L39.6-31.95Q38.15-31.95 37.32-32.77 36.5-33.6 36.5-35.05ZM58.4-24.95L56.2-24 62.3-16.05 68.15-24 65.15-24.95 65.15-27 74.55-27 74.55-24.95 71.7-24 63.59-14.35 72.45-2.95 75.2-2.05 75.2 0 64.25 0 64.25-2.05 67.09-3 60.65-11.3 54.45-3 57.45-2.05 57.45 0 48.05 0 48.05-2.05 50.85-3 59.35-13 50.85-24 48.05-24.95 48.05-27 58.4-27 58.4-24.95ZM100.64-13.2L100.64-13.2 83.19-13.2Q83.19-9.55 84.19-7.15L84.19-7.15Q85.19-4.85 87.04-3.85 88.89-2.85 91.04-2.85L91.04-2.85Q93.39-2.85 95.34-3.83 97.29-4.8 98.84-6.5L98.84-6.5 100.44-5.3Q98.69-2.9 96.19-1.2 93.69 0.5 89.74 0.5L89.74 0.5Q86.29 0.5 83.64-0.98 80.99-2.45 79.59-5.3L79.59-5.3Q78.84-6.85 78.49-8.75 78.14-10.65 78.14-12.8L78.14-12.8Q78.14-19.8 81.37-23.65 84.59-27.5 90.14-27.5L90.14-27.5Q95.24-27.5 98.02-24.33 100.79-21.15 100.79-15.55L100.79-15.55Q100.79-15.05 100.77-14.63 100.74-14.2 100.64-13.2ZM89.84-24.8L89.84-24.8Q83.84-24.8 83.24-15.65L83.24-15.65 95.74-15.65 95.74-17.3Q95.74-20.9 94.22-22.85 92.69-24.8 89.84-24.8ZM104.39-2.05L108.24-3 108.24-36 104.39-36.95 104.39-39 113.09-39 113.09-3 116.94-2.05 116.94 0 104.39 0 104.39-2.05ZM129.99-33.1L129.99-17.05 136.19-17.05Q137.59-17.05 138.81-17.48 140.04-17.9 140.74-18.6L140.74-18.6Q141.74-19.65 142.44-21.35 143.14-23.05 143.14-25L143.14-25Q143.14-26.9 142.46-28.48 141.79-30.05 140.74-31.3L140.74-31.3Q139.94-32.15 138.69-32.63 137.44-33.1 135.99-33.1L135.99-33.1 129.99-33.1ZM137.29-14.15L137.29-14.15 129.99-14.15 129.99-3.2 134.74-2.15 134.74 0 120.79 0 120.79-2.15 124.99-3.2 124.99-32.8 120.79-33.85 120.79-36 137.34-36Q139.69-36 141.64-35.38 143.59-34.75 144.84-33.6L144.84-33.6Q146.59-32.05 147.61-29.88 148.64-27.7 148.64-25.3L148.64-25.3Q148.64-22.85 147.56-20.5 146.49-18.15 144.74-16.6L144.74-16.6Q143.44-15.45 141.49-14.8 139.54-14.15 137.29-14.15ZM176.74-13.75L176.74-13.75Q176.74-10.5 175.76-7.58 174.79-4.65 173.04-2.75L173.04-2.75Q171.54-1.1 169.34-0.3 167.14 0.5 164.34 0.5L164.34 0.5Q161.59 0.5 159.44-0.28 157.29-1.05 155.79-2.65L155.79-2.65Q154.09-4.5 153.16-7.23 152.24-9.95 152.24-13.15L152.24-13.15Q152.24-16.4 153.19-19.38 154.14-22.35 155.94-24.25L155.94-24.25Q157.54-25.95 159.66-26.73 161.79-27.5 164.54-27.5L164.54-27.5Q167.29-27.5 169.49-26.73 171.69-25.95 173.19-24.35L173.19-24.35Q174.94-22.5 175.84-19.73 176.74-16.95 176.74-13.75ZM157.59-13.7L157.59-13.7Q157.59-10.65 158.06-8.43 158.54-6.2 159.39-4.75L159.39-4.75Q160.24-3.5 161.41-2.8 162.59-2.1 164.49-2.1L164.49-2.1Q167.94-2.1 169.64-4.45L169.64-4.45Q170.54-5.75 170.96-8.05 171.39-10.35 171.39-13.35L171.39-13.35Q171.39-16.35 170.91-18.6 170.44-20.85 169.59-22.25L169.59-22.25Q168.79-23.55 167.56-24.23 166.34-24.9 164.44-24.9L164.44-24.9Q160.94-24.9 159.39-22.6L159.39-22.6Q157.59-19.8 157.59-13.7ZM181.33-13.25L181.33-13.25Q181.33-16.5 182.18-19.45 183.03-22.4 184.73-24.25L184.73-24.25Q186.18-25.85 188.18-26.68 190.18-27.5 192.78-27.5L192.78-27.5Q194.98-27.5 196.81-26.65 198.63-25.8 200.08-23.6L200.08-23.6 200.08-36 196.23-36.95 196.23-39 204.93-39 204.93-3 208.78-2.05 208.78 0 201.03 0.5 200.63-3.6Q199.08-1.3 197.13-0.4 195.18 0.5 192.78 0.5L192.78 0.5Q190.23 0.5 188.18-0.25 186.13-1 184.78-2.65L184.78-2.65Q183.18-4.6 182.26-7.33 181.33-10.05 181.33-13.25ZM200.08-13.3L200.08-13.3Q200.08-16.35 199.63-18.6 199.18-20.85 198.33-22.25L198.33-22.25Q197.53-23.55 196.38-24.23 195.23-24.9 193.33-24.9L193.33-24.9Q191.63-24.9 190.36-24.3 189.08-23.7 188.28-22.55L188.28-22.55Q187.38-21.3 186.98-18.98 186.58-16.65 186.58-13.65L186.58-13.65Q186.58-10.65 187.03-8.43 187.48-6.2 188.33-4.75L188.33-4.75Q189.18-3.5 190.36-2.8 191.53-2.1 193.38-2.1L193.38-2.1Q195.13-2.1 196.41-2.68 197.68-3.25 198.33-4.4L198.33-4.4Q199.18-5.8 199.63-8.03 200.08-10.25 200.08-13.3Z"
                                                    fill="black"
                                                  ></path>
                                                </g>
                                              </svg>
                                            </g>
                                          </svg>
                                        </g>
                                      </svg>
                                    </g>
                                  </svg>
                                </g>
                                <g transform="matrix(1,0,0,1,438.3544780704889,0)">
                                  <svg
                                    viewBox="0 0 244.43135999999998 101.8216995200492"
                                    height="101.8216995200492"
                                    width="244.43135999999998"
                                  >
                                    <g>
                                      <svg
                                        preserveAspectRatio="xMidYMid"
                                        viewBox="0.010982379206281617 0 63.01528289396303 26.25"
                                        version="1.1"
                                        x="0"
                                        y="0"
                                        width="244.43135999999998"
                                        height="101.8216995200492"
                                        className="icon-icon-0"
                                        data-fill-palette-color="accent"
                                        id="SvgjsSvg1620"
                                      >
                                        <path
                                          d="M16.656 0C12.325 0 8.721 3.133 7.969 7.25 6.039 6.798 4.069 6.28 2.031 5.719 1.621 5.605 1.199 5.679 0.844 5.906 0.486 6.133 0.228 6.489 0.156 6.906 0.094 7.265-1.269 15.788 5.781 21.781 9.674 25.089 21.637 26.25 31.531 26.25 41.425 26.25 53.389 25.089 57.281 21.781 64.331 15.788 62.936 7.265 62.875 6.906 62.803 6.489 62.576 6.133 62.219 5.906 61.864 5.68 61.408 5.605 61 5.719 59.36 6.17 57.756 6.588 56.188 6.969 55.324 2.992 51.794 0 47.563 0 43.994 0 40.926 2.137 39.531 5.188 38.149 2.769 35.665 1.029 32.688 0.75 30.34 0.533 28.037 1.242 26.219 2.75 25.525 3.325 24.948 3.986 24.469 4.719 22.98 1.929 20.033 0 16.656 0zM16.656 3C19.877 3 22.5 5.624 22.5 8.844 22.5 9.135 22.48 9.434 22.438 9.719 18.748 9.342 14.928 8.756 10.906 7.906 11.363 5.138 13.76 3 16.656 3zM47.563 3C50.37 3 52.724 5.013 53.281 7.656 49.265 8.542 45.456 9.172 41.781 9.594 41.75 9.349 41.719 9.093 41.719 8.844 41.719 5.624 44.343 3 47.563 3zM31.844 3.688C32.036 3.687 32.212 3.7 32.406 3.719 35.571 4.015 37.914 6.813 37.688 9.969 35.608 10.115 33.559 10.219 31.531 10.219 29.728 10.219 27.905 10.115 26.063 10 26.038 9.671 26.031 9.334 26.063 9 26.207 7.447 26.954 6.059 28.156 5.063 29.207 4.191 30.497 3.693 31.844 3.688zM3 9.094C13.603 11.892 22.727 13.219 31.531 13.219 38.935 13.219 46.553 12.271 55.094 10.313 55.24 10.279 55.384 10.253 55.531 10.219 57.005 9.876 58.498 9.498 60.031 9.094 60.027 11.497 59.394 16 55.313 19.469 52.7 21.691 42.932 23.25 31.531 23.25 20.13 23.25 10.332 21.691 7.719 19.469 3.637 15.999 3.005 11.494 3 9.094zM56.375 12.094C55.554 12.04 54.844 12.613 54.781 13.438 54.494 14.876 50.405 18.378 35.094 17.344 34.261 17.28 33.556 17.924 33.5 18.75 33.445 19.577 34.049 20.288 34.875 20.344 36.91 20.481 38.78 20.563 40.469 20.563 56.374 20.563 57.657 14.972 57.75 13.75 57.812 12.924 57.201 12.156 56.375 12.094z"
                                          fill="black"
                                          fill-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </g>
                                  </svg>
                                </g>
                              </svg>
                            </g>
                            <defs>
                              <mask></mask>
                            </defs>
                          </svg>
                          <rect
                            width="395.52"
                            height="58.98265070637307"
                            fill="black"
                            stroke="none"
                            visibility="hidden"
                          ></rect>
                        </g>
                      </mask>
                    </svg>
                    <rect
                      width="395.52"
                      height="58.98265070637307"
                      fill="black"
                      stroke="none"
                      visibility="hidden"
                    ></rect>
                  </g>
                </mask>
                <linearGradient
                  x1="0"
                  x2="1"
                  y1="0.548"
                  y2="0.55"
                  id="aa92aa02-19c7-4be8-a146-29cfe8677323"
                >
                  <stop stop-color="#ff6cab" offset="0"></stop>
                  <stop stop-color="#7366ff" offset="1"></stop>
                </linearGradient>
                <rect
                  width="395.52"
                  height="58.98265070637307"
                  fill="url(#aa92aa02-19c7-4be8-a146-29cfe8677323)"
                  mask="url(#cbb5dcd7-6046-4b4d-9250-cc60de9b85bd)"
                  data-fill-palette-color="accent"
                ></rect>
              </svg>
              <rect
                width="395.52"
                height="58.98265070637307"
                fill="none"
                stroke="none"
                visibility="hidden"
              ></rect>
            </g>
          </svg>
        </g>
      </svg>
    </Link>
  );

  return (
    <header className="bg-[#191919] text-white z-20 fixed top-0 left-0 right-0">
      <nav className="py-6">
        <Container>
          <ul className="flex items-center justify-between relative w-full max-w-[inherit]">
            <li>{siteLogo}</li>

            <li className="flex items-center">{renderNavigation()}</li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
