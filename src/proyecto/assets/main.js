const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCat3TGMtVqIbOFHVD0PoYyQ&part=snippet%2Cid&order=date&maxResults=10';

const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8445debe8emshb86bdf00e2bfd37p1aa228jsn0412312e15a1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi, options) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//Supuestamente con este código, escrito de esta forma, una vez que el navegador llega a esta parte de llama automáticamente a la función que necesitamos que corra 

(async () => {
  try {
    const videos = await fetchData(API, options);
    let view = `${videos.items.map(item => 
        `<div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
            </div>
    
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${item.snippet.title}
                </h3>
            </div>
        </div>`
    ).slice(0,4).join('')}`
    content.innerHTML = view;
    console.log(view);
    
  } catch (error) {
    console.log(error);
  }
}) ();