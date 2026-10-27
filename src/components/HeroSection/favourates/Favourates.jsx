import Cards from '../mainArea/Cards'

function Favourates({ favorites, onToggleFavorite }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favorites.map(favorite => (
        <Cards
          key={favorite.id}
          photo={favorite}
          isFavorite
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default Favourates