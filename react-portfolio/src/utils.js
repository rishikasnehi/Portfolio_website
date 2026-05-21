export const getImageUrl = (path) => {
    // Resolve static assets from the site root. When `assets` is used as Vite's
    // `publicDir`, its subfolders are copied to the dist root, so use an
    // absolute path starting at `/` for both dev and production.
    return new URL(`/${path}`, window.location.href).href;
};