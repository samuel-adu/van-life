import { useHostVan } from './HostVanDetails';

export default function HostVanPricing() {
  const { van } = useHostVan();

  return van ? <p>${van.price.toFixed(2)}/day</p> : <p>Loading...</p>;
}
