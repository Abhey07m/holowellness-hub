
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { scheduleData } from "@/data/schedule";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Get the days of the week in order
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Schedule = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Group classes by day
  const classesByDay = daysOfWeek.map(day => {
    const dayClasses = scheduleData.filter(cls => cls.day === day);
    if (activeFilter) {
      return {
        day,
        classes: dayClasses.filter(cls => cls.type === activeFilter)
      };
    }
    return { day, classes: dayClasses };
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeader
          title="Class Schedule"
          subtitle="Find the perfect time for your workout from our weekly schedule"
        />
        
        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-12">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveFilter(null)}
            >
              All Classes
            </TabsTrigger>
            <TabsTrigger 
              value="yoga" 
              onClick={() => setActiveFilter("Yoga")}
            >
              Yoga
            </TabsTrigger>
            <TabsTrigger 
              value="pilates" 
              onClick={() => setActiveFilter("Pilates")}
            >
              Pilates
            </TabsTrigger>
            <TabsTrigger 
              value="hiit" 
              onClick={() => setActiveFilter("HIIT")}
            >
              HIIT
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {classesByDay.map(({ day, classes }) => (
          <div key={day} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-zenfit-purple-dark">{day}</h2>
            
            {classes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map(cls => (
                  <Card key={cls.id} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{cls.title}</h3>
                          <p className="text-muted-foreground text-sm">{cls.instructor}</p>
                        </div>
                        <Badge className={
                          cls.type === "Yoga" 
                            ? "bg-zenfit-purple-light text-white" 
                            : cls.type === "Pilates" 
                            ? "bg-zenfit-pink text-white" 
                            : "bg-zenfit-orange text-zenfit-purple-dark"
                        }>
                          {cls.type}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <span className="bg-zenfit-muted rounded-full px-3 py-1 text-sm">
                          {cls.time} • {cls.duration} mins
                        </span>
                        <Button asChild size="sm" className="bg-zenfit-pink hover:bg-zenfit-pink-light text-white">
                          <Link to={`/booking/${cls.classId}`}>Book</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="mb-6">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">No classes scheduled for this day with the current filter.</p>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
