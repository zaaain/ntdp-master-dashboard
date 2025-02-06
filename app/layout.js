// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

"use client"
import store from "@/shared/redux/store";
import "./globals.scss";
import { Provider } from "react-redux";

const RootLayout = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>
  )
}
export default RootLayout;
