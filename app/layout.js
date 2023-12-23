import './globals.css'


export const metadata = {
  title: "Eva Knowles",
  description: "Artist",
};

export default function RootLayout({
  children,
} 
) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}