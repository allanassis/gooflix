from gooflix.views import index, titles


def setup_routes(app):
    app.router.add_get('/', index)
    app.router.add_get('/title', titles)
