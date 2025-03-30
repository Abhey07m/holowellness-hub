
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeader
          title="Contact Us"
          subtitle="Have questions or want to learn more? We're here to help you on your fitness journey"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-zenfit-purple-dark">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name <span className="text-zenfit-pink">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-zenfit-pink">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject <span className="text-zenfit-pink">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message <span className="text-zenfit-pink">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Enter your message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-zenfit-pink hover:bg-zenfit-pink-light text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-zenfit-purple-dark">Our Information</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <MapPin className="h-5 w-5 mr-3 text-zenfit-pink" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-zenfit-purple-medium/80">
                        123 Queen Street<br />
                        Auckland CBD<br />
                        New Zealand
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone className="h-5 w-5 mr-3 text-zenfit-pink" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-zenfit-purple-medium/80">
                        <a href="tel:+6491234567" className="hover:text-zenfit-pink transition-colors">
                          +64 9 123 4567
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="h-5 w-5 mr-3 text-zenfit-pink" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-zenfit-purple-medium/80">
                        <a href="mailto:info@zenfitstudio.co.nz" className="hover:text-zenfit-pink transition-colors">
                          info@zenfitstudio.co.nz
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Clock className="h-5 w-5 mr-3 text-zenfit-pink" />
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <div className="text-zenfit-purple-medium/80 space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>6:00 - 21:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>8:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>8:00 - 16:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Google Map (placeholder) */}
            <div className="aspect-square lg:aspect-auto lg:h-[300px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7398042071326!2d174.7631325!3d-36.8473285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sQueen%20St%2C%20Auckland%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1655151788138!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ZenFit Studio Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
