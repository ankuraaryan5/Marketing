import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Gallery = () => {
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end start"],
  });

  const projects = [
    {
      id: 1,
      title: "Food Ordering App",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Mobile App",
    },
    {
      id: 2,
      title: "Safety Consultation",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Web Design",
    },
    {
      id: 3,
      title: "Ark Homes",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Website",
    },
    {
      id: 4,
      title: "Member Benefits",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Marketing",
    },
    {
      id: 5,
      title: "KinnectD",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Branding",
    },
    {
      id: 6,
      title: "Cuero Health",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Healthcare",
    },
  ];

  // Create 3D scroll effects
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  return (
    <div
      ref={galleryRef}
      className="min-h-[300vh] bg-gradient-to-br from-purple-900 to-black py-20 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto sticky top-0 md:h-screen h-auto flex items-center justify-center overflow-hidden">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              style={{
                y: i % 3 === 0 ? y1 : i % 3 === 1 ? y2 : y3,
                scale: i % 3 === 0 ? scale1 : scale2,
                opacity: i >= 4 ? opacity1 : 1,
              }}
            >
              <ProjectCard project={project} className="mb-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden rounded-3xl shadow-2xl ${className}`}
    >
      <div className="aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6"
      >
        <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
        <div className="flex justify-between items-end">
          <p className="text-emerald-300 font-medium">{project.category}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white bg-emerald-600 hover:bg-emerald-700 rounded-full p-2"
          >
            <FiExternalLink />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;