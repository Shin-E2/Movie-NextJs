import Navigation from "../../../nextjs-learn/components/navigation";

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS Layout!
    </div>
  );
}
