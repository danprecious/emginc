import ServicePage from '@/app/components/layouts/pageLayouts/servicesPages'
import { services } from '@/app/utils/dataStructures'
import React from 'react'

const Consulting = () => {
    const {details, service, image, details2} = services[1];

  return (
    
        <ServicePage image={image} description={details} description2={details2} title={service}/>
    
  )
}

export default Consulting