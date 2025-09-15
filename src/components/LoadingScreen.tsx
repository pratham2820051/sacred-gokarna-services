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
        {/* Divine Om Symbol with Blinking */}
        <div className="mb-8">
          <div className="text-8xl text-primary divine-glow animate-pulse">
            🕉️
          </div>
        </div>

        {/* Sacred Diya */}
        <div className="flex justify-center mb-6">
          <div className="diya-flame"></div>
          <div className="diya-flame" style={{ marginLeft: "0.5rem" }}></div>
          <div className="diya-flame" style={{ marginLeft: "0.5rem" }}></div>
        </div>

        {/* Loading Message */}
        <div className="h-8">
          <p className="text-xl font-playfair text-primary font-semibold">
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
