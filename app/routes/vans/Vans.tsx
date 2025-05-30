import { useState, useEffect } from 'react';
import VanCard from '../../components/VanCard';
import '../../styles/routes/vans/vans.css';

export default function Vans() {
  type van = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    type: string;
  };

  const [vans, setVans] = useState<van[]>([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  return (
    <main className="van-list__page">
      <div className="container">
        <h2 className="heading">Explore our van options</h2>
        <div className="van-list">
          {vans.map((van) => (
            <VanCard
              id={van.id}
              imageUrl={van.imageUrl}
              name={van.name}
              price={van.price}
              type={van.type}
              key={van.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
