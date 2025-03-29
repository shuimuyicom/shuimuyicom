"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * 主题提供者组件
 * 用于管理应用的主题状态（明亮/暗黑模式）
 */
export function ThemeProvider({ 
  children, 
  ...props 
}: { 
  children: React.ReactNode;
} & Record<string, any>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 