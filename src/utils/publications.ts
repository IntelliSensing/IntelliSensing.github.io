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
