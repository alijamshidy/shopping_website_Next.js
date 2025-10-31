// "use client";
// import "boxicons/css/boxicons.min.css";
// import { Prompt } from "next/font/google";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
import "./globals.css";

// const promptFont = Prompt({
//   subsets: ["latin"],
//   variable: "--font-prompt",
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/blog", label: "Blog" },
//     { href: "/login", label: "Login" },
//     { href: "/Register", label: "Register" },
//   ];
//   return (
//     <html
//       lang="en"
//       className="mdl-js">
//       <body
//         className={`${promptFont.className} antialiased min-h-screen flex flex-col`}>
//         <header className="text-white bg-blue-950 p-4">
//           <nav className="flex gap-x-6">
//             {links?.map(link => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-lg ${
//                   pathname === link.href ? "font-bold text-yellow-400" : ""
//                 }`}>
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </header>
//         <main className="p-6">{children}</main>
//         <footer className="bg-blue-950 text-white p-4 text-center absolute bottom-0 w-full">
//           <p>
//             &copy; {new Date().getFullYear()} My website. All Rights Reserved
//           </p>
//         </footer>
//       </body>
//     </html>
//   );
// }

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className="mdl-js">
      <body>{children}</body>
    </html>
  );
};

export default layout;
