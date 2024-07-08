import * as React from 'react'

export type DrawerListProps = {
  closeDrawer: () => void
  pages: {
    label: string
    path: string
    Icon: React.ElementType
  }[]
}
