export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto p-4">
        {children}
    </div>
  );
}