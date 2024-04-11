<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit8a89b2f9c007daf1ad4791f3c58811fe
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit8a89b2f9c007daf1ad4791f3c58811fe', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit8a89b2f9c007daf1ad4791f3c58811fe', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit8a89b2f9c007daf1ad4791f3c58811fe::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
