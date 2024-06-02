import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { products } from "./products"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProductById(id: string){
  return products.filter((product) => product.id.toString() === id)
}