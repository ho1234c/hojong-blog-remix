import type { FC, HTMLAttributes } from "react";
import styles from "./index.module.css";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {}

const isDarkMode = false; // TODO: 다크모드 구현

const Profile: FC<Props> = (props) => {
  const boxShadowColor = isDarkMode
    ? "rgba(255, 255, 255, 0.24)"
    : "rgba(0, 0, 0, 0.24)";

  return (
    <div className={styles.profile_frame}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 300 300"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        style={{
          width: 200,
          height: 200,
          boxShadow: `${boxShadowColor} 0px 3px 8px`,
          borderRadius: 100,
        }}
        {...props}
      >
        <circle
          className={styles.border}
          cx="150"
          cy="150"
          r="148"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <g transform="translate(15, 375) scale(0.025, -0.025)">
          <path
            d="M4453 14199 c-29 -5 -90 -22 -135 -37 -74 -26 -108 -42 -248 -117
-33 -17 -108 -75 -146 -112 -22 -22 -38 -84 -24 -93 6 -4 11 -11 10 -16 -1 -5
3 -10 9 -12 6 -2 11 2 11 10 1 23 44 62 101 90 132 66 354 138 517 169 52 10
63 16 68 35 4 15 0 29 -10 40 -9 8 -13 20 -10 26 17 26 -43 34 -143 17z"
          />
          <path
            d="M4711 13988 c-35 -4 -71 -10 -80 -14 -9 -4 -29 -8 -46 -9 -60 -4
-205 -39 -214 -52 -3 -4 -12 -8 -18 -9 -7 -1 -20 -2 -28 -2 -8 -1 -15 -9 -15
-17 0 -18 47 -19 125 -4 28 5 68 12 90 14 22 3 71 10 110 16 124 18 399 4 440
-23 9 -5 140 -33 200 -42 11 -2 58 -9 105 -17 47 -7 89 -12 94 -11 5 2 29 -6
53 -18 24 -11 48 -18 53 -15 5 3 11 1 15 -5 3 -5 32 -22 63 -37 31 -14 78 -44
103 -65 25 -21 49 -38 52 -38 4 0 21 -16 38 -35 17 -19 37 -35 43 -35 11 0 31
-18 138 -126 20 -21 36 -27 64 -26 20 1 39 4 42 6 20 21 -265 334 -320 352
-12 3 -31 17 -41 30 -10 13 -26 24 -36 24 -9 0 -22 5 -29 12 -11 11 -66 34
-107 44 -11 3 -29 10 -40 14 -11 5 -36 11 -55 14 -74 10 -187 26 -225 32 -22
3 -65 9 -95 14 -30 4 -82 13 -115 20 -71 14 -274 19 -364 8z"
          />
          <path
            d="M3075 13780 c-86 -18 -245 -77 -245 -91 0 -5 -9 -9 -20 -9 -10 0 -36
-14 -55 -32 -27 -23 -36 -37 -32 -55 3 -14 -1 -23 -8 -23 -7 0 -15 -6 -18 -13
-6 -15 -6 -15 136 17 38 9 76 20 85 25 25 13 183 34 217 28 29 -4 29 -4 7 -12
-44 -15 -180 -83 -186 -94 -4 -6 -13 -11 -20 -11 -16 0 -153 -81 -221 -130
-100 -73 -245 -250 -245 -298 0 -11 -6 -25 -14 -31 -21 -17 -77 -155 -92 -226
-15 -69 -18 -164 -5 -183 20 -32 44 -7 71 73 15 44 39 103 53 130 24 47 117
181 150 215 58 62 183 156 262 199 22 12 54 30 70 39 90 54 296 162 319 168
14 3 26 10 26 14 0 4 28 18 63 30 34 12 64 26 67 30 3 3 39 17 80 30 89 27 99
34 83 59 -16 25 -8 31 44 31 24 0 43 4 43 8 0 4 9 8 20 8 11 0 20 -4 20 -8 0
-5 8 -4 18 1 9 5 25 12 35 15 23 7 22 35 -4 57 -27 23 -97 38 -239 50 -164 14
-370 9 -465 -11z"
          />
          <path
            d="M6200 13289 c0 -5 5 -7 10 -4 18 11 10 -10 -11 -28 l-21 -18 26 -34
c14 -18 26 -38 26 -43 0 -5 7 -15 14 -22 8 -6 20 -28 27 -48 14 -44 64 -127
97 -162 41 -44 44 -54 128 -375 31 -119 31 -219 0 -327 -13 -46 -26 -108 -30
-138 -7 -51 -6 -53 8 -35 15 20 15 20 16 -2 0 -38 22 -73 45 -73 25 0 60 51
124 182 28 57 44 106 48 144 5 42 3 55 -5 50 -15 -9 -15 -1 -1 22 17 27 -17
148 -91 327 -68 165 -111 226 -154 218 -23 -5 -24 -3 -19 41 6 48 -15 112 -47
147 -8 10 -26 34 -40 55 -57 86 -150 163 -150 123z"
          />
          <path
            d="M2872 12660 c-50 -36 -63 -61 -90 -165 -34 -131 -43 -202 -48 -360
-7 -259 32 -408 153 -593 71 -107 175 -169 299 -178 44 -4 95 -2 114 3 30 8
35 14 33 36 -1 15 2 27 8 27 5 0 9 7 9 16 0 8 -5 12 -10 9 -15 -9 -91 -15 -86
-6 3 4 -20 15 -49 24 -51 15 -175 90 -175 105 0 4 -15 23 -33 43 -40 43 -96
155 -136 269 -16 47 -32 84 -35 83 -7 -3 -7 2 -1 19 3 7 1 60 -3 118 -8 104 6
279 28 360 6 19 10 47 10 61 0 14 11 38 24 52 20 22 47 107 33 107 -2 0 -23
-13 -45 -30z"
          />
          <path
            d="M5334 12596 c-4 -11 18 -41 75 -99 148 -151 203 -212 229 -257 14
