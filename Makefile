setup:
	pip install -r ./requirements.txt

start:
	gunicorn 'gooflix.main:setup_app()' --bind localhost:8080 --worker-class aiohttp.GunicornWebWorker