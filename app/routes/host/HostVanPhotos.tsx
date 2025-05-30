import { useHostVan } from './HostVanDetails';

export default function HostVanPhotos() {
  const { van } = useHostVan();

  return van ? <img src={van.imageUrl} alt={van.name} /> : <p>Loading</p>;
}
