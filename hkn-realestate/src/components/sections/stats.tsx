"use client"

import StatsCounter from "../ui/stats-counter"

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-2">
            <StatsCounter end={500} suffix="+" />
            <p className="text-red-100">Properties Sold</p>
          </div>
          <div className="space-y-2">
            <StatsCounter end={1200} suffix="+" />
            <p className="text-red-100">Happy Clients</p>
          </div>
          <div className="space-y-2">
            <StatsCounter end={15} />
            <p className="text-red-100">Years Experience</p>
          </div>
          <div className="space-y-2">
            <StatsCounter end={50} suffix="+" />
            <p className="text-red-100">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  )
}
