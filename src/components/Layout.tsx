import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 px-6">
        {children}
      </main>
    </>
  );
};

export default Layout;
