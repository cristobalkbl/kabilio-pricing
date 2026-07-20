"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { RawSvg } from "@/components/producto/RawSvg";
import { ReferDrawer } from "@/components/empresas/ReferDrawer";
import { PairedTestimonials } from "@/components/empresas/PairedTestimonials";

/* ---------- SVGs del mockup ---------- */
const HERO_SVG = `<svg viewBox="0 0 960 470" xmlns="http://www.w3.org/2000/svg" aria-label="Factura emitida recibida por tu asesoría">
  <rect width="960" height="470" fill="#faf8f5"/><rect width="960" height="46" fill="#fff"/>
  <circle cx="26" cy="23" r="5" fill="#f2b9d2"/><circle cx="44" cy="23" r="5" fill="#f0cfa6"/><circle cx="62" cy="23" r="5" fill="#c9bff0"/>
  <text x="92" y="29" font-family="Manrope,sans-serif" font-size="14" font-weight="800" fill="#3a2f7a">Kabilio</text>
  <rect x="0" y="45" width="960" height="1" fill="#e4ded5"/>
  <rect x="70" y="86" width="440" height="316" rx="14" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
  <rect x="100" y="118" width="150" height="14" rx="7" fill="#111827"/><rect x="380" y="120" width="100" height="12" rx="6" fill="#ddd5fd"/>
  <rect x="100" y="158" width="330" height="8" rx="4" fill="#e4e9f0"/><rect x="100" y="178" width="330" height="8" rx="4" fill="#e4e9f0"/>
  <rect x="100" y="214" width="250" height="8" rx="4" fill="#e4e9f0"/><rect x="100" y="234" width="250" height="8" rx="4" fill="#e4e9f0"/>
  <rect x="360" y="298" width="120" height="34" rx="9" fill="#111827"/><text x="420" y="320" text-anchor="middle" font-family="Manrope,sans-serif" font-size="12" font-weight="700" fill="#fff">Emitir factura</text>
  <text x="100" y="372" font-family="Manrope,sans-serif" font-size="12" font-weight="700" fill="#6b7280">Total</text>
  <text x="430" y="372" text-anchor="end" font-family="Manrope,sans-serif" font-size="16" font-weight="800" fill="#111827">1.512,00 €</text>
  <rect x="560" y="150" width="320" height="70" rx="14" fill="#fff" stroke="#ddd5fd" stroke-width="2"/>
  <circle cx="598" cy="185" r="16" fill="#dff3e6"/><path d="M591 185 l5 5 9 -10" fill="none" stroke="#15914b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="628" y="180" font-family="Manrope,sans-serif" font-size="13" font-weight="800" fill="#111827">Recibida por tu asesoría</text>
  <text x="628" y="200" font-family="Manrope,sans-serif" font-size="12" font-weight="600" fill="#6b7280">en tiempo real</text>
  <rect x="560" y="238" width="320" height="56" rx="14" fill="#fff" stroke="#e4ded5" stroke-width="2"/>
  <circle cx="598" cy="266" r="16" fill="#e9e3fd"/><path d="M598 258 v16 M590 266 h16" stroke="#3a2f7a" stroke-width="2.4" stroke-linecap="round"/>
  <text x="628" y="263" font-family="Manrope,sans-serif" font-size="13" font-weight="700" fill="#111827">Enviada a la AEAT</text>
  <text x="628" y="281" font-family="Manrope,sans-serif" font-size="12" font-weight="600" fill="#6b7280">Verifactu ✓</text>
  <path d="M510 250 h50" stroke="#ddd5fd" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/>
</svg>`;

