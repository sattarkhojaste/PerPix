import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { 
  Palette, 
  Smartphone, 
  Layout, 
  Code2, 
  Users, 
  Lightbulb,
  Figma,
  Layers,
  Package,
  Target,
  Crown,
  Puzzle
} from 'lucide-react';

const skills = [
  {
    icon: Package,
    title: 'Product Design',
    description: 'End-to-end product design from concept to launch, balancing user needs with business objectives',
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description: 'Aligning design decisions with business goals',
  },
  {
    icon: Crown,
    title: 'Leadership',
    description: 'Leading cross-functional teams and mentoring designers to achieve exceptional results',
  },
  {
    icon: Target,
    title: 'UX Design',
    description: 'Creating seamless user experiences through empathy-driven design and iterative testing',
  },
  {
    icon: Users,
    title: 'UX Research',
    description: 'Understanding user needs through research and data-driven insights',
  },
  {
    icon: Puzzle,
    title: 'Creative Problem Solving',
    description: 'Transforming complex challenges into elegant solutions through innovative thinking',
  },
  {
    icon: Layout,
    title: 'Design Systems',
    description: 'Building scalable design systems that maintain consistency',
  },
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Crafting beautiful, intuitive interfaces with attention to every detail',
  },
  {
    icon: Code2,
    title: 'Prototyping',
    description: 'Bringing designs to life with interactive prototypes',
  },
  {
    icon: Layers,
    title: 'Information Architecture',
    description: 'Organizing complex information into clear structures',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description: 'Creating responsive experiences optimized for mobile devices',
  },
  {
    icon: Figma,
    title: 'Figma Expert',
    description: 'Advanced proficiency in Figma, Auto Layout, and components',
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-32 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}