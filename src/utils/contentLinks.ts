interface ExternalContentLinkSource {
  id: string;
  data: {
    externalUrl?: string;
  };
}

type ExternalContentSection = 'news' | 'blogs';

export const getContentPrimaryHref = (
  item: ExternalContentLinkSource,
  section: ExternalContentSection
) => item.data.externalUrl ?? `/${section}/${item.id}/`;
