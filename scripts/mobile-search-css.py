raw = open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\tim-kiem.astro', encoding='utf-8').read()

# Add mobile-optimized CSS before </style>
css = '''
  @media (max-width: 600px) {
    .result-grid { grid-template-columns: 1fr; gap: 10px; }
    .result-card { padding: 12px; }
    .result-card h3 { font-size: 0.9rem; }
    .result-card p { font-size: 0.82rem; }
    .chip { padding: 6px 12px; font-size: 0.78rem; margin: 3px; }
    .search-box { padding: 8px 12px; font-size: 0.9rem; }
    .search-wrapper { padding: 0 10px; }
  }
'''
raw = raw.replace('</style>', css + '</style>', 1)
open(r'D:\openclaw\apps\dinh-duong-viet\src\pages\tim-kiem.astro', 'w', encoding='utf-8').write(raw)
print('Search mobile CSS added')
