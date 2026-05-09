import { useParams } from 'react-router-dom'
export default function AreaPage(){
  const { area } = useParams()
  return <div className="max-w-6xl mx-auto px-6 py-16">Area: {area} (placeholder)</div>
}
