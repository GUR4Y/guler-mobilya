'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Palette,
  Sparkles,
  Layers,
  Settings,
  ShieldCheck,
  FolderOpen,
  LogOut,
  Sliders,
  ExternalLink
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

interface AppSidebarProps {
  currentTab: string
  setCurrentTab: (tab: string) => void
}

export function AppSidebar({ currentTab, setCurrentTab }: AppSidebarProps) {
  const { setOpenMobile } = useSidebar()

  const navItems = [
    { id: 'overview', title: 'Genel Bakış', icon: LayoutDashboard },
    { id: 'visualizer', title: 'AI Kumaş Görselleştirici', icon: Sparkles },
    { id: 'fabrics', title: 'Admin Kumaş Yönetimi', icon: Palette },
    { id: 'projects', title: 'Mobilya Projeleri', icon: FolderOpen },
    { id: 'pipeline', title: 'Enhancement & Cache', icon: ShieldCheck },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-stone-900 text-white font-bold text-xs tracking-wider">
            FS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-stone-900">Fabrika Sahibi Paneli</span>
            <span className="text-[10px] text-stone-500 uppercase tracking-wider">Admin Yetkisi</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = currentTab === item.id
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton 
                      isActive={isActive}
                      onClick={() => {
                        setCurrentTab(item.id)
                        setOpenMobile(false)
                      }}
                      className="cursor-pointer"
                    >
                      <Icon className="size-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4 space-y-2">
        <a
          href="http://localhost:3000"
          className="flex items-center justify-between text-xs px-3 py-2 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors"
        >
          <span>Landing Page'e Dön</span>
          <ExternalLink className="size-3.5 text-stone-400" />
        </a>

        <div className="pt-1 text-[11px] text-stone-400 flex items-center justify-between">
          <span>Giriş Yapan: Fabrika Sahibi</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
