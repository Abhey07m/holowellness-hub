
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingData: PricingPlan[] = [
  {
    id: "casual",
    name: "Casual Pass",
    price: 25,
    duration: "per class",
    description: "Perfect for those who want to try our classes or have an irregular schedule.",
    features: [
      "Access to any single class",
      "No commitment required",
      "Book up to 1 week in advance",
      "Access to changing facilities",
      "Online booking system"
    ]
  },
  {
    id: "flex",
    name: "Flex Pass",
    price: 199,
    duration: "10 classes",
    description: "Our most flexible option for regular attendees who prefer variety.",
    features: [
      "10 classes to use within 3 months",
      "Access to all class types",
      "Book up to 2 weeks in advance",
      "Free towel service",
      "1 guest pass"
    ],
    popular: true
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: 159,
    duration: "per month",
    description: "For dedicated members who want unlimited access to our studio.",
    features: [
      "Unlimited classes",
      "Book up to 3 weeks in advance",
      "Free towel service",
      "2 guest passes per month",
      "10% off wellness workshops",
      "Free fitness assessment"
    ]
  }
];
