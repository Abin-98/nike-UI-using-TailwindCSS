import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-around items-center
    max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl text-center font-bold font-palanquin leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates </span>& Newsletter
      </h3>
      <div
        className="flex items-center sm:border 
      lg:max-w-[40%] w-full p-2.5 rounded-full gap-5 max-sm:flex-col
      sm:border-slate-gray"
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
