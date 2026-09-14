// export function SiteFooter() {
//   return (
//     <footer className="border-t border-border">
//       <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
//         <div className="flex items-center gap-2.5">
//           <span className="grid size-6 place-items-center rounded-md bg-accent/15 font-mono text-xs font-semibold text-accent">
//             JG
//           </span>
//           <span className="font-mono text-sm">JSONGlow</span>
//         </div>
//         <p className="font-mono text-[12px] text-muted">
//           Built for engineers. Runs in your browser. © 2026 jsonglow.
//         </p>
//       </div>
//     </footer>
//   );
// }

import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-6 place-items-center rounded-md bg-accent/15 font-mono text-xs font-semibold text-accent">
            JG
          </span>
          <span className="font-mono text-sm">JSONGlow</span>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          <Link
            to="/privacy-policy"
            className="font-mono text-[12px] text-muted transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            to="/cookie-policy"
            className="font-mono text-[12px] text-muted transition-colors hover:text-foreground"
          >
            Cookie Policy
          </Link>
          <p className="font-mono text-[12px] text-muted">
            Built for engineers. Runs in your browser. © 2026 jsonglow.
          </p>
        </nav>
      </div>
    </footer>
  );
}