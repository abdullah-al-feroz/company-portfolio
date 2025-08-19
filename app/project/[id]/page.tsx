"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Star,
    Calendar,
    Users,
    Code,
    Zap,
    CheckCircle,
    Play,
    Award,
    TrendingUp,
    Shield,
    Smartphone,
    Monitor,
    Tablet,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const portfolioItems = [
    {
        id: 1,
        title: "EcoTrack - Sustainability Platform",
        category: "Web Apps",
        description:
            "A comprehensive platform for tracking and managing environmental impact with real-time analytics and reporting.",
        longDescription:
            "EcoTrack revolutionizes how organizations monitor and reduce their environmental footprint. Built with cutting-edge technology, this platform provides real-time insights into carbon emissions, waste management, and sustainability metrics. The intuitive dashboard allows teams to collaborate effectively while tracking progress toward environmental goals.",
        image: "/portfolio-ecotrack.png",
        technologies: ["React", "Node.js", "MongoDB", "D3.js", "AWS"],
        features: ["Real-time Analytics", "Carbon Footprint Tracking", "Team Collaboration", "Custom Reports"],
        stats: { users: "10K+", rating: 4.9, duration: "6 months" },
        links: { live: "#", github: "#" },
        color: "from-green-500 to-emerald-600",
        gallery: [
            "/placeholder.svg?height=400&width=600&text=Dashboard+Overview",
            "/placeholder.svg?height=400&width=600&text=Analytics+Charts",
            "/placeholder.svg?height=400&width=600&text=Team+Collaboration",
            "/placeholder.svg?height=400&width=600&text=Mobile+Interface",
        ],
        challenges: [
            "Real-time data processing from multiple sources",
            "Complex analytics visualization",
            "Multi-tenant architecture design",
        ],
        solutions: [
            "Implemented WebSocket connections for live updates",
            "Created custom D3.js visualizations",
            "Built scalable microservices architecture",
        ],
        testimonial: {
            text: "EcoTrack transformed how we approach sustainability. The real-time insights helped us reduce our carbon footprint by 30% in just 6 months.",
            author: "Sarah Johnson",
            role: "Sustainability Director",
            company: "GreenTech Corp",
        },
    },
    {
        id: 2,
        title: "FinanceFlow - Banking App",
        category: "Mobile Apps",
        description: "Modern mobile banking application with advanced security features and intuitive user experience.",
        longDescription:
            "FinanceFlow redefines mobile banking with state-of-the-art security and user-centric design. Featuring biometric authentication, real-time transaction monitoring, and AI-powered financial insights, this app provides a seamless banking experience while maintaining the highest security standards.",
        image: "/portfolio-financeflow.png",
        technologies: ["React Native", "TypeScript", "Firebase", "Stripe", "Biometrics"],
        features: ["Biometric Auth", "Real-time Transactions", "Budget Planning", "Investment Tracking"],
        stats: { users: "50K+", rating: 4.8, duration: "8 months" },
        links: { live: "#", github: "#" },
        color: "from-blue-500 to-indigo-600",
        gallery: [
            "/placeholder.svg?height=400&width=600&text=Login+Screen",
            "/placeholder.svg?height=400&width=600&text=Dashboard+View",
            "/placeholder.svg?height=400&width=600&text=Transaction+History",
            "/placeholder.svg?height=400&width=600&text=Budget+Planning",
        ],
        challenges: [
            "Implementing bank-grade security",
            "Cross-platform performance optimization",
            "Complex financial calculations",
        ],
        solutions: [
            "Integrated multiple biometric authentication methods",
            "Optimized React Native performance",
            "Built robust financial calculation engine",
        ],
        testimonial: {
            text: "The most intuitive banking app I've ever used. The biometric security gives me peace of mind while the interface makes banking effortless.",
            author: "Michael Chen",
            role: "Product Manager",
            company: "TechStart Inc",
        },
    },
    {
        id: 3,
        title: "ShopSphere - E-commerce Platform",
        category: "E-commerce",
        description: "Full-featured e-commerce platform with AI-powered recommendations and seamless checkout experience.",
        longDescription:
            "ShopSphere delivers a next-generation e-commerce experience powered by artificial intelligence. The platform features intelligent product recommendations, streamlined checkout processes, and comprehensive analytics for merchants. Built for scale, it handles high-traffic scenarios while maintaining optimal performance.",
        image: "/portfolio-shopsphere.png",
        technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Redis"],
        features: ["AI Recommendations", "Multi-vendor Support", "Advanced Search", "Analytics Dashboard"],
        stats: { users: "25K+", rating: 4.7, duration: "10 months" },
        links: { live: "#", github: "#" },
        color: "from-purple-500 to-pink-600",
        gallery: [
            "/placeholder.svg?height=400&width=600&text=Product+Catalog",
            "/placeholder.svg?height=400&width=600&text=Shopping+Cart",
            "/placeholder.svg?height=400&width=600&text=Checkout+Process",
            "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
        ],
        challenges: [
            "AI recommendation algorithm implementation",
            "High-performance search functionality",
            "Multi-vendor payment processing",
        ],
        solutions: [
            "Developed machine learning recommendation engine",
            "Implemented Elasticsearch for fast search",
            "Created flexible payment routing system",
        ],
        testimonial: {
            text: "ShopSphere increased our conversion rate by 45%. The AI recommendations are incredibly accurate and the checkout process is seamless.",
            author: "Emma Rodriguez",
            role: "E-commerce Director",
            company: "Fashion Forward",
        },
    },
    {
        id: 4,
        title: "CloudSync - File Management",
        category: "SaaS",
        description: "Enterprise-grade file management and collaboration platform with advanced sharing capabilities.",
        longDescription:
            "CloudSync transforms how teams collaborate on files and documents. With real-time synchronization, version control, and advanced permission management, it provides enterprise-grade security while maintaining ease of use. The platform supports seamless integration with existing workflows.",
        image: "/portfolio-cloudsync.png",
        technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3", "WebRTC"],
        features: ["Real-time Collaboration", "Version Control", "Advanced Permissions", "Video Calls"],
        stats: { users: "15K+", rating: 4.9, duration: "7 months" },
        links: { live: "#", github: "#" },
        color: "from-cyan-500 to-blue-600",
        gallery: [
            "/placeholder.svg?height=400&width=600&text=File+Browser",
            "/placeholder.svg?height=400&width=600&text=Collaboration+View",
            "/placeholder.svg?height=400&width=600&text=Version+History",
            "/placeholder.svg?height=400&width=600&text=Video+Conference",
        ],
        challenges: ["Real-time file synchronization", "Complex permission system", "WebRTC video integration"],
        solutions: [
            "Built custom sync protocol with conflict resolution",
            "Designed hierarchical permission system",
            "Integrated WebRTC for seamless video calls",
        ],
        testimonial: {
            text: "CloudSync revolutionized our remote work capabilities. The real-time collaboration features are game-changing for our distributed team.",
            author: "David Park",
            role: "CTO",
            company: "InnovateLab",
        },
    },
    {
        id: 5,
        title: "MindAI - Chatbot Platform",
        category: "AI/ML",
        description: "Intelligent chatbot platform powered by advanced AI for customer service automation.",
        longDescription:
            "MindAI leverages cutting-edge artificial intelligence to create sophisticated chatbots that understand context and provide human-like interactions. The platform supports multiple languages, custom training, and seamless integration with existing customer service workflows.",
        image: "/portfolio-mindai.png",
        technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
        features: ["Natural Language Processing", "Multi-language Support", "Analytics", "Custom Training"],
        stats: { users: "5K+", rating: 4.8, duration: "9 months" },
        links: { live: "#", github: "#" },
        color: "from-orange-500 to-red-600",
        gallery: [
            "/placeholder.svg?height=400&width=600&text=Chat+Interface",
            "/placeholder.svg?height=400&width=600&text=Training+Dashboard",
            "/placeholder.svg?height=400&width=600&text=Analytics+View",
            "/placeholder.svg?height=400&width=600&text=Integration+Setup",
        ],
        challenges: ["Natural language understanding", "Multi-language support", "Context-aware responses"],
        solutions: [
            "Implemented advanced NLP models",
            "Built multilingual training pipeline",
            "Created context-aware conversation engine",
        ],
        testimonial: {
            text: "MindAI reduced our customer service response time by 80%. The AI understands context better than any chatbot we've used before.",
            author: "Lisa Thompson",
            role: "Customer Success Manager",
            company: "ServicePro",
        },
    },
    {
        id: 6,
        title: "HealthHub - Medical Platform",
        category: "Web Apps",
        description: "Comprehensive healthcare management system for patients and medical professionals.",
        longDescription:
            "HealthHub streamlines healthcare delivery with a comprehensive platform that connects patients, doctors, and healthcare providers. Featuring telemedicine capabilities, electronic health records, and appointment management, it improves healthcare accessibility while maintaining HIPAA compliance.",
        image: "/portfolio-healthhub.png",
        technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
        features: ["Appointment Scheduling", "Medical Records", "Telemedicine", "Prescription Management"],
        stats: { users: "30K+", rating: 4.9, duration: "12 months" },
        links: { live: "#", github: "#" },
        color: "from-teal-500 to-green-600",
        gallery: [
            "/placeholder.svg?height=400&width=600&text=Patient+Dashboard",
            "/placeholder.svg?height=400&width=600&text=Doctor+Interface",
            "/placeholder.svg?height=400&width=600&text=Video+Consultation",
            "/placeholder.svg?height=400&width=600&text=Medical+Records",
        ],
        challenges: ["HIPAA compliance requirements", "Real-time video consultations", "Complex medical data management"],
        solutions: [
            "Implemented end-to-end encryption",
            "Built secure video consultation system",
            "Created comprehensive EHR system",
        ],
        testimonial: {
            text: "HealthHub made healthcare accessible during the pandemic. The telemedicine features are incredibly reliable and user-friendly.",
            author: "Dr. James Wilson",
            role: "Chief Medical Officer",
            company: "Metro Health System",
        },
    },
]

