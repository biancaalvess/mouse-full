import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react'

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-gradient-to-b from-[#001524] to-[#002538]">
        <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">TechMouse</h3>
                <p className="text-sm text-gray-400">
                Revolucionando a experiência gaming com tecnologia de ponta e design inovador.
                </p>
                <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                </Link>
                </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Produtos</h3>
                <ul className="space-y-2 text-sm">
                <li>
                    <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    TechMouse PRO X9000
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    TechMouse ELITE X700
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    TechMouse ULTRA X500
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    Acessórios Gaming
                    </Link>
                </li>
                </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Suporte</h3>
                <ul className="space-y-2 text-sm">
                <li>
                    <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    Central de Ajuda
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    Garantia
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    Downloads
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    Contato
                    </Link>
                </li>
                </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Newsletter</h3>
                <p className="text-sm text-gray-400">
                Inscreva-se para receber novidades e ofertas exclusivas
                </p>
                <div className="flex">
                <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full rounded-l-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-[#00E1FF] focus:outline-none focus:ring-1 focus:ring-[#00E1FF]"
                />
                <button className="rounded-r-md bg-[#00E1FF] px-4 py-2 text-black hover:bg-[#00B2CC] transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Inscrever-se</span>
                </button>
                </div>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <p className="text-sm text-gray-400">
                © 2024 TechMouse. Todos os direitos reservados. - Desenvolvido por Bianca Alves.
                </p>
                <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    Política de Privacidade
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#00E1FF] transition-colors">
                    Termos de Uso
                </Link>
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
}
