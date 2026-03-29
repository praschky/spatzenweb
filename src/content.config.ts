import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string().optional(),
  meta_title: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean(),
};

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      testimonial_image: z.string().optional(),
      button_solid: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      button_link: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      badge: z.object({
        enable: z.boolean(),
        label: z.string(),
        images: z.array(z.string()),
      }),
      partners: z.object({ title: z.string(), logos: z.array(z.string()) }),
      media_section: z.object({
        enable: z.boolean(),
        label: z.string(),
        url: z.string(),
      }),
      impact_metrics: z.object({
        label: z.string(),
        description: z.string(),
        counter: z.object({
          count: z.string(),
          count_suffix: z.string(),
          count_prefix: z.string(),
          count_duration: z.number(),
        }),
        team: z.array(z.string()),
        secondary_labels: z.array(z.string()),
      }),
    }),
    promotions: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      badge: z.object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string(),
        bg_color: z.string(),
      }),
      cards: z.array(
        z.object({
          title: z.string(),
          /** When set, shown in the large heading area instead of the animated counter */
          display_heading: z.string().optional(),
          list: z.array(z.string()),
          counter: z.object({
            count: z.string(),
            count_suffix: z.string(),
            count_prefix: z.string(),
            count_duration: z.number(),
          }),
          button: z.object({ enable: z.boolean(), link: z.string() }),
          image: z.string().optional(),
        }),
      ),
    }),
    impact_results: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      badge: z.object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string(),
        bg_color: z.string(),
      }),
      results: z.array(
        z.object({
          title: z.string(),
          subtitle: z.string(),
          image: z.string(),
          image_2: z.string().optional(),
          description: z.string(),
          button: z
            .object({
              enable: z.boolean(),
              label: z.string(),
              link: z.string(),
            })
            .optional(),
          metrics: z.array(
            z.object({
              title: z.string(),
              /** When set, shown as plain text instead of CountUp (e.g. ~5, 2007) */
              static_value: z.string().optional(),
              counter: z.object({
                count: z.string(),
                count_suffix: z.string(),
                count_prefix: z.string(),
                count_duration: z.number(),
              }),
              icon: z.string(),
              bg_color: z.string(),
            }),
          ),
        }),
      ),
    }),
  }),
});

// about collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    ...commonFields,
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string().optional(),
      bg_color: z.string(),
    }),
    button: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    brands: z.object({
      enable: z.boolean(),
      title: z.string().optional(),
      logos: z.array(z.string()),
    }),
    features: z.array(
      z.object({
        title: z.string().optional(),
        icon: z.string().optional(),
        description: z.string().optional(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
    numbers_banner: z.object({
      enable: z.boolean(),
      title: z.string().optional(),
      description: z.string().optional(),
      badge: z.object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string().optional(),
        bg_color: z.string(),
      }),
      metrics: z.array(
        z.object({
          title: z.string().optional(),
          counter: z.object({
            count: z.string(),
            count_suffix: z.string(),
            count_prefix: z.string(),
            count_duration: z.number(),
          }),
        }),
      ),
    }),
    impact_results: z.object({
      enable: z.boolean(),
      results: z.array(
        z.object({
          title: z.string().optional(),
          subtitle: z.string(),
          image: z.string().optional(),
          image_2: z.string(),
          description: z.string().optional(),
          button: z
            .object({
              enable: z.boolean(),
              label: z.string(),
              link: z.string(),
            })
            .optional(),
          metrics: z
            .array(
              z.object({
                title: z.string(),
                counter: z.object({
                  count: z.string(),
                  count_suffix: z.string(),
                  count_prefix: z.string(),
                  count_duration: z.number(),
                }),
                image: z.string(),
                bg_color: z.string(),
              }),
            )
            .optional(),
        }),
      ),
    }),
    team: z.object({
      enable: z.boolean(),
      title: z.string().optional(),
      description: z.string().optional(),
      badge: z.object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string().optional(),
        bg_color: z.string(),
      }),
      members: z.array(
        z.object({
          name: z.string(),
          image: z.string().optional(),
          designation: z.string(),
        }),
      ),
    }),
  }),
});

// contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    ...commonFields,
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string(),
      bg_color: z.string(),
    }),
    cta_banners: z.array(
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        banner_color: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
    contact_form_intro: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      badge: z.object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string(),
        bg_color: z.string(),
      }),
      highlights: z.array(
        z.object({
          title: z.string().optional(),
          icon: z.string(),
          description: z.string().optional(),
        }),
      ),
    }),
  }),
});

// Programs Collection schema
const programsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/programs" }),
  schema: z.object({
    ...commonFields,
    end_date: z.coerce.date().optional(),
    categories: z.array(z.string()).default(() => ["others"]).optional(),
    goal: z.string().optional(),
    raised: z.string().optional(),
    featured: z.boolean().optional(),
    badge: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string(),
        bg_color: z.string(),
      })
      .optional(),
    all_programs: z
      .object({
        title: z.string(),
        description: z.string(),
        badge: z.object({
          enable: z.boolean(),
          label: z.string(),
          icon: z.string(),
          bg_color: z.string(),
        }),
      })
      .optional(),
    button: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    numbers_banner: z
      .object({
        enable: z.boolean(),
        title: z.string().optional(),
        description: z.string().optional(),
        badge: z.object({
          enable: z.boolean(),
          label: z.string(),
          icon: z.string().optional(),
          bg_color: z.string(),
        }),
        metrics: z.array(
          z
            .object({
              title: z.string().optional(),
              static_value: z.string().optional(),
              counter: z
                .object({
                  count: z.string(),
                  count_suffix: z.string(),
                  count_prefix: z.string(),
                  count_duration: z.number(),
                })
                .optional(),
            })
            .refine(
              (m) =>
                (m.static_value != null && m.static_value.length > 0) ||
                m.counter != null,
              { message: "Program metric needs static_value or counter" },
            ),
        ),
      })
      .optional(),
  }),
});

