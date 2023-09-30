import Header from "@/components/navbar";

export default async function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
