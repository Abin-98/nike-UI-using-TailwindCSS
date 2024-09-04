import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { statistics } from "../constants";
import { shoes } from "../constants";
import ShoeCard from '../components/ShoeCard';
import { useRef,useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg]=useState(bigShoe1);

  return (
    <section
      id="home"
      className="xl:flex-row flex w-full min-h-screen max-container gap-10 justify-center"
    >
      <div className="flex relative xl:w-2/5 w-full flex-col max-xl:padding-x pt-28 justify-center items-start">
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mt-6 mb-14 text-lg leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality confort and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start gap-16 w-full flex-wrap mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin font-bold text-4xl">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg}
        alt="show collection"
        width={610}
        height={502}
        className="object-contain relative z-10"
        />
      
      <div className="absolute -bottom-[5%] flex gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, index)=>(
          <div key={index}>
            <ShoeCard
            index={index} 
            imgURL={shoe}
            changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}/>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Hero;
