'use client'

import React from "react"
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { AppHeader } from '@/components/app-header'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface AppLayoutProps {
  children: React.ReactNode
  breadcrumbs?: BreadcrumbItem[]
  currentTab: string
  setCurrentTab: (tab: string) => void
}

export function AppLayout({ children, breadcrumbs, currentTab, setCurrentTab }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <SidebarInset>
        <AppHeader breadcrumbs={breadcrumbs} />
        <main className="flex-1 overflow-auto bg-stone-50/50">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
