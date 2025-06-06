import { useHostVan } from './HostVanDetails';

export default function HostVanPhotos() {
  const { van } = useHostVan();

  return van ? (
    <img src={van.imageUrl} alt={van.name} className="host-van__photo" />
  ) : (
    <p>Loading</p>
  );
}
