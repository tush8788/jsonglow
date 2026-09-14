import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden ">
      {/* <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent/12 blur-[120px]" />
        <div className="absolute top-1/3 right-[-180px] h-[460px] w-[460px] rounded-full bg-key/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] left-1/4 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]" />
      </div> */}
      <SiteHeader />
      <main className="mx-auto mt-12 max-w-[1600px] px-4 sm:px-6">{children}</main>
      <SiteFooter />
    </div>
  );
}
