-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 17 mars 2023 à 16:14
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `animal`
--

INSERT INTO `animal` (`idAnimal`, `nomAnimal`, `poidsAnimal`, `tailleAnimal`, `naissanceAnimal`, `idRaceAnimal`, `idSanteAnimal`, `idEnclosAnimal`) VALUES
(1, 'Freeze Corleone', '667', '159', '2023-03-17 16:12:01', 1, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `enclos`
--

CREATE TABLE `enclos` (
  `idEnclos` int(11) NOT NULL,
  `libelleEnclos` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `etat_alerte`
--

CREATE TABLE `etat_alerte` (
  `idAlertEtat` int(11) NOT NULL,
  `libelleAlertEtat` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

CREATE TABLE `image` (
  `idImage` int(11) NOT NULL,
  `libelleImage` varchar(45) NOT NULL,
  `idRaceImage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `missions`
--

CREATE TABLE `missions` (
  `idMission` int(11) NOT NULL,
  `libelleMission` varchar(45) DEFAULT NULL,
  `commentaireMission` varchar(45) DEFAULT NULL,
  `dateMission` datetime DEFAULT NULL,
  `idEtatMission` int(11) NOT NULL,
  `idUserMission` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

CREATE TABLE `niveau` (
  `idNiveau` int(11) NOT NULL,
  `libelleEtat` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `race`
--

CREATE TABLE `race` (
  `idRace` int(11) NOT NULL,
  `libelleRace` varchar(45) NOT NULL,
  `description` longtext NOT NULL,
  `tempsPorte` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `race`
--

INSERT INTO `race` (`idRace`, `libelleRace`, `description`, `tempsPorte`) VALUES
(1, 'Tigre', 'Aisément reconnaissable à sa fourrure rousse rayée de noir, le tigre Panthera tigris est le plus grand félin sauvage et l\'un des plus grands carnivores terrestres. Super-prédateur, il chasse principalement les cerfs et les sangliers, bien qu\'il puisse s\'attaquer à des proies de taille plus importante comme les buffles.', '8');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `idRole` int(11) NOT NULL,
  `libelleRole` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`idRole`, `libelleRole`) VALUES
(1, 'admin'),
(2, 'veterinaire');

-- --------------------------------------------------------

--
-- Structure de la table `sante`
--

CREATE TABLE `sante` (
  `idSante` int(11) NOT NULL,
  `libelleSante` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `sante`
--

INSERT INTO `sante` (`idSante`, `libelleSante`) VALUES
(1, 'Malade'),
(2, 'En etat');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`idUser`, `nomUser`, `prenomUser`, `loginUser`, `passUser`, `idRoleUser`) VALUES
(1, 'Admin', 'Zoo', 'admin', 'admin123', 1),
(2, 'Veterinaire', 'Zoo', 'veto', 'veto123', 2);

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
  MODIFY `idAlert` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `animal`
--
ALTER TABLE `animal`
  MODIFY `idAnimal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `enclos`
--
ALTER TABLE `enclos`
  MODIFY `idEnclos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `etat`
--
ALTER TABLE `etat`
  MODIFY `idEtat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `etat_alerte`
--
ALTER TABLE `etat_alerte`
  MODIFY `idAlertEtat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `image`
--
ALTER TABLE `image`
  MODIFY `idImage` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `missions`
--
ALTER TABLE `missions`
  MODIFY `idMission` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `niveau`
--
ALTER TABLE `niveau`
  MODIFY `idNiveau` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `race`
--
ALTER TABLE `race`
  MODIFY `idRace` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `idRole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `sante`
--
ALTER TABLE `sante`
  MODIFY `idSante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
