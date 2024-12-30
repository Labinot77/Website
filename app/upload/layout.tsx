import Sidebar from "@/components/Sidebar";

export default function UploadLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col w-full h-full">
    <main className="mx-auto max-w-2xl w-full justify-center h-full flex p-3">
    {children}
  </main>
      <Sidebar />
    </div>
  );
}
