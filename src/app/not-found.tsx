import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import "./not-found.css";

export default function NotFound() {
  return <section className="not-found"><div className="container"><span className="eyebrow">404 · Page not found</span><h1>This page took<br/><span>a different path.</span></h1><p className="lead">The page may have moved or the link may be incorrect.</p><Link className="button button--dark" href="/"><ArrowLeft size={17}/> Back to home</Link></div></section>;
}
