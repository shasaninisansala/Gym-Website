import { Dumbbell, Users, Clock3, Trophy, Soup, Award } from "lucide-react";

export const navLinks = [
  "Home",
  "About",
  "Services",
  "Trainers",
  "Membership",
  "Contact",
];

export const stats = [
  { icon: Users, value: "1500+", label: "Members" },
  { icon: Award, value: "20+", label: "Trainers" },
  { icon: Trophy, value: "10+", label: "Years" },
  { icon: Clock3, value: "24/7", label: "Open" },
];

export const services = [
  {
    icon: Dumbbell,
    title: "Weight Training",
    desc: "Master the art of strength with our complete range of free weights and professional machines designed for performance.",
  },
  {
    icon: Users,
    title: "Personal Training",
    desc: "Get one-to-one attention with customized workout plans and nutritional guidance from our expert trainers.",
  },
  {
    icon: Trophy,
    title: "Cardio Classes",
    desc: "Boost your heart health and burn fat with high intensity cardio sessions led by energetic instructors.",
  },
  {
    icon: Soup,
    title: "Nutrition Coaching",
    desc: "Fuel your body correctly with expert meal planning and dietary advice tailored to your fitness goals.",
  },
];

export const trainers = [
  {
    name: "Alex Rivers",
    role: "Bodybuilding Pro",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/046/836/977/small/african-male-fitness-trainer-in-gym-fitness-and-wellness-african-american-coach-healthy-lifestyle-photo.jpg",
    social: {
      instagram: "https://instagram.com/alex",
      facebook: "https://facebook.com/alex",
      twitter: "https://twitter.com/alex",
    },
  },
  {
    name: "Sarah Jenkins",
    role: "CrossFit Specialist",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    social: {
      instagram: "https://instagram.com/alex",
      facebook: "https://facebook.com/alex",
      twitter: "https://twitter.com/alex",
    },
  },
  {
    name: "Marcus Thorne",
    role: "Strength Coach",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/046/836/942/small/young-bangladeshi-male-fitness-trainer-in-modern-gym-environment-suitable-for-health-and-wellness-promotions-exercise-tutorials-and-gym-advertisements-photo.jpg",
    social: {
      instagram: "https://instagram.com/alex",
      facebook: "https://facebook.com/alex",
      twitter: "https://twitter.com/alex",
    },
  },
];

export const plans = [
  {
    title: "Basic",
    price: "$20",
    features: ["5 Days a week access", "Standard gym equipment", "Personal training"],
    popular: false,
  },
  {
    title: "Standard",
    price: "$40",
    features: ["24/7 Access", "All classes included", "Sauna & lockers access"],
    popular: true,
  },
  {
    title: "Premium",
    price: "$70",
    features: ["Unlimited access", "Private locker & laundry", "1:1 PT sessions / month"],
    popular: false,
  },
];

export const testimonials = [
  {
    initials: "JD",
    name: "John Doe",
    role: "Member since 2021",
    text: "Joining Evolve was the best decision in my life. The atmosphere is electric and the trainers really care about your progress.",
  },
  {
    initials: "AS",
    name: "Anna Smith",
    role: "Member since 2022",
    text: "The nutrition coaching combined with weight lifting completely changed my metabolism. I feel stronger than ever.",
  },
  {
    initials: "ML",
    name: "Mike Lewis",
    role: "Member since 2023",
    text: "The state-of-the-art equipment is top class, and the community vibe keeps me here. Best gym in the city.",
  },
];