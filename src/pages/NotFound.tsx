import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-sacred">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">🕉️</div>
        <h1 className="mb-4 text-6xl font-playfair font-bold text-primary">{t('notFound.title')}</h1>
        <h2 className="mb-4 text-2xl font-playfair font-semibold text-foreground">
          {t('notFound.subtitle')}
        </h2>
        <p className="mb-8 text-muted-foreground">
          {t('notFound.description')}
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center btn-divine"
        >
          {t('notFound.returnHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
