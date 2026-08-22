import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(
  message = siteConfig.whatsapp.message,
) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodedMessage}`;
}