import pathlib

import aiohttp_jinja2
import jinja2
from aiohttp import web

from routes import setup_routes

app = web.Application()

BASE_DIR = pathlib.Path(__file__).parent.parent


aiohttp_jinja2.setup(
    app,
    loader=jinja2.FileSystemLoader(str(BASE_DIR / 'gooflix' / 'templates'))
    )

setup_routes(app)
web.run_app(app)
