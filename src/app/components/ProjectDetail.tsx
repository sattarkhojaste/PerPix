import { motion } from "motion/react";
import { ArrowLeft, Calendar, Users, Wrench } from "lucide-react";
import { useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

interface ProjectDetailProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    fullDescription: string;
    role: string;
    duration: string;
    responsibilities?: string;
    businessGoals?: string;
    productGoals?: string;
    team: string;
    tools: string[];
    challenge: string;
    solution: string;
    outcomes: string[];
    images: string[];
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-950"
    >
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-slate-800/90 backdrop-blur-sm text-white rounded-full hover:bg-slate-700 transition-all border border-slate-700 shadow-lg"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Projects</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-purple-400 uppercase tracking-wider mb-4 font-semibold">
              {project.category}
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-2xl text-slate-300 max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Project Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <div className="font-semibold text-white">Role</div>
            </div>
            <div className="text-slate-400">{project.role}</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <div className="font-semibold text-white">Duration</div>
            </div>
            <div className="text-slate-400">{project.duration}</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-pink-400" />
              </div>
              <div className="font-semibold text-white">Team</div>
            </div>
            <div className="text-slate-400">{project.team}</div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-green-400" />
              </div>
              <div className="font-semibold text-white">Tools</div>
            </div>
            <div className="text-slate-400 text-sm">
              {project.tools.join(", ")}
            </div>
          </motion.div>
        </div>

        {/* Overview */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Overview</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </motion.div>

        {/* responsibilities */}
        {project.responsibilities && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              My Responsibilities
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              {project.responsibilities}
            </p>
          </motion.div>
        )}

        {/* businessGoals */}
        {project.businessGoals && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Business Goals
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              {project.businessGoals}
            </p>
          </motion.div>
        )}

        {/* productGoals */}
        {project.productGoals && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Product Goals
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              {project.productGoals}
            </p>
          </motion.div>
        )}

        {/* Challenge */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">The Challenge</h2>
          <div className="bg-slate-800/30 border-l-4 border-purple-500 p-8 rounded-r-2xl">
            <p className="text-xl text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">The Solution</h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            {project.solution}
          </p>
        </motion.div>

        {/* Project Images Gallery */}
        {project.images.length > 0 && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Design Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-white aspect-[16/10] p-6 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Outcomes */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">Key Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-slate-300 text-lg">{outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Technologies & Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-full border border-slate-600 text-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Back to Top */}
      <div className="pb-20 text-center">
        <motion.button
          onClick={onBack}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More Projects
        </motion.button>
      </div>

      {/* Image Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={project.images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </motion.div>
  );
}
