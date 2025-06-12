
interface MenuResultsProps {
  searchTerm: string;
  itemCount: number;
}

export const MenuResults = ({ searchTerm, itemCount }: MenuResultsProps) => {
  if (!searchTerm) return null;

  return (
    <div className="text-center mb-6">
      <p className="text-gray-600">
        Found {itemCount} item{itemCount !== 1 ? 's' : ''} 
        {searchTerm && ` for "${searchTerm}"`}
      </p>
    </div>
  );
};
