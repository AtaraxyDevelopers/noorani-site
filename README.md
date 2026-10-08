# Noorani Website

Source for the [Noorani Browser website](https://nooranibrowser.com), built by [Ataraxy Developers](https://ataraxydevelopers.com).

The repository contains the product pages, feature descriptions, download information, support pages, and policy documents for Noorani. The browser application is maintained separately in [noorani-browser](https://github.com/AtaraxyDevelopers/noorani-browser).

## Repository structure

- `index.html` — product landing page
- `features.html`, `download.html`, `docs.html`, `faq.html` — product information and guidance
- `about.html`, `contact.html`, `press.html`, `brand.html` — company and project information
- `privacy.html`, `security.html`, `terms.html`, `cookies.html` — policy pages
- `assets/` — styles, scripts, images, and fonts

## Preview locally

Clone the repository and serve it with a local static server:

```sh
git clone https://github.com/AtaraxyDevelopers/noorani-site.git
cd noorani-site
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000` in your browser. This previews the checked-in pages; it does not publish them to the live website.

## Changes and feedback

Keep changes focused and check affected links and layouts at desktop and mobile widths. Include screenshots for visible changes. For a bug report, describe the affected page, browser, and steps to reproduce.

For product downloads, use [nooranibrowser.com/download](https://nooranibrowser.com/download). Public issues are for website feedback; private support requests and security concerns should follow the channels on the website.

## Deployment

Live deployment is handled by the maintainers. Publishing a commit to this repository does not by itself confirm that the production website has been updated. Connection details and credentials belong in private operational documentation.
