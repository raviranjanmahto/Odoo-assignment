import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 max-w-5xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
