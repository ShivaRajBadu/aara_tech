// async function fetchGraphQL(query: any, preview = false) {
//   return fetch(
//     `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
//         // Contentful content or draft content
//         Authorization: `Bearer ${
//           preview
//             ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
//             : process.env.CONTENTFUL_ACCESS_TOKEN
//         }`,
//       },
//       body: JSON.stringify({ query }),
//       // Associate all fetches for articles with an "articles" cache tag so content can
//       // be revalidated or updated from Contentful on publish
//       next: { tags: ["heroData"] },
//     }
//   ).then((response) => response.json());
// }

import QLclient from "./GraphqlClient";
import { heroSectionQuery, clientLogoSection } from "./queries";

async function getData(params: string) {
  return QLclient.request(params);
}

export async function getHeroSectionData() {
  const response: any = await getData(heroSectionQuery);

  return response.heroSectionCollection.items[0];
}

export async function getClientsLogos() {
  const response: any = await getData(clientLogoSection);
  return response.clientLogosSectionCollection.items;
}
