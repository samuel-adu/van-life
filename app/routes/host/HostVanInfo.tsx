import { useHostVan } from './HostVanDetails';

export default function HostVanInfo() {
  const { van } = useHostVan();

  if (!van) return <p>Loading...</p>;

  return (
    <div>
      <p>
        <span className="host-van-details__attribute">Name:</span>
        {van.name}
      </p>
      <p>
        <span className="host-van-details__attribute">Category:</span>
        {van.type}
      </p>
      <p>
        <span className="host-van-details__attribute">Description:</span>
        {van.description}
      </p>
      <p>
        <span className="host-van-details__attribute">Visibility:</span>
        Public
      </p>
    </div>
  );
}
