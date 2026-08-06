import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { portalCliente } from "@/content/portalClienteAsesorias";

export const metadata = buildMetadata({
  title: "Portal colaborativo para asesorías",
  description:
    "Tus clientes facturan, suben gastos y consultan su información desde su portal, y a tu despacho le llega todo contabilizado al instante. Sin reenvíos.",
  path: "/asesores/portal-colaborativo",
});

export default function PortalColaborativoAsesoriasPage() {
  return <FeatureLanding data={portalCliente} />;
}
