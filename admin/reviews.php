<?php
// admin/reviews.php
// Admin page to view, approve, and delete submitted client reviews.

require_once "auth.php";

require_once "config.php";

$message = '';

// Handle approve/unapprove/delete actions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id     = intval($_POST['id'] ?? 0);
    $action = $_POST['action'] ?? '';

    if ($id > 0) {
        if ($action === 'approve') {
            $stmt = $pdo->prepare("UPDATE reviews SET approved = 1 WHERE id = :id");
            $stmt->execute([':id' => $id]);
            $message = "Review verified & approved! It is now live on the website.";
        } elseif ($action === 'unapprove') {
            $stmt = $pdo->prepare("UPDATE reviews SET approved = 0 WHERE id = :id");
            $stmt->execute([':id' => $id]);
            $message = "Review unapproved and hidden from the website.";
        } elseif ($action === 'edit') {
            $name   = trim(strip_tags($_POST['name'] ?? ''));
            $rating = intval($_POST['rating'] ?? 5);
            $review = trim(strip_tags($_POST['review'] ?? ''));

            if (!empty($name) && !empty($review) && $rating >= 1 && $rating <= 5) {
                $stmt = $pdo->prepare("UPDATE reviews SET name = :name, rating = :rating, review = :review WHERE id = :id");
                $stmt->execute([
                    ':name'   => $name,
                    ':rating' => $rating,
                    ':review' => $review,
                    ':id'     => $id
                ]);
                $message = "Review #$id updated successfully.";
            } else {
                $message = "Error: Name, rating (1-5), and review text are required.";
            }
        } elseif ($action === 'reject') {
            $stmt = $pdo->prepare("DELETE FROM reviews WHERE id = :id");
            $stmt->execute([':id' => $id]);
            $message = "Review permanently deleted.";
        }
    }
}

// Fetch stats
$total_count    = (int)$pdo->query("SELECT COUNT(*) FROM reviews")->fetchColumn();
$pending_count  = (int)$pdo->query("SELECT COUNT(*) FROM reviews WHERE approved = 0")->fetchColumn();
$approved_count = (int)$pdo->query("SELECT COUNT(*) FROM reviews WHERE approved = 1")->fetchColumn();

// Filter handling
$filter = $_GET['filter'] ?? 'all';
if ($filter === 'pending') {
    $sql = "SELECT * FROM reviews WHERE approved = 0 ORDER BY created_at DESC";
} elseif ($filter === 'approved') {
    $sql = "SELECT * FROM reviews WHERE approved = 1 ORDER BY created_at DESC";
} else {
    $sql = "SELECT * FROM reviews ORDER BY approved ASC, created_at DESC";
}
$reviews = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

