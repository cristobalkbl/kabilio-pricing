// Set de iconos SVG inline (sin dependencias). Añade nuevos aquí y
// referéncialos por su clave desde el contenido.

export type IconName =
  | "bank"
  | "invoice"
  | "ai"
  | "clock"
  | "shield"
  | "chart"
  | "users"
  | "check"
  | "sync"
  | "sparkles"
  | "folder"
  | "bell";

type Props = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, React.ReactNode> = {
  bank: (
    <>
      <path d="M3 21h18" />
      <path d="M4 10h16" />
      <path d="M5 21V10m4 11V10m6 11V10m4 11V10" />
      <path d="M12 3 3 8h18l-9-5Z" />
    </>
  ),
  invoice: (
    <>
      <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
      <path d="M14 2v6h6M8 13h8M8 17h5" />
    </>
  ),
  ai: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M9 10v4m6-4v4M12 3v3M8 21h8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15v3m5-8v8m5-12v12" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6m5 9a5 5 0 0 0-4-5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  sync: (
    <>
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5M3 21v-5h5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v6m0 6v6m9-9h-6m-6 0H3" />
      <path d="m6 6 2 2m8 8 2 2m0-12-2 2M8 16l-2 2" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),
};

export function Icon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
