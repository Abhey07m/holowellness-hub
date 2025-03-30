
export interface ScheduledClass {
  id: string;
  classId: string;
  title: string;
  type: string;
  instructor: string;
  day: string;
  time: string;
  duration: number;
}

export const scheduleData: ScheduledClass[] = [
  // Monday
  {
    id: "mon-0600-yoga",
    classId: "yoga-flow",
    title: "Yoga Flow",
    type: "Yoga",
    instructor: "Emma Davis",
    day: "Monday",
    time: "06:00",
    duration: 60
  },
  {
    id: "mon-0730-pilates",
    classId: "pilates-core",
    title: "Core Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Monday",
    time: "07:30",
    duration: 45
  },
  {
    id: "mon-1200-hiit",
    classId: "hiit-blast",
    title: "HIIT Blast",
    type: "HIIT",
    instructor: "James Wilson",
    day: "Monday",
    time: "12:00",
    duration: 45
  },
  {
    id: "mon-1730-yoga",
    classId: "power-yoga",
    title: "Power Yoga",
    type: "Yoga",
    instructor: "Michael Patel",
    day: "Monday",
    time: "17:30",
    duration: 75
  },
  {
    id: "mon-1900-pilates",
    classId: "cardio-pilates",
    title: "Cardio Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Monday",
    time: "19:00",
    duration: 50
  },
  
  // Tuesday
  {
    id: "tue-0630-hiit",
    classId: "hiit-blast",
    title: "HIIT Blast",
    type: "HIIT",
    instructor: "James Wilson",
    day: "Tuesday",
    time: "06:30",
    duration: 45
  },
  {
    id: "tue-1200-yoga",
    classId: "yoga-flow",
    title: "Yoga Flow",
    type: "Yoga",
    instructor: "Emma Davis",
    day: "Tuesday",
    time: "12:00",
    duration: 60
  },
  {
    id: "tue-1730-pilates",
    classId: "pilates-core",
    title: "Core Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Tuesday",
    time: "17:30",
    duration: 45
  },
  {
    id: "tue-1900-yoga",
    classId: "yin-yoga",
    title: "Yin Yoga",
    type: "Yoga",
    instructor: "Michael Patel",
    day: "Tuesday",
    time: "19:00",
    duration: 60
  },
  
  // Wednesday
  {
    id: "wed-0600-yoga",
    classId: "power-yoga",
    title: "Power Yoga",
    type: "Yoga",
    instructor: "Emma Davis",
    day: "Wednesday",
    time: "06:00",
    duration: 75
  },
  {
    id: "wed-0730-pilates",
    classId: "cardio-pilates",
    title: "Cardio Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Wednesday",
    time: "07:30",
    duration: 50
  },
  {
    id: "wed-1200-hiit",
    classId: "hiit-blast",
    title: "HIIT Blast",
    type: "HIIT",
    instructor: "James Wilson",
    day: "Wednesday",
    time: "12:00",
    duration: 45
  },
  {
    id: "wed-1730-yoga",
    classId: "yoga-flow",
    title: "Yoga Flow",
    type: "Yoga",
    instructor: "Michael Patel",
    day: "Wednesday",
    time: "17:30",
    duration: 60
  },
  {
    id: "wed-1900-pilates",
    classId: "pilates-core",
    title: "Core Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Wednesday",
    time: "19:00",
    duration: 45
  },
  
  // Thursday
  {
    id: "thu-0630-hiit",
    classId: "hiit-blast",
    title: "HIIT Blast",
    type: "HIIT",
    instructor: "James Wilson",
    day: "Thursday",
    time: "06:30",
    duration: 45
  },
  {
    id: "thu-1200-yoga",
    classId: "yin-yoga",
    title: "Yin Yoga",
    type: "Yoga",
    instructor: "Emma Davis",
    day: "Thursday",
    time: "12:00",
    duration: 60
  },
  {
    id: "thu-1730-pilates",
    classId: "cardio-pilates",
    title: "Cardio Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Thursday",
    time: "17:30",
    duration: 50
  },
  {
    id: "thu-1900-yoga",
    classId: "power-yoga",
    title: "Power Yoga",
    type: "Yoga",
    instructor: "Michael Patel",
    day: "Thursday",
    time: "19:00",
    duration: 75
  },
  
  // Friday
  {
    id: "fri-0600-yoga",
    classId: "yoga-flow",
    title: "Yoga Flow",
    type: "Yoga",
    instructor: "Emma Davis",
    day: "Friday",
    time: "06:00",
    duration: 60
  },
  {
    id: "fri-0730-pilates",
    classId: "pilates-core",
    title: "Core Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Friday",
    time: "07:30",
    duration: 45
  },
  {
    id: "fri-1200-hiit",
    classId: "hiit-blast",
    title: "HIIT Blast",
    type: "HIIT",
    instructor: "James Wilson",
    day: "Friday",
    time: "12:00",
    duration: 45
  },
  {
    id: "fri-1730-yoga",
    classId: "yin-yoga",
    title: "Yin Yoga",
    type: "Yoga",
    instructor: "Michael Patel",
    day: "Friday",
    time: "17:30",
    duration: 60
  },
  {
    id: "fri-1900-pilates",
    classId: "cardio-pilates",
    title: "Cardio Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Friday",
    time: "19:00",
    duration: 50
  },
  
  // Saturday
  {
    id: "sat-0800-yoga",
    classId: "power-yoga",
    title: "Power Yoga",
    type: "Yoga",
    instructor: "Emma Davis",
    day: "Saturday",
    time: "08:00",
    duration: 75
  },
  {
    id: "sat-0930-pilates",
    classId: "pilates-core",
    title: "Core Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Saturday",
    time: "09:30",
    duration: 45
  },
  {
    id: "sat-1100-hiit",
    classId: "hiit-blast",
    title: "HIIT Blast",
    type: "HIIT",
    instructor: "James Wilson",
    day: "Saturday",
    time: "11:00",
    duration: 45
  },
  {
    id: "sat-1400-yoga",
    classId: "yin-yoga",
    title: "Yin Yoga",
    type: "Yoga",
    instructor: "Michael Patel",
    day: "Saturday",
    time: "14:00",
    duration: 60
  },
  {
    id: "sat-1600-pilates",
    classId: "cardio-pilates",
    title: "Cardio Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Saturday",
    time: "16:00",
    duration: 50
  },
  
  // Sunday
  {
    id: "sun-0900-yoga",
    classId: "yoga-flow",
    title: "Yoga Flow",
    type: "Yoga",
    instructor: "Emma Davis",
    day: "Sunday",
    time: "09:00",
    duration: 60
  },
  {
    id: "sun-1030-pilates",
    classId: "pilates-core",
    title: "Core Pilates",
    type: "Pilates",
    instructor: "Sarah Chen",
    day: "Sunday",
    time: "10:30",
    duration: 45
  },
  {
    id: "sun-1200-hiit",
    classId: "hiit-blast",
    title: "HIIT Blast",
    type: "HIIT",
    instructor: "James Wilson",
    day: "Sunday",
    time: "12:00",
    duration: 45
  },
  {
    id: "sun-1400-yoga",
    classId: "yin-yoga",
    title: "Yin Yoga",
    type: "Yoga",
    instructor: "Michael Patel",
    day: "Sunday",
    time: "14:00",
    duration: 60
  }
];
