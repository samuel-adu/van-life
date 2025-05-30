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
      <div className="container">
        <h2 className="heading">Your listed vans</h2>

        <div className="host-vans-list">
          {vans.length > 0 ? (
            vans.map((van) => (
              <Link
                to={`/host/vans/${van.id}`}
                key={van.id}
                className="host-van-link-wrapper"
              >
                <div className="host-van-card" key={van.id}>
                  <img
                    src={van.imageUrl}
                    alt={`Photo of ${van.name}`}
                    className="host-van-card__image"
                  />
                  <div className="host-van-card__info">
                    <p className="host-van-card__title">{van.name}</p>
                    <p className="host-van-card__text">${van.price}/day</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h2 className="sub-heading">Loading vans...</h2>
          )}
        </div>
      </div>
    </section>
  );
}
