import { ProductoLanding } from "@/components/producto/ProductSections";
import { buildMetadata } from "@/lib/seo";
import { procesador } from "@/content/productoProcesador";

export const metadata = buildMetadata({
  title: "Procesador de facturas con IA para asesorías",
  description:
    "La IA de Kabilio procesa las facturas de tus clientes y te propone el asiento completo con un 95% de fiabilidad. Más que un OCR: entiende cada factura.",
  path: "/asesores/procesador-de-facturas",
});

export default function ProcesadorPage() {
  return <ProductoLanding data={procesador} />;
}
