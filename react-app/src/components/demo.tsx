"use client";

import { Scissors, Calendar, Wrench, Leaf, Sprout, Bug, Droplets } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const servicesData = [
  {
    id: 1,
    title: "Corte de Pasto",
    date: "Disponible",
    content: "Servicio profesional de corte de césped con equipos de última generación. Dejamos tu jardín con un acabado perfecto y uniforme.",
    category: "Mantenimiento",
    icon: Scissors,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Planes Mensuales",
    date: "Flexible",
    content: "Mantén tu jardín siempre perfecto con nuestros planes de mantenimiento mensual. Incluye cortes regulares y cuidado continuo.",
    category: "Planes",
    icon: Calendar,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Bordeadora",
    date: "Detalle",
    content: "Damos el toque final perfecto con bordeadora eléctrica. Bordes limpios y definidos para un acabado profesional.",
    category: "Acabados",
    icon: Wrench,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Eliminación Manual",
    date: "Ecológico",
    content: "Remoción manual de malezas sin uso de químicos. Método ecológico y seguro para tu jardín y mascotas.",
    category: "Control",
    icon: Leaf,
    relatedIds: [2, 5],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 5,
    title: "Control Herbicida",
    date: "Profesional",
    content: "Control efectivo de malezas mediante aplicación profesional de herbicidas. Incluye el producto y aplicación especializada.",
    category: "Control",
    icon: Sprout,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 6,
    title: "Control de Plagas",
    date: "Seguro",
    content: "Control básico de plagas exteriores del jardín. Tratamiento profesional para mantener tu espacio libre de plagas.",
    category: "Protección",
    icon: Bug,
    relatedIds: [5, 7],
    status: "completed" as const,
    energy: 65,
  },
  {
    id: 7,
    title: "Servicio de Riego",
    date: "Hidratación",
    content: "Servicio coordinado de riego para mantener tu jardín hidratado. Puede incluirse en planes mensuales de mantenimiento.",
    category: "Cuidado",
    icon: Droplets,
    relatedIds: [1, 6],
    status: "pending" as const,
    energy: 50,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={servicesData} />
    </>
  );
}

export default {
  RadialOrbitalTimelineDemo,
};
