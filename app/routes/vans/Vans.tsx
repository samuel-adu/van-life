import { useState, useEffect } from 'react';
import '../../styles/routes/vans/vans.css';
import type { Van } from '~/types';
import { Link, useSearchParams } from 'react-router';

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState<Van[]>([]);

  const typeFilter = searchParams.get('type');

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  function handleFilterChange(value: string | null) {
    setSearchParams((prevSearchParams) => {
      if (value === null) {
        prevSearchParams.delete('type');
      } else {
        prevSearchParams.set('type', value);
      }
      return prevSearchParams;
    });
  }

  return (
    <main className="van-list__page">
      <div className="container">
        <h2 className="heading">Explore our van options</h2>

        <div className="filter">
          <button
            onClick={() => handleFilterChange('simple')}
            className={`btn btn--primary filter__btn filter__simple ${
              typeFilter === 'simple' ? 'filter__btn--selected' : ''
            }`}
          >
            Simple
          </button>

          <button
            onClick={() => handleFilterChange('luxury')}
            className={`btn btn--primary filter__btn filter__luxury ${
              typeFilter === 'luxury' ? 'filter__btn--selected' : ''
            }`}
          >
            Luxury
          </button>

          <button
            onClick={() => handleFilterChange('rugged')}
            className={`btn btn--primary filter__btn filter__rugged ${
              typeFilter === 'rugged' ? 'filter__btn--selected' : ''
            }`}
          >
            Rugged
          </button>

          {typeFilter && (
            <button
              onClick={() => handleFilterChange(null)}
              className="btn btn--secondary clear-filter-btn"
            >
              Clear filter
            </button>
          )}
        </div>

        <div className="van-list">
          {displayedVans.map((van) => (
            <div key={van.id} className="van-card">
              <Link
                to={van.id}
                state={{ search: searchParams.toString(), type: typeFilter }}
              >
                <img src={van.imageUrl} className="van-image" />
                <div className="van-info">
                  <p className="van-name">{van.name}</p>
                  <p className="van-price">
                    ${van.price}
                    <span>/day</span>
                  </p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
