export interface Image {
  _id: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
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
}

export interface Technology {
  _id: string;
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill {
  _id: string;
  _type: "skill";
  image: Image;
  progress: number;
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
  summary: string[];
  technologies: Technology[];
}

export interface Social {
  _id: string;
  _type: "social";
  title: string;
  url: string;
}
