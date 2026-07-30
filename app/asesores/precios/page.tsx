import { PricingAsesorias } from "@/components/pricing/PricingAsesorias";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Precios para asesorías",
  description:
    "Planes de Kabilio para asesorías por saldo de créditos, compartido entre todos los productos. Precio anual con pago único o 2 pagos. Sin licencias por usuario.",
  path: "/asesores/precios",
});

export default function PreciosAsesoresPage() {
  return <PricingAsesorias />;
}