-25 29 -47 33 -50 4 -3 15 -24 24 -48 14 -33 22 -42 41 -42 14 0 24 -6 24 -14
0 -7 7 -20 16 -27 15 -12 16 -7 9 61 -13 131 -31 165 -155 287 -103 103 -128
124 -184 162 -60 40 -103 50 -112 27z"
          />
          <path
            d="M4880 12478 c-18 -20 -21 -31 -15 -73 9 -71 39 -128 96 -179 54 -49
169 -100 201 -90 12 3 24 1 28 -6 5 -9 31 -12 81 -10 41 1 83 2 94 2 19 -1 55
29 55 46 0 10 -140 36 -148 27 -3 -3 -13 2 -22 10 -10 9 -21 15 -26 14 -10 -2
-40 7 -66 22 -10 5 -26 9 -37 9 -10 0 -21 6 -24 13 -2 7 -23 22 -46 32 -23 12
-39 25 -36 32 4 12 -20 31 -40 31 -12 -1 -46 59 -43 75 4 20 -12 67 -22 67 -5
0 -19 -10 -30 -22z"
          />
          <path
            d="M6013 12464 c-3 -8 -1 -33 6 -53 6 -21 13 -74 17 -117 3 -44 7 -92 9
-107 4 -21 -2 -34 -22 -53 l-26 -24 12 -118 c25 -246 64 -839 56 -853 -3 -4
-1 -9 5 -11 6 -2 12 -89 15 -231 3 -126 7 -233 11 -238 3 -6 1 -15 -4 -22 -5
-7 -12 -64 -16 -127 -15 -292 -43 -437 -122 -615 -31 -71 -64 -141 -74 -155
-9 -14 -37 -56 -61 -95 -120 -192 -157 -224 -280 -245 -40 -7 -91 -20 -114
-30 -22 -10 -90 -30 -150 -45 -105 -26 -119 -28 -325 -25 -118 1 -235 5 -259
8 l-44 7 -23 70 c-13 39 -31 108 -39 155 -9 47 -28 126 -42 175 -27 94 -51
195 -60 256 -5 34 -3 37 29 44 65 15 71 15 84 4 11 -9 14 -8 14 4 0 11 15 17
57 23 32 4 63 13 71 20 7 8 26 14 40 14 15 0 37 7 49 15 11 8 42 22 69 31 113
38 259 123 336 196 39 37 125 151 133 176 6 21 4 23 -13 18 -14 -5 -24 -1 -30
11 -14 24 -37 11 -152 -86 -52 -44 -100 -80 -106 -81 -7 0 -14 -6 -17 -14 -6
-14 -166 -96 -232 -118 -22 -7 -43 -18 -48 -25 -4 -7 -14 -10 -22 -7 -7 3 -48
-6 -89 -20 -141 -47 -246 -56 -246 -21 0 13 -14 49 -44 114 -6 13 -30 44 -53
69 -24 25 -43 54 -43 65 0 13 -5 17 -15 13 -8 -3 -15 -2 -15 3 0 4 -10 7 -22
6 -13 -1 -26 2 -29 7 -3 4 -23 10 -45 13 -21 3 -68 11 -104 19 -90 20 -167 27
-295 27 -97 0 -232 -13 -275 -26 -19 -6 -28 16 -70 170 -18 66 -38 126 -43
133 -5 6 -7 12 -4 12 3 0 0 15 -8 34 -20 48 -65 238 -65 274 0 17 -7 37 -15
45 -9 10 -13 28 -9 53 3 30 2 34 -5 19 -8 -17 -10 -14 -9 16 2 43 -27 83 -38
54 -10 -24 3 -393 14 -435 42 -152 90 -386 81 -396 -15 -18 -79 -15 -86 4 -4
8 -15 24 -25 34 -10 10 -18 24 -18 32 0 20 -40 32 -51 15 -7 -11 -9 -9 -9 5 0
11 -23 41 -50 66 -46 43 -50 49 -44 81 9 48 53 127 75 134 15 5 16 9 7 25 -7
10 -22 24 -35 31 -16 8 -19 15 -12 20 8 5 5 11 -9 18 -18 10 -26 6 -56 -26
-21 -20 -41 -54 -46 -77 -6 -23 -17 -61 -24 -85 -37 -115 67 -241 228 -276 44
-9 28 -13 -62 -16 -131 -3 -228 -22 -257 -49 -20 -19 -25 -20 -25 -7 0 18 -10
17 -135 -8 -44 -9 -100 -18 -125 -21 -59 -8 -78 -19 -86 -52 -4 -15 -17 -38
-29 -52 -15 -16 -28 -49 -36 -90 -6 -36 -17 -71 -23 -79 -7 -9 -11 -77 -12
-185 -1 -94 2 -162 6 -152 4 11 12 -30 19 -100 36 -359 72 -523 145 -679 18
-38 36 -80 40 -92 4 -11 13 -24 21 -27 21 -8 19 -46 -2 -47 -10 -1 -47 -3 -83
-4 -109 -5 -235 -62 -407 -187 -70 -50 -129 -109 -259 -260 -55 -63 -98 -132
-86 -136 7 -2 12 -10 12 -17 0 -33 32 -15 130 73 58 52 112 103 121 112 27 31
110 100 119 100 8 0 -34 -105 -65 -160 -7 -14 -30 -75 -50 -135 -43 -126 -58
-256 -42 -347 4 -21 9 -54 12 -73 4 -21 12 -35 20 -35 17 0 20 -16 5 -25 -6
-3 -10 -15 -10 -26 0 -10 -6 -19 -14 -19 -8 0 -16 -7 -20 -15 -3 -8 -1 -15 3
-15 5 0 11 6 14 13 2 6 7 9 11 6 10 -10 -26 -67 -51 -80 -32 -17 -63 -117
-104 -329 -6 -30 -19 -82 -29 -115 -30 -101 -50 -225 -56 -340 -7 -155 -22
-252 -49 -310 -34 -75 -58 -163 -60 -230 -2 -33 -6 -71 -11 -84 -5 -17 -4 -22
4 -17 15 9 15 1 0 -24 -15 -23 -6 -34 20 -25 31 9 77 89 118 205 20 58 40 110
45 115 12 16 49 115 65 175 8 30 17 93 20 140 6 99 19 198 34 255 31 125 59
276 69 371 7 60 21 160 31 222 20 110 20 113 2 133 -18 19 -18 24 -4 97 8 42
27 104 42 137 15 33 35 85 44 115 30 98 147 317 206 385 103 120 301 246 470
301 30 9 64 20 75 24 11 4 38 12 60 18 39 10 141 44 180 61 23 10 97 44 205
94 71 33 187 74 220 78 8 1 39 1 68 0 69 -1 96 -26 86 -79 -10 -61 -170 -203
-304 -272 -14 -7 -35 -22 -47 -33 -13 -11 -23 -17 -23 -13 0 4 -13 -1 -30 -11
-17 -9 -30 -20 -30 -23 0 -9 63 -33 80 -31 8 1 29 8 45 15 38 18 108 50 116
54 4 1 9 -6 12 -18 3 -11 13 -20 25 -20 31 0 218 -117 252 -158 16 -20 37 -59
46 -87 9 -27 32 -88 52 -135 31 -77 34 -90 27 -145 -4 -33 -8 -70 -9 -82 0
-12 -4 -25 -8 -29 -5 -4 -8 -18 -8 -31 0 -12 -6 -23 -13 -23 -16 0 -87 -72
-87 -88 0 -7 -5 -12 -12 -12 -6 0 -25 -10 -42 -23 -41 -30 -68 -42 -149 -68
-78 -24 -219 -39 -261 -28 -16 5 -33 6 -37 3 -5 -3 -44 5 -86 16 -67 19 -86
29 -132 73 -65 63 -112 160 -151 310 -23 87 8 251 54 283 11 8 48 33 81 54 74
47 118 87 110 99 -3 5 0 13 6 17 8 4 9 3 5 -4 -14 -23 13 -11 33 14 12 15 21
23 21 18 0 -5 5 -1 11 9 14 24 0 39 -35 40 -14 0 -80 -34 -148 -75 -68 -41
-141 -83 -163 -95 -149 -78 -207 -118 -263 -178 -56 -60 -79 -113 -89 -205 -6
-61 5 -82 33 -59 13 10 17 10 24 0 12 -21 23 6 10 28 -15 29 -12 50 9 77 20
25 34 23 23 -4 -11 -32 25 7 39 41 13 31 45 64 98 99 37 25 40 23 35 -27 -4
-39 8 -104 32 -187 3 -11 0 -18 -8 -18 -20 0 -35 -13 -42 -37 -7 -21 -4 -23
28 -23 35 0 52 -16 85 -80 43 -85 100 -160 121 -160 5 0 10 -4 10 -9 0 -5 25
-21 55 -36 30 -14 55 -28 55 -31 0 -2 -7 -15 -16 -29 -10 -15 -22 -22 -36 -20
-30 6 -113 -68 -124 -110 -10 -39 1 -41 35 -6 20 21 40 31 60 31 16 0 32 4 36
10 3 5 11 7 18 4 7 -2 62 12 123 31 70 23 143 39 204 45 104 10 161 22 230 47
52 20 135 67 158 90 35 34 175 85 272 99 69 9 204 36 215 42 5 3 17 7 25 7 33
1 133 38 150 55 13 13 41 20 95 25 70 7 82 5 124 -16 56 -27 86 -63 75 -87 -6
-14 -9 -12 -12 11 -4 31 -22 37 -22 7 0 -62 -103 -163 -213 -208 -40 -17 -89
-34 -108 -37 -87 -14 -186 -38 -212 -52 -15 -8 -35 -13 -45 -11 -9 1 -22 -1
-29 -5 -7 -4 -32 -14 -55 -21 -181 -58 -774 -349 -853 -420 -28 -24 -72 -59
-99 -78 -40 -28 -49 -40 -52 -68 -3 -31 -2 -33 10 -18 7 10 15 15 19 12 3 -3
13 -1 24 5 10 6 38 20 63 31 68 31 103 52 146 86 21 17 64 42 94 56 180 82
302 139 430 202 80 38 152 71 160 72 8 1 37 11 63 23 27 11 54 21 62 21 7 0
18 6 24 14 6 8 32 17 56 20 25 4 47 11 50 15 2 5 22 11 43 15 22 3 45 13 52
21 7 8 16 12 21 9 17 -10 115 25 139 51 13 14 33 25 45 25 12 0 49 13 81 30
32 16 59 28 59 27 1 -1 11 -63 23 -137 29 -176 29 -270 2 -295 -24 -22 -27
-43 -3 -24 9 8 4 -3 -12 -23 -27 -34 -56 -54 -40 -28 9 15 -4 12 -21 -5 -9 -8
-27 -16 -42 -17 -87 -5 -84 -4 -232 -51 -36 -12 -73 -22 -82 -24 -9 -1 -35
-12 -56 -23 -31 -16 -41 -29 -46 -53 -7 -39 -44 -81 -111 -127 -27 -18 -72
-54 -100 -78 -93 -84 -226 -158 -317 -176 -13 -3 -36 -9 -53 -15 -16 -6 -69
-20 -117 -32 -65 -16 -88 -26 -91 -40 -3 -11 -1 -19 3 -19 5 0 16 -8 25 -17
16 -16 18 -16 27 0 5 10 21 17 36 17 21 0 23 -3 12 -10 -23 -14 -5 -22 34 -15
21 4 36 13 36 21 0 8 7 14 15 14 8 0 15 -7 15 -16 0 -13 6 -15 33 -10 17 4 46
7 62 7 29 -1 105 20 153 42 12 6 22 19 22 29 0 15 5 18 20 13 28 -9 70 20 70
48 0 32 11 67 21 67 5 0 6 -13 3 -30 -4 -16 -2 -30 3 -30 20 0 62 57 68 95 10
56 27 81 23 33 -4 -36 -4 -36 22 -23 23 12 43 30 81 72 8 10 24 44 34 76 17
51 22 58 45 56 14 0 27 0 30 1 18 6 45 8 54 3 18 -11 68 -13 80 -4 6 5 56 9
111 9 106 -1 139 7 169 40 10 12 41 33 70 48 65 33 123 88 146 138 16 34 16
45 6 80 -7 23 -11 47 -9 53 3 7 -10 57 -28 112 -24 72 -36 97 -44 91 -17 -14
-25 -1 -18 31 3 18 1 29 -6 29 -6 0 -11 6 -11 14 0 8 -14 20 -30 28 -58 25
-58 100 -1 152 46 41 48 133 4 164 -71 50 -70 47 -31 65 39 19 108 89 108 111
0 8 7 16 14 19 18 7 31 67 21 96 -11 37 -55 79 -88 86 -17 4 -42 16 -54 27
-28 26 -102 33 -203 19 -41 -6 -146 -13 -233 -15 -87 -3 -162 -8 -167 -11 -5
-3 -22 -8 -37 -10 -48 -8 -137 -32 -165 -45 -40 -19 -54 -8 -78 64 -37 111
-85 158 -252 242 -49 24 -88 48 -88 52 0 4 25 20 56 36 79 41 177 142 198 202
26 78 22 102 -28 149 -28 27 -56 44 -77 47 -52 8 -244 -16 -264 -32 -14 -12
-19 -12 -22 -2 -9 25 -73 10 -73 -17 0 -13 -2 -13 -9 -2 -6 9 -18 11 -42 6
-45 -9 -81 -33 -73 -47 4 -6 3 -8 -4 -4 -5 3 -13 0 -16 -6 -4 -7 -4 -3 -2 10
5 27 7 27 -52 1 -26 -11 -63 -28 -82 -36 -42 -18 -152 -54 -240 -77 -36 -9
-87 -23 -115 -31 -101 -29 -95 -28 -96 -3 -3 73 -5 88 -11 93 -4 4 -5 12 -2
19 2 6 -2 43 -11 81 -9 39 -18 108 -20 154 -3 47 -9 89 -14 94 -6 6 -6 17 -1
26 9 17 2 73 -9 67 -3 -2 -6 52 -7 121 0 110 -3 127 -19 139 -13 9 -15 17 -8
26 6 7 13 23 16 36 4 18 2 22 -9 18 -8 -3 -14 -1 -14 4 0 6 5 10 11 10 7 0 8
11 4 31 -4 17 -8 81 -10 143 -3 88 0 116 12 136 9 13 17 46 17 72 1 26 6 52
12 58 11 11 243 60 286 60 15 0 29 4 32 9 8 13 115 21 306 21 102 1 210 7 258
15 83 15 165 20 437 30 83 3 178 8 213 11 57 6 66 4 89 -17 31 -30 48 -63 57
-112 7 -35 48 -173 63 -207 9 -22 33 -139 37 -180 5 -60 17 -144 26 -175 5
-16 14 -64 21 -105 6 -41 18 -100 26 -130 57 -216 60 -235 47 -250 -30 -37
-42 -268 -13 -285 5 -4 9 -15 9 -26 0 -10 4 -19 9 -19 11 0 24 47 16 59 -3 5
2 22 10 37 8 16 15 35 15 43 0 8 3 12 6 8 3 -3 12 -59 20 -124 27 -240 35
-288 55 -320 20 -33 39 -43 39 -22 0 6 14 25 31 42 l32 31 -7 83 c-6 88 -22
156 -55 241 -26 65 -26 94 -2 116 12 11 20 37 24 82 4 36 9 69 12 74 3 4 81 9
173 9 330 3 331 3 547 68 28 8 72 19 98 23 72 13 157 48 178 73 10 12 18 16
19 9 0 -13 80 34 80 48 0 4 20 32 45 62 25 30 45 58 45 62 0 8 36 61 66 96 29
35 154 275 154 297 0 10 14 54 30 98 47 126 76 268 86 435 2 25 7 90 11 145
14 193 6 879 -12 994 -8 55 23 93 112 137 74 36 80 38 202 41 110 4 130 2 161
-15 40 -21 70 -72 70 -119 0 -17 7 -39 16 -48 11 -10 13 -20 6 -28 -5 -7 -12
-40 -15 -75 -6 -69 -40 -135 -80 -153 -12 -5 -53 -32 -92 -59 -38 -28 -81 -58
-95 -67 -36 -23 -130 -122 -130 -136 1 -39 53 -56 99 -33 17 9 33 16 36 15 9
-1 69 13 85 21 8 4 34 16 58 25 23 10 42 22 42 27 0 4 8 8 18 8 26 0 131 93
167 149 30 45 30 46 28 181 -3 213 -40 356 -110 422 -41 39 -163 64 -163 34 0
-8 -7 -16 -15 -20 -18 -7 -20 5 -3 22 9 9 3 12 -27 12 -124 -2 -278 -69 -336
-147 -39 -52 -38 -53 -60 118 -11 84 -10 101 4 144 33 95 9 280 -48 362 -14
21 -25 43 -25 49 0 16 -34 44 -54 44 -9 0 -19 -7 -23 -16z m-1257 -4235 c85
-40 92 -59 43 -109 -37 -37 -123 -77 -215 -100 -18 -4 -45 -14 -62 -23 -17 -8
-34 -12 -37 -8 -13 12 -65 8 -65 -6 0 -18 -19 -16 -26 2 -5 13 -25 14 -128 9
-66 -3 -152 -12 -189 -20 -38 -8 -70 -14 -72 -14 -2 0 -2 33 -2 73 1 47 -3 83
-12 100 -17 32 -8 57 19 57 12 0 30 4 40 10 10 5 34 12 55 14 20 3 42 10 50
16 7 6 28 10 46 9 58 -2 364 13 369 18 13 13 141 -6 186 -28z"
          />
          <path
            d="M2415 12306 c-42 -101 -57 -297 -30 -411 18 -75 74 -212 108 -264 15
