'use client'
import Image from "next/image";
import Logo from "@/img/logo.jpg"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export default function BannerSection() {
    return (
        <section className="flex justify-center gap-10 bg-gray500 py-36 px-10">
            <div className="relative w-[380px] h-[380px] bg-white rounded-full p-4 shadow-2xl">
                <Image src={Logo} className="object-center object-cover rounded-full" alt="" />
            </div>

            <div className="gap-2 leading-none flex flex-col justify-center">
                <p className="text-xl font-light">Bem vindo(a)</p>
                <h1 className="text-[70px] font-bold">Eletro Tech</h1>
                <Carousel
                    className="max-w-[500px] leading-none"
                    opts={{
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent className="text-bluePrimary text-[70px] font-bold py-3">
                        <CarouselItem className="w-fit">E-Commerce</CarouselItem>
                        <CarouselItem>Serviços</CarouselItem>
                        <CarouselItem>Soluções</CarouselItem>
                    </CarouselContent>
                </Carousel>
                <h3 className="text-3xl font-semibold text-black">Localizada em São Paulo</h3>
            </div>
        </section>
    )
}