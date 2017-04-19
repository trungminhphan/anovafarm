<?php
function __autoload($class_name) {
   require_once('cls/class.' . strtolower($class_name) . '.php');
}
require_once('inc/functions.inc.php');
require_once('inc/config.inc.php');
$session = new SessionManager();
$users = new Users();
if($users->isLoggedIn()){
    transfers_to('./uploads.html');   
} 
if(isset($_POST['login'])){
    $username = $_POST['username'] ? $_POST['username'] : '';
    $password = $_POST['password'] ? $_POST['password'] : '';
    if ($users->authenticate($username, $password)) {
        $users->push_logs_in();
        transfers_to("./uploads.html");
    } else {
        $msg = 'Không thể đăng nhập, vui lòng kiểm tra lại tài khoản và mật khẩu.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>ANOVA - THÔNG TIN TRUY XUẤT NGUỒN GỐC</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
  <div class="row" id="pwd-container">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <section class="login-form">
        <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>" role="login">
          <img src="images/logo_farm.png" class="img-responsive" alt="" />
          <?php if(isset($msg) && $msg): ?>
            <div class="alert alert-danger" role="alert"><?php echo $msg; ?></div>
          <?php endif; ?>
          <input type="username" name="username" id="username" placeholder="Tài khoản" required class="form-control input-lg" value="" />
          <input type="password" name="password" class="form-control input-lg" id="password" placeholder="Mật khẩu" required />
          <div class="pwstrength_viewport_progress"></div>          
          <button type="submit" name="login" id="login" class="btn btn-lg btn-primary btn-block">Đăng nhập</button>
        </form>
      </section>  
      </div>
      <div class="col-md-4"></div>
  </div>  
</div>
</body>
</html>