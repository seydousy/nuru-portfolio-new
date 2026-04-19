import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.education": "Formation",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Bonjour, je suis",
    "hero.title": "Ingénieur Data & IA",
    "hero.description": "Étudiant en Master Ingénierie des Données et Intelligence Artificielle, passionné par le développement de solutions innovantes basées sur l'IA et l'analyse de données.",
    "hero.cta": "Me Contacter",
    "hero.projects": "Voir mes projets",
    "hero.downloadCV": "Télécharger CV",
    
    // About
    "about.title": "À Propos de Moi",
    "about.intro": "Passionné par l'intelligence artificielle et l'ingénierie des données",
    "about.p1": "Je suis actuellement étudiant en Master Ingénierie des Données et Intelligence Artificielle, avec une solide formation en génie logiciel obtenue lors de ma licence.",
    "about.p2": "Mon parcours m'a permis de développer une expertise technique approfondie en Machine Learning, Deep Learning, et en développement d'applications web modernes. Je suis particulièrement intéressé par les solutions qui combinent IA et Big Data pour résoudre des problèmes concrets.",
    "about.p3": "Toujours à la recherche de nouveaux défis, je m'efforce de rester à jour avec les dernières technologies et méthodologies du domaine.",
    "about.highlight1.title": "Intelligence Artificielle",
    "about.highlight1.description": "Spécialisation en Machine Learning et Deep Learning",
    "about.highlight2.title": "Ingénierie des Données",
    "about.highlight2.description": "Expertise en Big Data et pipelines de données",
    "about.highlight3.title": "Génie Logiciel",
    "about.highlight3.description": "Solide formation en développement logiciel",
    
    // Education
    "education.title": "Formation Académique",
    
    // Skills
    "skills.title": "Compétences Techniques",
    "skills.ai": "Intelligence Artificielle",
    "skills.data": "Data Engineering",
    "skills.web": "Développement Web",
    "skills.database": "Bases de Données",
    "skills.tools": "Outils & DevOps",
    "skills.soft": "Soft Skills",
    
    // Experience
    "experience.title": "Expérience Professionnelle",
    
    // Projects
    "projects.title": "Projets",
    "projects.subtitle": "Découvrez mes réalisations en Intelligence Artificielle et développement",
    "projects.filterAll": "Tous",
    "projects.filterAI": "Intelligence Artificielle",
    "projects.filterWeb": "Développement Web",
    "projects.filterData": "Data Science",
    "projects.details": "Détails",
    "projects.github": "GitHub",
    "projects.demo": "Démo",
    "project1.title": "Classification d'Images avec PyTorch et Flask",
    "project1.description": "Ce projet utilise un réseau de neurones convolutifs (CNN) pour classifier des images du dataset CIFAR-10 en 10 catégories différentes.",
    "project1.detailedDescription": "Ce projet utilise un réseau de neurones convolutifs (CNN) pour classifier des images du dataset CIFAR-10 en 10 catégories différentes : avion, voiture, oiseau, chat, cerf, chien, grenouille, cheval, bateau et camion.\n\nL'objectif est de développer un modèle d'intelligence artificielle capable de reconnaître automatiquement les objets dans une image et d'afficher la prédiction avec un score de confiance.\n\nL'application web est construite avec Flask, permettant aux utilisateurs d'uploader une image et d'obtenir une classification en temps réel.\n\nCas d'usage : Ce type de modèle est utilisé dans la reconnaissance d'images, les voitures autonomes et les systèmes de surveillance.",
    "project2.title": "AfrikaEnergyPredict",
    "project2.description": "Modélisation et prédiction de la demande énergétique dans les pays africains",
    "project2.detailedDescription": "Ce projet vise à modéliser et prédire la demande énergétique dans différents pays africains en utilisant des données démographiques, économiques et géographiques.\n\nGrâce à un modèle de Gradient Boosting, nous identifions les régions prioritaires pour l'installation d'infrastructures solaires et aidons à la planification énergétique durable.\n\nCette approche permet aux décideurs d'allouer plus efficacement les ressources énergétiques et d'anticiper les besoins futurs.\n\nImpact : Renforcer l'accès à une énergie fiable en Afrique, soutenir le développement durable et améliorer la résilience énergétique des populations.",
    "project3.title": "Reconnaissance Faciale MLP",
    "project3.description": "Système de reconnaissance faciale utilisant un réseau de neurones MLP",
    "project3.detailedDescription": "Ce système utilise un réseau de neurones MLP (Perceptron Multi-Couches) pour reconnaître des visages humains à partir de photos, sans utiliser de réseaux convolutifs (CNN). Il a été entraîné sur une version filtrée du dataset LFW (Labeled Faces in the Wild).\n\nLe modèle est capable d'identifier 5 personnes célèbres, choisies car elles sont les plus représentées dans le dataset :\n- George W. Bush\n- Colin Powell\n- Donald Rumsfeld\n- Tony Blair\n- Gerhard Schröder",
    "project4.title": "Classification d'Images Satellitaires",
    "project4.description": "Classification automatique d'images satellitaires en types d'occupation des sols",
    "project4.detailedDescription": "Ce projet repose sur l'utilisation d'un modèle d'apprentissage profond entraîné sur le dataset EuroSAT, qui contient des images satellitaires Sentinel-2 classées en 10 types d'occupation des sols :\n\n- Cultures annuelles\n- Forêt\n- Végétation herbacée\n- Autoroute\n- Pâturage\n- Cultures permanentes\n- Zones résidentielles\n- Rivières\n- Mers/Lacs\n- Zones industrielles\n\nL'objectif est de détecter automatiquement le type de terrain à partir d'une image satellite, ce qui peut être utile pour :\n\n- L'agriculture intelligente (suivi des cultures et de la déforestation)\n- L'urbanisme et la cartographie (planification des villes, aménagement du territoire)\n- La gestion des ressources naturelles (surveillance des zones protégées, gestion des cours d'eau)\n\nL'application permet d'uploader une image satellite, et le modèle prédit la catégorie correspondante avec un pourcentage de confiance.",
    "project5.title": "Prédicteur de Prix d'Ordinateurs Portables",
    "project5.description": "Application web pour estimer le prix des ordinateurs portables avec IA",
    "project5.detailedDescription": "Cette application web intelligente développée avec Streamlit utilise des algorithmes d'intelligence artificielle pour estimer avec précision le prix d'un ordinateur portable en fonction de ses caractéristiques techniques.\n\nLes utilisateurs peuvent obtenir une estimation fiable du prix d'un laptop en quelques secondes, simplement en renseignant ses spécifications techniques.\n\nLe modèle analyse plus de 15 caractéristiques (marque, processeur, RAM, stockage, etc.) et affiche les résultats des prix en Euros.\n\n**Technologies utilisées**\n- Streamlit pour l'interface utilisateur interactive\n- Python et Scikit-learn pour les modèles de machine learning\n- Pandas & NumPy pour la manipulation des données\n- Plotly pour les visualisations interactives\n\n**Objectifs du projet**\n- Fournir aux consommateurs un outil fiable pour estimer la valeur marchande d'un ordinateur portable\n- Permettre aux utilisateurs de comprendre quelles caractéristiques influencent le plus le prix\n- Offrir une interface simple et intuitive accessible à tous les utilisateurs\n- Atteindre un niveau de précision élevé (>87%) dans les prédictions de prix\n\nImpact : Aide à la décision pour les consommateurs et transparence du marché des ordinateurs portables.",
    "project6.title": "Système de Détection de Fraudes",
    "project6.description": "Modèle ML pour la détection automatique de transactions frauduleuses",
    "project6.detailedDescription": "Système de détection en temps réel utilisant des algorithmes d'anomaly detection. Atteint 95% de précision avec un taux de faux positifs inférieur à 2%.",
    "project7.title": "Touba Khelcom Meuble",
    "project7.description": "Site de vente de meubles développé avec WordPress",
    "project7.detailedDescription": "Site e-commerce de meubles développé avec WordPress. Le projet met en avant une interface utilisateur claire, un catalogue de produits organisé et un parcours d'achat simple pour les clients. Conçu pour faciliter la présentation des collections de meubles et la gestion du contenu via l'administration WordPress.",
    "project8.title": "Freight Flow Digital",
    "project8.description": "Plateforme web de gestion de fret numérique pour les entreprises de transport",
    "project8.detailedDescription": "J'ai conçu et développé une plateforme web moderne dédiée à la gestion du fret, pensée pour les entreprises de transport souhaitant digitaliser leurs services. Grâce à une interface intuitive et un design soigné, cette solution offre une expérience utilisateur fluide, tout en intégrant des fonctionnalités essentielles pour optimiser les opérations logistiques et renforcer la relation client.\n\nCette application permet aux clients de calculer des tarifs d'expédition, suivre leurs colis en temps réel et contacter l'entreprise via un formulaire intégré.\n\nImpact : Faciliter le commerce international et améliorer la transparence dans la chaîne logistique.\n\nTechnologies utilisées :\n- React.js pour la construction d'une interface utilisateur interactive et réactive\n- Tailwind CSS pour un design moderne, responsive et facilement personnalisable\n- Laravel (PHP) pour la gestion de la logique backend, de la base de données et des API sécurisées\n\nObjectifs du projet :\n- Fournir une solution numérique performante pour la gestion du fret et du suivi logistique\n- Améliorer l'expérience client grâce à des outils simples, rapides et transparents\n- Automatiser les tâches clés pour gagner du temps et réduire les erreurs manuelles",
    "project9.title": "Ndadjé Foot",
    "project9.description": "Plateforme pour la communauté des passionnés de football",
    "project9.detailedDescription": "Ndadjé Foot est une plateforme communautaire pour les passionnés de football, conçue pour rassembler supporters, joueurs. L'application propose des actualités, des mises à jour de match, l'organisation d'événements et un espace d'échange pour partager avis et analyses. Elle vise à renforcer l'engagement au sein de la communauté footballistique et à soutenir la culture du football local.",
    "project10.title": "Sama Bitik",
    "project10.description": "Application de gestion de boutique pour aider les boutiquier à faire leur inventaire",
    "project10.detailedDescription": "Sama Bitik est une application de gestion de boutique conçue pour aider les commerçants à suivre leurs stocks et à gérer leurs inventaires. Elle simplifie la gestion des produits, le suivi des quantités, la mise à jour des prix et la génération de rapports de stock. L'interface est pensée pour être simple et intuitive, afin de permettre aux boutiques de gagner en efficacité.",
    "project11.title": "Boutik Nuru",
    "project11.description": "Boutique de vente de matériels électroniques",
    "project11.detailedDescription": "Boutik Nuru est une boutique en ligne spécialisée dans la vente de matériels électroniques. Elle offre une large gamme de produits électroniques, des ordinateurs aux accessoires, avec un focus sur la qualité et le service client. Le site est conçu pour une navigation facile et des achats sécurisés.",
    
    // Certifications
    "certifications.title": "Certifications",
    "certifications.subtitle": "Découvrez mes certificats et distinctions dans le domaine de l'intelligence artificielle et du développement web.",
    "cert1.title": "Certification en Intelligence Artificielle",
    "cert1.institution": "FORCE-N",
    "cert1.date": "Mars 2025",
    "cert1.description": "Attestation de réussite au programme FORCE-N reconnu par l'Union Africaine et Mastercard Foundation",
    "cert2.title": "Analyste Cybersecurité",
    "cert2.institution": "FORCE-N",
    "cert2.date": "Avril 2024",
    "cert2.description": "Attestation de réussite au programme FORCE-N reconnu par l'Union Africaine et Mastercard Foundation",
    "cert3.title": "Introduction à l'Intelligence Artificielle",
    "cert3.institution": "Elements of IA",
    "cert3.date": "Août 2023",
    "cert3.description": "Cours en ligne sur les fondamentaux de l'intelligence artificielle",
    "cert4.title": "Appliquez l'apprentissage statistique aux objets connectés",
    "cert4.institution": "OpenClassrooms",
    "cert4.date": "Janvier 2024",
    "cert4.description": "Certification obtenue sur la plateforme OpenClassrooms",
    "cert5.title": "Découvrez le cloud avec Amazon Web Services",
    "cert5.institution": "OpenClassrooms",
    "cert5.date": " Février 2024",
    "cert5.description": "Certification obtenue sur la plateforme OpenClassrooms",
    "cert6.title": "Découvrez la science des données pour les objets connectés",
    "cert6.institution": "OpenClassrooms",
    "cert6.date": "Janvier 2024",
    "cert6.description": "Certification obtenue sur la plateforme OpenClassrooms",
    "cert7.title": "Évaluez les performances d'un modèle de machine learning",
    "cert7.institution": "OpenClassrooms",
    "cert7.date": "Décembre 2023",
    "cert7.description": "Certification obtenue sur la plateforme OpenClassrooms",
    "cert8.title": "Concevez un site avec Flask",
    "cert8.institution": "OpenClassrooms",
    "cert8.date": "Janvier 2024",
    "cert8.description": "Certification obtenue sur la plateforme OpenClassrooms",
    "cert9.title": "Devenez un expert de Git et GitHub",
    "cert9.institution": "OpenClassrooms",
    "cert9.date": " Février 2024",
    "cert9.description": "Certification obtenue sur la plateforme OpenClassrooms",
    "cert10.title": "Concevez votre réseau TCP/IP",
    "cert10.institution": "OpenClassrooms",
    "cert10.date": "Avril 2022",
    "cert10.description": "Certification obtenue sur la plateforme OpenClassrooms",
    
    // Education
    "education.master": "Master - Ingénierie des Données et Intelligence Artificielle",
    "education.master.status": "En cours",
    "education.master.description": "Formation avancée en data engineering, machine learning et intelligence artificielle",
    "education.bachelor": "Licence en Informatique - Option Génie Logiciel",
    "education.bachelor.status": "Obtenue",
    "education.bachelor.description": "Formation en développement logiciel, architecture et méthodologies agiles",
    
    // Experience
    "experience.ai-intern.title": "Stagiaire Développeur en Intelligence Artificielle",
    "experience.ai-intern.company": "Orange Digital Center (Sonatel)",
    "experience.ai-intern.location": "Dakar, Sénégal",
    "experience.ai-intern.period": "Juillet 2025 - Octobre 2025",
    "experience.ai-intern.desc1": "Conception et développement de chatbots intelligents pour automatiser la communication et améliorer l'expérience utilisateur",
    "experience.ai-intern.desc2": "Utilisation des services AWS pour le déploiement et l'hébergement d'applications d'intelligence artificielle",
    "experience.ai-intern.desc3": "Contribution à la mise en œuvre de solutions IA innovantes dans le cadre de la transformation numérique du groupe Sonatel",
    "experience.ai-intern.desc4": "Collaboration avec une équipe pluridisciplinaire dans un environnement agile",
    "experience.backend.title": "Développeur Back-End",
    "experience.backend.company": "DSI - Université IBA Der Thiam, Thies",
    "experience.backend.location": "Thiès, Sénégal",
    "experience.backend.period": "Décembre 2023 - Avril 2024",
    "experience.backend.desc1": "Conception d'une application pour gérer les heures complémentaires des professeurs titulaires et des vacataires",
    "experience.backend.desc2": "Utilisation de Laravel côté back-end et React côté front-end",
    "experience.backend.desc3": "Gestion du versioning avec Git/GitLab",
    "experience.web.title": "Web Developer",
    "experience.web.company": "IBS - Parcelles Assainies, Dakar (Remote)",
    "experience.web.location": "Dakar, Sénégal",
    "experience.web.period": "Mai 2024 - Août 2024",
    "experience.web.desc1": "Création et maintenance de sites web développés sous WordPress",
    
    // Skills Categories
    "skills.ai.title": "Intelligence Artificielle & ML",
    "skills.data.title": "Data Engineering",
    "skills.programming.title": "Langages de Programmation",
    "skills.web.title": "Développement Web",
    "skills.cloud.title": "Cloud & DevOps",
    "skills.datascience.title": "Data Science",
    
    // Contact
    "contact.title": "Me Contacter",
    "contact.subtitle": "N'hésitez pas à me contacter pour toute opportunité ou question",
    "contact.name": "Nom complet",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.success": "Message envoyé avec succès!",
    "contact.info": "Informations de Contact",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.title": "Data & AI Engineer",
    "hero.description": "Master's student in Data Engineering and Artificial Intelligence, passionate about developing innovative AI-based solutions and data analysis.",
    "hero.cta": "Contact Me",
    "hero.projects": "View My Projects",
    "hero.downloadCV": "Download CV",
    
    // About
    "about.title": "About Me",
    "about.intro": "Passionate about artificial intelligence and data engineering",
    "about.p1": "I am currently a Master's student in Data Engineering and Artificial Intelligence, with a solid background in software engineering obtained during my bachelor's degree.",
    "about.p2": "My journey has allowed me to develop deep technical expertise in Machine Learning, Deep Learning, and modern web application development. I am particularly interested in solutions that combine AI and Big Data to solve real-world problems.",
    "about.p3": "Always looking for new challenges, I strive to stay up to date with the latest technologies and methodologies in the field.",
    "about.highlight1.title": "Artificial Intelligence",
    "about.highlight1.description": "Specialization in Machine Learning and Deep Learning",
    "about.highlight2.title": "Data Engineering",
    "about.highlight2.description": "Expertise in Big Data and data pipelines",
    "about.highlight3.title": "Software Engineering",
    "about.highlight3.description": "Strong background in software development",
    
    // Education
    "education.title": "Academic Background",
    
    // Skills
    "skills.title": "Technical Skills",
    "skills.ai": "Artificial Intelligence",
    "skills.data": "Data Engineering",
    "skills.web": "Web Development",
    "skills.database": "Databases",
    "skills.tools": "Tools & DevOps",
    "skills.soft": "Soft Skills",
    
    // Experience
    "experience.title": "Professional Experience",
    
    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Discover my achievements in Artificial Intelligence and development",
    "projects.filterAll": "All",
    "projects.filterAI": "Artificial Intelligence",
    "projects.filterWeb": "Web Development",
    "projects.filterData": "Data Science",
    "projects.details": "Details",
    "projects.github": "GitHub",
    "projects.demo": "Demo",
    "project1.title": "Image Classification with PyTorch and Flask",
    "project1.description": "This project uses a convolutional neural network (CNN) to classify images from the CIFAR-10 dataset into 10 different categories.",
    "project1.detailedDescription": "This project uses a convolutional neural network (CNN) to classify images from the CIFAR-10 dataset into 10 different categories: airplane, automobile, bird, cat, deer, dog, frog, horse, ship, and truck.\n\nThe goal is to develop an artificial intelligence model capable of automatically recognizing objects in an image and displaying the prediction with a confidence score.\n\nThe web application is built with Flask, allowing users to upload an image and obtain real-time classification.\n\nUse cases: This type of model is used in image recognition, autonomous vehicles, and surveillance systems.",
    "project2.title": "AfrikaEnergyPredict",
    "project2.description": "Modeling and predicting energy demand in African countries",
    "project2.detailedDescription": "This project aims to model and predict energy demand in different African countries using demographic, economic, and geographic data.\n\nThanks to a Gradient Boosting model, we identify priority regions for solar infrastructure installation and help with sustainable energy planning.\n\nThis approach allows decision-makers to allocate energy resources more efficiently and anticipate future needs.\n\nImpact: Strengthen access to reliable energy in Africa, support sustainable development, and improve the energy resilience of populations.",
    "project3.title": "Facial Recognition MLP",
    "project3.description": "Facial recognition system using an MLP neural network",
    "project3.detailedDescription": "This system uses an MLP (Multi-Layer Perceptron) neural network to recognize human faces from photos, without using convolutional networks (CNN). It was trained on a filtered version of the LFW (Labeled Faces in the Wild) dataset.\n\nThe model is capable of identifying 5 famous people, chosen because they are the most represented in the dataset:\n- George W. Bush\n- Colin Powell\n- Donald Rumsfeld\n- Tony Blair\n- Gerhard Schröder",
    "project4.title": "Satellite Image Classification",
    "project4.description": "Automatic classification of satellite images into land use types",
    "project4.detailedDescription": "This project uses a deep learning model trained on the EuroSAT dataset, which contains Sentinel-2 satellite images classified into 10 land use types:\n\n- Annual crops\n- Forest\n- Herbaceous vegetation\n- Highway\n- Pasture\n- Permanent crops\n- Residential areas\n- Rivers\n- Sea/Lakes\n- Industrial areas\n\nThe goal is to automatically detect the type of terrain from a satellite image, which can be useful for:\n\n- Smart agriculture (crop monitoring and deforestation tracking)\n- Urban planning and mapping (city planning, land management)\n- Natural resource management (protected area monitoring, watercourse management)\n\nThe application allows uploading a satellite image, and the model predicts the corresponding category with a confidence percentage.",
    "project5.title": "Laptop Price Predictor",
    "project5.description": "Web application to estimate laptop prices using AI",
    "project5.detailedDescription": "This intelligent web application developed with Streamlit uses artificial intelligence algorithms to accurately estimate the price of a laptop based on its technical specifications.\n\nUsers can get a reliable price estimate for a laptop in just a few seconds by simply entering its technical specifications.\n\nThe model analyzes more than 15 characteristics (brand, processor, RAM, storage, etc.) and displays price results in Euros.\n\n**Technologies used**\n- Streamlit for the interactive user interface\n- Python and Scikit-learn for machine learning models\n- Pandas & NumPy for data manipulation\n- Plotly for interactive visualizations\n\n**Project objectives**\n- Provide consumers with a reliable tool to estimate the market value of a laptop\n- Allow users to understand which characteristics most influence the price\n- Offer a simple and intuitive interface accessible to all users\n- Achieve a high level of accuracy (>87%) in price predictions\n\nImpact: Helps consumers make decisions and provides transparency in the laptop market.",
    "project6.title": "Fraud Detection System",
    "project6.description": "ML model for automatic detection of fraudulent transactions",
    "project6.detailedDescription": "Real-time detection system using anomaly detection algorithms. Achieves 95% accuracy with a false positive rate below 2%.",
    "project7.title": "Touba Khelcom Furniture",
    "project7.description": "Furniture sales website developed with WordPress",
    "project7.detailedDescription": "E-commerce furniture website developed with WordPress. The project highlights a clean user interface, an organized product catalog, and a straightforward purchase journey. Designed to simplify product presentation and content management through the WordPress admin.",
    "project8.title": "Freight Flow Digital",
    "project8.description": "Web platform for digital freight management for transport companies",
    "project8.detailedDescription": "I designed and developed a modern web platform dedicated to freight management, built for transport companies looking to digitize their services. With an intuitive interface and polished design, this solution delivers a smooth user experience while integrating essential features to optimize logistics operations and strengthen customer relationships.\n\nThe application enables clients to calculate shipping rates, track shipments in real time, and contact the company through an integrated form.\n\nImpact: Facilitate international trade and improve transparency in the logistics chain.\n\nTechnologies used:\n- React.js for building an interactive and responsive user interface\n- Tailwind CSS for a modern, responsive, and easily customizable design\n- Laravel (PHP) for backend logic, database management, and secure APIs\n\nProject objectives:\n- Provide a high-performance digital solution for freight management and logistics tracking\n- Improve customer experience with simple, fast, and transparent tools\n- Automate key tasks to save time and reduce manual errors",
    "project9.title": "Computer Vision - Object Recognition",
    "project9.description": "Real-time object detection and classification application",
    "project9.detailedDescription": "Computer vision application using YOLO and custom CNNs. Capable of detecting 80+ object classes in real-time at 30+ FPS.",
    "project10.title": "Sama Bitik",
    "project10.description": "Store management app to help shops manage inventory",
    "project10.detailedDescription": "Sama Bitik is a store management application designed to help retailers manage inventory and stock levels. It simplifies product entry, quantity tracking, price updates, and stock reporting. The interface is designed to be easy to use, helping shops improve operational efficiency.",
    "project11.title": "Boutik Nuru",
    "project11.description": "Online store for electronic materials",
    "project11.detailedDescription": "Boutik Nuru is an online store specializing in electronic materials. It offers a wide range of electronic products, from computers to accessories, with a focus on quality and customer service. The site is designed for easy navigation and secure purchases.",
    
    // Certifications
    "certifications.title": "Certifications",
    "certifications.subtitle": "Discover my certificates and distinctions in artificial intelligence and web development.",
    "cert1.title": "Artificial Intelligence Certification",
    "cert1.institution": "FORCE-N",
    "cert1.date": "March 2025",
    "cert1.description": "Certificate of completion for the FORCE-N program recognized by the African Union and Mastercard Foundation",
    "cert2.title": "Cybersecurity Analyst",
    "cert2.institution": "FORCE-N",
    "cert2.date": "April 2024",
    "cert2.description": "Certification in information security and analysis",
    "cert3.title": "Introduction to Artificial Intelligence",
    "cert3.institution": "Elements of AI",
    "cert3.date": "August 2023",
    "cert3.description": "Online course on fundamentals of artificial intelligence",
    "cert4.title": "Apply Statistical Learning to Connected Devices",
    "cert4.institution": "OpenClassrooms",
    "cert4.date": "January 2024",
    "cert4.description": "Certification obtained on the OpenClassrooms platform",
    "cert5.title": "Discover the Cloud with Amazon Web Services",
    "cert5.institution": "OpenClassrooms",
    "cert5.date": "February 2024",
    "cert5.description": "Certification obtained on the OpenClassrooms platform",
    "cert6.title": "Discover Data Science for Connected Devices",
    "cert6.institution": "OpenClassrooms",
    "cert6.date": "January 2024",
    "cert6.description": "Certification obtained on the OpenClassrooms platform",
    "cert7.title": "Evaluate the Performance of a Machine Learning Model",
    "cert7.institution": "OpenClassrooms",
    "cert7.date": "December 2023",
    "cert7.description": "Certification obtained on the OpenClassrooms platform",
    "cert8.title": "Build a Website with Flask",
    "cert8.institution": "OpenClassrooms",
    "cert8.date": "January 2024",
    "cert8.description": "Certification obtained on the OpenClassrooms platform",
    "cert9.title": "Become an Expert in Git and GitHub",
    "cert9.institution": "OpenClassrooms",
    "cert9.date": "February 2024",
    "cert9.description": "Certification obtained on the OpenClassrooms platform",
    "cert10.title": "Design Your TCP/IP Network",
    "cert10.institution": "OpenClassrooms",
    "cert10.date": "April 2022",
    "cert10.description": "Certification obtained on the OpenClassrooms platform",
    
    // Education
    "education.master": "Master - Data Engineering and Artificial Intelligence",
    "education.master.status": "In Progress",
    "education.master.description": "Advanced training in data engineering, machine learning and artificial intelligence",
    "education.bachelor": "Bachelor's Degree in Computer Science - Software Engineering",
    "education.bachelor.status": "Obtained",
    "education.bachelor.description": "Training in software development, architecture and agile methodologies",
    
    // Experience
    "experience.ai-intern.title": "AI Developer Intern",
    "experience.ai-intern.company": "Orange Digital Center (Sonatel)",
    "experience.ai-intern.location": "Dakar, Senegal",
    "experience.ai-intern.period": "July 2025 - October 2025",
    "experience.ai-intern.desc1": "Design and development of intelligent chatbots to automate communication and improve user experience",
    "experience.ai-intern.desc2": "Use of AWS services for deployment and hosting of artificial intelligence applications",
    "experience.ai-intern.desc3": "Contribution to the implementation of innovative AI solutions as part of Sonatel Group's digital transformation",
    "experience.ai-intern.desc4": "Collaboration with a multidisciplinary team in an agile environment",
    "experience.backend.title": "Back-End Developer",
    "experience.backend.company": "DSI - IBA Der Thiam University, Thies",
    "experience.backend.location": "Thiès, Senegal",
    "experience.backend.period": "December 2023 - April 2024",
    "experience.backend.desc1": "Design of an application to manage additional hours for full-time and part-time professors",
    "experience.backend.desc2": "Use of Laravel on the back-end and React on the front-end",
    "experience.backend.desc3": "Version management with Git/GitLab",
    "experience.web.title": "Web Developer",
    "experience.web.company": "IBS - Parcelles Assainies, Dakar (Remote)",
    "experience.web.location": "Dakar, Senegal",
    "experience.web.period": "May 2024 - August 2024",
    "experience.web.desc1": "Creation and maintenance of websites developed with WordPress",
    
    // Skills Categories
    "skills.ai.title": "Artificial Intelligence & ML",
    "skills.data.title": "Data Engineering",
    "skills.programming.title": "Programming Languages",
    "skills.web.title": "Web Development",
    "skills.cloud.title": "Cloud & DevOps",
    "skills.datascience.title": "Data Science",
    
    // Contact
    "contact.title": "Contact Me",
    "contact.subtitle": "Feel free to contact me for any opportunity or question",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.info": "Contact Information",
    
    // Footer
    "footer.rights": "All rights reserved.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
