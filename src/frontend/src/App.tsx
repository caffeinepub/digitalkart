import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Download,
  Instagram,
  Lock,
  Menu,
  MessageCircle,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  Twitter,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// --- DATA ---
const products = [
  {
    id: 1,
    emoji: "🎬",
    title: "Viral Reels Bundle Pro",
    description: "500+ viral reel templates for Instagram & TikTok",
    price: 29,
    rating: 4.9,
    reviews: 312,
    badge: "Best Seller",
    color: "cyan",
  },
  {
    id: 2,
    emoji: "📚",
    title: "Ultimate Ebook Pack",
    description: "50 premium ebooks on business, finance & mindset",
    price: 19,
    rating: 4.8,
    reviews: 218,
    badge: "Top Rated",
    color: "purple",
  },
  {
    id: 3,
    emoji: "📱",
    title: "Social Media Content Kit",
    description: "1000+ social media posts, stories & captions",
    price: 39,
    rating: 5.0,
    reviews: 445,
    badge: "New",
    color: "magenta",
  },
  {
    id: 4,
    emoji: "▶️",
    title: "YouTube Shorts Pack",
    description: "300+ trending shorts templates with hooks",
    price: 24,
    rating: 4.8,
    reviews: 167,
    badge: "",
    color: "cyan",
  },
  {
    id: 5,
    emoji: "🚀",
    title: "Creator Starter Bundle",
    description: "Everything a new creator needs to go viral",
    price: 49,
    rating: 4.9,
    reviews: 389,
    badge: "Popular",
    color: "purple",
  },
  {
    id: 6,
    emoji: "📊",
    title: "Digital Marketing Mastery",
    description: "Complete digital marketing guide + templates",
    price: 34,
    rating: 4.8,
    reviews: 203,
    badge: "",
    color: "blue",
  },
];

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    emoji: "⚡",
    title: "Instant Download",
    description:
      "Get your digital products immediately after purchase. No waiting, no delays.",
    color: "cyan",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    emoji: "🔒",
    title: "Lifetime Access",
    description:
      "Buy once, access forever. All future updates included at no extra cost.",
    color: "purple",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    emoji: "✨",
    title: "High-Quality Content",
    description:
      "Professionally curated content that drives real results for creators.",
    color: "magenta",
  },
  {
    icon: <Target className="w-8 h-8" />,
    emoji: "🎯",
    title: "Beginner Friendly",
    description: "No experience needed. Designed to work right out of the box.",
    color: "blue",
  },
];

const testimonials = [
  {
    quote:
      "This reels bundle completely changed my content game! My views went from 500 to 50K in just two weeks. Absolutely insane value!",
    name: "Sarah K.",
    role: "Content Creator",
    initials: "SK",
    rating: 5,
    color: "#22D3EE",
  },
  {
    quote:
      "The ebook pack is incredibly valuable for the price. I've read 12 books from the pack and each one taught me something new. Worth every penny!",
    name: "Arjun M.",
    role: "Digital Marketer",
    initials: "AM",
    rating: 5,
    color: "#A855F7",
  },
  {
    quote:
      "Downloaded in seconds, quality is absolutely insane. The content kit saved me 20+ hours per week on social media. 10/10 recommend to every creator!",
    name: "Priya S.",
    role: "Online Entrepreneur",
    initials: "PS",
    rating: 5,
    color: "#FF3DF2",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Product",
    description:
      "Browse our premium digital product library and pick what fits your goals.",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Pay Securely",
    description:
      "Safe, encrypted checkout with multiple payment options available.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Download Instantly",
    description:
      "Access your purchase immediately. Start creating and growing right away.",
    icon: <Download className="w-6 h-6" />,
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "eBooks", href: "#products" },
  { label: "Content Packs", href: "#products" },
  { label: "About", href: "#how-it-works" },
];

// --- HOOKS ---
function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".fade-in-up");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}