const FUNCS = [
  {
    wide: true,
    href: "/empresas/facturacion",
    fk: "Facturación Verifactu",
    h: "Emite facturas Verifactu en segundos",
    p: "Crea facturas con tu propio diseño, programa facturas recurrentes que se envían automáticamente y transforma presupuestos en factura con un clic.",
    svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="180" y="22" width="320" height="196" rx="12" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="206" y="46" width="120" height="12" rx="6" fill="#111827"/><rect x="410" y="48" width="64" height="10" rx="5" fill="#ddd5fd"/><rect x="206" y="80" width="268" height="7" rx="3.5" fill="#e4e9f0"/><rect x="206" y="98" width="268" height="7" rx="3.5" fill="#e4e9f0"/><rect x="206" y="128" width="200" height="7" rx="3.5" fill="#e4e9f0"/><rect x="206" y="146" width="200" height="7" rx="3.5" fill="#e4e9f0"/><rect x="206" y="180" width="92" height="16" rx="8" fill="#ddd5fd"/><circle cx="452" cy="188" r="18" fill="#f8d5e4"/><path d="M444 188 l6 6 10 -11" fill="none" stroke="#111827" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    href: "/empresas/gastos",
    fk: "Gastos",
    h: "Registra tus gastos sin teclear",
    p: "Sube tus facturas de gasto por email o fichero y Kabilio las procesa, sin límite de gastos.",
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="118" y="26" width="124" height="152" rx="6" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="138" y="46" width="84" height="9" rx="4" fill="#111827"/><rect x="138" y="70" width="60" height="5" rx="2.5" fill="#d7dde6"/><rect x="138" y="92" width="104" height="5" rx="2.5" fill="#e4e9f0"/><rect x="138" y="106" width="104" height="5" rx="2.5" fill="#e4e9f0"/><rect x="138" y="120" width="104" height="5" rx="2.5" fill="#e4e9f0"/><rect x="138" y="150" width="66" height="10" rx="3" fill="#111827"/><rect x="106" y="99" width="148" height="4" rx="2" fill="#3a2f7a"/><circle cx="256" cy="101" r="5" fill="#3a2f7a"/></svg>`,
  },
  {
    href: "/empresas/tesoreria",
    fk: "Bancos y tesorería",
    h: "Tu tesorería y tu IVA, siempre al día",
    p: "Conecta tus bancos, concilia los movimientos automáticamente y contrólalo todo en un panel.",
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="30" y="30" width="300" height="160" rx="14" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="30" y="30" width="300" height="34" rx="14" fill="#e9e3fd"/><rect x="48" y="43" width="82" height="8" rx="4" fill="#3a2f7a"/><path d="M52 150 L100 118 L140 132 L188 96 L236 110 L300 74" fill="none" stroke="#3a2f7a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="300" cy="74" r="5" fill="#3a2f7a"/><rect x="48" y="166" width="60" height="8" rx="4" fill="#d7dde6"/><rect x="230" y="166" width="70" height="8" rx="4" fill="#dff3e6"/></svg>`,
  },
  {
    wide: true,
    href: "/empresas/portal-colaborativo",
    fk: "Colaboración con tu asesoría",
    h: "Tu asesor lo tiene todo, sin que reenvíes nada",
    p: "Facturas, gastos y documentos en el mismo sitio; tu asesor los ve al instante.",
    svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="230" cy="116" r="30" fill="#e9e3fd" stroke="#ddd5fd" stroke-width="2"/><circle cx="230" cy="103" r="11" fill="#3a2f7a"/><path d="M212 135 a18 15 0 0 1 36 0" fill="#3a2f7a"/><circle cx="450" cy="116" r="30" fill="#f8d5e4" stroke="#f2b9d2" stroke-width="2"/><circle cx="450" cy="103" r="11" fill="#111827"/><path d="M432 135 a18 15 0 0 1 36 0" fill="#111827"/><path d="M264 116 h122" stroke="#ddd5fd" stroke-width="3" stroke-dasharray="2 6" stroke-linecap="round"/><rect x="308" y="98" width="64" height="34" rx="9" fill="#fff" stroke="#e4ded5" stroke-width="2"/><path d="M322 116 l6 6 14 -14" fill="none" stroke="#15914b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="230" y="170" text-anchor="middle" font-family="Manrope,sans-serif" font-size="12" font-weight="700" fill="#6b7280">Tú</text><text x="450" y="170" text-anchor="middle" font-family="Manrope,sans-serif" font-size="12" font-weight="700" fill="#6b7280">Tu asesoría</text></svg>`,
  },
];

