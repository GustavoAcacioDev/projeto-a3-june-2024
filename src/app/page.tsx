import BannerSection from "@/components/pages/home/BannerSection";
import Footer from "@/components/pages/home/Footer";
import ProductSection from "@/components/pages/home/ProductsSection";
import ServicesSection from "@/components/pages/home/ServicesSection";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <ProductSection />
      <ServicesSection />
    </div>
  );
}
