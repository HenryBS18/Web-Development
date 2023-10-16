import IconDot from "./IconDot";

const ItemList = ({ children }) => {
  return (
    <div className="flex items-center gap-x-2">
      <IconDot />
      <h1 className="text-xl">{children}</h1>
    </div>
  )
}

export default ItemList