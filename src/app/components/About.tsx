import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p>
                As a Product Designer with over seven years of experience, I possess a 
                diverse background in Graphic Design and Front-end Development. This has 
                enabled me to develop a deeper understanding of the design process and 
                create exceptional products that are both simple and impressive.
              </p>
              <p>
                I specialize in designing complex web applications, mobile experiences, 
                and design systems that scale. From fintech to healthcare, I've worked 
                across diverse industries to solve real user problems. Additionally, I 
                have a passion for researching new technologies and integrating them with 
                existing tech, which is something I enjoy doing in my spare time.
              </p>
              <p>
                One of my key strengths lies in my ability to take responsibility, be 
                highly organized, work collaboratively, communicate effectively, and pay 
                close attention to detail. I hold a bachelor's degree in Graphic Design 
                and place a high value on constant learning and development.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {[
              { number: '7+', label: 'Years Experience' },
              { number: '20+', label: 'Projects Completed' },
              { number: '15+', label: 'Happy Clients' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-colors cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}