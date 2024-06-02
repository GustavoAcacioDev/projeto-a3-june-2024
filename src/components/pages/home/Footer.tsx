
import Logo from "@/img/logo.jpg"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="p-10 flex items-center justify-between bg-blueSecondary">
            <Image src={Logo} className="rounded-full w-[75px]" alt="Logo com o nome da empresa Eletro Tech, alguns circuitos eletrônicos de fundo, e um raio prateado ao centro" />
            <h2>Copyright © 2024 Grupo 4. Todos os direitos reservados.</h2>
        </footer>
    )
}