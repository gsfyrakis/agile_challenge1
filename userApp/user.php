<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<style type="text/css">
#wrapper {
  width: 700px ;
  margin-left: auto ;
  margin-right: auto ;
}
#apDiv1 {
	position:absolute;
	width:484px;
	height:115px;
	z-index:1;
	left: 19px;
	top: 156px;
}
#apDiv2 {
	position:absolute;
	width:127px;
	height:25px;
	z-index:1;
	left: 18px;
	top: 260px;
}
#apDiv3 {
	position:absolute;
	width:173px;
	height:27px;
	z-index:2;
	left: 147px;
	top: 259px;
}
#apDiv4 {
	position:absolute;
	width:62px;
	height:25px;
	z-index:3;
	left: 23px;
	top: 382px;
}
#apDiv5 {
	position:absolute;
	width:389px;
	height:21px;
	z-index:3;
	top: 28px;
	left: 18px;
}
#apDiv6 {
	position:absolute;
	width:133px;
	height:25px;
	z-index:4;
	left: 145px;
	top: 323px;
}
#apDiv7 {
	position:absolute;
	width:68px;
	height:20px;
	z-index:5;
	left: 20px;
	top: 324px;
}
</style>
</head>
<body>
<div id="wrapper">

<!--
<form action="upload_file.php" method="post"
enctype="multipart/form-data">
<label for="file">Filename:</label>
<input type="file" name="file" id="file"><br>
<input type="submit" name="submit" value="Submit">
</form>

<form action="upload_file.php" method="post"
enctype="multipart/form-data">
<label for="file">Filename:</label>
<input type="file" name="file" id="file"><br>
<input type="submit" name="submit" value="Submit">
</form>
-->


<form action="upload_file.php" method="post"
enctype="multipart/form-data">
<div id="apDiv5">
First name *&nbsp; <input type="text" name="firstname" size="35"><br>
Last name *&nbsp; <input type="text" name="lastname" size="35"><br>
Email * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="email" size="35"><br>
Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" name="email" size="35"><br>
City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="city" size="35"><br>
Country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="country" size="35"><br>
Postcode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="postcode" size="35"><br>
Phone No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="phone_no" size="35">


</div>
<div id="apDiv2">Upload image/video:</div>
<div id="apDiv3">
<input type="file" name="file" id="file"><br></div>
<div id="apDiv6">
<select id="gadget" name="category">
   <option value = "cat1"> cat1 </option>
   <option value = "cat2"> cat2 </option>
   <option value = "other"> other </option>
</select> 
</div>
<div id="apDiv4"><input type="submit" name="submit" value="Submit">
</div>
</form>


<div id="apDiv7">Category:</div>
</div>
</body>

</html>
