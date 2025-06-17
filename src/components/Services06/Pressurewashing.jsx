
import './Pressurewashing.css';

const PressureWashing = () => {
  // Path to local image inside public/images/
  const backgroundUrl = `${process.env.PUBLIC_URL}/pressure.avif`;

  return (
    <section
      className="PressureWashing"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="PressureWashing__overlay">
        <h1 className="PressureWashing__title">
          Professional Pressure Washing
        </h1>
      </div>
    </section>
  );
};

export default PressureWashing;
