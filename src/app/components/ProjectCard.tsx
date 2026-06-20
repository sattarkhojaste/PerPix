import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  tags,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-contain bg-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
            <ExternalLink className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-sm text-purple-400 mb-2 uppercase tracking-wider">
          {category}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
