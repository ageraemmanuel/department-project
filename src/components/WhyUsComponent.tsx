"use client";

import { GraduationCap, Users, ShieldCheck, BookOpen } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    desc: "Our teachers provide world-class learning tailored to each child’s needs.",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    desc: "Passionate educators dedicated to nurturing and guiding every student.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Caring Environment",
    desc: "We create a secure, welcoming space where children feel at home.",
  },
  {
    icon: BookOpen,
    title: "Holistic Development",
    desc: "Beyond academics, we focus on creativity, values, and life skills.",
  },
];

export default function WhyEnroll() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl border-b-4 border-amber-300 pb-4 font-bold text-gray-800 mb-15 mt-4">
          Why Enroll Your Child With Us
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <reason.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