// Blog collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    ...commonFields,
    badge: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string(),
        bg_color: z.string(),
      })
      .optional(),
    categories: z.array(z.string()).default(() => ["others"]),
  }),
});

// Reviews collection schema
const reviewsCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/reviews" }),
  schema: z.object({
    ...commonFields,
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string(),
      bg_color: z.string(),
    }),
  }),
});

// Teams collections schema
const teamsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/teams" }),
  schema: z.object({
    ...commonFields,
    designation: z.string().optional(),
    isLeadTeam: z.boolean().optional(),
    team_1: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
    team_2: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
    badge: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string(),
        bg_color: z.string(),
      })
      .optional(),
  }),
});

// Donation page schema
const donationCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/donation" }),
  schema: z.object({
    ...commonFields,
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string(),
      bg_color: z.string(),
    }),
    packages: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      badge: z.object({
        enable: z.boolean(),
        label: z.string(),
        icon: z.string(),
        bg_color: z.string(),
      }),
      plans: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          amount: z.string(),
          billed_per: z.string(),
          button: z.object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          }),
        }),
      ),
    }),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string(),
      bg_color: z.string(),
    }),
  }),
});

// primary CTA Section
const ctaPrimarySectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action-primary.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    facts: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
        icon: z.string(),
      }),
    ),
    media_section: z.object({
      enable: z.boolean(),
      label: z.string(),
      url: z.string(),
    }),
    dialogues: z.array(z.string()),
  }),
});

// call to action secondary collection schema
const ctaSecondarySectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action-secondary.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    buttons: z.array(
      z.object({ enable: z.boolean(), label: z.string(), link: z.string() }),
    ),
    facts: z
      .object({
        title: z.string().optional(),
        content: z.string().optional(),
        image: z.string().optional(),
        team: z.array(z.string()).optional(),
        dialogues: z.array(z.string()).optional(),
        counter: z
          .object({
            count: z.string(),
            count_suffix: z.string(),
            count_prefix: z.string(),
            count_duration: z.number(),
          })
          .optional(),
      })
      .optional(),
  }),
});

// Call to Action Tertiary collection schema
const ctaTertiaryCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action-tertiary.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

// quaternary CTA Section
const ctaQuaternarySectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action-quaternary.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    banner_color: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

// success numbers section
const successNumbersCollection = defineCollection({
  loader: glob({
    pattern: "success-numbers.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string(),
      bg_color: z.string(),
    }),
    facts: z.array(
      z.object({
        title: z.string(),
        number: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    ),
  }),
});

// features section collection
const featuresSectionCollection = defineCollection({
  loader: glob({
    pattern: "features-section.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string().optional(),
    description: z.string().optional(),
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string().optional(),
      bg_color: z.string(),
    }),
    features: z.array(
      z.object({
        title: z.string().optional(),
        icon: z.string().optional(),
        description: z.string().optional(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

// review collections schema
const reviewsSectionCollection = defineCollection({
  loader: glob({
    pattern: "reviews-section.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string().optional(),
    description: z.string().optional(),
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string().optional(),
      bg_color: z.string(),
    }),
    reviews: z.array(
      z.object({
        name: z.string(),
        avatar: z.string().optional(),
        designation: z.string(),
        content: z.string(),
        ratings: z.number(),
        company_logo: z.string().optional(),
      }),
    ),
  }),
});

// FAQs section
const faqsSectionCollection = defineCollection({
  loader: glob({ pattern: "faqs.{md,mdx}", base: "src/content/sections" }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string().optional(),
    description: z.string().optional(),
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string().optional(),
      bg_color: z.string(),
    }),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
    list: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
});

// Programs Homepage section schema
const programsHomepageCollection = defineCollection({
  loader: glob({
    pattern: "programs-homepage-section.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string().optional(),
    description: z.string().optional(),
    badge: z.object({
      enable: z.boolean(),
      label: z.string(),
      icon: z.string().optional(),
      bg_color: z.string(),
    }),

    meta_title: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  // Pages
  homepage: homepageCollection,
  programs: programsCollection,
  blog: blogCollection,
  pages: pagesCollection,
  about: aboutCollection,
  contact: contactCollection,
  reviews: reviewsCollection,
  teams: teamsCollection,
  donation: donationCollection,

  // sections
  ctaPrimarySection: ctaPrimarySectionCollection,
  successNumbers: successNumbersCollection,
  featuresSection: featuresSectionCollection,
  ctaTertiary: ctaTertiaryCollection,
  ctaSecondarySection: ctaSecondarySectionCollection,
  ctaQuaternary: ctaQuaternarySectionCollection,
  reviewsSection: reviewsSectionCollection,
  faqsSection: faqsSectionCollection,
  programsHomepage: programsHomepageCollection,
};
