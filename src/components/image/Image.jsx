const Image = ({ vehicle, width, height, className }) => {
  return (
    <div className="overflow-hidden rounded-lg ">
      <img
        src={vehicle.image}
        alt={vehicle.make}
        width={width}
        height={height}
        className={`h-auto min-w-[200px] object-cover transition-all hover:scale-105 aspect-video ${className}`}
      />
    </div>
  );
};

export default Image;
