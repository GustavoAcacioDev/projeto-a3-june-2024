import ProductImageTabs from "@/components/pages/product/ProductImageTabs"
import ProductTextSection from "@/components/pages/product/ProductTextSection"
import { getProductById } from "@/lib/utils"

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = getProductById(params.id)[0]

    return <section className="flex justify-center h-full gap-10 bg-gray500 py-24 px-10">
        <ProductImageTabs product={product} />
        <ProductTextSection title={product.nome} description={product.descricao} garantia={product.garantia} price={product.preco} />
    </section>
}