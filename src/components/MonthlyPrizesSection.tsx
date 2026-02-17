import { Gift } from "lucide-react";
import giftCardImage from "@/assets/gift-card.png";

const MonthlyPrizesSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-20 right-20 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-24 h-24 border-2 border-primary-foreground rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <Gift className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold text-sm tracking-wide">মাসিক পুরস্কার</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            প্রতি মাসে জিতুন!
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            প্রতি মাসে সেরা ৫ জন পারফর্মিং রেফারেল/অ্যাফিলিয়েট হয়ে এক্সক্লুসিভ গিফট কার্ড জিতুন
          </p>
          
          {/* Prize Card */}
          <div className="inline-block">
            <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-elevated">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Gift Card Visual */}
                <img src={giftCardImage} alt="Gift Card" className="w-64 h-auto" />
                
                {/* Prize Details */}
                <div className="text-center md:text-left">
                  <p className="text-4xl md:text-5xl leading-tight font-serif font-bold text-gradient-gold mb-2">
                    ৩,০০০ টাকা
                  </p>
                  <p className="text-muted-foreground text-lg">
                    প্রতি মাসে সেরা <span className="text-primary font-semibold">৫ জন</span> বিজয়ীর জন্য
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Note */}
          <p className="text-primary-foreground/60 text-sm mt-8">
             মাসিক পুরস্কার বিজয়ীদের পরবর্তী মাসের ১৫ তারিখের মধ্যে ঘোষণা করা হবে একটি সেলস KYC কলের মাধ্যমে অবহিত করা হবে। 
          </p>
        </div>
      </div>
    </section>
  );
};

export default MonthlyPrizesSection;
