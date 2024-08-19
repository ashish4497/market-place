'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import NaviigationBar from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <NaviigationBar />
          <main>
            {children}
          </main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
