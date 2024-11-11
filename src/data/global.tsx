import { new1 } from "@/assets";
import { image } from "framer-motion/m";

export const newsArticles = [
  {
    title: "New Economic Policies Boost Small Businesses",
    slug: "new-economic-policies-boost-small-businesses",
    banner: new1,
    contentSection: [
      {
        content: `
          <p>The government recently introduced new policies aimed at helping small businesses 
          thrive in today’s competitive market. These policies are expected to provide tax 
          breaks, reduced interest rates, and more resources for entrepreneurs.</p>
          
          <h2>Impact on Local Markets</h2>
          <p>Local businesses are seeing an increase in revenue and job creation. The 
          <strong>Ministry of Economy</strong> predicts continued growth in the sector 
          over the coming months.</p>
          
          <p>In an interview, the spokesperson stated, "We are committed to fostering an 
          environment where small businesses can flourish."</p>
        `,
      },
      {
        image: new1,
      },
      {
        content: `
        <p>The government recently introduced new policies aimed at helping small businesses 
          thrive in today’s competitive market. These policies are expected to provide tax 
          breaks, reduced interest rates, and more resources for entrepreneurs.</p>
          `,
      },
    ],
    excerpt:
      "New policies offer tax breaks and resources for small businesses, boosting local economies.",
    category: ["Business", "Economy"],
    tags: ["Economy", "Small Business", "Policy"],
    author: {
      name: "Jane Doe",
      profileImage: "jane_doe_profile.jpg",
    },
    publishedDate: "2023-11-09T14:30:59.123Z",
    views: 100,
  },
];
