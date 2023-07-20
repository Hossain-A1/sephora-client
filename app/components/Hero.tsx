import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-5rem)] wrapper padding z-[10] relative">
     
      <div className="w-full h-full ">
        <div className="w-screen h-screen">
          <Image width={400} height={600} priority src="https://images.pexels.com/photos/6942543/pexels-photo-6942543.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-screen h-screen object-cover" />
        </div>
      </div>
      <div className="headline absolute left-1/2 top-1/2 -translate-x-1/2">
        <h2 className="text-center w-11/12  text-4xl uppercase font-semibold text-light">Shop Smarter, Not Harder: Find Everything You Need at Our e-Commerce Store.</h2>
      </div>
      <div className="modal absolute w-[20%] h-[40%] bg-white/90 z-[20] top-1/2 rounded-lg flex flex-col justify-between px-5 py-1 overflow-hidden shadow-lg backdrop-blur-lg">
<h2 className="text-dark text-center font-semibold">weekly <span className="text-accent1">40%</span> offers</h2>
<div className="flex gap-2">
  <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600" alt="show" className="w-24 h-24" />
  <img src="https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg?auto=compress&cs=tinysrgb&w=600" alt="show" className="w-24 h-24" />

</div>

<Button href="/offer" color='ghost' placeholder="Get now"/>

      </div>

      
    </section>
  );
};

export default Hero;
