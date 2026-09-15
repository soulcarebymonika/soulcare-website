<?php
require_once "config.php";

$title = "Why Your Brain Reacts to Stress the Way It Does";
$slug = "why-your-brain-reacts-to-stress-the-way-it-does";
$meta_title = "Understanding the Brain's Stress Response | Mental Health Blog";
$meta_description = "Learn the science behind why our brains react to stress and how understanding these physiological responses can help you manage anxiety better.";
$category = "Mental Wellness";
$author = "Monika Arora";
$image_alt = "Abstract visualization of neural pathways representing the brain's stress response";
$excerpt = "Understanding the physiological response to stress is the first step towards managing it effectively in our daily lives.";

$content = "
<h2>The Anatomy of Stress</h2>
<p>When you encounter a perceived threat, your brain initiates a complex cascade of events. It all starts in the amygdala, the brain's emotional processing center.</p>

<h3>The Fight or Flight Response</h3>
<p>This is a primal instinct designed to keep us safe. Here is what happens:</p>
<ul>
    <li>Your heart rate increases</li>
    <li>Breathing quickens</li>
    <li>Adrenaline rushes through your system</li>
</ul>

<blockquote>\"Stress is not what happens to us. It's our response to what happens. And response is something we can choose.\"</blockquote>

<p>By understanding these physical responses, we can begin to implement grounding techniques that signal to the brain that we are safe.</p>
";

// Setup image
$source_image = "../web/public/images/therapy_abstract_1.jpg";
$upload_dir = "uploads/";
if (!is_dir($upload_dir)) mkdir($upload_dir, 0777, true);
$image_path = $upload_dir . "sample-stress-brain.jpg";

if (file_exists($source_image)) {
    copy($source_image, $image_path);
} else {
    $image_path = "";
}

$sql = "INSERT INTO blog_posts (title, slug, meta_title, meta_description, category, author, image_alt, excerpt, content, image_path) 
        VALUES (:title, :slug, :meta_title, :meta_description, :category, :author, :image_alt, :excerpt, :content, :image_path)";
 
if($stmt = $pdo->prepare($sql)){
    $stmt->execute([
        ":title" => $title,
        ":slug" => $slug,
        ":meta_title" => $meta_title,
        ":meta_description" => $meta_description,
        ":category" => $category,
        ":author" => $author,
        ":image_alt" => $image_alt,
        ":excerpt" => $excerpt,
        ":content" => $content,
        ":image_path" => $image_path
    ]);
    echo "Sample blog post created successfully.\n";
} else {
    echo "Error creating blog post.\n";
}
?>
