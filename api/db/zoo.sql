-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 09 avr. 2023 à 21:02
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `zoo`
--

-- --------------------------------------------------------

--
-- Structure de la table `alert`
--

CREATE TABLE `alert` (
  `idAlert` int(11) NOT NULL,
  `libelleAlert` longtext DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `idEtatAlerte` int(11) NOT NULL,
  `idNiveauAlert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `alert`
--

INSERT INTO `alert` (`idAlert`, `libelleAlert`, `date`, `idEtatAlerte`, `idNiveauAlert`) VALUES
(2, 'Bagarre de lion dans l\'enclos', '2023-04-03 14:17:29', 1, 3),
(3, 'Véhicule HS', NULL, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `alimentation`
--

CREATE TABLE `alimentation` (
  `id` int(11) NOT NULL,
  `libelle` varchar(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Déchargement des données de la table `alimentation`
--

INSERT INTO `alimentation` (`id`, `libelle`) VALUES
(1, 'Carnivore'),
(2, 'Herbivore'),
(3, 'Omnivore');

-- --------------------------------------------------------

--
-- Structure de la table `animal`
--

CREATE TABLE `animal` (
  `idAnimal` int(11) NOT NULL,
  `nomAnimal` varchar(45) NOT NULL,
  `poidsAnimal` varchar(45) NOT NULL,
  `tailleAnimal` varchar(45) NOT NULL,
  `naissanceAnimal` datetime NOT NULL,
  `idRaceAnimal` int(11) NOT NULL,
  `idSanteAnimal` int(11) NOT NULL,
  `idEnclosAnimal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `animal`
--

INSERT INTO `animal` (`idAnimal`, `nomAnimal`, `poidsAnimal`, `tailleAnimal`, `naissanceAnimal`, `idRaceAnimal`, `idSanteAnimal`, `idEnclosAnimal`) VALUES
(1, 'Le Polak', '459 kg', '2.43 mètres', '2023-03-17 16:12:01', 4, 1, 1),
(3, 'El Tigre', '120 kg', '93 cm', '2011-03-02 13:33:31', 2, 1, 1),
(4, 'Le Biz\'', '600', '1.6 mètres', '2016-03-01 14:18:13', 3, 6, 1);

-- --------------------------------------------------------

--
-- Structure de la table `enclos`
--

CREATE TABLE `enclos` (
  `idEnclos` int(11) NOT NULL,
  `libelleEnclos` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `enclos`
--

INSERT INTO `enclos` (`idEnclos`, `libelleEnclos`) VALUES
(1, 'CB29');

-- --------------------------------------------------------

--
-- Structure de la table `etat`
--

CREATE TABLE `etat` (
  `idEtat` int(11) NOT NULL,
  `libelleEtat` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `etat`
--

INSERT INTO `etat` (`idEtat`, `libelleEtat`) VALUES
(1, 'A faire'),
(2, 'En cours'),
(3, 'Terminée'),
(4, 'Non réalisée');

-- --------------------------------------------------------

--
-- Structure de la table `etat_alerte`
--

CREATE TABLE `etat_alerte` (
  `idAlertEtat` int(11) NOT NULL,
  `libelleAlertEtat` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `etat_alerte`
--

INSERT INTO `etat_alerte` (`idAlertEtat`, `libelleAlertEtat`) VALUES
(1, 'En cours'),
(2, 'Terminée');

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

CREATE TABLE `image` (
  `idImage` int(11) NOT NULL,
  `libelleImage` varchar(45) NOT NULL,
  `idRaceImage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`idImage`, `libelleImage`, `idRaceImage`) VALUES
(1, 'tigre-1.jpg', 1),
(2, 'tigre-2', 1),
(3, 'lion-1.jpg', 2),
(4, 'bison-1.jpg', 3),
(5, 'tigre-2.jpg', 1),
(6, 'zebre-1.jpg', 5),
(7, 'elephant-1.jpg', 6),
(8, 'elephant-2.jpg', 6),
(9, 'elephant-3.jpg', 6),
(10, 'hippopotame-1.jpg', 9),
(11, 'hippopotame-2.jpg', 9),
(12, 'hippopotame-3.jpg', 9),
(13, 'panda-1.jpg', 7),
(14, 'panda-2.jpg', 7),
(15, 'panda-3.jpg', 7),
(16, 'panda-roux-1.jpg', 8),
(17, 'panda-roux-2.jpg', 8),
(18, 'panda-roux-3.jpg', 8),
(19, 'tigre-3.jpg', 1),
(20, 'lion-2.jpg', 2),
(21, 'lion-3.jpg', 2),
(22, 'bison-2.jpg', 3),
(23, 'bison-3.jpg', 3),
(24, 'ours-polaire-2.jpg', 4),
(25, 'ours-polaire-3.jpg', 4),
(26, 'zebre-2.jpg', 5),
(27, 'zebre-3.jpg', 5),
(30, 'ours-polaire-1.jpg', 4);

-- --------------------------------------------------------

--
-- Structure de la table `missions`
--

CREATE TABLE `missions` (
  `idMission` int(11) NOT NULL,
  `libelleMission` varchar(45) DEFAULT NULL,
  `commentaireMission` longtext DEFAULT NULL,
  `dateMission` datetime DEFAULT NULL,
  `idEtatMission` int(11) NOT NULL,
  `idUserMission` int(11) NOT NULL,
  `RemarqueMission` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `missions`
--

INSERT INTO `missions` (`idMission`, `libelleMission`, `commentaireMission`, `dateMission`, `idEtatMission`, `idUserMission`, `RemarqueMission`) VALUES
(1, 'Nettoyer l\'enclos du Tigre', 'L\'enclos du Tigre est devenu très sale. Il faut s\'en occuper imméditameent avant que les visiteurs ne viennent.', '2023-03-24 14:29:14', 2, 2, NULL),
(2, 'Portail cassé', 'Le portail de l\'enclos de l\'éléphant est cassé, des personnes ont voulu semer la pagaille. Il faut le réparer, l\'éléphant a été isolé.', '2023-03-22 14:30:40', 4, 2, 'Je ne possède pas les outils pour le faire'),
(3, 'Remplir l\'eau des bassins', 'L\'eau des bassins des Hippopotame est très basse à cause du temps sec, il faudrait rajouter au minimum 200 litres d\'eau.', '2023-03-25 14:31:22', 1, 2, NULL),
(4, 'Soin du Bison', 'Un bison s\'est brisé la cheville, il faut l\'aider impérativement.', '2023-04-09 18:41:12', 1, 15, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

CREATE TABLE `niveau` (
  `idNiveau` int(11) NOT NULL,
  `libelleEtat` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `niveau`
--

INSERT INTO `niveau` (`idNiveau`, `libelleEtat`) VALUES
(1, 'Soft'),
(2, 'Medium'),
(3, 'Danger'),
(4, 'Evacuation nécessaire');

-- --------------------------------------------------------

--
-- Structure de la table `race`
--

CREATE TABLE `race` (
  `idRace` int(11) NOT NULL,
  `libelleRace` varchar(45) NOT NULL,
  `description` longtext NOT NULL,
  `tempsPorte` varchar(45) NOT NULL,
  `idAlimentation` int(11) NOT NULL,
  `poids` varchar(20) NOT NULL,
  `origine` varchar(30) NOT NULL,
  `taille` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `race`
--

INSERT INTO `race` (`idRace`, `libelleRace`, `description`, `tempsPorte`, `idAlimentation`, `poids`, `origine`, `taille`) VALUES
(1, 'Tigre', 'Aisément reconnaissable à sa fourrure rousse rayée de noir, le tigre Panthera tigris est le plus grand félin sauvage et l\'un des plus grands carnivores terrestres. Super-prédateur, il chasse principalement les cerfs et les sangliers, bien qu\'il puisse s\'attaquer à des proies de taille plus importante comme les buffles.', '3 mois', 1, '90 à 120 kg', 'France', '70 cm'),
(2, 'Lion', 'Le lion est un mammifère carnivore de la famille des félins. On le surnomme « le roi des animaux » en référence à sa crinière. Le lion est le deuxième plus gros félin après le tigre, le mâle peut peser jusqu’à 240 Kg !', '3.5 mois', 1, '125 à 240 kg', 'Afrique Centrale', '90 cm'),
(3, 'Bison', 'Le Bison d’Amérique vit dans quelques parcs nationaux nord américains tels que celui de Yellowstone aux USA. Il se déplace en grands groupes constitués de femelles, petits et mâles qui maintiennent leur hiérarchie à l’aide d’impressionnants combats. Ces groupes migrent au gré de la nourriture disponible et des saisons.', '9.5 mois', 2, '400 à 900 kg', 'Amérique', '1.6 à 2.0 mètres'),
(4, 'Ours Polaire', 'Les ours blancs sont très bien adaptés au milieu arctique. Leur fourrure blanche les rend mimétiques, leurs oreilles de petite taille limitent la perte de chaleur et leurs larges pattes couvertes de poils, et légèrement palmées, leur permettent de marcher sur la neige fraîche sans s\'enfoncer.', '8 mois', 1, '450 kg', 'Alaska', '1.8 à 3 mètres'),
(5, 'Zebre', 'On le reconnait facilement grâce à son pelage. Il a des bandes noires et blanches. Il possède une crinière et une longue queue. Sa taille : entre 1,20m et 1,50m Sa longueur : entre 2,20m et 2,70m Son poids : entre 200 et 400kg Le zèbre vit entre 25 à 30 ans.', '10-12 mois', 2, '350 450 kg', 'Afrique Centrale', '2.4 mètres'),
(6, 'Eléphant', 'Un éléphant d\'Afrique mâle adulte mesure 3,50 mètres au garrot et pèse 5 à 6 tonnes, une femelle adulte mesure 3 mètres de haut au garrot pour une masse de 4 tonnes environ. À la naissance, l\'éléphant pèse environ 120 kg . Un éléphant vit en moyenne 60 ans.', '20-22 mois', 2, '4000 à 6000 kg', 'Asie', '5.5 à 6.5 mètres'),
(7, 'Panda', 'Les pandas géants ont une apparence distinctive. Leur fourrure noire et blanche épaisse préparée à la vie dans les forêts froides. Leur pelage blanc avec des taches noires est unique, avec des taches noires autour des yeux et des oreilles, des pattes noires, et une bande noire autour des épaules.', '95 à 160 jours', 2, '70 à 120 kg', 'Asie', '1.2 à 1.9 mètres'),
(8, 'Panda Roux', 'Le panda roux, appelé aussi petit panda ou panda doré, est un mammifère qui vit dans l\'Himalaya et dans les montagnes d\'Asie du sud-est et centrale. Il mesure environ 60 cm, et la longueur de sa queue varie entre 30 et 60 cm. Il peut peser jusqu\'à 6 kg. Il est pourvu d\'une épaisse fourrure majoritairement rousse.', '4.5 mois', 2, '4 à 6 kg', 'Chine', '58 cm'),
(9, 'Hippopotame', 'L\'hippopotame amphibie mesure de 2,70 m à 4,50 m - 5 m de long plus (dont une queue d\'une cinquantaine de cm) pour une hauteur de 1,50 m de hauteur au garrot et un poids de 1,4 à 3 tonnes. L\'hippopotame nain est une espèce distincte de l\'hippopotame amphibie, son cousin grand format.', '243 jours', 2, '250 kg', 'Afrique', '2.9 à 5 mètres');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `idRole` int(11) NOT NULL,
  `libelleRole` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`idRole`, `libelleRole`) VALUES
(1, 'admin'),
(2, 'veterinaire'),
(3, 'zoologiste'),
(4, 'gardien'),
(5, 'soigneur'),
(6, 'stagiaire');

-- --------------------------------------------------------

--
-- Structure de la table `sante`
--

CREATE TABLE `sante` (
  `idSante` int(11) NOT NULL,
  `libelleSante` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `sante`
--

INSERT INTO `sante` (`idSante`, `libelleSante`) VALUES
(1, 'En bonne santé'),
(2, 'Fatigue rapide'),
(3, 'Faible santé'),
(4, 'Malade'),
(5, 'Extrêmement malade'),
(6, 'Hospitalisation nécessaire');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `nomUser` varchar(45) DEFAULT NULL,
  `prenomUser` varchar(45) DEFAULT NULL,
  `loginUser` varchar(45) DEFAULT NULL,
  `passUser` longtext DEFAULT NULL,
  `idRoleUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`idUser`, `nomUser`, `prenomUser`, `loginUser`, `passUser`, `idRoleUser`) VALUES
(1, 'Admin', 'Zoo', 'admin', '0192023a7bbd73250516f069df18b500', 1),
(2, 'Veterinaire', 'Zoo', 'veto', '62f54f2d9844af709af51de95890554d', 2),
(15, 'Soin', 'Zoo', 'soin', 'bdd1d118b205e6239244f576f06d97d6', 5);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `alert`
--
ALTER TABLE `alert`
  ADD PRIMARY KEY (`idAlert`),
  ADD KEY `fk_Alert_etat_alerte1_idx` (`idEtatAlerte`),
  ADD KEY `fk_Alert_niveau1_idx` (`idNiveauAlert`);

--
-- Index pour la table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`idAnimal`),
  ADD KEY `fk_Animal_race_idx` (`idRaceAnimal`),
  ADD KEY `fk_Animal_Sante1_idx` (`idSanteAnimal`),
  ADD KEY `fk_Animal_Enclos1_idx` (`idEnclosAnimal`);

--
-- Index pour la table `enclos`
--
ALTER TABLE `enclos`
  ADD PRIMARY KEY (`idEnclos`);

--
-- Index pour la table `etat`
--
ALTER TABLE `etat`
  ADD PRIMARY KEY (`idEtat`);

--
-- Index pour la table `etat_alerte`
--
ALTER TABLE `etat_alerte`
  ADD PRIMARY KEY (`idAlertEtat`);

--
-- Index pour la table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`idImage`),
  ADD KEY `fk_Image_race1_idx` (`idRaceImage`);

--
-- Index pour la table `missions`
--
ALTER TABLE `missions`
  ADD PRIMARY KEY (`idMission`),
  ADD KEY `fk_Missions_Etat1_idx` (`idEtatMission`),
  ADD KEY `fk_Missions_User1_idx` (`idUserMission`);

--
-- Index pour la table `niveau`
--
ALTER TABLE `niveau`
  ADD PRIMARY KEY (`idNiveau`);

--
-- Index pour la table `race`
--
ALTER TABLE `race`
  ADD PRIMARY KEY (`idRace`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`idRole`);

--
-- Index pour la table `sante`
--
ALTER TABLE `sante`
  ADD PRIMARY KEY (`idSante`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `fk_User_role1_idx` (`idRoleUser`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `alert`
--
ALTER TABLE `alert`
  MODIFY `idAlert` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `animal`
--
ALTER TABLE `animal`
  MODIFY `idAnimal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `enclos`
--
ALTER TABLE `enclos`
  MODIFY `idEnclos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `etat`
--
ALTER TABLE `etat`
  MODIFY `idEtat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `etat_alerte`
--
ALTER TABLE `etat_alerte`
  MODIFY `idAlertEtat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `image`
--
ALTER TABLE `image`
  MODIFY `idImage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `missions`
--
ALTER TABLE `missions`
  MODIFY `idMission` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `niveau`
--
ALTER TABLE `niveau`
  MODIFY `idNiveau` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `race`
--
ALTER TABLE `race`
  MODIFY `idRace` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `idRole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `sante`
--
ALTER TABLE `sante`
  MODIFY `idSante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `alert`
--
ALTER TABLE `alert`
  ADD CONSTRAINT `fk_Alert_etat_alerte1` FOREIGN KEY (`idEtatAlerte`) REFERENCES `etat_alerte` (`idAlertEtat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Alert_niveau1` FOREIGN KEY (`idNiveauAlert`) REFERENCES `niveau` (`idNiveau`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `animal`
--
ALTER TABLE `animal`
  ADD CONSTRAINT `fk_Animal_Enclos1` FOREIGN KEY (`idEnclosAnimal`) REFERENCES `enclos` (`idEnclos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Animal_Sante1` FOREIGN KEY (`idSanteAnimal`) REFERENCES `sante` (`idSante`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Animal_race` FOREIGN KEY (`idRaceAnimal`) REFERENCES `race` (`idRace`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `fk_Image_race1` FOREIGN KEY (`idRaceImage`) REFERENCES `race` (`idRace`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `missions`
--
ALTER TABLE `missions`
  ADD CONSTRAINT `fk_Missions_Etat1` FOREIGN KEY (`idEtatMission`) REFERENCES `etat` (`idEtat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Missions_User1` FOREIGN KEY (`idUserMission`) REFERENCES `user` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_User_role1` FOREIGN KEY (`idRoleUser`) REFERENCES `role` (`idRole`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
