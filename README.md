# Welcome to Tech_A

At Tech_A, our group name reflects our passion for combining cutting-edge technology and the incredible potential of artificial intelligence (AI). 
The "Tech" signifies our dedication to leveraging advancements in technology, particularly in the realms of web and mobile application development. 
Meanwhile, the "A" signifies our immersion into the realm of AI.
By harnessing the power of AI within technological frameworks, we aim to pioneer innovative approaches that not only tackle problems efficiently but also pave the way for transformative advancements in various fields.

## Tech_A git flow strategy
![Tech_A_git_flow_strategy](/uploads/833ad4a968aafccc210d6db770f477ac/Tech_A_git_flow_strategy.png)

## Tech_A git flow scenario instruction 
[Tech_A_git-flow_scenario.pdf](/uploads/4df2d0637f0809bd28931498da44fd43/Tech_A_git-flow_scenario.pdf)

## Project Setup/Installation
  1. Prerequisites:
      + Git installed: Ensure you have Git installed on your system. You can check by running git --version in your terminal. If not installed, download it from 
          https://git-scm.com/downloads.
      + Node.js and npm installed: Node.js is required for npm, the package manager used in this project. Download and install the latest LTS (Long-Term Support) version from        https://nodejs.org/en.

  2. Steps:
      + Clone the Repository:
        - Open a terminal or command prompt and navigate to the directory where you want to clone the project.
        - Use the git clone command followed by the URL of the remote repository you cloned from (e.g., GitHub, GitLab):
      + Install Dependencies:
        - Navigate to the cloned project directory
        - Since node_modules is likely excluded in the .gitignore file, you'll need to reinstall the project's dependencies using npm:
          npm install
        - This command downloads and installs all the necessary packages listed in the package.json file, including Tailwind CSS and any other project dependencies.

      + Run/Build the project
        - If your project uses a build process to optimize and compile assets (usually for production environments), check the package.json file for a script named build or similar. If present, run: 
          npm run build
      + View the Website:
        - Open the index.html file in your text editor or code editor.
        - Right-click on the index.html file and select "Open with" or "Open in Browser" (depending on your operating system).