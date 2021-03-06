INSERT INTO categories (id, description, title, urlimg)
VALUES (1, 'Devonshire rex. Bombay manx russian blue but british shorthair and siamese american shorthair lynx. Tomcat siamese yet russian blue and sphynx yet mouser tomcat.', 'Casas', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaCampo.jpg'),
(2, 'Manx lynx or puma but ocicat. Kitty donskoy donskoy. Kitty. Kitty havana brown and havana brown. Lion tomcat. Panther siberian. Munchkin malkin or malkin.', 'Hostales', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalPorElMundo.jpg'),
(3, 'Kitten panther norwegian forest. Siberian himalayan panther norwegian forest and leopard. Devonshire rex. Ragdoll malkin but havana brown but savannah. ', 'Apartamentos', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoZentrum3.jpg'),
(4, 'Jaguar siberian yet tabby. Tiger jaguar savannah so bombay but panther ocelot. Bombay panther tomcat ocicat but manx. Ocicat british shorthair. Savannah. Bengal tomcat so jaguar so lynx. ', 'Cabañas', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto1.jpg');

INSERT INTO cities (id, country_name, name)
VALUES (1, 'Argentina', 'Puerto Madryn'),
(2, 'Argentina', 'Buenos Aires'),
(3, 'Argentina', 'Córdoba'),
(4, 'Argentina', 'Salta'),
(5, 'Argentina', 'Ushuaia'),
(6, 'Argentina', 'Puerto Iguazú'),
(7, 'Argentina', 'Carlos Paz'),
(8, 'Argentina', 'El Chalten');



INSERT INTO features (id, name, icon) 
VALUES (1, 'kitchen_1', 'FaSink'),
(2, 'kitchen_2', 'MdOutlineKitchen'),
(3, 'snow_flake_1', 'FaSnowflake'),
(4, 'snow_flake_2', 'BsSnow2'),
(5, 'car_1', 'FaCar'),
(6, 'car_2', 'IoCarSport'),
(7, 'wifi_1', 'FaWifi'),
(8, 'wifi_2', 'RiHomeWifiFill'),
(9, 'tv_1', 'FaTv'),
(10, 'tv_2', 'GiTv'),
(11, 'tv_3', 'GiTvRemote'),
(12, 'tv_4', 'IoTv'),
(13, 'tv_5', 'IoIosTv'),
(14, 'pet_friendly_1', 'MdOutlinePets'),
(15, 'pet_friendly_2', 'FaDog'),
(16, 'swimming_pool_1', 'FaSwimmer'),
(17, 'swimming_pool_2', 'FaSwimmingPool'),
(18, 'arrow_1', 'MdArrowBackIos'),
(19, 'arrow_2', 'IoIosArrowDroprightCircle'),
(20, 'user_1', 'FaUserAlt'),
(21, 'user_2', 'ImUser'),
(22, 'calendar_1', 'IoMdCalendar'),
(23, 'calendar_2', 'IoCalendarSharp'),
(24, 'search_1', 'ImSearch'),
(25, 'search_2', 'BiSearchAlt'),
(26, 'location_1', 'MdLocationOn'), 
(27, 'location_2', 'MdOutlineLocationOn'), 
(28, 'eye_1', 'AiOutlineEyeInvisible'), 
(29, 'eye_2', 'AiOutlineEye'), 
(30, 'eye_3', 'RiEyeCloseFill'),
(31, 'eye_4', 'ImEye'),
(32, 'heart_1', 'RiHeartLine'),
(33, 'heart_2', 'BsSuitHeartFill'),
(34, 'share_1', 'IoShareSocialOutline'),
(35, 'share_2', 'MdOutlineScreenShare'),
(36, 'clock_1', 'AiOutlineClockCircle'),
(37, 'clock_2', 'GiCuckooClock'),
(38, 'tornado_1', 'GiTornado'),
(39, 'credit_card_1', 'BsFillCreditCardFill'),
(40, 'credit_card_2', 'FaRegCreditCard'),
(41, 'smoking_free_1', 'MdSmokeFree'),
(42, 'smoking_free_2', 'IoLogoNoSmoking'),
(43, 'smoking_allowed_1', 'MdSmokingRooms'),
(44, 'smoking_allowed_2', 'GiSmokingPipe'),
(45, 'not_accesible_1', 'MdNotAccessible'),
(46, 'no_wifi_1', 'MdSignalWifiConnectedNoInternet3'),
(47, 'party_1', 'GiPartyPopper'),
(48, 'star_1', 'MdStarRate'),
(49, 'star_2', 'MdOutlineStarHalf'),
(50, 'star_3', 'GiStarFormation'),
(51, 'plus_1', 'FiPlusSquare'), 
(52, 'plus_2', 'FaPlus'), 
(53, 'minus_1', 'FiMinusSquare'), 
(54, 'minus_2', 'FaMinus'), 
(55, 'facebook_1', 'TiSocialFacebookCircular'), 
(56, 'facebook_2', 'TiSocialFacebook'), 
(57, 'twitter_1', 'TiSocialTwitter'), 
(58, 'twitter_2', 'TiSocialTwitterCircular'), 
(59, 'linkedin_1', 'TiSocialLinkedin'), 
(60, 'linkedin_2', 'TiSocialLinkedinCircular'),
(61, 'instagram_1', 'TiSocialInstagram'),
(62, 'youtube_1', 'TiSocialYoutube'),
(63, 'github_1', 'TiSocialGithub'),
(64, 'email_1', 'TiSocialAtCircular'),
(65, 'hamburguer_1', 'FiMenu'),
(66, 'hamburguer_2', 'CgMenuGridO'),
(67, 'exit_1', 'ImExit'),
(68, 'exit_2', 'BiExit');

 INSERT INTO products (id, description,title_description, name, category_id, city_id)
VALUES (1, 'Devonshire rex. Bombay manx russian blue but british shorthair and siamese american shorthair lynx. Tomcat siamese yet russian blue and sphynx yet mouser tomcat.','Tomcat siamese yet', 'Casa de playa', 1, 1),
(2, 'Manx lynx or puma but ocicat. Kitty donskoy donskoy. Kitty. Kitty havana brown and havana brown. Lion tomcat. Panther siberian. Munchkin malkin or malkin.','Kitten maine coon', 'Casa de campo', 1, 2),
(3, 'Burmese munchkin for kitten and havana brown but persian grimalkin so tiger. American shorthair. Kitten maine coon. Manx. British shorthair cougar bengal, grimalkin.','Devonshire rex', 'Rivera Hostel', 2, 3),
(4, 'Ocelot russian blue or balinese jaguar yet manx so cornish rex. Cornish rex panther jaguar birman, scottish fold. Leopard jaguar siamese.','Siberian himalayan panther', 'Yatasto Hostal', 2, 4),
(5, 'Kitten panther norwegian forest. Siberian himalayan panther norwegian forest and leopard. Devonshire rex. Ragdoll malkin but havana brown but savannah.','Bombay panther tomcat', 'Patagonia Austral', 3, 5),
(6, 'Jaguar siberian yet tabby. Tiger jaguar savannah so bombay but panther ocelot. Bombay panther tomcat ocicat but manx. Ocicat british shorthair. Savannah. Bengal tomcat so jaguar so lynx.','Manx lynx or puma', 'Apart Cataratas', 3, 6),
(7, 'Kitten panther norwegian forest. Siberian himalayan panther norwegian forest and leopard. Devonshire rex. Ragdoll malkin but havana brown but savannah.','Ocicat british', 'Cabañas Ensueño', 4, 7),
(8, 'Jaguar siberian yet tabby. Tiger jaguar savannah so bombay but panther ocelot. Bombay panther tomcat ocicat but manx. Ocicat british shorthair. Savannah. Bengal tomcat so jaguar so lynx.','Bengal tomcat so', 'Cabañas El Puesto Sur', 4, 8);

INSERT INTO images (id, title, url, product_id) 
 VALUES 
(1, 'apartamentoCataloniaSur1', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoCataloniaSur.jpg', 6),
(2, 'apartamentoCataloniaSur', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoCataloniaSur1.jpg', 6),
(3, 'apartamentoCataloniaSur', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoCataloniaSur2.jpg', 6),
(4, 'apartamentoCataloniaSur', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoCataloniaSur3.jpg', 6),
(5, 'apartamentoCataloniaSur', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoCataloniaSur4.jpg', 6),
(6, 'apartamentoZentrum1', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoZentrum3.jpg', 5),
(7, 'apartamentoZentrum', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoZentrum.jpg', 5),
(8, 'apartamentoZentrum', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoZentrum1.jpg', 5),
(9, 'apartamentoZentrum', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoZentrum2.jpg', 5),
(10, 'apartamentoZentrum', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoZentrum4.jpg', 5),
(11, 'cabanaLaMontana1', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaLaMontana.jpg', 8),
(12, 'cabanaLaMontana', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaLaMontana1.jpg', 8),
(13, 'cabanaLaMontana', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaLaMontana2.jpg', 8),
(14, 'cabanaLaMontana', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaLaMontana3.jpg', 8),
(15, 'cabanaLaMontana', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaLaMontana4.jpg', 8),
(16, 'cabanaPunto1', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto1.jpg', 7),
(17, 'cabanaPunto', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto.jpg', 7),
(18, 'cabanaPunto', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto2.jpg', 7),
(19, 'cabanaPunto', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto3.jpg', 7),
(20, 'cabanaPunto', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto4.jpg', 7),
(21, 'casaCampo1', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaCampo.jpg', 2),
(22, 'casaCampo', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaCampo1.jpg', 2),
(23, 'casaCampo', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaCampo2.jpg', 2),
(24, 'casaCampo', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaCampo3.jpg', 2),
(25, 'casaCampo', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaCampo4.jpg', 2),
(26, 'casaPlaya1', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaPlaya1.jpg', 1),
(27, 'casaPlaya', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaPlaya.jpg', 1),
(28, 'casaPlaya', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaPlaya2.jpg', 1),
(29, 'casaPlaya', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaPlaya3.jpg', 1),
(30, 'casaPlaya', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaPlaya4.jpg', 1),
(31, 'hostalLosAngeles1', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalLosAngeles1.jpg', 4),
(32, 'hostalLosAngeles', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalLosAngeles.jpg', 4),
(33, 'hostalLosAngeles', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalLosAngeles2.jpg', 4),
(34, 'hostalLosAngeles', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalLosAngeles3.jpg', 4),
(35, 'hostalLosAngeles', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalLosAngeles4.jpg', 4),
(36, 'hostalPorElMundo1', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalPorElMundo.jpg', 3),
(37, 'hostalPorElMundo', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalPorElMundo1.jpg', 3),
(38, 'hostalPorElMundo', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalPorElMundo2.jpg', 3),
(39, 'hostalPorElMundo', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalPorElMundo3.jpg', 3),
(40, 'hostalPorElMundo', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalPorElMundo4.jpg', 3);

INSERT INTO product_feature (id_product, id_feature) 
VALUES (1,1),(1,7),(1,9),(1,14),(1,42),(1,47),
(2,1),(2,7),(2,9),(2,14),(2,16),(2,43),
(3,1),(3,7),(3,44),(3,45),
(4,1),(4,7),(4,41),
(5,1),(5,3),(5,7),(5,14),(5,42),
(6,1),(6,7),(6,9),(6,14),(6,47),
(7,1),(7,5),(7,7),(7,14),(7,44),
(8,1),(8,3),(8,5),(8,7),(8,14);

SELECT *
FROM products;

