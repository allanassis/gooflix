const URL_NETFLIX = "https://www.netflix.com/nq/website/memberapi/vcd95e20d/pathEvaluator"
let netflixId = document.getElementById("NetflixId")
let secureNetflixId = document.getElementById("SecureNetflixId")
let query = document.getElementById("query")

const findButton = document.getElementById("btn_find")



const params = {
    'webp': 'true',
    'drmSystem': 'widevine',
    'isVolatileBillboardsEnabled': 'true',
    'routeAPIRequestsThroughFTL': 'false',
    'isTop10Supported': 'true',
    'isLocoSupported': 'false',
    'falcor_server': '0.1.0',
    'withSize': 'true',
    'materialize': 'true',
    'original_path': '/shakti/vcd95e20d/pathEvaluator'
};


const urlParams = new URLSearchParams(Object.entries(params));

findButton.addEventListener("click", () => {
    netflixId = netflixId.value
    secureNetflixId = secureNetflixId.value
    document.cookie = `SecureNetflixId=${secureNetflixId}`
    document.cookie = `NetflixId=${netflixId}`

    query = query.value
    data = [
        { 'path': `["search","byTerm","|${query}","titles",48,{{"from":0,"to":48}},"reference",["promoVideo","summary","title","titleMaturity","userRating","userRatingRequestId"]]` }
    ]

    Object.defineProperty(document, "referrer", {
        get: function () { return `https://www.netflix.com/search?q=${query}`; },
      });

    const headers = new Headers({
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'Origin': 'https://www.netflix.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Referer': `https://www.netflix.com/search?q=${query}`,
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    })

    fetch(`${URL_NETFLIX}?${urlParams}`, {
        method: "POST",
        body: JSON.stringify(data),
        credentials: 'include',
        headers,
    }).then((resp) => {
        resp.json(x => {
            console.log(X)
        })
    }).catch(err => console.log(err))
})