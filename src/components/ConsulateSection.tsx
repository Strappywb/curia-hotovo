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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="w-full bg-[#0057FF] py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-12 md:mb-16">
          KONZULÁT.
        </h2>
        
        <div className="bg-white p-8 md:p-12 lg:p-16">
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
                className="bg-black text-white hover:bg-black/90 font-heading text-lg px-8 py-6 h-auto rounded-none w-full md:w-auto"
              >
                AUDIENCE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsulateSection;
