import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CommentButton(props) {

  const {color="#1b9dd9", width=40.31, heigth=31.81} = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={heigth}
      viewBox="0 0 114.25 90.16"
      {...props}
    >
      <Path
        d="M113.75 15.62v43.89a15.14 15.14 0 01-15.12 15.14h-51l-9.69 14.82-22.7-14.84A15.11 15.11 0 01.49 59.51V15.62A15.13 15.13 0 0115.6.5h83a15.13 15.13 0 0115.15 15.12z"
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export {CommentButton}
