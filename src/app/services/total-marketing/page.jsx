import ServicePage from '@/app/components/layouts/pageLayouts/servicesPages'
import { services } from '@/app/utils/dataStructures'
import React from 'react'

const TotalMarketing = () => {
    const {details, service, image, details2} = services[0];

  return (
    
        <ServicePage image="/pexels4.webp" description={details} description2={details2} title={service}/>
    
  )
}

export default TotalMarketing;