// --- COMPONENTS ---
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i <= Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-yellow-400/30 text-yellow-400/30"
          }`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-1">{rating}</span>
    </div>
  );
}

function NeonButton({
  children,
  variant = "gradient",
  onClick,
  className = "",
  dataOcid,
}: {
  children: React.ReactNode;
  variant?: "gradient" | "outline";
  onClick?: () => void;
  className?: string;
  dataOcid?: string;
}) {
  if (variant === "outline") {
    return (
      <button
        type="button"
        data-ocid={dataOcid}
        onClick={onClick}
        className={`px-8 py-3.5 rounded-full border border-neon-cyan/40 text-neon-cyan font-semibold text-sm tracking-wide
          hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300 hover:shadow-neon-cyan hover:-translate-y-0.5
          ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      type="button"
      data-ocid={dataOcid}
      onClick={onClick}
      className={`px-8 py-3.5 rounded-full btn-gradient text-white font-semibold text-sm tracking-wide
        ${className}`}
    >
      {children}
    </button>
  );
}

function VaultSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full float-animation pulse-glow"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Digital vault illustration"
    >
      {/* Background glow */}
      <circle cx="200" cy="200" r="180" fill="url(#bgGlow)" opacity="0.3" />

      {/* Circuit traces */}
      <path
        d="M50 200 L100 200 L100 150 L150 150"
        stroke="#22D3EE"
        strokeWidth="1.5"
        opacity="0.5"
        className="circuit-trace"
      />
      <path
        d="M350 200 L300 200 L300 250 L250 250"
        stroke="#A855F7"
        strokeWidth="1.5"
        opacity="0.5"
        className="circuit-trace-slow"
      />
      <path
        d="M200 50 L200 100 L250 100 L250 130"
        stroke="#22D3EE"
        strokeWidth="1.5"
        opacity="0.4"
        className="circuit-trace"
      />
      <path
        d="M200 350 L200 300 L150 300 L150 270"
        stroke="#A855F7"
        strokeWidth="1.5"
        opacity="0.4"
        className="circuit-trace-slow"
      />

      {/* Vault body */}
      <rect
        x="110"
        y="110"
        width="180"
        height="180"
        rx="20"
        fill="url(#vaultBody)"
        stroke="url(#vaultBorder)"
        strokeWidth="2"
      />

      {/* Vault door detail */}
      <rect
        x="125"
        y="125"
        width="150"
        height="150"
        rx="14"
        fill="url(#vaultDoor)"
        stroke="url(#doorBorder)"
        strokeWidth="1.5"
      />

      {/* Combination dial */}
      <circle
        cx="200"
        cy="200"
        r="42"
        fill="url(#dialBg)"
        stroke="url(#dialBorder)"
        strokeWidth="2"
      />
      <circle cx="200" cy="200" r="34" fill="url(#dialInner)" />
      <circle cx="200" cy="200" r="8" fill="#22D3EE" opacity="0.9" />

      {/* Dial marks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 200 + 38 * Math.cos(rad);
        const y1 = 200 + 38 * Math.sin(rad);
        const x2 = 200 + 30 * Math.cos(rad);
        const y2 = 200 + 30 * Math.sin(rad);
        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#22D3EE"
            strokeWidth="1.5"
            opacity="0.7"
          />
        );
      })}

      {/* Handle */}
      <rect
        x="232"
        y="190"
        width="24"
        height="20"
        rx="4"
        fill="url(#handleGrad)"
        stroke="#22D3EE"
        strokeWidth="1"
        opacity="0.9"
      />

      {/* Hinge dots */}
      <circle cx="132" cy="148" r="4" fill="#22D3EE" opacity="0.6" />
      <circle cx="132" cy="252" r="4" fill="#22D3EE" opacity="0.6" />

      {/* Corner circuit nodes */}
      <circle cx="100" cy="150" r="3" fill="#22D3EE" opacity="0.8" />
      <circle cx="300" cy="250" r="3" fill="#A855F7" opacity="0.8" />
      <circle cx="250" cy="130" r="3" fill="#22D3EE" opacity="0.7" />
      <circle cx="150" cy="270" r="3" fill="#A855F7" opacity="0.7" />

      {/* Small decorative dots */}
      <circle cx="160" cy="140" r="2" fill="#22D3EE" opacity="0.5" />
      <circle cx="240" cy="260" r="2" fill="#A855F7" opacity="0.5" />
      <circle cx="260" cy="140" r="2" fill="#FF3DF2" opacity="0.5" />
      <circle cx="140" cy="260" r="2" fill="#22D3EE" opacity="0.5" />

      {/* Digital pattern lines on door */}
      <line
        x1="140"
        y1="155"
        x2="185"
        y2="155"
        stroke="#22D3EE"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <line
        x1="140"
        y1="162"
        x2="175"
        y2="162"
        stroke="#22D3EE"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <line
        x1="215"
        y1="245"
        x2="260"
        y2="245"
        stroke="#A855F7"
        strokeWidth="0.8"
        opacity="0.3"
      />
      <line
        x1="225"
        y1="252"
        x2="260"
        y2="252"
        stroke="#A855F7"
        strokeWidth="0.8"
        opacity="0.3"
      />

      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vaultBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id="vaultBorder" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="vaultDoor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111B2E" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="doorBorder" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="dialBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </radialGradient>
        <linearGradient id="dialBorder" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <radialGradient id="dialInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="handleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// --- MAIN APP ---
