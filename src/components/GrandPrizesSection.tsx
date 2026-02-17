import { Trophy, Plane, Hotel, UtensilsCrossed, Car, CreditCard } from "lucide-react";

const prizes = [
  {
    rank: "১ম",
    title: "ফুল প্যাকেজ",
    quantity: "১ জন বিজয়ী",
    features: [
      { icon: CreditCard, text: "সম্পূর্ণ ভিসা খরচ" },
      { icon: Plane, text: "ইকোনমি ক্লাস ফ্লাইট" },
      { icon: Hotel, text: "ফোর স্টার হোটেল" },
      { icon: UtensilsCrossed, text: "খাবার ও পানীয় সম্পূর্ণ খরচ" },
      { icon: Car, text: "এয়ারপোর্ট ট্রান্সফার" },
    ],
    gradient: "from-gold/80 to-gold/50",
    highlight: false,
  },
  {
    rank: "২য়",
    title: "হাফ প্যাকেজ",
    quantity: "২ জন বিজয়ী",
    features: [
      { icon: Plane, text: "ইকোনমি ক্লাস ফ্লাইট" },
      { icon: Hotel, text: "ফোর স্টার হোটেল" },
      { icon: UtensilsCrossed, text: "খাবার ও পানীয় হাফ খরচ" },
      { icon: Car, text: "এয়ারপোর্ট ট্রান্সফার" },
    ],
    gradient: "from-muted-foreground/60 to-muted-foreground/40",
    highlight: false,
  },
  {
    rank: "৩য়",
    title: "পার্সিয়াল প্যাকেজ",
    quantity: "৪ জন বিজয়ী",
    features: [
      { icon: Plane, text: "ইকোনমি ক্লাস ফ্লাইট" },
      { icon: Hotel, text: "ফোর স্টার হোটেল" },
      { icon: Car, text: "এয়ারপোর্ট ট্রান্সফার" },
    ],
    gradient: "from-sunset/80 to-sunset/50",
    highlight: false,
  },
];

const GrandPrizesSection = () => {
  return (
    <section className="py-24 bg-gradient-sunset relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide">গ্র্যান্ড পুরস্কার</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            ৩ রাত এবং ৪ দিন
          </h2>
          <p className="text-xl text-muted-foreground">
            শীর্ষ <span className="text-primary font-semibold">৭ জন</span> রেফারেল/অ্যাফিলিয়েটদের জন্য লাক্সারি শ্রীলঙ্কা সফর
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {prizes.map((prize, index) => (
            <div
              key={prize.rank}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                prize.highlight ? 'prize-glow' : ''
              }`}
            >
              {/* Rank Badge */}
              <div className={`bg-gradient-to-r ${prize.gradient} p-1`}>
                <div className={`${prize.highlight ? 'bg-card' : 'bg-card'} rounded-t-xl`}>
                  <div className={`bg-gradient-to-r ${prize.gradient} text-center py-4`}>
                    <span className="text-lg font-bold text-foreground drop-shadow-lg">
                      {prize.rank} স্থান
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="bg-card p-8 shadow-elevated">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {prize.title}
                </h3>
                <p className="text-gold font-semibold mb-6">{prize.quantity}</p>
                
                <div className="space-y-4">
                  {prize.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${prize.highlight ? 'bg-gold/20' : 'bg-muted'}`}>
                        <feature.icon className={`w-4 h-4 ${prize.highlight ? 'text-gold' : 'text-primary'}`} />
                      </div>
                      <span className="text-foreground/80">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Gradient */}
              <div className={`h-2 bg-gradient-to-r ${prize.gradient}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrandPrizesSection;