-23 27 -44 27 -48 0 -9 56 -88 83 -118 96 -106 106 -115 131 -115 20 0 26 5
26 23 0 12 -5 29 -10 37 -8 13 -10 12 -10 -2 0 -10 -4 -18 -9 -18 -10 0 -24
77 -16 91 4 5 0 9 -8 9 -8 0 -14 10 -14 23 0 12 -12 39 -25 59 -14 20 -31 50
-38 67 -12 30 -35 46 -24 16 3 -8 2 -20 -2 -27 -5 -8 -10 -2 -16 17 -4 17 -4
31 1 33 11 4 -1 57 -30 129 -29 72 -25 68 -45 52 -16 -13 -16 -12 -5 10 11 19
11 25 1 31 -8 5 -11 19 -7 39 5 23 3 31 -8 31 -8 0 -15 5 -15 10 0 6 5 10 10
10 6 0 10 10 10 21 0 18 -2 19 -15 9 -12 -10 -15 -10 -15 3 0 9 4 18 8 21 5 3
9 57 10 121 1 66 -3 113 -8 110 -5 -3 -10 9 -12 27 -4 48 -34 50 -53 4z"
          />
          <path
            d="M4093 12216 c-18 -12 -34 -27 -37 -34 -7 -17 24 -78 33 -66 16 22 31
