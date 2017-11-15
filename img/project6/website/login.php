<?php
	    
 // $jsondata = file_get_contents('data.json');
 // $password = json_decode($password, true);
 // $username = json_decode($username, true);

//Changing this to json
    $username = "username";
    $password = "password";


      if(isset($_POST['username']) && $_POST['username'] == $username){
        if(isset($_POST['password']) && $_POST['password'] == $password){
          echo "<script>window.location.href='handin.php';</script>";
        }
      }

     ?>
	<?php include ("partials/header.php"); ?>
		<div class="main-content">
			<div class="login">
				<div class="login-triangle"></div>
				<h2 class="login-header">Log in</h2>
				<form class="login-container" action="" method="post">
					<h4 class="form-signin-heading"></h4>
					<p>
						<input type="text" name="username" value="" placeholder="Username = username" required autofocus>
					</p>
					<p>
						<input type="password" name="password" value="" placeholder="Password = password" required>
					</p>
					<p>
						<input type="submit" name="" value="Log in">
					</p>
				</form>
			</div>
		</div>
		<?php include ("partials/footer.php"); ?>