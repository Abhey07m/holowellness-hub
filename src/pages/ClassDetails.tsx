
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { classData } from "@/data/classes";
import { instructorData } from "@/data/instructors";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar } from "lucide-react";
import { useEffect } from "react";

const ClassDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const classItem = classData.find(c => c.id === id);
  
  // Find an instructor for this class type (randomly assigned for demo)
  const instructor = classItem 
    ? instructorData.find(i => i.specialties.includes(classItem.type))
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!classItem) {
    return (
      <div className="container pt-28 pb-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Class not found</h2>
        <p className="mb-8">The class you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/classes">Back to Classes</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden mb-8">
              <img 
                src={classItem.imageUrl} 
                alt={classItem.title} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zenfit-purple-dark">{classItem.title}</h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-zenfit-orange text-zenfit-purple-dark">{classItem.type}</Badge>
                <Badge variant="outline">{classItem.level}</Badge>
                <Badge variant="secondary">{classItem.duration} minutes</Badge>
              </div>
              
              <div className="prose max-w-none text-lg">
                <p className="mb-4">{classItem.description}</p>
                <p className="mb-4">
                  This class is suitable for {classItem.level === 'All Levels' ? 'practitioners of all fitness levels' : classItem.level === 'Beginner' ? 'those new to fitness or returning after a break' : 'those with previous experience'}, providing a {classItem.level === 'Advanced' ? 'challenging' : 'balanced'} approach to wellness.
                </p>
                <p>
                  Our expert instructors will guide you through each movement, ensuring proper form and alignment while offering modifications to suit your individual needs.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What to Bring</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Comfortable workout clothes</li>
                  <li>Water bottle</li>
                  <li>Small towel</li>
                  {classItem.type === 'Yoga' && <li>Yoga mat (available to rent if needed)</li>}
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <ul className="list-disc pl-6">
                  {classItem.type === 'Yoga' && (
                    <>
                      <li>Improved flexibility and balance</li>
                      <li>Reduced stress and anxiety</li>
                      <li>Enhanced mind-body connection</li>
                      <li>Increased strength and endurance</li>
                    </>
                  )}
                  {classItem.type === 'Pilates' && (
                    <>
                      <li>Stronger core muscles</li>
                      <li>Improved posture and alignment</li>
                      <li>Enhanced body awareness</li>
                      <li>Greater flexibility and joint mobility</li>
                    </>
                  )}
                  {classItem.type === 'HIIT' && (
                    <>
                      <li>Increased metabolic rate</li>
                      <li>Improved cardiovascular health</li>
                      <li>Enhanced fat burning</li>
                      <li>Greater strength and endurance</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-zenfit-purple-dark">Book This Class</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-zenfit-pink" />
                    <span>{classItem.duration} minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-zenfit-pink" />
                    <span>{classItem.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-zenfit-pink" />
                    <span>Multiple times available</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  className="w-full mb-4 bg-zenfit-pink hover:bg-zenfit-pink-light text-white"
                >
                  <Link to={`/booking/${classItem.id}`}>Book Now</Link>
                </Button>
                
                <Link 
                  to="/schedule" 
                  className="block text-center text-sm text-muted-foreground hover:text-zenfit-pink underline"
                >
                  View Full Schedule
                </Link>
              </CardContent>
            </Card>
            
            {instructor && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-zenfit-purple-dark">Instructor</h3>
                  
                  <div className="flex items-center mb-4">
                    <img 
                      src={instructor.imageUrl} 
                      alt={instructor.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <Link to={`/instructors/${instructor.id}`} className="font-semibold hover:text-zenfit-pink">
                        {instructor.name}
                      </Link>
                      <div className="text-sm text-muted-foreground">
                        {instructor.specialties.join(', ')}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {instructor.bio}
                  </p>
                  
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/instructors/${instructor.id}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
