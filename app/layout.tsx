import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'PsicoEstratégia',
  description: 'Psicologia Organizacional....',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
