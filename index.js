const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    let opacity = 1 - scrollY / (heroHeight / 1.5);
    if (opacity < 0) opacity = 0;
    document.documentElement.style.setProperty("--text-opacity", opacity);

    let overlayOpacity = 0.6 + (scrollY / heroHeight) * 0.4;
    if (overlayOpacity > 1) overlayOpacity = 1;
    document.documentElement.style.setProperty(
        "--overlay-opacity",
        overlayOpacity
    );
});

// Intersection Observer para fade-up
const fadeElements = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Evita reanimar si ya se mostró
            }
        });
    },
    { threshold: 0.2 }
);

fadeElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    fadeElements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach((card) => {
        const image = card.querySelector(".team-image");
        const description = card.querySelector(".team-description");

        image.addEventListener("click", () => {
            description.classList.toggle("active");
        });
    });
});


(function () {
  const translations = {
    es: {
      "nav.servicios": "Servicios",
      "nav.equipo": "Equipo",
      "nav.contacto": "Contacto",
      "hero.title": "NEGOCIOS SIN FRONTERAS",
      "hero.subtitle": "Consultoría en franquicias, empresas y negocios internacionales",
      "servicios.title": "Servicios",
      "servicios.oportunidades.title": "Evaluación de oportunidades",
      "servicios.oportunidades.text": "Asesoría para iniciar o expandir un negocio de franquicia.",
      "servicios.mercado.title": "Análisis de mercado",
      "servicios.mercado.text": "Identificamos tendencias y oportunidades clave en el sector franquicias.",
      "servicios.planes.title": "Planes de negocio",
      "servicios.planes.text": "Desarrollamos planes personalizados adaptados a cada emprendimiento.",
      "servicios.seleccion.title": "Selección de franquicias",
      "servicios.seleccion.text": "Asesoramos en la búsqueda y evaluación de franquicias ideales.",
      "servicios.legal.title": "Asesoría legal",
      "servicios.legal.text": "Redacción y negociación de contratos de franquicia.",
      "servicios.personalizados.title": "Servicios personalizados",
      "servicios.personalizados.text": "Ofrecemos acompañamiento integral en el proceso de franquiciamiento.",
      "servicios.formacion.title": "Formación y marca",
      "servicios.formacion.text": "Capacitación y desarrollo de contenido y estrategias de marca.",
      "equipo.title": "Nuestro Equipo",
      "team.valentina.name": "Valentina Iguri",
      "team.valentina.role": "Abogada Magister en Derecho y Negocios Internacionales",
      "team.valentina.desc": "Valentina lidera el área legal, con amplia experiencia en contratos internacionales y asesoramiento en franquicias. Su enfoque es garantizar seguridad jurídica y claridad en todos los procesos.",
      "team.tomas.name": "Tomas Aparicio",
      "team.tomas.role": "Analista en Sistemas",
      "team.tomas.desc": "Tomás aporta su experiencia en sistemas de información, enfocándose en el análisis y la optimización tecnológica de los procesos empresariales. Su labor es mejorar la eficiencia operativa mediante soluciones digitales y apoyar la toma de decisiones con herramientas basadas en datos.",
      "team.gonzalo.name": "Gonzalo Goyeneche",
      "team.gonzalo.role": "Especialista en Negocios y Marketing",
      "team.gonzalo.desc": "Gonzalo se encarga de diseñar estrategias de mercado y posicionamiento para franquicias, asegurando que cada marca logre crecer y consolidarse en el mercado global.",
      "team.francisco.name": "Francisco Ibarra",
      "team.francisco.role": "Gestion de Recursos",
      "team.francisco.desc": "Francisco se especializa en la gestión empresarial, aportando una visión integral en cada consultoría desde su formación avanzada en Administración de Empresas. Su enfoque está en optimizar recursos y acompañar a las empresas.",
      "contacto.title": "Contacto",
      "contacto.emailLabel": "Email",
      "contacto.email": "consultoraceyn@gmail.com",
      "contacto.phoneLabel": "Teléfonos",
      "contacto.phone": "+54 351-2008569\n+54 388-4788116",
      "contacto.addressLabel": "Direccion",
      "contacto.address": "San José 87 Tilcara Jujuy Argentina- cp.4624",
      "contacto.formTitle": "Envíanos un mensaje",
      "form.nameLabel": "Nombre",
      "form.emailLabel": "Correo electrónico",
      "form.messageLabel": "Mensaje",
      "form.submit": "Enviar",
      "footer": "© 2025 CEYN Consultoría. Todos los derechos reservados."
    },
    en: {
      "nav.servicios": "Services",
      "nav.equipo": "Team",
      "nav.contacto": "Contact",
      "hero.title": "BUSINESS WITHOUT BORDERS",
      "hero.subtitle": "Consulting on franchises, companies and international business",
      "servicios.title": "Services",
      "servicios.oportunidades.title": "Opportunity assessment",
      "servicios.oportunidades.text": "Advisory to start or expand a franchise business.",
      "servicios.mercado.title": "Market analysis",
      "servicios.mercado.text": "We identify trends and key opportunities in the franchise sector.",
      "servicios.planes.title": "Business plans",
      "servicios.planes.text": "We develop customized plans tailored to each venture.",
      "servicios.seleccion.title": "Franchise selection",
      "servicios.seleccion.text": "We advise on the search and evaluation of ideal franchises.",
      "servicios.legal.title": "Legal advisory",
      "servicios.legal.text": "Drafting and negotiation of franchise contracts.",
      "servicios.personalizados.title": "Personalized services",
      "servicios.personalizados.text": "We offer full support in the franchising process.",
      "servicios.formacion.title": "Training & branding",
      "servicios.formacion.text": "Training and development of content and branding strategies.",
      "equipo.title": "Our Team",
      "team.valentina.name": "Valentina Iguri",
      "team.valentina.role": "Lawyer, Master in Law and International Business",
      "team.valentina.desc": "Valentina leads the legal area, with extensive experience in international contracts and franchise advisory. Her focus is to ensure legal security and clarity in all processes.",
      "team.tomas.name": "Tomas Aparicio",
      "team.tomas.role": "Systems Analyst",
      "team.tomas.desc": "Tomas contributes his experience in information systems, focusing on analysis and technological optimization of business processes.",
      "team.gonzalo.name": "Gonzalo Goyeneche",
      "team.gonzalo.role": "Business & Marketing Specialist",
      "team.gonzalo.desc": "Gonzalo designs market strategies and positioning for franchises, ensuring each brand grows and consolidates internationally.",
      "team.francisco.name": "Francisco Ibarra",
      "team.francisco.role": "Resource Management",
      "team.francisco.desc": "Francisco specializes in business management, providing an integral view in each consultancy and focusing on resource optimization.",
      "contacto.title": "Contact",
      "contacto.emailLabel": "Email",
      "contacto.email": "consultoraceyn@gmail.com",
      "contacto.phoneLabel": "Phones",
      "contacto.phone": "+54 351-2008569\n+54 388-4788116",
      "contacto.addressLabel": "Address",
      "contacto.address": "San José 87 Tilcara Jujuy Argentina - cp.4624",
      "contacto.formTitle": "Send us a message",
      "form.nameLabel": "Name",
      "form.emailLabel": "Email",
      "form.messageLabel": "Message",
      "form.submit": "Send",
      "footer": "© 2025 CEYN Consulting. All rights reserved."
    }
  };

  const LANG_KEY = 'ceyn_lang';
  const defaultLang = 'es';

  function applyTranslations(lang) {
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      const txt = (translations[lang] && translations[lang][key]) || '';
      // preserve inner HTML vs text nodes: if contains <br> or HTML, set innerHTML; else textContent.
      if (/<[a-z][\s\S]*>/i.test(txt)) {
        node.innerHTML = txt;
      } else {
        // handle newlines in translations for <p> or similar
        if (node.tagName === 'P' || node.tagName === 'DIV') {
          node.textContent = txt;
        } else {
          node.textContent = txt;
        }
      }
    });

    // Update dropdown button label (short)
    const langButton = document.getElementById('langButton');
    if (langButton) langButton.textContent = (lang === 'es') ? 'ES' : 'EN';
  }

  function initLanguageSwitcher() {
    const saved = localStorage.getItem(LANG_KEY) || defaultLang;
    applyTranslations(saved);

    // init dropdown options
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const chosen = btn.getAttribute('data-lang') || defaultLang;
        localStorage.setItem(LANG_KEY, chosen);
        applyTranslations(chosen);
        // close dropdown (Bootstrap)
        const dropdown = bootstrap.Dropdown.getInstance(document.getElementById('langButton'));
        if (dropdown) dropdown.hide();
      });
    });
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();