12 31 -20 0 -105 246 -212 483 -209 68 1 87 -2 87 -13 0 -8 4 -14 9 -14 5 0 7
-9 4 -20 -10 -36 11 -48 68 -39 28 4 56 13 63 18 7 6 15 8 18 5 4 -3 35 1 70
9 34 8 90 20 123 27 33 6 78 15 100 20 41 9 77 16 254 50 57 11 123 20 146 20
52 0 78 23 50 44 -46 33 -88 51 -93 38 -2 -6 -11 -12 -19 -12 -13 0 -13 3 -3
15 7 9 10 18 6 22 -4 4 -68 7 -144 7 -120 0 -164 -5 -272 -28 -62 -14 -178
-49 -202 -62 -34 -18 -56 -18 -75 1 -8 8 -18 13 -23 10 -17 -10 -149 -14 -155
-5 -3 6 -25 10 -47 10 -23 0 -55 4 -72 9 -17 5 -51 15 -76 22 -66 19 -141 55
-174 84 -16 14 -33 25 -37 25 -5 0 -15 12 -24 28 -8 15 -25 39 -37 53 l-23 26
-32 -21z"
          />
          <path
            d="M3350 12206 c-22 -60 0 -148 77 -306 58 -119 143 -232 192 -253 14
-7 34 -20 43 -29 10 -10 23 -18 29 -18 19 0 -2 -20 -44 -41 -43 -22 -172 -117
-194 -143 -20 -23 -16 -64 7 -76 21 -11 33 -8 150 49 36 17 133 53 215 80 218
71 269 91 281 106 6 8 13 12 16 9 3 -2 8 8 11 24 4 18 14 31 26 35 31 8 25 25
-5 19 -21 -4 -25 -2 -19 8 7 11 -13 12 -103 6 -106 -6 -114 -5 -191 23 -44 16
-99 42 -123 59 -54 37 -125 114 -158 171 -14 24 -33 52 -42 62 -10 11 -18 25
-18 33 0 18 -25 38 -34 28 -5 -4 -6 2 -4 13 1 11 -3 20 -9 21 -26 3 -27 4 -15
16 20 20 14 40 -10 36 -18 -2 -24 4 -33 34 -15 55 -32 68 -45 34z"
          />
          <path
            d="M5177 11489 c-26 -15 -57 -87 -57 -132 0 -30 7 -45 30 -69 33 -32 27
