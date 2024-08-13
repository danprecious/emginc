import React from 'react'
import PageLayout from '../components/layouts/pageLayouts/mainPages'

const ServicesLayout = ({children}) => {
  return (
     <PageLayout title="What We Do">
         {children}
     </PageLayout>   
  )
}

export default ServicesLayout