const TABS = [
  { key: "dsh", label: "Dashboard", ic: `<path d="M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z"/>`, h: "Dashboard", p: "Un panel con tu actividad, ingresos, gastos y tesorería de un vistazo. Siempre al día.", svg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="50" y="30" width="240" height="140" rx="12" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="50" y="30" width="240" height="32" rx="12" fill="#e9e3fd"/><rect x="68" y="42" width="80" height="8" rx="4" fill="#3a2f7a"/><path d="M70 140 L110 112 L146 124 L188 92 L228 104 L280 74" fill="none" stroke="#3a2f7a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="280" cy="74" r="5" fill="#3a2f7a"/><rect x="68" y="150" width="60" height="8" rx="4" fill="#d7dde6"/><rect x="214" y="150" width="60" height="8" rx="4" fill="#dff3e6"/></svg>` },
  { key: "plt", label: "Plantillas", ic: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>`, h: "Plantillas de factura", p: "Diseña plantillas con tu logo y tus colores y reutilízalas en un clic. Tu factura, siempre con tu marca.", svg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="52" y="34" width="110" height="132" rx="10" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="70" y="52" width="50" height="8" rx="4" fill="#111827"/><rect x="70" y="74" width="74" height="6" rx="3" fill="#e4e9f0"/><rect x="70" y="88" width="74" height="6" rx="3" fill="#e4e9f0"/><rect x="70" y="140" width="40" height="12" rx="6" fill="#ddd5fd"/><rect x="182" y="34" width="110" height="132" rx="10" fill="#fff" stroke="#ddd5fd" stroke-width="2"/><rect x="200" y="52" width="50" height="8" rx="4" fill="#3a2f7a"/><rect x="200" y="74" width="74" height="6" rx="3" fill="#e9e3fd"/><rect x="200" y="88" width="74" height="6" rx="3" fill="#e9e3fd"/><circle cx="210" cy="146" r="7" fill="#f8d5e4"/><circle cx="230" cy="146" r="7" fill="#ddd5fd"/><circle cx="250" cy="146" r="7" fill="#fde9d6"/></svg>` },
  { key: "rec", label: "Recurrentes", ic: `<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>`, h: "Facturas recurrentes", p: "Programa las facturas que se repiten y déjalas en automático: se emiten y se envían solas cada periodo.", svg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="60" y="28" width="220" height="150" rx="12" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="60" y="28" width="220" height="32" rx="12" fill="#e9e3fd"/><rect x="80" y="40" width="90" height="8" rx="4" fill="#3a2f7a"/><rect x="80" y="78" width="180" height="26" rx="7" fill="#f5f3ef"/><rect x="94" y="87" width="90" height="7" rx="3.5" fill="#d7dde6"/><rect x="214" y="83" width="46" height="16" rx="8" fill="#ddd5fd"/><rect x="80" y="112" width="180" height="26" rx="7" fill="#f5f3ef"/><rect x="94" y="121" width="120" height="7" rx="3.5" fill="#d7dde6"/><rect x="214" y="117" width="46" height="16" rx="8" fill="#ddd5fd"/></svg>` },
  { key: "gas", label: "Gastos", ic: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>`, h: "Facturas recibidas (gastos)", p: "Sube tus facturas de gasto por email o archivo. Procesado ilimitado y sin duplicados.", svg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="108" y="24" width="124" height="140" rx="6" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="128" y="44" width="84" height="9" rx="4" fill="#111827"/><rect x="128" y="68" width="104" height="5" rx="2.5" fill="#e4e9f0"/><rect x="128" y="82" width="104" height="5" rx="2.5" fill="#e4e9f0"/><rect x="128" y="120" width="66" height="10" rx="3" fill="#111827"/><rect x="96" y="92" width="148" height="4" rx="2" fill="#3a2f7a"/><circle cx="246" cy="94" r="5" fill="#3a2f7a"/></svg>` },
  { key: "ban", label: "Bancos", ic: `<path d="M3 21h18M4 10h16M5 10l7-6 7 6M6 10v8M10 10v8M14 10v8M18 10v8"/>`, h: "Conexiones bancarias", p: "Conecta tus cuentas y trae los movimientos al día automáticamente, sin pedir extractos.", svg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="60" y="40" width="220" height="40" rx="10" fill="#fff" stroke="#e4ded5" stroke-width="2"/><circle cx="84" cy="60" r="10" fill="#e9e3fd"/><rect x="104" y="56" width="90" height="8" rx="4" fill="#d7dde6"/><rect x="220" y="55" width="46" height="10" rx="5" fill="#111827"/><rect x="60" y="92" width="220" height="40" rx="10" fill="#fff" stroke="#e4ded5" stroke-width="2"/><circle cx="84" cy="112" r="10" fill="#f8d5e4"/><rect x="104" y="108" width="70" height="8" rx="4" fill="#d7dde6"/><rect x="220" y="107" width="46" height="10" rx="5" fill="#111827"/></svg>` },
  { key: "con", label: "Conciliación", ic: `<path d="M20 6 9 17l-5-5"/>`, h: "Conciliación automática", p: "Kabilio cruza los movimientos del banco con tus facturas y concilia por ti, incluidos casos complejos.", svg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="40" y="48" width="110" height="36" rx="9" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="40" y="116" width="110" height="36" rx="9" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="56" y="62" width="64" height="7" rx="3.5" fill="#d7dde6"/><rect x="56" y="130" width="64" height="7" rx="3.5" fill="#d7dde6"/><path d="M150 66 C176 66 176 100 196 100" fill="none" stroke="#ddd5fd" stroke-width="2.5"/><path d="M150 134 C176 134 176 100 196 100" fill="none" stroke="#ddd5fd" stroke-width="2.5"/><circle cx="214" cy="100" r="18" fill="#dff3e6"/><path d="M206 100 l5 5 11 -12" fill="none" stroke="#15914b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { key: "iva", label: "IVA", ic: `<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>`, h: "IVA a pagar o cobrar", p: "Sabes en cada momento cuánto IVA te toca pagar o cobrar en el trimestre. Sin sustos en el cierre.", svg: `<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="70" y="40" width="200" height="120" rx="14" fill="#fff" stroke="#e4ded5" stroke-width="2"/><text x="100" y="90" font-family="Manrope,sans-serif" font-size="13" font-weight="700" fill="#6b7280">IVA estimado</text><text x="100" y="128" font-family="Manrope,sans-serif" font-size="30" font-weight="800" fill="#111827">1.240 €</text><rect x="196" y="66" width="56" height="22" rx="11" fill="#e9e3fd"/><text x="224" y="81" text-anchor="middle" font-family="Manrope,sans-serif" font-size="11" font-weight="800" fill="#3a2f7a">21%</text></svg>` },
];

const WHY = [
  { fk: "Flujo de trabajo", h: "Todo le llega a tu asesor", p: "Cada factura y gasto llega solo a tu asesoría en tiempo real. Sin documentos perdidos ni carreras a fin de mes.", svg: `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="40" y="70" width="90" height="40" rx="10" fill="#fff" stroke="#e4ded5" stroke-width="2"/><text x="85" y="95" text-anchor="middle" font-family="Manrope,sans-serif" font-size="12" font-weight="700" fill="#6b7280">Tu factura</text><path d="M132 90 h60" stroke="#3a2f7a" stroke-width="3" stroke-linecap="round"/><path d="M184 83 l9 7 -9 7" fill="none" stroke="#3a2f7a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="230" y="62" width="90" height="56" rx="10" fill="#e9e3fd" stroke="#ddd5fd" stroke-width="2"/><circle cx="252" cy="90" r="8" fill="#3a2f7a"/><path d="M240 108 a12 10 0 0 1 24 0" fill="#3a2f7a"/><text x="290" y="86" text-anchor="middle" font-family="Manrope,sans-serif" font-size="10" font-weight="800" fill="#3a2f7a">Tu</text><text x="290" y="100" text-anchor="middle" font-family="Manrope,sans-serif" font-size="10" font-weight="800" fill="#3a2f7a">asesor</text></svg>` },
  { fk: "Precio", h: "Desde 0 €, sin sorpresas", p: "Empiezas gratis, sin permanencia. 100% español e independiente, con soporte cercano y agente IA 24/7.", svg: `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><text x="180" y="102" text-anchor="middle" font-family="Manrope,sans-serif" font-size="52" font-weight="800" fill="#3a2f7a">0€</text><rect x="120" y="126" width="120" height="22" rx="11" fill="#fff" stroke="#e4ded5"/><text x="180" y="141" text-anchor="middle" font-family="Manrope,sans-serif" font-size="11" font-weight="700" fill="#6b7280">Sin permanencia</text></svg>` },
  { fk: "Informes", h: "Tus números, claros", p: "Informes de tu actividad, ingresos y gastos para decidir con datos al día.", svg: `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="92" y="30" width="176" height="120" rx="12" fill="#fff" stroke="#e4ded5" stroke-width="2"/><rect x="110" y="46" width="70" height="8" rx="4" fill="#3a2f7a"/><rect x="110" y="118" width="28" height="20" rx="2" fill="#ddd5fd"/><rect x="146" y="100" width="28" height="38" rx="2" fill="#c9bff0"/><rect x="182" y="82" width="28" height="56" rx="2" fill="#3a2f7a"/><rect x="218" y="106" width="28" height="32" rx="2" fill="#ddd5fd"/></svg>` },
];

const SUMMARY: [string, string][] = [
  ["Facturación Verifactu", "Facturas, recurrentes y plantillas personalizables."],
  ["Gastos", "Procesado ilimitado de facturas recibidas."],
  ["Bancos y tesorería", "Conciliación automática y dashboard de tu caja."],
  ["IVA estimado", "Sabes cuánto pagar o cobrar en cada trimestre."],
  ["Portal con tu asesoría", "Compartís la documentación en tiempo real."],
  ["Informes claros", "Tus ingresos, gastos y actividad para decidir a tiempo."],
];

const PAIRS = [
  {
    empresa: { quote: "Emito la factura y me olvido. No he vuelto a enviar nada a fin de mes.", name: "Javier Ruiz", sub: "Nova Muebles S.L.", avatar: "https://randomuser.me/api/portraits/men/54.jpg" },
    asesoria: { quote: "Recibimos toda la documentación a tiempo y dejamos de perseguir facturas a final de mes.", name: "Asesoría Nexo", sub: "Valencia", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
  },
  {
    empresa: { quote: "Veo mi tesorería al día y sé cuánto IVA me toca. Antes iba a ciegas hasta el trimestre.", name: "Marta Gil", sub: "Estudio Gil", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
    asesoria: { quote: "Sus datos llegan cuadrados a nuestro A3. Menos correcciones y cierres más rápidos.", name: "Asesoría Contalia", sub: "Sevilla", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
  },
  {
    empresa: { quote: "Configuré mis facturas recurrentes y se emiten solas. Ahorro horas cada mes.", name: "Carlos Méndez", sub: "Méndez Reformas", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
    asesoria: { quote: "Trabajamos sobre los mismos datos en tiempo real; se acabó el correo y el WhatsApp.", name: "Asesoría Duero", sub: "Valladolid", avatar: "https://randomuser.me/api/portraits/women/50.jpg" },
  },
];

const PLANS = [
  { name: "Colaborativo", free: true, desc: "Para empezar a facturar y compartir tus gastos con tu asesoría.", inc: "Lo que incluye:", feats: ["20 facturas al mes", "2 conexiones bancarias", "Procesado de gastos ilimitado", "Conciliación automática y dashboard", "IVA a pagar/cobrar estimado", "Comunicación con tu asesoría"] },
  { name: "Básico", mo: 14, popular: true, desc: "Para negocios en marcha que facturan cada semana.", inc: "Todo lo de Colaborativo, y además:", feats: ["80 facturas al mes", "5 conexiones bancarias", "2 plantillas de factura", "10 facturas recurrentes", "Presupuestos", "Sin pie “Generado por Kabilio”"] },
  { name: "Estándar", mo: 24, desc: "Para empresas con más volumen y tesorería que gestionar.", inc: "Todo lo de Básico, y además:", feats: ["250 facturas al mes", "5 plantillas de factura", "75 facturas recurrentes", "Remesas bancarias"] },
];

const FAQS = [
  { q: "¿Necesito que mi asesoría use Kabilio?", a: "Puedes empezar a facturar hoy con tu cuenta. Para que tu asesor reciba todo en tiempo real, tu asesoría debe estar conectada a Kabilio; si aún no lo está, puedes recomendársela en un minuto desde tu cuenta." },
  { q: "¿Qué pasa si mi asesoría todavía no usa Kabilio?", a: "Le enviamos una recomendación de tu parte y la acompañamos para que empiece. Mientras tanto, tú ya facturas y llevas tus gastos y tesorería al día." },
  { q: "¿Cuándo es obligatorio Verifactu?", a: "En enero de 2027 para empresas y en julio de 2027 para autónomos. Con Kabilio ya emites conforme a Verifactu hoy." },
  { q: "¿Qué incluye el plan gratuito?", a: "Hasta 20 facturas al mes con Verifactu, procesado de gastos, conciliación básica y la conexión con tu asesoría. Sin tarjeta y sin permanencia." },
  { q: "¿Mis datos están seguros?", a: "Sí. Cumplimos el RGPD y aplicamos medidas de seguridad alineadas con la ISO 27001. Tú decides qué información compartes con tu asesoría." },
];

/* ---------- Componentes locales ---------- */
function Kicker({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`mb-3 text-xs font-bold uppercase tracking-[0.06em] ${dark ? "text-brand-400" : "text-brand"}`}>{children}</p>;
}

function Ico({ paths, className }: { paths: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: paths }} />
  );
}

export function EmpresasHome() {
  const [tab, setTab] = useState("dsh");
  const [mode, setMode] = useState<"mensual" | "anual">("mensual");
  const [referOpen, setReferOpen] = useState(false);
  const panel = TABS.find((t) => t.key === tab)!;

  return (
    <>
      {/* HERO */}
      <header>
        <div className="container">
          <div className="mx-auto max-w-[800px] pb-1.5 pt-14 text-center">
            <span className="mb-[18px] inline-block rounded-full bg-brand-100 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wide text-brand">
              Facturación · Gastos · Tesorería · Con tu asesoría
            </span>
            <h1 className="text-[clamp(32px,5vw,50px)] font-extrabold leading-[1.05]">Controla las finanzas de tu empresa</h1>
            <p className="mx-auto mt-4 max-w-[620px] text-[17.5px] leading-relaxed text-ink-muted">
              Kabilio es la plataforma que centraliza la gestión de tu empresa y trabaja conectada con tu asesoría en
              tiempo real: factura, controla tus gastos y tu tesorería, y colabora con tu asesor en el mismo sitio.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/solicita-una-demo">Empieza gratis</Button>
              <Button href="#demo" variant="ghost">Ver demo de 2 min</Button>
            </div>
          </div>
        </div>
        <div className="container mt-8" id="demo">
          <div className="mx-auto max-w-[900px] overflow-hidden rounded-2xl border border-line shadow-card">
            <RawSvg html={HERO_SVG} />
          </div>
        </div>
      </header>

      {/* BENEFICIOS */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto mb-9 max-w-[720px] text-center">
            <Kicker>Beneficios</Kicker>
            <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">¿Qué gana tu empresa con Kabilio?</h2>
          </div>
          <div className="grid gap-[18px] md:grid-cols-3">
            {[
              { ic: `<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>`, h: "Conectado con tu asesoría", p: "Cada factura y gasto llega inmediatamente a tu asesor. Sin emails, sin carpetas, sin fin de mes." },
              { ic: `<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>`, h: "Visibilidad de tus finanzas", p: "Bancos conectados, conciliación automática y estimación del IVA a pagar o cobrar." },
              { ic: `<path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z"/><path d="M9 12l2 2 4-4"/>`, h: "Cumples con Verifactu", p: "Facturas que cumplen Verifactu y se envían automáticamente a Hacienda. Deja atrás Excel y Word." },
            ].map((b) => (
              <div key={b.h} className="rounded-2xl border border-line bg-surface p-7 transition duration-200 hover:-translate-y-1 hover:shadow-card">
                <span className="mb-4 inline-flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-brand-100 text-brand">
                  <Ico paths={b.ic} className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-lg font-bold">{b.h}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES (dark) */}
      <section className="my-6 bg-navy py-14 text-white">
        <div className="container">
          <div className="mx-auto mb-9 max-w-[720px] text-center">
            <Kicker dark>Funcionalidades</Kicker>
            <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight text-white">Todo lo que tu empresa necesita, en una plataforma</h2>
            <p className="mt-3 text-base text-white/70">Factura, controla tus gastos y tu tesorería, y compártelo todo con tu asesoría.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {FUNCS.map((f) => (
              <div key={f.h} className={`flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-[22px] transition duration-200 hover:border-white/25 hover:bg-white/[0.08] ${f.wide ? "md:col-span-2" : ""}`}>
                <div className="mb-5 overflow-hidden rounded-xl bg-surface2 ring-1 ring-black/[0.03]">
                  <RawSvg html={f.svg} />
                </div>
                <p className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.06em] text-brand-400">{f.fk}</p>
                <h3 className="mb-2 text-[19px] font-bold text-white">{f.h}</h3>
                <p className="text-sm leading-relaxed text-white/70">{f.p}</p>
                {f.href && (
                  <Link href={f.href} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-200 hover:text-white">
                    Ver más
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORADOR */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto mb-9 max-w-[720px] text-center">
            <Kicker>Una sola plataforma</Kicker>
            <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">La fuente de verdad de tu empresa y tu asesoría</h2>
            <p className="mt-3 text-base text-ink-muted">Todo lo que tu empresa factura y gasta, en un mismo sitio que tu asesoría también ve.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto rounded-2xl border border-lav bg-brand-100 p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex min-w-[106px] shrink-0 flex-col items-center gap-2 rounded-xl px-2 py-3 text-xs font-bold transition-colors ${
                  tab === t.key ? "bg-surface text-ink shadow-card" : "text-ink-muted"
                }`}
              >
                <span className={`grid h-[42px] w-[42px] place-items-center rounded-xl ${tab === t.key ? "bg-ink text-white" : "bg-surface text-brand"}`}>
                  <Ico paths={t.ic} className="h-5 w-5" />
                </span>
                {t.label}
              </button>
            ))}
          </div>
          <div className="mt-7 grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-2.5 text-[23px] font-bold">{panel.h}</h3>
              <p className="text-[15.5px] leading-relaxed text-ink-muted">{panel.p}</p>
            </div>
            <div className="flex items-center justify-center rounded-[18px] border border-line bg-surface2 p-[26px] [&_svg]:max-w-[340px]">
              <RawSvg html={panel.svg} />
            </div>
          </div>
        </div>
      </section>

      {/* VERIFACTU BAND */}
      <section className="py-12">
        <div className="container">
          <div className="rounded-[22px] bg-ink px-10 py-9 text-center text-white">
            <h2 className="mb-2.5 text-[clamp(22px,3vw,28px)] font-bold">Verifactu ya es cuestión de fecha</h2>
            <p className="text-[15px] leading-relaxed text-white/80">
              <b className="text-white">Enero 2027</b>: obligatorio para empresas · <b className="text-white">Julio 2027</b>: obligatorio para autónomos.
            </p>
            <p className="mt-1 text-[15px] text-white/80">
              Con Kabilio ya cumples hoy.{" "}
              <Link href="/solicita-una-demo" className="font-bold text-brand-200 hover:underline">Más sobre Verifactu →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIR */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto mb-9 max-w-[720px] text-center">
            <Kicker>Ventajas</Kicker>
            <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">Por qué elegir Kabilio</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.h} className="group flex flex-col rounded-3xl border border-line bg-surface p-[22px] transition duration-200 hover:-translate-y-1 hover:shadow-card">
                <div className="mb-5 overflow-hidden rounded-xl bg-surface2 ring-1 ring-black/[0.03]">
                  <RawSvg html={w.svg} />
                </div>
                <p className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.06em] text-brand">{w.fk}</p>
                <h3 className="mb-2 text-[19px] font-bold">{w.h}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{w.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUMEN */}
      <section className="py-12">
        <div className="container">
          <div className="grid items-start gap-10 rounded-3xl border border-line bg-surface2 p-8 sm:p-11 md:grid-cols-[.85fr_1.15fr]">
            <div>
              <h2 className="mb-3.5 text-[clamp(26px,3.4vw,34px)] font-bold leading-tight">Todo lo que necesita tu empresa</h2>
              <p className="text-base leading-relaxed text-ink-muted">Una sola plataforma para facturar, controlar tus gastos y tu tesorería, y compartirlo todo con tu asesoría.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {SUMMARY.map(([b, s]) => (
                <div key={b} className="flex gap-3 rounded-2xl border border-line bg-surface p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-extrabold text-brand">✓</span>
                  <div>
                    <b className="block text-[15px] leading-tight">{b}</b>
                    <span className="mt-1 block text-[13px] leading-snug text-ink-muted">{s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS EN PAREJA (carrusel) */}
      <section className="py-12">
        <div className="container">
          <PairedTestimonials title="Recomiendan Kabilio (los dos lados)" pairs={PAIRS} />
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto mb-9 max-w-[720px] text-center">
            <Kicker>Precios</Kicker>
            <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">Lo que tu empresa necesita, al precio que tiene sentido</h2>
            <p className="mt-3 text-base text-ink-muted">Empieza gratis y sube de plan cuando lo necesites. Sin permanencia.</p>
          </div>
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-0.5 rounded-full border border-line bg-surface2 p-[3px]">
              {(["mensual", "anual"] as const).map((m) => (
                <button key={m} onClick={() => setMode(m)} className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12.5px] font-semibold capitalize transition-colors ${mode === m ? "bg-surface text-ink shadow-card" : "text-ink-muted hover:text-ink"}`}>
                  {m}
                  {m === "anual" && <span className="rounded-full bg-pink px-1.5 py-0.5 text-[10px] font-bold text-ink">1 pago</span>}
                </button>
              ))}
            </div>
          </div>
          <div className="grid overflow-hidden rounded-[20px] border border-line bg-surface shadow-card md:grid-cols-3">
            {PLANS.map((p, i) => {
              let big = "0 €";
              let mo = "";
              let save: React.ReactNode = <span className="font-semibold text-green">Gratis para siempre</span>;
              if (!p.free && p.mo) {
                if (mode === "mensual") {
                  big = `${p.mo / 2} €`;
                  mo = "/mes";
                  save = <><s className="mr-1.5 text-[#9aa7b5] line-through">{p.mo} €</s><span className="font-semibold text-green">−50 % los 2 primeros meses</span></>;
                } else {
                  big = `${p.mo * 11} €`;
                  mo = "/año";
                  save = <><span className="font-semibold text-green">12 meses con −50 % los 2 primeros</span> · un solo pago</>;
                }
              }
              return (
                <div key={p.name} className={`flex flex-col p-8 ${i < PLANS.length - 1 ? "border-b md:border-b-0 md:border-r border-line" : ""}`}>
                  <div className="flex items-center gap-2.5 text-[19px] font-bold">
                    {p.name}
                    {p.popular && <span className="ml-auto rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">Popular</span>}
                  </div>
                  <p className="mb-4 mt-2 min-h-[46px] text-[13px] text-ink-muted">{p.desc}</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[34px] font-bold leading-none tracking-tight">{big}</span>
                    {mo && <span className="text-[13px] text-ink-muted">{mo}</span>}
                  </div>
                  <div className="mb-4 mt-1.5 min-h-[40px] text-[12.5px] leading-snug">{save}</div>
                  <Link href="/solicita-una-demo" className="block rounded-[10px] bg-ink py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand">Empieza gratis</Link>
                  <hr className="my-5 border-line" />
                  <div className="mb-3.5 text-[11px] font-bold uppercase tracking-wide text-ink-muted">{p.inc}</div>
                  <ul>
                    {p.feats.map((f) => (
                      <li key={f} className="relative py-1.5 pl-6 text-[13.5px]"><span className="absolute left-0 top-1.5 font-bold text-brand">✓</span>{f}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-[18px] text-center text-[13px] text-ink-muted">
            Sin tarjeta · <Link href="/empresas/precios" className="font-bold text-brand hover:underline">Ver todos los planes y características →</Link>
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-6 rounded-[18px] border border-lav bg-brand-100 p-8">
            <div className="min-w-[260px] flex-1">
              <h3 className="mb-2 text-xl font-bold">Solo trabajamos con pymes cuya asesoría ya usa Kabilio</h3>
              <p className="text-[14.5px] leading-relaxed text-[#4b4560]">
                ¿La tuya todavía no? Invítala en un minuto: la acompañamos para empezar y, cuando esté dentro, tú facturas y ella lo recibe todo en tiempo real.
              </p>
            </div>
            <button onClick={() => setReferOpen(true)} className="shrink-0 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand">
              Invita a tu asesoría
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto mb-9 max-w-[720px] text-center">
            <Kicker>FAQ</Kicker>
            <h2 className="text-[clamp(26px,3.6vw,34px)] font-bold leading-tight">Preguntas frecuentes</h2>
          </div>
          <div className="mx-auto max-w-[760px]">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[18px] text-base font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-xl font-bold text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-[18px] text-[14.5px] leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12">
        <div className="container">
          <div className="rounded-3xl bg-ink px-8 py-14 text-center text-white sm:px-12">
            <h2 className="mb-2.5 text-[clamp(25px,3.6vw,34px)] font-bold">Decide con tus números al día, no a fin de mes</h2>
            <p className="mx-auto mb-6 max-w-[540px] text-[15.5px] leading-relaxed text-white/80">
              Tu dashboard, tu tesorería y tu IVA estimado siempre actualizados: sabes cómo va tu empresa hoy, no cuando cierra el trimestre. Empieza gratis, sin tarjeta.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/solicita-una-demo" variant="light">Empieza gratis</Button>
              <button onClick={() => setReferOpen(true)} className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Recomendar a mi asesoría
              </button>
            </div>
          </div>
        </div>
      </section>

      <ReferDrawer open={referOpen} onClose={() => setReferOpen(false)} />
    </>
  );
}
