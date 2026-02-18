import { UserPlus, Link2, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserPlus,
    title: "রেজিস্ট্রেশন করুন",
    description: "অফিসিয়াল প্রোগ্রাম লিঙ্কের মাধ্যমে ভাগ্য রেফারেল বা অ্যাফিলিয়েট হিসেবে সাইন আপ করুন",
    number: "১",
  },
  {
    icon: Link2,
    title: "আপনার লিঙ্ক শেয়ার করুন",
    description: "আপনার রেফারেল বা অ্যাফিলিয়েট লিঙ্ক পাবার পর তা খেলোয়াড়দের সাথে শেয়ার করুন",
    number: "২",
  },
  {
    icon: Users,
    title: "খেলোয়াড় নিয়ে আসুন",
    description: "অংশ নেবার ক্ষেত্রে নুন্যতম ১০ জন খেলোয়াড়, গ্র্যান্ড পুরস্কার যোগ্যতার জন্য ৫০+ জন",
    number: "৩",
  },
  {
    icon: CheckCircle,
    title: "খেলোয়াড়দের ডিপোজিট বাড়ান",
    description: "খেলোয়াড়দের অবশ্যই সর্বনিম্ন ৫০০ টাকা ডিপোজিট করতে হবে এবং ডিপোজিটের অন্তন্ত ১ গুন খেলতে হবে",
    number: "৪",
  },
];

const HowToParticipateSection = () => {
  const scrollToHeroCtas = () => {
    const ctaElement = document.getElementById("hero-cta-buttons");
    ctaElement?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide">কীভাবে অংশগ্রহণ করবেন</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            ৪টি সহজ ধাপে যোগ দিন
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            এই সহজ ধাপগুলির সাথে শ্রীলঙ্কার লাক্সারি ট্রিপে আপনার যাত্রা শুরু করুন
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold to-transparent" />
              )}
              
              <div
                className={`bg-secondary rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-elevated hover:-translate-y-2 ${
                  step.number === "১" ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" : ""
                }`}
                onClick={step.number === "১" ? scrollToHeroCtas : undefined}
                onKeyDown={
                  step.number === "১"
                    ? (event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          scrollToHeroCtas();
                        }
                      }
                    : undefined
                }
                role={step.number === "১" ? "button" : undefined}
                tabIndex={step.number === "১" ? 0 : undefined}
                aria-label={step.number === "১" ? "রেজিস্ট্রেশন CTA তে যান" : undefined}
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-9 h-9 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                  <span className="text-foreground font-bold text-xs">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-16 h-16 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" asChild>
            <a href="https://www.bhaggo.co/referral/" target="_blank" rel="noopener noreferrer">
              রেফারেল প্রোগ্রামে যোগ দিন
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.bhaggo.co/affiliate/news" target="_blank" rel="noopener noreferrer">
              অ্যাফিলিয়েট প্রোগ্রামে যোগ দিন
            </a>
          </Button>
        </div>

        {/* Important Notes */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              গুরুত্বপূর্ণ প্রয়োজনীয়তা
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• অ্যাফিলিয়েট বা রেফারেলের জন্য নিয়মিত জমার ইতিহাস সহ একটি অ্যাকটিভ ভাগ্য অ্যাকাউন্ট থাকা প্রয়োজন।</li>
              <li>• লঙ্কা রিট্রিটে অংশ নেবার ক্ষেত্রে নুন্যতম ১০ জন যোগ্য খেলোয়াড় থাকতে হবে</li>
              <li>• গ্র্যান্ড পুরস্কারের ক্ষেত্রে কমপক্ষে ৫০ জন যোগ্য খেলোয়াড় থাকতে হবে</li>
              <li>• আপনার নিয়ে আসা খেলোয়াড়দের যোগ্য হিসেবে বিবেচনার জন্য সর্বনিম্ন ৫০০ টাকা ডিপোজিট করতে এবং ডিপোজিটের অন্তন্ত ১ গুন গেম খেলতে হবে</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipateSection;
