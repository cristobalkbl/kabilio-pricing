import { ProductoLanding } from "@/components/producto/ProductSections";
import { buildMetadata } from "@/lib/seo";
import { conciliador } from "@/content/productoConciliador";

export const metadata = buildMetadata({
  title: "Conciliación bancaria con IA para asesorías",
  description:
    "El Conciliador de Kabilio empareja cada movimiento bancario con su factura y su asiento usando IA y reglas avanzadas. Cobertura del 99% de los bancos.",
  path: "/asesores/conciliacion-bancaria",
});

export default function ConciliadorPage() {
  return <ProductoLanding data={conciliador} />;
}
