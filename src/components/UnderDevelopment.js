import developer from "./../assets/img/developer.png";

const UnderDevelopemnt = (props) => {
  return (
    <div className="bg-white shadow grid place-items-center h-[320px] lg:h-[600px] rounded">
      <div className="text-center space-y-3">
        <img src={developer} alt="developer" className="w-full lg:w-[300px]" />
        <h3 className="font-bold text-xl">
          {props.title || "Under Development"}
        </h3>
      </div>
    </div>
  );
};

export default UnderDevelopemnt;
