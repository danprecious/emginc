import ServicePage from '@/app/components/layouts/pageLayouts/servicesPages'
import { services } from '@/app/utils/dataStructures'
import React from 'react'

const EmailMarketing = () => {
    const {details, service, image, details2} = services[3];

  return (
    
        <ServicePage image="/typing.webp" description={details} description2={details2} title={service}/>
    
  )
}

export default EmailMarketing;