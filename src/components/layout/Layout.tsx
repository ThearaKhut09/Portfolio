import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { PageTransition } from '../animations/PageTransition'
import { AnimatedBackground } from '../animations/AnimatedBackground'
import { Toaster } from 'react-hot-toast'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen gradient-bg">
      <AnimatedBackground />
      <Navigation />
      <main className="pt-16">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          className: 'glass',
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#333',
          },
        }}
      />
    </div>
  )
}
