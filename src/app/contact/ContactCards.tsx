import ContactCard from "./ContactCard"; // Import your ContactCard component

const ContactCards: React.FC = () => {
  return (
    <div className="flex flex-wrap py-12 justify-center">
      <div className="xl:w-1/2 p-4">
        <ContactCard
          imageSrc="/contact-service.png"
          title="Contact Services"
          description="Reach out for service inquiries, consultations, or custom solutions."
          email="services@zynorax.com"
          buttonText="Get in Touch"
          buttonUrl="/contact"
        />
      </div>

      <div className="xl:w-1/2 p-4">
        <ContactCard
          imageSrc="/contact-general.png"
          title="General Inquiries"
          description="For any general questions or inquiries, feel free to reach out to us."
          email="info@zynorax.com"
          buttonText="Contact Us"
          buttonUrl="/contact"
        />
      </div>
    </div>
  );
};

export default ContactCards;
