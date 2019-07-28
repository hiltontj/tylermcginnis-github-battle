import React from 'react';

export default class Result extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div>
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
         </div>
      )
   }
}