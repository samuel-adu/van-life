import { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useOutletContext,
  useParams,
} from 'react-router';
import '../../styles/routes/host/hostVanDetails.css';
import VanTypeLabel from '~/components/VanTypeLabel';
import type { ContextType, Van } from '~/types';

export default function HostVanDetails() {
  const NavLinkActiveStyles = {
    fontWeight: '700',
    textDecoration: 'underline',
    color: '#161616',
  };

  const [van, setVan] = useState<Van | null>(null);

  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.van));
  }, [params.id]);

  return (
    <div className="container host-van-details-page">
      <Link to=".." className="back-btn" relative="path">
        &larr; back to all vans
      </Link>

      <div className="host-van-details__content">
        <div className="host-van-details__hero">
          <img
            src={van?.imageUrl}
            alt={van?.name}
            className="host-van-details__image"
          />
          <div className="host-van__summary">
            <VanTypeLabel type={van?.type} />
            <h2 className="host-van-details__heading ">{van?.name}</h2>
            <p className="host-van-details__sub-heading">
              ${van?.price}
              <span>/day</span>
            </p>
          </div>
        </div>

        <nav className="nav host-van-details__nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <NavLink
                to="."
                end
                className={`nav__link`}
                style={({ isActive }) => (isActive ? NavLinkActiveStyles : {})}
              >
                Details
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink
                to="pricing"
                className={`nav__link`}
                style={({ isActive }) => (isActive ? NavLinkActiveStyles : {})}
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink
                to="photos"
                className={`nav__link`}
                style={({ isActive }) => (isActive ? NavLinkActiveStyles : {})}
              >
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="host-van-details__main">
          <Outlet context={{ van } satisfies ContextType} />
        </div>
      </div>
    </div>
  );
}

export function useHostVan() {
  return useOutletContext<ContextType>();
}
