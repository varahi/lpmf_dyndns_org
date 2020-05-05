<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}


// Add BackendLayouts BackendLayouts for the BackendLayout DataProvider
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:piment_config/Configuration/PageTS/Mod/WebLayout/BackendLayouts.txt">');

// TSconfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:piment_config/Configuration/PageTS/TSConfig.txt">');

// RTE
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:piment_config/Configuration/PageTS/RTE.txt">');

/***************
 * Add default RTE configuration for piment_config
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['pimentrouge'] = 'EXT:piment_config/Configuration/RTE/Default.yaml';