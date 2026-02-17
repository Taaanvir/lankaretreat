import { Calculator, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScoringSection = () => {
  return (
    <section className="py-24 bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm tracking-wide">স্কোরিং সিস্টেম</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              লিডারবোর্ডে যেভাবে সেরা তালিকায় আসবেন
            </h2>
            <p className="text-lg text-muted-foreground">
              আপনার রেফার করা খেলোয়াড়দের ডিপোজিটের উপর ভিত্তি করে পয়েন্ট অর্জন করুন
            </p>
          </div>

          {/* Scoring Formula */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Points Display */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold mb-4 mx-auto">
                  <span className="text-5xl font-serif font-bold text-foreground">১</span>
                </div>
                <p className="text-xl font-semibold text-foreground">পয়েন্ট</p>
              </div>
              
              {/* Equals */}
              <div className="text-4xl font-light text-muted-foreground">=</div>
              
              {/* Amount */}
              <div className="text-center">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-serif font-bold text-primary-foreground">৫০০ টাকা</span>
                </div>
                <p className="text-xl font-semibold text-foreground">ডিপোজিট</p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex items-center justify-center gap-3 text-center">
                <TrendingUp className="w-6 h-6 text-gold" />
                <p className="text-lg text-foreground">
                  পয়েন্ট <span className="font-semibold text-primary">সম্পূর্ণ প্রোমো সময়কাল জুড়ে জমা হয়</span>
                </p>
              </div>
            </div>
          </div>

          {/* Leaderboard CTA */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-light/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-gold" />
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
                  আপনার র‍্যাঙ্কিং চেক করুন
                </h3>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                লিডারবোর্ড প্রতিদিন বাংলাদেশ সময় ২ টায় আপডেট করা হয়
              </p>
              <Button variant="gold" size="lg" asChild>
                <a href="https://bhaggopartners.com/leaderboard" target="_blank" rel="noopener noreferrer">
                  লিডারবোর্ড দেখুন
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoringSection;
