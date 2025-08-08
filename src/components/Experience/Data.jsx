const experienceData = [
  {
    date: 'January 2025 – Present',
    title: 'Constructor',
    trademark: 'CONSTRUCTOR',
    subtitle: 'Platform Engineer — Remote',
    responsibilities: [
      'Involved in core platform engineering efforts with a strong focus on infrastructure-as-code, cloud automation, and internal tooling to improve scalability, reliability, and developer productivity.',
      'Led the design and rollout of a unified, fault-tolerant caching layer decoupled from core business services, designed to serve as a critical data preservation and fallback mechanism during infrastructure or application-wide failures.',
      'Successfully delivered an internal event-driven architecture using AWS EventBridge, enabling low-friction communication between microservices and simplifying onboarding of new producers and consumers.'
    ],
  },
  {
    date: 'July 2022 – January 2025',
    title: 'Superbet',
    trademark: 'SUPERBET',
    subtitle: 'Software Development Engineer',
    responsibilities: [
      'Worked as a backend developer at Superbet, where I was involved in designing and building microservices across different domains. My focus was on creating robust, scalable systems that can handle the demands of a rapidly growing betting platform.',
      'One of my biggest contributions has been helping design and implement a new betting platform architecture. I worked on integrating generic SDK plugins to streamline parallel bet processing, making it easier to integrate services and improve efficiency.',
      'I’ve also played a role in securing our systems, personally identifying and resolving two critical exploits that had a financial cost to the company.',
      'In addition to development, I’ve managed the deployment of over 20 services as part of Superbet’s international expansion. This involved adapting everything from databases to message queues to ensure our architecture could meet the unique requirements of each new region.',
    ],
  },
  {
    date: 'July 2020 – July 2022',
    title: 'Autodesk',
    trademark: 'AUTODESK',
    subtitle: 'Software Development Engineer',
    responsibilities: [
      'At Autodesk, I was part of the team behind the world’s leading Product Lifecycle Management (PLM) software. My work primarily focused on improving the software’s scalability and distribution, which was critical given the global user base.',
      'Led an initiative to optimize data storage per user by implementing advanced compression techniques using existing libraries. This effort resulted in a 30% reduction in data transfer times, significantly enhancing the end-user experience by making the product more responsive and efficient.',
      'I also tackled the challenge of optimizing the user dashboard load time, where all project data, including nested directories, had to be loaded and calculated. By restructuring the data storage to aggregate and store key information at the root nodes of each project, I reduced the complexity of data retrieval. This optimization cut the dashboard loading time by 75%, significantly improving the user experience despite a slight increase in write operation overheads.',
    ],
  },
  {
    date: 'September 2021 – July 2023',
    title: 'Faculty of Electrical Engineering and Computing',
    trademark: 'FACULTY',
    subtitle: 'Master’s Degree in Computer Science',
    responsibilities: [
      'Explored the use of Generative Adversarial Networks (GANs) for colorizing black and white images. Analyzed the complex architecture of GANs and conducted iterative experimentation with various loss functions and optimization techniques to refine the model.',
      'Completed a research-driven thesis and a set of advanced courses in machine learning systems, deep learning, and distributed computing, emphasizing reproducibility and rigorous experimentation.'
    ],
  },
  {
    date: 'September 2018 – July 2021',
    title: 'Faculty of Electrical Engineering and Computing',
    trademark: 'FACULTY',
    subtitle: 'Bachelor’s Degree in Computer Science',
    responsibilities: [
      'Developed and implemented a face recognition algorithm based on Adam Geitgey\'s approach. Achieved 100% recognition accuracy in controlled environments, demonstrating robustness against variations in light, contrast, and face poses.',
      'Built a strong foundation in computer science fundamentals including algorithms, data structures, operating systems, networks, and software engineering practices through hands-on projects.'
    ],
  },
  {
    date: 'July 2018 – December 2018',
    title: 'Infinum Academy',
    trademark: 'INFINUM',
    subtitle: 'Android Developer',
    responsibilities: [
      'Completed a comprehensive program in Android development, focusing on Kotlin and Java, and acquired hands-on experience in mobile application development.',
    ],
  },
];

export default experienceData;