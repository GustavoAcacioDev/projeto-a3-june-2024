import Image from "next/image";
import HeaderNavigationItem from "./HeaderNavigationItem";
import Logo from "@/img/logo.jpg"

export default function Header() {
    return (
        <header className="flex justify-between px-10 py-5">
            <Image src={Logo} className="rounded-full w-[75px]" alt="Logo com o nome da empresa Eletro Tech, alguns circuitos eletrônicos de fundo, e um raio prateado ao centro" />

            <div className="flex items-center gap-8">
                <HeaderNavigationItem onMouseOverTextColor="#3299D9" text="Início" textColor="#114559" />
                <HeaderNavigationItem onMouseOverTextColor="#3299D9" text="Produtos" textColor="#114559" />
                <HeaderNavigationItem onMouseOverTextColor="#3299D9" text="Sobre" textColor="#114559" />
            </div>
        </header>
    )
}