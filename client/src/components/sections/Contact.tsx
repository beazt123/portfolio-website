import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface ContactProps {
  callToAction?: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
}

export default function Contact({
  callToAction = "Connect with me on social media!",
  facebookUrl,
  twitterUrl,
  instagramUrl,
  linkedinUrl
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
            <motion.a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-primary"
            >
              <Facebook className="h-10 w-10 md:h-12 md:w-12" />
            </motion.a>
            <motion.a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-primary"
            >
              <Twitter className="h-10 w-10 md:h-12 md:w-12" />
            </motion.a>
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-primary"
            >
              <Instagram className="h-10 w-10 md:h-12 md:w-12" />
            </motion.a>
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="text-primary"
            >
              <Linkedin className="h-10 w-10 md:h-12 md:w-12" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}