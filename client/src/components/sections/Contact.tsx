import { motion } from "framer-motion";
import { SiGithub, SiMailboxdotorg, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

interface ContactProps {
  callToAction?: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  githubUrl?: string;
  email?: string;
}

export default function Contact({
  callToAction = "Connect with me on social media!",
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  githubUrl,
  email
}: ContactProps) {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-muted-foreground mb-12">
            {callToAction}
          </p>

          <div className="flex justify-center space-x-8">
            {facebookUrl && (
              <motion.a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <SiFacebook className="h-10 w-10 md:h-12 md:w-12" />
              </motion.a>
            )}
            {instagramUrl && (
              <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <SiInstagram className="h-10 w-10 md:h-12 md:w-12" />
              </motion.a>
            )}
            {linkedinUrl && (
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <SiLinkedin className="h-10 w-10 md:h-12 md:w-12" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <SiGithub className="h-10 w-10 md:h-12 md:w-12" />
              </motion.a>
            )}
            {email && (
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <SiMailboxdotorg className="h-10 w-10 md:h-12 md:w-12" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}