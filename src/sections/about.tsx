import React, { useRef } from "react";
import Card from "../components/card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/copy-email-button";
import Frameworks from "../components/framework";

const About = () => {
  const grid2Container = useRef<HTMLDivElement>(null);
  return (
    <section className="c-space section-spacing">
      <h2 className="text-4xl font-semibold">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding.jpg"
            className="absolute scale-200 -right-[5rem] -top-[1rem] md:scale-[3.5] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-45"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Huy</p>
            <p className="subtext">
              With one year of experience, I’m passionate about web design using
              the React library and deeply drawn to NodeJS
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-ends text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              text="GRASP"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SOLID"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Patterns"
              style={{ rotate: "90deg", top: "30%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Principles"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SRP"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/boomi.svg"
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/express-js.svg"
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/typescript.svg"
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/mongodb.svg"
              style={{ rotate: "5deg", top: "5%", left: "65%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/react-js.svg"
              style={{ rotate: "5deg", top: "25%", left: "2%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Moon, and open to remote worldwide
            </p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[40%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[30%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
