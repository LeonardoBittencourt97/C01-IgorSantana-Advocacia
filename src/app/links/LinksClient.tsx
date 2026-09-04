"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { COMPANY, LINKTREE } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function LinksClient() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-md flex-col items-center"
      >
        {/* Profile */}
        <motion.div variants={item} className="mb-8 text-center">
          <div className="glow-gold mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-gold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt={COMPANY.name}
              className="h-full w-full object-cover"
              width={112}
              height={112}
            />
          </div>
          <h1 className="mb-1 font-serif text-2xl font-semibold text-text-primary md:text-3xl">
            {LINKTREE.title}
          </h1>
          <p className="text-sm text-text-secondary">{LINKTREE.subtitle}</p>
        </motion.div>

        {/* Divider */}
        <motion.div variants={item} className="divider-gold mb-8 w-full" />

        {/* Links */}
        <div className="w-full space-y-3">
          {LINKTREE.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(200,164,78,0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full items-center justify-between rounded-xl border border-gold/30 px-6 py-4 font-medium text-text-primary transition-colors hover:border-gold hover:bg-gold/5"
            >
              <span>{link.label}</span>
              <ExternalLink
                size={16}
                className="text-text-muted transition-colors group-hover:text-gold"
              />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <motion.div variants={item} className="divider-gold mb-6 mt-8 w-full" />

        {/* Footer */}
        <motion.p
          variants={item}
          className="text-center text-xs text-text-muted"
        >
          &copy; {new Date().getFullYear()} {COMPANY.name}
        </motion.p>
      </motion.div>
    </div>
  );
}
