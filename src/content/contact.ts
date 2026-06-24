export type ContactPerson = {
  name: string;
  designation?: string;
  email?: string;
  image?: string;
};

export const contact = {
  hero: {
    eyebrow: "Contact Us",
    title: "Get in touch with our team.",
    intro: "Have questions or feedback? Our team is here.",
  },

  supervisor: {
      eyebrow: "Supervisor",
      person: {
        name: "Prof. Dulani Meedeniya",
        designation: "Supervisor",
        email: "dulanim@cse.mrt.ac.lk",
        image: "/images/team/dulani-meedeniya.webp",
      } satisfies ContactPerson,
  },

  team: {
    eyebrow: "Team",
    members: [
      {
        name: "Pulindu Ranaweera",
        designation: "Team Member",
        email: "pulindu.22@cse.mrt.ac.lk",
        image: "/images/team/pulindu-ranaweera.webp",
      },
      {
        name: "Randeepa Appuhami",
        designation: "Team Member",
        email: "randeepa.22@cse.mrt.ac.lk",
        image: "/images/team/randeepa-appuhami.webp",
      },
      {
        name: "Vihanga Munasinghe",
        designation: "Team Member",
        email: "vihangamunasinghe.22@cse.mrt.ac.lk",
        image: "/images/team/vihanga-munasinghe.webp",
      },
      {
        name: "Nimesh Chandula",
        designation: "Team Member",
        email: "nimesh.22@cse.mrt.ac.lk",
        image: "/images/team/nimesh-chandula.webp",
      }
    ] satisfies ContactPerson[],
  },

  department: {
    name: "University of Moratuwa",
    faculty: "Faculty of Engineering",
    department: "Department of Computer Science and Engineering",
    address: "Katubedda, Moratuwa 10400, Sri Lanka",
  },
} as const;
