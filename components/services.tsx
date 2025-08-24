"use client"

import { useState, useEffect, useRef } from "react"
import { Search, FileText, BarChart3, Zap, ArrowRight } from "lucide-react"

const services = [
	{
		title: "Keyword Research",
		description:
			"Discover high-converting keywords that drive targeted traffic to your website and boost your search rankings with advanced analytics and competitor analysis.",
		gradient: "from-amber-500 to-amber-600",
		borderGradient: "from-amber-400/30 to-amber-500/30",
		delay: "0ms",
		image: "/s3.jpg",
		features: [
			"Competitor Analysis",
			"Search Volume Data",
			"Long-tail Keywords",
			"Intent Mapping",
		],
		stats: "300+ Keywords",
	},
	{
		title: "On-Page Optimization",
		description:
			"Optimize your website content, meta tags, and structure for maximum search engine visibility and enhanced user experience across all devices.",
		gradient: "from-blue-500 to-blue-600",
		borderGradient: "from-blue-400/30 to-blue-500/30",
		delay: "200ms",
		image: "/s1.jpg",
		features: [
			"Meta Tag Optimization",
			"Content Structure",
			"Technical SEO",
			"Schema Markup",
		],
		stats: "95% Success Rate",
	},
	{
		title: "Monthly SEO Reports",
		description:
			"Get detailed analytics and insights on your SEO performance with actionable recommendations, growth tracking, and comprehensive reporting.",
		gradient: "from-amber-600 to-blue-600",
		borderGradient: "from-amber-400/30 to-blue-400/30",
		delay: "400ms",
		image: "/s2.jpg",
		features: ["Performance Tracking", "Ranking Analysis", "Growth Insights", "ROI Metrics"],
		stats: "24/7 Monitoring",
	},
]

export default function Services() {
	const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
	const [hoveredCard, setHoveredCard] = useState<number | null>(null)
	const sectionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						services.forEach((_, index) => {
							setTimeout(() => {
								setVisibleCards((prev) => {
									const newState = [...prev]
									newState[index] = true
									return newState
								})
							}, index * 200)
						})
					}
				})
			},
			{ threshold: 0.3 },
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative">
			
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-500/6 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/8 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
			
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-amber-400/20 mb-8 hover:bg-white/8 transition-all duration-300">
						<Zap className="w-5 h-5 text-amber-400" />
						<span className="text-amber-400 text-sm font-semibold tracking-wide">
							OUR SERVICES
						</span>
					</div>
					<h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
						<span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-white bg-clip-text text-transparent animate-gradient">
							Comprehensive SEO
						</span>
						<br />
						<span className="text-white">Solutions</span>
					</h2>
					<p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						Transform your digital presence with our data-driven SEO strategie
						designed to deliver{" "}
						<span className="text-amber-400 font-semibold">measurable results</span>{" "}
						and sustainable growth for your business.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-10">
					{services.map((service, index) => {
						const isVisible = visibleCards[index]
						const isHovered = hoveredCard === index

						return (
							<div
								key={index}
								className={`group relative transition-all duration-1000 ${
									isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
								}`}
								style={{ transitionDelay: service.delay }}
								onMouseEnter={() => setHoveredCard(index)}
								onMouseLeave={() => setHoveredCard(null)}
							>
							
								<div
									className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-25 transition-all duration-700 scale-105`}
								></div>
								<div
									className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-15 transition-all duration-700 scale-110`}
								></div>

								<div className="relative h-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 transition-all duration-700 group-hover:scale-105 group-hover:bg-white/10 hover:rotate-1 hover:shadow-2xl hover:shadow-amber-500/20 overflow-hidden will-change-transform">
								
									<div className="relative overflow-hidden rounded-t-3xl h-64">
										<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20"></div>
										<img
											src={service.image || "/placeholder.svg"}
											alt={service.title}
											className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 will-change-transform"
										/>

										
										<div className="absolute inset-0 z-30">
											
											<div className="absolute top-6 left-6 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20 text-sm text-white font-semibold">
												{service.stats}
											</div>

										
											<div className="absolute bottom-4 left-4 flex gap-2">
												{service.features.slice(0, 2).map((feature, idx) => (
													<div
														key={idx}
														className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-full border border-amber-400/30 text-xs text-amber-300 font-medium"
													>
														{feature}
													</div>
												))}
											</div>

											
											<div className="absolute top-4 left-4 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
											<div className="absolute top-8 left-8 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-2000"></div>
											<div className="absolute bottom-8 right-8 w-1 h-1 bg-amber-300 rounded-full animate-pulse animation-delay-4000"></div>
										</div>
									</div>

									
									<div className="p-8">
										<h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-500">
											{service.title}
										</h3>

										<p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
											{service.description}
										</p>

										
										<div className="space-y-3 mb-6">
											{service.features.map((feature, idx) => (
												<div key={idx} className="flex items-center gap-3 group/item">
													<div
														className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full group-hover/item:scale-125 transition-transform duration-300`}
													></div>
													<span className="text-sm text-gray-400 group-hover:text-gray-300 group-hover/item:text-amber-300 transition-colors duration-300">
														{feature}
													</span>
												</div>
											))}
										</div>
									</div>

									<div
										className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} transition-all duration-700 ${
											isHovered ? "w-full" : "w-0"
										}`}
									></div>

									<div className="absolute top-4 left-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									<div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

								
									<div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-amber-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
									<div className="absolute -bottom-2 -left-2 w-4 h-4 border border-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
