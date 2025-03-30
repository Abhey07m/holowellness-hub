
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { instructorData } from "@/data/instructors";
import { classData } from "@/data/classes";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram } from "lucide-react";
import ClassCard, { ClassType } from "@/components/ClassCard";
import { useEffect } from "react";

const InstructorDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const instructor = instructorData.find(i => i.id === id);
  
  // Find classes that match this instructor's specialties
  const instructorClasses: ClassType[] = instructor 
    ? classData.filter(c => instructor.specialties.includes(c.type)).slice(0, 3)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!instructor) {
    return (
      <div className="container pt-28 pb-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Instructor not found</h2>
        <p className="mb-8">The instructor you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/instructors">Back to Instructors</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Instructor Header */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={instructor.imageUrl} 
                alt={instructor.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zenfit-purple-dark text-center md:text-left">
                {instructor.name}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {instructor.specialties.map((specialty, index) => (
                  <Badge key={index} className="bg-zenfit-purple-light text-white">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4 mb-8 justify-center md:justify-start">
                {instructor.socialMedia.instagram && (
                  <a 
                    href={instructor.socialMedia.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zenfit-purple-light/10 hover:bg-zenfit-purple-light/20 p-2 rounded-full transition-colors"
                  >
                    <Instagram size={20} className="text-zenfit-purple-light" />
                  </a>
                )}
                {instructor.socialMedia.facebook && (
                  <a 
                    href={instructor.socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zenfit-purple-light/10 hover:bg-zenfit-purple-light/20 p-2 rounded-full transition-colors"
                  >
                    <Facebook size={20} className="text-zenfit-purple-light" />
                  </a>
                )}
              </div>
              
              <p className="text-lg text-zenfit-purple-medium/80">
                {instructor.bio}
              </p>
            </div>
          </div>
        </div>
        
        {/* Instructor Classes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-zenfit-purple-dark">Classes by {instructor.name}</h2>
          
          {instructorClasses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {instructorClasses.map(classItem => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-muted-foreground">
              No specific classes found for this instructor.
            </p>
          )}
        </div>
        
        {/* CTA */}
        <div className="bg-zenfit-muted rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-zenfit-purple-dark">
            Ready to train with {instructor.name}?
          </h3>
          <p className="text-lg mb-6 text-zenfit-purple-medium/80 max-w-2xl mx-auto">
            Book a class now and experience the expertise and guidance that {instructor.name} brings to every session.
          </p>
          <Button asChild className="bg-zenfit-pink hover:bg-zenfit-pink-light text-white">
            <Link to="/booking">Book a Class</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
