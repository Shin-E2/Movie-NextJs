import Navigation from "@/components/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  //metadata: 서버 컴포넌트, 페이지, 레이아웃에만 있을 수 있다.
  // 페이지에서 덮어쓰기 가능(병합 가능)
  title: {
    template: "%s | Next movies", //이렇게 작성하면 페이지마다 같은 코드를 작성하지 않아도 된다.
    default: "Next movies", //메타데이터에서 없으면 이걸 보여준다.
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
