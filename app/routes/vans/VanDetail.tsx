import React from 'react';
import { useParams } from 'react-router';
import '../../styles/routes/vans/vanDetails.css';

export default function VanDetail() {
  const params = useParams();

  interface van {
    imageUrl: string;
    description: string;
    name: string;
    type: string;
    price: number;
  }

  const [van, setVan] = React.useState<van | null>(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.van));
  }, [params.id]);

  return (
    <main className="van-detail-page">
      <div className="container">
        {van ? (
          <div className="van-detail">
            <div className="van-">
              <img src={van.imageUrl} className="van-image" />
            </div>
            <div className="van-">
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
              <h2 className="heading">{van.name}</h2>
              <p className="van-price">
                ${van.price}
                <span>/day</span>
              </p>
              <p>{van.description}</p>
              <button className="btn btn--primary btn--full-width">
                Rent this van
              </button>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </main>
  );
}
