import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Stránka nenalezena | CURIA</title>
        <meta name="description" content="Stránka, kterou hledáte, neexistuje. Vraťte se na hlavní stránku CURIA." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Stránka nenalezena</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Zpět na hlavní stránku
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
