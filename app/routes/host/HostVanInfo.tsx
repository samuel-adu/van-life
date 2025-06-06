import { useHostVan } from './HostVanDetails';

export default function HostVanInfo() {
  const { van } = useHostVan();

  if (!van) return <p>Loading...</p>;

  return (
    <>
      <p className="host-van__attribute">
        <span>Name:</span>
        {van.name}
      </p>
      <p className="host-van__attribute">
        <span>Category:</span>
        {van.type}
      </p>
      <p className="host-van__attribute">
        <span>Description:</span>
        {van.description}
      </p>
      <p className="host-van__attribute">
        <span>Visibility:</span>
        Public
      </p>
    </>
  );
}
