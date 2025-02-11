import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

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
            Want to discuss tech, share project ideas, or just say hi? I'm always excited to connect with fellow developers and tech enthusiasts!
          </p>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 dark:shadow-primary/5 dark:hover:shadow-primary/10">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input placeholder="Your name" required className="transition-all duration-300 hover:border-primary focus:border-primary" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input type="email" placeholder="Your email" required className="transition-all duration-300 hover:border-primary focus:border-primary" />
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea
                    placeholder="Share your thoughts, ideas, or just say hello!"
                    className="min-h-[150px] transition-all duration-300 hover:border-primary focus:border-primary"
                    required
                  />
                </motion.div>
                <Button 
                  type="submit" 
                  className="w-full hover:scale-[1.02] transition-transform shadow-md hover:shadow-lg" 
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}