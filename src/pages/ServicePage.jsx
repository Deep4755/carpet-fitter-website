import { useParams } from 'react-router-dom'
export default function ServicePage(){
  const { service } = useParams()
  return <div className="max-w-6xl mx-auto px-6 py-16">Service: {service} (placeholder)</div>
}
