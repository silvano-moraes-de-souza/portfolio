const GITHUB_USER = 'silvano-moraes-de-souza';

// Same SVG as docs/banner.svg in each repository, copied into public/banners
// so the site and the GitHub README show the same image.
export function bannerUrl(projeto) {
  return `/banners/${projeto.slug}.svg`;
}

export const GITHUB_PROFILE = `https://github.com/${GITHUB_USER}`;
