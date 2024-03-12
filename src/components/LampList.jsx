const LampList = ({ lamps }) => {

  return (
    <div className="lamp-list">
      {lamps.map((lamp) => (
        <div className="product" key={lamp.id}>
          <img src={lamp.image} />
          <h2>{lamp.name}</h2>
          <p>{lamp.description}</p>
          <button className="buy-btn">Köp för {lamp.cost}</button>
        </div>
      ))}
    </div>
  );
};

export default LampList;
