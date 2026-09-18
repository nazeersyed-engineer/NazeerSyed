// ============================================================
// Resume Data — Single Source of Truth
// Update this file to reflect any changes to your resume.
// ============================================================

export const personal = {
  name: 'Nazeer Syed',
  title: 'Software Engineer & Data Analyst',
  location: 'Tenali, Andhra Pradesh',
  email: 'nazeersyed.engineer@gmail.com',
  phone: '+91 8919021989',
  github: 'https://github.com/nazeersyed-engineer',
  linkedin: 'https://www.linkedin.com/in/nazeersyed-engineer/',
  instagram: 'https://www.instagram.com/iam_nazeersyed/',
  portfolio: 'https://nazeersyed-engineer.github.io/NazeerSyed/',
  resumePdf: 'Resume/Nazeer_Resume.pdf',
  photo: 'images/MyPhoto.png',
  summary:
    'Data Analyst and Software Engineer with hands-on experience in Power BI, data visualization, dashboard development, DAX, Excel, SQL, and business reporting. Experienced in transforming raw data into interactive dashboards and actionable insights. Currently building production-grade applications using Salesforce, Next.js, GraphQL, and AWS at Streamforce Solutions.',
};

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Data Analytics & BI',
    icon: '📊',
    items: [
      'Power BI',
      'Tableau',
      'DAX',
      'Excel / CSV',
      'Data Visualization',
      'Data Cleaning',
    ],
  },
  {
    category: 'Programming & Query',
    icon: '💻',
    items: ['Python', 'SQL'],
  },
  {
    category: 'Data Processing',
    icon: '⚙️',
    items: ['Pandas', 'NumPy', 'ETL Pipelines'],
  },
  {
    category: 'Web & Frameworks',
    icon: '🌐',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'GraphQL'],
  },
  {
    category: 'Cloud & AWS',
    icon: '☁️',
    items: [
      'AWS Lambda',
      'Amazon DynamoDB',
      'AWS Cognito',
      'CloudWatch',
      'CloudFront',
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    items: [
      'Salesforce',
      'Git',
      'Microsoft Office',
      'Word',
      'Excel',
      'PowerPoint',
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  client?: string;
  bullets: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    company: 'Streamforce Solutions',
    role: 'Software Engineer',
    period: 'June 2025 – Present',
    client: 'Berlitz',
    bullets: [
      'Built and maintained features on Berlitz applications using Salesforce, Next.js, and GraphQL, working across front-end and integration layers.',
      'Developed serverless integrations and background processing with AWS Lambda, using DynamoDB for data storage and retrieval.',
      'Collaborated with cross-functional teams to design GraphQL schemas and Salesforce data models supporting client requirements.',
    ],
    tags: ['Salesforce', 'Next.js', 'GraphQL', 'AWS Lambda', 'DynamoDB'],
  },
];

export interface Project {
  name: string;
  description: string;
  details: string[];
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Blinkit Sales Analysis Dashboard',
    description:
      'Interactive Power BI dashboard analyzing Blinkit sales by product category, outlet type, size, and location — enabling data-driven retail insights.',
    details: [
      'Built KPIs and visualizations tracking total sales, item volume, average sales, and customer ratings.',
      'Enabled drill-through analysis by outlet type and geographic location.',
      'Transformed raw Excel data through Power Query for clean reporting.',
    ],
    tags: ['Power BI', 'DAX', 'Excel', 'Data Visualization'],
    github:
      'https://github.com/nazeersyed-engineer/PowerBI-Projects/tree/main/Blinkit-Analysis',
    featured: true,
  },
  {
    name: 'Chocolate Sales Analysis Dashboard',
    description:
      'Power BI dashboard tracking chocolate sales and shipments across products, countries, salespersons, and time periods to surface performance trends.',
    details: [
      'Created KPI cards and trend visualizations for product, country, and salesperson performance.',
      'Designed time-intelligence measures in DAX to support period-over-period comparisons.',
    ],
    tags: ['Power BI', 'DAX', 'Excel', 'Data Visualization'],
    github:
      'https://github.com/nazeersyed-engineer/PowerBI-Projects/tree/main/Chocolate-Sales',
  },
  {
    name: 'Insurance Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing insurance policies, premiums, claims, and customer segments to uncover actionable business insights.',
    details: [
      'Performed data cleaning and transformation of raw insurance CSV data.',
      'Built visualizations for policy and claim trends across customer segments.',
    ],
    tags: [
      'Power BI',
      'DAX',
      'Excel / CSV',
      'Data Cleaning',
      'Data Visualization',
    ],
    github:
      'https://github.com/nazeersyed-engineer/PowerBI-Projects/tree/main/insurance-dashboard',
  },
];

export interface Education {
  institution: string;
  degree: string;
  period?: string;
  grade?: string;
}

export const education: Education[] = [
  {
    institution: 'Chalapathi Institute of Technology',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'June 2020 – May 2024',
    grade: '7.6 CGPA',
  },
  {
    institution: 'NRI Junior College',
    degree: 'Intermediate — Mathematics, Physics, Chemistry (MPC)',
    period: 'June 2018 – March 2020',
    grade: '9.4 GPA',
  },
  {
    institution: 'Montessori E.M School, Tenali',
    degree: 'Secondary School Certificate (SSC)',
    period: 'Completed 2018',
    grade: '9.5 GPA',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    name: 'AWS Academy Graduate — AWS Academy Data Analytics',
    issuer: 'Amazon Web Services (AWS)',
    date: 'June 2023',
    link: 'https://www.credly.com/badges/47e61df7-f736-4e5d-bcc8-153656050840/public_url',
  },
];
