import xml.etree.ElementTree as ET
from pathlib import Path

def test_sitemap_contains_pages():
    sitemap_path = Path(__file__).resolve().parents[1] / "sitemap.xml"
    tree = ET.parse(sitemap_path)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    locs = [elem.text for elem in tree.findall(".//sm:loc", ns)]
    assert "https://conde86projects.github.io/conde86labs.github.io/apoie.html" in locs
    assert "https://conde86projects.github.io/conde86labs.github.io/politica-de-privacidade.html" in locs
