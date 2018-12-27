<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitecbadec093a87018abce1d04aa4e9564
{
    public static $files = array (
        '3a37ebac017bc098e9a86b35401e7a68' => __DIR__ . '/..' . '/mongodb/mongodb/src/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'MongoDB\\' => 8,
            'Models\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'MongoDB\\' => 
        array (
            0 => __DIR__ . '/..' . '/mongodb/mongodb/src',
        ),
        'Models\\' => 
        array (
            0 => __DIR__ . '/../..' . '/cls',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitecbadec093a87018abce1d04aa4e9564::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitecbadec093a87018abce1d04aa4e9564::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}