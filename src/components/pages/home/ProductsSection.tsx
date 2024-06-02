import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { TProducts, products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductSection() {
    const hardwareProducts = products.filter((product) => {
        return product.categoria.includes("hardware")
    })

    const perifericProducts = products.filter((product) => {
        return product.categoria.includes("perifericos")
    })

    const audioProducts = products.filter((product) => {
        return product.categoria.includes("audio")
    })

    return (
        <section className="flex flex-col items-center px-10 py-8 gap-8">
            <h2 className="text-3xl font-semibold">Produtos de nossa loja</h2>

            <Tabs defaultValue="audio" className="w-full flex flex-col items-center gap-4">
                <TabsList>
                    <TabsTrigger value="hardware">Hardware</TabsTrigger>
                    <TabsTrigger value="perifericos">Periféricos</TabsTrigger>
                    <TabsTrigger value="audio">Audio</TabsTrigger>
                </TabsList>
                <TabsContent value="hardware">
                    <div className="w-full bg-gray500 rounded-xl p-3 grid grid-cols-3 gap-x-4 gap-y-4">
                        {hardwareProducts.map((product) => <ProductCard product={product} key={product.id} />)}
                    </div>
                </TabsContent>
                <TabsContent value="perifericos">
                    <div className="w-full bg-gray500 rounded-xl p-3 grid grid-cols-3 gap-x-4 gap-y-4">
                        {perifericProducts.map((product) => <ProductCard product={product} key={product.id} />)}
                    </div>
                </TabsContent>
                <TabsContent value="audio">
                    <div className="w-full bg-gray500 rounded-xl p-3 grid grid-cols-3 gap-x-4 gap-y-4">
                        {audioProducts.map((product) => <ProductCard product={product} key={product.id} />)}
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

function ProductCard({ product }: { product: TProducts }) {
    return (
        <Link className=" w-full p-3 border border-transparent hover:border-current border-black rounded-lg transition-all ease-in-out duration-200" href={`/product/${product.id}`}>
            {product.image_1 && <div className="relative w-full h-[240px] rounded-xl bg-white">
                <Image
                    className="h-full w-full object-scale-down"
                    alt="Imagem de representação do prêmio"
                    width={240}
                    height={240}
                    src={product.image_1}
                    unoptimized
                />
            </div>}

            <h2 className="text-base text-blueDark font-normal">{product.nome}</h2>
            <h3 className="text-xl text-blueDark font-bold">{`R$ ${product.preco}`}</h3>
        </Link>
    )
}