import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { verifactuEmpresas } from "@/content/verifactuEmpresas";

export const metadata = buildMetadata({
  title: "Verifactu para empresas",
  description:
    "Cumple con Verifactu y la Ley Antifraude sin complicarte. Con Kabilio emites facturas verificables, inalterables y con envío automático a la AEAT.",
  path: "/empresas/verifactu",
});

export default function VerifactuEmpresasPage() {
  return <FeatureLanding data={verifactuEmpresas} />;
}
