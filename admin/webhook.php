<?php
// admin/webhook.php
require_once "config.php";

/**
 * Triggers a Vercel deployment using the configured Deploy Hook URL.
 * It sends a POST request using cURL and runs quietly in the background
 * without blocking the user interface.
 */
function trigger_vercel_deploy() {
    if (!defined('VERCEL_DEPLOY_HOOK_URL') || empty(trim(VERCEL_DEPLOY_HOOK_URL))) {
        // Webhook URL not configured yet
        return false;
    }
    
    $url = trim(VERCEL_DEPLOY_HOOK_URL);
    
    // Initialize cURL session
    $ch = curl_init($url);
    
    // Set cURL options for a POST request
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    // Set a very short timeout so it doesn't block the PHP script for long
    curl_setopt($ch, CURLOPT_TIMEOUT, 2); 
    
    // Execute the request
    curl_exec($ch);
    
    // Close the cURL session
    curl_close($ch);
    
    return true;
}
?>
