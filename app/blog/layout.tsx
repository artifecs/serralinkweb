import BlogNav from '@/components/BlogNav'
import BlogFooter from '@/components/BlogFooter'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* BlogNav renders at z-index 201, covering the root layout's Nav (z-index 200) */}
      <BlogNav />
      {children}
      <BlogFooter />
    </>
  )
}
