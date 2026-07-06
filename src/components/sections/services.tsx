'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/utils';

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Premium Dental Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Advanced treatments with compassionate care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular
                  ? 'border-blue-900 bg-blue-50 hover:bg-blue-100'
                  : 'border-slate-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-900">
                  {service.price}
                </span>
                {service.popular && (
                  <span className="px-3 py-1 bg-blue-900 text-white text-sm rounded-full">
                    Popular
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
