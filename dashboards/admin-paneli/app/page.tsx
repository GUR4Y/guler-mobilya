'use client'

import React, { useState } from 'react'
import { AppLayout } from '@/components/app-layout'
import { DashboardContent } from '@/components/dashboard/dashboard-content'

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = useState('overview')

  return (
    <AppLayout currentTab={currentTab} setCurrentTab={setCurrentTab}>
      <DashboardContent currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </AppLayout>
  )
}