-32 149 -9 64 12 70 17 72 56 4 61 -2 75 -46 116 -36 34 -54 43 -88 46 -23 2
-50 -2 -60 -8z"
          />
          <path
            d="M4389 11338 c-6 -18 -4 -131 3 -175 5 -32 11 -85 13 -118 7 -124 40
-324 55 -339 6 -6 10 -20 10 -33 0 -32 43 -124 69 -148 17 -15 26 -17 39 -8
18 11 20 53 9 198 -3 39 -7 98 -8 133 -1 34 -5 62 -9 62 -4 0 -10 11 -12 25
-3 14 -1 25 3 25 5 0 9 12 9 26 0 14 -4 22 -10 19 -5 -3 -7 0 -4 9 3 8 -1 27
-10 44 -8 16 -17 40 -19 53 -2 13 -8 35 -14 49 -6 14 -19 45 -29 68 -19 46
-89 127 -95 110z"
          />
          <path
            d="M3923 11158 c-45 -12 -103 -69 -103 -101 0 -15 11 -50 24 -79 13 -29
27 -63 30 -75 9 -27 38 -38 65 -24 11 6 33 11 50 11 43 0 67 45 76 140 6 66 5
77 -12 91 -33 29 -95 47 -130 37z"
          />
          <path
            d="M2888 10091 c-26 -9 -53 -22 -60 -28 -6 -7 -17 -13 -23 -13 -7 0 -20
