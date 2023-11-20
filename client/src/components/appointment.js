import React, { useEffect, useState } from "react";
import "../css/appointment.css";
import { consultentData } from "../apiData/consultentData";
import { useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const Appointment = () => {
  const [apiData, setApiData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch data from the API when the component mounts
    consultentData()
      .then((data) => {
        console.log(data.doctors[id].specialist_doctors);
        setApiData(data.doctors[id].specialist_doctors);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, [id]); // Include 'id' as a dependency to re-fetch data when it changes

  return (
    <div>
      {apiData.length ? (
        apiData.map((doctor, index) => (
          <div key={index}>
            <div className="doctor-card">
              <img
                className="doctor-image"
                src={doctor.image_url}
                alt={`Dr. ${doctor.name}`}
              />
              <div className="doctor-info">
                <div className="doctor-details">
                  <p className="doctor-name">{doctor.name}</p>
                  <p className="doctor-type">{doctor.type}</p>
                  <p className="doctor-experience">
                    {doctor.experience_years} years of experience overall
                  </p>
                  <div className="doctor-location">
                    <p>{doctor.location}</p>
                    <p>⚫</p>
                    <p>{doctor.name.replace(/^Dr.\s+/i, "")} Clinic</p>
                  </div>
                  <p className="doctor-fee">
                    {doctor.fee} Consultation fee at Clinic
                  </p>
                  <div className="doctor-ratings">
                    <p className="doctor-assurance">👍{doctor.assurance}%</p>
                    <p className="patient-stories">
                      {doctor.patient_stories_count}Patient Stories
                    </p>
                  </div>
                </div>
                <div className="doctor-actions">
                  <button className="book-appointment-button">
                    Book Appointment No Booking Fee
                  </button>

                  <p>
                    <img
                      className="book-appoinment-img"
                      src="https://user-images.githubusercontent.com/86207985/270446299-183c07b5-2340-4aaf-afda-1515d497bac0.png"
                    />
                    Available Today
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default Appointment;