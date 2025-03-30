
import SectionHeader from "@/components/SectionHeader";
import InstructorCard from "@/components/InstructorCard";
import { instructorData } from "@/data/instructors";

const Instructors = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeader
          title="Our Expert Instructors"
          subtitle="Meet our team of certified professionals dedicated to guiding you on your wellness journey"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructorData.map(instructor => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
