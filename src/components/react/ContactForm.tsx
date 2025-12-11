/**
 * Formulaire de contact React avec :
 * - Layout 2 colonnes sur tablet (champs gauche, photos+infos droite)
 * - Layout 1 colonne sur desktop large (garder l'ancien design)
 * - Validation en temps réel
 * - Messages d'erreur en français
 * - Animation de succès
 * - Protection anti-spam (honeypot)
 */
import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { siteConfig } from '@/data/siteConfig';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  photos?: FileList | null;
  rgpd: boolean;
  // Honeypot field (invisible)
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  rgpd?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    photos: null,
    rgpd: false,
    website: '', // Honeypot
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Validation en temps réel
  const validateField = (name: string, value: string | boolean): string | undefined => {
    switch (name) {
      case 'name':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) {
          return 'Le nom doit contenir au moins 2 caractères';
        }
        break;
      case 'email':
        if (!value || typeof value !== 'string') {
          return 'L\'email est requis';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Veuillez entrer un email valide';
        }
        break;
      case 'phone':
        if (!value || typeof value !== 'string') {
          return 'Le téléphone est requis';
        }
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
          return 'Veuillez entrer un numéro de téléphone valide';
        }
        break;
      case 'service':
        if (!value || value === '') {
          return 'Veuillez sélectionner un service';
        }
        break;
      case 'message':
        if (!value || (typeof value === 'string' && value.trim().length < 10)) {
          return 'Le message doit contenir au moins 10 caractères';
        }
        break;
      case 'rgpd':
        if (!value) {
          return 'Vous devez accepter la politique de confidentialité';
        }
        break;
    }
    return undefined;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Validate on change si le champ a déjà été touché
    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      photos: e.target.files,
    }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, newValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    newErrors.name = validateField('name', formData.name);
    newErrors.email = validateField('email', formData.email);
    newErrors.phone = validateField('phone', formData.phone);
    newErrors.service = validateField('service', formData.service);
    newErrors.message = validateField('message', formData.message);
    newErrors.rgpd = validateField('rgpd', formData.rgpd);

    setErrors(newErrors);

    // Marquer tous les champs comme touchés
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
      rgpd: true,
    });

    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Protection anti-spam : si honeypot rempli, ignorer
    if (formData.website) {
      console.log('Bot detected');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Récupération des variables d'environnement
      const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

      // Vérifier que les variables sont définies
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS credentials are missing. Please check your .env file.');
        throw new Error('Configuration EmailJS manquante');
      }

      // Préparer les données pour EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };

      // Envoi via EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');

      // Reset form après 3 secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          photos: null,
          rgpd: false,
          website: '',
        });
        setTouched({});
        setErrors({});
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      // Reset error après 5 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-accent/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50"
          >
            <div className="text-center text-white p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
              <p className="text-white/90">Nous vous recontacterons dans les 24h.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot field (hidden) */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          style={{ position: 'absolute', left: '-9999px' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Grid responsive : 2 colonnes sur tablet, 1 colonne sur petit mobile et desktop large */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {/* COLONNE GAUCHE : Champs du formulaire */}
          <div className="space-y-4 md:space-y-5">
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-primary mb-2">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                  errors.name && touched.name ? 'border-red-500' : 'border-neutral-cream'
                }`}
                placeholder="Jean Dupont"
              />
              <AnimatePresence>
                {errors.name && touched.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-primary mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                  errors.email && touched.email ? 'border-red-500' : 'border-neutral-cream'
                }`}
                placeholder="jean.dupont@exemple.fr"
              />
              <AnimatePresence>
                {errors.email && touched.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className="block text-xs md:text-sm font-semibold text-primary mb-2">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                  errors.phone && touched.phone ? 'border-red-500' : 'border-neutral-cream'
                }`}
                placeholder="06 12 34 56 78"
              />
              <AnimatePresence>
                {errors.phone && touched.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-xs md:text-sm font-semibold text-primary mb-2">
                Type de prestation <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                  errors.service && touched.service ? 'border-red-500' : 'border-neutral-cream'
                }`}
              >
                <option value="">Sélectionnez un service</option>
                <option value="elagage">Élagage d'arbres</option>
                <option value="abattage">Abattage sécurisé</option>
                <option value="dessouchage">Dessouchage</option>
                <option value="taille-haies">Taille de haies</option>
                <option value="elagage-fruitiers">Élagage fruitiers</option>
                <option value="entretien">Entretien annuel</option>
                <option value="autre">Autre / Devis personnalisé</option>
              </select>
              <AnimatePresence>
                {errors.service && touched.service && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.service}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-primary mb-2">
                Votre message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={4}
                className={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg text-sm md:text-base focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none ${
                  errors.message && touched.message ? 'border-red-500' : 'border-neutral-cream'
                }`}
                placeholder="Décrivez votre projet..."
              />
              <AnimatePresence>
                {errors.message && touched.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* COLONNE DROITE : Photos + Infos contact + Bouton + RGPD */}
          <div className="space-y-4 md:space-y-5">
            {/* Upload photos */}
            <div>
              <label htmlFor="photos" className="block text-xs md:text-sm font-semibold text-primary mb-2">
                Photos (optionnel)
              </label>
              <input
                type="file"
                id="photos"
                name="photos"
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-neutral-cream rounded-lg text-xs md:text-sm focus:ring-2 focus:ring-accent focus:border-transparent transition-colors file:mr-2 md:file:mr-4 file:py-1 md:file:py-2 file:px-2 md:file:px-4 file:rounded-full file:border-0 file:text-xs md:file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20"
              />
              <p className="text-xs text-neutral-gray mt-1">
                Ajoutez des photos pour un devis précis
              </p>
            </div>

            {/* Infos de contact */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-4 md:p-6 border border-primary/10">
              <h3 className="text-sm md:text-base font-bold text-primary mb-3 md:mb-4">Contactez-nous directement</h3>
              <div className="space-y-3">
                <a href={`tel:${siteConfig.business.phone}`} className="flex items-center gap-3 text-xs md:text-sm text-neutral-gray hover:text-accent transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span className="font-semibold">{siteConfig.business.phoneDisplay}</span>
                </a>
                <a href={`mailto:${siteConfig.business.email}`} className="flex items-center gap-3 text-xs md:text-sm text-neutral-gray hover:text-accent transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="break-all">{siteConfig.business.email}</span>
                </a>
                <div className="flex items-start gap-3 text-xs md:text-sm text-neutral-gray">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>
                    {siteConfig.business.address.street}<br/>
                    {siteConfig.business.address.postalCode} {siteConfig.business.address.city}
                  </span>
                </div>
              </div>
            </div>

            {/* RGPD */}
            <div>
              <label className="flex items-start gap-2 md:gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="rgpd"
                  checked={formData.rgpd}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 border-2 rounded focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                    errors.rgpd && touched.rgpd ? 'border-red-500' : 'border-neutral-cream'
                  }`}
                />
                <span className="text-xs md:text-sm text-neutral-gray">
                  J'accepte que mes données soient utilisées pour me recontacter.{' '}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <AnimatePresence>
                {errors.rgpd && touched.rgpd && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs mt-1 flex items-center gap-1 ml-6 md:ml-8"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.rgpd}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary justify-center text-sm md:text-lg py-3 md:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <span>Envoyer ma demande</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </button>

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-3 md:px-4 py-2 md:py-3 rounded-lg flex items-center gap-2 text-xs md:text-sm"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Une erreur est survenue. Veuillez réessayer.</span>
              </motion.div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
