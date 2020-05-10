<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Piment Config');

/**
 * Page TS Config
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:piment_config/Configuration/TSConfig/page.tsconfig">');

/**
 * Add some basic User TS Config
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:piment_config/Configuration/TSConfig/user.tsconfig">');

/**
 * Add rte_ckeditor custom config
 */
//$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom'] = 'EXT:piment_config/Configuration/RTE/Custom.yaml';
//$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['pimentrouge'] = 'EXT:piment_config/Configuration/RTE/Default.yaml';