import DeliverySection from "../../Components/DeliverySection";
import CardSection from "../../Components/QualifyCards";
import Service from "../../Components/Service";
import Testimonials from "../../Components/Testimonials";
export default function ServicePage() {
  return (
    <>
      <Service />
      <CardSection />
      <DeliverySection />
      <Testimonials />
    </>
  );
}
