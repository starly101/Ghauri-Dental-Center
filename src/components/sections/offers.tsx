'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { currentOffers } from '@/lib/utils';

export function OffersSection() {
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
            Current Offers
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Limited-time deals for your smile
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentOffers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-2xl shadow-xl group hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
              <Calendar className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
              <p className="text-blue-100 mb-4">{offer.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-200">{offer.validUntil}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