function stars(int $n): string {
    return str_repeat('★', $n) . str_repeat('☆', 5 - $n);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Client Reviews — Soulcare Admin</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #F0EFE9; color: #2C2927; min-height: 100vh; }
    .topbar { background: #2E4C63; color: #fff; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; }
    .topbar h1 { font-size: 1.1rem; font-weight: 600; letter-spacing: .04em; }
    .topbar nav a { margin-left: 18px; color: #fff; font-size: .85rem; opacity: .85; text-decoration: none; font-weight: 500; }
    .topbar nav a:hover { opacity: 1; text-decoration: underline; }
    .container { max-width: 1000px; margin: 32px auto; padding: 0 20px; }
    .msg { background: #d4edda; border: 1px solid #a8d5b1; color: #155724; padding: 12px 16px; border-radius: 6px; margin-bottom: 24px; font-size: .9rem; font-weight: 500; }
    
    /* Filters & stats bar */
    .filters { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
    .filter-tabs { display: flex; gap: 8px; }
    .filter-tab { padding: 8px 16px; border-radius: 20px; font-size: .8rem; font-weight: 600; text-decoration: none; color: #2E4C63; background: #E2E0D8; transition: all .2s; }
    .filter-tab:hover { background: #D5D2C7; }
    .filter-tab.active { background: #2E4C63; color: #fff; }
    .count-badge { display: inline-block; background: rgba(0,0,0,0.15); padding: 1px 6px; border-radius: 10px; font-size: .7rem; margin-left: 4px; }
    .filter-tab.active .count-badge { background: rgba(255,255,255,0.25); color: #fff; }

    .badge { display: inline-block; padding: 4px 10px; border-radius: 20px; font-size: .7rem; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; }
    .badge-pending { background: #fff3cd; color: #856404; border: 1px solid #ffeeba; }
    .badge-approved { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }

    table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.04); }
    th { text-align: left; padding: 14px 18px; font-size: .7rem; text-transform: uppercase; letter-spacing: .12em; color: #2E4C63; border-bottom: 2px solid #F0EFE9; background: #fafaf8; }
    td { padding: 16px 18px; border-bottom: 1px solid #F0EFE9; font-size: .875rem; vertical-align: top; }
    tr:last-child td { border-bottom: none; }
    tr:hover td { background: #faf9f6; }
    .stars { color: #9C4719; font-size: 1rem; letter-spacing: .05em; }
    .review-text { color: #2C2927; line-height: 1.5; max-width: 440px; }
    .review-date { color: #8A8880; font-size: .75rem; margin-top: 6px; }
    form.action-form { display: inline; }
    .btn { display: inline-block; padding: 7px 14px; font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; border: none; cursor: pointer; border-radius: 4px; transition: opacity .2s; }
    .btn:hover { opacity: .85; }
    .btn-approve { background: #28a745; color: #fff; margin-right: 6px; }
    .btn-unapprove { background: #6c757d; color: #fff; margin-right: 6px; }
    .btn-edit { background: #2E4C63; color: #fff; margin-right: 6px; }
    .btn-delete { background: #9C4719; color: #fff; }
    .empty { text-align: center; padding: 48px; color: #8A8880; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,.04); font-size: 1rem; }
  </style>
</head>
<body>
  <div class="topbar">
    <h1>Soulcare Admin — Review Moderation</h1>
    <nav>
      <a href="index.php">← Back to Dashboard</a>
      <a href="logout.php">Logout</a>
    </nav>
  </div>

  <div class="container">
    <?php if ($message): ?>
      <div class="msg"><?= htmlspecialchars($message) ?></div>
    <?php endif; ?>

    <div class="filters">
      <div class="filter-tabs">
        <a href="reviews.php?filter=all" class="filter-tab <?= $filter === 'all' ? 'active' : '' ?>">
          All Reviews <span class="count-badge"><?= $total_count ?></span>
        </a>
        <a href="reviews.php?filter=pending" class="filter-tab <?= $filter === 'pending' ? 'active' : '' ?>">
          Pending Verification <span class="count-badge"><?= $pending_count ?></span>
        </a>
        <a href="reviews.php?filter=approved" class="filter-tab <?= $filter === 'approved' ? 'active' : '' ?>">
          Approved & Live <span class="count-badge"><?= $approved_count ?></span>
        </a>
      </div>
    </div>

    <?php if (empty($reviews)): ?>
      <div class="empty">No reviews found for this section.</div>
    <?php else: ?>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($reviews as $r): ?>
          <tr>
            <td><strong>#<?= $r['id'] ?></strong></td>
            <td><strong><?= htmlspecialchars($r['name']) ?></strong></td>
            <td>
              <span class="stars"><?= stars((int)$r['rating']) ?></span>
              <br><small style="color:#8A8880;">(<?= $r['rating'] ?>/5 stars)</small>
            </td>
            <td>
              <div class="review-text"><?= nl2br(htmlspecialchars($r['review'])) ?></div>
              <div class="review-date">Submitted: <?= date('d M Y, g:ia', strtotime($r['created_at'])) ?></div>
            </td>
            <td>
              <?php if ($r['approved']): ?>
                <span class="badge badge-approved">✓ Approved</span>
              <?php else: ?>
                <span class="badge badge-pending">⏳ Pending</span>
              <?php endif; ?>
            </td>
            <td>
              <?php if (!$r['approved']): ?>
                <form class="action-form" method="POST">
                  <input type="hidden" name="id" value="<?= $r['id'] ?>">
                  <input type="hidden" name="action" value="approve">
                  <button class="btn btn-approve" type="submit">✓ Approve & Publish</button>
                </form>
              <?php else: ?>
                <form class="action-form" method="POST">
                  <input type="hidden" name="id" value="<?= $r['id'] ?>">
                  <input type="hidden" name="action" value="unapprove">
                  <button class="btn btn-unapprove" type="submit">Unapprove</button>
                </form>
              <?php endif; ?>
              <button class="btn btn-edit" type="button" onclick="toggleEdit(<?= $r['id'] ?>)">✏ Edit</button>
              <form class="action-form" method="POST" onsubmit="return confirm('Permanently delete review #<?= $r['id'] ?>?')">
                <input type="hidden" name="id" value="<?= $r['id'] ?>">
                <input type="hidden" name="action" value="reject">
                <button class="btn btn-delete" type="submit">✕ Delete</button>
              </form>
            </td>
          </tr>

          <!-- Inline Edit Form Row -->
          <tr id="edit-row-<?= $r['id'] ?>" style="display: none; background: #faf7f2;">
            <td colspan="6" style="padding: 20px; border-bottom: 2px solid #E2E0D8;">
              <form method="POST" style="display: flex; flex-direction: column; gap: 14px; max-width: 650px;">
                <input type="hidden" name="id" value="<?= $r['id'] ?>">
                <input type="hidden" name="action" value="edit">
                
                <div style="font-weight: 700; font-size: 13px; color: #2E4C63; text-transform: uppercase; letter-spacing: 0.05em;">
                  Editing Review #<?= $r['id'] ?>
                </div>

                <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                  <div style="flex: 1; min-width: 200px;">
                    <label style="display: block; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 6px; color: #2E4C63;">Name / Initials</label>
                    <input type="text" name="name" value="<?= htmlspecialchars($r['name']) ?>" required style="width: 100%; padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px;">
                  </div>
                  <div style="width: 160px;">
                    <label style="display: block; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 6px; color: #2E4C63;">Rating</label>
                    <select name="rating" style="width: 100%; padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; background: white;">
                      <?php for ($i = 5; $i >= 1; $i--): ?>
                        <option value="<?= $i ?>" <?= (int)$r['rating'] === $i ? 'selected' : '' ?>><?= $i ?> Stars (<?= stars($i) ?>)</option>
                      <?php endfor; ?>
                    </select>
                  </div>
                </div>

                <div>
                  <label style="display: block; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 6px; color: #2E4C63;">Review Content</label>
                  <textarea name="review" rows="4" required style="width: 100%; padding: 10px 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; line-height: 1.5; font-family: inherit; resize: vertical;"><?= htmlspecialchars($r['review']) ?></textarea>
                </div>

                <div style="display: flex; gap: 10px; justify-content: flex-end; pt-2;">
                  <button type="button" onclick="toggleEdit(<?= $r['id'] ?>)" class="btn" style="background: #8A8880; color: white;">Cancel</button>
                  <button type="submit" class="btn" style="background: #28a745; color: white;">Save Changes</button>
                </div>
              </form>
            </td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    <?php endif; ?>
  </div>
  <script>
    function toggleEdit(id) {
      var row = document.getElementById('edit-row-' + id);
      if (row) {
        row.style.display = row.style.display === 'none' ? 'table-row' : 'none';
      }
    }
  </script>
</body>
</html>
