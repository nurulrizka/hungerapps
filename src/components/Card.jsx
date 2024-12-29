function Card({ kota, rating, nama }) {
  return (
    <div className="restoran">
      <div className="img-content">
        <img src="./assets/hero.jpeg" alt="Gambar Restoran" />
        <div className="kota">
          <p>{kota}</p>
        </div>
      </div>

      <div className="info-content">
        <h2>Rating: {rating}</h2>
        <h1>{nama}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          laudantium.
        </p>
      </div>
    </div>
  );
}

export default Card;
