## Welcome to the GuideMe Repository

GuideMe project description goes here ...

### Project structure
- guideme-bl
	Contains the backend REST API based on the spring boot framework. It is necessary to have the **guideme-dev** also available and running (e.g containerized database). For a specific list of dependencies, refer to the readme inside the project.
- guideme-fe
	Contains the angular frontend application. For local enviroment the **guidme-bl** and **guideme-dev** should run. This will be further advised in the future. For a specific list of dependencies, refer to the the readme inside the project.
- guideme-gui
	Contains the frontend application based on Angular. For a specific list of dependencies, refer to the readme inside the project.
- guideme-dev
	Contains any environmental dependency for the project (bl/gui).
