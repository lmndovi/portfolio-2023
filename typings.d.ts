export interface Image {
  _id: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  [key: string]: any; // Add an index signature
}

export interface PageInfo {
  _id: string;
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  languages: Language[];
  technologies: Technology[];
}

export interface Language {
  _id: string;
  _type: "language";
  image: Image;
  title: string;
}

export interface Technology {
  _id: string;
  _type: "skill";
  image: Image;
  title: string;
}

export interface Skill {
  _id: string;
  _type: "skill";
  image: Image;
  title: string;
}

export interface Experience {
  _id: string;
  _type: "experience";
  company: string;
  companyImage: Image;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project {
  _id: string;
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  linkToRepo: string;
  summary: string[];
  technologies: Technology[];
}

export interface Social {
  _id: string;
  _type: "social";
  title: string;
  url: string;
}
