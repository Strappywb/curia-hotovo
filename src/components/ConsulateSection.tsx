import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ConsulateSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mqeeaawz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-background py-4 md:py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-[#0047CC] rounded-3xl md:rounded-[2.5rem] py-20 md:py-32 lg:py-40 px-6 md:px-12 ring-4 ring-white">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-12 md:mb-16">
          KONZULÁT.
        </h2>
        
        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info - Left */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-black mb-2">
                  MAGISTRATUS
                </h3>
                <p className="text-gray-600 mb-1">vedení společnosti</p>
                <a 
                  href="tel:+420606237743" 
                  className="text-black font-medium hover:underline block"
                >
                  +420 606 237 743
                </a>
                <a 
                  href="mailto:michal@curia.cz" 
                  className="text-black font-medium hover:underline block mt-1"
                >
                  michal@curia.cz
                </a>
              </div>
              
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-black mb-2">
                  COMMERCIUM
                </h3>
                <p className="text-gray-600 mb-1">obchodní oddělení</p>
                <a 
                  href="tel:+420777561050" 
                  className="text-black font-medium hover:underline block"
                >
                  +420 777 561 050
                </a>
                <a 
                  href="mailto:adam@curia.cz" 
                  className="text-black font-medium hover:underline block mt-1"
                >
                  adam@curia.cz
                </a>
              </div>
            </div>
            
            {/* Contact Form - Right */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Jméno"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-100 border-0 rounded-none h-12 text-black placeholder:text-gray-500"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-100 border-0 rounded-none h-12 text-black placeholder:text-gray-500"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Vaše zpráva"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-gray-100 border-0 rounded-none min-h-[150px] text-black placeholder:text-gray-500 resize-none"
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white hover:bg-black/90 font-heading text-lg px-8 py-6 h-auto rounded-none w-full md:w-auto disabled:opacity-50"
              >
                {isSubmitting ? "ODESÍLÁM..." : "AUDIENCE"}
              </Button>
              {isSubmitted && (
                <p className="text-green-600 font-body font-semibold mt-4">Děkujeme! Vaše zpráva byla odeslána.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsulateSection;
