import React from 'react';
import { useAppointments } from './AppointmentContext';
import './AppointmentsPage.css';

const AppointmentsPage = () => {
  const { appointments } = useAppointments();

  return (
    <div className="appointments-page">
      <h1>My Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        appointments.map((appointment, index) => (
          <div className="appointment-card" key={index}>
            <div className="doctor-info">
              <h3>Doctor: {appointment.doctorName}</h3>
            </div>
            <div className="patient-info">
              <p><strong>Patient Name:</strong> {appointment.patientName}</p>
              <p><strong>Age:</strong> {appointment.patientAge}</p>
              <p><strong>Sex:</strong> {appointment.patientSex}</p>
            </div>
            <div className="appointment-info">
              <p><strong>Date:</strong> {appointment.appointmentDate}</p>
              <p><strong>Time:</strong> {appointment.appointmentTime}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AppointmentsPage;
