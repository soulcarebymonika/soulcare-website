<?php
// admin/seed_all_posts.php
// Script to seed all blog posts from content.js into the database.

require_once "config.php";

$blogPosts = [
    [
        'slug' => "why-your-brain-reacts-to-stress-the-way-it-does",
        'title' => "Why Your Brain Reacts to Stress the Way It Does",
        'meta_title' => "Why Your Brain Reacts to Stress the Way It Does",
        'meta_description' => "Understanding the physiological response to stress is the first step towards managing it effectively in our daily lives.",
        'category' => "Mental Wellness",
        'author' => "Monika Arora",
        'image_alt' => "Why Your Brain Reacts to Stress",
        'excerpt' => "Understanding the physiological response to stress is the first step towards managing it effectively in our daily lives.",
        'content' => "<p>Our brains are hardwired for survival. When we encounter a stressful situation, the amygdala—the brain's alarm system—sends a distress signal to the hypothalamus. This triggers the 'fight or flight' response, flooding our bodies with adrenaline and cortisol.</p>",
        'image_path' => "/images/blogs/blog-1.jpg"
    ],
    [
        'slug' => "mindset-matters-replacing-self-sabotaging-thoughts",
        'title' => "Mindset Matters: Replacing Self-Sabotaging Thoughts",
        'meta_title' => "Mindset Matters: Replacing Self-Sabotaging Thoughts",
        'meta_description' => "Cognitive reframing can help you transform your inner critic into an inner coach, leading to better emotional wellbeing.",
        'category' => "Self-Growth",
        'author' => "Monika Arora",
        'image_alt' => "Mindset Matters",
        'excerpt' => "Cognitive reframing can help you transform your inner critic into an inner coach, leading to better emotional wellbeing.",
        'content' => "<p>We all have an inner dialogue, but for many of us, that voice can be overwhelmingly critical. Self-sabotaging thoughts—like 'I'm not good enough'—are common, but they are not facts.</p>",
        'image_path' => "/images/blogs/blog-2.jpg"
    ],
    [
        'slug' => "small-steps-big-impact-micro-habits",
        'title' => "Small Steps, Big Impact: Micro-Habits for Your Mental Well-being",
        'meta_title' => "Small Steps, Big Impact: Micro-Habits",
        'meta_description' => "Discover how small, consistent changes in your daily routine can dramatically improve your mental health.",
        'category' => "Mental Wellness",
        'author' => "Monika Arora",
        'image_alt' => "Micro Habits for Mental Wellbeing",
        'excerpt' => "Discover how small, consistent changes in your daily routine can dramatically improve your mental health.",
        'content' => "<p>When we think about improving our mental health, we often imagine massive lifestyle overhauls. However, psychological research suggests that sustainable change comes from micro-habits.</p>",
        'image_path' => "/images/blogs/blog-3.jpg"
    ],
    [
        'slug' => "beyond-overthinking-breaking-free-rumination-loop",
        'title' => "Beyond Overthinking: Breaking Free from the Rumination Loop",
        'meta_title' => "Beyond Overthinking: Breaking Free from the Rumination Loop",
        'meta_description' => "Learn psychological strategies to stop overthinking, break the cycle of rumination, and regain control over your thought patterns.",
        'category' => "Anxiety & Panic",
        'author' => "Monika Arora",
        'image_alt' => "Breaking Free from Rumination",
        'excerpt' => "Learn psychological strategies to stop overthinking, break the cycle of rumination, and regain control over your thought patterns.",
        'content' => "<p>We've all been there: replaying a conversation from three years ago, or agonizing over every possible outcome. This mental looping is known as rumination.</p>",
        'image_path' => "/images/blogs/blog-4.jpg"
    ],
    [
        'slug' => "worry-vs-problem-solving-difference",
        'title' => "Worry vs. Problem-Solving: How to Spot the Difference",
        'meta_title' => "Worry vs. Problem-Solving: How to Spot the Difference",
        'meta_description' => "Understand the critical difference between unproductive worry and active problem-solving to reduce anxiety.",
        'category' => "Emotional Wellbeing",
        'author' => "Monika Arora",
        'image_alt' => "Worry vs Problem Solving",
        'excerpt' => "Understand the critical difference between unproductive worry and active problem-solving to reduce anxiety and take meaningful action.",
        'content' => "<p>Many of us confuse worrying with problem-solving. We believe that if we just think about a stressor long enough, we'll eventually figure it out and feel better.</p>",
        'image_path' => "/images/blogs/blog-5.jpg"
    ],
    [
        'slug' => "mindfulness-matters-finding-stillness",
        'title' => "Mindfulness Matters: Finding Stillness in a Loud World",
        'meta_title' => "Mindfulness Matters: Finding Stillness in a Loud World",
        'meta_description' => "Explore practical mindfulness techniques to stay grounded, reduce stress, and find moments of peace.",
        'category' => "Mental Wellness",
        'author' => "Monika Arora",
        'image_alt' => "Finding Stillness Mindfulness",
        'excerpt' => "Explore practical mindfulness techniques to stay grounded, reduce stress, and find moments of peace in an increasingly noisy world.",
        'content' => "<p>In our hyper-connected world, finding a moment of genuine stillness feels almost impossible. This is where mindfulness transitions from a buzzword to a necessity.</p>",
        'image_path' => "/images/blogs/blog-6.jpg"
    ],
    [
        'slug' => "deep-breathing-science-vagus-nerve",
        'title' => "Why Deep Breathing Actually Calms You Down: The Science of the Vagus Nerve",
        'meta_title' => "Why Deep Breathing Calms You Down: The Vagus Nerve Science",
        'meta_description' => "Discover the biological mechanics behind deep breathing and how stimulating the vagus nerve acts as a natural brake pedal for anxiety.",
        'category' => "Anxiety & Panic",
        'author' => "Monika Arora",
        'image_alt' => "Science of Vagus Nerve and Deep Breathing",
        'excerpt' => "Discover the biological mechanics behind deep breathing and how stimulating the vagus nerve acts as a natural brake pedal for anxiety.",
        'content' => "<p>We've all been told to 'just take a deep breath' when we're feeling panicked. There is profound biological science backing it up: the vagus nerve.</p>",
        'image_path' => "/images/blogs/blog-7.jpg"
    ],
    [
        'slug' => "setting-boundaries-why-no-is-a-complete-sentence",
        'title' => "Setting Boundaries: Why 'No' is a Complete Sentence",
        'meta_title' => "Setting Boundaries: Why 'No' is a Complete Sentence",
        'meta_description' => "Learn how to establish healthy boundaries, overcome people-pleasing tendencies, and protect your mental energy without feeling guilty.",
        'category' => "Relationships & Boundaries",
        'author' => "Monika Arora",
        'image_alt' => "Setting Healthy Boundaries",
        'excerpt' => "Learn how to establish healthy boundaries, overcome people-pleasing tendencies, and protect your mental energy without feeling guilty.",
        'content' => "<p>For many of us, saying 'yes' is a default setting. However, the inability to set healthy boundaries is a fast track to burnout and resentment.</p>",
        'image_path' => "/images/blogs/blog-8.jpg"
    ],
    [
        'slug' => "sleep-and-emotional-regulation-connection",
        'title' => "The Connection Between Sleep and Emotional Regulation",
        'meta_title' => "The Connection Between Sleep and Emotional Regulation",
        'meta_description' => "Explore the deep psychological link between sleep deprivation and emotional instability, and learn how to optimize your rest.",
        'category' => "Mental Wellness",
        'author' => "Monika Arora",
        'image_alt' => "Sleep and Emotional Regulation",
        'excerpt' => "Explore the deep psychological link between sleep deprivation and emotional instability, and learn how to optimize your rest for better mental health.",
        'content' => "<p>Have you ever noticed that a minor inconvenience feels like an absolute catastrophe after a night of poor sleep? It is a direct result of how sleep deprivation impairs emotional regulation.</p>",
        'image_path' => "/images/blogs/blog-9.jpg"
    ]
];

$sql = "INSERT INTO blog_posts (title, slug, meta_title, meta_description, category, author, image_alt, excerpt, content, image_path) 
        VALUES (:title, :slug, :meta_title, :meta_description, :category, :author, :image_alt, :excerpt, :content, :image_path)
        ON DUPLICATE KEY UPDATE 
        title = VALUES(title), meta_title = VALUES(meta_title), meta_description = VALUES(meta_description), 
        category = VALUES(category), author = VALUES(author), excerpt = VALUES(excerpt), content = VALUES(content), image_path = VALUES(image_path)";

$insertedCount = 0;
foreach ($blogPosts as $post) {
    if ($stmt = $pdo->prepare($sql)) {
        $stmt->execute([
            ":title" => $post['title'],
            ":slug" => $post['slug'],
            ":meta_title" => $post['meta_title'],
            ":meta_description" => $post['meta_description'],
            ":category" => $post['category'],
            ":author" => $post['author'],
            ":image_alt" => $post['image_alt'],
            ":excerpt" => $post['excerpt'],
            ":content" => $post['content'],
            ":image_path" => $post['image_path']
        ]);
        $insertedCount++;
    }
}

echo "Successfully seeded {$insertedCount} blog posts into the database.\n";
?>
