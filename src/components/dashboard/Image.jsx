const Image = ({ vehicle, width, height }) => {
  return (
    <div className="overflow-hidden rounded-md ">
      <img
        src={vehicle.image}
        alt={vehicle.make}
        width={width}
        height={height}
        className="h-auto w-[200px] object-cover transition-all hover:scale-105 aspect-video"
      />
    </div>
  );
};

export default Image;
