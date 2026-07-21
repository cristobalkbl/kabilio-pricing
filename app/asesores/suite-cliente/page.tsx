import { FeatureLanding } from "@/components/empresas/FeatureLanding";
import { buildMetadata } from "@/lib/seo";
import { portalCliente } from "@/content/portalClienteAsesorias";

export const metadata = buildMetadata({
  title: "Suite del cliente para asesorías",
  description:
    "Tus clientes facturan, suben gastos y consultan su información desde su suite, y a tu despacho le llega todo contabilizado al instante. Sin reenvíos.",
  path: "/asesores/suite-cliente",
});

export default function SuiteClientePage() {
  return <FeatureLanding data={portalCliente} />;
}
