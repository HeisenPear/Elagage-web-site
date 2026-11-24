/**
 * Formulaire « Être rappelé » : 4 champs utiles, envoi via EmailJS.
 * Pas de champ photo (EmailJS ne les transmettait pas) : les photos passent par SMS.
 * Anti-spam : champ piège (honeypot) invisible.
 */
import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { siteConfig } from '@/data/siteConfig';

const NEEDS = [
  'Élagage',
  'Abattage / démontage',
  'Urgence (arbre tombé, branche cassée)',
  'Dessouchage',
  'Taille de haies',
  'Arbres fruitiers',
  'Entretien de jardin',
  'Autre',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

const phoneOk = (v: string) => /^(?:(?:\+|00)33|0)[1-9](?:\d{2}){4}$/.test(v.replace(/[\s.-]/g, ''));

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return; // robot

    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const city = String(data.get('city') || '').trim();
    const need = String(data.get('need') || '');
    const message = String(data.get('message') || '').trim();

    const next: Record<string, string> = {};
    if (name.length < 2) next.name = 'Indiquez votre nom.';
    if (!phoneOk(phone)) next.phone = 'Numéro invalide (ex. 06 12 34 56 78).';
    if (city.length < 2) next.city = 'Indiquez votre commune.';
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus('sending');
    try {
      const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error('EmailJS non configuré');

      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          phone,
          email: 'non communiqué (demande de rappel)',
          service: need || 'Non précisé',
          message: `DEMANDE DE RAPPEL\nCommune : ${city}\nBesoin : ${need || 'Non précisé'}\n\n${message || '(pas de message)'}`,
        },
        publicKey,
      );
      setStatus('success');
      form.reset();
      window.dispatchEvent(new CustomEvent('lead:form-submit', { detail: { service: need } }));
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8" role="status">
        <p className="text-2xl font-bold text-forest mb-2">Demande envoyée, merci !</p>
        <p className="text-neutral-black/75 mb-5">Rudy vous rappelle dès que possible. C'est urgent ? Appelez directement :</p>
        <a href={`tel:${siteConfig.business.phone}`} data-cta="formulaire-merci" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-forest font-extrabold text-lg">
          {siteConfig.business.phoneDisplay}
        </a>
      </div>
    );
  }

  const field = 'w-full px-4 py-3 rounded-lg border bg-white text-base focus:outline-none focus:ring-2 focus:ring-forest/40';
  const label = 'block text-sm font-semibold text-forest mb-1.5';
  const err = (k: string) => (errors[k] ? <p className="text-red-700 text-sm mt-1">{errors[k]}</p> : null);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className={label}>Nom</label>
          <input id="cf-name" name="name" autoComplete="name" className={`${field} ${errors.name ? 'border-red-600' : 'border-neutral-300'}`} />
          {err('name')}
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>Téléphone</label>
          <input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="06 12 34 56 78" className={`${field} ${errors.phone ? 'border-red-600' : 'border-neutral-300'}`} />
          {err('phone')}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-city" className={label}>Commune</label>
          <input id="cf-city" name="city" autoComplete="address-level2" placeholder="ex. Saint-Avertin" className={`${field} ${errors.city ? 'border-red-600' : 'border-neutral-300'}`} />
          {err('city')}
        </div>
        <div>
          <label htmlFor="cf-need" className={label}>Votre besoin</label>
          <select id="cf-need" name="need" className={`${field} border-neutral-300`} defaultValue="">
            <option value="">Choisir (facultatif)</option>
            {NEEDS.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={label}>Quelques mots sur l'arbre <span className="font-normal text-neutral-gray">(facultatif)</span></label>
        <textarea id="cf-message" name="message" rows={3} placeholder="Essence, hauteur approximative, accès, urgence…" className={`${field} border-neutral-300 resize-none`} />
      </div>

      <button type="submit" disabled={status === 'sending'} className="w-full px-6 py-4 rounded-xl bg-forest text-white font-bold text-lg hover:bg-forest-700 disabled:opacity-60">
        {status === 'sending' ? 'Envoi…' : 'Être rappelé'}
      </button>

      {status === 'error' && (
        <p className="text-red-700 text-sm" role="alert">
          L'envoi n'a pas fonctionné. Appelez directement le{' '}
          <a href={`tel:${siteConfig.business.phone}`} className="font-bold underline">{siteConfig.business.phoneDisplay}</a>.
        </p>
      )}

      <p className="text-xs text-neutral-gray leading-relaxed">
        Vos coordonnées servent uniquement à vous rappeler au sujet de votre demande ; elles ne sont ni revendues ni utilisées à d'autres fins.{' '}
        <a href="/mentions-legales/#donnees" className="underline">En savoir plus</a>
      </p>
    </form>
  );
}
