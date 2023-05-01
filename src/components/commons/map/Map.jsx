import React from 'react';
import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps';


const Map = (props) => {
  return (
    <>
    <GoogleMap defaultCenter={{ lat:-34, long:100 }}
      defaultZoom={10} />
    </>
  )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )

)