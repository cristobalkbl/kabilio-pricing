import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { portalCliente } from "@/content/portalClienteAsesorias";

export const metadata = buildMetadata({
  title: "Portal del cliente para asesorías",
  description:
    "Tus clientes facturan, suben gastos y consultan su información desde su portal, y a tu despacho le llega todo contabilizado al instante. Sin reenvíos.",
  path: "/asesores/portal-cliente",
});

export default function PortalClientePage() {
  return <FeatureLanding data={portalCliente} />;
}
