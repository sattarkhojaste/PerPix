import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sattar-khojaste', color: 'from-blue-600 to-blue-400' },
    { icon: Mail, label: 'Gmail', href: 'mailto:Sattarkhojaste@gmail.com', color: 'from-red-500 to-orange-500' },
    { icon: Phone, label: 'Phone', href: 'tel:+989355452995', color: 'from-green-600 to-green-400' },
    { icon: Send, label: 'Telegram', href: 'https://t.me/+989109284562', color: 'from-sky-500 to-blue-500' },
  ];

  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:Sattarkhojaste@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-full hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}