-9 -30 -20 -10 -11 -28 -20 -41 -20 -19 0 -25 -9 -40 -57 -21 -74 -31 -342
-13 -354 9 -5 10 -11 2 -21 -13 -16 3 -206 19 -225 14 -18 38 -16 38 2 0 18
23 20 48 4 14 -9 48 -6 143 11 68 12 144 24 169 26 25 1 67 6 93 9 42 6 51 4
68 -14 26 -27 41 -27 67 4 12 14 30 25 40 25 24 0 82 57 83 81 8 154 -17 417
-44 460 -20 33 -96 73 -202 109 -121 39 -241 48 -317 21z m87 -99 c25 3 47 2
50 -2 2 -4 26 -13 52 -20 53 -15 131 -56 150 -80 7 -8 10 -27 7 -41 -8 -41 -8
-310 0 -346 l8 -33 -102 0 c-107 0 -241 -16 -250 -31 -3 -4 -16 -6 -28 -2 -15
4 -22 13 -22 30 0 13 -6 34 -14 46 -15 23 -56 287 -56 362 0 37 5 49 33 74 17
17 42 31 53 31 12 0 27 7 34 15 10 12 16 13 26 4 9 -7 33 -9 59 -7z"
          />
          <path
            d="M2840 9870 c-30 -60 -27 -96 13 -120 17 -11 40 -20 49 -20 40 0 64
83 33 114 -8 8 -15 21 -15 28 0 8 -5 19 -12 26 -23 23 -47 13 -68 -28z"
          />
          <path
            d="M3065 9848 c-71 -39 -53 -124 30 -142 51 -11 59 -11 61 -1 0 6 4 22
8 37 6 19 3 34 -8 50 -9 12 -16 30 -16 39 0 28 -40 37 -75 17z"
          />
          <path
            d="M2898 9656 c-52 -47 -59 -61 -28 -53 17 4 18 2 9 -15 -18 -34 -5 -45
60 -47 53 -1 65 2 86 23 51 51 20 136 -49 136 -23 0 -44 -12 -78 -44z"
          />
          <path
            d="M5002 9914 c-43 -29 -67 -37 -132 -44 -153 -17 -178 -28 -165 -69 8
-27 26 -32 138 -38 68 -4 97 -3 97 5 0 7 17 20 38 31 36 19 142 122 142 138 0
4 -15 9 -33 10 -22 1 -49 -10 -85 -33z"
          />
          <path
            d="M6355 9900 c-44 -3 -90 -11 -101 -18 -20 -11 -21 -15 -10 -47 7 -19
14 -37 17 -39 2 -3 56 -6 119 -7 177 -2 310 -51 310 -113 0 -13 -6 -59 -14
-102 -15 -82 -16 -93 -19 -209 -2 -55 1 -70 13 -73 9 -1 22 12 33 35 9 21 21
45 27 53 38 61 100 252 100 312 0 23 4 28 24 28 18 0 26 7 29 23 l4 22 2 -23
c1 -16 11 -27 34 -37 32 -13 198 -51 260 -59 17 -3 55 -10 83 -16 28 -6 64
-13 80 -15 16 -2 29 -5 29 -6 0 -1 9 -3 20 -4 12 -1 37 -7 57 -14 19 -6 40
-11 44 -10 5 1 16 0 24 -3 8 -4 58 -13 110 -22 160 -28 203 -36 251 -51 26 -8
53 -15 61 -15 8 0 28 -7 45 -15 17 -8 43 -16 59 -18 16 -2 36 -7 44 -10 8 -4
38 -13 65 -21 28 -8 73 -21 100 -30 28 -8 70 -20 95 -27 25 -6 52 -15 61 -19
26 -13 143 -59 159 -62 8 -2 19 -8 25 -15 19 -21 181 -98 199 -94 5 1 12 -2
15 -6 3 -5 23 -19 43 -31 21 -12 73 -50 115 -85 43 -35 130 -98 194 -140 121
-80 234 -188 343 -326 l51 -65 9 31 c9 34 -12 78 -101 213 -93 142 -148 205
-248 283 -33 26 -65 51 -71 56 -5 4 -20 14 -32 20 -12 6 -22 17 -22 24 0 7
-18 21 -40 31 -24 12 -39 25 -38 34 3 14 -65 64 -105 78 -10 4 -16 12 -13 19
6 16 -36 35 -62 28 -14 -3 -24 2 -32 17 -8 15 -18 20 -31 17 -10 -3 -22 -1
-25 4 -3 5 -14 9 -24 9 -11 0 -33 13 -50 30 -24 23 -36 28 -59 24 -22 -5 -32
-1 -47 18 -12 15 -31 25 -54 26 -19 2 -38 8 -42 15 -4 6 -19 13 -34 14 -15 1
-39 6 -53 12 -14 5 -44 12 -66 16 -22 4 -47 13 -55 20 -8 7 -42 18 -75 24 -33
7 -78 15 -100 20 -22 4 -50 13 -63 20 -12 6 -27 9 -32 6 -5 -3 -17 -1 -27 4
-30 17 -173 53 -268 68 -49 7 -102 15 -117 18 -16 3 -58 9 -95 15 -36 6 -69
13 -73 15 -9 5 -329 42 -435 50 -44 3 -94 8 -112 11 -17 3 -47 1 -67 -6 -31
-10 -39 -8 -73 13 -35 22 -254 89 -278 85 -5 0 -46 -4 -90 -8z"
          />
          <path
            d="M6047 9743 c3 -21 14 -47 24 -59 11 -11 19 -24 19 -28 0 -16 90 -124
132 -157 65 -54 150 -93 182 -85 39 10 32 37 -21 81 -27 22 -94 84 -150 139
-82 80 -168 146 -188 146 -2 0 -1 -17 2 -37z"
          />
          <path
            d="M6573 9190 c-15 -18 -66 -62 -113 -98 -47 -36 -139 -120 -205 -187
