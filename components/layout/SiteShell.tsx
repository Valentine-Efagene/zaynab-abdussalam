import { ContactBar } from "./ContactBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ContactBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
