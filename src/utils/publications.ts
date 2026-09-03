interface PublicationLinkSource {
  id: string;
  data: {
    paperSite?: string;
    projectUrl?: string;
    paperUrl?: string;
  };
}

export const getPublicationPrimaryHref = (publication: PublicationLinkSource) => {
  if (publication.data.paperSite) return `/publications/${publication.id}/`;
  if (publication.data.projectUrl) return publication.data.projectUrl;
  if (publication.data.paperUrl) return publication.data.paperUrl;
  return `/publications/${publication.id}/`;
};

interface PublicationImageSource {
  data: {
    image?: string;
    researchAreas?: readonly string[];
  };
}

const researchAreaFallbackImages: Record<string, string> = {
  'multimodal-llms': '/assets/research/01-multimodal.webp',
  'agent': '/assets/research/02-few-shot.webp',
  'leo-communication': '/assets/research/03-vision-language.webp',
  'eo-applications': '/assets/research/04-remote-sensing.webp',
};

/**
 * Papers without a teaser figure fall back to the illustration of their first
 * research area, so the archive grid stays visually consistent.
 */
export const getPublicationImage = (publication: PublicationImageSource) =>
  publication.data.image
    ?? researchAreaFallbackImages[publication.data.researchAreas?.[0] ?? '']
    ?? '/assets/cards/publication-blue.png';
