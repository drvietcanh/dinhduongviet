"""Fetch variable font CSS from Google Fonts."""
import re, requests

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
      "AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/120.0.0.0 Safari/537.36")

# Inter as variable font
url = "https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
r = requests.get(url, headers={"User-Agent": UA})
print("=== Inter CSS ===")
print(r.text[:2000])

print("\n\n=== Noto Sans CSS ===")
url2 = "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400..700&display=swap"
r2 = requests.get(url2, headers={"User-Agent": UA})
print(r2.text[:2000])
