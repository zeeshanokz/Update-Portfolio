"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import type { Toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

function ToastContainerComponent({ toasts, onRemove }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed right-4 bottom-4 z-[100] flex flex-col gap-2"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((toast) => {
        const Icon = icons[toast.type];
        return (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={cn(
              "glass flex items-center gap-3 rounded-xl px-4 py-3 shadow-xl",
              toast.type === "success" && "border-green-500/30",
              toast.type === "error" && "border-red-500/30",
            )}
          >
            <Icon
              className={cn(
                "size-5 shrink-0",
                toast.type === "success" && "text-green-500",
                toast.type === "error" && "text-red-500",
                toast.type === "info" && "text-primary",
              )}
              aria-hidden="true"
            />
            <p className="text-sm">{toast.message}</p>
            <button
              onClick={() => onRemove(toast.id)}
              className="focus-ring ml-2 rounded-lg p-1 hover:bg-muted/60"
              aria-label="Dismiss notification"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

export const ToastContainer = memo(ToastContainerComponent);
