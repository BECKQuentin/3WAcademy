<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'mindgeek');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'mindgeek');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', '123');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'V-;LPWAO5z=(eF&_Qo#H~bH6c39@2,X0hTT`[?As|42fqL|&xW1?g Kb:)>nc5PI');
define('SECURE_AUTH_KEY',  'H~2xksbs<PB=f+#k{dnXv9cYDnJ^b)&Qom>d&x;WJ.T;[+%,hrCgt$/]9a /KJjg');
define('LOGGED_IN_KEY',    '/T}+c!,yGP~jam]U%ge0&e&WpedmjXU}0*T+W=4tQ1ekbxv*mpuB2(e{aYog<j6S');
define('NONCE_KEY',        'YodfP1e;2v{d]2`eo}9lie-hXP[h&q/gMNqP)7E&6(HTXXkTny:yF{y /(VPf6+)');
define('AUTH_SALT',        '%y/G7,RR S[g+XSbBIX!aHqfZdUlK4,ew0TGGgcr[.q5j!LW Vx?9I]rZlJ5hN_5');
define('SECURE_AUTH_SALT', ')PEZYnnDxL{Pd+KYR*9A35rE@D;K!RGWH|0EWai$Q=WeAF2IzhvnoDjZ$^!]0!se');
define('LOGGED_IN_SALT',   'zS.^ZRhaO-R?ZrRbCtm~{UvmNQk?YB~;xO=oWUueteX!a)&d{p_uv er^mCn47,d');
define('NONCE_SALT',       'inLq;^=Hdf;&J{~ 2*HV_YRi y=@ufIExp#u!W=pOQGUFxHT]-Fr57S*kv)){6!v');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');