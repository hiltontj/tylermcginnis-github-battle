import React from 'react'
import PropTypes from 'prop-types'

const styles = {
   content : {
      fontSize : "35px",
      position : "absolute",
      left : 0,
      right : 0,
      marginTop : "20px",
      textAlign : "center"
   }
}

export default function Loading({ text, speed}) {
   const [content, setContent] = React.useState(text)

   React.useEffect(() => {
      const id = window.setInterval(() => {
         content === text + '...'
            ? setContent(text)
            : setContent((c) => c + '.')
      }, speed)

      return () => window.clearInterval(id)
   }, [text])

   return <p style={styles.content}>{this.state.content}</p>
}


Loading.propTypes = {
   text : PropTypes.string,
   speed : PropTypes.number
}

Loading.defaultProps = {
   text : "Loading",
   speed : 300
}