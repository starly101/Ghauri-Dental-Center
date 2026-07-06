import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

export const BUSINESS_INFO = {
  name: "Ghauri Dental Center",
  tagline: "Smile with Confidence",
  location: "DHA Lahore",
  rating: 4.9,
  reviewCount: 303,
  phone: "+92-42-XXXXXXX",
  whatsapp: "+92-300-XXXXXXX",
  email: "info@ghauridental.com",
  address: "DHA Phase VI, Lahore, Pakistan",
  workingHours: {
    weekdays: "9:00 AM - 9:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "Closed",
  },
};

export const SERVICES = [
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent solution for missing teeth with natural-looking results",
    price: "From PKR 80,000",
    icon: "tooth",
    features: ["Titanium implants", "Same-day options", "Lifetime warranty"],
  },
  {
    id: "braces",
    title: "Braces & Alignment",
    description: "Straighten your teeth with traditional or invisible braces",
    price: "From PKR 120,000",
    icon: "smile",
    features: ["Metal braces", "Ceramic braces", "Invisalign options"],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and whitening",
    price: "From PKR 25,000",
    icon: "sparkles",
    features: ["Porcelain veneers", "Teeth whitening", "Smile makeover"],
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Save damaged teeth with painless root canal therapy",
    price: "From PKR 15,000",
    icon: "shield",
    features: ["Painless procedure", "Single visit options", "Advanced technology"],
  },
  {
    id: "crowns",
    title: "Crowns & Bridges",
    description: "Restore damaged teeth with custom-made crowns and bridges",
    price: "From PKR 35,000",
    icon: "crown",
    features: ["Zirconia crowns", "Porcelain fused", "Natural appearance"],
  },
  {
    id: "scaling",
    title: "Scaling & Polishing",
    description: "Professional cleaning for healthier teeth and gums",
    price: "From PKR 5,000",
    icon: "clean",
    features: ["Ultrasonic scaling", "Air polishing", "Fluoride treatment"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    patient: "Fatima K.",
    age: 45,
    treatment: "Dental Implants",
    rating: 5,
    text: "Dr. Haroon gave me back my confidence. The implant procedure was painless and the results are amazing. I can finally smile without hiding!",
    date: "2 months ago",
  },
  {
    id: 2,
    patient: "Ahmed R.",
    age: 32,
    treatment: "Braces",
    rating: 5,
    text: "Best orthodontist in Lahore! My teeth were severely crooked. After 18 months of treatment, I have a perfect smile. Highly recommend!",
    date: "3 weeks ago",
  },
  {
    id: 3,
    patient: "Sarah M.",
    age: 28,
    treatment: "Smile Makeover",
    rating: 5,
    text: "The complete smile makeover transformed my life. Veneers look so natural, people think I was born with this smile. Worth every rupee!",
    date: "1 month ago",
  },
];
