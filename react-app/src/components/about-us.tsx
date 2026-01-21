import { motion } from "framer-motion";
import { MapPin, Users, Target, Award, Clock, Mail, Phone } from "lucide-react";

export function AboutUsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 h-full flex items-center justify-center text-center"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sobre KORT
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Una empresa nueva con grandes sueños, radicada en San Vicente
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Company Story */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KORT nace en San Vicente con la misión de transformar ideas en realidad. 
                Somos una empresa joven pero con la experiencia y pasión necesaria para llevar 
                proyectos al siguiente nivel.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aunque somos nuevos en el mercado, nuestro equipo cuenta con años de experiencia. Creemos en el poder de la 
                innovación y en crear soluciones que realmente impacten positivamente en nuestros clientes.
              </p>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Ubicados en San Vicente</h3>
            </div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Orgullosamente radicados en San Vicente, desde donde atendemos proyectos locales, llevando la excelencia tecnológica a cada rincón.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Phone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Teléfono</p>
                <p className="text-gray-600">+503 0000-0000</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Mail className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">info@kort.com</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Horario</p>
                <p className="text-gray-600">Lun-Vie 9:00-18:00</p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Misión",
                  description: "Transformar ideas en soluciones digitales innovadoras que impulsen el crecimiento de nuestros clientes.",
                  color: "blue"
                },
                {
                  icon: Users,
                  title: "Visión",
                  description: "Ser la empresa líder en soluciones digitales en San Vicente, reconocidos por nuestra calidad y creatividad.",
                  color: "purple"
                },
                {
                  icon: Award,
                  title: "Calidad",
                  description: "Compromiso absoluto con la excelencia en cada proyecto, entregando resultados que superen expectativas.",
                  color: "green"
                },
                {
                  icon: Clock,
                  title: "Innovación",
                  description: "Siempre a la vanguardia tecnológica, adoptando las últimas tendencias para ofrecer soluciones modernas.",
                  color: "orange"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 bg-${value.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Equipo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Un equipo apasionado de profesionales dedicados a crear experiencias digitales excepcionales.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Fundador 1",
                  role: "CEO & Desarrollador Principal",
                  description: "Experto en desarrollo web con más de 5 años de experiencia."
                },
                {
                  name: "Fundador 2", 
                  role: "Diseñador UX/UI",
                  description: "Especialista en crear experiencias de usuario intuitivas y atractivas."
                },
                {
                  name: "Fundador 3",
                  role: "Estratega Digital",
                  description: "Experto en marketing digital y estrategias de crecimiento."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos y descubre cómo podemos ayudarte a transformar tus ideas en realidad.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contactar Ahora
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsSection;
