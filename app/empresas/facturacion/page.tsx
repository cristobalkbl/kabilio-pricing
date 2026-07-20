import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { facturacionEmpresas } from "@/content/facturacionEmpresas";

export const metadata = buildMetadata({
  title: "Facturación para empresas",
  description:
    "Crea facturas profesionales en dos clics, automatiza lo recurrente y cumple con Verifactu. Todo conectado con tu asesoría en tiempo real.",
  path: "/empresas/facturacion",
});

export default function FacturacionEmpresasPage() {
  return <FeatureLanding data={facturacionEmpresas} />;
}
