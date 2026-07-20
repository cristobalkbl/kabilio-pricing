import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { tesoreriaEmpresas } from "@/content/tesoreriaEmpresas";

export const metadata = buildMetadata({
  title: "Tesorería para empresas",
  description:
    "Conecta tus bancos, concilia tus movimientos con IA y controla tu caja y tu IVA en tiempo real. Con tu asesoría siempre al día.",
  path: "/empresas/tesoreria",
});

export default function TesoreriaEmpresasPage() {
  return <FeatureLanding data={tesoreriaEmpresas} />;
}
