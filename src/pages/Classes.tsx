
import SectionHeader from "@/components/SectionHeader";
import ClassCard from "@/components/ClassCard";
import { classData } from "@/data/classes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Classes = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const classTypes = ["Yoga", "Pilates", "HIIT"];
  
  const filteredClasses = activeFilter === "all" 
    ? classData 
    : classData.filter(cls => cls.type === activeFilter);

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeader 
          title="Our Classes" 
          subtitle="Discover our range of specialized classes designed to meet your fitness goals"
        />
        
        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>All</TabsTrigger>
            {classTypes.map(type => (
              <TabsTrigger 
                key={type} 
                value={type} 
                onClick={() => setActiveFilter(type)}
              >
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.length > 0 ? (
            filteredClasses.map(classItem => (
              <ClassCard key={classItem.id} classItem={classItem} />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-muted-foreground">
              No classes found with the selected filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classes;
