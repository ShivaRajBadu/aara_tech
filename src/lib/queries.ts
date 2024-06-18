export const heroSectionQuery = `{
  heroSectionCollection {
    items {
      sys {
        id
      }
      title
      subtitle
      backgroundImage {
        url
      }
    }
  }
}
`;
export const clientLogoSection = `{
  clientLogosSectionCollection {
    items {
      sys {
        id
      }
      title
      websiteLink
      clientLogo {
        url
      }
    }
  }
}
`;
