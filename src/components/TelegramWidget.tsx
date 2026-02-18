import { SocialIcon } from "react-social-icons";

const TELEGRAM_URL = "https://t.me/BhaggoPartnersSupport_bot?start=w46997251";

const TelegramWidget = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-foreground/20 border border-border/60 shadow-card transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5 flex items-center justify-center">
      <SocialIcon
        network="telegram"
        url={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Bhaggo Telegram"
        style={{ height: 40, width: 40 }}
        bgColor="hsl(var(--foreground) / 0.2)"
        fgColor="#229ED9"
      />
    </div>
  );
};

export default TelegramWidget;