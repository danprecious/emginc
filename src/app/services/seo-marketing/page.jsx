import ServicePage from '@/app/components/layouts/pageLayouts/servicesPages'
import { services } from '@/app/utils/dataStructures'
import React from 'react'

const SeoMarketing = () => {
    const {details, service, image, details2} = services[2];

  return (
    
        <ServicePage image="/seo.webp" description={details} description2={details2} title={service}/>
    
  )
}

export default SeoMarketing