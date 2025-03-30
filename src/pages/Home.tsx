
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import ClassCard from "@/components/ClassCard";
import InstructorCard from "@/components/InstructorCard";
import TestimonialCard from "@/components/TestimonialCard";
import { classData } from "@/data/classes";
import { instructorData } from "@/data/instructors";
import { testimonialData } from "@/data/testimonials";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Life with
              <span className="text-zenfit-yellow"> Holistic Fitness</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Personalized classes for urban professionals seeking balance.
              Your journey to wellness begins here in Auckland CBD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-zenfit-pink hover:bg-zenfit-pink-light text-white"
              >
                <Link to="/booking">Book a Class</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/classes">Explore Classes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Our Popular Classes"
            subtitle="Discover our most loved fitness classes designed to meet your wellness goals"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classData.slice(0, 3).map((classItem) => (
              <ClassCard key={classItem.id} classItem={classItem} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/classes">View All Classes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zenfit-purple-dark">
                Your Wellness Journey Starts at ZenFit Studio
              </h2>
              <p className="text-lg mb-6 text-zenfit-purple-medium/80">
                Nestled in the heart of Auckland CBD, ZenFit Studio offers a sanctuary for urban professionals and fitness enthusiasts seeking expert guidance and holistic wellness solutions.
              </p>
              <p className="text-lg mb-8 text-zenfit-purple-medium/80">
                Our studio specializes in yoga, Pilates, and high-intensity interval training (HIIT), all tailored to meet your individual needs and fitness goals. With expert instructors and state-of-the-art facilities, we're committed to helping you achieve balance in your busy life.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center p-4 bg-zenfit-muted rounded-lg min-w-[120px]">
                  <span className="text-3xl font-bold text-zenfit-pink">15+</span>
                  <span className="text-sm text-zenfit-purple-medium/80">Expert Trainers</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zenfit-muted rounded-lg min-w-[120px]">
                  <span className="text-3xl font-bold text-zenfit-pink">30+</span>
                  <span className="text-sm text-zenfit-purple-medium/80">Weekly Classes</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zenfit-muted rounded-lg min-w-[120px]">
                  <span className="text-3xl font-bold text-zenfit-pink">5000+</span>
                  <span className="text-sm text-zenfit-purple-medium/80">Happy Members</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616699002805-0741e1e4a5d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="ZenFit Studio interior"
                className="rounded-lg shadow-xl animate-pulse-gentle"
              />
              <div className="absolute -bottom-6 -left-6 bg-zenfit-yellow rounded-lg p-4 shadow-lg max-w-xs">
                <p className="text-zenfit-purple-dark font-medium">
                  "Our mission is to empower you on your wellness journey, creating a space where mind and body can thrive together."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="section-padding bg-zenfit-purple-dark text-white">
        <div className="container">
          <SectionHeader
            title="Meet Our Expert Instructors"
            subtitle="Learn from Auckland's most passionate and knowledgeable fitness professionals"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructorData.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionHeader
            title="What Our Members Say"
            subtitle="Hear from the people who have transformed their lives with ZenFit Studio"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-zenfit-purple-dark">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-xl text-zenfit-purple-medium/80">
              Join our community today and discover how ZenFit Studio can help you achieve your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-zenfit-pink hover:bg-zenfit-pink-light text-white"
              >
                <Link to="/booking">Book Your First Class</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
