import Header from "./Header";
import Footer from "./Footer";
import CarHeader from "../Car-Header";






export default function NewLayout({
  children 
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}

