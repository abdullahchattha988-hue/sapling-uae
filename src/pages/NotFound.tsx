import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div className="font-display text-[120px] md:text-[180px] font-bold text-[#F4F2ED] leading-none mb-4">
            404
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 -mt-8">
            Page Not Found
          </h1>
          <p className="font-body text-warmgray mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-gold">
              <Home size={16} /> Return Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#E8E5DF] text-navy font-body font-medium text-sm rounded hover:border-[#C8973A] transition-colors"
            >
              <ArrowLeft size={16} /> Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
