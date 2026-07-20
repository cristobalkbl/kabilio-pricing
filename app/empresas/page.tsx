import { EmpresasHome } from "@/components/empresas/EmpresasHome";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kabilio para empresas · Factura, y tu gestoría ya lo tiene",
  description:
    "Kabilio centraliza la gestión de tu empresa y trabaja conectada con tu asesoría en tiempo real: factura, controla tus gastos y tu tesorería, y colabora con tu asesor. Preparado para Verifactu.",
  path: "/empresas",
});

export default function EmpresasPage() {
  return <EmpresasHome />;
}
