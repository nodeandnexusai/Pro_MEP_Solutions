import Image from "next/image";
import ChatWidget from "@/components/ui/ChatWidget";

export default function FloatingProfiles() {
  return (
    <div className="social-float" aria-label="Professional profiles">
      <a href="https://www.linkedin.com/in/haris-hamid-b-3625121a3/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <Image src="/images/linkedin-logo.png" alt="" width={768} height={768} />
      </a>
      <a href="https://www.fiverr.com/harishamid786?source=gig_cards&referrer_gig_slug=mechanical-electrical-plumbing-mep-design-for-building-project&ref_ctx_id=4acfa26d8d214f24b362af477d028b6b&imp_id=522d4fda-00d5-4d8c-addd-a09bd9c8e80d" target="_blank" rel="noreferrer" aria-label="Fiverr profile">
        <Image src="/images/fiverr-logo.png" alt="" width={768} height={768} />
      </a>
      <a href="https://www.upwork.com/freelancers/harishamidbutt?mp_source=share" target="_blank" rel="noreferrer" aria-label="Upwork profile">
        <Image src="/images/upwork-logo.png" alt="" width={666} height={666} />
      </a>
      <a className="whatsapp-float" href="https://wa.me/14029010788" aria-label="WhatsApp">
        <Image src="/images/whatsapp-icon.png" alt="" width={169} height={170} />
      </a>
      <ChatWidget />
    </div>
  );
}
