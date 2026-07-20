import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { gastosEmpresas } from "@/content/gastosEmpresas";

export const metadata = buildMetadata({
  title: "Gastos para empresas",
  description:
    "Registra los gastos de tu empresa sin teclear. Sube tus facturas de gasto y la IA extrae los datos por ti, sin límite, sin duplicados y con tu asesoría al día.",
  path: "/empresas/gastos",
});

export default function GastosEmpresasPage() {
  return <FeatureLanding data={gastosEmpresas} />;
}
