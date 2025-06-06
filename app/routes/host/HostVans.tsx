import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../../styles/routes/host/hostVans.css';

export default function HostVans() {
  type vans = {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    type: string;
    hostId: string;
  }[];

  const [vans, setVans] = useState<vans | []>([]);
  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  return (
    <section className="host-vans">
      <h2 className="host-vans__heading heading">Your listed vans</h2>

      <div className="host-vans__list">
        {vans.length > 0 ? (
          vans.map((van) => (
            <Link to={van.id} key={van.id} className="host-van__link-wrapper">
              <div className="host-vans__card" key={van.id}>
                <img
                  src={van.imageUrl}
                  alt={`Photo of ${van.name}`}
                  className="host-vans__card-image"
                />
                <div className="host-vans__card-info">
                  <p className="host-vans__card-title">{van.name}</p>
                  <p className="host-vans__card-text">${van.price}/day</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h2 className="sub-heading">Loading vans...</h2>
        )}
      </div>
    </section>
  );
}
