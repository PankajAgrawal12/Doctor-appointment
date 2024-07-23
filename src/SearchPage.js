import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import DoctorCard from './DoctorCard';
import './SearchPage.css';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const doctors = [
  {
    name: "Dr. Rohan Mehta",
    specialty: "Pediatrician",
    description: "Id placerat tacimates definitionem sea, prima quidam vim no.",
    rating: 4,
    reviews: 145,
    image: "https://via.placeholder.com/150",
    type: "doctor",
    location: { lat: 21.332701, lng: 83.643303 },
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5,
    reviews: 200,
    image: "https://via.placeholder.com/150",
    type: "doctor",
    location: { lat: 20.2962, lng: 85.8255 },
  },
  {
    name: "City Clinic",
    specialty: "General Health",
    description: "Comprehensive health services for the entire family.",
    rating: 4,
    reviews: 120,
    image: "https://via.placeholder.com/150",
    type: "clinic",
    location: { lat: 20.2971, lng: 85.8265 },
  },
  // Other doctors and clinics omitted for brevity
];

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get('term');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const results = doctors.filter(doctor =>
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(results);
  }, [searchTerm]);

  const handleBookAppointment = (appointment) => {
    const newAppointments = [...appointments, appointment];
    setAppointments(newAppointments);
    navigate('/appointments', { state: { appointments: newAppointments } });
  };

  const center = filteredDoctors.length ? filteredDoctors[0].location : { lat: 20.5937, lng: 78.9629 };

  return (
    <div className="search-page">
      <div className="map-section">
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {filteredDoctors.map((doctor, index) => (
              <Marker
                key={index}
                position={doctor.location}
                title={doctor.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="doctor-list">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} onBookAppointment={handleBookAppointment} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