-123 -126 -155 -148 -353 -249 -130 -66 -294 -137 -362 -157 -171 -50 -385
-68 -601 -49 -72 6 -134 8 -137 5 -9 -8 30 -35 61 -41 18 -5 27 -13 27 -26 0
-14 5 -18 15 -14 8 3 15 0 15 -7 0 -16 37 -39 45 -27 3 5 1 11 -5 15 -6 4 -8
11 -5 16 11 16 24 10 27 -13 5 -39 94 -68 223 -73 179 -8 265 -4 337 15 66 18
288 108 319 130 15 11 36 20 46 20 10 0 23 4 29 9 5 5 45 28 89 51 115 62 112
60 193 119 41 30 141 120 222 202 146 146 148 148 190 249 48 110 47 132 -3
138 -19 2 -33 -5 -54 -28z"
          />
          <path
            d="M3235 8449 c-36 -12 -75 -35 -97 -56 -42 -41 -92 -138 -81 -156 4 -7
8 -34 9 -62 1 -50 43 -143 57 -128 4 3 7 -3 7 -15 0 -12 5 -22 10 -22 6 0 10
-7 10 -15 0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -9 20 -28 45 -43 26 -15 45
-34 45 -44 0 -25 63 -93 104 -112 40 -19 104 -20 127 -3 27 21 69 103 69 135
0 17 -5 42 -11 56 -10 20 -9 30 4 50 22 33 57 96 57 101 0 3 -6 5 -14 5 -18 0
-106 -99 -106 -119 0 -8 7 -22 16 -32 21 -23 5 -75 -36 -114 -25 -24 -34 -27
-71 -22 -34 4 -51 15 -86 53 -24 27 -43 51 -43 55 0 3 -10 17 -23 30 -32 33
-100 127 -119 164 -27 54 -30 94 -9 141 48 107 111 154 207 154 44 0 64 -5 88
-23 47 -35 95 -60 161 -87 124 -48 159 -120 91 -185 l-34 -31 30 -12 c48 -18
98 13 119 75 27 83 -32 168 -137 197 -57 16 -79 26 -193 87 -67 36 -137 38
-226 8z"
          />
          <path
            d="M9390 8402 c0 -4 6 -16 14 -27 7 -11 37 -67 66 -125 28 -58 56 -113
61 -122 5 -10 9 -25 9 -34 0 -8 7 -22 15 -30 8 -9 15 -25 15 -36 0 -11 9 -36
21 -54 11 -19 17 -34 14 -34 -4 0 -3 -6 3 -13 7 -7 16 -37 23 -66 8 -38 15
-51 25 -47 16 6 19 -5 5 -20 -15 -15 -1 -62 20 -67 15 -4 19 -14 19 -49 0 -57
9 -88 26 -88 14 0 18 -17 15 -52 -1 -10 3 -18 8 -18 6 0 11 -7 11 -15 0 -8 7
-15 15 -15 10 0 15 -10 15 -27 0 -19 3 -24 9 -15 5 9 10 -1 15 -30 9 -57 59
-188 64 -165 7 36 22 15 16 -23 -6 -35 -4 -39 10 -34 9 3 16 2 17 -2 4 -60 11
-100 19 -102 6 -2 10 -12 10 -22 0 -10 4 -21 9 -24 5 -3 12 -37 16 -76 5 -50
11 -70 21 -70 17 0 17 -5 3 -31 -6 -12 -7 -25 -1 -32 5 -7 8 -28 6 -47 -1 -19
2 -40 7 -45 11 -14 14 -104 4 -134 -6 -17 -5 -22 3 -17 7 4 12 1 12 -9 0 -10
-5 -13 -12 -9 -10 6 -10 5 -1 -7 7 -8 14 -53 17 -100 12 -216 28 -309 55 -316
9 -2 25 -20 36 -38 10 -19 21 -32 25 -30 4 2 8 53 8 112 1 60 4 243 7 408 4
289 -2 406 -26 430 -5 5 -9 23 -9 40 0 18 -9 41 -21 53 -11 12 -18 26 -15 30
6 11 -17 79 -32 94 -7 7 -12 16 -12 21 0 4 -10 31 -22 58 -15 35 -24 46 -29
37 -6 -8 -9 -1 -9 20 0 30 -51 149 -69 162 -11 8 -60 119 -88 200 -8 25 -26
68 -38 95 -22 47 -47 104 -50 115 -3 14 -59 116 -65 120 -4 3 -11 16 -15 30
-7 22 -28 57 -92 150 -38 57 -138 150 -160 150 -13 0 -23 -3 -23 -8z"
          />
          <path
            d="M3292 8358 c-7 -7 -12 -22 -12 -34 0 -16 -11 -28 -37 -41 -33 -16
-39 -24 -47 -65 -10 -49 1 -78 30 -78 14 0 18 -12 14 -39 -3 -23 23 -32 42
-14 33 30 14 71 -39 87 -29 9 -30 46 -3 71 22 20 22 20 39 -12 14 -28 19 -28
51 -3 l25 20 -35 30 c-29 24 -33 32 -24 46 17 29 28 26 46 -14 l16 -37 1 37
c1 27 -4 40 -18 48 -25 13 -34 13 -49 -2z"
          />
          <path
            d="M1662 7828 c-7 -7 -12 -19 -12 -28 0 -9 -4 -20 -9 -25 -24 -26 -59
-378 -55 -560 6 -254 11 -295 33 -280 7 4 14 122 13 210 0 11 4 67 9 125 5 58
11 139 14 180 3 41 7 89 10 105 3 17 7 69 9 117 3 48 7 92 11 98 3 5 1 10 -4
10 -6 0 -11 7 -11 16 0 8 5 12 10 9 6 -3 10 3 10 14 0 24 -10 27 -28 9z"
          />
          <path
            d="M8943 7788 c-19 -24 -72 -143 -97 -219 -14 -41 -32 -89 -41 -105 -8
