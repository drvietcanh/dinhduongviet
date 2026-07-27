// Favorites utility — lưu thực phẩm yêu thích vào localStorage
// Dùng chung cho tất cả tools có search thực phẩm

// Key
var FAV_KEY = "ddv-favs-v1";

type FavoriteItem = {
  slug?: string;
  id?: string;
  [key: string]: unknown;
};

type FavoriteApi = {
  get: typeof getFavs;
  toggle: typeof toggleFav;
  is: typeof isFav;
  sort: typeof sortResults;
  star: typeof favStarHtml;
  attach: typeof attachFavListeners;
};

declare global {
  interface Window {
    __fav: FavoriteApi;
  }
}

// Get favorites
function getFavs() {
  try {
    var raw = localStorage.getItem(FAV_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

// Toggle a food id in favorites
function toggleFav(id: string) {
  var favs = getFavs();
  var idx = favs.indexOf(id);
  if (idx === -1) {
    favs.unshift(id); // newest first
  } else {
    favs.splice(idx, 1);
  }
  try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch(e) {}
  return favs.indexOf(id) !== -1;
}

// Check if favorited
function isFav(id: string) {
  return getFavs().indexOf(id) !== -1;
}

// Render favorites search helper: show favorite items first in search results
// foods: array of food objects with .slug or .id
function sortResults(results: FavoriteItem[], foods?: FavoriteItem[]) {
  void foods;
  var favs = getFavs();
  if (favs.length === 0) return results;
  var favResults: FavoriteItem[] = [];
  var otherResults: FavoriteItem[] = [];
  results.forEach(function(r: FavoriteItem) {
    var id = r.slug || r.id;
    if (favs.indexOf(id) !== -1) favResults.push(r);
    else otherResults.push(r);
  });
  return favResults.concat(otherResults);
}

// Render a star button HTML (inline)
function favStarHtml(id: string, active: boolean) {
  return '<span class="fav-star" data-favid="'+id+'" style="cursor:pointer;font-size:1.1rem;user-select:none;" title="'+(active?'Bỏ yêu thích':'Yêu thích')+'">'+(active?'⭐':'☆')+'</span>';
}

// Attach click listeners for all .fav-star elements
function attachFavListeners() {
  document.querySelectorAll<HTMLElement>('.fav-star').forEach(function(el) {
    el.addEventListener('click', function(this: HTMLElement, e) {
      e.stopPropagation();
      var id = this.dataset.favid;
      if (!id) return;
      var nowFav = toggleFav(id);
      this.innerHTML = nowFav ? '⭐' : '☆';
      this.title = nowFav ? 'Bỏ yêu thích' : 'Yêu thích';
    });
  });
}

// Expose globally
window.__fav = {
  get: getFavs,
  toggle: toggleFav,
  is: isFav,
  sort: sortResults,
  star: favStarHtml,
  attach: attachFavListeners,
};

export {};
