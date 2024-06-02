import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TProducts } from "@/lib/products";
import Image from "next/image";

interface ProductImageTabsProps {
    product: TProducts
}

export default function ProductImageTabs({ product }: ProductImageTabsProps) {
    return (
        <Tabs defaultValue="image1" className="w-fit flex flex-col-reverse items-center justify-end gap-4 max-w-[500px]">
            <TabsList className="h-fit bg-transparent">
                <TabsTrigger value="image1">
                    <div className="w-[124px] h-[124px]">
                        <Image width={124} height={124} src={product.image_1 || ""} alt="" />
                    </div>
                </TabsTrigger>
                <TabsTrigger value="image2">
                    {product.image_2 && (
                        <div className="w-[124px] h-[124px]">
                            <Image width={124} height={124} src={product.image_2 || ""} alt="" />
                        </div>
                    )}

                </TabsTrigger>
                {product.image_3 && (
                    <TabsTrigger value="image3">
                        <div className="w-[124px] h-[124px]">
                            <Image width={124} height={124} src={product.image_3 || ""} alt="" />
                        </div>
                    </TabsTrigger>
                )}

            </TabsList>
            <TabsContent value="image1" className="w-fit">
                <div className="w-[407px] h-[407px]">
                    <Image width={407} height={407} src={product.image_1 || ""} alt="" />
                </div>
            </TabsContent>
            <TabsContent value="image2" className="w-fit">
                <div className="w-[407px] h-[407px]">
                    <Image width={407} height={407} src={product.image_2 || ""} alt="" />
                </div>
            </TabsContent>
            <TabsContent value="image3" className="w-fit">
                <div className="w-[407px] h-[407px]">
                    <Image width={407} height={407} src={product.image_3 || ""} alt="" />
                </div>
            </TabsContent>
        </Tabs>
    )
}