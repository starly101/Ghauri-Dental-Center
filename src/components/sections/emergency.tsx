'use client';

import { motion } from 'framer-motion';
import { Phone, AlertTriangle, Clock } from 'lucide-react';
import { emergencyInfo, businessData } from '@/lib/utils';

export function EmergencySection() {
  if (!emergencyInfo.available) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-red-100 text-red-800 px-6 py-3 rounded-full mb-6">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-bold">24/7 Emergency Care</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Dental Emergency?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            We're here when you need us most
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <Clock className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Available Conditions
            </h3>
            <ul className="space-y-3">
              {emergencyInfo.conditions.map((condition) => (
                <li key={condition} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-slate-700">{condition}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-red-600 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center"
          >
            <Phone className="w-16 h-16 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Call Now</h3>
            <a
              href={`tel:${emergencyInfo.phone}`}
              className="text-4xl font-bold hover:text-red-200 transition-colors mb-2 block"
            >
              {emergencyInfo.phone}
            </a>
            <p className="text-red-200">Immediate assistance available</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
