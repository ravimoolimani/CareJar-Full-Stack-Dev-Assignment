import React, { useEffect, useState } from "react";
import "../css/doctorType.css";
import { useNavigate } from "react-router-dom";
import { consultentData } from "../apiData/consultentData";
import LoadingScreen from "./LoadingScreen";

const DoctorType = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch doctor data from the API when the component mounts
    consultentData()
      .then((data) => {
        setApiData(data.doctors);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, []);

  return (
    <div className="row">
      {apiData ? (
        apiData.map((data, index) => (
          <div className="column">
            <div
              onClick={() => navigate("/appoinment/" + index)}
              className="card"
            >
              <div>
                <div>
                  <img alt="" src={data.imageurl}></img>
                  <div className="appointment-details">
                    <p className="doctor-type">{data.type}</p>

                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default DoctorType;