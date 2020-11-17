import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { addPayloads } from "../actions";
import Payload from "./Payload";
import { Card } from "semantic-ui-react";

const PayloadList = (props) => {

  useEffect(() => {
    async function fetchPayloads() {
      const response = await axios.get(
        "https://api.spacexdata.com/v3/payloads?limit=10&offset=10"
      );

      props.addPayloads(response.data);
    }
    fetchPayloads();
  }, []);
  // {
  //   "payload_id": "FalconSAT-2",
  //   "norad_id": [],
  //   "reused": false,
  //   "customers": [
  //       "DARPA"
  //   ],
  //   "nationality": "United States",
  //   "manufacturer": "SSTL",
  //   "payload_type": "Satellite",
  //   "payload_mass_kg": 20,
  //   "payload_mass_lbs": 43,
  //   "orbit": "LEO",
  //   "orbit_params": {
  //       "reference_system": "geocentric",
  //       "regime": "low-earth",
  //       "longitude": null,
  //       "semi_major_axis_km": null,
  //       "eccentricity": null,
  //       "periapsis_km": 400,
  //       "apoapsis_km": 500,
  //       "inclination_deg": 39,
  //       "period_min": null,
  //       "lifespan_years": null,
  //       "epoch": null,
  //       "mean_motion": null,
  //       "raan": null,
  //       "arg_of_pericenter": null,
  //       "mean_anomaly": null
  //   }

  return (
    <div>
      <ul>
        <Card.Group itemsPerRow={4}>
          {props?.payloads.map((payload) => (
            <Payload
            name={payload.payload_id}
            nationality={payload.nationality}
            manufacturer={payload.manufacturer}
            type={payload.type}
            kg={payload.payload_mass_kg}
            lbs={payload.payload_mass_lbs}
            orbit={payload.orbit}
            />
          ))}
        </Card.Group>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { payloads: state.payloads };
};

export default connect(mapStateToProps, {
  addPayloads,
})(PayloadList);
