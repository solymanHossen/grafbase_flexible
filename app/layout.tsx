
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: 'flexible app',
  description: 'solyman devoloper in the mediusware',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
     <Navbar/>
      <main>
      {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
