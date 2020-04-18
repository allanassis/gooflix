import aiohttp_jinja2

from request import get_titles


@aiohttp_jinja2.template('index.html')
async def index(request):
    cookies = dict(request.cookies)
    has_cookies = cookies.get("NetflixId", False) and cookies.get('SecureNetflixId', False)
    return {"cookies": has_cookies}


@aiohttp_jinja2.template('index.html')
async def titles(request):
    data = {**dict(request.query), **dict(request.cookies)}
    netflix_id = data['NetflixId']
    secure_netflix_id = data['SecureNetflixId']
    query = data['Query']

    titles = get_titles(query, netflix_id, secure_netflix_id)

    return {"titles": titles, "cookies": True}
