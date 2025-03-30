
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { pricingData } from "@/data/pricing";

const Pricing = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <SectionHeader
          title="Membership Options"
          subtitle="Choose the perfect plan to meet your fitness needs and budget"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingData.map((plan) => (
            <Card key={plan.id} className={`flex flex-col h-full overflow-hidden ${plan.popular ? 'border-zenfit-pink relative shadow-lg transform -translate-y-2' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-zenfit-pink text-white py-1 px-4 text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`pb-8 ${plan.popular ? 'bg-zenfit-pink/5' : ''}`}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-lg mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="mb-8">
                  <span className="text-4xl font-bold text-zenfit-purple-dark">${plan.price}</span>
                  <span className="text-zenfit-purple-medium/60 ml-2">{plan.duration}</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-zenfit-pink flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-6">
                <Button 
                  asChild 
                  className={`w-full ${plan.popular ? 'bg-zenfit-pink hover:bg-zenfit-pink-light text-white' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <Link to="/booking">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-8 text-zenfit-purple-dark text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-zenfit-purple-dark">What's included in my membership?</h3>
                <p className="text-zenfit-purple-medium/80">
                  Your membership includes access to our studio facilities during operating hours, participation in the classes covered by your plan, shower facilities, and lockers during your visit.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-zenfit-purple-dark">Is there a joining fee?</h3>
                <p className="text-zenfit-purple-medium/80">
                  There is no joining fee for any of our membership plans. You only pay for the membership you choose.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-zenfit-purple-dark">Can I freeze my membership?</h3>
                <p className="text-zenfit-purple-medium/80">
                  Yes, you can freeze your Unlimited membership for up to 30 days per year at no additional cost. Additional freezes may incur a small fee.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-zenfit-purple-dark">How do I cancel my membership?</h3>
                <p className="text-zenfit-purple-medium/80">
                  To cancel your membership, simply provide us with 30 days' notice in writing. There are no cancellation fees.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-zenfit-purple-dark">Do you offer student discounts?</h3>
                <p className="text-zenfit-purple-medium/80">
                  Yes, we offer a 10% discount on our Unlimited membership for students with a valid student ID.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-zenfit-purple-dark">What if I miss a class?</h3>
                <p className="text-zenfit-purple-medium/80">
                  If you're unable to attend a booked class, please cancel at least 12 hours in advance to avoid losing the class from your Flex Pass. For Unlimited members, a late cancellation fee may apply.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-zenfit-purple-dark">Still have questions?</h2>
          <p className="text-lg mb-8 text-zenfit-purple-medium/80 max-w-2xl mx-auto">
            Our team is happy to help you find the perfect membership option for your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-zenfit-pink hover:bg-zenfit-pink-light text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+6491234567">Call Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