-16 -15 -40 -15 -55 0 -14 -4 -29 -9 -35 -5 -5 -19 -43 -31 -84 -13 -41 -27
-77 -31 -81 -17 -10 -129 -426 -154 -568 -13 -79 -30 -205 -36 -280 -13 -149
-7 -479 9 -551 6 -25 18 -83 28 -130 29 -148 108 -353 155 -403 10 -12 19 -24
19 -29 0 -17 27 -7 38 15 18 38 21 93 6 136 -19 55 -45 206 -54 316 -4 50 -13
91 -19 93 -6 2 -8 8 -5 14 4 5 8 60 10 122 2 61 6 149 10 196 4 47 8 105 9
130 1 25 5 52 8 60 4 8 14 74 22 145 16 122 70 418 80 435 4 6 38 152 65 278
5 23 14 50 19 60 13 24 59 254 67 335 4 37 10 64 15 62 4 -3 8 13 7 35 0 22
-5 40 -11 40 -5 0 -2 9 8 20 22 24 13 39 -12 19 -15 -12 -16 -12 -11 2 12 31
-29 52 -49 27z"
          />
          <path
            d="M4145 7073 c-11 -3 -26 -10 -33 -16 -10 -8 -15 -8 -20 0 -9 13 -62 4
-267 -48 -197 -49 -343 -60 -484 -38 -35 5 -66 8 -68 5 -8 -8 24 -36 41 -36 9
0 16 -4 16 -8 0 -4 26 -17 58 -27 88 -31 353 -29 475 3 48 13 105 30 125 39
20 9 46 19 57 23 70 28 175 85 172 94 -4 12 -41 17 -72 9z"
          />
          <path
            d="M3344 6254 c-13 -18 -19 -22 -25 -12 -10 17 -42 -12 -64 -58 -9 -19
-22 -34 -28 -34 -7 0 -31 -18 -52 -41 -68 -69 -135 -107 -201 -115 -32 -3 -69
-6 -81 -5 -13 0 -47 -6 -75 -14 -116 -31 -116 -32 -65 -55 40 -18 51 -20 106
-25 24 -2 60 -6 80 -10 40 -7 157 17 205 42 17 9 49 32 71 52 22 20 49 43 60
51 39 29 98 141 103 198 5 58 -7 68 -34 26z"
          />
          <path
            d="M2933 5782 c-7 -15 -12 -61 -12 -102 0 -41 -6 -140 -15 -219 -9 -79
-16 -191 -17 -250 0 -58 -3 -114 -7 -123 -8 -18 -76 -68 -94 -68 -6 0 -19 -6
-27 -14 -20 -18 -179 -97 -243 -121 -27 -10 -48 -21 -48 -26 0 -5 -6 -6 -13
-3 -7 2 -39 -7 -70 -21 -31 -13 -57 -22 -57 -20 0 3 -13 -1 -29 -9 -74 -39
-283 -56 -424 -36 -108 15 -130 7 -123 -48 3 -20 5 -42 5 -48 2 -29 146 -71
266 -78 100 -6 244 13 320 43 42 16 121 42 145 47 14 3 44 14 66 24 23 10 56
21 73 25 17 4 34 12 38 19 5 7 29 20 55 30 25 9 52 24 58 32 7 7 16 14 21 14
5 0 28 12 50 26 23 14 42 24 43 22 1 -2 10 -15 19 -30 20 -31 38 -35 57 -13 7
9 19 14 27 11 20 -8 43 4 43 23 0 9 4 21 9 26 4 6 17 34 27 64 10 29 31 64 47
77 99 83 176 230 164 314 -4 32 -2 42 13 50 28 15 33 46 16 98 -20 59 -112
162 -145 162 -13 0 -19 -4 -16 -10 4 -6 -3 -18 -15 -28 l-21 -17 21 -23 c11
-12 24 -22 28 -22 13 0 80 -94 87 -121 5 -21 2 -27 -12 -31 -11 -3 -24 -21
-31 -44 -15 -48 -79 -137 -95 -131 -7 2 -13 23 -14 48 -2 39 -23 199 -42 319
-5 29 -12 44 -20 42 -9 -2 -12 4 -7 21 7 30 -13 95 -24 77 -6 -9 -10 -7 -14 7
-4 11 -16 29 -29 41 l-22 21 -12 -27z"
          />
          <path
            d="M3364 5365 c-13 -29 -15 -49 -9 -103 18 -166 13 -295 -16 -357 -21
-45 -49 -182 -49 -237 0 -69 16 -82 60 -49 16 11 35 21 43 21 14 0 67 51 67
64 0 5 9 27 19 50 70 151 87 217 77 300 -6 45 -10 55 -21 46 -10 -8 -14 2 -17
52 -3 41 -14 83 -32 121 -26 54 -29 57 -45 43 -26 -24 -33 -20 -26 13 6 30 -8
71 -25 71 -5 0 -17 -16 -26 -35z"
          />
          <path
            d="M8520 5112 c0 -15 -5 -33 -10 -38 -7 -7 -7 -74 0 -205 6 -106 11
-263 11 -346 0 -133 2 -153 16 -153 9 0 21 7 27 16 7 8 27 16 46 17 53 3 70
42 77 177 3 60 10 110 15 110 5 0 6 6 1 12 -4 7 -6 26 -5 43 1 25 0 27 -7 10
-8 -17 -10 -14 -10 15 0 31 2 33 12 16 7 -10 23 -32 36 -48 45 -55 92 -194
108 -320 5 -46 23 -68 23 -30 0 11 11 24 24 30 21 9 25 19 28 74 4 71 -8 168
-23 182 -5 6 -9 16 -9 24 0 19 -63 106 -119 165 -35 37 -52 47 -77 47 -29 0
-32 3 -39 38 -3 20 -12 46 -19 57 -7 11 -18 39 -24 62 -19 66 -82 100 -82 45z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Profile;
