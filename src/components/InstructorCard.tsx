
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export interface InstructorType {
  id: string;
  name: string;
  specialties: string[];
  bio: string;
  imageUrl: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
  };
}

interface InstructorCardProps {
  instructor: InstructorType;
}

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  return (
    <Card className="overflow-hidden group card-hover">
      <div className="relative h-80 overflow-hidden">
        <img
          src={instructor.imageUrl}
          alt={instructor.name}
          className="w-full h-full object-cover"
        />
        <div className="headshot-overlay">
          <div className="flex space-x-3">
            {instructor.socialMedia.instagram && (
              <a
                href={instructor.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <Instagram size={18} className="text-white" />
              </a>
            )}
            {instructor.socialMedia.facebook && (
              <a
                href={instructor.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <Facebook size={18} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <Link to={`/instructors/${instructor.id}`} className="block hover:text-zenfit-pink transition-colors">
          <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
        </Link>
        <div className="flex flex-wrap gap-1 mb-3">
          {instructor.specialties.slice(0, 3).map((specialty, index) => (
            <Badge key={index} variant="secondary" className="bg-zenfit-purple-light/10 text-zenfit-purple-light">
              {specialty}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground line-clamp-3">
          {instructor.bio}
        </p>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;
