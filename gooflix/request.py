import requests

params = (
    ('webp', 'true'),
    ('drmSystem', 'widevine'),
    ('isVolatileBillboardsEnabled', 'true'),
    ('routeAPIRequestsThroughFTL', 'false'),
    ('isTop10Supported', 'true'),
    ('isLocoSupported', 'false'),
    ('falcor_server', '0.1.0'),
    ('withSize', 'true'),
    ('materialize', 'true'),
    ('original_path', '/shakti/vcd95e20d/pathEvaluator'),
)


def get_titles(query, netflix_id, secure_netiflix_id):

    cookies = {
        'SecureNetflixId': secure_netiflix_id,
        'NetflixId': netflix_id,
    }

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Origin': 'https://www.netflix.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Referer': f'https://www.netflix.com/search?q={query}',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    }

    data = [
        ('path',
            f'["search","byTerm","|{query}","titles",48,{{"from":0,"to":48}},"reference",["promoVideo","summary","title","titleMaturity","userRating","userRatingRequestId"]]'),
    ]

    response = requests.post('https://www.netflix.com/nq/website/memberapi/vcd95e20d/pathEvaluator', headers=headers, params=params, cookies=cookies, data=data)
    return response.json()["jsonGraph"]["videos"].items()