export default function ProjectDetails({ params }: { params: { id: string } }) {
    const projectId = Number.parseInt(params.id)
    const project = portfolioItems.find((item) => item.id === projectId)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Header */}
            <motion.header
                className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                        <Link href="/#portfolio">
                            <motion.div
                                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
                                whileHover={{ x: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span className="font-medium">Back to Portfolio</span>
                            </motion.div>
                        </Link>

                        <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 xs:gap-4 w-full sm:w-auto">
                            <motion.a
                                href={project.links.live}
                                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                            </motion.a>
                            <motion.a
                                href={project.links.github}
                                className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-4 h-4" />
                                <span>GitHub</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.header>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="mb-4 sm:mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Badge
                            variant="outline"
                            className={`px-3 sm:px-4 py-1 sm:py-2 text-transparent bg-clip-text bg-gradient-to-r ${project.color} border-purple-200 bg-purple-50 text-sm sm:text-base`}
                        >
                            {project.category}
                        </Badge>
                    </motion.div>

                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {project.longDescription}
                    </motion.p>

                    <motion.div
                        className="flex flex-col xs:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2 sm:bg-transparent sm:backdrop-blur-none">
                            <Users className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                            <span className="font-semibold text-sm sm:text-base">{project.stats.users}</span>
                            <span className="text-sm sm:text-base">Users</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2 sm:bg-transparent sm:backdrop-blur-none">
                            <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500" />
                            <span className="font-semibold text-sm sm:text-base">{project.stats.rating}</span>
                            <span className="text-sm sm:text-base">Rating</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2 sm:bg-transparent sm:backdrop-blur-none">
                            <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                            <span className="font-semibold text-sm sm:text-base">{project.stats.duration}</span>
                            <span className="text-sm sm:text-base">Duration</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Image */}
                <motion.div
                    className="mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                        <motion.div
                            className={`h-1 sm:h-2 bg-gradient-to-r ${project.color}`}
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        />
                        <Image
                            src={`/placeholder-rbky2.png?key=s2408&height=600&width=1200&text=${encodeURIComponent(project.title + " - Main Interface")}`}
                            alt={project.title}
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8 sm:space-y-12">
                        {/* Technologies */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3">
                                <Code className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
                                <span>Technologies Used</span>
                            </h2>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {project.technologies.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${project.color} text-white rounded-full font-medium shadow-lg text-sm sm:text-base`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.section>

                        {/* Features */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3">
                                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
                                <span>Key Features</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        className="flex items-center space-x-3 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0" />
                                        <span className="font-medium text-gray-800 text-sm sm:text-base">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Challenges & Solutions */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3">
                                <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
                                <span>Challenges & Solutions</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <Card className="border-0 shadow-lg bg-red-50/50">
                                    <CardContent className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3 sm:mb-4">Challenges</h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {project.challenges.map((challenge, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start space-x-2 text-gray-700 text-sm sm:text-base"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                                >
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                                    <span>{challenge}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-lg bg-green-50/50">
                                    <CardContent className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-3 sm:mb-4">Solutions</h3>
                                        <ul className="space-y-2 sm:space-y-3">
                                            {project.solutions.map((solution, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start space-x-2 text-gray-700 text-sm sm:text-base"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                                >
                                                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span>{solution}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.section>
                    </div>

                    <div className="space-y-6 sm:space-y-8 order-first lg:order-last">
                        {/* Project Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Project Info</h3>
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 text-sm sm:text-base">Category</span>
                                            <Badge variant="secondary" className="text-xs sm:text-sm">
                                                {project.category}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 text-sm sm:text-base">Duration</span>
                                            <span className="font-medium text-sm sm:text-base">{project.stats.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 text-sm sm:text-base">Users</span>
                                            <span className="font-medium text-sm sm:text-base">{project.stats.users}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 text-sm sm:text-base">Rating</span>
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 fill-current" />
                                                <span className="font-medium text-sm sm:text-base">{project.stats.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Responsive Preview */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Responsive Design</h3>
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                                            <Monitor className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                                            <span className="text-gray-700 text-sm sm:text-base">Desktop Optimized</span>
                                        </div>
                                        <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                                            <Tablet className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                                            <span className="text-gray-700 text-sm sm:text-base">Tablet Friendly</span>
                                        </div>
                                        <div className="flex items-center space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                                            <Smartphone className="w-4 sm:w-5 h-4 sm:h-5 text-purple-500" />
                                            <span className="text-gray-700 text-sm sm:text-base">Mobile Ready</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* Gallery */}
                <motion.section
                    className="mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-3">
                        <Play className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
                        <span>Project Gallery</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {project.gallery.map((image, index) => (
                            <motion.div
                                key={index}
                                className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Testimonial */}
                <motion.section
                    className="mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="border-0 shadow-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                        <CardContent className="p-6 sm:p-8 md:p-12 relative">
                            <motion.div
                                className="absolute top-4 right-4"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                                <Award className="w-8 sm:w-12 h-8 sm:h-12 opacity-20" />
                            </motion.div>

                            <div className="relative z-10">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-3">
                                    <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />
                                    <span>Client Testimonial</span>
                                </h2>
                                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 leading-relaxed">
                                    "{project.testimonial.text}"
                                </blockquote>
                                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4">
                                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-base sm:text-lg font-bold">{project.testimonial.author.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm sm:text-base">{project.testimonial.author}</div>
                                        <div className="opacity-90 text-sm sm:text-base">{project.testimonial.role}</div>
                                        <div className="opacity-75 text-xs sm:text-sm">{project.testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>

                {/* CTA */}
                <motion.section
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                        <CardContent className="p-6 sm:p-8 md:p-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                                Let's discuss how we can bring your vision to life with innovative solutions and cutting-edge
                                technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <Link href="/#contact">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                        <Button
                                            size="lg"
                                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                                        >
                                            <Zap className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                                            Get Started Today
                                        </Button>
                                    </motion.div>
                                </Link>
                                <Link href="/#portfolio">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent w-full sm:w-auto"
                                        >
                                            View More Projects
                                        </Button>
                                    </motion.div>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>
            </div>
        </div>
    )
}
