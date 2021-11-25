INSERT INTO categories (id, description, title, urlimg)
VALUES (1, 'Devonshire rex. Bombay manx russian blue but british shorthair and siamese american shorthair lynx. Tomcat siamese yet russian blue and sphynx yet mouser tomcat.', 'Casas', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaCampo.jpg'),
(2, 'Manx lynx or puma but ocicat. Kitty donskoy donskoy. Kitty. Kitty havana brown and havana brown. Lion tomcat. Panther siberian. Munchkin malkin or malkin.', 'Hostales', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalPorElMundo.jpg'),
(3, 'Kitten panther norwegian forest. Siberian himalayan panther norwegian forest and leopard. Devonshire rex. Ragdoll malkin but havana brown but savannah. ', 'Apartamentos', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoZentrum3.jpg'),
(4, 'Jaguar siberian yet tabby. Tiger jaguar savannah so bombay but panther ocelot. Bombay panther tomcat ocicat but manx. Ocicat british shorthair. Savannah. Bengal tomcat so jaguar so lynx. ', 'Cabañas', 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto1.jpg');

SELECT *
FROM categories;

/*Esto era para modificar la BDD. Ahora podemos crearla desde cero con el INSERT de arriba*/

UPDATE categories
SET urlimg = 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/cabanaPunto1.jpg'
WHERE id = 4;
UPDATE categories
SET urlimg = 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/apartamentoZentrum3.jpg'
WHERE id = 3;
UPDATE categories
SET urlimg = 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/hostalPorElMundo.jpg'
WHERE id = 2;
UPDATE categories
SET urlimg = 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/casaCampo.jpg'
WHERE id = 1;
