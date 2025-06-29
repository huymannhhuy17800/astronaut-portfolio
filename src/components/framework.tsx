import { OrbitingCircles } from "./orbiting-circles";
const Frameworks = () => {
  const skills = [
    "git",
    "react-js",
    "mongodb",
    "express-js",
    "html",
    "css",
    "boomi",
    "mendix",
    "aws",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/skills/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/skills/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

interface Props {
  src: string;
}

const Icon: React.FC<Props> = ({ src }) => {
  return (
    <img src={src} alt="" className="rounded-sm hover:scale-110 duration-200" />
  );
};

export default Frameworks;
