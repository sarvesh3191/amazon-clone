import { create } from 'zustand'

type Product = {
  id: string
  title: string
  price: number
  image: string
}

interface CartStore {
  items: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}))
