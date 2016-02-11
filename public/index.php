<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9 en" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js en" lang="en"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Starter</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Edit address bar colour to match site theme -->
	<meta name="theme-color" content="#999999">

	<!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->

	<link rel="stylesheet" href="assets/css/main.css">
	<script src="assets/js/modernizr.js"></script>
</head>

<body id="dndq" data-controller="home" data-action="">

	<main role="main">
		<section id="quiz--1" class="quiz__container quiz__start active" data-page="1">
			<h1>Let's play</h1>

			<button class="btn quiz__next" type="button" name="button">Start</button>
		</section>

		<section id="quiz--2" class="quiz__container quiz__radio" data-page="2">
			<div class="radio">
				<label for="radio_1">Radio 1</label>
				<input type="radio" name="radio" id="radio_1" value="">

				<label for="radio_2">Radio 2</label>
				<input type="radio" name="radio" id="radio_2" value="">

				<label for="radio_3">Radio 3</label>
				<input type="radio" name="radio" id="radio_3" value="">

				<label for="radio_4">Radio 4</label>
				<input type="radio" name="radio" id="radio_4" value="">
			</div>

			<button class="btn quiz__next" type="button" name="button" disabled="disabled">Next</button>
		</section>

		<section id="quiz--3" class="quiz__container" data-page="3">
			<div id="top-defaults" class="quiz__list">
				<div class="quiz__item"><img src="http://placehold.it/100x100" alt="" /></div>
				<div class="quiz__item"><img src="http://placehold.it/100x100" alt="" /></div>
				<div class="quiz__item"><img src="http://placehold.it/100x100" alt="" /></div>
				<div class="quiz__item"><img src="http://placehold.it/100x100" alt="" /></div>
				<div class="quiz__item"><img src="http://placehold.it/100x100" alt="" /></div>
				<div class="quiz__item"><img src="http://placehold.it/100x100" alt="" /></div>
			</div>
			<div id="bottom-defaults" class="quiz__dropbox"></div>

			<button class="btn quiz__next" type="button" name="button">Next</button>
		</section>

		<section id="quiz--4" class="quiz__container quiz__radio" data-page="4">
			<div class="radio">
				<label for="radio_5">Radio 1</label>
				<input type="radio" name="radio" id="radio_5" value="">

				<label for="radio_6">Radio 2</label>
				<input type="radio" name="radio" id="radio_6" value="">

				<label for="radio_7">Radio 3</label>
				<input type="radio" name="radio" id="radio_7" value="">

				<label for="radio_8">Radio 4</label>
				<input type="radio" name="radio" id="radio_8" value="">
			</div>

			<button class="btn quiz__next" type="button" name="button" disabled="disabled">Next</button>
		</section>

		<section id="quiz--5" class="quiz__container" data-page="5">
			<h1>You are a narwhal!</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			<form class="" action="" method="post">
				<input type="email" name="name" value="">
				<button class="btn quiz__next" type="button" name="button">Next</button>
			</form>

			<a href="#" class="quiz__next">No thanks</a>
		</section>

		<section id="quiz--6" class="quiz__container quiz__end" data-page="6">
			<h1>Finish!</h1>

			<button class="btn quiz__reset" type="button" name="button">Start over</button>
		</section>
	</main>

	<script src="assets/js/app.min.js"></script>
</body>
</html>
