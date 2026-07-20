import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { gestorDocumental } from "@/content/gestorDocumentalAsesorias";

export const metadata = buildMetadata({
  title: "Gestor documental para asesorías",
  description:
    "Digitaliza y organiza las facturas y documentos de tu cartera. Encuéntralo todo en segundos y tenlo listo para cualquier inspección. Adiós al papel.",
  path: "/asesores/gestor-documental",
});

export default function GestorDocumentalPage() {
  return <FeatureLanding data={gestorDocumental} />;
}
