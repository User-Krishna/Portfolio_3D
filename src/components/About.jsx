import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import myImage from "./image.jpg";



const ServiceCard = ({ index, title, icon, tools }) => {
  // Array of colors for badges
  const badgeColors = [
    "bg-red-100 text-red-700",
    "bg-green-100 text-green-700",
    "bg-blue-100 text-blue-700",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
    "bg-indigo-100 text-indigo-700",
  ];

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-6 flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>

          {/* Render tools if they exist */}
          {tools && (
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {tools.map((tool, i) => (
                <li
                  key={tool}
                  className={`${badgeColors[i % badgeColors.length]} px-2 py-1 rounded-full text-sm`}
                >
                  {tool}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
     <div className="relative flex justify-center items-center mt-20">
  {/* Rotating arcs container - closer to image */}
  <div className="absolute w-[220px] h-[220px]">
    {/* Arc 1 */}
    <div className="absolute w-full h-full rounded-full border-4 border-t-pink-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
    {/* Arc 2 */}
    <div className="absolute w-full h-full rounded-full border-4 border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent animate-spin-slow"></div>
    {/* Arc 3 */}
    <div className="absolute w-full h-full rounded-full border-4 border-t-green-400 border-r-transparent border-b-transparent border-l-transparent animate-spin-reverse"></div>
  </div>

  {/* Center Image */}
  <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-2xl z-10">
    <img
      src={myImage}
      alt="Krishna Das"
      className="w-full h-full object-cover"
    />
  </div>
</div>



      <motion.div variants={textVariant()} className="mt-6 text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
      >
        {personalInfo.about}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, navigationPaths.about);
