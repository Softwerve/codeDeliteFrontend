import StoreProvider from '@/app/StoreProvider'
import LayoutPage from '@/components/Dashboards/LayoutPage'
import React from 'react'

const page = () => {
  return (
    <StoreProvider>
        <LayoutPage title={"Orders"} />
    </StoreProvider>
  )
}

export default page