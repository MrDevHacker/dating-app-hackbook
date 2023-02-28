import './globals.css'

export const metadata = {
  title: 'Dating Hackbook',
  description: 'Hackbook dating application. It allows you to meet hackers and exchange more than just binary numbers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
