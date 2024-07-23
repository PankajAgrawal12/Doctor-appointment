import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { useAppointments } from './AppointmentContext';
import './DoctorCard.css';

Modal.setAppElement('#root');

const DoctorCard = ({ doctor }) => {
  const [showModal, setShowModal] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientSex, setPatientSex] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const { addAppointment } = useAppointments();

  const handleBookNow = () => {
    setShowModal(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const appointment = {
      doctorName: doctor.name,
      patientName,
      patientAge,
      patientSex,
      appointmentDate,
      appointmentTime,
    };
    addAppointment(appointment);
    setShowModal(false);
    toast.success('Appointment booked successfully');
  };

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      <p>{doctor.description}</p>
      <p>Rating: {doctor.rating} ({doctor.reviews} reviews)</p>
      <button onClick={handleBookNow}>Book Now</button>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Book Appointment"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Book Appointment with {doctor.name}</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Patient Age"
            value={patientAge}
            onChange={(e) => setPatientAge(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Patient Sex"
            value={patientSex}
            onChange={(e) => setPatientSex(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Appointment Date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
          <input
            type="time"
            placeholder="Appointment Time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
          <button type="submit">Book Appointment</button>
        </form>
      </Modal>
    </div>
  );
};

export default DoctorCard;
