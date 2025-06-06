import { Link } from 'react-router';
import '../styles/notFound.css';

function NotFound() {
  return (
    <section className="container error-page">
      <p className="error-page__text">
        Sorry, the page you were looking for was not found.
      </p>
      <Link to={'/'} className="btn btn--primary error-page__btn">
        Return to home
      </Link>
    </section>
  );
}

export default NotFound;
