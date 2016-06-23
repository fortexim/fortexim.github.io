import { default as React } from "react";
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 *
 * We use React 0.14 stateless function components here.
 * https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
 */

const CompanyMap = props => (
  <section style={{ height: '280px',  width: '100%' }}>
    <GoogleMapLoader
      containerElement={
        <div
          {...props.containerElementProps}
          style={{
            height: '280px', width: '100%'
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          // ref={(map) => console.log(map)}
          defaultZoom={7}
          defaultCenter={{ lat: 47.803116, lng: 21.680198399999995 }}
        >
          {props.markers.map((marker, index) => (
            <Marker
              {...marker}
            />
          ))}
        </GoogleMap>
      }
    />
  </section>
);

export default CompanyMap