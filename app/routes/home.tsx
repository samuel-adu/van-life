import type { Route } from './+types/Home';
import { Link } from 'react-router';
import '../styles/routes/home.css';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Van Life App' },
    { name: 'description', content: 'A website that for van rentals' },
  ];
}

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home__content">
          <h1 className="main-heading">
            You got the travel plans, we got the travel vans.
          </h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to="/vans" className="btn btn--primary home__btn ">
            Find your van
          </Link>
        </div>
      </div>
    </section>
  );
}
