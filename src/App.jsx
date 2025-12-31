import React from "react"
import "./App.css"

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo and Tagline Section */}
            <div className="logo-section">
              <a href="#accueil" className="logo-link">
                <img 
                  src="/savedu-logo.png" 
                  alt="SAVEDU PARTNERS - Agence Éducative Burkina Faso"
                  className="logo-image-large"
                />
              </a>
              <p className="tagline">AGENCE ÉDUCATIVE BURKINA FASO</p>
            </div>
            
            {/* Navigation Below Logo & Tagline */}
            <div className="nav-section">
              <nav className="nav">
                <a href="#accueil" className="nav-link">ACCUEIL</a>
                <a href="#services" className="nav-link">SERVICES</a>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with NEW BACKGROUND */}
      <section className="hero-dark" id="accueil">
        <div className="container">
          <h1 className="hero-title-dark">
            Votre Excellence Académique <span className="highlight-gold">Commence avec SAVEDU</span>
          </h1>
          <p className="hero-text-dark">
            Accompagnement personnalisé pour vos études à l'étranger. 
            Nos experts locaux vous guident vers les meilleures universités 
            avec des bourses et une assistance visa garantie.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Nos Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>🎓 Orientation Universitaire</h3>
              <p>Conseils personnalisés pour choisir la meilleure filière</p>
            </div>
            <div className="service-card">
              <h3>💰 Bourses d'Études</h3>
              <p>Recherche de financement complet pour vos études</p>
            </div>
            <div className="service-card">
              <h3>🛂 Assistance Visa</h3>
              <p>Support complet pour l'obtention du visa étudiant</p>
            </div>
            <div className="service-card">
              <h3>🌍 Partenariats Internationaux</h3>
              <p>Réseau d'universités partenaires à travers le monde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Témoignages d'Étudiants</h2>
          <p className="section-subtitle">
            Ce que disent nos étudiants placés à l'étranger
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Grâce à SAVEDU, j'ai obtenu une bourse en France. 
                L'accompagnement était personnalisé et professionnel."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <h4>Amadou K.</h4>
                  <p>Master en Informatique, Paris</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"L'équipe SAVEDU m'a aidé avec mon visa pour le Canada. 
                Sans eux, je n'aurais jamais réussi seul."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">F</div>
                <div className="author-info">
                  <h4>Fatimata S.</h4>
                  <p>Baccalauréat, Montréal</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Orientation parfaite pour choisir ma filière. 
                Maintenant je fais mes rêves aux États-Unis!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">B</div>
                <div className="author-info">
                  <h4>Boubacar T.</h4>
                  <p>Ingénieur Civil, New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à Construire Votre Avenir International?</h2>
            <p className="cta-text">
              Réservez votre consultation gratuite avec un de nos experts.
              Discutons de votre projet d'études à l'étranger.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/+22670123456"
                className="btn cta-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Contactez SAVEDU</h2>
          <div className="contact-info">
            <p><strong>📍 Adresse:</strong> Ouagadougou, Burkina Faso</p>
            <p><strong>📞 Téléphone:</strong> +226 70 12 34 56</p>
            <p><strong>📧 Email:</strong> contact@savedu.bf</p>
            <p><strong>🕒 Horaires:</strong> Lundi-Vendredi, 8h-18h</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">SAVEDU</h3>
              <p className="footer-tagline">Éducation sans frontières</p>
              <p className="footer-description">
                Votre partenaire de confiance pour l'excellence éducative internationale.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Liens Rapides</h4>
              <ul className="footer-links">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li>📍 Ouagadougou, Burkina Faso</li>
                <li>📞 +226 70 12 34 56</li>
                <li>📧 contact@savedu.bf</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Suivez-nous</h4>
              <div className="footer-social">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 SAVEDU - Agence Éducative Burkina Faso. Tous droits réservés.</p>
            <p className="footer-legal">
              <a href="#">Politique de confidentialité</a> | 
              <a href="#"> Conditions d'utilisation</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/+22670123456"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </div>
  )
}

export default App