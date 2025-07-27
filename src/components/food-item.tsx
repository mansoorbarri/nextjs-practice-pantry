interface FoodItemProps {
  name: string
  quantity: number
  location: string
  expires: string
}

export default function FoodItem({ name, quantity, location, expires }: FoodItemProps) {
  return (
    <div className="flex items-start p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="h-20 w-20 bg-gray-100 rounded-md mr-4 flex items-center justify-center">
        {/* Placeholder for food image */}
        <div className="text-gray-400 text-xs">Image</div>
      </div>
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        {/* Separating the label from the value */}
        <p className="text-black"><span className="font-bold">Quantity:</span> {quantity}</p>
        <p className="text-black"><span className="font-bold">Location:</span> {location}</p>
        <p className="text-black"><span className="font-bold">Expires:</span> {expires}</p>
      </div>
    </div>
  )
}