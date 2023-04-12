import { Helmet } from "react-helmet";
import TripsContent from "../components/TripsContent";

const Trips = () => {
  return (
    <div>
      <Helmet>
        <title>Trips</title>
      </Helmet>
      <div>Trips</div>
      <TripsContent />
    </div>
  );
};
export default Trips;
