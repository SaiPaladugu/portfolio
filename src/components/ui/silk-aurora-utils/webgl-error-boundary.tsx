"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface WebGLErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface WebGLErrorBoundaryState {
  hasError: boolean;
}

/**
 * Catches render-time errors thrown by the WebGL canvas (context loss,
 * driver quirks, headless environments) and swaps in the static fallback
 * so the hero never takes the page down with it.
 */
export class WebGLErrorBoundary extends React.Component<
  WebGLErrorBoundaryProps,
  WebGLErrorBoundaryState
> {
  state: WebGLErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): WebGLErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("SilkAurora: WebGL rendering failed, using static fallback.", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

/**
 * Static CSS approximation of the shader: satin-dark base with the
 * sheen (#f4dfb8) and accent (#6ed6c9) glows the fragment shader paints.
 */
export function WebGLFallback({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn("bg-[#050507]", className)}
      style={{
        backgroundImage: [
          "radial-gradient(ellipse 85% 60% at 72% 28%, rgba(244, 223, 184, 0.14), transparent 62%)",
          "radial-gradient(ellipse 75% 55% at 18% 74%, rgba(110, 214, 201, 0.12), transparent 58%)",
          "linear-gradient(180deg, #14151d 0%, #050507 72%)",
        ].join(", "),
        ...style,
      }}
      {...props}
    />
  );
}
