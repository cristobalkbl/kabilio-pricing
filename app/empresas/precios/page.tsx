import { PricingEmpresas } from "@/components/pricing/PricingEmpresas";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Precios para empresas",
  description:
    "Planes de Kabilio para empresas cuya asesoría trabaja con Kabilio: factura, controla tus gastos y tu tesorería y compártelo todo con tu asesor. Sin permanencia.",
  path: "/empresas/precios",
});

export default function PreciosEmpresasPage() {
  return <PricingEmpresas />;
}
