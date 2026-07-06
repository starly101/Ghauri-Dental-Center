'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { businessData } from '@/lib/utils';

export function ContactSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience premium dental care in DHA Lahore
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-amber-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-slate-300">{businessData.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-amber-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a href={`tel:${businessData.phone}`} className="text-slate-300 hover:text-white transition-colors">
                  {businessData.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-amber-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href={`mailto:${businessData.email}`} className="text-slate-300 hover:text-white transition-colors">
                  {businessData.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-amber-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-slate-300">{businessData.hours}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 text-slate-900"
          >
            <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="0300 1234567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Service Needed
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                  <option>Select a service</option>
                  <option>Consultation</option>
                  <option>Teeth Cleaning</option>
                  <option>Teeth Whitening</option>
                  <option>Braces</option>
                  <option>Implants</option>
                  <option>Emergency</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Request Appointment
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
