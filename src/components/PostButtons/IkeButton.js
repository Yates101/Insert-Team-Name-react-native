import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function IkeButton(props) {

  const {color="#009fe3", width=40.35, heigth=30.24, newcolor='red'} = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={heigth}
      viewBox="0 0 114.39 85.73"
      {...props}
    >
      <Rect
        x={0.5}
        y={26.47}
        width={27.53}
        height={58.76}
        rx={9.41}
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
      />
      <Path
        d="M107.65 42.64a6.22 6.22 0 016.23 6.23v3.19a6.2 6.2 0 01-2.83 5.22 6.21 6.21 0 012.83 5.22v3.19a6.24 6.24 0 01-2.6 5.07 6.19 6.19 0 012.6 5.06v3.19a6.22 6.22 0 01-6.23 6.22H44.49a6.08 6.08 0 01-.61 0h-.81a4.81 4.81 0 01-4.81-4.8V30.86a4.91 4.91 0 01.37-1.84v-2.66l.73-.29L82.15 8.64l3.64-7.12.1.06A2.64 2.64 0 0188.32.52l1.94.23a2.65 2.65 0 012.31 2.94l-1.84 15.53a2.63 2.63 0 01-1.3 2v.07L75.3 27.04h32.32a6.22 6.22 0 016.23 6.23v3.19a6.22 6.22 0 01-6.2 6.18z"
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export {IkeButton}
