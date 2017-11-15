<?php
  session_start();
   if(!isset($_SESSION['username']));
?>
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Hand-in - group {13}</title>
		<link href="http://ioto.dk/mmd/handin.css" rel="stylesheet">
		<style>
			.button {
				display: inline-block;
				border-radius: 4px;
				background-color: #008CBA;
				border: none;
				color: #FFFFFF;
				text-align: center;
				font-size: 28px;
				padding: 20px;
				width: 200px;
				transition: all 0.5s;
				cursor: pointer;
				margin: 5px;
			}
			
			.button span {
				cursor: pointer;
				display: inline-block;
				position: relative;
				transition: 0.5s;
			}
			
			.button span:after {
				content: '\00bb';
				position: absolute;
				opacity: 0;
				top: 0;
				right: -20px;
				transition: 0.5s;
			}
			
			.button:hover span {
				padding-right: 25px;
			}
			
			.button:hover span:after {
				opacity: 1;
				right: 0;
			}
		</style>
	</head>

	<body>
		<header>
			<h1>Final Project hand in - group 13</h1> </header>
		<main>
			<ul>
				<li><a href="http://zegnor.com/fjordnbaelt/grp13-report.pdf" target="_blank" title="The report">Final Report (pdf)</a></li>
				<li><a href="http://zegnor.com/fjordnbaelt/grp13-designmanual-prototype.pdf" target="_blank" title="design manual prototype">Design Manual Game/Prototype  (pdf)</a></li>
				<li><a href="http://zegnor.com/fjordnbaelt/grp13-designmanual-site.pdf" target="_blank" title="design manual campaign site">Design Manual Site (pdf)</a></li>
				<li><a href="https://invis.io/YEBWRY6KZ" target="_blank" title="Prototype">Prototype (invision)</a></li>
				<li><a href="http://zegnor.com/fjordnbaelt/" target="_blank" title="The website / prototype">Campaign Website</a></li>
				<li><a href="http://zegnor.com/fjordnbaelt/code.zip" target="_blank" title="The code as zip">Source code and the files used for the prototype in a .rar</a></li>
				<li><a href="https://youtu.be/Rke_-9nrlP0" target="_blank" title="Youtube video">Video presentation (YouTube) </a></li>
				<li><a href="https://www.youtube.com/watch?v=v-aW8mMxMKk&feature=youtu.be" target="_blank" title="Youtube video">Explaining the code (YouTube)</a></li>
				<li><a href="https://youtu.be/OUYinhYjK4Q" target="_blank" title="Youtube video">Explaining of the game (YouTube)</a></li>
				
				<a href="logout.php">
					<button class="button" style="vertical-align:middle"><span>Log Out </span></button>
				</a>
				<!-- Other relevant links can be added -->
			</ul>
		</main>
		<footer>
			<ul>
				<li>Ignacio Eirin Torreiro (Int)</li>
				<li>Alison Pittaro (Int)</li>
				<li>Bence Henz (Int)</li>
				<li>Sedin Hecim (Int)</li>
			</ul>
		</footer>
	</body>

	</html>