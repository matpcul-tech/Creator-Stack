import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link href="#" className="nav-logo">
        <span className="c1">Creator</span><span className="c2">Stack</span>
      </Link>
      <ul className="nav-center">
        <li><a href="#tools">Tools</a></li>
        <li><a href="#workflow">Workflow</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#partner">Partner</a></li>
      </ul>
      <div className="nav-right">
        <Link href="#partner" className="nav-partner">Acquisition Inquiry</Link>
        <Link href="#pricing" className="nav-cta">Get Started</Link>
      </div>
    </nav>
  )
}
