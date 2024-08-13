import ServicePage from '@/app/components/layouts/pageLayouts/servicesPages'
import { services } from '@/app/utils/dataStructures'
import React from 'react'

const SocialMarketing = () => {
    const {details, service, image, details2} = services[4];

  return (
    
        <ServicePage image="/social-media.webp" description={details} description2={details2} title={service}/>
    
  )
}

export default SocialMarketing;