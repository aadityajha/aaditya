
export const siteConfig = {
  name: "Aaditya Jha",
  title: "Aaditya Jha | MBBS Student, Community Health & Projects",
  description:
    "The personal portfolio of Aaditya Jha, an MBBS student in Nepal, documenting community health projects, learning, and ideas for meaningful impact.",
  url: "https://aaditya-jha.com.np",
  email: "hi@aaditya-jha.com.np",
  location: "Nepal",

  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/iaadityajha"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aadityajha"
    },
    {
      label: "Facebook",
      href: ""
    }
  ]
};

export const projects = [
  {
    slug: "community-health-diagnosis",
    acronym: "CHD",
    title: "Community Health Diagnosis",
    status: "Completed",
    statusType: "complete",
    category: "Community health",
    summary:
      "A community-focused academic project exploring health needs, local context, and the factors that shape wellbeing.",
    description:
      "Community Health Diagnosis is an opportunity to look beyond individual illness and understand health within a wider social and environmental context. This page documents the project's objectives, approach, observations, and learning as verified details are added.",
    focus: [
      "Community assessment",
      "Health needs",
      "Public-health learning"
    ],
    year: "MBBS · Third year",
    number: "01"
  },
  {
    slug: "family-health-education",
    acronym: "FHE",
    title: "Family Health Education",
    status: "In progress",
    statusType: "progress",
    category: "Health education",
    summary:
      "An ongoing project focused on family health awareness, accessible education, and practical health communication.",
    description:
      "Family Health Education centres on communicating health information in ways that are useful and understandable for families. This project page can grow as activities, educational resources, and verified outcomes become available.",
    focus: [
      "Health communication",
      "Family wellbeing",
      "Preventive health"
    ],
    year: "Currently underway",
    number: "02"
  }
] as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
] as const;