export default function App() {
  const [cartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: "#070B16" }}>
      {/* ===================== NAVIGATION ===================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/90 backdrop-blur-xl border-b border-neon-cyan/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg btn-gradient"
                style={{ boxShadow: "0 0 15px rgba(34,211,238,0.4)" }}
              >
                D
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Digital<span className="gradient-text">Kart</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-6"
              data-ocid="nav.section"
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                  className="text-sm text-muted-foreground hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                data-ocid="cart.button"
                className="relative flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-white text-sm font-medium transition-all duration-200"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-cyan rounded-full text-navy-950 text-xs font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                data-ocid="nav.mobile_menu.button"
                className="md:hidden text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-neon-cyan/10"
            >
              <nav className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-sm text-muted-foreground hover:text-white transition-colors py-2 border-b border-white/5"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===================== HERO ===================== */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-16"
        style={{
          background:
            "radial-gradient(ellipse 1000px 800px at 15% 50%, rgba(34,211,238,0.13) 0%, transparent 55%), radial-gradient(ellipse 800px 700px at 88% 45%, rgba(139,92,246,0.12) 0%, transparent 55%), radial-gradient(ellipse 600px 400px at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 70%), #070B16",
        }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
            {/* Left: Vault Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
                {/* Large ambient glow disc */}
                <div
                  className="absolute -inset-12 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(139,92,246,0.12) 40%, transparent 70%)",
                    filter: "blur(40px)",
                    animation: "pulseGlow 3s ease-in-out infinite",
                  }}
                />
                {/* Outer glow rings */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)",
                    animation: "pulseGlow 3s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute inset-6 rounded-full border border-neon-cyan/30"
                  style={{
                    animation: "float 4s ease-in-out infinite",
                    boxShadow: "0 0 20px rgba(34,211,238,0.15) inset",
                  }}
                />
                <div
                  className="absolute inset-14 rounded-full border border-neon-purple/20"
                  style={{
                    animation: "float 4s ease-in-out infinite 0.5s",
                    boxShadow: "0 0 15px rgba(139,92,246,0.1) inset",
                  }}
                />
                <VaultSVG />
              </div>
            </motion.div>

            {/* Right: Hero content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 shimmer-badge rounded-full px-4 py-1.5 border border-neon-cyan/20 mb-6">
                <span className="text-sm">🔥</span>
                <span className="text-xs font-semibold text-neon-cyan tracking-wider uppercase">
                  #1 Digital Products Platform
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] mb-5">
                Unlock Premium
                <br />
                <span
                  className="gradient-text"
                  style={{
                    filter: "drop-shadow(0 0 24px rgba(34,211,238,0.5))",
                  }}
                >
                  Digital Content
                </span>
              </h1>

              <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-lg leading-relaxed">
                Get Viral Reels, Ebooks & Digital Bundles{" "}
                <strong className="text-white">Instantly</strong>. Trusted by
                1000+ creators worldwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <NeonButton
                  dataOcid="hero.shop_now.primary_button"
                  onClick={() => scrollToSection("#products")}
                  className="text-base px-10 py-4"
                >
                  Shop Now →
                </NeonButton>
                <NeonButton
                  dataOcid="hero.explore.secondary_button"
                  variant="outline"
                  onClick={() => scrollToSection("#products")}
                  className="text-base px-10 py-4"
                >
                  Explore Products
                </NeonButton>
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                {[
                  { icon: "✓", text: "1000+ Happy Customers" },
                  { icon: "⚡", text: "Instant Download" },
                  { icon: "🔒", text: "Secure Checkout" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <span className="text-neon-cyan text-sm">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-neon-cyan/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-2 rounded-full bg-neon-cyan"
            />
          </div>
        </motion.div>
      </section>

      {/* ===================== FEATURED PRODUCTS ===================== */}
      <section
        id="products"
        className="py-24 relative section-glow"
        style={{
          background:
            "linear-gradient(180deg, #070B16 0%, #0B1224 50%, #070B16 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <Badge className="mb-4 bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20 text-xs font-semibold tracking-widest uppercase">
              Our Best-Sellers
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Premium Digital Products
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Handpicked collections designed to supercharge your content
              creation and online business.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="products.list"
          >
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                data-ocid={`products.item.${idx + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-neon rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group flex flex-col"
                style={{
                  background: "linear-gradient(145deg, #0F172A, #111B2E)",
                }}
              >
                {/* Color accent stripe at top */}
                <div
                  className="h-0.5 w-full"
                  style={{
                    background:
                      product.color === "cyan"
                        ? "linear-gradient(90deg, transparent, #22D3EE, transparent)"
                        : product.color === "purple"
                          ? "linear-gradient(90deg, transparent, #A855F7, transparent)"
                          : product.color === "magenta"
                            ? "linear-gradient(90deg, transparent, #FF3DF2, transparent)"
                            : "linear-gradient(90deg, transparent, #3B82F6, transparent)",
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                      style={{
                        background:
                          product.color === "cyan"
                            ? "rgba(34,211,238,0.1)"
                            : product.color === "purple"
                              ? "rgba(168,85,247,0.1)"
                              : product.color === "magenta"
                                ? "rgba(255,61,242,0.1)"
                                : "rgba(59,130,246,0.1)",
                        border: `1px solid ${
                          product.color === "cyan"
                            ? "rgba(34,211,238,0.3)"
                            : product.color === "purple"
                              ? "rgba(168,85,247,0.3)"
                              : product.color === "magenta"
                                ? "rgba(255,61,242,0.3)"
                                : "rgba(59,130,246,0.3)"
                        }`,
                      }}
                    >
                      {product.emoji}
                    </div>
                    {product.badge && (
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background:
                            product.color === "cyan"
                              ? "rgba(34,211,238,0.15)"
                              : product.color === "purple"
                                ? "rgba(168,85,247,0.15)"
                                : product.color === "magenta"
                                  ? "rgba(255,61,242,0.15)"
                                  : "rgba(59,130,246,0.15)",
                          color:
                            product.color === "cyan"
                              ? "#22D3EE"
                              : product.color === "purple"
                                ? "#A855F7"
                                : product.color === "magenta"
                                  ? "#FF3DF2"
                                  : "#3B82F6",
                        }}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <StarRating rating={product.rating} />
                  <div className="text-xs text-muted-foreground mt-1 mb-3">
                    {product.reviews} reviews
                  </div>

                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-neon-cyan transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "#22D3EE" }}
                      >
                        ${product.price}
                      </span>
                      <span className="text-muted-foreground text-xs ml-1">
                        one-time
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    data-ocid={`products.item.${idx + 1}.button`}
                    className="w-full mt-4 py-2.5 rounded-xl btn-gradient text-white text-sm font-semibold transition-all duration-300"
                  >
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    data-ocid={`products.item.${idx + 1}.secondary_button`}
                    className="w-full mt-2 py-2 text-xs text-muted-foreground hover:text-neon-cyan transition-colors flex items-center justify-center gap-1"
                  >
                    View Details <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BENEFITS ===================== */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #070B16 0%, #0E1A2D 100%)",
        }}
      >
        {/* Ambient glow offset left */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "10%",
            right: "-5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">DigitalKart</span>?
            </h2>
            <p className="text-muted-foreground">
              Everything you need, nothing you don't.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                data-ocid={`benefits.item.${idx + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 group"
                style={{
                  background: "linear-gradient(145deg, #0F172A, #111B2E)",
                  border: "1px solid rgba(34,211,238,0.12)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 30px rgba(34,211,238,0.12), 0 0 60px rgba(139,92,246,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(34,211,238,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(34,211,238,0.12)";
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{
                    background:
                      benefit.color === "cyan"
                        ? "rgba(34,211,238,0.1)"
                        : benefit.color === "purple"
                          ? "rgba(168,85,247,0.1)"
                          : benefit.color === "magenta"
                            ? "rgba(255,61,242,0.1)"
                            : "rgba(59,130,246,0.1)",
                    border: `1px solid ${
                      benefit.color === "cyan"
                        ? "rgba(34,211,238,0.25)"
                        : benefit.color === "purple"
                          ? "rgba(168,85,247,0.25)"
                          : benefit.color === "magenta"
                            ? "rgba(255,61,242,0.25)"
                            : "rgba(59,130,246,0.25)"
                    }`,
                    boxShadow:
                      benefit.color === "cyan"
                        ? "0 0 15px rgba(34,211,238,0.15)"
                        : benefit.color === "purple"
                          ? "0 0 15px rgba(168,85,247,0.15)"
                          : "0 0 15px rgba(255,61,242,0.1)",
                  }}
                >
                  {benefit.emoji}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section
        id="how-it-works"
        className="py-24 relative section-glow"
        style={{
          background: "linear-gradient(180deg, #0E1A2D 0%, #070B16 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-neon-purple/10 text-neon-purple border-neon-purple/20 text-xs font-semibold tracking-widest uppercase">
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Three simple steps to premium digital content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute top-16 left-[25%] right-[25%] h-px bg-gradient-to-r from-neon-cyan/50 via-neon-purple/60 to-neon-cyan/50"
              style={{
                boxShadow:
                  "0 0 8px rgba(34,211,238,0.3), 0 0 16px rgba(139,92,246,0.2)",
              }}
            />

            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                data-ocid={`how_it_works.item.${idx + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number circle */}
                <div
                  className="w-16 h-16 rounded-full btn-gradient flex items-center justify-center mb-6 relative z-10"
                  style={{
                    boxShadow:
                      "0 0 0 4px rgba(34,211,238,0.12), 0 0 25px rgba(34,211,238,0.45), 0 0 50px rgba(139,92,246,0.2)",
                  }}
                >
                  <span className="text-white font-black text-lg">
                    {step.number}
                  </span>
                </div>

                <div
                  className="rounded-2xl p-6 w-full"
                  style={{
                    background: "linear-gradient(145deg, #0F172A, #111B2E)",
                    border: "1px solid rgba(34,211,238,0.1)",
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center mx-auto mb-3 text-neon-cyan">
                    {step.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden mt-4 text-neon-cyan/40">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section
        id="testimonials"
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #070B16 0%, #0B1224 50%, #070B16 100%)",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute pointer-events-none inset-0"
          style={{
            background:
              "radial-gradient(ellipse 700px 400px at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white font-bold">4.9/5</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              <span className="gradient-text">1000+</span> Happy Customers
            </h2>
            <p className="text-muted-foreground">
              Real results from real creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                data-ocid={`testimonials.item.${idx + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-2xl p-6 relative"
                style={{
                  background: "linear-gradient(145deg, #0F172A, #111B2E)",
                  border: `1px solid ${t.color}30`,
                  boxShadow: `0 0 20px ${t.color}10`,
                }}
              >
                {/* Quote mark */}
                <div
                  className="text-4xl font-serif leading-none mb-4 opacity-60"
                  style={{ color: t.color }}
                >
                  "
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {t.quote}
                </p>

                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`,
                      border: `1px solid ${t.color}50`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {t.role}
                    </div>
                  </div>
                  <CheckCircle
                    className="w-4 h-4 ml-auto"
                    style={{ color: t.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section
        id="cta"
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(34,211,238,0.06) 50%, transparent 70%), linear-gradient(180deg, #070B16 0%, #0E1A2D 50%, #070B16 100%)",
        }}
      >
        {/* Decorative borders */}
        <div
          className="absolute inset-x-4 md:inset-x-20 inset-y-8 rounded-3xl pointer-events-none"
          style={{
            border: "1px solid transparent",
            background:
              "linear-gradient(#070B16, #0E1A2D) padding-box, linear-gradient(135deg, rgba(34,211,238,0.3), rgba(139,92,246,0.3)) border-box",
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Start Growing with{" "}
              <span className="gradient-text">DigitalKart</span> Today
            </h2>
            <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
              Join thousands of creators already winning with premium digital
              content. Your growth starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton
                dataOcid="cta.shop_now.primary_button"
                onClick={() => scrollToSection("#products")}
                className="text-base px-12 py-4"
              >
                Shop Now — Get Started
              </NeonButton>
              <NeonButton
                dataOcid="cta.explore.secondary_button"
                variant="outline"
                onClick={() => scrollToSection("#products")}
                className="text-base px-10 py-4"
              >
                Browse Products
              </NeonButton>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              {[
                "⚡ Instant Delivery",
                "🔒 Secure Payment",
                "♾️ Lifetime Access",
                "💬 24/7 Support",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer
        className="pt-16 pb-8"
        style={{
          background: "linear-gradient(180deg, #070B16 0%, #050810 100%)",
          borderTop: "1px solid rgba(34,211,238,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg btn-gradient"
                  style={{ boxShadow: "0 0 15px rgba(34,211,238,0.3)" }}
                >
                  D
                </div>
                <span className="text-white font-bold text-lg">
                  Digital<span className="gradient-text">Kart</span>
                </span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4 max-w-48">
                Premium digital products for creators, marketers & online
                entrepreneurs.
              </p>
              {/* Social icons */}
              <div className="flex gap-2">
                {[
                  {
                    icon: <Instagram className="w-4 h-4" />,
                    label: "Instagram",
                    href: "#",
                  },
                  {
                    icon: <Twitter className="w-4 h-4" />,
                    label: "Twitter",
                    href: "#",
                  },
                  {
                    icon: <Youtube className="w-4 h-4" />,
                    label: "YouTube",
                    href: "#",
                  },
                  {
                    icon: <MessageCircle className="w-4 h-4" />,
                    label: "WhatsApp",
                    href: "https://wa.me/+1234567890",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`footer.${social.label.toLowerCase()}.link`}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-neon-cyan/30 hover:bg-neon-cyan/10 transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Shop</h4>
              <ul className="space-y-2.5">
                {[
                  "Reels Bundles",
                  "Ebook Packs",
                  "Content Kits",
                  "Starter Bundles",
                  "All Products",
                ].map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => scrollToSection("#products")}
                      className="text-muted-foreground hover:text-white text-xs transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2.5">
                {["About Us", "Blog", "Careers", "Press", "Partners"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="/"
                        className="text-muted-foreground hover:text-white text-xs transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
              <ul className="space-y-2.5">
                {[
                  "Contact Us",
                  "FAQ",
                  "Privacy Policy",
                  "Terms of Service",
                  "Refund Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="text-muted-foreground hover:text-white text-xs transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span>
              © {new Date().getFullYear()} DigitalKart. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <a href="/" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/" className="hover:text-white transition-colors">
                Terms
              </a>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Built with ❤️ using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ===================== WHATSAPP FLOATING BUTTON ===================== */}
      <a
        href="https://wa.me/+1234567890"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.button"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg whatsapp-pulse group"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-xs font-medium whitespace-nowrap text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          💬 Chat with us!
        </div>
      </a>
    </div>
  );
}
