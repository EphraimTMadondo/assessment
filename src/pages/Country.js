import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryPage() {
  const [country, setCountry] = useState([]);
  const {countryId} = useParams();

  useEffect(() => {
      const getCountry = async () => {
        const response = await fetch(`http://localhost:9099/locations-management/v1/countries/id/${countryId}`);
        const data = await response.json();
        setCountry(data.country);
      }

      getCountry()
        .catch(console.error);;
  }, []);
  
  return (
    <div className="Page">
      <div className="Page-header">
        <h3>View Country</h3>
      </div>
      <div className="Page-body">
        <div className="row">
          <div className="label">Name</div>
          <div className="value">{country.name}</div>
        </div>
        <div className="row">
          <div className="label">Status</div>
          <div className="value">{country.status}</div>
        </div>
        <div className="row">
          <div className="label">Created</div>
          <div className="value">{country.dateCreated}</div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
