import { useHostVan } from './HostVanDetails';

export default function HostVanPricing() {
  const { van } = useHostVan();

  return van ? (
    <p className="host-van__pricing">
      ${van.price.toFixed(2)}
      <span>/day</span>
    </p>
  ) : (
    <p>Loading...</p>
  );
}
