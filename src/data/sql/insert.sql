TRUNCATE genres RESTART IDENTITY;
TRUNCATE songs RESTART IDENTITY;

INSERT INTO genres (genre, start_year, y_axis) VALUES

('Death Metal', 1984, 100);
('Brutal Death Metal', 1990,
('Death ''n'' Roll', 1993,
('Melodic Death metal', 1991,
('Tech Death', 1989,
('Dissonant Death Metal', 1993
('Blackend Death Metal', 1991
('Sweedish Death Metal', 1987
('Finnish Death Metal', 1989
('Prog Death Metal', 1989
('Slam Metal', 1991

('Alternative Metal', 1985
('Funk Metal',
('Nu Metal',
('Rap Metal',

('Black Metal', 1982,
('Atmospheric Black Metal',
('Blackgaze', 2007,
('Black 'n' Roll',
('Depressive Suicidal Black Metal',
('Pagan Black',
('Melodic Black Metal',
('Sympohnic Black Metal',
('War Metal',
('Dissonant Black Metal',
('Post Black',
('Noise Metal',

('Doom Metal',
('Death Doom Metal',
('Stoner Doom Metal',
('Funeral Doom Metal',
('Black Doom Metal',
('Traditional Doom Metal',
('Epic Doom Metal',
('Blackened Doom Metal',
('Drone Metal',
('Gothic Metal',

('Grindcore',
('Goregrind',
('Pornogrind',
('Deathgrind',
('Noisegrind',

Groove Metal
Heavy Metal
NWOBHM
('Power Metal',

Speed Metal
Blackend Speed Metal

Industrial Metal
Cyber Metal

Slam Deathcore
Metalcore
Deathcore
Mathcore
Melodic Metalcore
Groove Metalcore
Djent

Neoclassical Metal
Symphonic Metal
Folk Metal
Celtic Metal
Viking Metal

Post Metal
Prog Metal
Kawaii Metal

Thrash Metal
Crossover Thrash Metal
Deathrash
Blackend Thrash



INSERT INTO songs (year, title, artist, src, genre_id) VALUES
(1984, 'Death Metal', 'Possessed', 'DeathMetal.mp3', 1),
(1985, 'Necromancer', 'Sepultura', 'Necromancer.mp3', 1),
(1986, 'Messiah', 'Messiah', 'Messiah.mp3', 1),
(1987, 'Deathrash', 'Sarcófago', 'Deathrash.mp3', 1),
(1988, 'Leprosy', 'Death', 'Leprosy.mp3', 1),
(1989, 'Immortal Rites', 'Morbid Angel', 'ImmortalRites.mp3', 1),
(1990, 'Left Hand Path', 'Entombed', 'LeftHandPath.mp3', 1),
(1991, 'Override Of The Overture', 'Dismember', 'OverrideOfTheOverture.mp3', 1),
(1992, 'The IVth Crusade', 'Bolt Thrower', 'TheIVthCrusade.mp3', 1),
(1993, 'When The Sun Drank The Weight Of Water', 'Demilich', 'WhentheSunDranktheWeightofWater.mp3', 1),
(1994, 'For Victory', 'Bolt Thrower', 'ForVictory.mp3', 1),
(1995, 'Sorcery', 'Kataklysm', 'Sorcery.mp3', 1),
(1996, 'Burn With Jesus', 'Immolation', 'BurnWithJesus.mp3', 1),
(1997, 'I Am God', 'Vital Remains', 'IAmGod.mp3', 1),
(1998, 'Obscura', 'Goreguts', 'Obscura.mp3', 1),
(1999, 'Wolflust', 'Angelcorpse', 'Wolflust.mp3', 1),
(2000, 'Decrepit Crescendo', 'Exhumed', 'DecrepitCrescendo.mp3', 1),
(2001, 'Annihilation', 'Rebaelliun', 'Annihilation.mp3', 1),
(2002, 'Pit Of Zombies', 'Cannibal Corpse', 'PitOfZombies.mp3', 1),
(2003, 'Remembrance', 'Gojira', 'Remembrance.mp3', 1),
(2004, 'Eaten', 'Bloodbath', 'Eaten.mp3', 1),
(2005, 'This Is The War', 'Vader', 'ThisIsTheWar.mp3', 1),
(2006, 'Alchemy Of The Black Sun Cult', 'Goatwhore', 'AlchemyOfTheBlackSunCult.mp3', 1),
(2007, 'Infernal Damnation', 'Interment', 'InfernalDamnation.mp3', 1),
(2008, 'Graves Of The Archangels', 'Dead Congregation', 'GraveOfTheArchangels.mp3', 1),
(2009, 'Entering A Superior Dimension', 'The Chasm', 'EnteringASuperiorDimension.mp3', 1),
(2010, 'Beasts That Perish', 'Ares Kingdom', 'BeastsThatPerish.mp3', 1),
(2011, 'The Abjection', 'Azarath', 'TheAbjection.mp3', 1),
(2012, 'Forced Gender Reassignment', 'Cattle Decapitation', 'ForcedGenderReassignment.mp3', 1),
(2013, 'Open The Crypt', 'Krypts', 'OpenTheCrypt.mp3', 1),
(2014, 'Impalement Of Divinity', 'Incantation', 'ImpalementOfDivinity.mp3', 1),
(2015, 'Telomeric Erosion', 'Abyssal', 'TelomericErosion.mp3', 1),
(2016, '争乱ノ死地ヘ (Into The Jaws Of Death)', '兀突骨 Gotsu Totsu Kotsu', 'IntoTheJawsOfDeath.mp3', 1),
(2017, 'The 420th Crusade', 'Cannabis Corpse', 'The420thCrusade.mp3', 1),
(2018, 'Open Grave', 'Ripped To Shreds', 'OpenGrave.mp3', 1),
(2019, 'Slave Species Of The Gods', 'Blood Incantation', 'SlaveSpeciesOfTheGods.mp3', 1),
(2020, 'Regurgitated Communion', 'Of Feather And Bone', 'Regurgitated Communion.mp3', 1),
(2021, 'The Plague Spreading Horror From 20,000 Fathoms', 'Oxygen Destroyer', 'ThePlagueSpreadingHorrorFrom20,000 Fathoms.mp3', 1),
(2022, 'Evolutionary Inversion', 'INANNA', 'EvolutionaryInversion.mp3', 1),
(2023, 'Helionomicon', 'Ulthar', 'Helionomicon.mp3', 1),
