import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'QR Code',
	description: 'QR code to scan', 
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
