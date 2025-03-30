
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { scheduleData } from "@/data/schedule";
import { classData } from "@/data/classes";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { classId } = useParams<{ classId?: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedClass, setSelectedClass] = useState<string | null>(classId || null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get unique days from schedule
  const days = Array.from(new Set(scheduleData.map(cls => cls.day)));
  
  // Get all available times for the selected day and class type
  const availableTimes = selectedDay 
    ? scheduleData.filter(cls => {
        if (selectedClass) {
          return cls.day === selectedDay && cls.classId === selectedClass;
        }
        return cls.day === selectedDay;
      })
    : [];
  
  useEffect(() => {
    if (classId) {
      // If a class is pre-selected, set the day to the first available day for that class
      const firstAvailable = scheduleData.find(cls => cls.classId === classId);
      if (firstAvailable) {
        setSelectedDay(firstAvailable.day);
        setSelectedTime(firstAvailable.id);
      }
    }
  }, [classId]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTime) {
      toast({
        title: "Selection Required",
        description: "Please select a class time to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Confirmed!",
        description: "Your class has been successfully booked. Check your email for details.",
      });
      
      // Reset form and redirect
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      setSelectedClass(null);
      setSelectedDay(null);
      setSelectedTime(null);
      
      navigate("/");
    }, 1500);
  };
  
  const handleClassChange = (value: string) => {
    setSelectedClass(value);
    setSelectedDay(null);
    setSelectedTime(null);
  };
  
  const handleDayChange = (value: string) => {
    setSelectedDay(value);
    setSelectedTime(null);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <SectionHeader
          title="Book a Class"
          subtitle="Reserve your spot in one of our classes and begin your wellness journey"
        />
        
        <Card>
          <CardContent className="p-6 md:p-8">
            <Tabs defaultValue="class" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="class">Select Class</TabsTrigger>
                <TabsTrigger value="info">Your Information</TabsTrigger>
              </TabsList>
              
              <TabsContent value="class">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="class-select">Select a Class Type</Label>
                    <Select 
                      value={selectedClass || ""} 
                      onValueChange={handleClassChange}
                    >
                      <SelectTrigger id="class-select">
                        <SelectValue placeholder="Choose a class" />
                      </SelectTrigger>
                      <SelectContent>
                        {classData.map(cls => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.title} ({cls.type})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {selectedClass && (
                    <div className="space-y-3">
                      <Label htmlFor="day-select">Select a Day</Label>
                      <Select 
                        value={selectedDay || ""} 
                        onValueChange={handleDayChange}
                      >
                        <SelectTrigger id="day-select">
                          <SelectValue placeholder="Choose a day" />
                        </SelectTrigger>
                        <SelectContent>
                          {days.map(day => (
                            <SelectItem key={day} value={day}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  {selectedDay && (
                    <div className="space-y-3">
                      <Label>Available Times</Label>
                      
                      {availableTimes.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {availableTimes.map(time => (
                            <div 
                              key={time.id}
                              className={`border rounded-md p-4 cursor-pointer transition-colors ${
                                selectedTime === time.id 
                                  ? 'border-zenfit-pink bg-zenfit-pink/5' 
                                  : 'hover:border-muted-foreground'
                              }`}
                              onClick={() => setSelectedTime(time.id)}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{time.time}</span>
                                <Badge 
                                  className={
                                    time.type === "Yoga" 
                                      ? "bg-zenfit-purple-light text-white" 
                                      : time.type === "Pilates" 
                                      ? "bg-zenfit-pink text-white" 
                                      : "bg-zenfit-orange text-zenfit-purple-dark"
                                  }
                                >
                                  {time.type}
                                </Badge>
                              </div>
                              <div className="flex justify-between items-center mt-2 text-sm">
                                <span>{time.title}</span>
                                <span className="text-muted-foreground">{time.duration} mins</span>
                              </div>
                              <div className="mt-1 text-sm text-muted-foreground">
                                Instructor: {time.instructor}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">
                          No available times for the selected class and day.
                        </p>
                      )}
                    </div>
                  )}
                  
                  {selectedTime && (
                    <div className="pt-4">
                      <Button 
                        onClick={() => document.querySelector('[data-value="info"]')?.dispatchEvent(new MouseEvent('click'))}
                        className="w-full bg-zenfit-pink hover:bg-zenfit-pink-light text-white"
                      >
                        Continue to Information
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="info">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  {selectedTime && (
                    <div className="bg-muted p-4 rounded-md">
                      <h3 className="font-semibold mb-2">Booking Summary</h3>
                      
                      {(() => {
                        const booking = scheduleData.find(cls => cls.id === selectedTime);
                        if (!booking) return null;
                        
                        return (
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Class:</span>
                              <span>{booking.title}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Day:</span>
                              <span>{booking.day}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Time:</span>
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Duration:</span>
                              <span>{booking.duration} minutes</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Instructor:</span>
                              <span>{booking.instructor}</span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-zenfit-pink hover:bg-zenfit-pink-light text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Complete Booking"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
