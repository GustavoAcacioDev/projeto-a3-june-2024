import ServiceIcon from "@/components/icons/ServiceIcon"

const services = [
    {
        title: "Desenvolvimento de websites",
        description: "Nosso serviço de desenvolvimento web cria soluções digitais sob medida para suas necessidades. De websites elegantes e responsivos a poderosas aplicações web, combinamos criatividade com tecnologia de ponta para elevar sua presença online."
    },
    {
        title: "Aplicativos móveis",
        description: "Criação de aplicativos móveis personalizados para empresas de varejo, permitindo que os clientes naveguem por produtos, façam compras, recebam ofertas personalizadas e participem de programas de fidelidade, aumentando o envolvimento e a fidelidade do cliente."
    },
    {
        title: "Conserto",
        description: "Traga o seu aparelho móvel, computador ou video-game para alguma de nossas lojas e receba o melhor atendimento possível, trabalhamos com peças de reposições originais e atendentes qualificados para consertarem o seu celular"
    },
]

export default function ServicesSection() {
    return (
        <section className="flex flex-col items-center px-10 py-8 gap-4">
            <div className="text-center">
                <h2 className="font-semibold text-3xl text-blueDark">Nossos serviços</h2>
                <p className="font-medium text-lg text-gray-700">A Eletrotech oferece diversos serviços especializados, onde o foco é você!</p>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} />)}

            </div>
        </section>
    )
}

interface ServiceCardProps {
    title: string
    description: string
}

function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className="flex h-[300px] flex-col items-center gap-4 text-center text-blueDark">
            <ServiceIcon />
            <h4 className="text-2xl font-medium">{title}</h4>
            <p className="text-gray-700 text-lg">{description}</p>
        </div>
    )
}