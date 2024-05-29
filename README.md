# Welcome to Tech_A

At Tech_A, our group name reflects our passion for combining cutting-edge technology and the incredible potential of artificial intelligence (AI). 
The "Tech" signifies our dedication to leveraging advancements in technology, particularly in the realms of web and mobile application development. 
Meanwhile, the "A" signifies our immersion into the realm of AI.
By harnessing the power of AI within technological frameworks, we aim to pioneer innovative approaches that not only tackle problems efficiently but also pave the way for transformative advancements in various fields.

## Tech_A git flow strategy
![Tech_A_git_flow_strategy](/uploads/833ad4a968aafccc210d6db770f477ac/Tech_A_git_flow_strategy.png)

## Tech_A git flow scenario instruction 
[Tech_A_git-flow_scenario.pdf](/uploads/4df2d0637f0809bd28931498da44fd43/Tech_A_git-flow_scenario.pdf)

# Yonex Cloning Project

This project aims to clone the Yonex website to practice and demonstrate front-end development skills. The project includes a responsive design, navigation, and several interactive elements, mimicking the look and feel of the official Yonex website. Tailwind CSS is used for styling, and web components are used for creating reusable UI elements. Dynamic data is loaded to enhance interactivity.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Conclusion](#conclusion)

## Project Overview
The Yonex Cloning Project is a front-end development exercise focused on replicating the design and functionality of the Yonex website. This project leverages Tailwind CSS for styling, web components for modular UI elements, and dynamic data for enhanced interactivity. It is intended for educational purposes, helping developers practice modern web development techniques.

## Features
- Responsive design using Tailwind CSS
- Navigation bar with dropdown menus
- Interactive product display
- Animations and transitions
- Modular and reusable web components
- Dynamic data loading

## Technologies Used
- HTML
- Tailwind CSS
- JavaScript
- Web Components
- [Additional library used for Animation and transition: https://michalsnik.github.io/aos/]

## Installation
To set up this project locally, follow these steps:

1. **Clone the Repository**:
    - Open a terminal or command prompt and navigate to the directory where you want to clone the project.
    - Use the `git clone` command followed by the URL of the remote repository you cloned from GitLab:
      ```bash
      git clone https://git.clp.kr/anbschool/2nd/tech-a-project.git
      ```
2. **Install Dependencies**:
    - Navigate to the cloned project directory:
      ```bash
      cd 2nd-mission
      ```
    - Since `node_modules` is likely excluded in the `.gitignore` file, you'll need to reinstall the project's dependencies using npm:
      ```bash
      npm install
      ```
    - This command downloads and installs all the necessary packages listed in the `package.json` file, including Tailwind CSS and any other project dependencies.

3. **Run/Build the Project**:
    - Run the following cmd:
      ```bash
      npm run build
      ```

4. **View the Website**:
    - Open the `index.html` file in your text editor or code editor.
    - Right-click on the `index.html` file and select "Open with" or "Open in Browser" (depending on your operating system).

## Usage
- Navigate through the website using the navigation bar.
- Explore different sections to see the replicated design and functionality.
- Interact with product displays and dropdown menus to see animations and transitions.
- Observe how dynamic data is loaded and displayed using web components.

## Project Structure
```plaintext
2nd-mission/
├── assets/
│   ├── images/
│       └── [image files]
|   ├── css/
│       └── [styles files]
|    ├── js/
│       └── [scripts files]
|       └── components/
|            └── [components files]
|       └── data/
|            └── [data files]
├── public/
│   ├── about-us.html
│   ├── index.html
│   ├── athlete-profile.html
│   ├── detail-badminton.html
│   └── news.html
├── src/
│   ├── input.css
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## Contributing
Contributions to this project were made by the following team members:

1. **Prak Sreypov: Project Manager**
    - Oversaw project planning, execution, and timeline management.
    - Coordinated tasks and facilitated communication between team members.
    - Ensured project goals were met and provided guidance throughout the process.
    - Developed front-end components and contributed to overall project development.

2. **Phok Keomonnyratanak: UX/UI Manager & Developer**
    - Led UX/UI design efforts, ensuring a cohesive and user-friendly interface.
    - Developed front-end components and contributed to overall project development.
    - Ensured design consistency and alignment with project objectives.
    - Built modular web components for Athlete Page.

3. **Khun Malen: QA Manager & Developer**
    - Managed quality assurance processes, including testing and bug tracking.
    - Contributed to project development while maintaining a focus on quality.
    - Ensured adherence to coding standards and addressed any issues identified during testing.
    - Built modular web components for Product Review Page.


4. **Samon Rotha: QA and Developer**
    - Conducted thorough testing of project components to identify defects and issues.
    - Collaborated with developers to resolve bugs and ensure code quality.
    - Participated in development tasks to contribute to project progress while maintaining a focus on quality assurance.
    - Built modular web components for About Page.

5. **Sreang Lyhour: Developer & UX/UI Designer**
    - Contributed to both development and UX/UI design aspects of the project.
    - Implemented features and functionality while adhering to design guidelines.
    - Designed and implemented the navigation bar with dropdown menus.
    - Built modular web components for the header, footer... .

6. **Ly Diyamong: Developer & UX/UI Designer**
    - Contributed to both development and UX/UI design aspects of the project.
    - Implemented features and functionality while adhering to design guidelines.
    - Developed the product detail display section with interactive elements.

7. **Rorn Bunthong: Developer & UX/UI Designer**
    - Contributed to both development and UX/UI design aspects of the project.
    - Implemented features and functionality while adhering to design guidelines.
    - Responsible for sourcing, selecting, and curating news articles and stories for the news page.

8. **Tep Chounan: Developer & UX/UI Designer**
    - Contributed to both development and UX/UI design aspects of the project.
    - Implemented features and functionality while adhering to design guidelines.
    - Built modular web components for Athlete profile information.

## Acknowledgments
Inspired by the official Yonex website.
Thanks to all contributors and resources that helped in the creation of this project.

## Conclusion
This project successfully replicates the Yonex website, providing a practical way to hone front-end development skills. By adhering to a clear project structure and using modern web technologies like Tailwind CSS and web components, the project demonstrates effective use of responsive design, modularity, and dynamic data handling. We welcome contributions and feedback to improve this project further. Thank you for exploring and contributing to the Yonex Cloning Project!