
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/hasnainbaloch1444/' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/muhammad-hasnain-3444bb274/' },
    { icon: FaGithub, url: 'https://github.com/Hasnain1444' },
    { icon: FaTwitter, url: 'https://x.com/HasnainBaloch57' },
  ]

  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
                <span className="text-gradient" style={{ fontFamily: "'Morgan Strike', sans-serif" }}>hasnain's portfolio</span>
          </motion.div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-accent-blue/40 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="text-accent-blue" />
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © {new Date().getFullYear()} Muhammad Hasnain. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer