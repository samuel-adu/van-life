import { Link } from 'react-router';

interface vanCardProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  type: string;
}

export default function vanCard({
  id,
  imageUrl,
  name,
  price,
  type,
}: vanCardProps) {
  return (
    <div key={id} className="van-card">
      <Link to={`/vans/${id}`}>
        <img src={imageUrl} className="van-image" />
        <div className="van-info">
          <p className="van-name">{name}</p>
          <p className="van-price">
            ${price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${type} selected`}>{type}</i>
      </Link>
    </div>
  );
}
