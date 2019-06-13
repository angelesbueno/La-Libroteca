-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 13, 2019 at 07:58 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libroteca`
--
CREATE DATABASE IF NOT EXISTS `libroteca` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `libroteca`;

-- --------------------------------------------------------

--
-- Table structure for table `autor`
--

CREATE TABLE `autor` (
  `idAutor` int(11) NOT NULL,
  `autor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `autor`
--

INSERT INTO `autor` (`idAutor`, `autor`) VALUES
(1, 'J.K. Rowling'),
(2, 'Carolina Andujar'),
(3, 'Mark Dickinson'),
(4, 'William M. Cullen'),
(5, 'Christen Jul'),
(6, 'Brigitte Melzer'),
(8, 'Friedrich Meister'),
(9, 'Åsa Rosén'),
(10, 'K. M. Mcfarland'),
(12, 'Pío Baroja'),
(13, 'Erin Kelly Entrada'),
(14, 'Towanda Rebels'),
(15, 'Autor no disponible'),
(16, 'Ken Follett'),
(24, 'Rafael Abalos'),
(25, 'J. K. Rowling'),
(26, 'Gabriel García Márquez'),
(27, 'Wulf Dorn'),
(28, 'Paula Hawkins'),
(29, 'Mark Twain'),
(30, 'Robert Louis Stevenson'),
(31, 'Dan Brown'),
(32, 'José Becerra Muñoz'),
(33, 'Isabel Burdiel'),
(34, 'German Garmendia'),
(35, 'Steven Erikson'),
(36, 'Isabel Allende'),
(37, 'Charles Dickens'),
(38, 'George R. R. Martin'),
(39, 'George R.R. Martin');

-- --------------------------------------------------------

--
-- Table structure for table `editorial`
--

