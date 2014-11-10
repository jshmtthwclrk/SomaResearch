<!DOCTYPE html>

<html>
	<head>
		<style> .error {color: #FF0000;} </style>
	</head>
	<body>
		
		<?php
		// Instantiates variables and set to empty values
		$nameErr = $emailErr = $titleErr = "";
		$name = $email = $title = "";

		$papers[0] = 'MovementAsAFunctionofEngagement.pdf';

		if ($_SERVER["REQUEST_METHOD"] == "DOWNLOAD") {
		  	
			// Checks to see if they have entered something into the field
		  	if (empty($_DOWNLOAD["name"])) {
		    	$nameErr = "Name is required";
		 	} else {
		    	$name = test_input($_DOWNLOAD["name"]);
		    	// check if name only contains letters and whitespace
			    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
			    	$nameErr = "Only letters and white space allowed"; 
			    }
		  	}

		  	// Checks to see if they have entered something into the field
		  	if (empty($_DOWNLOAD["email"])) {
		    	$emailErr = "Email is required";
		  	} else {
		    	$email = test_input($_DOWNLOAD["email"]);
		    	// check if e-mail address is well-formed
		    	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		    		$emailErr = "Invalid email format";
		    	}
		  	}

		  	// Checks to see if they have entered something into the field
		  	if (empty($_DOWNLOAD["title"])) {
		    	$titleErr = "Title is required";
		 	} else {
		    	$title = test_input($_DOWNLOAD["title"]);
		  	}
		}

		// This function takes in the data given and returns 
		function test_input($data) {
		  $data = trim($data);
		  $data = stripslashes($data);
		  $data = htmlspecialchars($data);
		  return $data;
		}
		?>

		<h2>Download Research Paper</h2>
		<p><span class="error">* required field.</span></p>
		<form method="download" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			Name: <input type="text" name="name">
			<span class="error">* <?php echo $nameErr;?></span>
			<br><br>
			E-mail:
			<input type="text" name="email">
			<span class="error">* <?php echo $emailErr;?></span>
			<br><br>
			<input type="radio" name="title" value="Movement as a Function of Young Children's Engagement">
			<span class="error">* <?php echo $titleErr;?></span>
			<br><br>
			<input type="submit" name="submit" value="Submit">
		</form>

		<?php
		// the subject
		$subject = "Download " + $title;

		// the message
		$msg = "To download the research paper " + $title + " click the link below";
		// use wordwrap() if lines are longer than 70 characters
		$msg = wordwrap($msg, 70);

		// Sets up path in directory for access to the file
		include $_SERVER['DOCUMENT_ROOT']."/other/people.txt";
		// The name of the file to write to
		$filename = 'people.txt';
		// The new data to add to the file
		$info = $name + ", " + $email + ", " + $title;

		// appends user given name, email, and desired paper to file,
		// using the FILE_APPEND flag to append the content
		// using the LOCK_EX flag to prevent anyone else writing to the file at the same time
		file_put_contents($filename, $info, FILE_APPEND | LOCK_EX)

		// send email
		mail("$email", "$subject", "$msg");
		?>
	</body>
</html>