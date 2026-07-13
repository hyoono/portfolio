const XP_IMAGE_ASSETS = [
  "/xp-assets/bliss.jpg",
  "/xp-assets/icons/windows-flag.svg",
  "/xp-assets/icons/my-documents.png",
  "/xp-assets/icons/my-computer.png",
  "/xp-assets/icons/ie.png",
  "/xp-assets/icons/outlook.png",
  "/xp-assets/icons/notepad-list.png",
  "/xp-assets/icons/notepad.png",
  "/xp-assets/icons/certificate.png",
  "/xp-assets/icons/pinball.png",
  "/xp-assets/icons/recycle-bin-empty.webp",
  "/xp-assets/icons/users.png",
  "/xp-assets/icons/folder.png",
  "/xp-assets/icons/folder-open.png",
  "/xp-assets/icons/printer.png",
  "/xp-assets/icons/shutdown.png",
  "/xp-assets/icons/volume.png",
  "/xp-assets/icons/network.png",
  "/xp-assets/icons/error.png",
] as const;

const XP_AUDIO_ASSETS = ["/xp-assets/audio/windows-xp-startup.mp3"] as const;

let preloadStarted = false;

function addPreloadLink(
  href: string,
  as: "audio" | "image",
  type?: string
) {
  if (typeof document === "undefined") return;
  if (document.head.querySelector(`link[data-xp-preload="${href}"]`)) return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  link.dataset.xpPreload = href;
  if (type) link.type = type;
  document.head.appendChild(link);
}

function warmCache(href: string) {
  if (typeof window === "undefined" || !window.fetch) return;
  void fetch(href, { cache: "force-cache" }).catch(() => {});
}

function preloadImage(src: string) {
  const extension = src.split(".").pop()?.toLowerCase();
  const type =
    extension === "svg"
      ? "image/svg+xml"
      : extension === "webp"
        ? "image/webp"
        : extension === "jpg" || extension === "jpeg"
          ? "image/jpeg"
          : "image/png";

  addPreloadLink(src, "image", type);
  warmCache(src);

  if (typeof Image === "undefined") return;
  const image = new Image();
  image.decoding = "async";
  image.src = src;
  void image.decode?.().catch(() => {});
}

function preloadAudio(src: string) {
  addPreloadLink(src, "audio", "audio/mpeg");
  warmCache(src);

  if (typeof Audio === "undefined") return;
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = src;
  audio.load();
}

export function preloadXPAssets() {
  if (preloadStarted) return;
  preloadStarted = true;

  XP_IMAGE_ASSETS.forEach(preloadImage);
  XP_AUDIO_ASSETS.forEach(preloadAudio);
}