CREATE TABLE `editorial` (
  `idEditorial` int(11) NOT NULL,
  `editorial` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `editorial`
--

INSERT INTO `editorial` (`idEditorial`, `editorial`) VALUES
(1, 'hockebooks'),
(2, 'SEVERUS Verlag'),
(3, 'Rabén & Sjögren'),
(4, 'Independently Published'),
(6, 'Editorial no disponible'),
(7, 'Océano Gran Travesía'),
(8, 'AGUILAR'),
(9, 'Ediciones Colihue SRL'),
(10, 'PLAZA & JANES'),
(18, 'Montena'),
(19, 'Pottermore Publishing'),
(20, 'Penguin Random House Grupo Editorial España'),
(21, 'Random House Mondadori'),
(22, 'Norma S A Editorial'),
(23, 'Grupo Planeta Spain'),
(24, 'EDAF'),
(25, 'Espuela de Plata'),
(26, 'Editorial Planeta'),
(27, 'TAURUS'),
(28, 'Planeta Chile'),
(29, 'EUNED'),
(30, 'La Factoría de Ideas'),
(31, 'LD Books'),
(32, 'Ediciones Gigamesh'),
(33, 'Gigamesh Digital');

-- --------------------------------------------------------

--
-- Table structure for table `favorito`
--

CREATE TABLE `favorito` (
  `idFavorito` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favorito`
--

INSERT INTO `favorito` (`idFavorito`, `id`) VALUES
(61, 36),
(55, 39),
(47, 41),
(49, 47),
(51, 48),
(58, 49),
(54, 57);

-- --------------------------------------------------------

--
-- Table structure for table `leido`
--

CREATE TABLE `leido` (
  `id` int(11) NOT NULL,
  `idLibro` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `observaciones` varchar(500) DEFAULT NULL,
  `nota` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `leido`
--

INSERT INTO `leido` (`id`, `idLibro`, `idUsuario`, `observaciones`, `nota`) VALUES
(36, 4, 2, 'Trelawney forever', 5),
(38, 6, 2, NULL, NULL),
(39, 10, 2, NULL, NULL),
(40, 11, 2, NULL, NULL),
(41, 12, 2, 'Precioso de principio a fin', 5),
(44, 14, 2, 'Da miedito', 3),
(45, 15, 2, NULL, NULL),
(46, 2, 1, NULL, NULL),
(47, 7, 1, NULL, NULL),
(48, 6, 1, NULL, NULL),
(49, 10, 1, NULL, NULL),
(55, 21, 1, NULL, NULL),
(56, 22, 1, NULL, NULL),
(57, 23, 1, NULL, NULL),
(58, 24, 1, NULL, NULL),
(59, 25, 1, NULL, NULL),
(60, 8, 1, NULL, NULL),
(61, 8, 2, NULL, NULL),
(62, 26, 2, NULL, NULL),
(63, 27, 2, NULL, NULL),
(65, 29, 1, NULL, NULL),
(66, 26, 1, NULL, NULL),
(67, 30, 1, NULL, NULL),
(68, 31, 1, NULL, NULL),
(69, 32, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `libro`
--

CREATE TABLE `libro` (
  `idLibro` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `idAutor` int(11) NOT NULL,
  `idEditorial` int(11) NOT NULL,
  `sinopsis` varchar(5000) NOT NULL,
  `portada` varchar(1000) NOT NULL,
  `idGB` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `libro`
--

INSERT INTO `libro` (`idLibro`, `titulo`, `idAutor`, `idEditorial`, `sinopsis`, `portada`, `idGB`) VALUES
(1, 'Grimpow, El Camino Invisible', 24, 18, 'Presents a centuries-long journey that has driven sane men crazy, turned peaceful men violent, and made strong men powerless.', 'http://books.google.com/books/content?id=-Q6CGgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', '-Q6CGgAACAAJ'),
(2, 'Harry Potter y la Orden del Fénix', 1, 19, 'Las vacaciones de verano aún no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. No bien empieza el nuevo curso, sus temores se vuelven realidad: el Ministerio de Magia ha iniciado una campaña de desprestigio contra él y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar sus movimientos. Y por si fuera poco, Harry sospecha que Voldemort es capaz de adivinar sus pensamientos con el fin de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.', 'http://books.google.com/books/content?id=uUOBPgXQtvUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'uUOBPgXQtvUC'),
(3, 'Harry Potter y las reliquias de la muerte', 25, 6, 'La fecha crucial se acerca. Cuando cumpla diecisiete años, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado enfrentamiento a muerte con lord Voldemort es inminente, y la casi imposible misión de encontrar y destruir los restantes Horrocruxes más urgente que nunca. Ha llegado la hora final, el momento de tomar las decisiones más difíciles. Harry debe abandonar la calidez y seguridad de La Madriguera para seguir sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego, sólo dentro de sí mismo encontrará la fuerza necesaria que lo impulse en la vertiginosa carrera para enfrentarse con su destino.', 'http://books.google.com/books/content?id=V-fdPQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'V-fdPQAACAAJ'),
(4, 'Harry Potter y el misterio del príncipe', 1, 19, 'En medio de graves acontecimientos que asolan el país, Harry inicia su sexto curso en Hogwarts. El equipo de quidditch, los exámenes y las chicas lo mantienen ocupado, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad, dos alumnos son brutalmente atacados. Dumbledore sabe que, tal como se anunciaba en la Profecía, Harry y Voldemort han de enfrentarse a muerte. Así pues, para intentar debilitar al enemigo, el anciano director y el joven mago emprenderán juntos un peligroso viaje con la ayuda de un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Príncipe Mestizo.', 'http://books.google.com/books/content?id=uZDYlfDVYmEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'uZDYlfDVYmEC'),
(5, 'Harry Potter y la cámara secreta', 1, 19, 'Mientras Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería, un elfo aparece en su habitación y le advierte de que una amenaza mortal se cierne sobre la escuela. Harry no se lo piensa dos veces y, acompañado de Ron, se dirige a Hogwarts en un coche volador. Allí, Harry oye extraños susurros en los pasillos desiertos y, de pronto... los ataques comienzan. La siniestra predicción del elfo parece hacerse realidad.', 'http://books.google.com/books/content?id=zl13g5uRM4EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'zl13g5uRM4EC'),
(6, 'Harry Potter y el prisionero de Azkaban', 1, 19, 'De la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie que fue cómplice de lord Voldemort y que, dicen los rumores, quiere vengarse de Harry por haber destruido a su maestro. Por si esto fuera poco, entran en acción los dementores, unos seres abominables capaces de robarles la felicidad a los magos y de eliminar todo recuerdo hermoso de aquellos que se atreven a acercárseles. El desafío es enorme, pero Harry, Ron y Hermione son capaces de enfrentarse a todo esto y mucho más.', 'http://books.google.com/books/content?id=2EaOj7-ozKgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', '2EaOj7-ozKgC'),
(7, 'Harry Potter y la piedra filosofal', 1, 19, 'Harry vive con sus horribles tíos y el insoportable primo Dudley, hasta que su ingreso en el Colegio Hogwarts de Magia y Hechicería cambia su vida para siempre. Allí aprenderá trucos y encantamientos fabulosos, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Y, sobre todo, conocerá los secretos que lo ayudarán a cumplir con su destino.', 'http://books.google.com/books/content?id=2zgRDXFWkm8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', '2zgRDXFWkm8C'),
(8, 'Hola, Universo', 13, 7, 'Uno: Virgil Salinas, chico tímido pero amigable que se siente fuera de lugar en el seno de una familia adicta a los deportes. Dos: Valencia Somerset, inteligente y valerosa, aunque un poco secretamente solitaria, ama todo lo que tiene que ver con la naturaleza, y quien, por cierto, padece sordera. Tres: Kaori Tanaka, autoproclamada psíquica a quien persigue siempre su pequeña hermana. Y cuatro: Chet Bullens, joven ordinario cuyo único deseo es poder ignorar a todos esos raritos que le rodean, y así poder dedicarse a lo suyo: el baloncesto. Un día (en solo uno), esas cuatro vidas habrán de entrelazarse para siempre en una muy poco predecible hermandad del alma.', 'http://books.google.com/books/content?id=ssiLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'ssiLDwAAQBAJ'),
(9, 'Los pilares de la Tierra (Saga Los pilares de la Tierra 1)', 16, 20, '<p><b><i>Los pilares de la Tierra</i> es la obra maestra de Ken Follett y constituye una excepcional evocación de una época de violentas pasiones.</b></p> <p></p> <p><b>Esta edición de </b><i><b>Los pilares de la Tierra</b></i><b> incluye un prólogo del autor con motivo del 25.o aniversario de la publicación.</b></p> <p>El gran maestro de la narrativa de acción y suspense nos transporta a la Edad Media, a un fascinante mundo de reyes, damas, caballeros, pugnas feudales, castillos y ciudades amuralladas. El amor y la muerte se entrecruzan vibrantemente en este magistral tapiz cuyo centro es la construcción de una catedral gótica. La historia se inicia con el ahorcamiento público de un inocente y finaliza con la humillación de un rey.</p> <p><b>Reseñas:</b><br>«Fantástico desde todos los puntos de vista.»<br><i>El Mundo</i></p> <p>«<i>Los pilares de la Tierra</i> fue un hito en España, donde todavía sigue siendo el libro más leído de la historia según la Federación del Gremio de Editores.»<br><i>ABC</i></p> <p>«Alta política y bajas pasiones (y viceversa) conforman un folletín de grandes dimensiones que confirman a Follett como relojero mayor del reino del bestseller.»<br><i>Qué leer</i></p> <p>«Maravilloso... Te atrapará, fascinará y envolverá.»<br><i>Chicago Tribune</i></p> <p>«<i>Los pilares de la Tierra</i> hizo de Ken Follet uno de los autores más queridos de nuestro país.»<br><i>ABC Sevilla</i></p> <p>«Ken Follett sabe cómo tejer una historia fascinante, con personajes complejos, que todo actor sueña con interpretar.»<br>Donald Sutherland</p> <p>«Me encanta <i>Los pilares de la Tierra</i>, lo recuerdo con mucho cariño [...] es uno de aquellos títulos que se quedan grabados...»<br>Ildefonso Falcones</p> <p>«En <i>Los pilares de la Tierra</i>, Ken Follett nos presenta a unos personajes que consiguen que la historia cobre vida.»<br>Ridley Scott</p> <p><b>Los lectores opinan...</b><br>«Mi libro favorito.»<br>Ana María</p> <p>«Lo he leído tres veces, es fascinante.»<br>Dolores</p> <p>«Un libro que, sin duda, está entre mis favoritos.»<br>Alexander</p> <p>«¡Gran obra!»<br>Andrés</p> <p>«Una historia fantástica, inolvidable.»<br>Faby</p> <p><b>Reseñas:</b><br>«Fantástico desde todos los puntos de vista.»<br><i>El Mundo</i></p> <p>«<i>Los pilares de la Tierra</i> fue un hito en España, donde todavía sigue siendo el libro más leído de la historia según la Federación del Gremio de Editores.»<br><i>ABC</i></p> <p>«Alta política y bajas pasiones (y viceversa) conforman un folletín de grandes dimensiones que confirman a Follett como relojero mayor del reino del <i>bestseller</i>.»<br><i>Qué leer</i></p> <p>«Maravilloso... Te atrapará, fascinará y envolverá.»<br><i>Chicago Tribune</i></p> <p>«<i>Los pilares de la Tierra</i> hizo de Ken Follet uno de los autores más queridos de nuestro país.»<br><i>ABC Sevilla</i></p> <p>«Ken Follett sabe cómo tejer una historia fascinante, con personajes complejos, que todo actor sueña con interpretar.»<br>Donald Sutherland</p> <p>«Me encanta <i>Los pilares de la Tierra</i>, lo recuerdo con mucho cariño [...] es uno de aquellos títulos que se quedan grabados...»<br>Ildefonso Falcones</p> <p>«En <i>Los pilares de la Tierra</i>, Ken Follett nos presenta a unos personajes que consiguen que la historia cobre vida.»<br>Ridley Scott</p> <p><b>Los lectores opinan...</b><br>«Mi libro favorito.»<br>Ana María</p> <p>«Lo he leído tres veces, es fascinante.»<br>Dolores</p> <p>«Un libro que, sin duda, está entre mis favoritos.»<br>Alexander</p> <p>«¡Gran obra!»<br>Andrés</p> <p>«Una historia fantástica, inolvidable.»<br>Faby</p>', 'http://books.google.com/books/content?id=mKoInmOU130C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72mEc5MR-V5_B0V7exYCcxgiP2lpeORzl_rQT8fqt_7Nuhdyvyvva95KSwdal4YLc0Lurh3GMqD5CTQK6fzFpidHabV6lp1Sez5fu_KY1k-1GjX-3zr-BWVEXcACUKd7MAcXZ0q&source=gbs_api', 'mKoInmOU130C'),
(10, 'Harry Potter y Las Reliquias de la Muerte', 1, 19, 'La fecha crucial se acerca. Cuando cumpla los diecisiete, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado combate a muerte con Voldemort es inminente, y la casi imposible misión de encontrar y destruir los Horrocruxes restantes es más urgente que nunca. Ha llegado el momento de tomar las decisiones más difíciles. Harry debe abandonar la calidez y seguridad de La Madriguera para emprender sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego, sólo dentro de sí mismo encontrará la fuerza que lo impulsará en la vertiginosa carrera hacia un destino desconocido.', 'http://books.google.com/books/content?id=Pd4Hy4Y-d9MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'Pd4Hy4Y-d9MC'),
(11, 'Harry Potter y el cáliz de fuego', 1, 19, 'Otro deplorable verano con los Dursley llega a su fin y Harry está impaciente por regresar a Hogwarts. A sus catorce años, sólo desea ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios y asistir a los Mundiales de quidditch. Sin embargo, en Hogwarts le espera un desafío de grandes proporciones, por lo que tendrá que demostrar que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.', 'http://books.google.com/books/content?id=R2daemCCiF8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'R2daemCCiF8C'),
(12, 'El amor en los tiempos del cólera', 26, 21, 'Información no disponible', 'http://books.google.com/books/content?id=ra7DoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'ra7DoAEACAAJ'),
(13, 'Vampyr. Revamped', 2, 18, 'Un enemigo más poderoso que la muerte Un amor mas profundo que la noche', 'http://books.google.com/books/content?id=nVpADQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'nVpADQAAQBAJ'),
(14, 'Vampyr (Spanish)', 2, 22, 'Martina es una adolescente traviesa que vive en un prestigioso internado en Suiza. Cuando Susana Strossner, la nueva alumna, llega al internado, Martina nota que no es una chica normal. Una serie de extrañas muertes pone a Martina sobre aviso y no pasa mucho tiempo hasta que llega a la conclusión de que Susana es un vampyr. Esto, por supuesto, sólo puede contárselo a Carmen, su mejor amiga, pues sabe que nadie más creería algo semejante en pleno siglo XIX. Una noche en que Susana intenta atacar a Martina en la oscuridad, ésta es salvada por un misterioso personaje cuyo rostro no logra distinguir pero a quien, al parecer, Susana conoce.', 'http://books.google.com/books/content?id=YoQfQAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'YoQfQAAACAAJ'),
(15, 'La psiquiatra', 27, 6, 'Información no disponible', 'http://books.google.com/books/content?id=uOXqmwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'uOXqmwEACAAJ'),
(16, 'La chica del tren (Edición mexicana)', 28, 23, '¿Estabas en el tren de las 8.04? ¿Viste algo sospechoso? Rachel, sí Rachel toma siempre el tren de las 8.04 h. Cada mañana lo mismo: el mismo paisaje, las mismas casas... y la misma parada en la señal roja. Son solo unos segundos, pero le permiten observar a una pareja desayunando tranquilamente en su terraza. Siente que los conoce y se inventa unos nombres para ellos: Jess y Jason. Su vida es perfecta, no como la suya. Pero un día ve algo. Sucede muy deprisa, pero es suficiente. ¿Y si Jess y Jason no son tan felices como ella cree? ¿Y si nada es lo que parece? Tú no la conoces. Ella a ti, sí. «Un impresionante debut en el mundo del thriller.» The Guardian «Agárrate fuerte... Nunca sabes los horrores que acechan en la siguiente curva» USA Today «Nada como un posible asesinato para romper la monotonía de tu viaje diario en metro» Cosmopolitan', 'http://books.google.com/books/content?id=0eOqCQAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', '0eOqCQAAQBAJ'),
(17, 'Las aventuras de Tom Sawyer', 29, 24, 'Con Las aventuras de Tom Sawyer, Mark Twain empieza a revivir su niñez y su adolescencia mezclándolas con la ficción. La novela es una narración para niños, llena de peripecias; los héroes son los niños, pero también tiene un mensaje claro y directo para los adultos. El entorno de San Petersburgo (Hannibal) es un mundo inmenso, desconocido y tentador para Tom y Huck, universo que hay que investigar, explorar y conquistar.', 'http://books.google.com/books/content?id=uAkgkfHL_ysC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'uAkgkfHL_ysC'),
(18, 'La Isla del Tesoro', 30, 25, 'Stevenson empezó a escribir La Isla del Tesoro en unas vacaciones estivales al norte de Escocia, en 1881, a petición de un jovencito de 13 años llamado Lloyd Osborne. Es bien conocido que escribió la novela al tiempo que la ideaba en su cabeza, casi como si de un juego se tratara y a partir de un mapa imaginario que él mismo dibujó de la isla y a la que fue añadiendo los más diversos paisajes: montes, cabos, bahías, acantilados... A la tarea de confeccionar esta novela tan itinerante, pronto se unieron los padres, además de otros familiares y amigos: la novela se había convertido en el pasatiempo familiar de las vacaciones. Sin duda esta particular y espontánea planificación de la obra contribuyó a darle ese ritmo frenético y esa frescura que han hecho de la isla del tesoro un auténtico canto a la libertad, convirtiéndola en lectura universal obligada de la que ningún lector, que quiera presumir de serlo, ha de renunciar al menos media docena de veces a lo largo de su vida de lector; y si renunciara, si es que acaso puede renunciarse, sea por buscar y vivir mejores e intensas aventuras, si es que esto es posible más allá de este libro, siguiendo y manteniendo intacta la intención primera de Stevenson al publicar la novela: «Que a ti también, / como a Jim Hawkins aquel día, / te aguarde una Hispaniola». Pero mientras aguardamos la visita de nuestra particular Hispaniola, leer o releer La Isla del Tesoro -hoy con la excusa de conocer la excelente traducción que rescatamos del poeta José María Álvarez-, puede funcionar como inmejorable sustituto hasta que llegue ese día. Si es que algún día llega. Robert Louis Stevenson (Edimburgo, 1850-Vailima, Samoa, 1894). Autor de cabecera de multitud de escritores como Borges, Kipling o Chesterton, es conocido sobre todo por las dos obras que generación tras generación siguen leyendo los jóvenes de todo el mundo: La Isla del Tesoro (1883) y El extraño caso del doctor Jekyll y el señor Hyde (1886). Una lectura honda de ellas nos desvela que no sólo son dos excelentes ejemplos de novela de aventura y de terror juveniles; ambas reflejan el anhelo de todo hombre que vivió el apogeo de esa gran empresa civilizadora que fue el Imperio Británico: escapar de la férrea rigidez moral y ética de la sociedad victoriana. ¿No es acaso el señor Hyde un desdoblamiento de personalidad liberador, un febril ataque de barbarie hacia un mundo encadenado por los «buenos comportamientos» y el «saber estar»? Esta huida, en La Isla del Tesoro, llega a ser física, real, como la que realizaron tantísimos marineros (o el mismo Stevenson, que surcó los mares de medio mundo a pesar de su delicado estado de salud) dispuestos a llevar a cabo el lema de Nelson en Trafalgar: «Inglaterra espera que cada hombre cumpla con su deber».', 'http://books.google.com/books/content?id=F3up3isnDSkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'F3up3isnDSkC'),
(19, 'La conspiración', 31, 23, 'Un nuevo satélite de la NASA demuestra la existencia de un extraño objeto enterrado en el hielo del Ártico. Para la agencia espacial norteamericana se trata de una victoria muy necesaria para la política espacial de los EE.UU. y para la futura elección de su Presidente. La analista de inteligencia Rachel Sexton y el académico Michael Tolland son los encargados de verificar la autenticidad del hallazgo. Una vez allí descubren lo impensable: todo ha sido un engaño. Pero antes de que puedan hablar con el Presidente, Rachel y Michael son atacados por un grupo de asesinos a sueldo controlados por un misterioso hombre que no se detendrá ante nada para ocultar la verdad. Dan Brown transporta a los lectores a la Oficina Nacional de Reconocimiento (NRO), a las plataformas de hielo del círculo polar ártico y a los pasillos del Ala Oeste de la Casa Blanca en un emocionante thriller que recorre los secretos mejor guardados de los servicios secretos norteamericanos.', 'http://books.google.com/books/content?id=9zhToKTiY-oC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', '9zhToKTiY-oC'),
(20, 'Fortaleza digital', 31, 26, 'Cuando el sofisticado superordenador de la NSA —la agencia de Inteligencia más poderosa del mundo— intercepta un código que es incapaz de descifrar, ésta debe recurrir a su mejor criptógrafa, Susan Fletcher. Fletcher descubrirá algo que hará tambalear las más altas esferas de poder: un intrincado código que, si llegara a hacerse público, podría provocar el mayor desastre de la historia de los servicios de inteligencia de Estados Unidos. Atrapada en una espiral de secretos y mentiras, Fletcher quiere salvar la agencia en la que cree pero, traicionada por todos, pronto se da cuenta de que debe luchar no sólo por su país, sino también por su vida. Una batalla por la supervivencia, una carrera crucial para destruir una creación de increíble sabiduría que amenaza con poner en jaque el equilibrio del poder mundial...para siempre. Un trepidante y vertiginoso thriller que transporta a los lectores desde las calles de Sevilla o los rascacielos de Tokio hasta el corazón de uno de los organismos más secretos del mundo. La primera novela de Dan Brown.', 'http://books.google.com/books/content?id=Q5IrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'Q5IrDwAAQBAJ'),
(21, 'Ángeles y demonios', 31, 23, 'Robert Langdon, experto en simbología, es convocado a un centro de investigación suizo para analizar un misterioso signo marcado a fuego en el pecho de un físico asesinado. Allí, Langdon descubre el resurgimiento de una antigua hermandad secreta: los illuminati, que han emergido de las sombras para llevar a cabo la fase final de una legendaria venganza contra su enemigo más odiado: la Iglesia católica. Los peores temores de Langdon se confirman cuando los illuminati anuncian que han escondido una bomba en el corazón de la Ciudad del Vaticano. Con la cuenta atrás en marcha, Langdon viaja a Roma para unir fuerzas con Vittoria Vetra, una bella y misteriosa científica. Los dos se embarcarán en una desesperada carrera contrarreloj por los rincones menos conocidos del Vaticano. Ángeles y demonios, la primera aventura del carismático e inolvidable Robert Langdon, es un adictivo y trepidante thriller sobre la eterna pugna entre ciencia y religión. Esta lucha se convierte en una verdadera guerra que pondrá en jaque a toda la humanidad, que deberá luchar hasta el último minuto para evitar un gran desastre.', 'http://books.google.com/books/content?id=hWC-0V9ThcUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'hWC-0V9ThcUC'),
(22, 'El código Da Vinci', 31, 23, 'Robert Langdon recibe una llamada en mitad de la noche: el conservador del museo del Louvre ha sido asesinado en extrañas circunstancias y junto a su cadáver ha aparecido un desconcertante mensaje cifrado. Al profundizar en la investigación, Langdon, experto en simbología, descubre que las pistas conducen a las obras de Leonardo Da Vinci... y que están a la vista de todos, ocultas por el ingenio del pintor. Langdon une esfuerzos con la criptóloga francesa Sophie Neveu y descubre que el conservador del museo pertenecía al priorato de Sión, una sociedad que a lo largo de los siglos ha contado con miembros tan destacados como sir Isaac Newton, Botticelli, Victor Hugo o el propio Da Vinci, y que ha velado por mantener en secreto una sorprendente verdad histórica. Una mezcla trepidante de aventuras, intrigas vaticanas, simbología y enigmas cifrados que provocó una extraordinaria polémica al poner en duda algunos de los dogmas sobre los que se asienta la Iglesia católica. Una de las novelas más leídas de todos los tiempos.', 'http://books.google.com/books/content?id=BnuBtgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'BnuBtgEACAAJ'),
(23, 'La toma de decisiones en política criminal : bases para un análisis multidisciplinar', 32, 6, 'Información no disponible', 'http://books.google.com/books/content?id=CNi1oAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'CNi1oAEACAAJ'),
(24, 'Isabel II', 33, 27, 'Premio Nacional de Historia 2011 Luces y sombras de la monarquía en uno de los periodos más convulsos de la historia de España. La llegada al trono de Isabel II, cuando aún era una niña, suscitó una guerra civil y abrió el camino para la ruptura liberal con el absolutismo. Reinó bajo la larga sombra de una madre poderosa que la despreciaba, de un marido que la odiaba y de unos partidos liberales que, incapaces de entenderse entre ellos, trataron de manipularla en beneficio propio. Su concepción del poder monárquico, netamente patrimonial, fue de la mano de la inadecuación de su comportamiento personal a los valores de la sociedad burguesa. Sin embargo, la extraordinaria capacidad de desestabilización política y moral de la reina no fue la causa última de la falta de consenso del liberalismo isabelino sino su mejor exponente. Las relaciones entre la monarquía y el liberalismo decimonónico eran difíciles tanto en España como en la Europa posrevolucionaria. Este libro analiza, como nunca antes se ha hecho, la forma específica que adoptó esa tensión durante el reinado de Isabel II, un periodo fundamental de cuyos logros y limitaciones dependió, en muy buena medida, la posición de la monarquía en el régimen liberal hasta la II República. La biografía de Isabel II permite una amplia reflexión sobre el papel de la Corona e introduce nuevos elementos para el debate político actual sobre ésta, en España y en Europa.', 'http://books.google.com/books/content?id=W2yZuUMnzxgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'W2yZuUMnzxgC'),
(25, 'Di Hola', 34, 28, 'Óscar es un escritor de éxito que ve la vida a través del velo de su pesimismo, pero al conocer a Natalie todo se vuelve mejor. Sin embargo ella muere poco después, para que la prueba sea completa. La novela comienza con la muerte de la joven, que deja a Óscar completamente hundido. Ella, sabiendo lo que le pasaría a su novio con su ausencia, le deja en legado una serie de breves videos con consignas, a modo de mensajes encriptados, para salir adelante. Germán Garmendia, reconocido creador de contenido en YouTube con más de 70 millones de seguidores en todas sus redes sociales, nos interna por una historia en la que podemos ser testigos de uno de los mayores descubrimientos en la vida: el saber que a pesar de todos los obstáculos, la felicidad está a nuestro alcance. El gradual cumplimiento de esas recomendaciones en video permitirá a Óscar circular por un camino desconocido, el de la confianza, y a la vez descubrir algunas historias de su propio pasado que, seguramente, estaban en la raíz de su negatividad. De la mano de su amigo, Óscar recorre este camino y descubre que el amor es —nuevamente— posible.', 'http://books.google.com/books/content?id=MgtuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'MgtuDwAAQBAJ'),
(26, '¡Hola, Manola!', 15, 9, 'Story about an old woman who lives in the neighborhood.', 'http://books.google.com/books/content?id=CPQZa3UM_EkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'CPQZa3UM_EkC'),
(27, 'Adios, Prestiño', 15, 29, 'Información no disponible', 'http://books.google.com/books/content?id=RlrDNkbJYnEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'RlrDNkbJYnEC'),
(28, 'La casa de cadenas', 35, 30, 'En el norte de Genabackis, tres guerreros de una tribu salvaje descienden de las montañas para atacar las tierras del sur. Para uno de esos guerreros, Karsa Orlong, ese día marca el comienzo de lo que resultará ser un destino extraordinario. Pasados los años, Tavore, la inexperta consejera de la emperatriz, debe enfrentarse a la tarea de adiestrar a doce mil soldados y convertirlos en una fuerza capaz de desafiar a las hordas del profeta Sha’ik, que aguardan en el desierto sagrado. Pero la espera nunca es fácil. Los caudillos de la profetisa están enzarzados en una lucha de poder que amenaza el alma de la rebelión mientras que Sha’ik está obsesionado por la revelación de que su mayor enemigo es su propia hermana', 'http://books.google.com/books/content?id=MafXhpLqOGAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'MafXhpLqOGAC'),
(29, 'Amor', 36, 10, 'Atrévete a amar. La gran narradora chilena escribe abiertamente, haciendo un guiño a sus lectores, sobre sus experiencias en el sexo y el amor. «Mi vida sexual comenzó temprano, más o menos a los cinco años, en el kindergarten de las monjas ursulinas, en Santiago de Chile.» Con estas palabras, Isabel Allende inicia este compendio sobre amor y eros compuesto por fragmentos escogidos de sus obras, que esbozan a través de sus personajes la propia trayectoria vital de la autora. Si hay alguien capaz de describir con maestría, personalidad y humor la naturaleza caprichosa del amor, es Isabel Allende. Esta recopilación de escenas de amor, seleccionadas de entre sus libros, son una invitación a sumergirse en la lectura, soñar y sonreír. Reseña: «Un encuentro íntimo con una de las escritoras más leídas del mundo, que revela ese \"misterio de lo prohibido\" que está tan de moda.» El Norte de Castilla', 'http://books.google.com/books/content?id=KIGeCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'KIGeCwAAQBAJ'),
(30, 'DANZA DE DRAGONES: CANCION DE HIELO Y FUEGO 5. BOLSILLO', 38, 32, 'Información no disponible', 'http://books.google.com/books/content?id=4xI4QwAACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE727zBISSUFo1I8jir2jr4eiG5SsxjV4DHdsGiN-AHB_4OS2pmALQ1HNlpaw2Ikm6ogvzOpSuO2H622pQlp8uhNc2fyhj4ztb3ai5BOCPAINM1jdmOJZWPFZc_YRzwx1dR2EPWiI&source=gbs_api', '4xI4QwAACAAJ'),
(31, 'El dragón de hielo', 39, 18, 'Una exquisita edición ilustrada de El dragón de hielo, un cuento del maestro del fantasy George R.R. Martin. Todos en la aldea coinciden: Adara es una niña rara, una niña del invierno. Nació durante la peor helada que se recuerda, y el frío se quedó para siempre con ella. Es fácil verla pasear sola por los campos helados o construir imaginarios castillos de arena y hielo. Nadie lo sabe, pero espera, impaciente, la visita del dragón de hielo. Adara no puede entender por qué todos le temen tanto si para ella es su mejor compañero de juegos. Con él se olvida de que el eterno enemigo del norte se acerca peligrosamente a la aldea y que lo mejor sería huir a las tierras cálidas del sur... George R.R. Martin, mundialmente conocido por su saga de literatura fantástica «Canción de hielo y fuego», nos ofrece este conmovedor relato de una amistad que puede con todas las barreras. Reseñas: «Este encantador cuento de Martin está lleno de pasión y poder... una aventura conmovedora con la tensión narrativa que cabría esperar en un autor de esta talla.» January Magazine «Martin va más allá de lo que podríamos esperar al ofrecernos este extraordinario cuento. Imprescindible para los fans de Martin, este es un buen libro para cualquiera... que ame el invierno y los dragones.» SFRevu', 'http://books.google.com/books/content?id=3qePJIiuUAsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', '3qePJIiuUAsC'),
(32, 'El caballero de los Siete Reinos', 39, 33, '<p>Las andanzas de un caballero de Poniente. Los tres primeros relatos de Dunk y Egg Muchas son las historias que se cuentan sobre Aegon V el Improbable y ser Duncan el Alto, su leal comandante de la Guardia Real. Pero la magia y la épica de la leyenda esconden la verdadera naturaleza de los héroes: la determinación de un huérfano de Lecho de Pulgas que llegó a caballero, el arrojo de un príncipe que cambió la corte por los caminos y una mistad inquebrantable capaz de vencer intrigas, traiciones...y revueltas. Durante los reinados de Daeron II y Aerys I, cuando las heridas de la rebelión de Fuegoscuro todavía estaban abiertas, tienen lugar las primeras aventuras de un caballero fornido y bonachón y de su escudero, un infante real, fiel y de fuerte temperamento. A medio camino entre la fantasía heroica y la novela de caballerías, \"El Caballero de los Siete Reinos\" narra las peripecias de dos héroes bondadosos en una tierra despiadada. Con tono ligero y un desarrollo ejemplar, \"El caballero de los Siete Reinos\" retoma algunos de los temas centrales de \"Canción de hielo y fuego\", como la lealtad, la justicia y la reflexión sobre el poder, pero desde la perspectiva cotidiana de la gente común y de su incidencia en escenarios desprovistos de fasto y oropel. El autor crea dos de sus personajes más entrañables y nos presenta una época mítica y terrible, cuyos conflictos dejaran impronta en la historia de los Siete Reinos y acarrearán consecuencias en los hechos narrados a partir de \"Juego de tronos\".</p>', 'http://books.google.com/books/content?id=GBEqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE706m2ZMhziHH_2ZsYYLobvjAWpLPsfR-9liKoDaGcSOBLu62J-ijp8J6qOi0lBtd2wuoC_IubUhO5KjzYcbyx6kE-G6408eyiKTA_RlyrvOSPMubXvrZwRd6UJo76tt4VbbDhVM&source=gbs_api', 'GBEqDwAAQBAJ');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rol` varchar(5) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `username`, `password`, `nombre`, `apellidos`, `email`, `rol`) VALUES
(1, 'angy', '81dc9bdb52d04dc20036dbd8313ed055', 'Ángeles', 'Bueno Aguilar', 'angy@gmail.com', 'admin'),
(2, 'soretus', '9ec87608a23b6ecb6083b89dbe59a792', 'Soraya', 'Cubino Hernández', 'sorus@mielina.es', 'user'),
(3, 'pepus', '52324e7934d933c31f7aecf35ce4b9f8', 'Pepe', 'Pérez Gil', 'pepe@email.es', 'user'),
(4, 'jacinta', '7616fe08763bd1d6a533b8287117e2d5', 'Jacinta', 'Humanes Poveda', 'jacinta@bubbles.es', 'user'),
(5, 'petra', '501a772af2839eee17b15d8fa0b37c98', 'Petra', 'Lillo Salamanca', 'petrus@email.com', 'user'),
(6, 'carlitos', '6ff47afa5dc7daa42cc705a03fca8a9b', 'carlos', 'gil pérez', 'gilito@email.net', 'user'),
(7, 'tere', 'e4f194cba29960e12d8b8f1bfedc972b', 'Teresa', 'Aguilar Agudo', 'tere@email.com', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`idAutor`);

--
-- Indexes for table `editorial`
--
ALTER TABLE `editorial`
  ADD PRIMARY KEY (`idEditorial`);

--
-- Indexes for table `favorito`
--
ALTER TABLE `favorito`
  ADD PRIMARY KEY (`idFavorito`),
  ADD KEY `fk_favorito_leido` (`id`);

--
-- Indexes for table `leido`
--
ALTER TABLE `leido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_leido_usuario` (`idUsuario`),
  ADD KEY `fk_leido_libro` (`idLibro`) USING BTREE;

--
-- Indexes for table `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`idLibro`),
  ADD KEY `fk_libro_autor` (`idAutor`),
  ADD KEY `fk_libro_editorial` (`idEditorial`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `usuario` (`username`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autor`
--
ALTER TABLE `autor`
  MODIFY `idAutor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `editorial`
--
ALTER TABLE `editorial`
  MODIFY `idEditorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `favorito`
--
ALTER TABLE `favorito`
  MODIFY `idFavorito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `leido`
--
ALTER TABLE `leido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `libro`
--
ALTER TABLE `libro`
  MODIFY `idLibro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorito`
--
ALTER TABLE `favorito`
  ADD CONSTRAINT `fk_favorito_leido` FOREIGN KEY (`id`) REFERENCES `leido` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `leido`
--
ALTER TABLE `leido`
  ADD CONSTRAINT `FK_leido_libro` FOREIGN KEY (`idLibro`) REFERENCES `libro` (`idLibro`),
  ADD CONSTRAINT `fk_leido_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Constraints for table `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `fk_libro_autor` FOREIGN KEY (`idAutor`) REFERENCES `autor` (`idAutor`),
  ADD CONSTRAINT `fk_libro_editorial` FOREIGN KEY (`idEditorial`) REFERENCES `editorial` (`idEditorial`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
