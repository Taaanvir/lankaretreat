import { ExternalLink } from "lucide-react";
import { SocialIcon } from "react-social-icons";

const FooterSection = () => {
  return (
    <footer className="bg-emerald-dark py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Title */}
          <h3 className="font-serif text-3xl font-bold mb-2">
            <span className="text-primary-foreground">লঙ্কা</span>{" "}
            <span className="text-gradient-gold">রিট্রিট</span>
          </h3>
          <p className="text-primary-foreground/60 mb-8">
            ভাগ্য রেফারেল এবং অ্যাফিলিয়েট প্রোগ্রাম
          </p>
          
          {/* Social Links (logo-only square buttons) */}
          <div className="flex justify-center gap-4 mb-10">
            <SocialIcon url="https://www.facebook.com/Bhaggoofficial" style={{ height: 40, width: 40 }} bgColor="rgba(255, 255, 255, 0)" fgColor="currentColor" />
            <SocialIcon url="https://www.instagram.com/bhaggoofficial" style={{ height: 40, width: 40 }} bgColor="rgba(255, 255, 255, 0)" fgColor="currentColor" />
            <SocialIcon url="https://www.tiktok.com/@bhaggoofficial" style={{ height: 40, width: 40 }} bgColor="rgba(255, 255, 255, 0)" fgColor="currentColor" />
            <SocialIcon url="https://www.youtube.com/@BhaggoOfficial" style={{ height: 40, width: 40 }} bgColor="rgba(255, 255, 255, 0)" fgColor="currentColor" />
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <a 
              href="https://www.bhaggo.co/referral/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              রেফারেল প্রোগ্রাম <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://www.bhaggo.co/affiliate/news" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              অ্যাফিলিয়েট প্রোগ্রাম <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://bhaggopartners.com/leaderboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-gold transition-colors flex items-center gap-1"
            >
              লিডারবোর্ড <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-primary-foreground/20 mb-8" />
          
          {/* Copyright & Disclaimer */}
          <div className="space-y-4 text-xs text-primary-foreground/50">
            <p>
              প্রচার সময়কাল: ১ ফেব্রুয়ারি থেকে ৩০ এপ্রিল ২০২৬
            </p>
            <p>
              © ২০২৬ ভাগ্য। সর্বাধিকার সংরক্ষিত। এই প্রচার শর্তাবলী সাপেক্ষে।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
