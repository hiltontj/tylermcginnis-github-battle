import React from 'react'

export default function useHover(ref) {
   const [hovering, setHovering] = React.useState(null)
   
   React.useEffect(() => {
      ref.current.onmouseover = () => setHovering(true)
   }, [])

   React.useEffect(() => {
      ref.current.onmouseout = () => setHovering(false)
   }, [])

   return hovering
}