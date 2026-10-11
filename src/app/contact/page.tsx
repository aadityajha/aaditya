import type { Metadata } from "next";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Aditya Jha",
  description: "Contact Aditya Jha for academic conversations, community-health projects, collaboration, or professional connections.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Aditya Jha", description: "Reach out by email or social media.", url: "/contact" }
};

const icons = { Instagram, LinkedIn: Linkedin, Facebook };

export default function ContactPage() {
  const socials = siteConfig.socials.filter((item) => item.href.trim());
  return (
    <div className="contact-page">
      <section className="page-hero"><div className="container"><span className="eyebrow">Contact</span><h1>Good things start<br /><span>with a hello.</span></h1><p className="lead">For academic conversations, project collaboration, or a thoughtful exchange of ideas, feel free to reach out.</p></div><div className="contact-orbit" aria-hidden="true">✳</div></section>
      <section className="section"><div className="container contact-layout"><div className="contact-main"><span className="eyebrow">Your inbox, your call</span><h2>No forms. Just a direct line.</h2><p className="muted">I prefer keeping contact simple. Choose the channel that works best for you.</p><a className="email-card" href={`mailto:${siteConfig.email}`}><span className="email-icon"><Mail size={23}/></span><span className="email-copy"><small>EMAIL</small><strong>{siteConfig.email}</strong><span>Usually the best place to start</span></span><ArrowUpRight className="email-arrow" size={23}/></a></div><aside className="social-panel"><h2>Find me online</h2><p>My social links will appear here once I add the correct public profiles.</p>{socials.length ? socials.map((item) => { const Icon = icons[item.label as keyof typeof icons] ?? MessageCircle; return <a className="social-row" href={item.href} key={item.label} target="_blank" rel="noreferrer"><span><Icon size={19}/></span>{item.label}<ArrowUpRight size={16}/></a>; }) : <div className="social-placeholder"><span className="social-placeholder-icon"><MessageCircle size={20}/></span><div><strong>Social profiles coming soon</strong><small>Instagram · LinkedIn · Facebook</small></div></div>}</aside></div></section>
      <section className="section section--ivory"><div className="container contact-bottom"><div><span className="eyebrow">A small note</span><h2>Thoughtful messages are always welcome.</h2></div><p className="muted">This website is a personal portfolio and not a channel for urgent medical advice or emergency assistance.</p></div></section>
    </div>
  );
}
