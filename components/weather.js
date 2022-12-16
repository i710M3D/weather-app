import Image from "next/image";

export default function Weather({ data }) {
  return (
    <>
      {" "}
      {/* top */}
      <div className="relative  flex justify-between max-w-[500px] max-h-fit m-auto mt-4 items-center z-10 ">
        <div className="flex flex-col  justify-center ">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width="100"
            height="100"
            alt=""
          />
          <p className="text-white font-semibold text-2xl w-fit mx-auto ">
            {data.weather[0].main}
          </p>
        </div>
        <p className="text-8xl font-bold text-white ">
          {data.main.temp.toFixed(0)}&#176;{" "}
        </p>
      </div>
      {/* bottom */}
      <div className="sm:max-w-[500px] w-full sm:mx-auto sm:mt-96 mt-40 flex flex-col text-white bg-black/70 rounded-2xl  sm:scale-100 scale-75">
        <div className="flex ">
          <h1 className="mx-auto p-5 xs:text-3xl font-extrabold text-xl ">
            Weather in {data.name}
          </h1>
        </div>
        <div className=" flex justify-around xs:text-3xl py-6 font-bold text-xl">
          <div className=" flex flex-col justify-center">
            <p className="mx-auto">{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className=" font-medium">Feels like</p>
          </div>
          <div className=" flex flex-col justify-center">
            <p className="mx-auto">{data.main.humidity}%</p>
            <p className=" font-medium">Humidity</p>
          </div>
          <div className=" flex flex-col justify-center">
            <p className="mx-auto">{data.wind.speed.toFixed(0)}MPH</p>
            <p className=" font-medium">Winds</p>
          </div>
        </div>
      </div>
    </>
  );
}
