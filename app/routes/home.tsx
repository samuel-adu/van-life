import type { Route } from './+types/home';
import { Link } from 'react-router';
import '../styles/routes/home.css';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home-content">
          <h1 className="main-heading">
            You got the travel plans, we got the travel vans.
          </h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to="/vans" className="btn btn--primary btn--full-width">
            Find your van
          </Link>
        </div>
      </div>
    </section>
  );
}
