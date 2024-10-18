import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>HR Solutions | Innovative Human Resource Management Services</title>
            <meta name="description"
                  content="Discover comprehensive HR solutions tailored for your business needs. From talent acquisition to employee management, we provide innovative strategies to enhance workforce productivity and drive success."/>
            <meta name="keywords"
                  content="HR solutions, human resource management, talent acquisition, employee engagement, workforce productivity, HR consulting, payroll services, employee training"/>
            <meta name="author" content="Abdulbasit Alabi Strange Dev"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="favicon.ico"/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
