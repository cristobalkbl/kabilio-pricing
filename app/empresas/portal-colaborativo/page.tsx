import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { colaboracionEmpresas } from "@/content/colaboracionEmpresas";

export const metadata = buildMetadata({
  title: "Portal colaborativo con tu asesoría",
  description:
    "Comparte facturas, gastos y documentos y habla con tu asesor sin salir de Kabilio. Tú y tu asesoría veis lo mismo, al día, sin correos ni carpetas sueltas.",
  path: "/empresas/portal-colaborativo",
});

export default function PortalColaborativoPage() {
  return <FeatureLanding data={colaboracionEmpresas} />;
}
