import React from "react";
import { motion } from "framer-motion";
type Props = { open: boolean; onClose: () => void; children: React.ReactNode; };
export default function Modal({ open, onClose, children }: Props) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.28)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50
      }}>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          background: "#fff", padding: 30, borderRadius: 12, minWidth: 340, position: "relative",
          boxShadow: "0 6px 32px rgba(0,0,0,0.13)"
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', right: 18, top: 12, background: "none", border: "none", fontSize: 20, cursor: "pointer"}}
          aria-label="Close"
        >✕</button>
        {children}
      </motion.div>
    </div>
  );
}
