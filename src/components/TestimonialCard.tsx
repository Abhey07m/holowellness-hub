
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialType {
  id: string;
  name: string;
  image?: string;
  role: string;
  testimonial: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full border-2 border-zenfit-purple-light/10 hover:border-zenfit-pink/20 transition-colors">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-3 border border-zenfit-purple-light/20">
            {testimonial.image ? (
              <AvatarImage src={testimonial.image} alt={testimonial.name} />
            ) : (
              <AvatarFallback className="bg-zenfit-purple-light/10 text-zenfit-purple-dark">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        
        <blockquote className="text-base italic text-zenfit-purple-dark/80 flex-grow">
          "{testimonial.testimonial}"
        </blockquote>
        
        <div className="mt-4 flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-5 h-5 text-zenfit-yellow"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
