import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "🕉️ Invoking Divine Blessings...",
    "🪔 Lighting Sacred Flames...",
    "🙏 Preparing Sacred Space..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-sacred flex items-center justify-center z-50">
      <div className="text-center">
        {/* Divine Om Symbol with Spinning Animation */}
        <div className="relative mb-8">
          <div className="text-8xl om-spinner text-primary divine-glow">
            🕉️
          </div>
          {/* Rotating Circle Animation */}
          <div className="absolute inset-0 w-32 h-32 mx-auto border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>

        {/* Sacred Diya Animation */}
        <div className="flex justify-center mb-6">
          <div className="diya-flame animate-float"></div>
          <div className="diya-flame animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="diya-flame animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Loading Message */}
        <div className="h-8">
          <p className="text-xl font-playfair text-primary font-semibold animate-fade-in-up">
            {messages[currentMessage]}
          </p>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          Gokarna Pooja Booking Services
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;