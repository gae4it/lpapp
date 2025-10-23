export type SeoProps = {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: string;
    site?: string;
    title?: string;
    description?: string;
    image?: string;
  };
};
