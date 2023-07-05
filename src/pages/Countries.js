import { useState, useEffect } from 'react';

function CountriesPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
      const getCountries = async () => {
        const response = await fetch(`http://localhost:9099/locations-management/v1/countries`);
        const data = await response.json();
        setCountries(data.countryList);
      }

      getCountries()
        .catch(console.error);;
  }, []);
  
  return (
    <div className="container">
      <div className="Page-header">
        <h3>List Country</h3>
      </div>
      <div className="Page-body">
        {countries.map(country => 
          <CountrView data={country} />
        )}
      </div>
    </div>
  );
}

function CountrView({data}) {
  return (
    <div className="row" key={data.name}>
      <div className="value">{data.name}</div>
      <div className="label">{data.status}</div>
      <div className="value">{data.dateCreated}</div>
    </div>
  );
}

export default CountriesPage;
