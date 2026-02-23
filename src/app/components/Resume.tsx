import { motion } from 'motion/react';
import { Download, FileText, Eye } from 'lucide-react';

export function Resume() {
  const resumeLink = 'https://drive.google.com/file/d/1lfRTwtXDyjnd0NkZMmCvGQYUkiEy2OXo/view?usp=drive_link';
  const downloadLink = 'https://drive.google.com/uc?export=download&id=1lfRTwtXDyjnd0NkZMmCvGQYUkiEy2OXo';

  const handleDownload = () => {
    // Open Google Drive download link
    window.open(downloadLink, '_blank');
  };

  const handleView = () => {
    // Open Google Drive viewer in new tab
    window.open(resumeLink, '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Resume
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Download or view my complete professional resume
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Resume Card */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Sattar Khojaste - Product Designer
                </h3>
                <p className="text-slate-400 mb-6">
                  7+ Years Experience • 15+ Happy Clients • 20+ Projects
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {/* Download Button */}
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download Resume
                  </motion.button>

                  {/* View Button */}
                  <motion.button
                    onClick={handleView}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-slate-700/50 text-white font-semibold rounded-xl border border-slate-600 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    View Online
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">7+</div>
                <div className="text-slate-400 text-sm">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-slate-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-slate-400 text-sm">Projects</div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-center text-slate-500 text-sm"
          >
            <p>PDF Format • Last Updated: February 2026 • 2 Pages</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}