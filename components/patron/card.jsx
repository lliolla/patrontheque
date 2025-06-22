import Image from 'next/image'
import { Star } from 'lucide-react'

export const PatronCard = ({ 
  name, 
  photoUrl, 
  category, 
  difficulty, 
  author, 
  model 
}) => {
  const renderDifficulty = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`size-4 ${index < difficulty ? 'text-yellow-500' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image 
          src={photoUrl || '/public/placeholder.jpg'} 
          alt={name || 'Patron'} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted-foreground">{category}</span>
          <div className="flex">{renderDifficulty()}</div>
        </div>
        <div className="mt-2 text-sm">
          <p>Auteur: {author}</p>
          <p>Modèle: {model}</p>
        </div>
      </div>
    </div>
  )
}