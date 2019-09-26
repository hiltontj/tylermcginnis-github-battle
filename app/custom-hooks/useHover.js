import React from 'react'

export default function useHover() {
   const [hovering, setHovering] = React.useState(null)
   
   const onMouseOver = () => setHovering(true)
   const onMouseOut  = () => setHovering(false)

   return [hovering, {
      onMouseOver,
      onMouseOut
   }]
}