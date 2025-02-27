import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiMailboxdotorg, SiInstagram } from "react-icons/si";

interface FooterProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  instagramUrl?: string;
}

export default function Footer({
  githubUrl = "",
  linkedinUrl = "",
  email = "",
  instagramUrl = "",
}: FooterProps) {
  return (
    <footer className="bg-muted/20 py-12 mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-serif text-xl mb-2">Let's Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <SiGithub className="h-5 w-5" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="hover:text-primary transition-colors"
                >
                  <SiMailboxdotorg className="h-5 w-5" />
                </a>
              )}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
