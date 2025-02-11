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

          <Card className="border dark:border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input placeholder="Your name" required className="dark:border-border" />
                </div>
                <div>
                  <Input type="email" placeholder="Your email" required className="dark:border-border" />
                </div>
                <div>
                  <Textarea
                    placeholder="Share your thoughts, ideas, or just say hello!"
                    className="min-h-[150px] dark:border-border"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90" 
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