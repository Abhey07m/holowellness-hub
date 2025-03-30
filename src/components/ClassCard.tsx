
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ClassType {
  id: string;
  title: string;
  type: string;
  level: string;
  duration: number;
  description: string;
  imageUrl: string;
}

interface ClassCardProps {
  classItem: ClassType;
  showButton?: boolean;
}

const ClassCard = ({ classItem, showButton = true }: ClassCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img
          src={classItem.imageUrl}
          alt={classItem.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-zenfit-orange text-zenfit-purple-dark">
          {classItem.type}
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-zenfit-purple-dark">
            {classItem.title}
          </h3>
          <Badge variant="outline" className="text-xs">
            {classItem.level}
          </Badge>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {classItem.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm bg-zenfit-muted rounded-full px-3 py-1">
            {classItem.duration} mins
          </span>
          {showButton && (
            <div className="flex space-x-2">
              <Button asChild variant="outline" size="sm">
                <Link to={`/classes/${classItem.id}`}>Details</Link>
              </Button>
              <Button asChild size="sm" className="bg-zenfit-pink hover:bg-zenfit-pink-light">
                <Link to={`/booking/${classItem.id}`}>Book</Link>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassCard;
