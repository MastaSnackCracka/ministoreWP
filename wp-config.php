<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ministore' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'F,d5~..Vh?O`ltL aM#yngO(gUxm-]w2F$Z:LIMfz]1(o$eh*mKZM}hlY~S:~*21' );
define( 'SECURE_AUTH_KEY',  '<<pXPG$JD38gB;miV:h|.Ga_PAq?6nR`0KdOg].Y_Xz#(G@N.dbDO}&7l(}UH[X,' );
define( 'LOGGED_IN_KEY',    'AK_d`C34rgp@!lzbfc_<i+|q6!VJB)Kf3$3/ry)`]T&e%%i_VvG*V(}6FR2$mVgn' );
define( 'NONCE_KEY',        'tUb^;=/k21CTOP?*BtSoNIn/37:P&&/=5Mbi=fz|M+?]1N}^Lf+E=3Z`EJBB}f`7' );
define( 'AUTH_SALT',        'kln^OA$K3P4X{jY,*z0s,J!w44LBW09 hlTV<F_3ru3,6Adys4*ZFyI]J)<7X`4c' );
define( 'SECURE_AUTH_SALT', 'k@wz&i-6(-3B^^t]E7E~;>t#Vp$%lcEDdP%i ;RDhJD aRDms<}%pF<9nvv8a[0T' );
define( 'LOGGED_IN_SALT',   'b)^d |Z{86/9`V7,d3PM;toxlL=W44(r$P|Xdq{f{2CZAa/(cdfl5}-kUfd9F<ca' );
define( 'NONCE_SALT',       'Xl5aT^;#l0g[/t-ia[stP#[p@z ?fr 9Kh8sGW5SUDq?6 K_ejiAA:6go_q.#XIe' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
