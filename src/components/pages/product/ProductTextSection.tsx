import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

interface ProductTextSectionProps {
  title: string
  description: string
  garantia: number
  price: number
}

function ProductTextSection({ title, description, garantia, price }: ProductTextSectionProps) {
  const link = "https://wa.me/5511991239008?text=Ol%C3%A1%2C+me+interessei+por+um+produto+e+gostaria+de+compr%C3%A1-lo%21"

  return (
    <div className='flex flex-col gap-4 py-5 max-w-[750px]'>
      <h2 className="text-blueDark text-5xl font-semibold">{title}</h2>
      <p className="text-gray-700 text-lg font-normal">{description}</p>

      <div className="flex gap-8">
        <div>
          <h3 className="text-blueDark font-semibold text-2xl">Garantia:</h3>
          <p className="text-gray-700 text-lg font-medium">{garantia} meses</p>
        </div>

        <div>
          <h3 className="text-blueDark font-semibold text-2xl">Preço:</h3>
          <p className="text-gray-700 text-lg font-medium">R$ {price}</p>
        </div>
      </div>

      <Link href={link} target='_blank'>
        <Button className='w-fit py-4 px-8 bg-white border border-bluePrimary rounded-lg text-blueDark hover:bg-bluePrimary hover:text-white'>Comprar</Button>
      </Link>
    </div>
  )
}

export default ProductTextSection